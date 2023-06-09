import { useState,useEffect } from "react";
import { useObject } from "../Hooks/useObject";
import Accountpage from "./Accountpage";
import ProfilPage from "./Profilpage";
import { Link } from 'react-router-dom'


export default function Navbar() {

    const [select,setSelect] = useState("");
    const [datas,setData] = useState([""]);
    const sel = 1;

    // const {object} = useObject(1);
    // console.log(props.index);

    useEffect(() => {
 
    fetch("http://localhost:3000/datas/"+parseInt(select))
    .then(response =>  response.json())
    // .then(e => console.log(e) )
    .then(e=> setData(e))

    // console.log(datas,datas.at(0),datas.at(0).name);
    console.log(datas);

    },[select])

console.log(select);




return (

<div>

           

<form>
          <label for="opinion"> Select an ID and press Enter</label><br /> 
          <textarea id="opinion" rows="1" cols="80" value={select} onChange={e=>setSelect(e.target.value)}></textarea>
          <br /> <br /> 
          
          </form>


          <Accountpage select={select} ></Accountpage>

          <Link to={`/profile/${select}`}>Click here to check your profile (press Control and left click)</Link>

</div>



);











}