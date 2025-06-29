import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/sahil01012007`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])

  return (
    <div>
      Github followers : {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch(`https://api.github.com/users/sahil01012007`)

    return response.json()
}
