function Dropdown() {
  return (
    <div className="dropDown">
      <label for="breeds">Dog Breeds: </label>
      <select id="breeds">
        <option value="Beagle">Beagle</option>
        <option value="Boxer">Boxer</option>
      </select>
    </div>
  );
}

export default Dropdown;
