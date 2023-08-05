
import './main-page.css';
import { useEffect, useState, useMemo } from 'react';
import Header from './header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';

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
