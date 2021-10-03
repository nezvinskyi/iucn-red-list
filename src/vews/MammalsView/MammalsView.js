import { useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';
import { SpeciesList } from '../../components';
import { regionSelector, mammalsSelector } from '../../redux/species';

const MammalsView = () => {
  const region = useSelector(regionSelector);
  const mammals = useSelector(mammalsSelector);

  useEffect(() => {
    NotificationManager.success(`${mammals.length} mammals found`);
  });

  return (
    <div className="container">
      <h1 className="text-xl text-center font-bold">{`Mammals of ${region.name}`}</h1>

      <SpeciesList species={mammals} />
    </div>
  );
};

export default MammalsView;
