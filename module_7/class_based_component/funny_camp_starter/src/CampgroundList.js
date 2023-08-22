import { useEffect, useState } from 'react'
import CampgroundListItem from './CampgroundListItem'

export default function CampgroundList () {
    const [campgrounds, setCampgrounds] = useState([]);

    useEffect(() => {
        console.log('Page Rendered')
        fetch('http://localhost:3030/campgrounds')
        .then(res => res.json())
        .then(campgroundData => {
            setCampgrounds(campgroundData)
        })
    }, [])

    useEffect(() => {
        console.log('Page Updated')
        return () => {
            console.log('Page will re-render')
        }
    }, [campgrounds])

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

    const deleteCampground = (id) => {
        setCampgrounds(currentCampgrounds => {
            const newCampgrounds = currentCampgrounds.filter(c => {
                return c.id !== id
            })
            return newCampgrounds
        })
    }

    const campgroundsList = campgrounds.map(cg => {
        return (
            <CampgroundListItem key={cg.id} campground={cg} bookCampground={bookCampground} deleteCampground={deleteCampground}/>
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