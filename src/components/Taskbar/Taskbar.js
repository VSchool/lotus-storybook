import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import * as colors from "../../colors"

const TaskbarContainer = styled.div`
    position: relative;
    min-width: 416px;
    max-height: 48px;
    padding: 4px 16px 4px 16px;
    background: ${colors.black};
    border: 4px solid ${colors.green.lighter};
    box-sizing: border-box;
    @media (min-width: 768px) {
        max-width: 100%;
        padding: 4px 16px 4px 88px;
    }
`

const FirstLineText = styled.p`
    margin: 0px 0px 3px 0px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${colors.gray.base};
`

const SecondLineText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk-extended';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${colors.gray.lighter};

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 16px;
    }
`

function Taskbar(props) {
    return (
        <TaskbarContainer>
            <FirstLineText>{props.firstLineMessage}</FirstLineText>
            <SecondLineText>{props.secondLineMessage}</SecondLineText>
        </TaskbarContainer>
    )
}

Taskbar.propTypes = {
    firstLineMessage: PropTypes.string.isRequired,
    secondLineMessage: PropTypes.string.isRequired
}

Taskbar.defaultProps = {
    firstLineMessage:'Required',
    secondLineMessage: 'FSJS - Aptitude test'
}

export default Taskbar
