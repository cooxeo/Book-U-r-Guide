import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-slate-700 center p-4 text-white '>User: {userid}</div>
  )
}

export default User