const Button = ({children, className = '', onClick}) => {
  return (
    <button className={`rounded-full bg-stone-400 text-white p-4 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;