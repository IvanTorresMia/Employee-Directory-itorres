import React, { useEffect, useState } from "react";
import Employees from '../Employees.json'
import Jumbo from '../Components/Jumbo'
import Search from '../Components/SearchCon'
import TableHeader from '../Components/TableHeader'



function Gallery() {

 const [userName, setUserName] = useState("")


   useEffect(() => {

    getEmpoyees()

  }, []);



  // trying to get my employees
const getEmpoyees = () => {
  // const name = Employees.
  const firstName = Employees.results[0].name.first
const lastName = Employees.results[0].name.last
  // console.log(Employees.results[0].name.first)
  // console.log(Employees.results[0].name.last)
  setUserName(userName[firstName + " " + lastName])
  
 }
  

  

    return (
      <div>
        <Jumbo />
       <Search />
      <TableHeader value={{}} />
      </div>
    );
  }

  export default Gallery