import featuredHouse from './featured-house';
import './main-page.css';
import { useEffect, useState, useMemo } from 'react';
import logo from "./Icon2.png";
import Header  from './header';
import {BrowserRouter as Router, Route, Switch }from "react-router-dom";
import FeaturedHouse from './featured-house';

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

  const featuredHouse = useMemo(()=>{
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random()* allHouses.length);
       return allHouses[randomIndex];
    }
  },[allHouses])
  //load data

  
 
  return(
 
    <Router>
      <div className="container">
        <Header subtitles="Providing houses all over the world"/>
      
      <Switch>
        <Route path="/">
          <FeaturedHouse house ={featuredHouse}></FeaturedHouse>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}
export default App;
