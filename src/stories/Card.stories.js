import React from "react"
import { Card } from "../components/Card"

export default {
    title: "Components/Card",
    component: Card,
    argTypes: { onClick: { action: "clicked" } },
}

const Template = (args) => <Card {...args} />

export const NotStarted = Template.bind({})
NotStarted.args = {
    status: "not-started",
    title: "Initial Application",
    text: "Messaging about what needs to be completed.",
    buttonText: "Start",
}

export const UpNext = Template.bind({})
UpNext.args = {
    ...NotStarted.args,
    status: "up-next",
}

export const InProgress = Template.bind({})
InProgress.args = {
    ...NotStarted.args,
    status: "in-progress",
    buttonText: undefined,
}

export const Completed = Template.bind({})
Completed.args = {
    ...InProgress.args,
    status: "completed",
}

export const CustomStatusChipText = Template.bind({})
CustomStatusChipText.args = {
    ...InProgress.args,
    status: "completed",
    statusChipText: "All Done!",
}
