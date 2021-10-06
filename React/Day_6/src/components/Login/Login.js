import React, { useState, useEffect, useReducer,useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/input/input';
import Authcontext from '../store/auth-context';

const emailReducer = (state, action) =>{
  if (action.type === 'user_input') {
    return { value: action.val, isvalid: action.val.includes('@') };
  }
  if (action.type === 'user_blur') {
    return { value: state.value, isvalid: state.value.includes('@') };
  }
  return { value: '' , isvalid: false}
};

const passwordReducer = (state, action) => {
  if (action.type === 'user_input') {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  }
  if (action.type === 'user_blur') {
    return { value: state.value, isvalid: state.value.trim().length > 6 };
  }
  return { value: '' , isvalid: false}
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '' , isvalid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '' , isvalid: null});

  const authCtx = useContext(Authcontext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const { isvalid: emailIsValid} = emailState;
  const {isvalid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('cheked validaty');
    setFormIsValid(
      emailIsValid && passwordIsValid
    );
    }, 500);

    return () => {
      console.log('cleanup');
      clearTimeout(identifier);
    };
    
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type :'user_input', val : event.target.value});
    // setFormIsValid(
    //       event.target.value.includes('@') && passwordState.isvalid
    //     );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type :'user_input', val : event.target.value});
    // setFormIsValid(
    //       emailState.isvalid && event.target.value.trim().length > 6
    //     );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type :'user_blur'});
  };

  const validatePasswordHandler = () => {
    dispatchEmail({type :'user_blur'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input  ref={emailInputRef} id="email" label="E-Mail" type="email" isvalid={emailIsValid} value={emailState.value}
        onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        <Input ref={passwordInputRef} id="password" label="Password" type="password" isvalid={passwordIsValid} value={passwordState.value}
        onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

