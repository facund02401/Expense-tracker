import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props)/*Recibe onAddExpense*/ {
const [isEditing, setIsEditing] = useState(false)
//isEdditing es el que establece si aparece el botón o el form


  const saveExpenseDataHandler = (enteredExpenseData) => {
      //Toma la data, le agrega id y la sube a App.js
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };  

  const startEditingHandler = (event) =>{
      setIsEditing(true)
  }

  const stopEditingHandler = () =>{
      setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Agregar gasto</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}
