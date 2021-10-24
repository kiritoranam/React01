import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeHandler = () => {
        setChangeText(true);
        };

    return (
        <div>
            <h2>Hello World</h2>
            {!changeText && <Output>Hii There i am Vishal</Output>}
            {changeText && <p>Changed!</p>}
            <button onClick={changeHandler}>Change Text</button>
        </div>
    );
};

export default Greeting;