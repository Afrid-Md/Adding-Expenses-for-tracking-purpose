import { Card } from "react-bootstrap";

import ExpenseList from "../ExpenseList/ExpenseList";


function ListCard() {


  return (
    <Card
      style={{
        backgroundColor: "rgb(80, 80, 80)",
        width: "90%",
        marginTop: "40px",
        marginLeft: "5%",
        marginRight: "5%",
        boxShadow: '0  2px 8px rgb(0,0,0.25)',
        marginBottom:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <ExpenseList />
    </Card>
  );
}

export default ListCard;
