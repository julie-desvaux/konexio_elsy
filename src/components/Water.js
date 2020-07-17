import React from 'react';
import Icone from './core/Icone';

class Water extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'local_drink'}/>
                    <p>{this.props.water}</p>
                </div>
            </>
        );
    }
}

export default Water;