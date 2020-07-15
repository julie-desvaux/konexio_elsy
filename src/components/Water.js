import React from 'react';
import Icone from './core/Icone'

class Water extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'local_drink'}/>
                </div>
            </>
        );
    }
}

export default Water;