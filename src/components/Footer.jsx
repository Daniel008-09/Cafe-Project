import facebook from "../assets/svg/facebook.svg"


export default function Footer() {
  return (
    <div className="bg-[#170A00] w-full pt-[60px] pb-[40px] text-white">
      <div className="container mx-auto px-4 flex flex-col gap-[60px]">
       
        <div className="flex flex-col items-center text-center gap-[40px] md:flex-row md:items-start md:justify-between md:text-left">
          
          <div className="text-[#FF612E] text-[32px] font-bold">
            pizzashop
          </div>

  
          <div className="flex flex-col gap-[35px] sm:grid sm:grid-cols-2 sm:gap-[40px] md:flex md:flex-row md:gap-[60px] lg:gap-[100px]">
            

            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[18px] font-medium text-white mb-[4px]">Home</h3>
              <a href="#About" className="text-[#A3A3A3] text-[16px] hover:text-white transition">About us</a>
              <a href="#Events" className="text-[#A3A3A3] text-[16px] hover:text-white transition">Events</a>
              <a href="#Menu" className="text-[#A3A3A3] text-[16px] hover:text-white transition">Menu</a>
            </div>



            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[18px] font-medium text-white mb-[4px]">Menu</h3>
              <a href="#Menu" className="text-[#A3A3A3] text-[16px] hover:text-white transition">Show All</a>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center gap-[20px] pt-[30px] border-t border-[#2A1707] sm:flex-row sm:justify-between">

          <p className="text-[#FF612E] text-[20px] font-medium">
            +7 (937) 333-55-33
          </p>

    
          <div className="flex items-center gap-[20px]">
            <img src={facebook} alt="Instagram" />
            <img src={facebook} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
          </div>

        </div>

      </div>
    </div>
  )
}
