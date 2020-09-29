import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import * as colors from "../../colors"

const ProfileContainer = styled.div`
    position: relative;
    width: 416px;
    height: 379px;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12),
        0px 12px 17px rgba(0, 0, 0, 0.14);
    background: ${colors.gray.lighter};
`
const MyInfoContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 32px 32px 0px 20px;
`

const ContentHeader = styled.h5`
    width: 100%;
    font-family: "aktiv-grotesk-extended";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${colors.black};
    margin: 0px 0px 4px 0px;
    box-sizing: border-box;
`

const ContentParagraph = styled.p`
    margin: 0px;
    width: 100%;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${colors.gray.darker};
    box-sizing: border-box;
`

const TextButton = styled.button`
    width: 120px;
    margin: 10px 0px 0px 0px;
    font-family: "aktiv-grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: right;
    color: ${colors.blue.base};
    border: none;
    background: none;
`

function Profile(props) {
    return (
        <ProfileContainer>
            <MyInfoContainer>
                <ContentHeader>My Info</ContentHeader>
                <ContentParagraph>{props.userName}</ContentParagraph>
                <ContentParagraph>{props.userEmail}</ContentParagraph>
                <ContentParagraph>{props.userPhone}</ContentParagraph>
            </MyInfoContainer>
            <MyInfoContainer>
                <ContentHeader>Selected Course</ContentHeader>
                <ContentParagraph>{props.userCourse}</ContentParagraph>
            </MyInfoContainer>
            <MyInfoContainer>
                <ContentHeader>Time Commitment</ContentHeader>
                <ContentParagraph>{props.userTime}</ContentParagraph>
                <TextButton>Log Out</TextButton>
            </MyInfoContainer>
        </ProfileContainer>
    )
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userPhone: PropTypes.string.isRequired,
    userCourse: PropTypes.string.isRequired,
    userTime: PropTypes.string.isRequired
}

Profile.defaultProps = {
    userName: 'Namey Namerson',
    userEmail: 'nameynamerson@coolemail.com',
    userPhone: '999-999-9999',
    userCourse: 'Fullstack Javascript',
    userTime: 'Full - Time'
}

export default Profile
