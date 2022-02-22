import React, { useContext, useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import { WeatherContext } from '../../hooks/useWeather';
import { 
        DetailsInfo, DetailsSection, DetailsText,
        Form, Hr, NavBlur, NavContainer, NavLocation,
        NavLocationPlaces, NavLocationWrap, NavWeatherDetails,
        NavWeatherTitle, NavWrap, PlacesText, SearchBtn, SearchInput
    } from './WeatherNavElements';

const WeatherNav = ({toggle, isOpen}) => {
    const {weatherData} = useContext(WeatherContext)
    const {handleInput} = useContext(WeatherContext)

    //PEGAR A CIDADE INFORMADA E MOSTRAR OS VALORES
    const [input, setInput]= useState('');

    const handleChange=(event)=>{
        setInput(event.target.value)
        console.log(input)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        handleInput(input)
    }
    
   

  return (
      <NavContainer
        isOpen={isOpen}
        
      >
          <NavBlur/>
          <NavWrap>
              {/* Localização e a parte de pesquisa */}
              <NavLocation>
                  <NavLocationWrap>
                      <Form action="#">
                        <SearchInput
                            placeholder="Pesquise uma localização"
                            type="search"
                            value={input}
                            onChange={handleChange}
                        />

                        <SearchBtn
                            type="submit"
                            onClick={handleSubmit}
                        >
                        <BsSearch/>
                        </SearchBtn>
                      </Form>
                  </NavLocationWrap>   

                  <NavLocationPlaces
                    onClick={toggle}
                  >
                  <Hr
                   onClick={toggle}
                  />
                      <PlacesText>São Paulo</PlacesText>
                      <PlacesText>Rio de Janeiro</PlacesText>
                      <PlacesText>Natal</PlacesText>
                  </NavLocationPlaces>
              </NavLocation>

              {/* Detalhes do clima, umidade vento e etc */}
               <NavWeatherDetails
               onClick={toggle}
               >
                     <Hr/>
                    <NavWeatherTitle>Detalhes do clima</NavWeatherTitle>

                    <DetailsSection>
                        <DetailsText>{weatherData.weather && weatherData.weather[0].main}</DetailsText>
                        <DetailsInfo>
                            {weatherData.weather && 
                        weatherData.weather[0].description[0].toUpperCase()+weatherData.weather[0].description.slice(1)}
                        </DetailsInfo>
                    </DetailsSection>

                    <DetailsSection>
                        <DetailsText>Umidade</DetailsText>
                        <DetailsInfo>{weatherData.main && weatherData.main.humidity}%</DetailsInfo>
                    </DetailsSection>

                    <DetailsSection>
                        <DetailsText>Vento</DetailsText>
                        <DetailsInfo>{weatherData.wind && weatherData.wind.speed}Km/h</DetailsInfo>
                    </DetailsSection>

                   
              </NavWeatherDetails> 

          </NavWrap>
      </NavContainer>
  );
};

export default WeatherNav;
