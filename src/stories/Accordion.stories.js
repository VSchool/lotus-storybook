import React from "react"
import { Accordion } from "../components/Accordion"

export default {
    title: "Components/Accordion/Accordion",
    component: Accordion,
    decorators: [
        (Story) => (
            <div
                style={{
                    margin: "3em",
                    display: "flex",
                    justifyContent: "center",
                    width: "50%",
                }}
            >
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
    argTypes: {
        children: { control: { disable: true } },
    },
}

export const PlainText = (args) => (
    <Accordion title="Item 1" {...args}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ducimus
        dicta vel error animi sit unde quisquam, possimus veritatis voluptatum
        hic beatae ab iusto quasi ex laborum placeat magni minima.
    </Accordion>
)

export const AdditionalElements = (args) => (
    <Accordion title="Whiskers the cat" {...args}>
        <h1>This is my favorite cat</h1>
        <img src="http://placekitten.com/200/300" alt="Bill Murray" />
        <p>He's a good kitty</p>
    </Accordion>
)
