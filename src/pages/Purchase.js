import { HashLink } from "react-router-hash-link";
import regular from "../assets/regulardino.png";
import sugarfree from "../assets/SugarFreeDino.png";

export default function Purchase() {
  return (
    <>
      <h1>Where can you purchase our product?</h1>
      <p>
        While our drink is avaiable in many different stores, it is also
        possibile to purchase our product online below are 2 links where you can
        purchase the beverage on our page on TalkShopLive!
      </p>
      <div class="container">
        <div class="text1">
          <p id="buy">
            Our main event and the drink that started it all, be sure to get a
            blast when you have a nice refreshing drink of the original{" "}
            <em>Dino Luzzi Energy Drink!</em> <br></br>
            <a href="https://talkshop.live/product/3K7unuSCm-zZ/dino-luzzi-energy-drink-72523896">
              Purchase Our Energy Drink Here!
            </a>
          </p>
        </div>
        <div class="image1">
          <p>
            <img src={regular} id="energy" alt="Regular Energy Drink" />
          </p>
        </div>
        <div class="text2">
          <p id="buy">
            Our newly created sugar free version of{" "}
            <em>Dino Luzzi Energy Drink</em> provides all the benefits of it's
            original counter with less sugar so that you can stay energized
            through our the day! {""}
            <br></br>
            <a href="https://talkshop.live/product/tTQtGqJwvuG1/dino-luzzi-energy-drink-sugar-free-6ac87499">
              Purchase Our Sugar Version Here!
            </a>
          </p>
        </div>
        <div class="image2">
          <p>
            <img src={sugarfree} id="energy" alt="Sugar Free Energy Drink" />
          </p>
        </div>
      </div>
      <p id="buy">
        You can also purchase our product on Amazon!
        <br></br>
        <a href="https://www.amazon.com/dp/B09K7Y5DG7/ref=cm_sw_r_wa_api_glt_fabc_2XYCJFQW66HZ6QFF07QD?th=1">
          Click here to buy on Amazon!
        </a>
      </p>
      <HashLink to="/">Return to Main Page</HashLink>
    </>
  );
}
