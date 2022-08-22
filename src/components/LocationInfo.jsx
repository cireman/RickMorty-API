import React from 'react'

const LocationInfo = ({location}) => {
  
  return (
    <article className='global--info--container'>
      <ul className='global--info'>
        <li className='global-details'>
          <span className='global-title-details'>Name: </span>
          <br />{location?.name}
        </li>
        <li className='global-details'>
          <span className='global-title-details'>Type: </span>
          <br />{location?.type}
        </li>
        <li className='global-details'>
          <span className='global-title-details'>Dimension: </span>
          <br />{location?.dimension}
        </li>
        <li className='global-details'>
          <span className='global-title-details'>Population: </span>
          <br />{location?.residents.length}
        </li>
      </ul>
    </article>
  )
}

export default LocationInfo