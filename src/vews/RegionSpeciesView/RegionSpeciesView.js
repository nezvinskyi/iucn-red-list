import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { SpeciesList } from '../../components';
import {
  regionSelector,
  allSpeciesSelector,
  fetchSpecies,
  toggleLoader,
} from '../../redux/species';
import api from '../../service/iucn-api';

const RegionSpeciesView = () => {
  const history = useHistory();
  const region = useSelector(regionSelector);
  const allSpecies = useSelector(allSpeciesSelector);

  const dispatch = useDispatch();
  const fetchSpeciesData = async () => {
    dispatch(toggleLoader());
    const data = await api.getSpeciesByRegion(region.identifier);

    dispatch(fetchSpecies(data));
    dispatch(toggleLoader());

    if (data.length === 0) {
      const message = 'The server returned no data for this region. Please try another region';
      NotificationManager.error(message, 'Error!');
    } else {
      const message = `${data.length} species found`;
      NotificationManager.success(message);
    }
  };

  useEffect(() => {
    if (Object.keys(region).length === 0) {
      history.push('/');
    }
    fetchSpeciesData();
  }, []);

  const handleCriticalClick = () => {
    history.push('/measures');
  };

  const handleMammalsClick = () => {
    history.push('/mammals');
  };

  return (
    <div className="container">
      <h1 className="text-xl text-center font-bold">{`All ${region.name}'s species`}</h1>
      <div className="flex justify-around">
        <button
          onClick={handleCriticalClick}
          className="w-1/4 my-4 block center hover:bg-red-300 hover:border-transparent hover:shadow-lg hover:text-white rounded-lg p-4 border border-gray-200 font-medium"
          type="button"
          disabled={allSpecies.length === 0}
        >
          Critically endangered species
        </button>
        <button
          onClick={handleMammalsClick}
          className="w-1/4 my-4 block center hover:bg-red-300 hover:border-transparent hover:shadow-lg hover:text-white rounded-lg p-4 border border-gray-200 font-medium"
          type="button"
          disabled={allSpecies.length === 0}
        >
          Mammals
        </button>
      </div>

      <SpeciesList species={allSpecies} />
    </div>
  );
};

export default RegionSpeciesView;
