import React from 'react';
import { DetailsInfo, DetailsSection, DetailsText, Hr, NavBlur, NavContainer, NavLocation, NavLocationPlaces, NavLocationWrap, NavWeatherDetails, NavWeatherTitle, NavWrap, PlacesText, SearchBtn, SearchInput } from './WeatherNavElements';
import {BsSearch} from 'react-icons/bs'

const WeatherNav = () => {
  return (
      <NavContainer>
          <NavBlur/>
          <NavWrap>
              {/* Localização e a parte de pesquisa */}
              <NavLocation>
                  <NavLocationWrap>
                    <SearchInput placeholder="Pesquise uma localização"/>
                    <SearchBtn><BsSearch/></SearchBtn>
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
                        <DetailsText>Nublado</DetailsText>
                        <DetailsInfo>86%</DetailsInfo>
                    </DetailsSection>

                    <DetailsSection>
                        <DetailsText>Umidade</DetailsText>
                        <DetailsInfo>32%</DetailsInfo>
                    </DetailsSection>

                    <DetailsSection>
                        <DetailsText>Vento</DetailsText>
                        <DetailsInfo>4km/h</DetailsInfo>
                    </DetailsSection>

                   
              </NavWeatherDetails> 

          </NavWrap>
      </NavContainer>
  );
};

export default WeatherNav;
