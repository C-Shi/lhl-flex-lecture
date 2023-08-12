import { useState } from 'react'
import useAccomodation from './useAccommodation'

export default function useApplicationData(initialPage, initialCampgrounds, initialHotels) {
    const [page, setPage] = useState(initialPage)

    const {
        accomodations: campgrounds,
        toBook: bookCampground,
        toDelete: deleteCampground,
        loading: loadingCampground
    } = useAccomodation(initialCampgrounds)

    const {
        accomodations: hotels,
        toBook: bookHotel,
        toDelete: deleteHotel,
        loading: loadingHotel
    } = useAccomodation(initialHotels)

    return {
        page: {
            page, 
            setPage
        },

        campgrounds: {
            campgrounds,
            bookCampground,
            deleteCampground,
            loadingCampground
        },

        hotels: {
            hotels,
            bookHotel,
            deleteHotel,
            loadingHotel
        }
    }
}