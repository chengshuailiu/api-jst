import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class RedisCacheData extends ApiService {


//TYPE GET
//URL /redis/url/{id}
getUrlById(data, urlParam){
return this.get(Config.API_URL + Constant.REDISCACHEDATA_GETURLBYID, data, urlParam);
}


//TYPE GET
//URL /redis/publish/{id}
getPublishById(data, urlParam){
return this.get(Config.API_URL + Constant.REDISCACHEDATA_GETPUBLISHBYID, data, urlParam);
}


//TYPE GET
//URL /redis/flush/baseData
flushBaseData(){
return this.get(Config.API_URL + Constant.REDISCACHEDATA_FLUSHBASEDATA);
}


//TYPE GET
//URL /redis/refferal/{id}
getRefferalById(data, urlParam){
return this.get(Config.API_URL + Constant.REDISCACHEDATA_GETREFFERALBYID, data, urlParam);
}


//TYPE GET
//URL /redis/campaignPlan/{id}
getCampaignPlanById(data, urlParam){
return this.get(Config.API_URL + Constant.REDISCACHEDATA_GETCAMPAIGNPLANBYID, data, urlParam);
}


}
