import React from "react";
import styled from "styled-components";

const Display = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default props => {
    let hitText = props.hit ? "Successful hit!" : "Unsuccessful hit!";

    return (
        <Display>
            <Box>
                <h2>Balls</h2>
                <p data-testid="balls">{props.balls}</p>
            </Box>
            <Box>
                <h2>Strikes</h2>
                <p data-testid="strikes">{props.strikes}</p>
            </Box>
            <Box>
                <h2>Fouls</h2>
                <p data-testid="fouls">{props.fouls}</p>
            </Box>
            <Box>
                <h2>Hit</h2>
                <p data-testid="hit">{hitText}</p>
            </Box>
        </Display>
    );
};
