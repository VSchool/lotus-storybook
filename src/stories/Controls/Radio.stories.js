import React from "react"
import Radio from "../../components/Controls/Radio"

export default {
    title: "Components/Controls/Radio",
    component: Radio,
    argTypes: { onChange: { action: "changed" } },
}

const Template = (args) => <Radio {...args} />

export const UnselectedRadio = Template.bind({})
UnselectedRadio.args = {
    children: "I agree to the terms and conditions",
    checked: false,
}

export const SelectedRadio = Template.bind({})
SelectedRadio.args = {
    children: "I agree to the terms and conditions",
    checked: true,
}

export const DisabledUnselectedRadio = Template.bind({})
DisabledUnselectedRadio.args = {
    children: "I agree to the terms and conditions",
    checked: false,
    disabled: true,
}

export const DisabledSelectedRadio = Template.bind({})
DisabledSelectedRadio.args = {
    children: "I agree to the terms and conditions",
    checked: true,
    disabled: true,
}
