import React, { useState } from 'react';
import NewExpenseForm from './newExpenseForm';
import './addExpense.css';

function AddNewExpense(){

    const[form,SetForm]=useState(false);

    const openForm=()=>{
        SetForm(true);
    }

    const closeForm=()=>{
        SetForm(false);
    }

    return(
        <div className='add'>
            {!form && <div className='buttonSpan'>
            <button className='newexpenseButton' onClick={openForm}>Add new Expense</button>
            </div>}
            {form && <NewExpenseForm onClick={closeForm}/>}
        </div>
    )
}
export default AddNewExpense;