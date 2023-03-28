import '../index.css';
function Pokemon(props) {
    let types = props.types;
    let abilities = props.abilities;
    console.log(props.class)
    
    // put type names in a list
    let typeNames = types.map(type => type.type.name);
    //let abilityNames = abilities.map(ability => ability.ability.name);
    
    return (
        <>
        <span 
        className='bg-light-blue text-center px-20 box-content h-50 w-32 p-4 border-4' key={props.name}>
        <h1
            className='font-bold'
        >{props.name}</h1>
        <ul>
            {typeNames.map(typeName => (
                <li key={typeName}>{typeName}</li>
            ))}
        </ul>
       {/*  <ul>
            {abilityNames.map(ability => (
                <li key={ability}>{ability}</li>
            ))}
        </ul> */}
        <div className='flex justify-center'><img src={props.img} alt='avatar'></img></div>
        <button
            className='bg-light-light-green w-28 hover:scale-125 hover:bg-light-green'
            >Add to team
        </button>
        </span>
        </>
    )
}

export default Pokemon;