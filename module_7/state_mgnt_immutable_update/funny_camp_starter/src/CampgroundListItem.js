export default function CampgroundListItem(props) {
    return (
        <div className="card col-2 mx-3 my-3" key={Math.random()}>
            <img src="https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d" className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title">Campground</h6>
                <p className="card-text">Fee: $30/night</p>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary btn-sm">Book</button>
                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    )
}