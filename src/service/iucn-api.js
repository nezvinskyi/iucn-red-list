import axios from 'axios';
import './api-settings';

// require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

const getRegionsList = async () => {
  const { data } = await axios.get(`/region/list?token=${API_KEY}`);
  return data.results;
};

export default { getRegionsList };
