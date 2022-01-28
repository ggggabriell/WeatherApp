import React, { useEffect, useState } from 'react';
import background from '../../images/image.svg'
import WeatherDisplay from '../WeatherDisplay';
import WeatherNav from '../WeatherNav';
import {WContainer, WBg, ImageBg, WWrap} from './WeatherElements'
import WeatherData from '../../WeatherData'

const WeatherApp = () => {
  const [data, setData]= useState([]);
  const [weatherInfo, setWeatherInfo]=useState([]);
  const [currentTime, setCurrentTime]= useState(0);
  const [currentData, setCurrentData]= useState(0);
  useEffect(()=>{

    //Get Weather Data
    const loadAll= async()=>{
      let list= await WeatherData.getWeather();
      setData(list[0].alldata);
      setWeatherInfo(list[0].alldata.main)

      console.log(data)
    }
    loadAll();
  },[])


  //Set Current Time
  const displayClock=()=>{
    setCurrentTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    setTimeout(displayClock, 1000); 
    setCurrentData(new Date().toLocaleDateString());
  }
  //Continuar atualizando o horario 
  useEffect(()=>{
    window.onload=displayClock();
  },)

 



  return (
  <WContainer>
      <WBg>
        <ImageBg src={background}/>
      </WBg>
      <WWrap>
        <WeatherDisplay
         city={data.name}
         weatherInfo={weatherInfo}
         currentTime={currentTime}
          currentData={currentData}
        />

        <WeatherNav /> 
      </WWrap>
  </WContainer>
      

  );
};

export default WeatherApp;
