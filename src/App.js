import classes from "./App.module.css";
import FormInput from "./Components/FormInput";
import React, { useState, useCallback } from "react";
import DecisionResults from "./Components/DecisionResults";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [claimInfo, setClaimInfo] = useState({});
  const [predictionData, setPredictionData] = useState({});

  const onSubmit = useCallback(({ icd, cpt, amount }) => {
    setShowResults(true);
    setClaimInfo({ icd, cpt, amount });
    let resultStrings = [];
    const predictionScore = Math.random().toFixed(2);
    if (predictionScore < 0.5) {
      resultStrings = [
        "This claim might be DENIED becuase : The submitted billing amount is 10X higher than the average cost for the CPT",
        "This claim might be DENIED becuase : The ICD - CPT combination occurs very infrequently",
      ];
    } else {
      resultStrings = [
        "This claim will be Approved as no inconsitencies have been found",
      ];
    }
    const result =
      resultStrings[Math.floor(Math.random() * resultStrings.length)];
    setPredictionData({ score: predictionScore, result });
  }, []);

  const onBack = () => {
    setShowResults(false);
  };
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h1>Claim Auto Decisioning</h1>
      </div>
      {!showResults && <FormInput onSubmit={onSubmit} />}
      {showResults && (
        <DecisionResults
          onBack={onBack}
          claimInfo={claimInfo}
          predictionData={predictionData}
        />
      )}
    </div>
  );
}

export default App;
