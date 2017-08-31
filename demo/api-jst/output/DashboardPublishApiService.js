import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class DashboardPublish extends ApiService {


//TYPE POST
//URL /dashboard/publish/selectCompaignPlanByChannelAndBizType
getCompaignPlanByChannelAndBizType(data){
return this.post(Config.API_URL + Constant.DASHBOARDPUBLISH_GETCOMPAIGNPLANBYCHANNELANDBIZTYPE, data);
}


//TYPE POST
//URL /dashboard/publish/getUtmByBannerId
getUtmByBannerId(data){
return this.post(Config.API_URL + Constant.DASHBOARDPUBLISH_GETUTMBYBANNERID, data);
}


//TYPE POST
//URL /dashboard/publish/selectCompare
selectCompare(data){
return this.post(Config.API_URL + Constant.DASHBOARDPUBLISH_SELECTCOMPARE, data);
}


//TYPE POST
//URL /dashboard/publish/getBannersByCampaignPlanId
getBannersByCampaignPlanId(data){
return this.post(Config.API_URL + Constant.DASHBOARDPUBLISH_GETBANNERSBYCAMPAIGNPLANID, data);
}


//TYPE POST
//URL /dashboard/publish/selectPublishTrend
selectPublishTrend(data){
return this.post(Config.API_URL + Constant.DASHBOARDPUBLISH_SELECTPUBLISHTREND, data);
}


}
