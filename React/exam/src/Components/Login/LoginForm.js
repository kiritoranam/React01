import { useState } from "react";
import { useHistory } from "react-router";
import './loginform.css';

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [error, setError] = useState(false);
    const [password, setPassword] = useState();

    const history = useHistory();
    
    
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    
    

    const submitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('userName', userName);
        localStorage.setItem('password',password);
        
        if (userName.trim().length === 0 || password.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid input.',
            });
        if (!error) {
            history.replace('/products');
        }

        console.log(userName);
        console.log(password); 

        setUserName('');
        setPassword('');
        };
    };

    return (
        <form  onSubmit={submitHandler}>
            <div>
                <label htmlfor="userName">UserName</label>
                <input  className ="input" type="text" id="userName" value={userName} onChange={userNameHandler}/>
                
            </div>
            <div>
                <label htmlfor="password">Password</label>
                <input type="password" id="password" value={password} onChange={passwordHandler} />
                
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default LoginForm;