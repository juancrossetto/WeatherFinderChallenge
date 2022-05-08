import React, { FC } from 'react';
import WeatherForm from '../../components/WeatherForm';
import WeatherInformation from '../../components/WeatherInformation';
import { useWeather } from '../../hooks/useWeather';
import './styles.css';

const HomePage: FC = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 title-container">
                <div>
                  <h1 data-testid="home-title" className="title-container__title">
                    Weather Finder
                  </h1>
                  <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
                </div>
              </div>
              <div className="col-7 form-container">
                <WeatherForm />
                <WeatherInformation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
