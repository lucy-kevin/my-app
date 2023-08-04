
import './main-page.css';
import { useEffect, useState, useMemo } from 'react';
import logo from "./Icon2.png";
import Header from './header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import house from './houses.json';

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
      <HouseFilter allHouses={allHouses}/>
      <Switch>

            <Route exact path='/'>
          <FeaturedHouse house ={featuredHouse}/>
        </Route>
        <Route path='/searchresults/:country'>
          <SearchResults allHouses={allHouses}/>
        </Route>
        <Route path="/house/:id">
          <HouseFromQuery allHouses={allHouses}/>

        </Route>
    

      </Switch>
      </div>
    </Router>
  );
}
export default App;
