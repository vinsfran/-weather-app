import React, {Component} from 'react';
import './App.css';
import LocationList from "./components/LocationList";

const cities = [
    'Asuncion,py',
    'Buenos Aires,ar',
    'Bogota,co',
    'Mexico,mx',
    'Washington,us',
    'Barcelona,es',
    'Madrid,es',
    'Lima,pe',
];

class App extends Component {

    handlerSelectedLocation = city => {
        console.log(`handlerSelectedLocation ${city}`);
    };

    render() {
        return (
            <div className="App">
                <LocationList cities={cities}
                              onSelectedLocation={this.handlerSelectedLocation}></LocationList>
            </div>
        );
    }
}

export default App;
