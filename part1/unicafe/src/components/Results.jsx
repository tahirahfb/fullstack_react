const Results = (props) => {
    const {good, neutral, bad} = props
    const total = good + neutral + bad;
    const average = ((good - bad) / (total)).toFixed(3);
    const positive = (((good) / (total)) * 100).toFixed(2);
    if ((total) === 0) {
        return (<div id="no_feedback">No Feedback Given</div>)
    }else{ 
    return(
            <table>
                <tbody>
                <tr>
                    <th>Good</th>
                    <td>{good}</td>
                </tr>
                <tr>
                    <th>Neutral</th>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <th>Bad</th>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Average</th>
                    <td>{average}</td>
                </tr>
                <tr>
                    <th>Positive</th>
                    <td>{positive}%</td>
                </tr>
                </tbody>
            </table>
    )}
}

export default Results;

//Results/Statistics already in separate component

 /*<div id="display">
            <p>Good: {good} </p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad} </p>
            <p>Total Feedback: {total} </p>
            <p>Average: {average}</p>
            <p>Positive: {positive}% </p>*/