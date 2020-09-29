import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { StatusChip } from "../StatusChip"
import { findCardStatus } from "./utils"
import * as colors from "../../colors"

const CardContainer = styled.div`
    position: relative;
    width: 184px;
    max-height: 194px;
    padding: 16px 16px 16px 16px;
    background: ${colors.white};
    border-top: ${props => props.borderTop};
    border-right: ${props => props.borderRight};
    border-bottom: ${props => props.borderBottom};
    border-left: ${props => props.borderLeft};
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 0px #D8D4CF;

    &:hover {
        filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2)) drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14));
    }

    @media (min-width: 768px) {
        width: 354px;
        padding: 24px 24px 24px 24px;
    }
`

const TitleText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${colors.black};
`

const StatusChipWrapper = styled.div`
    margin: 16px 0px 16px 0px;

    @media (min-width: 768px) {
        margin: 8px 0px 8px 0px;
    }
`

const BottomWrapper = styled.div`
    display: block;

    @media (min-width: 768px) {
        display: flex;
        margin: 0px 0px 0px 0px;
    }
`

const MessageText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: ${colors.black};
`

const TextButton = styled.button`
    margin: 8px 0px 0px 0px;
    padding: 0px;
    display: block;
    background: none;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: ${colors.blue.base};
    border: none;

    @media (min-width: 768px) {
        text-align: right;
        margin: 0px 0px 0px 48px;
    }
`

function Card(props) {
    const {
        cardStatus,
        titleText,
        messageText,
        topBorder,
        rightBorder,
        bottomBorder,
        leftBorder
    } = findCardStatus(props.status)

    return (
        <CardContainer borderTop={topBorder} borderRight={rightBorder} borderBottom={bottomBorder} borderLeft={leftBorder}>
            <TitleText>{props.title}</TitleText>
            <StatusChipWrapper><StatusChip status={props.status} /></StatusChipWrapper>
            <BottomWrapper>
                <MessageText>{props.message}</MessageText>
                <TextButton>Start</TextButton>
            </BottomWrapper>
        </CardContainer>
    )
}

Card.propTypes = {
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

Card.defaultProps = {
    status: 'in-progress',
    title: 'Hello',
    messsage: 'World'
}

export default Card
