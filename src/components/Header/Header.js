import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Profile from '../Profile/Profile'
import * as colors from "../../colors"
import headerLogo from "../../assets/vs-header-logo.svg"
import backArrow from "../../assets/icons/arrow-back.svg"
import accountCircle from "../../assets/icons/account-circle24px.svg"
import clearX from '../../assets/icons/clear24px.svg'

const HeaderContainer = styled.div`
    position: relative;
    max-width: 100%;
    padding: 28px 24px 28px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.gray.lighter};
    box-shadow: 0px 4px 16px rgba(33, 32, 31, 0.1);

    @media (min-width: 768px) {
        max-width: 100%;
    }
`

const BackContainer = styled.div`
    display: flex;
    align-items: center;
`

const BackArrowContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

const BackText = styled.p`
    margin: 0px 0px 0px 16px;
    display: none;
    font-family: 'aktiv-grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.gray.darker};

    @media (min-width: 768px) {
        display: block;
    }
`

const HeaderLogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    display: 'block';
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid lightcoral; */
`

const EmptyDiv = styled.div`

`

const ProfileElementContainer = styled.div`
    display: none;
    position: absolute;
    top: 88px;
    right: 24px;
`

function Header(props) {
    console.log(props)
    const [iconImage, setIconImage] = useState(accountCircle)
    const [profileOpen, setProfileOpen] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState(props.userLoggedIn)

    function handleClick() {
        let elemContainer = document.getElementById('elemContainer')
        if (elemContainer.style.display === '') {
            setIconImage(clearX)
            elemContainer.style.display = 'block'
        } else if (elemContainer.style.display === 'block') {
            setIconImage(accountCircle)
            elemContainer.style.display = ''
        }
    }
        
    function createIcon() {
        if (userLoggedIn === false) {
            return <EmptyDiv />
        } else if (userLoggedIn === true) {
            return <img src={iconImage} alt={'User profile'} onClick={handleClick} />
        }
    }

    let headerIcon = createIcon()

    return (
        <HeaderContainer>
            <BackContainer>
                <BackArrowContainer><img src={backArrow} alt={'Back to V School.io'} id={'classyId'} /></BackArrowContainer>
                <BackText>vschool.io</BackText>
            </BackContainer>
            <HeaderLogoContainer><img src={headerLogo} alt={'V School logo'} /></HeaderLogoContainer>
            <IconContainer>{headerIcon}</IconContainer>
            <ProfileElementContainer id={'elemContainer'}>
                <Profile userName={'Namey Namerson'} userEmail={'emailaddress@woah.com'} userPhone={'###-###-####'} userCourse={'Fullstack Javascript'} userTime={'Full - Time'} />
            </ProfileElementContainer>
        </HeaderContainer>
    )
}

// Header.propTypes = {
//     userLoggedIn: PropTypes.boolean
// }

export default Header
