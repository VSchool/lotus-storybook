import React from "react"
import ReactDOM from "react-dom"
import Radio from "./components/Controls/Radio"
import Checkbox from "./components/Controls/Checkbox"
import Switch from "./components/Controls/Switch"

import "./styles.scss"

function App() {
    return (
        <>
            <Radio name="gender" value="male">
                Male
            </Radio>
            <Radio name="gender" value="female">
                Female
            </Radio>
            <Checkbox name="kosher" value="kosher">
                Kosher
            </Checkbox>
            <Checkbox name="vegan" value="vegan">
                Vegan
            </Checkbox>
            <Switch name="vegan" value="vegan">
                On
            </Switch>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
