import React, { useState, useRef, useEffect } from 'react';
import defaultText from '../const/DefaultData';

function Editor() {
    const [selectedLanguage, setSelectedLanguage] = useState('Javascript');
    const [code, setCode] = useState(defaultText[selectedLanguage] || '');
    const [lineNumbers, setLineNumbers] = useState(['']);
    const [theme, setTheme] = useState('dark');

    const textareaRef = useRef(null);

    useEffect(() => {
        // Calculate initial line numbers based on default code value
        const numberOfLines = code.split('\n').length;
        console.log(code);
        const newLineNumbers = Array.from({ length: numberOfLines }, (_, index) => index + 1);
        setLineNumbers(newLineNumbers);
    }, [lineNumbers]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setCode(value);
        setTimeout(() => {
            const updatedValue = textareaRef.current.value; 
            console.log(updatedValue)
            const numberOfLines = updatedValue.split('\n').length;
            setLineNumbers(Array.from({ length: numberOfLines }, (_, index) => index + 1));
        }, 0);
    };

    // const handleDownloadClick = () => {
    //     const blob = new Blob([code], { type: 'text/plain' });
    //     const anchor = document.createElement('a');
    //     anchor.href = URL.createObjectURL(blob);
    //     anchor.download = 'code.txt';
    //     anchor.click();
    //     URL.revokeObjectURL(anchor.href);
    // };

    const getClosingBracket = (openBracket) => {
        const closingBracketsMap = {
            '(': '()',
            '[': '[]',
            '{': '{}',
        };

        return closingBracketsMap[openBracket];
    };

    const handleKeyDown = (event) => {
        const { keyCode, target } = event;
        
        if (keyCode === 9) { 
            event.preventDefault();
            
            const start = target.selectionStart;
            const end = target.selectionEnd;
    
            const value = target.value;
            const updatedValue = value.substring(0, start) + '    ' + value.substring(end);
            
            setCode(updatedValue);
            target.setSelectionRange(start + 4, start + 4); 
        } else {
            
            const openBrackets = [57, 219, 123];
    
            if (openBrackets.includes(keyCode)) {
                const value = event.target.value;
                const closingBracket = getClosingBracket(event.key);
                const updatedValue = value + closingBracket;
                setCode(updatedValue);
                event.preventDefault();
            }
        }
    };
    

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setSelectedLanguage(event.target.value);
        setCode(defaultText[selectedLanguage] || '');
    };

    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme);
    }

    const languages = [
        { 1: "Javascript" },
        { 2: "Python" },
        { 3: "Java" },
        { 4: "C" },
        { 5: "C++" },
        { 6: "C#" },
        { 7: "Go" },
        { 8: "Ruby" }
    ];

    const themes = [
        { 1: "Dark" },
        { 2: "Light" }
    ];

    return (
        <div className="editor-container">
            <div className="readme-editor">
                <select onChange={handleLanguageChange} className='languages'>
                    {languages.map((language, index) => (
                        <option key={index}>{language[index + 1]}</option>
                    ))}
                </select>
                <select onChange={handleThemeChange} className='languages'>
                    {themes.map((theme, index) => (
                        <option key={index}>{theme[index + 1]}</option>
                    ))}
                </select>
            </div>
            <div className={`${theme === 'dark' ? 'editor-dark' : 'editor-light'}`}>

                <div className="line-numbers">
                    {lineNumbers.map((lineNumber, index) => (
                        <span key={index}>{lineNumber}</span>
                    ))}
                </div>
                <textarea ref={textareaRef} value={code} onChange={handleInputChange} onKeyDown={handleKeyDown}
                    className={`${theme === 'dark' ? 'textarea-dark' : 'textarea-light'}`}
                ></textarea>
            </div>
        </div>

    );
}

export default Editor;
