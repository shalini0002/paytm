import React from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

function Dashboard() {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={"65486"}/>
        <Users />
      </div>
    </div>
  )
}

export default Dashboard