const Feedback = (props) => {
    return(
        <div className="btns">
            <button className="good" onClick={props.goodOne}>Good</button>
            <button className="neutral" onClick={props.neutralOne}>Neutral</button>
            <button className="bad" onClick={props.badOne}>Bad</button>
        </div>
    )
}

export default Feedback;