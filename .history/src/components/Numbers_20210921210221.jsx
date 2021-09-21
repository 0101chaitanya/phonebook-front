const Numbers = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <p key={`${person.name}${person.number}}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                if (window.confirm("Are you sure")) {
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
