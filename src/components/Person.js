import React from 'react';
import Icone from './core/Icone'

class Person extends React.Component {
    render() {
        return(
            <>
                <div className="box col-md-2 col-6">
                    <Icone icone={'directions_walk'}/>
                </div>
            </>  
        );
      
    }
}

export default Person;