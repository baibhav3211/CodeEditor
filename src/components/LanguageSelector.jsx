
const LanguageSelector = () => {
    const languages = [
        { 1: "javascript" },
        { 2: "python" },
        { 3: "java" },
        { 4: "c" },
        { 5: "c++" },
        { 6: "c#" },
        { 7: "go" },
        { 8: "ruby" },
        { 9: "typescript" }
    ];
    return (
        <div>
            <select>
                {languages.map((language, index) => (
                    <option key={index}>{language[index + 1]}</option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelector