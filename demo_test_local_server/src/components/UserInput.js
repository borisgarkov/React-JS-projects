import { postDataToApiServer, loginToApiServer, logoutFromApiServer } from '../services/ApiData'

export default function UserInput() {

    const onUserFormSubmit = async (e) => {
        e.preventDefault();

        const data = await loginToApiServer();
        const token = data.accessToken;
        console.log(token);

        const formElements = e.target.elements;

        const userInputdata = {
            name: formElements[0].value,
            val: formElements[1].value,
            _createdOn: formElements[2].value,
            _ownerId: formElements[3].value,
        }

        console.log(JSON.stringify(userInputdata));

        postDataToApiServer(userInputdata, token);

        logoutFromApiServer();
    }


    return (
        <form onSubmit={onUserFormSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" />

            <label htmlFor="val">val</label>
            <input type="text" id="val" />

            <label htmlFor="_createdOn">_createdOn</label>
            <input type="text" id="_createdOn" />

            <label htmlFor="_ownerId">_ownerId</label>
            <input type="text" id="_ownerId" />

            <button type="submit">Post to API</button>
        </form>
    )
}