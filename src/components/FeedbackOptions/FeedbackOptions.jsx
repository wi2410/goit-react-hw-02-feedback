import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return Object.keys(options).map(option => {
              return <Button key={option} type="button" name={option} onClick={onLeaveFeedback}>{option.toUpperCase()}</Button>
            })  
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}