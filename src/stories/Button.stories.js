import React from "react"
import { Button } from "../components/Button"

export default {
    title: "Atomic/Button",
    component: Button,
    decorators: [
        (Story) => (
            <div style={{ padding: "3em", backgroundColor: "burlywood" }}>
                {/*
                This is a workaround while they fix this bug.
                I should be able to just do <Story /> instead
                Expected behavior: Docs only shows the component
                Current behavior: Docs show decorator code AND <No Display Name>
                instead of the component.
                */}
                {Story()}
            </div>
        ),
    ],
}

const Template = (args) => <Button {...args}>Button</Button>

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    buttonStyle: "primary-dark",
    size: "lg",
    uppercase: false,
}

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
    ...PrimaryDark.args,
    buttonStyle: "primary-light",
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    ...PrimaryDark.args,
    buttonStyle: "secondary-dark",
}

export const SecondaryLight = Template.bind({})
SecondaryLight.args = {
    ...PrimaryDark.args,
    buttonStyle: "secondary-light",
}
