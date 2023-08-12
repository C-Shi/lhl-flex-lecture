import { useState } from 'react'
import HotelListItem from './HotelListItem'
import Spinner from '../Spinner'
import initialHotels from '../db/hotel'

export default function HotelList () {
    const [hotels, setHotels] = useState(initialHotels)
    const [loading, setLoading] = useState(false)

    const bookHotel = (id) => {
        setLoading(true)
        setHotels(currentHotels => {
            const newHotels = currentHotels.map(h => {
                if (h.id === id) {
                    return {...h, available: false}
                }
                return h
            })
            return newHotels
        })
        setTimeout(() => setLoading(false), 1000)
    }

    const deleteHotel = (id) => {
        setLoading(true)
        setHotels(currentHotels => {
            const newHotels = currentHotels.filter(h => {
                return h.id !== id
            })
            return newHotels
        })
        setTimeout(() => setLoading(false), 1000)
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
            <div className="alert alert-primary">Book Hotel</div>
            <div className="row">
                {loading ? <Spinner/> : hotelList}
            </div>
        </div>
    )
}