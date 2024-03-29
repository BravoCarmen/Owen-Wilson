function FilterByMovie({ movieFilter, handleChangeMovie }) {
  const handleInput = (ev) => {
    handleChangeMovie(ev.target.value);
  };

  return (
    <>
      <label htmlFor='search_movie' className='filters__movie'>
        Título:
        <input
          type='text'
          name='search_movie'
          placeholder='¿Qué película buscas?'
          id='search_movie'
          value={movieFilter}
          onChange={handleInput}
        />
      </label>
    </>
  );
}

export default FilterByMovie;
