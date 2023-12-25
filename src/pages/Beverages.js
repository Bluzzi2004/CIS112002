import { HashLink } from "react-router-hash-link";
import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";

const Bev1 = [
  "1 Cup Ice",
  "1 Oz Watermelon Schnapps",
  "1 1/2 Oz Tito's Vodka",
  "4 Oz Dino Luzzi Energy Drink",
];
const Bev2 = [
  "1 Cup Ice",
  "1 1/2 Oz Jagermeister",
  "6 Oz Dino Luzzi Energy Drink",
];
const Bev3 = [
  "1 Cup Ice",
  "1 Oz Margarita Mix",
  "1 1/2 Oz Tequila",
  "4 Oz Dino Luzzi Energy Drink",
];

export default function Beverages() {
  Bev1.map((list1) => <li>List1: {list1}</li>);
  Bev2.map((list2) => <li>List2: {list2}</li>);
  Bev3.map((list3) => <li>List3: {list3}</li>);

  return (
    <>
      <h1>Check our unique beverages!</h1>
      <p id="nice">"Nothing better then a nice drink in the moonlight!"</p>
      <h2>Bet you're thristy, Have a drink!</h2>
      <h3 class="title">Dolce Dino</h3>
      <img src={drink1} class="drink" alt="Dolce Dino image" />
      <ul class="ingredients">
        {Bev1.map((list1) => (
          <li>{list1}</li>
        ))}
      </ul>
      <h3 class="title">Kick in the Arse</h3>
      <img src={drink2} class="drink" alt="Kick in the Arse image" />
      <ul class="ingredients">
        {Bev2.map((list2) => (
          <li>{list2}</li>
        ))}
      </ul>
      <h3 class="title">Dino-Rita</h3>
      <img src={drink3} class="drink" alt="Dino-Rita image" />
      <ul class="ingredients">
        {Bev3.map((list3) => (
          <li>{list3}</li>
        ))}
      </ul>
      <HashLink to="/">Return to Main Page</HashLink>
    </>
  );
}
