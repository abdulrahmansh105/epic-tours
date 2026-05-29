export default function Comment({comment, img, name, country}) {

  return (
    <div className="bg-white shadow-xl rounded-2xl w-75 h-70 p-5 flex flex-col justify-between">
      <p>{comment}</p>
      
      <div>
        <hr className="my-3 border-gray-300" />
        <div className="flex">
          <img className="w-17 h-17 mr-3 rounded-full" src={img} alt={name} />
          <div className="flex flex-col justify-center gap-1">
            <span className="font-bold text-medium">{name}</span>
            <p>{country}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}