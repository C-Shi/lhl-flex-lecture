import { useState } from 'react'
import CampgroundListItemReducer from './CampgroundListItemReducer'

const campgroundData = [
    { id: 1, name: 'Tunnel Mtn. Village I', fee: 30, available: true },
    { id: 2, name: 'Two Jack Lakeside', fee: 25, available: true },
    { id: 3, name: 'Johnston Canyon', fee: 40, available: true },
    { id: 4, name: 'Castle Mountain', fee: 22, available: true },
    { id: 5, name: 'Mosquito Creek', fee: 21, available: true },
    { id: 6, name: 'Lake Louise', fee: 26, available: true },
    { id: 7, name: 'Big Bar Lake', fee: 28, available: true },
    { id: 8, name: 'Ellison', fee: 36, available: true },
    { id: 9, name: 'Champion Lake', fee: 42, available: true },
    { id: 10, name: 'Rainbox Falls', fee: 32, available: true },
]

export default function CampgroundListReducer () {
    const [campgrounds, setCampgrounds] = useState(campgroundData)

    const bookCampground = (id) => {
        setCampgrounds(currentCampgrounds => {
            let newCampgrounds = [...campgrounds];
            newCampgrounds = newCampgrounds.map(campground => {
                if (campground.id === id) {
                    return {...campground, available: false}
                }
                return campground
            })
            setCampgrounds(newCampgrounds)
        })
    }

    const deleteCampground = (id) => {
        let newCampgrounds = [...campgrounds];
        newCampgrounds = newCampgrounds.filter(campground => {
            return campground.id !== id
        })
        setCampgrounds(newCampgrounds)
    }

    const campgroundsList = campgrounds.map(cg => {
        return (
            <CampgroundListItemReducer key={cg.id} campground={cg} bookCampground={bookCampground} deleteCampground={deleteCampground}/>
        )
    })

    return (
        <div className="container campground-list">
            <div className="row">
                {campgroundsList}
            </div>
        </div>
    )
}