import React from 'react';
import Water from './components/Water';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Sun from './components/Sun';


const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }

  onHeartChange(val) {
    console.log('App#onHeartChange');
    this.calculateWater(val, 'heart');
    this.setState({
      heart: val
    });
  }

  onStepsChange(val) {
    console.log('App#onStepsChange');
    this.calculateWater(val, 'steps');
    this.setState({
      steps: val
    });
  }

  onTemperatureChange(val) {
    console.log('App#onTemperatureChange');
    this.calculateWater(val, 'temperature');
    this.setState({
      temperature: val
    });
  }

  calculateWater(val, element) {
    console.log('App#calculateWater');
    if (element === 'temperature') {
      console.log('App#calculateWater#Temperature');
      //Si le slider Temperature est au dessus de 20°C
      if (val > 20) {
        if (this.state.heart > 120) {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((val - 20) * 0.02) + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + ((val - 20) * 0.02) + ((this.state.heart - 120) * 0.0008)
            })
          }
        } else {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((val - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + (val - 20) * 0.02
            })
          }
        }
      } else {
        //Si le slider est en dessous de 20 °C
        if (this.state.heart > 120) {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + ((this.state.heart - 120) * 0.0008)
            })
          }
        } else {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 
            })
          }
        }
      }
    } //if (element === 'temperature')

    if (element === 'heart') {
      console.log('App#calculateWater#Heart');
      if (val > 120) {
        if (this.state.temperature > 20) {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((val - 120) * 0.0008) + ((this.state.temperature - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + ((val - 120) * 0.0008) + ((this.state.temperature - 20) * 0.02)
            })
          }
        } else {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((val - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + (val - 120) * 0.0008
            })
          }
        }
      } else {
        if (this.state.temperature > 20) {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((this.state.temperature - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5 + ((this.state.temperature - 20) * 0.02)
            })
          }
        } else {
          if (this.state.steps > 10000) {
            this.setState({
              water: 1.5 + ((this.state.steps - 10000) * 0.00002)
            })
          } else {
            this.setState({
              water: 1.5
            })
          }
        }
      }
    } //if (element === 'heart')

    if (element === 'steps') {
      console.log('App#calculateWater#Steps');
      if (val > 10000) {
        if (this.state.temperature > 20) {
          if (this.state.heart > 120) {
            this.setState({
              water: 1.5 + ((val - 10000) * 0.00002) + ((this.state.temperature - 20) * 0.02) + ((this.state.heart - 120) * 0.0008)
            })
          } else {
            this.setState({
              water: 1.5 + ((val - 10000) * 0.00002) + ((this.state.temperature - 20) * 0.02)
            })
          }
        } else {
          if (this.state.heart > 120) {
            this.setState({
              water: 1.5 + ((val - 10000) * 0.00002) + ((this.state.heart - 120) * 0.0008)
            })
          } else {
            this.setState({
              water: 1.5 + (val - 10000) * 0.00002
            })
          }
        }
      } else {
        if (this.state.temperature > 20) {
          if (this.state.heart > 120) {
            this.setState({
              water: 1.5 + ((this.state.temperature - 20) * 0.02) + ((this.state.heart - 120) * 0.0008)
            })
          } else {
            this.setState({
              water: 1.5 + ((this.state.temperature - 20) * 0.02)
            })
          }
        } else {
          if (this.state.heart > 120) {
            this.setState({
              water: 1.5 + ((this.state.heart - 120) * 0.0008)
            })
          } else {
            this.setState({
              water: 1.5
            })
          }
        }
      }
    } //if (element === 'steps')
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Water water = {this.state.water}/>
            <Person 
              steps = {this.state.steps}
              min = {MIN_STEPS}
              max = {MAX_STEPS}
              onChange = {this.onStepsChange}
            />
            <HeartRate 
              heart = {this.state.heart}
              min = {MIN_HEART}
              max = {MAX_HEART}
              onChange = {this.onHeartChange}
            />
            <Sun 
              temperature = {this.state.temperature}
              min = {MIN_TEMPERATURE}
              max = {MAX_TEMPERATURE}
              onChange = {this.onTemperatureChange}
            />
          </div>          
        </div>        
      </>
    );
  }
}

export default App;