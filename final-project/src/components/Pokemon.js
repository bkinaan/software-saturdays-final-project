import '../index.css';
import { createData, count, setCount, list, setList } from './Team';
function Pokemon(props) {
    let name = props.name;
    let types = props.types;

    // make the first character in the name capital
    const capitalizeFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let handleButtonClick = () => {
        //console.log("about to add",list);
        if (list.includes(name)) {
            alert("You already have this pokemon on your team!");
        } else if ( count === 6) {
            alert("You can't have more than 6 pokemon on your team!");  
        } else {
            setCount(count + 1);
            createData(props.name);
            setList([...list, name]);
        }
    }
    
    // put type names in a list
    let typeNames = types.map(type => type.type.name);
    
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
            rounded-xl'>
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
                    <p key={`Type-${typeName}`}>{typeName}</p>
                ))}
            </div>
            <div className='flex justify-center'><img src={props.img} alt='avatar'></img></div>
            <button
                onClick={handleButtonClick}
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