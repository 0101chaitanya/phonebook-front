const Numbers = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                if (Window.confirm("Are you sure") === true) {
                  handleDelete(person.id);
                } else {
                  return;
                }
              }}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Numbers;
