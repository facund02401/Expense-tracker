import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) /*Recibe props.items filtrados*/{
    //Hace return condicional. Si no hay elementos en la lista filtrada
    // devuelve un p, si hay los muestra.
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No se encontraron gastos</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
          //Hace map de cada elemento
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
