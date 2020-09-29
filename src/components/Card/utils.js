import * as colors from "../../colors"

export function findCardStatus(status) {
    switch (status) {
        case "not-started":
            return {
                topBorder: `4px solid ${colors.gray.base}`,
                rightBorder: `1px solid ${colors.gray.base}`,
                bottomBorder: `1px solid ${colors.gray.base}`,
                leftBorder: `1px solid ${colors.gray.base}`,
                cardStatus: status,
                titleText: "Not Started",
                messageText: "Messaging about what needs to be completed"
            }
        case "up-next":
            return {
                topBorder: `4px solid ${colors.pink.base}`,
                rightBorder: `4px solid ${colors.pink.base}`,
                bottomBorder: `4px solid ${colors.pink.base}`,
                leftBorder: `4px solid ${colors.pink.base}`,
                cardStatus: status,
                titleText: "Up Next",
                messageText: "Messaging about what needs to be completed"
            }
        case "in-progress":
            return {
                topBorder: `4px solid ${colors.yellow.base}`,
                rightBorder: `1px solid ${colors.gray.base}`,
                bottomBorder: `1px solid ${colors.gray.base}`,
                leftBorder: `1px solid ${colors.gray.base}`,
                cardStatus: status,
                titleText: "In Progress",
                messageText: "Messaging about what needs to be completed"
            }
        case "completed":
            return {
                topBorder: `4px solid ${colors.green.base}`,
                rightBorder: `1px solid ${colors.gray.base}`,
                bottomBorder: `1px solid ${colors.gray.base}`,
                leftBorder: `1px solid ${colors.gray.base}`,
                cardStatus: status,
                titleText: "Complete",
                messageText: "Messaging about what needs to be completed"
            }
        default:
            return {
                topBorder: `4px solid ${colors.gray.base}`,
                rightBorder: `1px solid ${colors.gray.base}`,
                bottomBorder: `1px solid ${colors.gray.base}`,
                leftBorder: `1px solid ${colors.gray.base}`,
                cardStatus: status,
                titleText: "Default",
                messageText: "Messaging about what needs to be completed"
            }
    }
}
