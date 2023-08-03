
import './main-page.css';
import { useEffect, useState } from 'react';
import logo from "./Icon2.png";
import Header  from './header';

function App(){
  const [allHouses, setAllHouses] = useState([]);
  useEffect(()=>{
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
      
    };
    fetchHouses();
  },[]);
  //load data
  let featuredHouse ={};
  if(allHouses.length){
    const randomIndex = Math.floor(Math.random()* allHouses.length);
    featuredHouse = allHouses[randomIndex];
  }
 
  return(
    <div className='container'>
      <Header subtitles= "Providing houses all over the world"
      />
    </div>
  );
}
export default App;
