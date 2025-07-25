// src/utils/generarCotizacion.js
import jsPDF from "jspdf";

export function generarCotizacion(datos) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Resumen de tu pedido", 20, 20);
  doc.setFontSize(12);

  doc.text(`Producto: ${datos.producto}`, 20, 40);
  doc.text(`Talla: ${datos.talla}`, 20, 50);
  doc.text(`Entrega: ${datos.entrega}`, 20, 60);
  doc.text(`Precio: $${datos.precio}`, 20, 70);

  doc.save("cotizacion-merch.pdf");
}
// generarCotizacion.js

export const generarResumenCotizacion = (formData) => {
  const total = formData.quantity * 20;

  return `
🧾 RESUMEN DE COTIZACIÓN
----------------------------
Producto: ${formData.merch_type || "No especificado"}
Tamaño: ${formData.size || "No especificado"}
Cantidad: ${formData.quantity || 0}
Fecha de entrega: ${formData.delivery_date || "No especificada"}
Precio total: USD ${total.toFixed(2)}
`;
};

export const descargarCotizacion = (formData) => {
  const resumen = generarResumenCotizacion(formData);
  const blob = new Blob([resumen], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "cotizacion.txt";
  a.click();
  URL.revokeObjectURL(url);
};
