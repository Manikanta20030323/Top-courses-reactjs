import React, { useEffect, useState } from "react";
import "./App.css";
import {filterData,apiUrl} from './data';
import Filter from "./Filter";
import Cards from './Components/Cards'
const App = () => {

  const [courses,setCources]= useState({});
  const [curFilter, setCurFilter] = useState("All");

  function handleFilterChange(filter){
    setCurFilter(filter);
  }

const fetchData= async()=>{
      try{
        const data= await fetch(apiUrl);
        const result = await data.json();
        //  console.log(result.data)
        setCources(result.data);
          
      }
      catch(err)
      {
        console.error("error while setching the data", err);
      }
    }
  useEffect(()=>{
    
    
    fetchData();
    
  },[]);


  return <div className="Wrapper">
    <div>
      Top Courses
    </div>
    <div>
      <Filter filterData={filterData}  handleFilterChange={handleFilterChange}/>
    </div>
    <div className="Courses" >
      <Cards courses={courses} curFilter={curFilter}/>
    </div>
  </div>;
};

export default App;
