

export default function Search({search, setSearch, handleSearch}) {
    return (
        <div className="search-engine">
            <input 
            type="text"
            placeholder="Enter City Name..." 
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
            <button onClick={handleSearch}>Check Weather</button>
        </div>
    )
}