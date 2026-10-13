import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../axios/axios"

export default function DetailUser() {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function getProductById() {
      try {
        let res = await api.get(`food/${id}`)



        setProduct([res.data])
      } catch (error) {
        console.log(error);
      }
    }

    getProductById()
  })


  return (
    <div className="container">

      {product.map((item) => (

        <div key={item.id} className="flex w-full items-start gap-[30px] mt-[50px]">
          <img src={item.image} className="w-[50%] object-cover" />

          <div className="flex-col items-start flex gap-[15px]">
            <h3 className="montserrat text-[32px] font-[600]">{item.name}</h3>

            <div className="flex flex-col py-[20px] border-y-1 border-[#000000] w-full">
              <p className="montserrat text-[20px] font-[600]">Описание товара</p>

              <p className="montserrat text-[16px] text-[#565656] font-[400] pt-[20px]">{item.description}</p>
            </div>

            <button className="mt-[20px] bg-[#6A0008] w-full border-none text-white py-[10px]">в корзину</button>
          </div>
        </div>

      ))}
    </div>
  )
}
