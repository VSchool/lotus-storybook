import * as colors from "../../colors"

export function displayItemState(status) {
    switch (status) {
        case "active":
            return {
                border: `4px solid ${colors.green.lighter}`,
                opacity: "1.0",
                lineOneColor: colors.gray.base,
                lineTwoColor: colors.gray.lighter,
                textOpacity: '1.0',
                checkmarkDisplay: "none"
            }
        case "disabled":
            return {
                border: `4px solid ${colors.black}`,
                opacity: "0.67",
                lineOneColor: colors.gray.base,
                lineTwoColor: colors.gray.lighter,
                textOpacity: '0.67',
                checkmarkDisplay: "none"
            }

        case "inactive":
        default:
            return {
                border: `4px solid ${colors.black}`,
                opacity: "1.0",
                lineOneColor: colors.gray.base,
                lineTwoColor: colors.gray.lighter,
                textOpacity: '0.8',
                checkmarkDisplay: "flex"
            }
    }
}
