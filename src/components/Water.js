import React from 'react';
import Icone from './core/Icone';

const style = {
    color: "white"
}

class Water extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6 water">
                    <Icone 
                        icone = {'local_drink'}
                        style = {style}
                    />
                    <p>{this.props.water} L</p>
                </div>
            </>
        );
    }
}

export default Water;