import React, { useState } from "react";
import { motion } from "framer-motion";
import { descargarCotizacion } from "./../../utils/generarCotizacion";
import CalendarField from "./CalendarField";
import ColorPicker from "./ColorPicker";

const Form = () => {
  const [formData, setFormData] = useState({
    merch_type: "",
    vinil_type: "",
    vinil_dimensions: "",
    size: "",
    quantity: 1,
    delivery_date: "",
    logo_svg: null,
    logoPreview: "",
    color: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "logo_svg" && files && files[0]) {
      const file = files[0];
      const preview = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        logo_svg: file,
        logoPreview: preview,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "quantity" ? parseInt(value) : value,
      }));
    }

    if (name === "quantity" || name === "merch_type") {
      const isSticker =
        name === "merch_type" ? value === "Sticker" : formData.merch_type === "Sticker";
      const quantityValue = name === "quantity" ? parseInt(value) : formData.quantity;
      if (isSticker && (quantityValue < 100 || quantityValue % 50 !== 0)) {
        setError("Para stickers el mínimo es 100 y múltiplos de 50.");
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="bg-bgDark1 min-h-screen py-14 px-4 font-mona text-primaryText">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-bgDark2 shadow-xl rounded-xl p-8 border border-mainBorder">
        {/* RESUMEN */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="block-title">Resumen del pedido</h2>
          <div className="bg-bgDark3 p-6 rounded-lg main-border-gray">
            <p className="text-xl font-bold text-primaryColor">
              USD {formData.quantity * 20}.00
            </p>
            <ul className="mt-4 space-y-1 text-sm text-secondaryText">
              <li>🧢 {formData.merch_type || "Producto no seleccionado"} x{formData.quantity}</li>
              {(formData.merch_type === "Playera" || formData.merch_type === "Chamarra") && (
                <>
                  <li>📏 Tamaño: {formData.size || "No especificado"}</li>
                  {formData.color && <li>🎨 Color: {formData.color}</li>}
                </>
              )}
              {formData.merch_type === "Sticker" && (
                <>
                  <li>💿 Vinil: {formData.vinil_type || "No especificado"}</li>
                  <li>📐 Dimensiones: {formData.vinil_dimensions || "No especificado"}</li>
                </>
              )}
              <li>📦 Entrega: {formData.delivery_date || "Sin fecha"}</li>
            </ul>
          </div>

          <div className="bg-bgDark3 rounded-lg p-4 main-border-gray">
            <p className="text-sm text-secondaryText mb-2">Vista previa:</p>
            <div className="border border-mainBorder rounded h-48 flex items-center justify-center bg-bgDark2">
              {formData.logoPreview ? (
                <img src={formData.logoPreview} alt="Preview del logo" className="max-h-40" />
              ) : (
                <span className="text-secondaryText">[Logo o boceto aquí]</span>
              )}
            </div>
          </div>

          <button
            onClick={() => descargarCotizacion(formData)}
            type="button"
            className="mt-4 w-full py-2 contained-button"
          >
            Descargar cotización
          </button>
        </motion.div>

        {/* FORMULARIO */}
        <motion.form
          className="space-y-6"
          action="https://formsubmit.co/2330fe87cb767f8d382e0f32ba7eab79"
          method="POST"
          encType="multipart/form-data"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Apellido</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label className="text-sm font-medium">¿Qué deseas personalizar?</label>
            <select
              name="merch_type"
              required
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            >
              <option value="">Selecciona...</option>
              <option value="Playera">Playera</option>
              <option value="Chamarra">Chamarra</option>
              <option value="Sticker">Sticker</option>
              <option value="Calcetas">Calcetas</option>
            </select>
          </div>

          {formData.merch_type === "Sticker" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Tipo de vinil</label>
                <select
                  name="vinil_type"
                  value={formData.vinil_type}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <option value="">Selecciona el tipo de vinil</option>
                  <option value="Blanco">Vinil blanco</option>
                  <option value="Holográfico">Vinil holográfico</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Dimensiones</label>
                <select
                  name="vinil_dimensions"
                  value={formData.vinil_dimensions}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <option value="">Dimensiones sticker</option>
                  <option value="5x5">5x5</option>
                  <option value="7.5x7.5">7.5x7.5</option>
                  <option value="Personalizado">Personalizado...</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="text-sm font-medium">Sube tu logo (.svg , .ai)</label>
            <input
              type="file"
              name="logo_svg"
              accept=".svg, .ai"
              required
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md"
            />
          </div>

          {(formData.merch_type === "Playera" || formData.merch_type === "Chamarra") && (
            <ColorPicker 
              selectedColor={formData.color}
              onChange={(color) => setFormData((prev) => ({ ...prev, color }))}
            />
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Cantidad</label>
              <input
                type="number"
                name="quantity"
                min="1"
                required
                value={formData.quantity}
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {(formData.merch_type === "Playera" || formData.merch_type === "Chamarra") && (
              <div>
                <label className="text-sm font-medium">Talla</label>
                <select
                  name="size"
                  required
                  onChange={handleChange}
                  className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <option value="">Selecciona...</option>
                  <option value="Chico">CH</option>
                  <option value="Mediano">M</option>
                  <option value="Grande">G</option>
                  <option value="Extra Grande">XL</option>
                </select>
              </div>
            )}
          </div>

          <CalendarField value={formData.delivery_date} onChange={handleChange} />

          <div>
            <label className="text-sm font-medium">Comentarios adicionales</label>
            <textarea
              name="extra_comments"
              rows={3}
              placeholder="Instrucciones especiales, ubicación del logo, colores, etc."
              className="w-full mt-1 p-3 bg-bgDark3 main-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor text-secondaryText"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 contained-button"
          >
            Enviar pedido
          </button>

          <input type="hidden" name="_next" value="http://localhost:4321/" />
          <input type="hidden" name="_captcha" value="false" />
        </motion.form>
      </div>
    </div>
  );
};

export default Form;
