import React from "react"
import { StatusChip } from "../components/StatusChip"
export default {
    title: "Atomic/StatusChip",
    component: StatusChip,
}

const Template = (args) => <StatusChip {...args} />

export const InProgress = Template.bind({})
InProgress.args = {
    status: "in-progress",
}

export const NotStarted = Template.bind({})
NotStarted.args = {
    status: "not-started",
}
export const Completed = Template.bind({})
Completed.args = {
    status: "completed",
}
export const UpNext = Template.bind({})
UpNext.args = {
    status: "up-next",
}

export const CustomText = Template.bind({})
CustomText.args = {
    status: "completed",
    children: "All Done",
}
