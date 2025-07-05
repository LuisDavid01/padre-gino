import { usePizzaOfTheDay } from "./usePizzaOfTheDay.jsx";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const pizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();
  if (!pizzaOfTheDay) {
    return <div>loading...</div>;
  }
  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From : {intl.format(pizzaOfTheDay.sizes.S)}
            <br />
            To: {intl.format(pizzaOfTheDay.sizes.L)}
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default pizzaOfTheDay;
