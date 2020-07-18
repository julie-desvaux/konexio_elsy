import React from 'react';
import Icone from './core/Icone';

class Water extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6 water">
                    <Icone 
                        icone = {'local_drink'}
                        color = {'white'}
                    />
                    <p>{this.props.water} L</p>
                </div>
            </>
        );
    }
}

export default Water;