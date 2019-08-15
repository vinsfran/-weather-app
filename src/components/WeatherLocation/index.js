import React, {Component} from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from 'prop-types';
import tranformWeather from "../../services/tranformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handlerUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handlerUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = tranformWeather(data);
            // debugger;
            this.setState({
                data: newWeather
            });

        });
    }

    render() {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}/> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
