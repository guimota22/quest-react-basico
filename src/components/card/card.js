import './card.css'

const Card = ({ title, color }) => {
    return (
        <div className='card' style={{ color: color }}>
            <p>{title.toUpperCase()}</p>
        </div>
    );
}

Card.defaultProps = {
    color: 'red'
}

export default Card