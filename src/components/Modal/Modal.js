import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { Button } from "../Button"
import * as colors from "../../colors"

const ModalContainer = styled.div`
    position: relative;
    padding: 32px 24px 32px 24px;
    max-width: 384px;
    background: ${colors.gray.lighter};
    border: 2px solid ${colors.gray.base};
    box-sizing: border-box;
    box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

    @media (min-width: 768px) {
        min-width: 848px;
        max-height: 448px;
        padding: 64px 88px 64px 88px;
    }
`

const ContentWrapper = styled.div`
    /* border: 1px solid lightcoral; */
`

const FirstLineText = styled.h4`
    margin: 0px 0px 24px 0px;
    max-height: 140px;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.black};
    box-sizing: border-box;

    @media (min-width: 768px) {
        max-height: 88px;
        font-weight: 900;
        font-size: 32px;
        line-height: 38px;
    }
`


const SecondLineText = styled.p`
    margin: 0px 0px 16px 0px;
    max-height: 40px;
    font-family: aktiv-grotesk-extended;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${colors.blue.base};

    @media (min-width: 768px) {
        max-height: 24px;
        font-size: 16px;
        line-height: 24px;
    }
`

const ThirdLineText = styled.p`
    margin: 0px 0px 40px 0px;
    max-height: 140px;
    font-family: aktiv-grotesk;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${colors.gray.darker};

    @media (min-width: 768px) {
        max-height: 80px;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        display: block;
        text-align: right;
    }
`

const LightButton = styled(Button)`
    margin: 0px 0px 0px 0px;
    width: 323px;

    @media (min-width: 768px) {
        margin: 0px 0px 0px 0px;
        width: 192px;
        height: 56px;
    }
`

const DarkButton = styled(Button)`
    margin: 24px 0px 0px 0px;
    width: 323px;

    @media (min-width: 768px) {
        margin: 0px 0px 0px 24px;
        width: 297px;
        height: 56px;
    }
`

function Modal(props) {
    const { firstLine, secondLine, thirdLine } = props

    return (
        <ModalContainer>
            <ContentWrapper>
                <FirstLineText>{firstLine}</FirstLineText>
                <SecondLineText>{secondLine}</SecondLineText>
                <ThirdLineText>{thirdLine}</ThirdLineText>
                <ButtonWrapper>
                    <LightButton buttonStyle={'primary-light'} buttonSize={'lg'}>Button</LightButton>
                    <DarkButton buttonStyle={'primary-dark'} buttonSize={'lg'}>Button</DarkButton>
                </ButtonWrapper>
            </ContentWrapper>
        </ModalContainer>
    )
}

Modal.propTypes = {
    firstLine: PropTypes.string.isRequired,
    secondLine: PropTypes.string.isRequired,
    thirdLine: PropTypes.string.isRequired
}

Modal.deafultProps = {
    firstLine: 'Are you planning on applying for any V School Scholarships?',
    secondLine: 'Complete the  Scholarship Application',
    thirdLine: 'If you are interested in applying for scholarships, make sure to apply. Then we tell them how many people are usually rewarded with something.'
}


export default Modal
