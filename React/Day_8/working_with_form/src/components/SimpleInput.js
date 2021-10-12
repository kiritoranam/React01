

import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valuechangeHandler: namechangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valuechangeHandler: emailchangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));


let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 



 const formSubmissionHandler = event => {
   event.preventDefault();


   if (!enteredNameIsValid) {
     return;
   }

   console.log(enteredName);
   console.log(enteredEmail);

   resetNameInput();
   resetEmailInput();
 };

  const nameInputclasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError
  ? 'form-control invalid'
  : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputclasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameBlurHandler} value={enteredName} onChange={namechangedHandler} />
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onBlur={emailBlurHandler} value={enteredEmail} onChange={emailchangedHandler} />
      </div>
      {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
