import '../index.css'
import { deleteData } from "./Team";
function TeamPokemon(props) {
    let handleButtonClick = () => {
        deleteData(props.name);
        props.removeFromList(props.name);
    }

    const capitalizeFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

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
            rounded-xl'
            key={props.name}>
                <h1
                className='
                    font-bold
                    text-3xl
                    text-title
                    pb-2
                    flex
                    justify-center'>
            {capitalizeFirst(props.name)}</h1>
            <button
                onClick={handleButtonClick}
                /* disabled={ableToBeRemoved} */
                className='
                    bg-light-light-green
                    w-28 hover:scale-125
                    hover:bg-light-green
                    rounded-xl'
                        >Remove
            </button>
            </span>
        </>
    )
}

export default TeamPokemon;