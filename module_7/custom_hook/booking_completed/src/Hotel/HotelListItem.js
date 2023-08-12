export default function HotelListItem(props) {
    return (
        <div className="card col-2 mx-3 my-3" key={props.hotel.id}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title">{props.hotel.name}</h6>
                <p className="card-text">Fee: ${props.hotel.fee}/night</p>

                <div className="d-flex justify-content-between">
                    {props.hotel.available && 
                        <button className="btn btn-outline-primary btn-sm" 
                            onClick={() => { props.bookHotel(props.hotel.id) }}
                        >Book</button>}

                    <button className="btn btn-outline-danger btn-sm" 
                        onClick={() => { props.deleteHotel(props.hotel.id) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}