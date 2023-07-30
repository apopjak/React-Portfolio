import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function Pizza(props) {
  // IF EXAMPLE

  // if (props.pizzaSoldOut) {
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={props.photoName} alt="" />
  //       <div>
  //         <h3>{props.name}</h3>
  //         <p>{props.ingredients}</p>
  //         <span>{props.price}</span>
  //       </div>
  //     </li>
  //   );
  // }

  return (
    <li className={`${props.soldOut ? "pizza sold-out" : "pizza"}`}>
      <img src={props.photoName} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "Sold Out" : props.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast react Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzaMenuSize = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaMenuSize >= 1 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious.
          </p>
          <ol className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={parseInt(pizza.price)}
                soldOut={pizza.soldOut}
              />
            ))}
          </ol>
        </>
      ) : (
        <p>We are working on our menu</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const currentTime = new Date().toLocaleTimeString();
  const openingHours = hour >= 9 && hour < 22;

  return (
    <footer className="footer">
      {openingHours && (
        <div className="order">
          <p>
            {" "}
            {currentTime} | We are open until 22:00. Come visit us or order
            online
          </p>
          <button className="btn">Order Now!</button>
        </div>
      )}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
