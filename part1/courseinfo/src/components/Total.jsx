const Total = (props) => {
    return (
        <div>
            <p>Number of Exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
}

export default Total; 

/*<p>Number of Exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>*/