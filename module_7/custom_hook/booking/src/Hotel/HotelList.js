import { useState } from 'react'
import HotelListItem from './HotelListItem'

const hotelData = [
    { id: 1, name: 'Holiday Express Inn', fee: 100, available: true },
    { id: 2, name: 'Emerald Hotel & Suites', fee: 120, available: true },
    { id: 3, name: 'Ramada Plaza', fee: 95, available: true },
    { id: 4, name: 'Hyatt Regency', fee: 140, available: true },
    { id: 5, name: 'Sandaman Signature', fee: 120, available: true },
    { id: 6, name: 'Best Western Suites', fee: 105, available: true },
    { id: 7, name: 'Sheraton', fee: 110, available: true },
]

export default function CampgroundList () {
    const [hotels, setHotels] = useState(hotelData)

    const bookHotel = (id) => {
        setHotels(currentHotels => {
            const newHotels = currentHotels.map(h => {
                if (h.id === id) {
                    return {...h, available: false}
                }
                return h
            })
            return newHotels
        })
    }

    const deleteHotel = (id) => {
        setHotels(currentHotels => {
            const newHotels = currentHotels.filter(h => {
                return h.id !== id
            })
            return newHotels
        })
    }

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
            <div class="alert alert-primary">Book Hotel</div>
            <div className="row">
                {hotelList}
            </div>
        </div>
    )
}