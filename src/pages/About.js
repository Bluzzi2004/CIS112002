import { HashLink } from "react-router-hash-link";
import poster from "../assets/poster.jpg";
import poster2 from "../assets/poster2.png";

export default function About() {
  return (
    <>
      <h1>What is the Italian Energy Drink?</h1>
      <p>
        The Italian Energy Drink was first launched in the year 2020. It is made
        in Italy and is marketed under the name{" "}
        <em>"Dino Luzzi Energy Drink"</em> under the company IFBC or Italian
        Food and Beverage Corp with the help of Can International S.R.L. through
        partnership. Our sparkling and refreshing drink is designed to give you
        the energy you need through out your day!
      </p>
      <HashLink to="/">Return to Main Page</HashLink>
      <h2>Here are the Health Facts about the Italian Energy Drink!</h2>
      <ul id="facts">
        <li>
          Contains Vitamins B2, B3, B5, B6 and B12
          <li>Made with zero fat and cholesterol</li>
          <li>
            Low calorie count <strong>(115)</strong>
          </li>
          <li>
            Made with ingredients that improve focus & provides a strong energy
            boost that lasts the whole day
          </li>
        </li>
      </ul>
      <h2>What Ingredients are in the Italian Energy Drink?</h2>
      <p id="facts2">
        Water, Sucrose, Fructose Syrup, Citric Acid, Carbon Dioxide,
        Taurine(0,4%) Sodium Citrate, Caramel Color, Magnesium, Carbonate,
        Caffeine, Glucuronolactone, Inosito, Natural and Artificial flavor,
        Nicotinamide(Vitamin B3), Calcium Pantothenate(Vitamin B6) Pyridoxine
        Hydrochloride(Vitamin B6) Riboflavin(Vitamin B2) Cyanocobalamin(Vitamin
        B12), Caffeine content(32mg/100ml)
      </p>
      <h2>Corporate Structure and Stock Symbol</h2>
      <p>
        While you're here, why not take a look at our stock! You'll get up to
        date information about our company and nothing but the facts!{" "}
        <a href="https://www.otcmarkets.com/stock/IFBC/overview">
          Get the facts with the market!
        </a>
      </p>
      <p>
        <img src={poster2} alt="Energy Drink Poster" />
      </p>
    </>
  );
}
