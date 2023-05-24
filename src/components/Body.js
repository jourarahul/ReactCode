import RestarurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";



const Body=()=>{

    const [searchInput,setSearchInput] =useState("KFC");
    const [listOfRestaurants,setAllRestaurants] = useState(resList);

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants()
    {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6339793&lng=74.8722642&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setAllRestaurants(json.data.cards[2].data.data.cards)
    }

    return (<div className="body">
        <input type="text" 
        className="search-input"
         value={searchInput}
          placeholder="Search"
        onChange=
        {(e)=>setSearchInput(e.target.value)}>
        </input>

        <button className="Search" onClick={()=>{
            console.log(searchInput);
            const filtered=listOfRestaurants.filter((rest)=>rest.data.name.includes(searchInput));
            setAllRestaurants(filtered);
        }}>
            Search</button>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>res.data.avgRating>4);
                setAllRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
            </div>
        <div className="res-container">
        {
          listOfRestaurants.map(restaurant=><RestarurantCard key={restaurant.data.id} resData={restaurant}/>)
        }
        </div>
    </div>);
}

export default Body;