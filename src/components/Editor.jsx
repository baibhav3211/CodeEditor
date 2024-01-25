import React, { useState } from 'react';

const Editor = () => {
    const [code, setCode] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const generateLineNumbers = () => {
        const totalRows = code.split('\n').length;
        return Array.from({ length: totalRows }, (_, index) => (
            <div key={index + 1} className="line-number">
                {index + 1}
            </div>
        ));
    };

    return (
        <div className="editor-container">
            <div className="line-number-container">{generateLineNumbers()}</div>
            <div className="code-editor">
                <textarea
                    value={code}
                    onChange={handleChange}
                    rows={20}
                    cols={100}
                    className="code-textarea"
                />
            </div>
        </div>
    );
};

export default Editor;
