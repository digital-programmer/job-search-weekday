import { CircularProgress } from "@mui/material"
import "./loader.css";
import PropTypes from 'prop-types';

export const Loader = ({ text }) => {
    return (
        <div className='loader'>
            <CircularProgress />
            {text && <div className='secondary-text text-l font-light'>{text}</div>}
        </div>
    )
}


Loader.propTypes = {
    text: PropTypes.string,
}