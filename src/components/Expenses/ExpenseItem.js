import React from "react";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) /*Viene de ExpensesList*/{
  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Cards>
    </li>
  );
}
