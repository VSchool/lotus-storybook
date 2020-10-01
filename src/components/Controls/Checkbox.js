import React from "react"
import PropTypes from "prop-types"
import BaseSelectionBox from "./BaseSelectionBox"

/**
A component for displaying checkboxes.

This `Checkbox` component holds no state of its own. You'll need to maintain state separately and pass in the `checked`, `onChange`, `name`, `disabled`, etc. props you need in order to maintain its state externally. It only exists for styling purposes. Because of this, clicking the checkbox/label in the examples below won't change their `:checked` state.
 */
function Checkbox(props) {
    return <BaseSelectionBox className="checkbox" type="checkbox" {...props} />
}

Checkbox.propTypes = {
    /**
    Whether or not the controls should be filled in
     */
    checked: PropTypes.bool.isRequired,
    /**
    Whether or not the controls and label should be disabled/grayed-out
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

export default Checkbox
