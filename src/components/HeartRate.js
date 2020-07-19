import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';
import { motion } from 'framer-motion';

const style = {
    color: "red",
}

const animate = {
    scale: 1.2 
}

const transition = {
    loop: Infinity,
    duration: 0.7
}

                    

class HeartRate extends React.Component {    
    render() {
        return (
            <>
                <motion.div className="box col-md-2 col-6">
                    <Icone 
                        icone = {'favorite'} 
                        color = {'red'}
                        style = {style}
                        animate = {animate}
                        transition = {transition}
                    />
                    <p>{this.props.heart} bpm</p>
                    <Slider 
                        min = {this.props.min}
                        max = {this.props.max}
                        onChange = {this.props.onChange}
                        value = {this.props.heart}                        
                    />
                </motion.div>
            </>  
        );
    }
}

export default HeartRate;