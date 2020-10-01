import React from "react"
import PropTypes from "prop-types"
import BaseSelectionBox from "./BaseSelectionBox"

/**
A component for displaying an on/off switch.

This `Switch` component holds no state of its own. You'll need to maintain state separately and pass in the `on`, `onChange`, `name`, `disabled`, etc. props you need in order to maintain its state externally. It only exists for styling purposes. Because of this, clicking the checkbox/label in the examples below won't change their `:checked` state.
 */
function Switch(props) {
    return (
        <BaseSelectionBox
            className="switch"
            type="checkbox"
            checked={props.on}
            {...props}
        ></BaseSelectionBox>
    )
}

Switch.propTypes = {
    /**
    Whether or not the switch is on
     */
    on: PropTypes.bool.isRequired,
    /**
    Whether or not the element should be disabled/grayed-out
     */
    disabled: PropTypes.bool,
    /**
    Handler function to run when the controls changes
     */
    onChange: PropTypes.func.isRequired,
    /**
    The `name` attribute which can be used for modifying state, specifically when state is an object with key/value pairs. (This `name` prop is usually used as the key for object state. If using hooks with a simple boolean state, `name` is not required.)
     */
    name: PropTypes.string,
    /**
    The text/elements to display on the associated label
     */
    children: PropTypes.node.isRequired,
}

export default Switch
