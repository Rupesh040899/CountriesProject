import { useEffect, useState } from "react";

const Card=({name, flag, abbr})=>{
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            gap: "4px",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            width:"200px",
            border: '0.5px solid black', 
            borderRadius: "4px",
            textAlign:"center",
            padding:"10px"

        }}>
        <img src={flag} alt={`Flag of ${name}`} style={{height:"100px", width:"100px", }}/>
        <h2>{name}</h2>
        </div>
    )
}

const API_Endpoint=" https://xcountries-backend.azurewebsites.net/all";



export default function Countries(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const response = await fetch(API_Endpoint);
                const remoteData = await response.json();
                setData(remoteData);
            } catch (error) {
                console.log("Error fetching data: "+ error);
            }
        }
        fetchData();
    },[])

    return (
        <div style={{display:"flex", flexWrap:"wrap", gap:"10px", paddingLeft:"60px"}} >
            {data.map(({name, flag, abbr})=>(
               <Card name={name} flag={flag} key={abbr}/>
                ))}
        </div>
    )
}