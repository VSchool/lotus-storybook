import React, { useState, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Arrow from "./Arrow"
import { gray } from "../../colors"
import "../../styles.scss"

const Container = styled.div`
    /* border-bottom: 1px solid ${gray.base};
    cursor: pointer;

    &:first-child {
        border-top: 1px solid ${gray.light};
    } */
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--blue);
`

const H5 = styled.h5`
    font-size: 1em;
    line-height: 28px;
    font-weight: 500;
    margin: 24px 0;
`

const Body = styled.div`
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`

/**
The `Accordion` stores the content of an `AccordionGroup`. Therefore, it must have the `AccordionGroup` component as a direct parent.

You can pass any children to `Accordion`.
 */
function Accordion({ title, children, ...rest }) {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState("0px")
    const accordionContent = useRef(null)

    const toggleAccordion = () => {
        setOpen(!open)
        setHeight(open ? "0px" : `${accordionContent.current.scrollHeight}px`)
    }

    return (
        <Container onClick={toggleAccordion} {...rest}>
            <Title>
                <H5 open={open}>{title}</H5>
                <Arrow open={open} />
            </Title>
            <Body ref={accordionContent} style={{ maxHeight: height }}>
                {children}
            </Body>
        </Container>
    )
}

Accordion.propTypes = {
    /**
    The part that will always show, collapsed or not
     */
    title: PropTypes.string.isRequired,

    /**
    The part hidden by the collapse of the accordion item
     */
    children: PropTypes.node.isRequired,
}

export default Accordion
