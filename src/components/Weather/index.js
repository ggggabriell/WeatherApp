import React, { useEffect, useState } from 'react';
import background from '../../images/image.svg'
import WeatherDisplay from '../WeatherDisplay';
import WeatherNav from '../WeatherNav';
import {WContainer, WBg, ImageBg, WWrap} from './WeatherElements'
import WeatherData from '../../WeatherData'

const WeatherApp = () => {
  const [data, setData]= useState([]);
  const [dataFormat, setDataFormat]= useState([]);
  //Dia e o horario atual | currentTime e currentData
  const [currentTime, setCurrentTime]= useState(0);
  const [currentData, setCurrentData]= useState(0);
  const [ativar, setAtivar]= useState(false);


  //PEGAR A CIDADE INFORMADA E MOSTRAR OS VALORES
  const [input, setInput]= useState('brasil');
  const handleChange=(event)=>{
      setInput(event.target.value)
  }
  const handleSubmit=()=>{
    setAtivar(true);
  }
  useEffect(()=>{
    //Get Weather Data
    const loadAll= async()=>{
      let list= await WeatherData.getWeather(input);
      setData(list[0].alldata);
    
      setDataFormat(
        {
          cidade: list[0].alldata.name,
          horario: data.dt,
          weatherInfo: list[0].alldata.main, 
          weatherDetails: list[0].alldata.weather, 
          wind: list[0].alldata.wind,
          rain: list[0].alldata.rain,
        }
      ) 
      console.log(data)
      
    }
 
    
    loadAll();
    setAtivar(false); 
  },[ativar])
  

  //Set Current Time
  const displayClock=()=>{
    setCurrentTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    setTimeout(displayClock, 1000); 
    setCurrentData(new Date().toLocaleDateString());
  }
  //Continuar atualizando o horario 
  useEffect(()=>{
    window.onload=displayClock();
  },[])

  return (
  <WContainer>
      <WBg>
        <ImageBg src={background}/>
      </WBg>
      <WWrap>
        <WeatherDisplay
         city={dataFormat.cidade}
         weatherInfo={dataFormat.weatherInfo}
         currentTime={currentTime}
         currentData={currentData}
        />

        <WeatherNav 
        weatherInfo={dataFormat.weatherInfo}
        weatherDetails={dataFormat.weatherDetails}
        wind={dataFormat.wind}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
        rain={dataFormat.rain}/> 
      </WWrap>
  </WContainer>
      

  );
};

export default WeatherApp;
