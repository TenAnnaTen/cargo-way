const Button = ({text, onClick, type}) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;