import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Publish extends ApiService {


//TYPE POST
//URL /mc/publish/updatePublish
updatePublish(data){
return this.post(Config.API_URL + Constant.PUBLISH_UPDATEPUBLISH, data);
}


//TYPE POST
//URL /mc/publish/delPublish
delPublish(data){
return this.post(Config.API_URL + Constant.PUBLISH_DELPUBLISH, data);
}


//TYPE POST
//URL /mc/publish/stopPublish/{id}
stopPublish(data, urlParam){
return this.post(Config.API_URL + Constant.PUBLISH_STOPPUBLISH, data, urlParam);
}


//TYPE GET
//URL /mc/publish/export/{campaignId}
exportUrl(data, urlParam){
return this.get(Config.API_URL + Constant.PUBLISH_EXPORTURL, data, urlParam);
}


//TYPE POST
//URL /mc/publish/checkUrlValid
checkUrlValid(data){
return this.post(Config.API_URL + Constant.PUBLISH_CHECKURLVALID, data);
}


//TYPE POST
//URL /mc/publish/getKeyword
getKeyword(data){
return this.post(Config.API_URL + Constant.PUBLISH_GETKEYWORD, data);
}


//TYPE GET
//URL /mc/publish/selectPublish/{publishId}
selectPublish(data, urlParam){
return this.get(Config.API_URL + Constant.PUBLISH_SELECTPUBLISH, data, urlParam);
}


//TYPE POST
//URL /mc/publish/updatePublishTime
updatePublishTime(data){
return this.post(Config.API_URL + Constant.PUBLISH_UPDATEPUBLISHTIME, data);
}


//TYPE POST
//URL /mc/publish/getPublishsByCampaignIdPagination
getPublishsByCampaignIdPagination(data){
return this.post(Config.API_URL + Constant.PUBLISH_GETPUBLISHSBYCAMPAIGNIDPAGINATION, data);
}


//TYPE POST
//URL /mc/publish/getPublishsByCampaignId/{campaignId}
getPublishsByCampaignId(data, urlParam){
return this.post(Config.API_URL + Constant.PUBLISH_GETPUBLISHSBYCAMPAIGNID, data, urlParam);
}


//TYPE POST
//URL /mc/publish/insertPublishList
insertPublishList(data){
return this.post(Config.API_URL + Constant.PUBLISH_INSERTPUBLISHLIST, data);
}


}
