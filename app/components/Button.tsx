'use client' //for specifying client side rendering to nextjs

import clsx from 'clsx'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx("flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            disabled && "opacity-50 cursor-default",
            fullWidth && "w-full",
            secondary ? 'text-gray-900' : 'text-white',
            danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
            !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
            )}
        >
            {children}
        </button>
    )
}

export default Button

/*
BUTTON INTERFACE PROPERTIES
type?: 'button' | 'submit' | 'reset' | undefined; - Specifies the behavior of the button when clicked.
fullWidth?: boolean; - Indicates whether the button should take up the full width of its container.
children?: React.ReactNode; - Represents the content or child elements of the button.
onClick?: () => void; - Defines the click event handler for the button.
secondary?: boolean; - Indicates whether the button has secondary styling.
danger?: boolean; - Indicates whether the button represents a dangerous action.
disabled?: boolean; - Indicates whether the button is disabled.


WHAT IS REACT.REACTNODE
What it includes: React.ReactNode can represent a variety of JSX content, including:
Primitives like strings and numbers.
React elements like <div>, <span>, or custom components.
Fragments, which allow you to return multiple elements without a wrapper element.
Null or undefined.
Where it's used: React.ReactNode is commonly used as the type for props that expect child components or content. For example, the children prop in React components often uses React.ReactNode to allow passing any JSX content as children to the component.

Type safety: By specifying React.ReactNode as the type for props that expect JSX content, TypeScript can provide type checking and ensure that the correct types of values are passed to those props. This helps catch errors early in development and provides better code quality and maintainability.
*/