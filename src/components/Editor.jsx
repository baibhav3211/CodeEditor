import React, { useState, useRef } from 'react';

function Editor() {
    const [lineNumbers, setLineNumbers] = useState(['1']);
    const [code, setCode] = useState('');
    const textareaRef = useRef(null);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setCode(value);
        const numberOfLines = value.split('\n').length;
        setLineNumbers(Array.from({ length: numberOfLines }, (_, index) => index + 1));
    };

    const handleDownloadClick = () => {
        const blob = new Blob([code], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(blob);
        anchor.download = 'code.txt';
        anchor.click();
        URL.revokeObjectURL(anchor.href);
    };

    const handleKeyPress = (event) => {
        let textToInsert;
        if (event.key === '(') {
            textToInsert = ')';
        } else if (event.key === '{') {
            textToInsert = '}';
        } else if (event.key === '[') {
            textToInsert = ']';
        }

        if (textToInsert) {
            insertTextAtCursor(textToInsert);
        }
    };

    const insertTextAtCursor = (text) => {
        const { selectionStart, selectionEnd } = textareaRef.current;
        const newText =
             code.substring(selectionEnd) + text + code.substring(0, selectionStart) ;
        setCode(newText);
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(selectionStart + text.length, selectionStart + text.length);
    };



    return (
        <div className="editor-container">
            <div className="readme-editor">
                {/* Your readme editor component or description goes here */}
            </div>
            <div className="editor">
                <div className="line-numbers">
                    {lineNumbers.map((lineNumber, index) => (
                        <span key={index}>{lineNumber}</span>
                    ))}
                </div>
                <textarea ref={textareaRef} value={code} onChange={handleInputChange} onKeyDown={handleKeyPress}></textarea>
            </div>
            <button onClick={handleDownloadClick}>Download Code</button>
        </div>
    );
}

export default Editor;
