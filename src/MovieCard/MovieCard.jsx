export function MovieCard (props){
    return (
        <div className="movieCard">
            <div className="nameCard">
                <h2>Movie Card</h2>
            </div> 
            <div className="movieImage">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="movieDetails">
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <p>{props.seen}</p>
            </div>
        </div>
    )
}