export default function Service({
  animation,
  bg,
  imgBg,
  img,
  title,
  description
}) {

  return (
    <div
      className={
        "flex items-center justify-center border rounded-2xl w-fit h-31 p-3 opacity-0 "
        + bg + " " + animation
      }
    >
      <div className={imgBg}>
        <img className="w-8 m-4" src={img} alt="services" />
      </div>

      <div className="px-4 max-w-lg">
        <span className="font-medium text-lg pb-1">
          {title}
        </span>

        <p>{description}</p>
      </div>
    </div>
  )
}


