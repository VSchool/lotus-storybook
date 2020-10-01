import React from "react"
import SelectionBox from "../components/Controls/SelectionBox"

export default {
    title: "Components/Controls/SelectionBox",
    component: SelectionBox,
    argTypes: { onChange: { action: "changed" } },
}

const Template = (args) => <SelectionBox {...args} />

export const UncheckedCheckbox = Template.bind({})
UncheckedCheckbox.args = {
    children: "I agree to the terms and conditions",
    id: "some-id",
    checked: false,
    type: "checkbox",
}

export const CheckedCheckbox = Template.bind({})
CheckedCheckbox.args = {
    ...UncheckedCheckbox.args,
    checked: true,
}

export const DisabledUncheckedCheckbox = Template.bind({})
DisabledUncheckedCheckbox.args = {
    ...UncheckedCheckbox.args,
    disabled: true,
}

export const DisabledCheckedCheckbox = Template.bind({})
DisabledCheckedCheckbox.args = {
    ...DisabledUncheckedCheckbox.args,
    checked: true,
}

export const ChildrenElementsCheckbox = (args) => (
    <SelectionBox type="checkbox">
        I agree to the <a href="#">Terms & Conditions</a>
    </SelectionBox>
)

export const SelectedRadio = Template.bind({})
SelectedRadio.args = {
    ...UncheckedCheckbox.args,
    checked: true,
    type: "radio",
}

export const UnselectedRadio = Template.bind({})
UnselectedRadio.args = {
    ...SelectedRadio.args,
    checked: false,
}

export const DisabledSelectedRadio = Template.bind({})
DisabledSelectedRadio.args = {
    ...SelectedRadio.args,
    disabled: true,
}

export const DisabledUnselectedRadio = Template.bind({})
DisabledUnselectedRadio.args = {
    ...UnselectedRadio.args,
    disabled: true,
}
