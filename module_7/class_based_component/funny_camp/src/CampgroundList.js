import React from 'react'
import CampgroundListItem from './CampgroundListItem'

export default class CampgroundList extends React.Component {
    constructor () {
        console.log('constructor')
        super();
        
        this.state = {
            campgrounds: []
        }

        this.bookCampground = this.bookCampground.bind(this)
        this.deleteCampground = this.deleteCampground.bind(this)
    }
    

    componentDidMount() {
        console.log('componentDidMount')
        fetch('http://localhost:3030/campgrounds')
        .then(res => res.json())
        .then(campgroundData => {
            this.setState({ campgrounds: campgroundData })
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    bookCampground(id) {
        const newCampgrounds = this.state.campgrounds.map(c => {
            if (c.id === id) {
                return {...c, available: false}
            }
            return c
        })
        this.setState({ campgrounds: newCampgrounds })
    }

    deleteCampground (id) {
        const newCampgrounds = this.state.campgrounds.filter(c => {
            return c.id !== id
        })

        this.setState({ campgrounds: newCampgrounds })
    }

    render() {
        console.log('render')
        const campgroundsList = this.state.campgrounds.map(cg => {
            return (
                <CampgroundListItem key={cg.id} campground={cg} bookCampground={this.bookCampground} deleteCampground={this.deleteCampground}/>
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
}