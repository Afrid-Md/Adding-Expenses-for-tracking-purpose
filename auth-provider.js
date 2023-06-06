import React, { useContext, useState } from "react";
import AuthContext from "./auth-context";
import ExpenseListContext from "../../home/ListContext/List-context";
import axios from 'axios'

function AuthProvider(props) {
  const listContext = useContext(ExpenseListContext);

  const initialEmail = localStorage.getItem("email");
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const logInHandler = async(token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);

    try {
        let response = await axios.get(
          `https://expense-tracker-13ac1-default-rtdb.firebaseio.com/${email}.json`
        );

        const ExpensesArray=Object.values(response.data);

        for(let i=0;i<ExpensesArray.length;i++){
            listContext.addExpense({...ExpensesArray[i], date:new Date(ExpensesArray[i].date)});
        }
        console.log(Object.values(response.data));
      } catch (err) {
        alert(err.message);
      }
  };

  const logOutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    listContext.logout();

    setTimeout(() => {
      setToken(null);
      setEmail(null);
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }, 360000);
  };

  const authContextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
  };

  if (authContextValue.isLoggedIn) {
    window.onload = async () => {
      try {
        let response = await axios.get(
          `https://expense-tracker-13ac1-default-rtdb.firebaseio.com/${authContextValue.email}.json`
        );

        const ExpensesArray=Object.values(response.data);

        for(let i=0;i<ExpensesArray.length;i++){
            listContext.addExpense({...ExpensesArray[i], date:new Date(ExpensesArray[i].date)});
        }
        console.log(Object.values(response.data));
      } catch (err) {
        alert(err.message);
      }
    };
  }

  console.log(authContextValue);
  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
