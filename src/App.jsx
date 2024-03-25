import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState('');
  const [useLowercase, setUseLowercase] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [language, setLanguage] = useState('Turkish');

  const dictionary = {
    English: {
      passwordGenerator: 'Password Generator',
      passwordLength: 'Password Length',
      includeLowercase: 'Include lowercase letters',
      includeUppercase: 'Include uppercase letters',
      includeNumbers: 'Include numbers',
      includeSymbols: 'Include symbols',
      generatePassword: 'Generate Password'
    },

    Turkish: {
      passwordGenerator: 'Şifre Oluşturucu',
      passwordLength: 'Şifre Uzunluğu',
      includeLowercase: 'Küçük harf içerir',
      includeUppercase: 'Büyük harf içerir',
      includeNumbers: 'Rakam içerir',
      includeSymbols: 'Simge içerir',
      generatePassword: 'Şifre Oluştur'
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let characters = '';
    characters += useLowercase ? lowercase : '';
    characters += useUppercase ? uppercase : '';
    characters += useNumbers ? numbers : '';
    characters += useSymbols ? symbols : '';

    let password = Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');

    setPassword(password);
  };

  return (
    <div className='generator'>
      <h1>{dictionary[language].passwordGenerator}</h1>
      <div className="language">
        <select id="language" className='language' value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="Turkish">🇹🇷 Türkçe</option>
          <option value="English">🇬🇧 English</option>
        </select>
      </div>
      <div className="result">
        <input type="text" placeholder='P4$5W0rD!' value={password} />
        <button onClick={copyPassword}><img src="/images/icon-copy.svg" alt="" /></button>
      </div>
      <div className='generatorSelector'>
        <div className="selectorLength">
          <label>{dictionary[language].passwordLength}</label>
          <input type="number" min="1" max="25" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
        <div className='selector'>
          <input id='lowercaseCheckbox' type="checkbox" checked={useLowercase} onChange={(e) => setUseLowercase(e.target.checked)} />
          <label htmlFor="lowercaseCheckbox">{dictionary[language].includeLowercase}</label>
        </div>
        <div className='selector'>
          <input id='uppercaseCheckbox' type="checkbox" checked={useUppercase} onChange={(e) => setUseUppercase(e.target.checked)} />
          <label htmlFor="uppercaseCheckbox">{dictionary[language].includeUppercase}</label>
        </div>
        <div className='selector'>
          <input id='numbersCheckbox' type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} />
          <label htmlFor="numbersCheckbox">{dictionary[language].includeNumbers}</label>
        </div>
        <div className='selector'>
          <input id='symbolsCheckbox' type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
          <label htmlFor="symbolsCheckbox">{dictionary[language].includeSymbols}</label>
        </div>
      <button onClick={generatePassword}>{dictionary[language].generatePassword}</button>
      </div>
    </div>
  );
}