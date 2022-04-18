const Results = (props) => {
    const {good, neutral, bad} = props
    const total = good + neutral + bad;
    if ((props.good + props.neutral + props.bad) === 0) {
        return (<div id="no_feedback">No Feedback Given</div>)
    }else{ 
    return(
        <div id="display">
            <p>Good: {good} </p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad} </p>
            <p>Total Feedback: {total} </p>
            <p>Average: {((good - bad) / (total)).toFixed(3)}</p>
            <p>Positive: {(((good) / (total)) * 100).toFixed(2)}% </p>
        </div>
    )}
}

export default Results;

//Results/Statistics already in separate component