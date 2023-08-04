import { useReducer } from 'react'
import CampgroundListItem from './CampgroundListItemReducer'

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

export default function CampgroundList () {
    const reducer = (state, action) => {
        // action = { type: 'BOOK/DELETE', id: 'campground id'}
        switch(action.type) {
            case 'BOOK':
                return state.map(c => {
                    if (c.id === action.id) {
                        return {...c, available: false}
                    }
                    return c
                })
            case 'DELETE':
                return state.filter(c => {
                    return c.id !== action.id
                })
        }
    }
    const [campgrounds, dispatch] = useReducer(reducer, campgroundData)

    const campgroundsList = campgrounds.map(cg => {
        return (
            <CampgroundListItem campground={cg} dispatch={dispatch} key={cg.id}/>

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