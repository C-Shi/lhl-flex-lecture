import React, { useState } from 'react';
import CampsiteListItem from './CampsiteListItem';

export default function CampsiteList(props) {


    const bookAll = () => {
        // setCampsiteList((currentList) => {
        //     return currentList.map((currentCampsite) => {
        //         return {...currentCampsite, status: 'Booked'}
        //     })
        // })

        const campsiteListCopy = props.campsiteList.map(campsite => {
            return {...campsite, status: 'Booked'}
        })
        props.setCampsiteList(campsiteListCopy) 
    }

    const bookById = (id) => {
        props.setCampsiteList((currentList) => {
            return currentList.map(currentCampsite => {
                if (currentCampsite.id == id) {
                    return {...currentCampsite, status: 'Booked'}
                } else {
                    return currentCampsite
                }
            })
        })
    }

    const campsiteListItemArray = props.campsiteList.map(campsite => {
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