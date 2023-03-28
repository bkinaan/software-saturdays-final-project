import { database } from '../database.js';
import { onValue, ref, off } from 'firebase/database';
import React, { useEffect, useState } from 'react';

function Team() {
    const [data, setData] = useState();

    useEffect(() => {
        const dataRef = ref(database, '/');
        onValue(dataRef, (snap) => {
            setData(snap.val());
            for (let key in snap.val()) {
                console.log(key, ':');
                for (let sub_key in snap.val()[key]) {
                    console.log('    ', sub_key, ':', snap.val()[key][sub_key]);
                }
                console.log('-----------------');
            }
        });

        return () => {
            const dataRef = ref(database, '/');
            off(dataRef);
            console.log("Removed listener");
        }
    }, [])

    return (
        <>
        <div className='
            flex
            justify-center'>
            <h2 className='
                text-7xl
                font-bold
                text-title'>
                    Team
        </h2>
        <li>
            { data ? Object.keys(data).map((key) => <ul>{key}</ul>) : null}
        </li>
        
        </div>
        </>
    )
}

export default Team;