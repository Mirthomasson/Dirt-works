import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our recent projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="/dirt-works/public/images/project-1.jpeg"
                text="Building a pond"
                label='Pond'
                path='/services'
                />
                <CardItem 
                src="/dirt-works/public/images/project-2.jpeg"
                text="Digging a trench for creekbed"
                label='Creek'
                path='/services'
                />
                <CardItem 
                src="/dirt-works/public/images/project-3.jpeg"
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
