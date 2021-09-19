const Form = ({ handleSubmit, handleChange, state }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          required
          value={state.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div>
        number:{" "}
        <input
          required
          value={state.number}
          onChange={handleChange}
          name="number"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
