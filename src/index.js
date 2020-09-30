import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Checkbox from "./components/Controls/Checkbox"

function App() {
    const [formData, setFormData] = useState({})

    function handleChange(e) {
        const { name, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }))
    }

    console.log(formData)

    return (
        <>
            <Checkbox
                checked={formData["vegan"]}
                name="vegan"
                id="vegan"
                onChange={handleChange}
            >
                Vegan
            </Checkbox>
            <Checkbox
                checked={formData["kosher"]}
                name="kosher"
                id="kosher"
                onChange={handleChange}
            >
                Kosher
            </Checkbox>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
