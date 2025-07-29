
function Cards(props)
 {
    let ans=[];
    function getCourses()
    {
        // console.log(Object.values(props.courses));
        Object.values(props.courses).forEach((courseArray)=>{
            courseArray.forEach((course)=>{
                // console.log(course);
                ans.push(course);
            })
        });
        console.log(ans);
        return ans;
    }

    getCourses();
    return(
        <div>i am a cards</div>
    )
}

export default Cards