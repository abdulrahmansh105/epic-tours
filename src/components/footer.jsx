export default function Footer() {
  return (
    <div className="h-110 p-12.5 flex flex-col items-center justify-between text-white bg-[#0f0f0f]">
      <div className="flex items-center justify-between w-full px-10">
        <div className="flex flex-col h-43 m-7.5 gap-1">
          <span className="font-medium text-lg">Discover</span>
          <a href="#" className="text-base text-[#f1f1f1d2]">Home</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">About Us</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Trip Packages</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Gallery</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Contact</a>
        </div>
        <div className="flex flex-col h-43 m-7.5 gap-1">
          <span className="font-medium text-lg">Services</span>
          <a href="#" className="text-base text-[#f1f1f1d2]">Trip Itinerary</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Trip Preparations</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Booking Form</a>
        </div>
        <div className="flex flex-col h-43 m-7.5 gap-1">
          <span className="font-medium text-lg">Packages</span>
          <a href="#" className="text-base text-[#f1f1f1d2]">Popular Trip</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Personal Tour</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Group Tour</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Business Tour</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Testimonials</a>
        </div>
        <div className="flex flex-col h-43 m-7.5 gap-1">
          <span className="font-medium text-lg">Support</span>
          <a href="#" className="text-base text-[#f1f1f1d2]">Costumer Service</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Terms & Conditions</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Privacy Policy</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Refund Policy</a>
          <a href="#" className="text-base text-[#f1f1f1d2]">Travel Policy</a>
        </div>
        <div className="flex flex-col h-43 m-7.5 gap-1">
          <span className="font-medium text-[22px]">Contacts</span>
          
          <span className="flex items-center mt-3 text-[18px] font-normal text-[#f1f1f1ee] gap-2">
            <img src="/public/assets/imgs/PhoneIcon.png" alt="Phone" className="w-5" /> <p>+1 234 567 890</p>
          </span>
          <span className="flex items-center mt-3 text-[18px] font-normal text-[#f1f1f1ee] gap-2">
            <img src="/public/assets/imgs/locationPin.png" alt="Location" className="w-5" /> <p>123 Wanderer Street, City Name,<br /> State Name, Nation</p>
          </span>
        </div>
      </div> 
      
      
      <div className="flex flex-col gap-1 w-full">
        <hr className="border-[#f1f1f1] w-full my-2" />
        <div className="flex justify-between items-center w-full">
          
          <div className="flex gap-5">
            <a href="#"><img src="/public/assets/imgs/facebook.png" alt="Facebook" className="w-6 invert" /></a>
            <a href="#"><img src="/public/assets/imgs/twitter.png" alt="Twitter" className="w-6 invert" /></a>
            <a href="#"><img src="/public/assets/imgs/instagram.png" alt="Instagram" className="w-6 invert" /></a>
            <a href="#"><img src="/public/assets/imgs/linkedin.png" alt="LinkedIn" className="w-6 invert" /></a>
          </div>
          <span className="text-sm text-[#f1f1f1d2]">&copy; 2024 Epic Tours. All rights reserved.</span>
        </div>
      </div>
      
      
    </div>
  );
}