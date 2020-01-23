import React from "react";

export default props => {
    return (
        <div>
            <div
                onClick={() => {
                    props.setBalls(props.addBall());
                }}
            >
                Add ball
            </div>
            <div
                onClick={() => {
                    props.setStrikes(props.addStrike());
                }}
            >
                Add strike
            </div>
        </div>
    );
};
