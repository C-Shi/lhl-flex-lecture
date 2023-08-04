export default function CampgroundListItem(props) {
    return (
        <div className="card col-3 mx-3 my-3" key={props.campground.id}>
            <img src={props.campground.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.campground.name}</h5>
                <p className="card-text">{props.campground.description}</p>
                {props.campground.available && <button className="btn btn-primary btn-sm" onClick={() => { props.bookCampground(props.campground.id) }}>Book</button>}
            </div>
        </div>
    )
}