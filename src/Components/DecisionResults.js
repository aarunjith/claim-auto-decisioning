import { collapseClasses } from "@mui/material";
import React from "react";
import classes from "./DecisionResults.module.css";
import { Button } from "@mui/material";

function DecisionResults({ onBack, claimInfo, predictionData }) {
  const scoreClass =
    predictionData.score < 0.5
      ? classes.prediction__red
      : classes.prediction__green;
  return (
    <div className={classes.results__main}>
      <div className={classes.claiminfo}>
        <p className={classes.claiminfo__element}>
          <strong>ICD :&nbsp;</strong>
          {claimInfo.icd}
        </p>
        <p className={classes.claiminfo__element}>
          <strong>CPT :&nbsp;</strong>
          {claimInfo.cpt}
        </p>
        <p className={classes.claiminfo__element}>
          <strong>Amount :&nbsp;</strong>
          {`$ ${claimInfo.amount}`}
        </p>
      </div>
      <div className={classes.results}>
        <div className={scoreClass}>{predictionData.score}</div>
        <div className={classes.reasons}>{predictionData.result}</div>
      </div>
      <div className={classes.controls}>
        <Button onClick={onBack}>Back</Button>
      </div>
    </div>
  );
}
export default DecisionResults;
