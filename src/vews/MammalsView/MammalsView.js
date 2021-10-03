import { useSelector } from 'react-redux';
import { SpeciesList } from '../../components';
import { regionSelector, mammalsSelector } from '../../redux/species';

const MammalsView = () => {
  const region = useSelector(regionSelector);
  const mammals = useSelector(mammalsSelector);

  return (
    <div className="container">
      <h1 className="text-xl text-center font-bold">{`Mammals of ${region.name}`}</h1>

      <SpeciesList species={mammals} />
    </div>
  );
};

export default MammalsView;
