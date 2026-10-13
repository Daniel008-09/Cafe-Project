import pizzas from '../assets/png/pizzas.png'
import about from '../assets/png/about.png'

export default function AboutUs() {
    return (

        <div className='container flex flex-col-reverse items-center justify-between w-full pt-[50px] sm:flex-row' id='About'>

            <div className='flex flex-col gap-[20px] w-[90%] sm:w-[50%]'>
                <h1 className='text-white text-[70px]'>About us</h1>
                <p className='w-[80%] text-[#A3A3A3] text-[20px]'>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
                <img src={pizzas} className='w-full' />
                <p className='w-[80%] text-[#A3A3A3] text-[20px]'>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
            </div>

            <img src={about} className='w-[90%] sm:w-[50%] object-cover' />
        </div>
    )
}
