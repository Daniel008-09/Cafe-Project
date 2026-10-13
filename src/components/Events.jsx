import cooking from "../assets/png/cooking.png"

export default function Events() {
    const eventsList = Array(9).fill({
        title: "HOW WE COOKING",
        buttonText: "More"
    });

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] pt-[50px] px-4" id="Events">

            {eventsList.map((event, index) => (
                <div key={index} className="w-full relative rounded-[20px] overflow-hidden group">
                    <img src={cooking} className="w-full h-auto object-cover" alt="cooking event" />
                    

                    <div className="w-full absolute top-[25%] left-[5%] flex flex-col gap-[20px] md:gap-[40px] px-2">
                        <p className="text-white text-[18px] sm:text-[22px] md:text-[25px] font-bold w-[70%] sm:w-[50%] leading-tight">
                            {event.title}
                        </p>
                        
                        <button className="border-none rounded-[30px] w-[50%] sm:w-[60%] text-white bg-[#FFA229] py-[8px] md:py-[10px] text-[16px] md:text-[20px] hover:bg-[#ff9305] transition duration-200 hover:scale-105 ease-in-out">
                            {event.buttonText}
                        </button>

                    </div>
                </div>
            ))}
            
        </div>
    )
}
