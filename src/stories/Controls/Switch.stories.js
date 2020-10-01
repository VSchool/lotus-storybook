import React from "react"
import Switch from "../../components/Controls/Switch"

export default {
    title: "Components/Controls/Switch",
    component: Switch,
    argTypes: { onChange: { action: "changed" } },
}

const Template = (args) => <Switch {...args} />

export const SwitchOff = Template.bind({})
SwitchOff.args = {
    children: "Off",
    checked: false,
}

export const SwitchOn = Template.bind({})
SwitchOn.args = {
    children: "On",
    checked: true,
}

export const DisabledSwitchOff = Template.bind({})
DisabledSwitchOff.args = {
    children: "Disabled Off",
    checked: false,
    disabled: true,
}

export const DisabledSwitchOn = Template.bind({})
DisabledSwitchOn.args = {
    children: "Disabled On",
    disabled: true,
    checked: true,
}
