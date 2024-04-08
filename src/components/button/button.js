import './button.css'

const showButtonLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = (props) => {
    return (
        <div className="btn-section">
            <button
                className='btn'
                onClick={() => { showButtonLabel(props.label) }}>
                {props.label}
            </button>
        </div>
    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}


export default Button