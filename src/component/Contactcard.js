import React from "react";
import {Link} from "react-router-dom";
const Contactcard=(props)=>{
    console.log(props.updatecontact);
    const {id,name,email}=props.contact;
    return(
        <div className="item">
        <div className="content">
            <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact},updatecontact:props.updatecontact}}>
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link>
         
        </div>
        <i className="trash alternate outline icon"
        style={{color:"red",right:"10px"}} onClick={()=>props.clickHandler(id)}></i>
    </div>

    );

};
export default Contactcard; 
// ,updatecontact:props.updatecontact