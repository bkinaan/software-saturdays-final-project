import '../stylesheets/Pokemon.css';
function Pokemon(props) {
    let types = props.types;
    console.log(props.class)
    
    // put type names in a list
    let typeNames = types.map(type => type.type.name);
    
    return (
        <>
        <div key={props.name} className={props.class}>
        <h1>{props.name}</h1>
        <ul>
            {typeNames.map(typeName => (
                <li key={typeName}>{typeName}</li>
            ))}
        </ul>
        <img src={props.img} alt='avatar'></img>
        </div>
        </>
    )
}

export default Pokemon;