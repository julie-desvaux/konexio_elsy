import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';

class Person extends React.Component {
    render() {
        return(
            <>
                <div className="box col-md-2 col-6">
                    <Icone 
                        icone = {'directions_walk'}
                        color = {'black'}
                    />
                    <p>{this.props.steps} Steps</p>
                    <Slider 
                        min = {this.props.min}
                        max = {this.props.max}
                        onChange = {this.props.onChange}
                        value = {this.props.steps}
                    />
                </div>
            </>  
        );
      
    }
}

export default Person;