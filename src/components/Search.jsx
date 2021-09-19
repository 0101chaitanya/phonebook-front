const Search = ({ search, handleSearch, persons }) => {
  return (
    <div>
      name: <input value={search} onChange={handleSearch} name="name" />
      <p>
        {persons.some(
          (person) => person.name.toLowerCase() === search.toLowerCase()
        )
          ? (() => {
              let person = persons.find(
                (person) => person.name.toLowerCase() === search.toLowerCase()
              );
              return (
                <span>
                  {person.name} {person.number}
                </span>
              );
            })()
          : false}
      </p>
    </div>
  );
};

export default Search;
