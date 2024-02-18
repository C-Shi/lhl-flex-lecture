import React, { useState } from 'react';

export default function Title (props) {
    const [title, setTitle] = useState("Funny Camp")

    const vacant = props.campsiteList.filter(campsite => campsite.status === 'Vacant').length

    const onClickTitile = () => {
        setTitle(() => {
            return "Oh! You clicked on me"
        })
        console.log(title)
    }
    return (
        <>
            <h1 onClick={onClickTitile}>{title} ({vacant} Vacant)</h1>
        </>
    )
}