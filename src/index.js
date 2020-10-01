import React, { useState } from "react"
import ReactDOM from "react-dom"
import SelectionBox from "./components/Controls/SelectionBox"

function App() {
    const [formData, setFormData] = useState({})

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        console.log(value)
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    console.log(formData)

    return (
        <>
            <SelectionBox
                name="gender"
                id="male"
                onChange={handleChange}
                type="radio"
                value="male"
                checked={formData.gender === "male"}
            >
                Male
            </SelectionBox>
            <SelectionBox
                name="gender"
                id="female"
                onChange={handleChange}
                type="radio"
                value="female"
                checked={formData.gender === "female"}
            >
                Female
            </SelectionBox>
            <SelectionBox
                checked={formData["kosher"]}
                name="kosher"
                id="kosher"
                onChange={handleChange}
                type="checkbox"
            >
                Vegan
            </SelectionBox>
            <SelectionBox
                checked={formData["vegan"]}
                name="vegan"
                id="vegan"
                onChange={handleChange}
                type="checkbox"
            >
                Kosher
            </SelectionBox>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
