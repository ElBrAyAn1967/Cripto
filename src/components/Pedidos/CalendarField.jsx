import React, { useState } from "react";
import Calendar from "react-calendar";
import {
  getAvailabilityLevel,
  getAvailabilityColor,
  getAvailabilityTooltip
} from "../../utils/calendarAvailability";

const CalendarField = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    onChange({ target: { name: "delivery_date", value: date.toISOString().split("T")[0] } });
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const level = getAvailabilityLevel(date);
      if (level === "none") return ""; // fechas pasadas sin clase
      return `relative rounded-md text-sm font-medium
        ${level === "low" ? "bg-green-600/20 text-primaryText" : ""}
        ${level === "medium" ? "bg-yellow-500/20 text-primaryText" : ""}
        ${level === "high" ? "bg-red-500/20 text-primaryText" : ""}
        hover:bg-bgDark3Hover`;
    }
    return "";
  };

  return (
    <div>
      <label className="text-sm text-center font-medium mb-2 block text-primaryText">
        Fecha de entrega deseada
      </label>

      <div className="rounded-lg overflow-hidden border border-mainBorder bg-bgDark2 p-2">
        <Calendar
          value={selectedDate}
          onChange={handleChange}
          minDate={new Date()}
          tileClassName={tileClassName}
          tileDisabled={({ date }) => getAvailabilityLevel(date) === "none"}
          tileContent={({ date, view }) => {
            if (view !== "month") return null;
            const level = getAvailabilityLevel(date);
            if (level === "none") return null; // sin indicador si es pasada
            return (
              <div
                title={getAvailabilityTooltip(level)}
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 rounded-full"
                style={{ backgroundColor: getAvailabilityColor(level) }}
              />
            );
          }}
          className="w-full text-center text-primaryText [&_.react-calendar__navigation]:bg-bgDark3 [&_.react-calendar__tile]:bg-bgDark2 [&_.react-calendar__tile--now]:bg-primaryColor/40"
        />
      </div>

      {/* Estado actual */}
      <p className="text-sm text-secondaryText mt-2">
        {(() => {
          const level = getAvailabilityLevel(selectedDate);
          if (level === "low") return "✔ Alta disponibilidad (5 días o más)";
          if (level === "medium") return "⚠ Disponibilidad media (2-3 días)";
          if (level === "high") return "✖ No disponible";
          return "Sin información de disponibilidad";
        })()}
      </p>

      {/* Leyenda */}
      <div className="flex items-center gap-4 text-sm text-secondaryText mt-4">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#4ade80] rounded-full" /> 5+ días</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#facc15] rounded-full" /> 2-3 días</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#f87171] rounded-full" /> Hoy o mañana</div>
      </div>
    </div>
  );
};

export default CalendarField;
