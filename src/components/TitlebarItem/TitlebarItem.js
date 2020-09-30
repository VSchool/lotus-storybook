import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { displayItemState } from "./utils"
import * as colors from "../../colors"
import circleCheck from "../../assets/icons/circleCheck.svg"
import "../../styles.scss"

const ItemContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 48px;
    padding: 6px 16px 6px 16px;
    background: ${colors.black};
    opacity: ${props => props.opacity};
    border: ${props => props.border};

    @media (min-width: 768px) {
        padding: 4px 16px 4px 88px;
    }
`

const FirstLineText = styled.p`
    margin: 0px;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
`

const Wrapper = styled.div`
    margin: 0px 0px 0px 0px;
    display: flex;
`

const CheckMarkContainer = styled.div`
    margin: 0px 8px 0px 0px;
    min-width: 16px;
    height: 16px;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
    }
`

const SecondLineText = styled.p`
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${props => props.color};
    opacity: ${props => props.opacity};

    @media (min-width: 768px) {
        max-width: 100%;
        font-size: 14px;
        line-height: 16px;
    }
`

function TitlebarItem(props) {
    const { stepNum, stepName, text, status } = props
    const itemDetails = displayItemState(status)

    const {
        border,
        checkmarkDisplay,
        lineOneColor,
        lineTwoColor,
        opacity,
        textOpacity
    } = itemDetails

    return (
        <ItemContainer border={border} opacity={opacity}>
            <FirstLineText color={lineOneColor}>
                {props.stepName} {props.stepNum}
            </FirstLineText>
            <Wrapper>
                <CheckMarkContainer display={checkmarkDisplay}>
                    <img src={circleCheck} alt={"Completed"} />
                </CheckMarkContainer>
                <SecondLineText color={lineTwoColor} opacity={textOpacity}>
                    {text}
                </SecondLineText>
            </Wrapper>
        </ItemContainer>
    )
}

TitlebarItem.propTypes = {
    status: PropTypes.string.isRequired,
    stepName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

TitlebarItem.defaultProps = {
    status: "inactive",
    stepName: "Step"
}

export default TitlebarItem
