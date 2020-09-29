import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import vSchoolLogo from "../../assets/vs-logo.svg"
import * as colors from "../../colors"

const FooterContainer = styled.div`
    position: relative;
    width: 416px;
    height: 64px;
    display: flex;
    background: ${colors.black};

    @media (min-width: 768px) {
        min-width: 100%;
        height: 96px;
    }
`

const LogoContainer = styled.div`
    width: 40px;
    height: 32px;
    margin: 16px 0px 16px 18px;

    @media (min-width: 768px) {
        margin: 0px 536px 0px 0px;
        position: absolute;
        top: 33.3%;
        left: 7.33%;
    }
`

const HeaderP = styled.p`
    margin: 24px 0px 24px 120px;
    min-width: 72px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: ${colors.gray.base};

    @media (min-width: 768px) {
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        position: absolute;
        right: 24%;
        top: 35.42%;
        height: 24px;
        font-size: 20px;
        line-height: 28px;
        text-align: right;
        color: ${colors.white};
    }
`

const HeaderSpan = styled.span`
    display: none;
    margin: 0px;
    min-width: 100%;

    @media (min-width: 768px) {
        display: inline;
        margin: 0px 0px 0px 0px;
    }
`

const HeaderButton = styled(Button)`
    min-width: 128px;
    height: 32px;
    margin: 16px 18px 16px 16px;
    background: #21201f;
    border: 1px solid ${colors.gray.lighter};
    box-sizing: border-box;
    box-shadow: 2px 2px 0px rgba(255, 255, 255, 0.2);

    @media (min-width: 768px) {
        margin: 0px 0px 0px 0px;
        position: absolute;
        top: 20.83%;
        right: 3.42%;
        min-width: 176px;
        height: 56px;
        border: 2px solid ${colors.gray.lighter};
        box-shadow: 4px 4px 0px rgba(255, 255, 255, 0.2);
    }
`

function Footer() {
    return (
        <FooterContainer>
            <LogoContainer>
                <img src={vSchoolLogo} alt="V School Logo" />
            </LogoContainer>
            <HeaderP>
                Questions<HeaderSpan> about applying</HeaderSpan>?
            </HeaderP>
            <HeaderButton>Let's Talk</HeaderButton>
        </FooterContainer>
    )
}

export default Footer
