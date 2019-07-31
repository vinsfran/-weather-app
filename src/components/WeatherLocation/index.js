import React, {Component} from 'react';
import tranformWeather from "../../services/tranformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
    SUN
} from '../../constants/weathers';
import {api_weather} from "../../constants/api_url";


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
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
                    "Cargando..."
                }
            </div>
        );
    }
}

export default WeatherLocation;
