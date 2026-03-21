import React, { useState } from "react";

function Shop() {
  const [cart, setCart] = useState([]);

  // Example products
  const products = [
    {
      id: 1,
      name: "Tesla Model 3",
      price: 50000,
      image:
        "https://www.tesla.com/sites/default/files/modelsx-new/social/model-3-social.png",
    },
    {
      id: 2,
      name: "Ford Mustang",
      price: 60000,
      image:
        "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/cars/mustang/2021/collections/3-2/21_ford_mustang_gt_perf_pack.jpg",
    },
    {
      id: 3,
      name: "BMW i8",
      price: 140000,
      image:
        "https://cdn.bmwblog.com/wp-content/uploads/2019/01/BMW-i8-2019-4.jpg",
    },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Luxury Cars Shop</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: ${product.price.toLocaleString()}</p>
              <button
                className="btn btn-success w-100"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary mt-5">
        <h3>Cart Items:</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toLocaleString()} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Shop;
