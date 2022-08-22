import React from 'react'
import useFetch from '../hook/useFetch'

const CardResident = ({url}) => {
  
  const resident = useFetch(url)

  // const statusColor = () => {
  //   switch(resident?.status) {
  //     case 'Dead':
  //       return '#B94343'
  //       break;
  //     case 'Alive':
  //       return '#4AB648'
  //       break;
  //     case 'unknown':
  //       return '#938686'
  //       break;
  //   }
  // }

  const statusColor = {
    'Alive': '#4AB648',
    'Dead': '#B94343'
  }
  const statusUnknown = '#938686'

  const setColor = statusColor[resident?.status] || statusUnknown


  // console.log(resident)

  return (
    <article className='character-card'>
      <header className='character-card__top-section'>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='status-label'>
          <div className='circle' style={{backgroundColor: setColor}}></div>
          <span>{resident?.status}</span>
        </div>
        <h2>{resident?.name}</h2>
      </header>
      <div>
        <ul>
          <li><span>Species:</span><br />{resident?.species}</li>
          <li><span>Origin: </span><br />{resident?.origin.name}</li>
          <li><span>Episodes: </span><br />{resident?.episode.length}</li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident