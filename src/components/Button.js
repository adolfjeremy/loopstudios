import React from "react";

export default function Button({
    isExternal = false,
    href,
    className,
    buttonName,
}) {
    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {buttonName}
            </a>
        );
    } else {
        return (
            <a href={href} className={className}>
                {buttonName}
            </a>
        );
    }
}
