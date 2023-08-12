import { useState } from 'react'

export default function useAccomodation(initialAccomodations) {
    const [accomodations, setAccomodations] = useState(initialAccomodations)
    const [loading, setLoading] = useState(false)

    const toBook = (id) => {
        setLoading(true)
        setAccomodations(currentAccomodations => {
            const newAccomodations = currentAccomodations.map(a => {
                if (a.id === id) {
                    return {...a, available: false}
                }
                return a
            })
            return newAccomodations
        })
        setTimeout(() => setLoading(false), 1000)
    }

    const toDelete = (id) => {
        setLoading(true)
        setAccomodations(currentAccomodations => {
            const newAccomodations = currentAccomodations.filter(a => {
                return a.id !== id
            })
            return newAccomodations
        })
        setTimeout(() => setLoading(false), 1000)
    }

    return {
        accomodations,
        toBook,
        toDelete,
        loading
    }
}