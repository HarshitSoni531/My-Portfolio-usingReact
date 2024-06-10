import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import Mail from "@mui/icons-material/Mail";

function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icons" />
            <span>+91 836 921 8446 </span>
          </div>

          <div className="itemContainer">
            <Mail className="icons" />
            <span>iharshsoni@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
