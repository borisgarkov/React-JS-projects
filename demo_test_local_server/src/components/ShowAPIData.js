import { useState, useEffect } from 'react';
import { getApiData, postDataToApiServer } from '../services/ApiData';

export default function ShowAPIData() {

    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] = useState('');

    useEffect(() => {
        getApiData().then(data => setMembers(data))
    }, []);

    return (
        <ul>
            {members.map(m => {
                return (
                    <li key={m._id}>{m.name} {m.val}</li>
                )
            })}
        </ul>
    )
}