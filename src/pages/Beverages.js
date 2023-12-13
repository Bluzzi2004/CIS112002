import { HashLink } from "react-router-hash-link";
import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";

export default function Beverages() {
  return (
    <>
      <h1>Check our unique beverages!</h1>
      <p id="nice">"Nothing better then a nice drink in the moonlight!"</p>
      <h2>Bet your thristy, Have a drink!</h2>
      <h3 class="drinktitle">Dolce Dino</h3>
      <img src={drink1} id="drink" alt="Dolce Dino image" />
      <ul class="ingredients">
        <li>1 Cup Ice</li>
        <li>1 Oz Watermelon Schnapps</li>
        <li>1 1/2 Oz Tito's Vodka</li>
        <li>
          4 Oz <em>Dino Luzzi Energy Drink</em>
        </li>
      </ul>
      <h3 class="drinktitle">Kick in the Arse</h3>
      <img src={drink2} id="drink" alt="Kick in the Arse image" />
      <ul class="ingredients">
        <li>1 Cup Ice</li>
        <li>1 1/2 Oz Jagermeister</li>
        <li>
          6 Oz <em>Dino Luzzi Energy Drink</em>
        </li>
      </ul>
      <h3 class="drinktitle">Dino-Rita</h3>
      <img src={drink3} id="drink" alt="Dino-Rita image" />
      <ul class="ingredients">
        <li>1 Cup Ice</li>
        <li>1 Oz Margarita Mix</li>
        <li>1 1/2 Oz Tequila</li>
        <li>
          4 Oz <em>Dino Luzzi Energy Drink</em>
        </li>
      </ul>
      <HashLink to="/">Return to Main Page</HashLink>
    </>
  );
}
