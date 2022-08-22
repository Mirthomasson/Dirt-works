import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import proj1 from '../images/project-1.jpeg';
import proj2 from '../images/project-2.jpeg';
import proj3 from '../images/project-3.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our recent projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src={proj1}
                text="Building a pond"
                label='Pond'
                path='/services'
                />
                <CardItem 
                src={proj2}
                text="Digging a trench for creekbed"
                label='Creek'
                path='/services'
                />
                <CardItem 
                src={proj3}
                text="Running cable under driveway for power"
                label='Underground cable'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
