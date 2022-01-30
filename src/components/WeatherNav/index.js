import React from 'react';
import {BsSearch} from 'react-icons/bs'
import { 
        DetailsInfo, DetailsSection, DetailsText,
        Form, Hr, NavBlur, NavContainer, NavLocation,
        NavLocationPlaces, NavLocationWrap, NavWeatherDetails,
        NavWeatherTitle, NavWrap, PlacesText, SearchBtn, SearchInput
    } from './WeatherNavElements';

const WeatherNav = ({weatherInfo, weatherDetails, wind, handleChange, handleSubmit, input, rain}) => {
   

  return (
      <NavContainer>
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

                  <NavLocationPlaces>
                  <Hr/>
                      <PlacesText>São Paulo</PlacesText>
                      <PlacesText>Rio de Janeiro</PlacesText>
                      <PlacesText>Natal</PlacesText>
                  </NavLocationPlaces>
              </NavLocation>

              {/* Detalhes do clima, umidade vento e etc */}
               <NavWeatherDetails>
                     <Hr/>
                    <NavWeatherTitle>Detalhes do clima</NavWeatherTitle>

                    <DetailsSection>
                        <DetailsText>{weatherDetails? weatherDetails[0].main: ''}</DetailsText>
                        <DetailsInfo>{rain? '': ''}</DetailsInfo>
                    </DetailsSection>

                    <DetailsSection>
                        <DetailsText>Umidade</DetailsText>
                        <DetailsInfo>{weatherInfo? weatherInfo.humidity: ''}%</DetailsInfo>
                    </DetailsSection>

                    <DetailsSection>
                        <DetailsText>Vento</DetailsText>
                        <DetailsInfo>{wind ? Math.trunc(wind.speed*3.6): ' '}Km/h</DetailsInfo>
                    </DetailsSection>

                   
              </NavWeatherDetails> 

          </NavWrap>
      </NavContainer>
  );
};

export default WeatherNav;
