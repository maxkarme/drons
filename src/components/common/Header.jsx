import "./Header.css";
import BadDron from "../../assets/baddron.png"
import Logo from "../../assets/logo.png"
import GoodDron from "../../assets/gooddron.png"

export default function Header(props) {
  return (
    <header>
    <nav className="navbar">
        <div className="navbar__bad-dron">
            <img src={BadDron} className="navbar__img navbar__bad-dron_img" alt="" />
        </div>
        <div className="navbar__logo">
            <p className="navbar__logo-text">DtD</p>
        </div>
        <div className="navbar__good-dron">
            <img src={GoodDron} className="navbar__img navbar__good-dron_img" alt="" />
        </div>
    </nav>
  </header>
  )
}