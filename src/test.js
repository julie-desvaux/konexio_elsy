if (element === 'steps') {
    console.log('App#calculateWater#steps');
    if ((val - this.state.steps > 0) && val > 10000) {
        console.log('#1');
        if (this.state.steps >= 10000) {
            console.log('#1.1');
            let tempWater = this.state.water + ((val - this.state.steps) * 0.00002)
            this.setState({
                water: tempWater
            })
        } else {
            console.log('#1.2');
            let tempWater = this.state.water + ((val - 10000) * 0.00002)
            this.setState({
                water: tempWater
            })
        }
    } else if ((val - this.state.steps < 0) && this.state.water > 1.5 && val >= 10000) {
        console.log('#2');
        let tempWater = this.state.water - ((this.state.steps - val) * 0.00002)
        this.setState({
            water: tempWater
        })
    } else if (this.state.steps )
}