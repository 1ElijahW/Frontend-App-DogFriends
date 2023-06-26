import React from 'react'
import DogInfoComponent from '../../components/DogInfoComponent'
import OwnerInfoComponent from '../../components/OwnerInfoComponent'
import './settings.css'

function Settings() {
  return (
  <div>
    <h1>Settings</h1>
    <DogInfoComponent/>
    <OwnerInfoComponent/>
  </div>
  )
}

export default Settings