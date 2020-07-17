import React from 'react';
import Icone from './core/Icone';
import Slider from './core/Slider';

class Sun extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'wb_sunny'}/>
                    <p>{this.props.temperature}</p>
                    <Slider min={this.min}/>
                </div>
            </>
        );
    }
}

export default Sun;