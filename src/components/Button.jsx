const Button = ({
  children,
  variant,
  className = "",
  icon,
  type = "button",
  onClick,
}) => {
  const variants = {
    primary: `font-semibold border-[#1E88E5] text-[#1E88E5] hover:text-[#1E55E5] hover:border-[#1E55E5] transition duration-300 ease-in-out`,
    secondary: `font-semibold border-[#FF7A18] bg-[#FF7A18] text-white hover:bg-[#FF6B18] hover:border-[FF6B18] transition duration-300 ease-in-out`,
    tertiary: `font-regular border-[#BDBDBD] bg-white text-[#3B4758] py-[4px]`,
  };
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className} border-2 rounded-lg cursor-pointer flex items-center justify-center`}
      onClick={onClick}
    >
      {icon && (
        <span className="w-[40px] h-[40px] flex items-center justify-center mr-2">
          <img src={icon} alt="Button Icon" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
