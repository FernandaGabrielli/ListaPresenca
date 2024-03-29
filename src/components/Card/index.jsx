import PropTypes from 'prop-types';
import './styles.css'; 

export function Card({name, time}) {
    return (
        <div className="card">
            <strong>
                {name}
            </strong>
            <small>
                {time}
            </small>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};