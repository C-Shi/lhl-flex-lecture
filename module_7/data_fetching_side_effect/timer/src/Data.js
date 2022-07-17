import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Data() {
  const [data, setData] = useState([])

  const fetchData = () => {

  }

  
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
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}