export type FormData = {
  producto: string;
  talla: string;
  entrega: string;
  cantidad: number;
  imagen: string;
};

export function generarResumen(data: FormData) {
  if (!data.producto || !data.talla || !data.entrega || !data.cantidad) {
    return "Por favor completa todos los campos para ver el resumen.";
  }

  return `
    Producto: ${data.producto}
    Talla: ${data.talla}
    Cantidad: ${data.cantidad}
    Entrega: ${data.entrega}
    Imagen: ${data.imagen ? "Sí se subió" : "No hay imagen cargada"}
  `;
}
