import React from "react";
import "./style.css";

const Form = () => (
    <form className="addTask__form">
        <input className="addTask__input" type="text" placeholder="Co jest do zrobienia?"/>
        <button className="addTask__button">Dodaj zadanie!</button>
    </form>
)
export default Form;