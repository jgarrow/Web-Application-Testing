import React, { useState, useEffect } from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hit, setHit] = useState(false);

    const addBall = currentBalls => {
        let updatedBalls = currentBalls + 1;

        if (updatedBalls > 3 || hit) {
            updatedBalls = 0;
        }

        return updatedBalls;
    };

    const addStrike = currentStrikes => {
        let updatedStrikes = currentStrikes + 1;

        if (updatedStrikes > 2 || hit) {
            updatedStrikes = 0;
        }

        return updatedStrikes;
    };

    const addFoul = (currentStrikes, currentFouls) => {
        let updatedStrikes = currentStrikes;
        let updatedFouls = currentFouls + 1;

        if (currentStrikes < 2) {
            updatedStrikes = addStrike(currentStrikes);
        }

        if (hit) {
            updatedFouls = 0;
            updatedStrikes = 0;
        }

        setFouls(updatedFouls);

        return updatedStrikes;
    };

    // useEffect(() => {

    // }, [balls, strikes]);

    return (
        <div>
            <Display balls={balls} strikes={strikes} fouls={fouls} />
            <Dashboard
                setBalls={setBalls}
                setStrikes={setStrikes}
                addBall={() => addBall(balls)}
                addStrike={() => addStrike(strikes)}
                addFoul={() => addFoul(strikes, fouls)}
            />
        </div>
    );
}

export default App;
