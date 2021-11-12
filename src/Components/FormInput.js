import React, { useState } from "react";
import classes from "./FormInput.module.css";
import { Button, TextField } from "@mui/material";
function FormInput({ onSubmit }) {
  const [icdCode, setIcdCode] = useState("");
  const [cptCode, setCptCode] = useState("");
  const [billAmount, setBillAmount] = useState("");

  const onIcdChange = (event) => {
    setIcdCode(event.target.value);
  };
  const onCptChange = (event) => {
    setCptCode(event.target.value);
  };
  const onAmountChange = (event) => {
    setBillAmount(event.target.value);
  };
  const submitHandler = () => {
    onSubmit({ icd: icdCode, cpt: cptCode, amount: billAmount });
  };
  return (
    <form className={classes.form__main}>
      <div className={classes.form__inputs}>
        <div className={classes.form__input}>
          <TextField label="ICD Code" value={icdCode} onChange={onIcdChange} />
        </div>
        <div className={classes.form__input}>
          <TextField label="CPT Code" value={cptCode} onChange={onCptChange} />
        </div>
        <div className={classes.form__input}>
          <TextField
            label="Billing Amount"
            value={billAmount}
            onChange={onAmountChange}
          />
        </div>
      </div>
      <div className={classes.form__controls}>
        <Button variant="contained" onClick={submitHandler}>
          Submit Claim
        </Button>
      </div>
    </form>
  );
}

export default FormInput;
