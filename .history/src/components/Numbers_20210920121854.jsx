const Numbers = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                let ans = window.confirm("Are you sure");

                if (ans) {
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
