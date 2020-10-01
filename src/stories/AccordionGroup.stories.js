import React from "react"
import { Accordion, AccordionGroup } from "../components/Accordion"

export default {
    title: "Components/Accordion/AccordionGroup",
    component: AccordionGroup,
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
}

export const GeneralUse = (args) => (
    <AccordionGroup {...args}>
        <Accordion title="Item 1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            ducimus dicta vel error animi sit unde quisquam, possimus veritatis
            voluptatum hic beatae ab iusto quasi ex laborum placeat magni
            minima.
        </Accordion>
        <Accordion title="Item 2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            ducimus dicta vel error animi sit unde quisquam, possimus veritatis
            voluptatum hic beatae ab iusto quasi ex laborum placeat magni
            minima.
        </Accordion>
        <Accordion title="Item 3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            ducimus dicta vel error animi sit unde quisquam, possimus veritatis
            voluptatum hic beatae ab iusto quasi ex laborum placeat magni
            minima.
        </Accordion>
    </AccordionGroup>
)
