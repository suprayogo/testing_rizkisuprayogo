import React from "react";
import "../assets/styles/Home.css"
import Sidebar from "../components/Sidebar";
import AllExpenses from "../components/AllExpenses";
import QuickInvoice from "../components/QuickInvoice";
import MyCard from "../components/MyCard";

function Home() {
  return <>
  <Sidebar/>
  <AllExpenses/>
  <QuickInvoice/>
  <MyCard/>
  
  </>;
}

export default Home;
