export default function Package({packLink, packImg, packTitle, packDuration, packCost}) {
  return (
    <a
      href={packLink}
      className="relative w-111.25 h-92.5 rounded-2xl overflow-hidden group block bg-cover bg-center hover:scale-[1.01] transition-all duration-[400ms] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
      style={{ backgroundImage: `url(${packImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">
        <h3 className="text-xl font-bold mb-3">
          {packTitle}
        </h3>

        <div className="flex justify-between items-center text-lg font-semibold">
          <span>{packDuration}</span>
          <span>{packCost}</span>
        </div>
      </div>
    </a>
  );
}
