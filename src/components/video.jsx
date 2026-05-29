export default function Video() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f1f1f150] ">
      <video
        className="w-325 h-145 rounded-4xl object-cover relative"
        src="/public/assets/video/cXGGRdoWmVg2EP0rKNWhq3Z0aiY.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute flex flex-col items-center gap-4">
        <h3 className="text-[64px] text-white">
          Our <span className="font-playfair italic">journey</span> in Pictures
        </h3>
        <p className="text-lg text-white">
          See what makes each experience with our trips exceptional.
        </p>
      </div>
    </div>
   );
}