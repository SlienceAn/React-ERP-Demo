import React, { Component } from 'react';

const withOpen = (WrapperComponent) => {
    return class extends Component {
        state = {
            open: false
        }
        handleOpen = () => {
            this.setState({
                open: !this.state.open
            })
        }
        render() {
            return (
                <WrapperComponent
                open={this.state.open}
                handleOpen={this.handleOpen}
                {...this.props} 
                />)
        }
    }
}


export default withOpen;
