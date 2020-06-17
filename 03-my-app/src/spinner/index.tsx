
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';

import { connect } from 'react-redux';

class Spinner extends Component<any> {
    state = {
        delta: 0
    };
    onDecrementClick = () => {
        this.props.decrement(this.state.delta);
    }
    onIncrementClick = () => {
        this.props.increment(this.state.delta);
    }
    onDoubleIncrementClick = () => {
        this.props.doubleIncrement();
    }
    onDoubleDecrementClick = () => {
        this.props.doubleDecrement();
    }
    render = () => {
        const value = this.props.value;
        return (
            <div>
                <h1>Spinner</h1>
                <hr />
                <label>Delta : </label>
                <input type="number" onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="DECREMENT" onClick={this.onDecrementClick} />
                <span> [ {value} ] </span>
                <input type="button" value="INCREMENT" onClick={this.onIncrementClick} />
                <br />
                <input type="button" value="DOUBLE DECREMENT" onClick={this.onDoubleDecrementClick} />
                <input type="button" value="DOUBLE INCREMENT" onClick={this.onDoubleIncrementClick} />
            </div>
        );
    }
}

function mapStateToProps(storeState : any){
    const spinnerValue = storeState.spinnerData;
    return { value : spinnerValue };
}

function mapDispatchToProps(dispatch : any){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(Spinner);