import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <HashLink to="/">Home</HashLink>
        </li>
        <li>
          <HashLink to="/about/drink">About</HashLink>
        </li>
        <li>
          <HashLink to="/purchase/product">Purchase</HashLink>
        </li>
        <li>
          <HashLink to="/racing/team">Racing</HashLink>
        </li>
        <li>
          <HashLink to="/our/beverages">Beverages</HashLink>
        </li>
      </ul>
    </nav>
  );
}
