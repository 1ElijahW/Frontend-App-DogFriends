import React from 'react'
import DogInfoComponent from '../components/DogInfoComponent'
import OwnerInfoComponent from '../components/OwnerInfoComponent'

function Settings() {
  return (
  <div>
    <DogInfoComponent/>
    <OwnerInfoComponent/>
    <button>Delete Account</button>
  </div>
  )
}

export default Settings