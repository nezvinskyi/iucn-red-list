import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import api from '../../service/iucn-api';
import { setRegion } from '../../redux/species';

const MainView = () => {
  const [regions, setRegions] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const fetchRegions = async () => {
    const results = await api.getRegionsList();
    setRegions(results);
  };
  useEffect(() => {
    fetchRegions();
  }, []);

  const handleRandomClick = () => {
    const randomRegionIdx = Math.floor(Math.random() * regions.length);

    dispatch(setRegion(regions[randomRegionIdx]));

    history.push('/species');
  };

  const handleRegionClick = region => {
    dispatch(setRegion(region));
    history.push('/species');
  };

  return (
    <div className="container">
      <h1 className="text-xl text-center font-bold">IUCN Red List</h1>

      <button
        onClick={handleRandomClick}
        className="w-1/4 my-4 block center hover:bg-red-300 hover:border-transparent hover:shadow-lg hover:text-white rounded-lg p-4 border border-gray-200 font-medium"
        type="button"
      >
        Select a random region
      </button>
      <p className="my-4">Or select region from the list below:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {regions.map(region => (
          <li key={region.identifier}>
            <div
              className="hover:bg-red-300 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 cursor-pointer"
              onClick={() => handleRegionClick(region)}
            >
              <p className="group-hover:text-white leading-6 font-medium text-black">
                {region.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainView;
