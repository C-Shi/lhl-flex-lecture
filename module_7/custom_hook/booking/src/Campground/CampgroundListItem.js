export default function CampgroundListItem(props) {
    return (
        <div className="card col-2 mx-3 my-3" key={props.campground.id}>
            <img src="https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d" className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title">{props.campground.name}</h6>
                <p className="card-text">Fee: ${props.campground.fee}/night</p>

                <div className="d-flex justify-content-between">
                    {props.campground.available && 
                        <button className="btn btn-outline-primary btn-sm" 
                        onClick={() => { props.bookCampground(props.campground.id) }}>Book</button>}

                    <button className="btn btn-outline-danger btn-sm" 
                        onClick={() => { props.deleteCampground(props.campground.id) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}