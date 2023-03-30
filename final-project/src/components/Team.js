import { database } from '../database.js';
import { set, update, onValue, ref, off, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';

function Team() {
    const [data, setData] = useState();

    const createData = () => {
        let data = {
            key: 'value',
            otherkey: 'other value',
        }
        const dataRef = ref(database, '/added');
        set(dataRef, data)
        .then(() => {
            console.log("Set was successful");
        })
        .catch((error) => {
            console.log("Set failed");
            console.log(error);
        });
    }

    const readData = () => {
        const dataRef = ref(database, '/');
        onValue(dataRef, (snap) => {
            for (let key in snap.val()) {
                console.log(key, ':');
                for (let sub_key in snap.val()[key]) {
                    console.log('   ', sub_key, ':', snap.val()[key][sub_key]);
                }
                console.log('--------------------');
            }
        })
    }

    const updateData = () => {
        let data = { // TODO: replace data with pokemon fields
            otherKey: 'new value',
        }
        const dataRef = ref(database, 'added'); // TODO: replace 'added' with key
        update(dataRef, data)
        .then(() => {
            console.log("Update was successful");
        })
        .catch((error) => {
            console.log("Update failed");
            console.log(error);
        });

        console.log('--------------------');
        console.log('--------------------');
        console.log('--------------------');
    }

    const deleteData = () => {
        const dataRef = ref(database, '/added'); // TODO: replace 'added' with key
        remove(dataRef)
        .then(() => {
            console.log("Remove was successful");
        })
        .catch((error) => {
            console.log("Remove failed");
            console.log(error);
        });
        console.log('--------------------');
        console.log('--------------------');
        console.log('--------------------');
    }

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
        <div>
            { data ? Object.keys(data).map((key) => <div>{key}</div>) : null}
        </div>
        <div>
        <button onClick={readData}>Read Data</button><br /><br />
            <button onClick={createData}>Create Data</button><br /><br />
            <button onClick={updateData}>Update Data</button><br /><br />
            <button onClick={deleteData}>Delete Data</button><br /><br />
            </div>
        </div>
        </>
    )
}

export default Team;