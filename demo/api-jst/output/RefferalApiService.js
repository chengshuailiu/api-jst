import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Refferal extends ApiService {


//TYPE null
//URL /refferal
all(){
return this.post(Config.API_URL + Constant.REFFERAL_ALL);
}


//TYPE null
//URL /refferal/delete/{id}
delete(data, urlParam){
return this.post(Config.API_URL + Constant.REFFERAL_DELETE, data, urlParam);
}


//TYPE POST
//URL /refferal/save
save(data){
return this.post(Config.API_URL + Constant.REFFERAL_SAVE, data);
}


//TYPE null
//URL /refferal/view/{id}
view(data, urlParam){
return this.post(Config.API_URL + Constant.REFFERAL_VIEW, data, urlParam);
}


//TYPE null
//URL /refferal/copy/{id}
copyRefferal(data, urlParam){
return this.post(Config.API_URL + Constant.REFFERAL_COPYREFFERAL, data, urlParam);
}


//TYPE null
//URL /refferal/refferalList
refferalList(data){
return this.post(Config.API_URL + Constant.REFFERAL_REFFERALLIST, data);
}


//TYPE GET
//URL /refferal/template
excelDownload(){
return this.get(Config.API_URL + Constant.REFFERAL_EXCELDOWNLOAD);
}


//TYPE GET
//URL /refferal/getRefferalAndAngentList
getRefferalAndAngentList(){
return this.get(Config.API_URL + Constant.REFFERAL_GETREFFERALANDANGENTLIST);
}


//TYPE GET
//URL /refferal/getRefferalByAgentId/{agentId}
getRefferalByAgentId(data, urlParam){
return this.get(Config.API_URL + Constant.REFFERAL_GETREFFERALBYAGENTID, data, urlParam);
}


//TYPE POST
//URL /refferal/excelImport
excelImport(data){
return this.post(Config.API_URL + Constant.REFFERAL_EXCELIMPORT, data);
}


}
