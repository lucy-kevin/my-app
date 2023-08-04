import { useParams } from "react-router-dom";
import House from "./"

const HouseFromQuery = ({ allHouses}) =>{
    const { id } =  useParams();
    const house = allHouse.find((h)=> h.id === parseInt(id));

    if(!house )return<div>House not found.</div>;
    return<House house ={house}></Hous>
}

export default HouseFromQuery;