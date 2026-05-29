export default function Header() {
  return (
    <div className="flex justify-between px-10 py-6">
      <a href="/index.html"><img className="w-35" src="/public/assets/imgs/Untitled-2.png" alt="logo" /></a>
      <div className="flex gap-6 items-center text-white">
        <a href="/src/html/Trips.html">Trips</a>
        <a href="/src/html/Gallery.html">Gallery</a>
        <a href="/src/html/About.html">About</a>
        <a href="/src/html/Contact.html">Contact</a>
      </div>
    </div>
  )
}