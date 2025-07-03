import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import Order from "./order.jsx";
import PizzaOfTheDay from './PizzaOfTheDay.jsx';

const App = () => {
    return (
        <StrictMode>
            <div>
        <h1 className="logo">Padre Gino's - Order Now</h1>
        <Order />
        <PizzaOfTheDay/>
       </div>
        </StrictMode>
       
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)