import { useState } from "react";
import './Footer.css';

export function Footer(props){
     
     return (
          <footer className="footer">
               <h1>{props.clr}</h1>
          </footer>
     )
}