import React from 'react';
// import {robots} from './robots';
import Card from './Card';

const CardList = ({robots}) => {
   //accessing array of robots
   return (
    <div>
    {
        robots.map(function(user, idx){
        return (
        <Card 
            key = {idx}
            id={robots[idx].id} 
            name={robots[idx].name} 
            email={robots[idx].email}
        />
        );
        })
    }
    </div>
   );
}

export default CardList;