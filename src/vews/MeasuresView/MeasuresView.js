import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MeasuresList } from '../../components';
import { regionSelector, criticalSpeciesSelector } from '../../redux/species';
import api from '../../service/iucn-api';

const MeasuresView = () => {
  const history = useHistory();
  const [measures, setMeasures] = useState([]);

  const region = useSelector(regionSelector);
  const criticalSpecies = useSelector(criticalSpeciesSelector);

  const getMeasures = async () => {
    criticalSpecies.forEach(async item => {
      const measuresData = await api.getMeasuresByRegionAndId({
        region: region.identifier,
        id: item.taxonid,
      });
      setMeasures(prevState => [...prevState, { ...item, measures: measuresData }]);
    });
    NotificationManager.success(`${criticalSpecies.length} critically endangered species found`);
  };

  useEffect(() => {
    if (Object.keys(region).length === 0) {
      history.push('/');
    }
    getMeasures();
  }, []);

  return (
    <div className="container">
      <h1 className="text-xl text-center font-bold my-10">{`Conservation measures for all critically endangered species in ${region.name}`}</h1>

      <MeasuresList species={measures} />
    </div>
  );
};

export default MeasuresView;
