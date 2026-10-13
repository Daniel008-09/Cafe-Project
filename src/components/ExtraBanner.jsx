import banner from "../assets/png/extra-banner.png"

export default function ExtraBanner() {
  return (
    <div className="w-full relative pt-[50px] container ">
        <img src={banner} className="w-full "/>
        <p className="absolute text-white  top-[45%] left-[33%] md:text-[43px] sm:text-[30px]">MOST POPULAR PIZZA</p>  
    </div>
  )
}
