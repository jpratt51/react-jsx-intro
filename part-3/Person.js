const Person = (props) => {
    let message;
    let name;
    if (props.age >= 18) {
        message = "Please go vote!";
    } else {
        message = "You must be 18.";
    }
    if (props.name.length > 6) {
        name = props.name.slice(0, 6);
    } else {
        name = props.name;
    }
    return (
        <div>
            <p>
                <b>Learn some information about {name}.</b>
            </p>
            <p>
                Name: {name} Age: {props.age}
            </p>
            <p>{message}</p>
            <h4>{name}'s Hobbies</h4>
            <ul>
                {props.hobbies.map((h) => (
                    <li>{h}</li>
                ))}
            </ul>
        </div>
    );
};
