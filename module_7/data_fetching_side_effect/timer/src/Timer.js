import { useState, useEffect } from 'react';

export default function Timer() {
  const [privateData, setPrivateData] = useState(0)
  const [publicData, setPublicData] = useState(0)

  useEffect(() => {
    console.log('Warning: Private Data has changed')
  }, [privateData])

  useEffect(() => {
    console.log('Component initialized')
  }, [])

  return (
    <>
      <h2>Public Data</h2>
      <h1 id="public">{publicData}</h1>
      <button onClick={() => setPublicData(publicData + 1)}>Add One</button>

      <h2>Private Data</h2>
      <h1 id="private">{privateData}</h1>
      <button onClick={() => setPrivateData(privateData + 1)}>Add One</button>
    </>
  )
}