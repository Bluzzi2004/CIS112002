import { HashLink } from "react-router-hash-link";
import glass from "../assets/glass.jpg";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";

export default function Main() {
  return (
    <>
      <h1>The Italian Energy Drink!</h1>
      <img src={logo2} srcset={logo, logo2} alt="Dino Luzzi Energy Drink Logo" />
      <p>
        Welcome to the website of the Italian Energy Drink also known as Dino
        Luzzi Energy Drink, below there are some links regarding the product!
        You can also use the navigation bar on the top of your screen for an
        easier search. Enjoy your surfing and we hope you will consider
        purchasing our product!
      </p>
      <p>
        The Italian Energy Drink (Dino Luzzi Energy Drink) is known as a
        sparkling drink with a refreshing flavor and without the metallic after
        taste that many other energy drinks are known to have. Our goal with our
        drink is that we want to be recongized for putting quality first so that
        you can get the energy you need and a refreshing drink that will
        rehydrate you as well! <strong>FIND YOUR POWER!</strong>
      </p>
      <h2>More about us!</h2>
      <p>
        The Italian Energy Drink has been making it's mark across Long Island
        and is continuing to expand it's reach. We have also been taking our
        part in the racing world with our offical{" "}
        <HashLink to="/racing/team">racing team!</HashLink>
      </p>
      <p>
        Not to mention, we are also creating new{" "}
        <HashLink to="/our/beverages">Italian Energy Drink beverages</HashLink>{" "}
        to help spice up your night! Why not check out how you can make your
        own!
      </p>
      <h2>Check out more about our product!</h2>
      <p>
        Want to learn more? Check out our page{" "}
        <HashLink to="/about/drink">About Italian Energy Drink</HashLink>
      </p>
      <p>
        Interested in purchasing? Click here to{" "}
        <HashLink to="/purchase/product">Buy Our Product</HashLink>
      </p>
      <img src={glass} alt="Energy Drink and Glass" />
      <footer>
        &copy; 2023 IFBC and Dino Luzzi Energy Drink
        <br></br>
        DISCLAIMER: This is <strong>NOT</strong> the offical website of IFBC or
        Dino Luzzi Energy Drink
      </footer>
    </>
  );
}
