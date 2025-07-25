import React, { useState } from "react";
import { motion } from "framer-motion";
import { descargarCotizacion } from "./../../utils/generarCotizacion";


const Form = () => {
  const [formData, setFormData] = useState({
    merch_type: "",
    size: "",
    quantity: 1,
    delivery_date: "",
    logo_svg: null,
    logoPreview: "",
  });

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
  };

  return (
    <div className="bg-bgDark1 min-h-screen py-14 px-4 font-mona text-primaryText">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-bgDark2 shadow-xl rounded-xl p-8 border border-mainBorder">
        {/* RESUMEN IZQUIERDA */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primaryText">Resumen del pedido</h2>
          <div className="bg-bgDark3 p-6 rounded-lg border border-mainBorder">
            <p className="text-xl font-bold text-primaryColor">
              USD {formData.quantity * 20}.00
            </p>
            <ul className="mt-4 space-y-1 text-sm text-secondaryText">
              <li>🧢 {formData.merch_type || "Producto no seleccionado"} x{formData.quantity}</li>
              <li>📏 Tamaño: {formData.size || "No especificado"}</li>
              <li>📦 Entrega: {formData.delivery_date || "Sin fecha"}</li>
            </ul>
          </div>

          <div className="bg-bgDark3 rounded-lg p-4 border border-mainBorder">
            <p className="text-sm text-secondaryText mb-2">Vista previa:</p>
            <div className="border border-mainBorder rounded h-48 flex items-center justify-center bg-bgDark2">
              {formData.logoPreview ? (
                <img src={formData.logoPreview} alt="Preview del logo" className="max-h-40" />
              ) : (
                <span className="text-secondaryText">[Logo o boceto aquí]</span>
              )}
            </div>
          </div>
          <div >
            {/* Botón para descargar la cotización */}
<button
  onClick={() => descargarCotizacion(formData)}
  type="button"
  className="mt-4 w-full py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
>
  Descargar cotización
</button>

          </div>
        </motion.div>

        {/* FORMULARIO DERECHA */}
        <motion.form
          className="space-y-6"
          action="https://formsubmit.co/2330fe87cb767f8d382e0f32ba7eab79"
          method="POST"
          encType="multipart/form-data"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Nombre y Apellido */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Apellido</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          {/* ¿Qué deseas personalizar? */}
          <div>
            <label className="text-sm font-medium">¿Qué deseas personalizar?</label>
            <select
              name="merch_type"
              required
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            >
              <option value="">Selecciona...</option>
              <option value="Playera">Playera</option>
              <option value="Chamarra">Chamarra</option>
              <option value="Sticker">Sticker</option>
              <option value="Calcetas">Calcetas</option>
            </select>
          </div>

          {/* Logo */}
          <div>
            <label className="text-sm font-medium">Sube tu logo (.svg)</label>
            <input
              type="file"
              name="logo_svg"
              accept=".svg"
              required
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md"
            />
          </div>

          {/* Cantidad y Tamaño */}
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
                className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tamaño</label>
              <select
                name="size"
                required
                onChange={handleChange}
                className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
              >
                <option value="">Selecciona...</option>
                <option value="Chico">Chico</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
          </div>

          {/* Fecha de entrega */}
          <div>
            <label className="text-sm font-medium">Fecha de entrega deseada</label>
            <input
              type="date"
              name="delivery_date"
              required
              value={formData.delivery_date}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          {/* Comentarios */}
          <div>
            <label className="text-sm font-medium">Comentarios adicionales</label>
            <textarea
              name="extra_comments"
              rows={3}
              placeholder="Instrucciones especiales, ubicación del logo, colores, etc."
              className="w-full mt-1 p-3 bg-bgDark3 border border-mainBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor text-secondaryText"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-primaryColor text-bgDark1 font-semibold hover:bg-opacity-90 transition"
          >
            Enviar pedido
          </button>

          {/* Campos ocultos */}
          <input type="hidden" name="_next" value="http://localhost:4321/" />
          <input type="hidden" name="_captcha" value="false" />
        </motion.form>
      </div>
    </div>
  );
};

export default Form;
