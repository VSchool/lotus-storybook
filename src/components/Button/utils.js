import * as colors from "../../colors"

export function determineButtonColors(props) {
    let backgroundColor, color, borderColor
    switch (props.buttonStyle) {
        case "primary-dark":
        default:
            borderColor = colors.black
            backgroundColor = colors.gray.darker
            color = colors.white
            break
        case "primary-light":
            // SAME AS SECONDARY DARK?
            borderColor = colors.black
            backgroundColor = colors.gray.lighter
            color = colors.black
            break
        case "secondary-dark":
            borderColor = colors.black
            backgroundColor = colors.gray.lighter
            color = colors.black
            break
        case "secondary-light":
            borderColor = colors.white
            backgroundColor = "transparent"
            color = colors.white
            break
    }

    return { backgroundColor, color, borderColor }
}

export function determineButtonSize(props) {
    let height, fontSize, minWidth, lineHeight, letterSpacing
    switch (props.size) {
        case "xs":
            height = "32px"
            fontSize = "12px"
            lineHeight = "16px"
            letterSpacing = "0.85px"
            minWidth = "128px"
            break
        case "sm":
            height = "32px"
            fontSize = "12px"
            lineHeight = "16px"
            letterSpacing = "0.85px"
            minWidth = "176px"
            break
        case "md":
            height = "40px"
            fontSize = "12px"
            lineHeight = "16px"
            letterSpacing = "0.85px"
            minWidth = "176px"
            break
        case "lg":
        default:
            height = "48px"
            fontSize = "14px"
            lineHeight = "20px"
            letterSpacing = "1px"
            minWidth = "232px"
            break
        case "xl":
            height = "56px"
            fontSize = "16px"
            lineHeight = "24px"
            letterSpacing = "1.15px"
            minWidth = "232px"
            break
    }
    return { height, fontSize, minWidth, lineHeight, letterSpacing }
}
