const Numbers = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default Numbers;
