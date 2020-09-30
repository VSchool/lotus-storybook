import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { StatusChip } from "../StatusChip"
import { black, white, blue, gray, yellow, green, pink } from "../../colors"
import "../../styles.scss"

const CardContainer = styled.div`
    position: relative;
    width: 184px;
    min-height: 152px;
    padding: 16px 16px 16px 16px;
    background: ${white};
    border: 1px solid ${({ color }) => color.base};
    border-top: 4px solid ${({ color }) => color.base};
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 0px #d8d4cf;
    transition: filter 0.1s ease-in-out;

    &:hover {
        filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2))
            drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.12))
            drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14));
    }

    @media (min-width: 768px) {
        width: 354px;
        padding: 24px 24px 24px 24px;
    }
`

const TitleText = styled.h5`
    margin-bottom: 16px;
    color: ${black};
`

const StyledStatusChip = styled(StatusChip)`
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin: 8px 0px 8px 0px;
    }
`

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const MessageText = styled.p`
    font-size: 10px;
    line-height: 24px;
    color: ${black};
`

const TextButton = styled.button`
    margin-top: 8px;
    padding: 0;
    background: none;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${blue.base};
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        text-align: right;
        margin: 0px 0px 0px 48px;
    }
`

function Card({ status, title, text, buttonText, onClick, statusChipText }) {
    const lookup = {
        "not-started": gray,
        "up-next": pink,
        "in-progress": yellow,
        completed: green,
    }

    const cardColor = lookup[status]

    return (
        <CardContainer color={cardColor}>
            <TitleText>{title}</TitleText>
            <StyledStatusChip status={status}>
                {statusChipText}
            </StyledStatusChip>
            <BottomWrapper>
                <MessageText>{text}</MessageText>
                {buttonText && (
                    <TextButton onClick={onClick}>{buttonText}</TextButton>
                )}
            </BottomWrapper>
        </CardContainer>
    )
}

Card.propTypes = {
    /**
    Determines the color and default `statusChip` text.
     */
    status: PropTypes.oneOf([
        "in-progress",
        "not-started",
        "completed",
        "up-next",
    ]).isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    /**
    Make sure to supply an `onClick` prop, or your button will do nothing.
     */
    buttonText: PropTypes.string,
    /**
    Make sure to supply a `buttonText` prop, or there will be nothing to click to trigger this handler.
     */
    onClick: PropTypes.func,
}

export default Card
