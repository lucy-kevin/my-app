import logo from "./Icon2.png";
import { Component } from "react";
 class Header extends Component{
    render(){
        return(
            <header className = "row">
                    <div className = "col-md-5">
                        <img src= {logo} className= "logo" alt ="logo"/>
                    </div>
                    <div className="col-md-7 mt-5 subtitle">{this.props.subtitles}
                    </div>
                </header>
            );
        
    }
 }
// const Header = ({subtitles}) => (
//     <header className = "row">
//         <div className = "col-md-5">
//             <img src= {logo} className= "logo" alt ="logo"/>
//         </div>
//         <div className="col-md-7 mt-5 subtitle">
//             {props.subtitles}
//         </div>
//     </header>
// );
export default Header;