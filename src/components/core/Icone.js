import React from 'react';
import { motion } from 'framer-motion';

class Icone extends React.Component {
    render() {
        return (
            <>
                {/* <span className={this.props.icone==='favorite' ? "material-icons favorite" : "material-icons"}>
                    {this.props.icone}
                </span> */}
                <motion.span 
                    className="material-icons" 
                    style={this.props.style}  
                    animate={this.props.animate}
                    transition={this.props.transition}
                >
                    {this.props.icone}
                </motion.span>
            </>
        );
    }
}

export default Icone;