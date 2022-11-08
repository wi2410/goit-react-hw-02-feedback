import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onClick }) => {
    return options.map((option, index) => {
              return <Button key={index} type="button" name={option} onClick={() => onClick(option)}>{option.toUpperCase()}</Button>
            })  
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}