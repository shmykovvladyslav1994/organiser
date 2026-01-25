const Button = (props: { className?: string; type: 'button' | 'submit'; children: string; onClick?: () => void; disabled?: boolean }) => {
    const {
        className,
        type,
        children,
        onClick,
        disabled
    } = props
    return (
        <button
            className={`button ${className}`}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button