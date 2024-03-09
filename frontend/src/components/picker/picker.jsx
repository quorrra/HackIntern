import React, { useState, useEffect, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./picker.css";

function Picker({
    placeholder, accept,
    form, field
}) {
    const input = useRef();
    const [url, setUrl] = useState("");

    useEffect(() => {
        console.log(field.value)
        try {
            if (field.value && new URL(field.value)) {
                setUrl(field.value);
            }
        } catch (error) {}
    }, [field.value]);

    function loadFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            setUrl(reader.result);
            form.setFieldValue(field.name, file);
            input.current.value = "";
        };
        reader.readAsDataURL(file);
    }

    function handleChange(event) {
        event.persist();
        if (event.target.files.length > 0) {
            loadFile(event.target.files[0]);
        }
    }

    function handleOnDrop(event) {
        event.persist();
        event.preventDefault();

        if (event.dataTransfer.items) {
            for (let item of event.dataTransfer.items) {
                if (item.kind === "file") {
                        loadFile(item.getAsFile());
                }
            }
        } else if (event.dataTransfer.files.length > 0) {
            loadFile(event.dataTransfer.files[0]);
        }

        if (event.dataTransfer.items) {
            event.dataTransfer.items.clear();
            return;
        }
        event.dataTransfer.clearData();
    }

    function handleOnDragOver(event) {
        event.persist();
        event.preventDefault();
    }

    function handleDeleteValue() {
        setUrl(null);
        form.setFieldValue(field.name, null);
    }

    return (
        <>
            <div className="wrapper p-3" draggable="true" onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
                {url && <FaTrashAlt onClick={handleDeleteValue} className="icon delete" size={30} />}
                <label className="box label-cls" htmlFor={`id-${field.name}`}>
                    {url && <img className="box__image img-cls" src={url} alt={url} />}
                    <span className="span-cls">{placeholder}</span>
                </label>
            </div>
            <input
                ref={input}
                className="input"
                accept={accept}
                type="file"
                id={`id-${field.name}`}
                name={field.name}
                onChange={handleChange}
            />
        </>
    );
}

export default Picker;
