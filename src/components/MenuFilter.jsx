import { useState, useEffect } from "react"
import api from "../axios/axios"


export default function MenuFilter({active, setActive}) {
    const [category, setCategory] = useState([])

    useEffect(() => {
        async function getCategory() {
            try {
                let res = await api.get("categories")

                await setCategory(res.data)

            } catch (error) {
                console.log(error);

            }
        }

        getCategory()
    }, [])


    return (
        <div className='container' id='Menu'>
            <h2 className="text-center text-white text-[69px] font-800 w-full">Menu</h2>
            <nav className="flex flex-wrap justify-center md:justify-between items-center text-white gap-[10px]" >
                <button
                    className={`bg-[#210A01] text-white py-[15px] px-[20px] sm:px-[40px] text-[18px] md:text-[20px] rounded-[100px] w-full sm:w-auto md:w-[15%] hover:bg-[#FFA229] transition duration-200 hover:scale-110 ease-in-out shadow-md shadow-[#3b1201] shrink-0
                         ${active === "all" ? "bg-[#FFA229]" : "bg-[#210A01]"}`}

                    onClick={() => setActive("all")}
                >
                    Show All
                </button>

                {
                    category.map((item) => (

                        <button className={`bg-[#210A01] text-white py-[15px] px-[20px] sm:px-[40px] text-[18px] md:text-[20px] rounded-[100px] w-full sm:w-auto md:w-[15%] hover:bg-[#FFA229] transition duration-200 hover:scale-110 ease-in-out shadow-md shadow-[#3b1201] shrink-0 
                            ${active === item.id ? "bg-[#FFA229]" : "bg-[#210A01]"}`}

                            key={item.id}
                            onClick={() => setActive(item.id)}
                        >
                            {item.name}
                        </button>
                    ))
                }
            </nav>

        </div>
    )
}   
