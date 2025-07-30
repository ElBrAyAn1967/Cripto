// ColorPicker.jsx
import React from "react";

const colorOptions = [
  { code: "WH", hex: "#ffffff" },
  { code: "BK", hex: "#2b2722" },
  { code: "RD", hex: "#e00034" },
  { code: "NY", hex: "#00343b" },
  { code: "RB", hex: "#0054d1" },
  { code: "FU", hex: "#d23b9a" },
  { code: "DNH", hex: "#465570" },
  { code: "CHCH", hex: "#37363b" },
  { code: "BGH", hex: "#3f7073" },
  { code: "MUH", hex: "#edc463" },
  { code: "TUH", hex: "#75d7e2" },
  { code: "LVH", hex: "#d8a8db" },
  { code: "BUH", hex: "#752b2f" },
  { code: "GM", hex: "#7c7b78" },
];

const ColorPicker = ({ selectedColor, onChange }) => {
  return (
    <div className="mt-4">
      <label className="text-sm font-medium block mb-2">Colores disponibles</label>
      <div class="" className=" flex gap-4 overflow-x-auto pb-2">
        {colorOptions.map((color) => (
          <button
            key={color.code}
            type="button"
            onClick={() => onChange(color.code)}
            className="flex flex-col items-center min-w-[48px] focus:outline-none"
          >
            <div
              className={`w-10 h-10 rounded-full border-2 ${
                selectedColor === color.code
                  ? "border-primaryColor scale-110"
                  : "border-mainBorder"
              } transition-transform duration-200`}
              style={{ backgroundColor: color.hex }}
              title={color.code}
            />
            <span className="text-xs text-secondaryText mt-1">{color.code}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
