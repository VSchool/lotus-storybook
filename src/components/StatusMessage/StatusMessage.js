import React from "react"
import styled from "styled-components"
import { setStatus } from "./utils"
import PropTypes from 'prop-types'
import * as colors from "../../colors"
// import { black, white } from '../../colors/gray'

const StatusMessageContainer = styled.div`
    position: relative;
    width: 378px;
    /* min-height: 128px; */
    display: flex;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12),
        0px 12px 17px rgba(0, 0, 0, 0.14);
    border: ${props => props.border};
    /* box-sizing: border-box; */

    @media (min-width: 768px) {
        width: 100%;
        height: 56px;
    }
`

const IndicatorContainer = styled.div`
    min-width: 56px;
    min-height: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.background};
    border: ${props => props.border};
    box-sizing: border-box;
`

const Indicator = styled.p`
    margin: 0px;
    width: 100%;
    font-family: "benton-sans";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: ${colors.white};
`

const MessageWrapper = styled.div`
    width: 100%;
    /* min-height: 100%; */
    padding: 16px 16px 16px 16px;
    background: ${props => props.background};
    /* background: none; */
    display: flex;
    align-items: center;
    /* border: 1px solid lightcoral; */

    @media (min-width: 768px) {
        /* background: blue; */

        /* height: 100%; */
    }
`

const Message = styled.p`
    margin: 0px;
    /* height: 100%; */
    width: 100%;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.black};
    border: 1px solid ${props => props.borderColor};
    box-sizing: border-box;

    & > span {
        color: ${colors.blue.base};
        text-decoration: underline;
    }

    @media (min-width: 768px) {
        /* background: green; */
        /* height: 56px; */
    }
`

function StatusMessage(props) {
    const { status, message } = props
    const {
        indicatorText,
        indicatorColor,
        indicatorBorder,
        contentBackground,
        contentBorder,
        messageContent
    } = setStatus(status, message)

    return (
        <StatusMessageContainer border={contentBorder}>
            <IndicatorContainer background={indicatorColor} border={indicatorBorder}>
                <Indicator>{indicatorText}</Indicator>
            </IndicatorContainer>
            <MessageWrapper background={contentBackground}>
                <Message borderColor={contentBackground}>{messageContent}</Message>
            </MessageWrapper>
        </StatusMessageContainer>
    )
}

StatusMessage.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

StatusMessage.defaultProps = {
    status: 'neutral',
    message: 'Welcome to your V School Application. Get started!'
}

export default StatusMessage


