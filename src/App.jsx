import React from 'react'
import ContextApi from './contextapi/ContextApi'
import { Outlet } from 'react-router-dom'
import Authcontextapi from './contextapi/Authcontextapi'
import Mini from './components/Nav'

const App = () => {
  return (
    <div>
      <ContextApi>
        <Authcontextapi>
          <Mini/>
        <Outlet/> 
        </Authcontextapi>
      </ContextApi>
    </div>
  )
}

export default App