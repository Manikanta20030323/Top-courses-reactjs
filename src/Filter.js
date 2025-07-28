

function Filter(props){
     
    
    return(
        <div>           
            {
               props.filterData.map((item)=>{
                 return  <button key={item.id}>{item.title}</button>
                })
            }
        </div>
    )
}

export default Filter;