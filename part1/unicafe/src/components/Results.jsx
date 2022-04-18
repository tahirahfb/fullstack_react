const Results = (props) => {
    if ((props.good + props.neutral + props.bad) === 0) {
        return ('No Feedback Given')
    }else{ 
    return(
        <div id="display">
            <p>Good: {props.good} </p>
            <p>Neutral: {props.neutral} </p>
            <p>Bad: {props.bad} </p>
            <p>Total Feedback: {props.good + props.neutral + props.bad} </p>
            <p>Average: {((props.good - props.bad) / (props.good + props.neutral + props.bad)).toFixed(3)}</p>
            <p>Positive: {(((props.good) / (props.good + props.neutral + props.bad)) * 100).toFixed(2)}% </p>
        </div>
    )}
}

export default Results;

//Results/Statistics already in separate component