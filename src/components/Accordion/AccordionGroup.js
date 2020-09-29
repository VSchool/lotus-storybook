import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { gray } from "../../colors"
import Accordion from "./Accordion"

const Group = styled.section`
    & > div {
        border-bottom: 1px solid ${gray.base};
        cursor: pointer;
    }

    & > div:first-child {
        border-top: 1px solid ${gray.base};
    }
`

/**
A Wrapper for `<Accordion />` components. `<Accordion />` components must be inside an `<AccordionGroup />`, and an `<AccordionGroup />` must only contain `<Accordion />` items
 */
function AccordionGroup({ children, ...rest }) {
    return <Group {...rest}>{children}</Group>
}

AccordionGroup.propTypes = {
    /**
    AccordionGroup can only accept `<Accordion>` components as children.
     */
    children: function (props) {
        try {
            React.Children.forEach(props.children, (child) => {
                if (child.type.name !== "Accordion") {
                    throw new Error(
                        "AccordionGroup can only contain Accordion components as direct children"
                    )
                }
            })
        } catch (e) {
            return e
        }
    },
}

export default AccordionGroup
