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

    const recordHit = () => {
        setStrikes(0);
        setFouls(0);
        setBalls(0);
        setHit(true);

        // reset after 2 seconds for new hitter
        setTimeout(() => {
            setHit(false);
        }, 2000);
    };

    return (
        <div>
            <Display balls={balls} strikes={strikes} fouls={fouls} hit={hit} />
            <Dashboard
                setBalls={setBalls}
                setStrikes={setStrikes}
                addBall={() => addBall(balls)}
                addStrike={() => addStrike(strikes)}
                addFoul={() => addFoul(strikes, fouls)}
                recordHit={recordHit}
            />
        </div>
    );
}

export default App;
