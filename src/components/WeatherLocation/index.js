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
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handlerUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handlerUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log("Resultado del handlerUpdateClick");
            const newWeather = tranformWeather(data);
            console.log(newWeather);
            // debugger;
            this.setState({
                data: newWeather
            });

        });
    }

    render() {
        console.log("render");
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
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
}

export default WeatherLocation;
