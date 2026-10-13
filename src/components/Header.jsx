import { useState } from "react"
import logo from "../assets/svg/pizzashop.svg"
import bag from "../assets/svg/bag.svg"
import burger from "../assets/svg/burger.svg"
import CartDrawer from "./CartDrawer"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className="container flex justify-between items-center pt-[50px] px-[30px]">
        <img src={logo} className="max-md:w-[130px]"/>

        <nav className="flex items-center justify-around gap-[30px] max-sm:hidden">
            <a href="#Menu" className="text-[#A3A3A3] hover:text-[#FFA228] transition-all duration-1000ms">Menu</a>
            <a href="" className="text-[#A3A3A3] hover:text-[#FFA228] transition-all duration-1000ms">Home</a>
            <a href="#Events" className="text-[#A3A3A3] hover:text-[#FFA228] transition-all duration-1000ms">Events</a>
            <a href="#About" className="text-[#A3A3A3] hover:text-[#FFA228] transition-all duration-1000ms">About Us</a>
        </nav>

        <div className="flex items-center gap-[20px]">
            <button className="bg-linear-to-r from-[#FF5D29] to-[#FE9C1C] rounded-[20px] py-[10px] px-[50px] text-white tracking-wide hover:cursor-pointer max-md:hidden">log in</button>

            <button onClick={() => setOpen(true)} className="relative hover:cursor-pointer">
                <img src={bag} className="bg-linear-to-r from-[#FF5D29] to-[#FE9C1C] py-[10px] px-[10px] w-[55px] h-[55px] rounded-[50%] max-md:w-[45px] max-md:h-[45px] max-sm:py-[6px] max-sm:px-[6px]"/>
                <span className="absolute top-0 right-0 bg-white text-[#FF5D29] text-[14px] w-[22px] h-[22px] rounded-[50%] flex items-center justify-center">3</span>
            </button>
            <img src={burger} className="hidden bg-linear-to-r from-[#FF5D29] to-[#FE9C1C] py-[10px] px-[10px] w-[55px] h-[55px] rounded-[50%] max-md:w-[45px] max-md:h-[45px] max-sm:py-[6px] max-sm:px-[6px] max-sm:block" />
        </div>
    </div>

    <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}
