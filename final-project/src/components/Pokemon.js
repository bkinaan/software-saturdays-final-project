import { useState } from 'react';
import '../index.css';
import { createData, deleteData } from './Team';
function Pokemon(props) {
    let name = props.name;
    let types = props.types;
    //console.log(props.class)

    const [ableToBeRemoved, setAbleToBeRemoved] = useState(false);

    // make the first character in the name capital
    const capitalizeFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let handleButtonClick = () => {
        setAbleToBeRemoved(true);
        createData(props.name, props.types);
    }
    
    // put type names in a list
    let typeNames = types.map(type => type.type.name);
    //let abilityNames = abilities.map(ability => ability.ability.name);
    
    return (
        <>
        <span 
        className='
            bg-light-blue
            text-center
            px-20
            box-content
            h-50
            w-32
            p-4
            border-4 rounded-xl'
            key={props.name}>
            <h1
                className='
                    font-bold
                    text-3xl
                    text-title
                    flex
                    justify-center'>
            {capitalizeFirst(name)}</h1>
            <hr></hr>
            <div className='flex justify-center gap-3'>
                <p className='font-bold text-green'>Type(s):</p>
                {typeNames.map(typeName => (
                    <p>{typeName}</p>
                ))}
            </div>
            <div className='flex justify-center'><img src={props.img} alt='avatar'></img></div>
            <button
                onClick={handleButtonClick}
                disabled={ableToBeRemoved}
                className='
                    bg-light-light-green
                    w-28 hover:scale-125
                    hover:bg-light-green
                    rounded-xl'
                        >Add to team
            </button>
        </span>
        </>
    )
}

export default Pokemon;