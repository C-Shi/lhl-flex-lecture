import { useState } from 'react'
import CampgroundListItem from './CampgroundListItem'
import Spinner from '../Spinner'
import initialCampgrounds from '../db/campground'

export default function CampgroundList () {
    const [campgrounds, setCampgrounds] = useState(initialCampgrounds)
    const [loading, setLoading] = useState(false)

    const bookCampground = (id) => {
        setLoading(true)
        setCampgrounds(currentCampgrounds => {
            const newCampgrounds = currentCampgrounds.map(c => {
                if (c.id === id) {
                    return {...c, available: false}
                }
                return c
            })
            return newCampgrounds
        })
        setTimeout(() => setLoading(false), 1000)
    }

    const deleteCampground = (id) => {
        setLoading(true)
        setCampgrounds(currentCampgrounds => {
            const newCampgrounds = currentCampgrounds.filter(c => {
                return c.id !== id
            })
            return newCampgrounds
        })
        setTimeout(() => setLoading(false), 1000)
    }

    const campgroundsList = campgrounds.map(cg => {
        return (
            <CampgroundListItem 
                campground={cg} 
                bookCampground={bookCampground} 
                deleteCampground={deleteCampground}
                key={cg.id}
            />
        )
    })

    return (
        <div className="container campground-list">
            <div className="alert alert-primary">Book Campground</div>
            <div className="row">
                {loading ? <Spinner /> : campgroundsList}
            </div>
        </div>
    )
}