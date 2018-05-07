import React from 'react';

const DisplayResult = (props) => (
    <div className="result">
        {props.lastResult > 0 ?
            <div>
                <p>With a <span className="result__die"> D{props.lastDieRolled} </span> you rolled:</p>
                <h1 className="result__result">{props.lastResult}</h1>
            </div>
        : 
            <p>Click and hold a die to roll test</p>
        }
    </div>
);

DisplayResult.defaultProps = {
    lastDieRolled: '20',
    lastResult: -1
};

export default DisplayResult;