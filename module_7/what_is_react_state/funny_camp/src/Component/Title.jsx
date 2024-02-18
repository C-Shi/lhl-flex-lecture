import React, { useState } from 'react';

export default function Title () {
    const [title, setTitle] = useState("Funny Camp")

    const onClickTitile = () => {
        setTitle(() => {
            return "Oh! You clicked on me"
        })
        console.log(title)
    }
    return (
        <>
            <h1 onClick={onClickTitile}>{title}</h1>
        </>
    )
}