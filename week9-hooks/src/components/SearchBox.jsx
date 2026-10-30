import { useState, useEffect,useRef } from "react";
function SearchBox() {
    const [search, setSearch] = useState ('');

    const inputRef = useRef(null);
    const renderCount = useRef(0);

    renderCount.current +=1;

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h2>Search Box</h2>

            <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />

            <p>You searched for: {search}</p>
            <p>Render count: {renderCount.current}</p>
        </div>
    );
}

export default SearchBox;