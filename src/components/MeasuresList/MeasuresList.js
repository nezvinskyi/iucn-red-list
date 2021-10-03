const MeasuresList = ({ species }) => (
  <ul className="grid grid-cols-1 gap-4">
    {species?.map(specie => (
      <li key={specie.taxonid}>
        <div className="group block rounded-lg p-4 border border-gray-200 ">
          <p className=" leading-6 font-medium text-black">{`Name: ${
            specie.main_common_name || specie.scientific_name
          }`}</p>
          <p>{`Class: ${specie.class_name}`}</p>
          <p>{`Measures: ${specie.measures ? specie.measures : 'none'}`}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default MeasuresList;
