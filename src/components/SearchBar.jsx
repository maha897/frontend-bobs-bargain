function SearchBar() {
    return (
        <div className="search-bar-container">
            <form>
                <input name="search-query" placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar