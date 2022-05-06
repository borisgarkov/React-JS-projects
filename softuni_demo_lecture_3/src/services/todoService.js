const API_URL = 'http://localhost:3030/data/members';

export const createMember = (member) => {
    return fetch(API_URL, init = {
        method: 'POST',
        headers: {
            'content-type': 'application-json',
        },
        body: JSON.stringify(member)
    })
}

export const getMemberAPIData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMembers(Object.values(data));
        console.log(members);
    } catch (error) {
        return console.log(error);
    }
}