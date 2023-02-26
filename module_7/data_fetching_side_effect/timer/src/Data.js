import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Data() {
  const [data, setData] = useState([])

  useEffect(() => {
    // fetch the data when component load
    axios.get('http://localhost:3001/languages')
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
  }, [])

  const dataDisplay = data.map(d => {
    return (
      <li key={d.id}>ID: {d.id} - Name: {d.title}</li>
    )
  })
  return (
    <>
      <h1>Data Component</h1>
      <ul>
        {dataDisplay}
      </ul>
    </>
  )
}