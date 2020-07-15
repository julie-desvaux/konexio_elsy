import React from 'react';
import Icone from './core/Icone';

class HeartRate extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'favorite'} />
                    <p>{this.props.heart}</p>
                </div>
            </>  
        );
    }
}

export default HeartRate;