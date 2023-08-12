import CampgroundListItem from './CampgroundListItem'
import Spinner from '../Spinner'

export default function CampgroundList (props) {
    const { campgrounds, bookCampground, deleteCampground, loadingCampground} = props.campgrounds

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
                {loadingCampground ? <Spinner /> : campgroundsList}
            </div>
        </div>
    )
}