import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Active extends ApiService {


//TYPE POST
//URL /active/getActiveList
getActiveList(data){
return this.post(Config.API_URL + Constant.ACTIVE_GETACTIVELIST, data);
}


//TYPE POST
//URL /active/insertActive
insertActive(data){
return this.post(Config.API_URL + Constant.ACTIVE_INSERTACTIVE, data);
}


//TYPE POST
//URL /active/updateActiveStatus
updateActiveStatus(data){
return this.post(Config.API_URL + Constant.ACTIVE_UPDATEACTIVESTATUS, data);
}


//TYPE GET
//URL /active/getActiveUrlListByUser
getActiveUrlListByUser(){
return this.get(Config.API_URL + Constant.ACTIVE_GETACTIVEURLLISTBYUSER);
}


//TYPE POST
//URL /active/delActive/{id}
delActive(data, urlParam){
return this.post(Config.API_URL + Constant.ACTIVE_DELACTIVE, data, urlParam);
}


//TYPE POST
//URL /active/selectActive/{id}
selectActive(data, urlParam){
return this.post(Config.API_URL + Constant.ACTIVE_SELECTACTIVE, data, urlParam);
}


//TYPE POST
//URL /active/getActiveHisList
getActiveHisList(data){
return this.post(Config.API_URL + Constant.ACTIVE_GETACTIVEHISLIST, data);
}


}
