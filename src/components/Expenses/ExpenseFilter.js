import React from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) /*recibe selected y onChangeFilter*/ => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
     /*Pasa el valor del evento como atributo de la funcion, que sube */ 
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtrar por año</label>
        <select onChange={dropdownChangeHandler} value = {props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
