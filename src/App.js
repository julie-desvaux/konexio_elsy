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
    if (val >= 10000) {
      this.calculateWater(val, 'steps')
    }
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
      console.log('App#calculateWater#temperature');
      if ((val - this.state.temperature > 0) && val > 20) {
        console.log('#1');
        if (this.state.temperature >= 20) {
          console.log('#1.1')
          this.setState({
            water: this.state.water + ((val - this.state.temperature) * 0.02)
          })
        } else {
          console.log('#1.2')
          this.setState({
            water: this.state.water + ((val - 20) * 0.02)
          })
        }        
      } else if ((val - this.state.temperature < 0) && this.state.water > 1.5 && val >= 20) {
        console.log('#2');
        this.setState({
          water: this.state.water - ((this.state.temperature - val) * 0.02)
        })
      } else if (this.state.temperature - 20 > 0){
        console.log('#3');
        if (this.state.heart > 120) {
          console.log('#3.1');
          if (this.state.steps > 10000) {
            console.log('#3.1.1')
            let tempWater = 1.5 + ((val - this.state.heart) * 0.0008) + ((val - this.state.steps) * 0.00002)
            this.setState({
              water: tempWater
            })  
          } else {
            console.log('#3.1.2')
            let tempWater = 1.5 + ((val - this.state.heart) * 0.0008)
            this.setState({
              water: tempWater
            })  
          }
        } else {
          console.log('#3.2')
          if (this.state.steps > 10000) {
            console.log('#3.2.1')
            let tempWater = 1.5 + ((val - this.state.steps) * 0.00002)
            this.setState({
              water: tempWater
            })  
          } else {
            console.log('#3.2.2')
            let tempWater = 1.5
            this.setState({
              water: tempWater
            })  
          }
        }
      }
    }
    if (element === 'heart') {
      console.log('App#calculateWater#heart');
      if ((val - this.state.heart > 0) && val > 120) {
        console.log('#1');
        this.setState({
          water: this.state.water + ((val - this.state.heart) * 0.0008)
        })
      } else if ((val - this.state.heart < 0) && this.state.water > 1.5 && val >= 120) {
        console.log('#2');
        this.setState({
          water: this.state.water - ((this.state.heart - val) * 0.0008)
        })
      } else if (this.state.heart - 120 > 0){
        console.log('#3');
        if (this.state.temperature > 20) {
          console.log('#4');
          if (this.state.steps > 10000) {
            console.log('#5')
            let tempWater = 1.5 + ((this.state.temperature - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
            this.setState({
              water: tempWater
            })  
          } else {
            console.log('#6')
            console.log('this.state.temperature', this.state.temperature)
            console.log('tempWater', ((this.state.temperature - 20) * 0.02))
            let tempWater = 1.5 + ((this.state.temperature - 20) * 0.02)
            this.setState({
              water: tempWater
            })  
          }
        } else {
          console.log('#7')
          if (this.state.steps > 10000) {
            console.log('#8')
            let tempWater = 1.5 + ((this.state.steps - 10000) * 0.00002)
            this.setState({
              water: tempWater
            })  
          } else {
            console.log('#9')
            let tempWater = 1.5
            this.setState({
              water: tempWater
            })  
          }
        }       
      }
    }
    if (element === 'steps') {
      console.log('App#calculateWater#steps');
      if (val - this.state.steps > 0 && val > 10000) {
        this.setState({
          water: this.state.water + 0.00002
        })
      } else if (val - this.state.steps < 0 && this.state.water > 1.5) {
        this.setState({
          water: this.state.water - 0.00002
        })
      } 
    }
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