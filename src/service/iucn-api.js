import axios from 'axios';
import './api-settings';

const API_KEY = process.env.REACT_APP_API_KEY;

const getRegionsList = async () => {
  const { data } = await axios.get(`/region/list?token=${API_KEY}`);
  return data.results;
};

const getSpeciesByRegion = async region => {
  const { data } = await axios.get(`/species/region/${region}/page/1?token=${API_KEY}`);
  return data.result;
};

const getMeasuresByRegionAndId = async ({ region, id }) => {
  const { data } = await axios.get(`/measures/species/id/${id}/region/${region}?token=${API_KEY}`);

  const { result } = data;
  let measures = null;
  if (result.length !== 0) {
    measures = Object.values(result.map(item => item.title)).join(', ');
  }

  return measures;
};

export default { getRegionsList, getSpeciesByRegion, getMeasuresByRegionAndId };
