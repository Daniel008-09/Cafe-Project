import pizza from "../assets/png/pizza.png"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementFromCart, encrementFromCart } from "../redux/features/cartSlice";

export default function CartDrawer({ open, onClose }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 bg-black/60 z-[40] transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>

      <aside className={`fixed top-0 right-0 h-full w-[420px] max-sm:w-full bg-[#210A01] border-l border-[#2A1707] z-[50] flex flex-col transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-[30px] pt-[30px] pb-[20px] border-b border-[#2A1707]">
          <p className="text-white text-[25px]">
            Your Cart{" "}
            <span className="text-[#FFA229] text-[18px]">
              ({totalItems})
            </span>
          </p>

          <button onClick={onClose} className="border-[#A3A3A3] border-[1px] text-[#A3A3A3] rounded-[50%] w-[40px] h-[40px] hover:bg-[#FFA229] hover:text-white hover:border-transparent transition duration-200">
            X
          </button>
        </div>


        <div className="flex flex-col gap-[20px] px-[30px] py-[20px] overflow-y-auto flex-1">
          {cart.length === 0 ? (
            <p className="text-[#A3A3A3] text-center">
              Ваша корзина пустая(
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.sizeId}`}
                className="flex items-center gap-[15px] bg-[#1E0C00] rounded-[20px] p-[15px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[80px] h-[80px] object-cover"
                />

                <div className="flex flex-col gap-[5px] flex-1">
                  <p className="text-white text-[18px]">{item.name}</p>
                  <p className="text-[#A3A3A3] text-[14px]">
                    Size: {item.size}
                  </p>
                  <p className="text-white text-[18px]">
                    {item.price} сом
                  </p>
                </div>

                <div className="flex flex-col items-center gap-[10px]">
                  <button
                    onClick={() =>
                      dispatch(
                        encrementFromCart({
                          id: item.id,
                          sizeId: item.sizeId,
                        })
                      )
                    }
                    className="border-none text-white rounded-[50%] px-[10px] py-[2px] bg-[#FFA229]"
                  >
                    +
                  </button>

                  <p className="text-[#A3A3A3]">{item.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch(
                        decrementFromCart({
                          id: item.id,
                          sizeId: item.sizeId,
                        })
                      )
                    }
                    className="border-[#A3A3A3] border-[1px] text-[#A3A3A3] rounded-[50%] px-[10px] py-[2px]"
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}
        </div>


        <div className="flex flex-col gap-[15px] px-[30px] pb-[30px] pt-[20px] border-t border-[#2A1707]">
          <div className="flex items-center justify-between">
            <p className="text-[#A3A3A3]">Subtotal</p>
            <p className="text-white text-[18px]">
              {subtotal} сом
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#A3A3A3]">Delivery</p>
            <p className="text-white text-[18px]">Free</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-white text-[20px]">Total</p>
            <p className="text-[#FFA229] text-[25px]">
              {subtotal} сом
            </p>
          </div>

          <button className="border-none rounded-[30px] w-full text-white bg-linear-to-r from-[#FF5D29] to-[#FE9C1C] py-[10px] text-[20px]">Order Now</button>

          <button onClick={onClose} className="w-full border-[#FF5924] border-[2px] rounded-[30px] py-[10px] text-[#FF5924] hover:bg-[#FFA229] transition duration-200 hover:border-transparent hover:text-white">Continue Shopping</button>
        </div>
      </aside>
    </>
  )
}
