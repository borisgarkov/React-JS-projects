const API_URL = 'http://localhost:3030/data/records';

export const getApiData = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
};


export const postDataToApiServer = async (memberData, accessToken) => {
    console.log('postDataToApiServer called');

    const result = await fetch(API_URL, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify(memberData)
    });
    return await result.json();
};


export const loginToApiServer = async () => {
    const result = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'email': 'peter@abv.bg',
            'password': '123456',
        })
    });

    return await result.json();
}

export const logoutFromApiServer = async () => {
    const result = await fetch('http://localhost:3030/users/logout');
    return await result.json();
}