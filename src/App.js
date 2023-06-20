import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && password && text) {
      const formData = {
        name: name,
        password: password,
        text: text
      };

      alert(JSON.stringify(formData));
    } else {
      alert('Заполните все поля формы');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container__item">
          <label>Username</label>
          <input
            maxlength="20"
            type="text"
            id="name"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container__item">
          <label>Password</label>
          <input
            minlength="4"
            maxlength="12"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='textMini'>Your password is between 4 and 12 characters</p>
        </div>
        <div className="container__item">
          <label>Input Text Label</label>
          <input
            type="text"
            id="text"
            placeholder="Type here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='container__item'>
          <label for="check">
            <input type="checkbox" id="check" className='check' />
            <div></div>
            <p>Remember me</p>
          </label>
        </div>
        <div className='container__item'>
          <label class="switch">
            <input type="checkbox" defaultChecked />
            <span class="slider round"></span>
            <p>Off</p>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label>
            <input type="radio" class="modern-radio" value="1" name="a" />
            <span></span>
            <p>Radio selection 1</p>
          </label>
          <label>
            <input type="radio" class="modern-radio" value="2" name="a" />
            <span></span>
            <p>Radio selection 2</p>
          </label>
          <label>
            <input type="radio" class="modern-radio" value="3" name="a" />
            <span></span>
            <p> Radio selection 3</p>
          </label>
        </div>
        <div className="container__item">
          <label>Dropdown title</label>
          <span class="custom-dropdown big">  
          <select>   
            <option>Dropdown option</option>  
            <option>Dropdown option 1</option>   
            <option>Dropdown option 2</option>  
          </select> 
          </span> 
        </div>
        <div className='container__buttons'>
          <button className='cancel' type="reset">Cancel</button>
          <button className='next' type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Form;