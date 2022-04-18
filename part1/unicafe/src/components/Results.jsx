const Results = (props) => {
    return(
        <div>
            <p>Good: {props.good} </p>
            <p>Neutral: {props.neutral} </p>
            <p>Bad: {props.bad} </p>
        </div>
    )
}

export default Results;