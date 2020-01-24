import React from "react";
import styled from "styled-components";

const Dashboard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Button = styled.div`
    width: 100px;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    background: lightgray;
    border-radius: 8px;
`;

export default props => {
    return (
        <Dashboard>
            <Button
                onClick={() => {
                    props.setBalls(props.addBall());
                }}
            >
                Add ball
            </Button>
            <Button
                onClick={() => {
                    props.setStrikes(props.addStrike());
                }}
            >
                Add strike
            </Button>
            <Button
                onClick={() => {
                    props.setStrikes(props.addFoul());
                }}
            >
                Add Foul
            </Button>
            <Button
                onClick={() => {
                    props.recordHit();
                }}
            >
                Record Hit
            </Button>
        </Dashboard>
    );
};
