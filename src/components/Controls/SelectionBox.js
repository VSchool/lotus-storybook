import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import * as colors from "../../colors"
import "../../styles.scss"

const SelectionBoxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const SelectionBoxInput = styled.input`
    appearance: none;
    }};

    &:not(:checked) + label:before {
        border: 2px solid ${colors.gray.base};
    }

    &:checked + label:before {
        background-color: ${colors.blue.base};
        border: 2px solid ${colors.blue.base};
    }

    &:disabled + label {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &[type="radio"] + label:before {
        border-radius: 50%;
    }

    &[type="radio"]:checked + label:after {
        content: "";
        position: absolute;
        border-radius: 50%;
        height: 12px;
        width: 12px;
        top: 14px;
        left: 14px;
        transform: translate(-50%, -50%);
        background-color: ${colors.gray.base};
    }
`

const SelectionBoxLabel = styled.label`
    height: 24px;
    position: relative;
    font-family: "aktiv-grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gray.darker};
    padding-left: 36px;
    cursor: pointer;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        transition: all 0.1s ease-out;
    }
`

/**
A component for displaying checkboxes and radio buttons (depending on the provided `type` prop value).

This `SelectionBox` component holds no state of its own. You'll need to maintain state separately and pass in the `checked`, `onChange`, `name`, `disabled`, etc. props you need in order to maintain its state externally. It only exists for styling purposes. Because of this, clicking the checkbox/label in the examples below won't change their `:checked` state.
 */
function SelectionBox({
    id,
    disabled,
    checked,
    children,
    onChange,
    name,
    value,
    type,
    ...rest
}) {
    return (
        <SelectionBoxContainer {...rest}>
            <SelectionBoxInput
                type={type}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                name={name}
                id={id}
                value={value}
            />
            <SelectionBoxLabel htmlFor={id}>{children}</SelectionBoxLabel>
        </SelectionBoxContainer>
    )
}

SelectionBox.propTypes = {
    /**
    Whether or not the checkbox should be filled in
     */
    checked: PropTypes.bool.isRequired,
    /**
    Whether or not the checkbox and label should be disabled/grayed-out
     */
    disabled: PropTypes.bool,
    /**
    Handler function to run when the checkbox changes
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
    /**
    `id` is required for the `htmlFor` attribute to work internally. Must be unique.
     */
    id: PropTypes.string.isRequired,
    /**
    Just like in HTML
     */
    type: PropTypes.oneOf(["radio", "checkbox"]).isRequired,
}

SelectionBox.defaultProps = {
    checked: false,
    disabled: false,
}

export default SelectionBox
