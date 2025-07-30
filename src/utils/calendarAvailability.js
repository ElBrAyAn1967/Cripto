export const getAvailabilityLevel = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selected = new Date(date);
  selected.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil((selected - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "none";      // fechas pasadas: sin color
  if (diffDays <= 1) return "high";     // hoy o mañana
  if (diffDays <= 3) return "medium";   // 2-3 días
  if (diffDays >= 5) return "low";      // 5+ días
  return "none";                        // día 4 sin color
};

export const getAvailabilityColor = (level) => {
  switch (level) {
    case "low":
      return "#4ade80"; // verde
    case "medium":
      return "#facc15"; // amarillo
    case "high":
      return "#f87171"; // rojo
    default:
      return "transparent"; // sin color visible
  }
};

export const getAvailabilityTooltip = (level) => {
  switch (level) {
    case "low":
      return "Alta disponibilidad (5+ días)";
    case "medium":
      return "Disponibilidad media (2-3 días)";
    case "high":
      return "Demasiado pronto (hoy o mañana)";
    default:
      return "Sin información";
  }
};
