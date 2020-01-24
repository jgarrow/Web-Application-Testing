import React from "react";

export default props => {
    let hitText = props.hit ? "Successful hit!" : "Unsuccessful hit!";

    return (
        <div>
            <div>
                <h2>Balls</h2>
                <p data-testid="balls">{props.balls}</p>
            </div>
            <div>
                <h2>Strikes</h2>
                <p data-testid="strikes">{props.strikes}</p>
            </div>
            <div>
                <h2>Fouls</h2>
                <p data-testid="fouls">{props.fouls}</p>
            </div>
            <div>
                <h2>Hit</h2>
                <p data-testid="hit">{hitText}</p>
            </div>
        </div>
    );
};
