
function Filter(props){

    
     function filterbuttonHandle(filter){
            props.handleFilterChange(filter)
        
     }
    
    return(
        <div>           
            {
               props.filterData.map((item)=>{
                 return  <button key={item.id} onClick={()=>filterbuttonHandle(item.title)}>{item.title}</button>
                })
            }
        </div>
    )
}

export default Filter;