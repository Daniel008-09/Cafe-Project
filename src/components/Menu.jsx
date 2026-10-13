import { useState, useEffect } from "react";
import api from "../axios/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

export default function Menu({ active }) {
  const [foods, setFoods] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const dispatch = useDispatch();
  const [foodCounts, setFoodCounts] = useState({})

  const filteredFoods =
    active === "all" ?
      foods
      : foods.filter((food) => food.category.id === active)


  const plusFood = (foodId) => {
    setFoodCounts((prev) => ({
      ...prev,
      [foodId]: (prev[foodId] ?? 1) + 1,
    }));
  };

  const minusFood = (foodId) => {
    setFoodCounts((prev) => ({
      ...prev,
      [foodId]: Math.max(1, (prev[foodId] ?? 1) - 1),
    }));
  };



  useEffect(() => {
    async function getFoods() {
      try {
        const res = await api.get("food");
        setFoods(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getFoods();
  }, [foods]);

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[10px] w-full mt-[50px]">
        {
          filteredFoods.length > 0 ? (

            filteredFoods.map((food) => {
              const selectedSize =
                food.sizes.find((size) => size.id === selectedSizes[food.id]) ||
                food.sizes[0];
              return (

                <div
                  className="flex flex-col items-center p-[10px] bg-[#210A01] rounded-[20px] gap-[20px] px-[20px]"
                  key={food.id}
                >
                  <Link to={`/products/${food.id}`}>
                    <img
                      src={food.image}
                      className="w-[50%] h-[30%] object-cover"
                    />
                  </Link>

                  <p className="text-white text-[25px]">{food.name}</p>

                  <p className="text-[#A3A3A3]">{food.description}</p>

                  <div className="flex w-[80%] items-center justify-between">
                    {food.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() =>
                          setSelectedSizes((prev) => ({
                            ...prev,
                            [food.id]: size.id,
                          }))
                        }
                        className={`rounded-full border items-center w-[40px] h-[40px]
                      transition duration-200 hover:scale-110
                      ${selectedSize?.id === size.id
                            ? "bg-[#FFA229] text-white border-transparent"
                            : "border-[#A3A3A3] text-[#A3A3A3] hover:bg-[#FFA229] hover:text-white hover:border-transparent"
                          }`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>

                  <button className="w-[80%] border-[#FF5924] border-[2px] rounded-[30px] py-[10px] text-[#FF5924] hover:bg-[#FFA229] transition duration-200 hover:scale-110 ease-in-out hover:border-none hover:text-white">
                    + Ingridients
                  </button>

                  <div className="flex items-center justify-between w-[80%]">
                    <p className="text-white text-[22px]">
                      {selectedSize.price} com
                    </p>

                    <div className="flex items-center gap-[10px] justify-between">
                      <button className="transition duration-200 hover:scale-110 ease-in-out cursor-pointer border-[#A3A3A3] border-[1px] text-[#A3A3A3] rounded-[50%] px-[10px] py-[2px]"
                        onClick={() => minusFood(food.id)}
                      >
                        -
                      </button>

                      <p className="text-[#A3A3A3]">{foodCounts[food.id] ?? 1}</p>

                      <button className="transition duration-200 hover:scale-110 ease-in-out cursor-pointer border-none text-white rounded-[50%] px-[10px] py-[2px] bg-[#FFA229]"
                        onClick={() => plusFood(food.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="border-none rounded-[30px] w-[80%] text-white bg-[#FFA229] py-[10px] text-[20px] hover:cursor-pointer transition duration-200 hover:scale-110 ease-in-out"
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: food.id,
                          name: food.name,
                          price: +selectedSize.price,
                          image: food.image,
                          sizeId: selectedSize.id,
                          size: selectedSize.name,
                          quantity: foodCounts[food.id] ?? 1,
                        })
                      );

                      alert(`повар ${food.name} успешно добавлен в корзину`);
                    }}
                  >
                    Order Now
                  </button>
                </div>

              );
            })

          ) : (
            <p className="text-white text-[30px]">Товары не найдены</p>
          )
        }
      </div>
    </div >
  );
}