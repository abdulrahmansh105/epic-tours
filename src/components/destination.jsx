export default function Destination({
  background,
  city,
  title,
  description
}) {
  return (
    <div className="
      group
      relative
      h-95
      w-72
      mx-2
      shrink-0
      rounded-xl
      overflow-hidden
    ">

      <img
        src={background}
        alt={city}
        className="
          w-full h-full object-cover
          transition duration-700
          group-hover:scale-105
        "
      />

      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/90
        via-black/20
        to-transparent
        flex flex-col justify-end
        p-5
        group-hover:bg-transparent
      ">

        <span className="text-sm text-[#ffd900]">
          {city}
        </span>

        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="
          text-white/90 text-sm
          opacity-0
          max-h-0
          overflow-hidden
          transition-all duration-1500
          group-hover:opacity-100
          group-hover:max-h-25
        ">
          {description}
        </p>

      </div>

    </div>
  )
}