import { useState } from 'react'
import CampgroundListItem from './CampgroundListItem'

export default function CampgroundList () {
    const [campgrounds, setCampgrounds] = useState([
        { id: 1, name: 'Two Jack Main', description: 'Hello World', available: true, image: 'https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d' },
        { id: 2, name: 'Two Jack Main', description: 'Hello World', available: true, image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b' },
        { id: 3, name: 'Two Jack Main', description: 'Hello World', available: true, image: 'https://images.unsplash.com/photo-1533873984035-25970ab07461' },
        { id: 4, name: 'Two Jack Main', description: 'Hello World', available: true, image: 'https://images.unsplash.com/photo-1497900304864-273dfb3aae33' },
        { id: 5, name: 'Two Jack Main', description: 'Hello World', available: true, image: 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7' },
        { id: 6, name: 'Two Jack Main', description: 'Hello World', available: true, image: 'https://images.unsplash.com/photo-1502218808493-e5fd26249efc' },
    ])

    const bookCampground = (id) => {
        setCampgrounds(currentCampgrounds => {
            const newCampgrounds = currentCampgrounds.map(c => {
                if (c.id === id) {
                    return {...c, available: false}
                }
                return c
            })
            return newCampgrounds
        })
    }

    const campgroundsList = campgrounds.map(cg => {
        return (
            <CampgroundListItem campground={cg} bookCampground={bookCampground}/>
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