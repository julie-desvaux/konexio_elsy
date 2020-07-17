import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';

class HeartRate extends React.Component {
    render() {
        console.log('HeartRate#render this.props',this.props);
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'favorite'} />
                    <p>{this.props.heart}</p>
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

export default HeartRate;