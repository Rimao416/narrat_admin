import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <span
          className="navbar__left--icon"
          style={{ cursor: "pointer" }}
        >
          <HiMiniChevronDoubleLeft />
        </span>
        <p className="navbar__left--text">Bienvenue dans votre espace</p>
      </div>
      <div className="navbar__right">ELEMENT</div>
    </div>
  );
}

export default Navbar;
