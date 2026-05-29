export default function Destination({
  background,
  city,
  title,
  description
}) {
  return (
    <div className={"relative h-95 w-72 rounded-xl overflow-hidden"}>

      <img
        src={background}
        alt={city}
        className="w-full h-full object-cover"
      />

      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/90
        via-black/20
        to-transparent
        flex flex-col justify-end
        p-5
      ">

        <span className="text-sm text-[#ffd900]">
          {city}
        </span>
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className={"text-white/80 text-sm hidden"}>
          {description}
        </p>

      </div>

    </div>
  )
}