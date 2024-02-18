import React, { useState } from 'react';
import CampsiteListItem from './CampsiteListItem';

export default function CampsiteList() {
    const [campsiteList, setCampsiteList] = useState([
        {id: 1, name: 'Campsite 1', status: 'Vacant', url: 'https://images.unsplash.com/photo-1598417136294-7c1c4c94931f'},
        {id: 2, name: 'Campsite 2', status: 'Vacant', url: 'https://images.unsplash.com/photo-1550957886-ac45931e5779' },
        {id: 3, name: 'Campsite 3', status: 'Vacant', url: 'https://images.unsplash.com/photo-1636569999480-7eed231a7633'},
        {id: 4, name: 'Campsite 4', status: 'Vacant', url: 'https://images.unsplash.com/photo-1488790881751-9068aa742b9b'}
    ])

    const bookAll = () => {
        // setCampsiteList((currentList) => {
        //     return currentList.map((currentCampsite) => {
        //         return {...currentCampsite, status: 'Booked'}
        //     })
        // })

        const campsiteListCopy = campsiteList.map(campsite => {
            return {...campsite, status: 'Booked'}
        })
        setCampsiteList(campsiteListCopy) 
    }

    const bookById = (id) => {
        setCampsiteList((currentList) => {
            return currentList.map(currentCampsite => {
                if (currentCampsite.id == id) {
                    return {...currentCampsite, status: 'Booked'}
                } else {
                    return currentCampsite
                }
            })
        })
    }

    const campsiteListItemArray = campsiteList.map(campsite => {
        return <CampsiteListItem 
                    key={campsite.id} 
                    id={campsite.id} name={campsite.name} 
                    status={campsite.status} 
                    url={campsite.url}
                    bookById={bookById}
                />
    })

    return (
        <div className="container">
            <div className="row">
                {campsiteListItemArray}
            </div>
            <div className="row">
                <button onClick={bookAll} className="btn btn-primary">Book All!</button>
            </div>
        </div>
    )
}