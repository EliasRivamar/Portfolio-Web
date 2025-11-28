const COLORS = {
  blue: "bg-blue-400",
  bluePython: "bg-blue-300",
  violet: "bg-violet-400",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  gray: "bg-gray-400",
  green: "bg-green-400",
  cyan: "bg-cyan-300",
};


export function LangButton({ color, icon, name }) {
  return (
    <div className="bg-transparent relative group hover:scale-115 duration-400 transition-all ease-in-out">
      <div
        className={`absolute inset-0 ${COLORS[color]} opacity-70 blur rounded-full`}
      ></div>
      <div className="relative z-10 p-3 cursor-pointer bg-transparent">{icon}</div>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-shadow-2xstext-text-primary-light dark:text-text-primary-dark text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-60">
        {name}
      </span>
    </div>
  )
}
