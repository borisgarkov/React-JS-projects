import { useEffect } from "react";

export default function MyForm() {

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(e.currentTarget);
        console.log(e.target);
        let formData = new FormData(e.target);
        console.log(formData.values());
        let username = formData.get('username');
        let password = formData.get('password');
        // let { username, password } = Object.fromEntries(formData);
        console.log(username);
        console.log(password);
        e.target.reset();
    }

    useEffect(() => {
        console.log('useEffect called');
    }, []);

    return (
        <>
            <p></p>
            <form method='POST' onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' />
                </div>
                <input type='submit' />
            </form>
        </>
    )
} 