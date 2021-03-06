import "./Topbar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";

export default function Topbar({ open, setOpen }) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            dsmithdev
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (518)-888-5579</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>david@dsmithdev.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/VimDiesel123">
              <GitHub className="icon" />
              <span> VimDiesel123</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
