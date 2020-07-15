import React from 'react';
import Icone from './core/Icone'

class Sun extends React.Component {
    render() {
        return (
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'wb_sunny'}/>
                </div>
            </>
        );
    }
}

export default Sun;