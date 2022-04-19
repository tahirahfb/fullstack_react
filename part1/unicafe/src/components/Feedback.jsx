const Feedback = (props) => {
    const {goodOne, neutralOne, badOne} = props
    return(
        <div className="btns">
            <button className="good" onClick={goodOne}>Good</button>
            <button className="neutral" onClick={neutralOne}>Neutral</button>
            <button className="bad" onClick={badOne}>Bad</button>
        </div>
    )
}

export default Feedback;