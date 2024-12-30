const XIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className} // Permite pasar clases de Tailwind para controlar tamaño
    >
      <path
        d="M10 10 L90 90 M90 10 L10 90"
        stroke="red"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
  
  export default XIcon;
  