import FurniroLogo from "../assets/icons/logo.png";
import cartIcon from "../assets/icons/cartIcon.png";
import searchIcon from "../assets/icons/searchIcon.png";
import userIcon from "../assets/icons/NoUserIcon.png";

const Navbar = () => {
  return (
    <nav className="naybarContainer">
      <div className="wrapperDiv">

        <div className="logoLeft">
          <img src={FurniroLogo} alt="FurniroLogo" />
          <h1>Furniro</h1>
        </div>

        <div className="middleLinks">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="rightIcons">

          <div className="userDiv">
            <img src={userIcon} alt="user Icon" />
          </div>

          <div className="searchDiv">
            <img src={searchIcon} alt="search Icon" />
          </div>

          <div className="cartDiv">
            <img src={cartIcon} alt="cart Icon" />
          </div>
          
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
