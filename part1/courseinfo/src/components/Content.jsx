const Content = (props) => {
    return (
        <div>
            <p>{props.part1}, Exercises: {props.exercises1}</p>
            <p>{props.part2}, Exercises: {props.exercises2}</p>
            <p>{props.part3}, Exercises: {props.exercises3}</p>
        </div>
    )
}

export default Content;