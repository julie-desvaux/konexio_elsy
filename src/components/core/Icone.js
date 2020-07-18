import React from 'react';

class Icone extends React.Component {
    render() {
        return (
            <>
                {/* <span className={this.props.icone==='favorite' ? "material-icons favorite" : "material-icons"}>
                    {this.props.icone}
                </span> */}
                <span className="material-icons" style={{ color: this.props.color}}>
                    {this.props.icone}
                </span>
            </>
        );
    }
}

export default Icone;