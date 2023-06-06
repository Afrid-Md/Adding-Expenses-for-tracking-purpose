import React from "react";
import NavBar from "./Navbar/Navbar";
import AddNewExpense from "./AddExpenseForm/addExpense";
import ListCard from './Card/Card';


function HomePage() {

  return (
    <React.Fragment>
      <NavBar />
      <AddNewExpense/>
      <ListCard/>
    </React.Fragment>
  );
}
export default HomePage;
