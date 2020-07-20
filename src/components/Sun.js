import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';

const style = {
    color: "yellow"
}

const animate = {
    rotate: 360 
}

const transition = {
    loop: Infinity,
    duration: 25
}

class Sun extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone 
                        icone = {'wb_sunny'}
                        style = {style}
                        animate = {animate}
                        transition = {transition}
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