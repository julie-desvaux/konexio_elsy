import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';

class Person extends React.Component {
    render() {
        return(
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'directions_walk'}/>
                    <p>{this.props.steps}</p>
                    <Slider 
                        min={this.props.min}
                        max={this.props.max}
                        onChange={this.props.onChange}
                        value={this.props.heart}
                    />
                </div>
            </>  
        );
      
    }
}

export default Person;