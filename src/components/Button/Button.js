import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { determineButtonColors, determineButtonSize } from "./utils"
import * as colors from "../../colors"
import "../../styles.scss"

const StyledButton = styled.button`
    /* Generic Styles */
    border-width: 2px;
    border-style: solid;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 18px;
    text-align: center;
    margin: 0;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform .05s ease-in-out, box-shadow .05s ease-in-out;

    /* Color styles */
    ${(props) => {
        const { color, backgroundColor, borderColor } = determineButtonColors(
            props
        )
        return css`
            color: ${color};
            background-color: ${backgroundColor};
            border-color: ${borderColor};
        `
    }}

    /* Sizes */
    ${(props) => {
        const {
            height,
            fontSize,
            minWidth,
            lineHeight,
            letterSpacing,
        } = determineButtonSize(props)
        return css`
            height: ${height};
            font-size: ${fontSize};
            min-width: ${minWidth};
            line-height: ${lineHeight};
            letter-spacing: ${letterSpacing};
        `
    }}

    /* Uppercase */
    text-transform: ${(props) => props.uppercase && "uppercase"};

    :hover:enabled {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);

        ${(props) =>
            props.buttonStyle.startsWith("secondary") &&
            css`
                background-color: transparent;
            `}
    }

    :active:enabled {
        transform: translate(4px, 4px);
        box-shadow: none;
    }

    :focus {
        outline: 1px solid ${colors.blue.base}
    }

    :disabled {
        cursor: not-allowed;
        opacity: 40%;
        box-shadow: none;
        ${(props) =>
            props.buttonStyle === "primary-dark" &&
            css`
                background-color: ${colors.black};
            `}
    }
`

/**
Global button component. Can accept events, but won't redirect to anywhere else on the site.

If you need to switch routes or link externally, you'll need to wrap the Button in an `<a>` or `<Link>` of some sort.
*/

// This Button component simply wraps the StyledButton from above.
// It's like this solely so StoryBook auto-generated docs can work correctly
// (They don't seem to be able to work directly on Styled Components)
function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>
}

Button.propTypes = {
    buttonStyle: PropTypes.oneOf([
        "primary-dark",
        "primary-light",
        "secondary-dark",
        "secondary-light",
    ]),
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    uppercase: PropTypes.bool,
}

Button.defaultProps = {
    buttonStyle: "primary-dark",
    size: "md",
    uppercase: false,
}

export default Button
