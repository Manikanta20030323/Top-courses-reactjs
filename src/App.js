import React, { useEffect } from "react";
import "./App.css";
import {filterData,apiUrl} from './data';
import Filter from "./Filter";
const App = () => {

  useEffect(()=>{
    
  })

  // console.log(filterData)
  return <div className="Wrapper">
    <div>
      Top Courses
    </div>
    <div>
      <Filter filterData={filterData}/>
    </div>
    <div className="Courses">
  namste
    </div>
  </div>;
};

export default App;
