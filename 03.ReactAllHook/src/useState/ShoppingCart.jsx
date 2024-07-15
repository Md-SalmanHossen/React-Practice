import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const addItemToCart = () => {
    const newItem = { name: itemName, quantity: itemQuantity, price: itemPrice };
    setCart([...cart, newItem]);
    setItemName('');
    setItemQuantity(1);
    setItemPrice(0);
  };

  const removeItemFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateItemQuantity = (index, newQuantity) => {
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      <div className="mb-4">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="p-2 rounded-l-lg border-0 outline-none"
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(Number(e.target.value))}
          className="p-2 border-0 outline-none"
          placeholder="Quantity"
          min="1"
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(Number(e.target.value))}
          className="p-2 border-0 outline-none"
          placeholder="Price"
          min="0"
        />
        <button onClick={addItemToCart} className="bg-green-500 p-2 rounded-r-lg">
          Add
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Price</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.length ? (
            cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItemQuantity(index, Number(e.target.value))}
                    className="p-1 border"
                    min="1"
                  />
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => removeItemFromCart(index)}
                    className="bg-red-700 text-white p-1"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No items in the cart
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mt-4 text-xl">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default ShoppingCart;
