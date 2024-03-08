import "./Toggle.css";
import PropTypes from "prop-types";

ToggleTheme.propTypes = {
    handleChange: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
}

function ToggleTheme({ handleChange, isChecked }) {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check"></label>
        </div>
    )
}

export default ToggleTheme;