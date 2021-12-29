import React, {useState} from "react";

function DatePicker() {
    const [date,setDate]=useState();
    console.log("date", date);
    return(
    <input type="date" onchange={e=>setDate(e.target.value)}/>
    
    )
}
export default DatePicker;