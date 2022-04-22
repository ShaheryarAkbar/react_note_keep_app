import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { PinDropSharp } from "@material-ui/icons";

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.value;

        const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            };
        });

        // setNote([...note, name= value]);
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };


    const expandIt = () => {
        setExpand(true);
    }

    const btNormal = () => {
        setExpand(false);
    }

    return (
        <>
            <div className="main_note" onDoubleClick={btNormal}>
                <form>
                {expand?
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" /> : null}
                    <textarea rows="" name="content" value={note.content} onChange={InputEvent} column="" placeholder="Write a note..."
                    onClick={expandIt}
                    >
                    </textarea>

                    { expand ? (
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> 
                    ) : null }
                </form>
            </div>
        </>
    );
};

export default CreateNote