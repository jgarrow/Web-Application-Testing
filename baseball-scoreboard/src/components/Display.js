import React from "react";

export default props => {
    return (
        <div>
            <div>
                <h2>Balls</h2>
                <p>{props.balls}</p>
            </div>
            <div>
                <h2>Strikes</h2>
                <p>{props.strikes}</p>
            </div>
        </div>
    );
};
