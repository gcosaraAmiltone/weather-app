import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Day from '../Day/Day';
import Image from '../Image/Image';
import Degrees from '../Degrees/Degrees';


import './App.scss';

function App() {

  const [state, setState] = useState({
    data: [],    
    tempMax: '',
    dayName: [],
    icon: '',
    sevenDays: [],
  });
  const days = [
    'Dim',
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Wen',
    'Sam'
  ];
  
  const currentDay = new Date('2020-01-14').getDay();
  const dayName = days[currentDay]; 
  console.log("day name =>", dayName);
  
  
  useEffect(()=>{
  axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=Niort,FR&&days=7&key=0fb9ad1c5ada4c879e5689c10a997019`
    //'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=c43cdb00d4e5df5c5224beeb49b93999'
  )
    .then(response => {  
      console.log("res =>", response.data.data);
           
       setState({...state,
        data:response.data.data,
        dayName,
        })
      
      
    console.log(state.sevenDays);
    
      })
    .catch(error => {
      //console.log("error =>", error)),
      setState({
        ...state,
       
        

      });
    })
      
  .finally(function () {
    // always executed
  });
},[])

  
  return (
    <div className="App">
      {state.data.map(day => {
           console.log('data length =>', state.data.length);
           const days = [
            'Dim',
            'Lun',
            'Mar',
            'Mer',
            'Jeu',
            'Wen',
            'Sam'
          ];
           const currentDay = new Date(day.valid_date).getDay();
           const dayName = days[currentDay]; 
           console.log('current day =>', currentDay);
           
          return (
            <div className="App-day">
              <Day dayName={dayName} />
              <Image icon={day.weather.icon} />
              <Degrees temp={day.temp} />
            </div>
          )
        }
     
      )
      }      
    </div>
  );
}

export default App;
