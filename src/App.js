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
      console.log('App#calculateWater#temperature');
      //Si le curseur temperature monte et est au dessus de 20°C
      if ((val - this.state.temperature > 0) && val > 20) {
        console.log('#1');
        //Si le curseur de départ était au dessus de 20°C
        if (this.state.temperature >= 20) {
          console.log('#1.1')
          this.setState({
            water: this.state.water + ((val - this.state.temperature) * 0.02)
          })
        //Si le curseur de départ était en dessous de 20°C (différence de la valeur et de 20 pour multiplier par 0.02)
        } else {
          console.log('#1.2')
          this.setState({
            water: this.state.water + ((val - 20) * 0.02)
          })
        } 
      //Si le curseur température descends, qu'il était super ou égal à 20 °C et que l'eau est au dessus de 1.5l      
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
            let tempWater = 1.5 + ((this.state.heart - 120) * 0.0008) + ((this.state.steps - 10000) * 0.00002)
            this.setState({
              water: tempWater
            })  
          } else {
            console.log('#3.1.2')
            let tempWater = 1.5 + ((this.state.heart - 120) * 0.0008)
            this.setState({
              water: tempWater
            })  
          }
        } else {
          console.log('#3.2')
          if (this.state.steps > 10000) {
            console.log('#3.2.1')
            let tempWater = 1.5 + ((this.state.steps - 10000) * 0.00002)
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
    } //if (element === 'temperature')

    if (element === 'heart') {
      console.log('App#calculateWater#heart');
      //Si le curseur heart monte et est au dessus de 120bpm
      if ((val - this.state.heart > 0) && val > 120) {
        console.log('#1');
        //Si le curseur de départ était au dessus de 120bpm
        if (this.state.heart >= 20) {
          console.log('#1.1')
          let tempWater = this.state.water + ((val - this.state.heart) * 0.0008)
          this.setState({
            water: parseFloat(tempWater)
          })
        //Si le curseur de départ était en dessous de 120 (différence de la valeur et de 120 pour multiplier par 0.0008)
        } else {
          console.log('#1.2')
          let tempWater = this.state.water + ((val - 120) * 0.0008)
          this.setState({
            water: parseFloat(tempWater)
          })
        } 
      //Si le curseur heart descends, qu'il était super ou égal à 120bpm et que l'eau est au dessus de 1.5l      
      } else if ((val - this.state.heart < 0) && this.state.water > 1.5 && val >= 120) {
        console.log('#2');
        let tempWater = this.state.water - ((this.state.heart - val) * 0.0008)
        this.setState({
          water: parseFloat(tempWater)
        })
      } else if (this.state.heart - 120 > 0){
        console.log('#3');
        if (this.state.temperature > 20) {
          console.log('#3.1');
          if (this.state.steps > 10000) {
            console.log('#3.1.1')
            let tempWater = 1.5 + ((this.state.temperature - 20) * 0.02) + ((this.state.steps - 10000) * 0.00002)
            this.setState({
              water: parseFloat(tempWater)
            })  
          } else {
            console.log('#3.1.2')
            let tempWater = 1.5 + ((this.state.temperature - 20) * 0.02)
            this.setState({
              water: parseFloat(tempWater)
            })  
          }
        } else {
          console.log('#3.2')
          if (this.state.steps > 10000) {
            console.log('#3.2.1')
            let tempWater = 1.5 + ((this.state.steps - 10000) * 0.00002)
            this.setState({
              water: parseFloat(tempWater)
            })  
          } else {
            console.log('#3.2.2')
            let tempWater = 1.5
            this.setState({
              water: parseFloat(tempWater)
            })  
          }
        }
      }
    } //if (element === 'heart')

    if (element === 'steps') {
      console.log('App#calculateWater#steps');
      //Si le curseur steps monte et est au dessus de 10000 pas
      if ((val - this.state.steps > 0) && val > 10000) {
        console.log('#1');
        //Si le curseur de départ était au dessus de 10000
        if (this.state.steps >= 10000) {
          console.log('#1.1')
          let tempWater = this.state.water + ((val - this.state.steps) * 0.0002)
          this.setState({
            water: parseFloat(tempWater)
          })
        //Si le curseur de départ était en dessous de 10000 pas (différence de la valeur et de 10000 pour multiplier par 0.0002)
        } else {
          console.log('#1.2')
          let tempWater = this.state.water + ((val - 10000) * 0.00002)
          this.setState({
            water: parseFloat(tempWater)
          })
        } 
      //Si le curseur température descends, qu'il était super ou égal à 10000 et que l'eau est au dessus de 1.5l      
      } else if ((val - this.state.steps < 0) && this.state.water > 1.5 && val >= 10000) {
        console.log('#2');
        let tempWater = this.state.water - ((this.state.steps - val) * 0.00002)
        this.setState({
          water: parseFloat(tempWater)
        })
      } else if (this.state.steps - 10000 > 0){
        console.log('#3');
        if (this.state.heart > 120) {
          console.log('#3.1');
          if (this.state.temperature > 20) {
            console.log('#3.1.1')
            let tempWater = 1.5 + ((this.state.heart - 120) * 0.0008) + ((this.state.temperature - 20) * 0.02)
            this.setState({
              water: parseFloat(tempWater)
            })  
          } else {
            console.log('#3.1.2')
            let tempWater = 1.5 + ((this.state.heart - 120) * 0.0008)
            this.setState({
              water: parseFloat(tempWater)
            })  
          }
        } else {
          console.log('#3.2')
          if (this.state.temperature > 20) {
            console.log('#3.2.1')
            let tempWater = 1.5 + ((this.state.temperature - 20) * 0.02)
            this.setState({
              water: parseFloat(tempWater)
            })  
          } else {
            console.log('#3.2.2')
            let tempWater = 1.5
            this.setState({
              water: parseFloat(tempWater)
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