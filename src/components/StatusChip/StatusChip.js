import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { decideChipStatus } from "./utils"
import { black } from "../../colors"

const StatusChipContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 24px;
    background: ${(props) => props.background};
    border: ${(props) => props.border};
    box-sizing: border-box;
    border-radius: 4px;
`

const ChipText = styled.p`
    margin: 0px;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: ${black};
`

function StatusChip({ status, children, ...rest }) {
    const { border, backgroundColor, text } = decideChipStatus(status)
    console.log(children)
    return (
        <StatusChipContainer
            background={backgroundColor}
            border={border}
            {...rest}
        >
            <ChipText>{children || text}</ChipText>
        </StatusChipContainer>
    )
}

StatusChip.propTypes = {
    /**
    These statuses also come with associated default text if no children are provided as custom text
     */
    status: PropTypes.oneOf([
        "in-progress",
        "not-started",
        "completed",
        "up-next",
    ]).isRequired,
}

StatusChip.defaultProps = {
    status: "not-started",
}

export default StatusChip
