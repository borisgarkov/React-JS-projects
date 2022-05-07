import { useState, useEffect } from 'react';
import { getApiData, postDataToApiServer } from '../services/ApiData';

export default function ShowAPIData() {

    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getApiData().then(data => setMembers(data));

            setIsLoading(false);
        }, 1000);
    }, [])


    return (
        <ul>
            {isLoading
                ? <p>Loading Data</p>
                : members.map(m => <li key={m._id}>{m.name} {m.val}</li>)
            }
        </ul>
    )
}