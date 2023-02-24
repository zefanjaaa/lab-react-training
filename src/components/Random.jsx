function Random(props) {
    const randomValue = Math.floor(Math.random() * (props.max - props.min +1) +props.min)
    return (
        <div>
           <p>The random value between {props.min} and {props.max} = <b>{randomValue}</b></p> 
        </div>
    )
}

export default Random