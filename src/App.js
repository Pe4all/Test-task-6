import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [option, setOption] = useState('Dropdown option');
  const [radio, setRadio] = useState('');
  const [toggle, setToggle] = useState(false);
  const [remembered, setRemembered] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && password && text && option && radio)  {
      const formData = {
        userName: name,
        password: password,
        text: text,
        remembered: remembered,
        toggeled: toggle,
        radioSelection: radio,
        dropdownTitle: option,
      };
      console.log(formData);
      alert(JSON.stringify(formData));
    } else {
      alert('Заполните все поля формы');
    }
  };

  const isPasswordValid = ( password.length >= 4 && password.length <= 12 )|| password.length === 0;
  const isNameValid = ( name.length >= 3 || name.length === 0 ) && /\d/.test(name) !== true;
  const isTextValid = text.length > 8 || text.length === 0;
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOption = (e) => {
    setOption(e.target.getAttribute('value'));
  }
  const handleRadio = (e) => {
    setRadio(e.target.getAttribute('value'));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container__item">
          <label>Username</label>
          <input
            pattern="[\D\s]{3,}"
            maxLength="20"
            type="text"
            id="name"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {isNameValid ? ( ''
          ) : (<p className="textMini textRed">Error message informing me of a problem</p>)}
        </div>
        <div className="container__item">
          <label>Password</label>
          <input
            minLength="4"
            maxLength="12"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isPasswordValid ? (
            <p className="textMini">Your password is between 4 and 12 characters</p>
          ) : (<p className="textMini textRed">Error message informing me of a problem</p>)}
        </div>
        <div className="container__item">
          <label>Input Text Label</label>
          <input
            type="text"
            id="text"
            placeholder="Type here"
            minLength="9"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {isTextValid ? (
            <p></p>
          ) : (<p className="textMini textRed">Error message informing me of a problem</p>)}
        </div>
        <div className='container__item heightFix'>
          <label>
            <input type="checkbox" id="check" className='check' onChange={() => setRemembered(!remembered)}/>
            <div></div>
            <p>Remember me</p>
          </label>
        </div>
        <div className='container__item'>
          <label className="switch">
            <input type="checkbox" 
            onChange={() => setToggle(!toggle)}
            />
            <span className="slider round"></span>
            {toggle ? (
            <p> On </p>
          ) : (<p>Off</p>)}
          </label>
        </div>
        <div className="checkbox-wrapper">
          <label>
            <input type="radio" className="modern-radio" onClick={handleRadio} value="1" name="a" />
            <span></span>
            <p>Radio selection 1</p>
          </label>
          <label>
            <input type="radio" className="modern-radio" onClick={handleRadio} value="2" name="a" />
            <span></span>
            <p>Radio selection 2</p>
          </label>
          <label>
            <input type="radio" className="modern-radio" onClick={handleRadio} value="3" name="a" />
            <span></span>
            <p> Radio selection 3</p>
          </label>
        </div>
        <div className="container__item">
          <label>Dropdown Title</label>
          <span className="custom-dropdown">
            <ul
              className={`menu ${isDropdownOpen ? 'open' : ''}`}
              onClick={handleDropdownToggle}
            ><span>{option}</span>
              <li onClick={handleOption} value="Dropdown option">Dropdown option</li>
              <li onClick={handleOption} value="Dropdown option 1">Dropdown option 1</li>
              <li onClick={handleOption} value="Dropdown option 2"> Dropdown option 2</li>
            </ul>
          </span>
        </div>
        <div className='container__buttons'>
          <button className='cancel' type="reset" onClick={() => setToggle(false)}>Cancel</button>
          <button className='next' type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
