import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class CampaignPlan extends ApiService {


//TYPE GET
//URL /mc/campaignPlan/list
getList(data){
return this.get(Config.API_URL + Constant.CAMPAIGNPLAN_GETLIST, data);
}


//TYPE POST
//URL /mc/campaignPlan/addCampaignPlan
addCampaignPlan(data){
return this.post(Config.API_URL + Constant.CAMPAIGNPLAN_ADDCAMPAIGNPLAN, data);
}


//TYPE POST
//URL /mc/campaignPlan/copyCampaignPlan/{id}
copyCampaignPlan(data, urlParam){
return this.post(Config.API_URL + Constant.CAMPAIGNPLAN_COPYCAMPAIGNPLAN, data, urlParam);
}


//TYPE DELETE
//URL /mc/campaignPlan/delCampaignPlan/{id}
delCampaignPlan(data, urlParam){
return this.post(Config.API_URL + Constant.CAMPAIGNPLAN_DELCAMPAIGNPLAN, data, urlParam);
}


//TYPE POST
//URL /mc/campaignPlan/updateCampaignPlan
updateCampaignPlan(data){
return this.post(Config.API_URL + Constant.CAMPAIGNPLAN_UPDATECAMPAIGNPLAN, data);
}


//TYPE GET
//URL /mc/campaignPlan/selectCampaignPlan/{id}
selectCampaignPlan(data, urlParam){
return this.get(Config.API_URL + Constant.CAMPAIGNPLAN_SELECTCAMPAIGNPLAN, data, urlParam);
}


}
