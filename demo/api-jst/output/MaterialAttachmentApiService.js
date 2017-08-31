import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class MaterialAttachment extends ApiService {


//TYPE POST
//URL /attachment/push
push(data){
return this.post(Config.API_URL + Constant.MATERIALATTACHMENT_PUSH, data);
}


//TYPE POST
//URL /attachment/deleteMultipleAttachments
deleteMultipleAttachments(data){
return this.post(Config.API_URL + Constant.MATERIALATTACHMENT_DELETEMULTIPLEATTACHMENTS, data);
}


//TYPE GET
//URL /attachment/history/list/{materialTaskId}
getMaterialHistoryList(data, urlParam){
return this.get(Config.API_URL + Constant.MATERIALATTACHMENT_GETMATERIALHISTORYLIST, data, urlParam);
}


//TYPE POST
//URL /attachment/getMultipleAttachments
getMultipleAttachments(data){
return this.post(Config.API_URL + Constant.MATERIALATTACHMENT_GETMULTIPLEATTACHMENTS, data);
}


//TYPE POST
//URL /attachment/fetch
fetch(data){
return this.post(Config.API_URL + Constant.MATERIALATTACHMENT_FETCH, data);
}


//TYPE POST
//URL /attachment/getMaterialList
getMaterialList(data){
return this.post(Config.API_URL + Constant.MATERIALATTACHMENT_GETMATERIALLIST, data);
}


//TYPE POST
//URL /attachment/deleteMaterial/{id}
deleteAttachment(data, urlParam){
return this.post(Config.API_URL + Constant.MATERIALATTACHMENT_DELETEATTACHMENT, data, urlParam);
}


}
