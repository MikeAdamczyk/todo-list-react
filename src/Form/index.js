import React, { useState } from "react";
import { InputForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <InputForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie!</Button>
        </InputForm>
    )
};

export default Form;