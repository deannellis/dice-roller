import React from 'react';
import Icon from './Icon';
import ReactTouchEvents from "react-touch-events";
export default class DieFour extends React.Component {
    
    constructor(props) {
     super(props);
     this.state = {
        dieValue: this.props.dieType,
        rollPosition: 1
     };
     this.time = undefined;
     this.orientVariations = 3;
     this.repeat = this.repeat.bind(this);
     this.handleMouseDown = this.handleMouseDown.bind(this);
     this.handleMouseUp = this.handleMouseUp.bind(this);
     this.handleMouseOut = this.handleMouseOut.bind(this);
     this.roll = this.roll.bind(this);
     this.resolveRoll = this.resolveRoll.bind(this);
   }
    
    roll() {
        // let rollingValue = Math.floor(Math.random() * ((this.props.dieType + 1) - 1)) + 1;
        // this.setState({
        //     dieValue: rollingValue
        // });
        let rollingPosition = Math.floor(Math.random() * ((this.orientVariations + 1) - 1)) + 1;
        if(rollingPosition === this.state.rollPosition) {
            switch(rollingPosition) {
                case 1:
                    rollingPosition++;
                    this.setState({
                        rollPosition: rollingPosition
                    });
                case this.orientVariations:
                    rollingPosition--;
                    this.setState({
                        rollPosition: rollingPosition
                    });
                default:
                    rollingPosition++;
                    this.setState({
                        rollPosition: rollingPosition
                    });
            }
        } else {
            this.setState({
                rollPosition: rollingPosition
            });
        }
    };
    
    resolveRoll() {
        clearTimeout(this.time);
        const newValue = Math.floor(Math.random() * ((this.props.dieType + 1) - 1)) + 1;
    
        this.setState(() => ({
            dieValue: newValue
        }));
        
        this.props.handleRollDie(this.props.dieType, newValue);
        this.time = undefined;
        this.setState({
            rollPosition: 1
        });
    };
    
    repeat() {
        this.roll();
        this.time = setTimeout(this.repeat, 150);
    };
    
    handleMouseDown () {
        this.repeat();
    };
    
    handleMouseUp () {
        setTimeout(() => {this.resolveRoll()}, 500);
    };
    
    handleMouseOut () {
        if(typeof this.time != 'undefined') {
            this.resolveRoll();
        }
    };
    
    render() {
        return (
            <div className={`die ${typeof this.time != 'undefined' && 'die--shake'} ${typeof this.time == 'undefined' && 'die--shake-resolve'}`}>
                <Icon
                    draggable="false"
                    name={`d${this.props.dieType.toString()}-orient-${this.state.rollPosition.toString()}`}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.resolveRoll}
                />
                <p 
                    className={`die__result ${typeof this.time != 'undefined' && 'die__result--hide'}`} //&& 'die__result--hide'
                    
                >
                    {this.state.dieValue}
                </p>
            </div>
        );
    };
};