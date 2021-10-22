import React, { setState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = setState("");
  const [enteredAmount, setEnteredAmount] = setState("");
  const [enteredDate, setEnteredDate] = setState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="ew-expense__controls">
        <div className="new-expense__control">
          <label>Titulo</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Monto</label>
          <input type="text" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Agregar gasto</button>
      </div>
    </form>
  );
}
