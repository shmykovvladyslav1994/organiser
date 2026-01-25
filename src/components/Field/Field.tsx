const Field = (props: {
    className: string;
    id: string; label: string;
    type: 'text' | 'search';
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    value?: string;
    inputRef?: React.RefObject<HTMLInputElement | null>;
    error?: string | null;
}) => {
    const {
        className,
        id,
        label,
        type,
        onInput = () => { },
        value,
        inputRef,
        error
    } = props
    return (
        <div className={`field ${className}`}>
            <label
                className="field__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                ref={inputRef}
                className={"field__input" + (error ? " is-invalid" : "")}
                id={id}
                placeholder=" "
                value={value}
                autoComplete="off"
                type={type}
                onInput={(e) =>
                    onInput(e)
                }
            />
            {error && <span title={error} className="field__error">{error}</span>}
        </div>
    )

}


export default Field