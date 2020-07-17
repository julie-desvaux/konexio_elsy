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
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
    this.onHeartChange = this.onHeartChange.bind(this);
  }

  onHeartChange(val) {
    console.log('App#onHeartChange');
    this.setState({
      heart: val
    });
  }

  onStepsChange(val) {
    this.setState({
      steps: val
    })
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Water water={this.state.water}/>
            <Person 
              steps={this.state.steps}
              min={MIN_STEPS}
              max={MAX_STEPS}
              onChange={this.onStepsChange}
            />
            <HeartRate 
              heart={this.state.heart}
              min={MIN_HEART}
              max={MAX_HEART}
              onChange={this.onHeartChange}
            />
            <Sun temperature={this.state.temperature}/>
          </div>          
        </div>        
      </>
    );
  }
}

export default App;