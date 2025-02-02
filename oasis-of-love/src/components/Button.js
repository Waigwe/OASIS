import React from 'react';
import '../styles/Button.scss';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOUR = ['primary', 'blue', 'red', 'green', 'pink'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColour
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0]
    const checkButtonColour = COLOUR.includes(buttonColour)? buttonColour : null

    return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColour}`} onClick={onClick} type={type}>{children}</button>
    )
}
