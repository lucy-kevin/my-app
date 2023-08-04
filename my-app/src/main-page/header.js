import logo from "./Icon2.png";
 
const Header = ({subtitles}) => (
    <header className = "row">
        <div className = "col-md-5">
            <img src= {logo} className= "logo" alt ="logo"/>
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {subtitles}
        </div>
    </header>
);
export default Header;