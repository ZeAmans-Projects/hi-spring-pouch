type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95";

  const styles =
    variant === "primary"
      ? "bg-blue-700 text-white hover:bg-blue-800"
      : "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}