import {useState} from 'react';

function SimpleForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState([]);


    function submitHandler(event){
        event.preventDefault();

        const newUser = {name,email,password};

        // Update the user data array
        setUserData(prevUserData => [...prevUserData, newUser]);

        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');

        localStorage.setItem('userData',JSON.stringify(userData));
    }

    const changeNameHandler = (event) =>{
        setName(event.target.value);
    } 

    const changeEmailHandler = (event) =>{
        setEmail(event.target.value);
    }

    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
    }

  return (
    <div className="SimpleForm">
      <form onSubmit={submitHandler} >
        <div className="name-field">
          <label>Name</label><br/>
          <input type="text" name="name" value={name} onChange={changeNameHandler} placeholder='Name'/>
        </div>
        <div className="email-field">
            <label>Email</label><br/>
            <input type="email" name="email" value={email} onChange={changeEmailHandler} placeholder='Email'/>
        </div>
        <div className="password-field">
            <label>Password</label><br/>
            <input type="password" name="password" value={password} onChange={changePasswordHandler} placeholder='Password'/>
        </div>
        <div className="submit-form">
            <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}
export default SimpleForm;
