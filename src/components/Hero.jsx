import banner from "../assets/png/banner.png"
import lighting from "../assets/svg/Lightning.svg"

export default function Hero() {
  return (
    <div className="container flex justify-between pt-[50px] px-[30px] max-[700px]:flex-col-reverse max-[700px]:items-center">
      <div className="flex flex-col gap-[40px] items-start ">
        <h1 className="text-white text-[69px] font-extrabold max-[960px]:text-[55px] max-[800px]:text-[45px] max-[700px]:text-[55px] max-[475px]:text-[35px]">The Fastest   <span className="flex gap-[20px]">Pizza<img src={lighting}/>   Delivery</span></h1>

        <p className="text-[#A3A3A3] w-[60%]">We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className="text-white">pizza is free!</span></p>

      <button className="bg-linear-to-r from-[#FF5D29] to-[#FE9C1C] rounded-[20px] py-[10px] px-[50px] text-white">To order</button>
      </div>

      <div>
        <img src={banner} />
      </div>
    </div>
  )
}
