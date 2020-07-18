import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';

class Sun extends React.Component {
    render() {
        console.log('Sun#render this.props',this.props);
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone 
                        icone = {'wb_sunny'}
                        color = {'yellow'}
                    />
                    <p>{this.props.temperature} °C</p>
                    <Slider 
                        min = {this.props.min}
                        max = {this.props.max}
                        onChange = {this.props.onChange}
                        value = {this.props.temperature}
                    />
                </div>
            </>
        );
    }
}

export default Sun;