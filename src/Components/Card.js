
function Card(props){

    return(
        <div>
            <div>
                <img src={props.course.image.url}></img>
                <div>
                    <button>love</button>
                </div>
            </div>
            
            <div>
                {props.course.title}
            </div>
            <div>
                {props.course.description}
            </div>
            
        </div>
    )

}

export default Card;