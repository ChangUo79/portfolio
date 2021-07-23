import "./Topbar.scss"
//import { Link } from "react-router-dom"
import { Email } from "@material-ui/icons";

export default function Topbar ()
{
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Erwin.</a>
                    <div className="itemContainer">
                        <Email className="icons" />
                        <span>changuobu79@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <a href="#portfolio" className="component-tag"> Portfolio</a>
                    <a href="#works" className="component-tag"> Works</a>
                </div>
            </div>
            {/* <ul>
                <li><Link to='/'>Introduction</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/works'>Works</Link></li>

            </ul> */}
        </div>
    )
}