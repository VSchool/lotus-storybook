import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { TitlebarItem } from "../TitlebarItem"
import "../../styles.scss"

const TitlebarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    /* border: 1px solid dodgerblue; */
`

function Titlebar(props) {
    const { items } = props
    /**
    items shape:
    [
        {
            stepName: "Number"  // Default: "Step"
            status: "active"  // enum: ["active", "inactive", "disabled"], default: "inactive"
            text: "Create Account"
        },
        {...etc...}
    ]
     */
    const titleBarElements = items.map((item, i) => <TitlebarItem {...item} stepNum={i + 1} />)

    // let blockOne = props.blockOne
    // let blockTwo = props.blockTwo
    // let blockThree = props.blockThree
    return (
        <TitlebarContainer>
            {titleBarElements}
            {/* <TitlebarItem
                itemState={blockOne.blockState}
                firstLineMessage={blockOne.firstLine}
                secondLineMessage={blockOne.secondLine}
            />
            <TitlebarItem
                itemState={blockTwo.blockState}
                firstLineMessage={blockTwo.firstLine}
                secondLineMessage={blockTwo.secondLine}
            />
            <TitlebarItem
                itemState={blockThree.blockState}
                firstLineMessage={blockThree.firstLine}
                secondLineMessage={blockThree.secondLine}
            /> */}
        </TitlebarContainer>
    )
}

Titlebar.propTypes = {
    blockOne: PropTypes.objectOf(PropTypes.string.isRequired),
    blockTwo: PropTypes.objectOf(PropTypes.string.isRequired),
    blockThree: PropTypes.objectOf(PropTypes.string.isRequired)
}

Titlebar.defaultProps = {
    blockOne: { blockState: "active", firstLine: "Step 1", secondLine: "Background" },
    blockTwo: { blockState: "inactive", firstLine: "Step 2", secondLine: "Application" },
    blockThree: { blockState: "locked", firstLine: "Step 3", secondLine: "Enrollment" }
}

export default Titlebar
