import Card from "./Card";
function Cards(props)
 {
    let ans=[];
    function getCourses()
    {
        // console.log(Object.values(props.courses));
        if(props.curFilter =="All")
        {
            Object.values(props.courses).forEach((courseArray)=>{
            courseArray.forEach((course)=>{
                // console.log(course);
                ans.push(course);
            })
        });
        // console.log(ans);
        return ans;
        }
        else if(props.curFilter === "Development")
        {
            return props.courses.Development;
        }
        else if(props.curFilter === "Business")
        {
            return props.courses.Business;
        }
        else if(props.curFilter === "Design")
        {
            return props.courses.Design;
        }
        else if(props.curFilter === "Lifestyle")
        {
            return props.courses.Lifestyle;
        }
        
        
    }

    getCourses();
    return(
        <div>
            {
                getCourses().map((course)=>{
                    return <Card key={course.id} course={course}/>
                })
            }
           
        </div>
    )
}

export default Cards