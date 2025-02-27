import { useContext, useEffect } from "react";
import { Usercontext } from "../contextapi/Authcontextapi";

const Cart = () => {
  const { cart, removeFromCart } = useContext(Usercontext);
  // Calculate total cost
  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Cost Section */}
          <div className="mt-6 p-4 bg-white shadow-md rounded-lg text-right">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Cost: <span className="text-green-600">${totalCost.toFixed(2)}</span>
            </h3>
          </div>

          {/* Payment Button */}
          <button
            className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert(`Proceeding to payment of $${totalCost.toFixed(2)}`)}
          >
             Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
