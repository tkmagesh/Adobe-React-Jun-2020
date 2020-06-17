
import React, { Component } from 'react';

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

export default Spinner;