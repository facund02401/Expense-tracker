import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) /*Recibe props.items desde App.js*/ {

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (filterSelectedYear) => {
    //Settea el año seleccionado en ExpenseFilter que fue pasado hacia arriba
    setFilteredYear(filterSelectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    // Filtra los elementos según el año
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          selected={filteredYear} /*Doble binding*/
          onChangeFilter={filterChangeHandler} /*Subió la data sobre el año seleccionado*/
        />
        <ExpensesList items={filteredExpenses} />
      </Cards>
    </div>
  );
}
