import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa1783E44922ee9a1C95dE837015BB024a600C301'
);

export default instance;
