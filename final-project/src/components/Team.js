import { database } from '../database.js';
import { set, onValue, ref, off, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import TeamPokemon from './TeamPokemon';
import EmptyTeam from './EmptyTeam.js';
let createData;
let deleteData;

function Team(props) {
    //----------------------
    // firebase stuff
    const [data, setData] = useState();

    createData = (name) => {
        let data = {
            name: `${name}`,
        }
        const dataRef = ref(database, `/${name}`);
        set(dataRef, data)
        .then(() => {
            console.log("Set was successful");
        })
        .catch((error) => {
            console.log("Set failed");
            console.log(error);
        });
    }

    deleteData = (name) => {
        const dataRef = ref(database, `/${name}`);
        remove(dataRef)
        .then(() => {
            console.log("Remove was successful");
        })
        .catch((error) => {
            console.log("Remove failed");
            console.log(error);
        });
        console.log('--------------------');
    }

    useEffect(() => {
        const dataRef = ref(database, '/');
        onValue(dataRef, (snap) => {
            //setCount(0);
            setData(snap.val());
            let firebaseCount = 0;
            let firebaseList = [];
            for (let key in snap.val()) {
                for (let sub_key in snap.val()[key]) {
                    firebaseList.push(snap.val()[key][sub_key]);
                    firebaseCount++;
                }
            }
            props.updateCount(firebaseCount);
            props.updateList(firebaseList);
        }, []);

        return () => {
            const dataRef = ref(database, '/');
            off(dataRef);
            console.log("Removed listener");
        }
    }, [props])

    return (
        <>
        <div className='
            flex
            justify-center
            pb-10'>
                <div className='
                    grid
                    grid-cols-3
                    gap-20'>
            <h2 className='
                text-7xl
                font-bold
                text-title
                col-span-full
                flex justify-center'>
                    Team
        </h2>

        { data ? Object.keys(data).map((key) => <TeamPokemon
            name={key}
            key={`TeamPokemon-${key}`}
            list={props.list}
            removeFromList={props.removeFromList}
            count={props.count}
            />) : <EmptyTeam />}
        </div>
        </div>
        <h1 className='flex justify-center'>Team count: {props.count}/6</h1>
        </>
    )
}

export default Team;
export { createData, deleteData };