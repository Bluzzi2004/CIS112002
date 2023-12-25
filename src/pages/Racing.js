import { HashLink } from "react-router-hash-link";
import racing from "../assets/racing.jpg";
import racing2 from "../assets/racing2.png";
import racing3 from "../assets/racing3.png";

export default function Racing() {
  return (
    <>
      <h1>Our Offical Racing Team!</h1>
      <p>
        <img
          src={racing3}
          srcset={(racing, racing2, racing3)}
          alt="Dino Luzzi Race Car"
        />
      </p>
      <h2>Take to the track with the Italian Energy Drink!</h2>
      <p>
        Get ready to witness our professional race team rev up their engines as
        they go for the gold! With the energy provided by Dino Luzzi Energy
        Drink, nothing can stop them!
      </p>
      <div id="drivers">
        <h3>Meet Our Drivers!</h3>
        <ul>
          <li>
            <span class="name">Micheal D'Orlando</span>,{" "}
            <span class="car">Car Driver</span>
          </li>
          <li>
            <span class="name">Nicholas D'Orlando</span>,{" "}
            <span class="car">Car Driver</span>
          </li>
          <li>
            <span class="name">Alan Cohen</span>,{" "}
            <span class="car">GT1 Ford Mustang Driver</span>
          </li>
          <li>
            <span class="name">Jenn Krpata</span>,{" "}
            <span class="car">GT2 Chevy Impala Driver</span>
          </li>
        </ul>
      </div>
      <HashLink to="/">Return to Main Page</HashLink>
      <div id="action">
        <h3>Want to seem them in action? Check our offical YouTube page!</h3>
        <p>
          Ready, Set,
          <br></br>
          <a href="https://www.youtube.com/channel/UCneNhW3ZiMGMMlHhPWf17-Q/channels">
            Start your engines!
          </a>
        </p>
      </div>
    </>
  );
}
