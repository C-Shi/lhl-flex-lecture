import React from 'react';

export default function CampsiteListItem(props) {
    const bookSite = () => {
        props.bookById(props.id)
    }
    return (
        <div className="card col">
            <img src={props.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Site Statue: {props.status}</p>
                <button onClick={bookSite} className="btn btn-primary">Book Here!</button>
            </div>
        </div>
    )
}