import React from "react"
import { Checkbox } from "../components/Controls"

export default {
    title: "Components/Controls/Checkbox",
    component: Checkbox,
    argTypes: { onChange: { action: "changed" } },
}

const Template = (args) => <Checkbox {...args} />

export const Unchecked = Template.bind({})
Unchecked.args = {
    children: "I agree to the terms and conditions",
    id: "some-id",
    checked: false,
}

export const Checked = Template.bind({})
Checked.args = {
    ...Unchecked.args,
    checked: true,
}

export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.args = {
    ...Unchecked.args,
    disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
    ...DisabledUnchecked.args,
    checked: true,
}

export const ChildrenElements = (args) => (
    <Checkbox>I agree to the <a href="#">Terms & Conditions</a></Checkbox>
)
