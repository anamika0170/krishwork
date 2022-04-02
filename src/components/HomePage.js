import React from 'react'
import Navs from './Navs'
import {FaHandPointRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Navs/>
        <div className='container d-flex'>
              
              <div className='w-100 h-100'>
                <FaHandPointRight className='w-50 h-50'/>
              </div>
              <div className='mt-5'><h1><Link to="/patient">GO TO PATIENT LIST </Link></h1></div>
        </div>

    </div>
  )
}

export default HomePage