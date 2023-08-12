import HotelListItem from './HotelListItem'
import Spinner from '../Spinner'

export default function HotelList (props) {
    const { hotels, bookHotel, deleteHotel, loadingHotel} = props.hotels

    const hotelList = hotels.map(h => {
        return (
            <HotelListItem 
                hotel={h} 
                bookHotel={bookHotel} 
                deleteHotel={deleteHotel}
                key={h.id}
            />
        )
    })
    return (
        <div className="container campground-list">
            <div className="alert alert-primary">Book Hotel</div>
            <div className="row">
                {loadingHotel ? <Spinner/> : hotelList}
            </div>
        </div>
    )
}