import { useContext } from "react";
import MyContext from "../contexts/MyContext";
import SecondContext from "../contexts/SecondContext";


export default function AboutPage() {

    const { name, address, test } = useContext(MyContext);
    const secondName = useContext(SecondContext);

    return (
        <>
            <p>{name}</p>
            <p>{secondName}</p>
            <h2>THis is the About Page</h2>
            <h3>Some contact info here</h3>
        </>
    )
}