import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class MaterialTask extends ApiService {


//TYPE GET
//URL /materialTask/view/{id}
user(data, urlParam){
return this.get(Config.API_URL + Constant.MATERIALTASK_USER, data, urlParam);
}


//TYPE POST
//URL /materialTask/getMaterialTaskList
getMaterialTaskList(data){
return this.post(Config.API_URL + Constant.MATERIALTASK_GETMATERIALTASKLIST, data);
}


//TYPE GET
//URL /materialTask/selectMaterialTaskList
selectMaterialTaskList(data){
return this.get(Config.API_URL + Constant.MATERIALTASK_SELECTMATERIALTASKLIST, data);
}


//TYPE POST
//URL /materialTask/selectMaterialTask/{id}
selectMaterialTask(data, urlParam){
return this.post(Config.API_URL + Constant.MATERIALTASK_SELECTMATERIALTASK, data, urlParam);
}


//TYPE GET
//URL /materialTask/getDataDicList
getDataDicList(){
return this.get(Config.API_URL + Constant.MATERIALTASK_GETDATADICLIST);
}


//TYPE POST
//URL /materialTask/updateTaskStatu/{id}
updateTaskStatu(data, urlParam){
return this.post(Config.API_URL + Constant.MATERIALTASK_UPDATETASKSTATU, data, urlParam);
}


//TYPE POST
//URL /materialTask/complete/{taskId}
checkComplete(data, urlParam){
return this.post(Config.API_URL + Constant.MATERIALTASK_CHECKCOMPLETE, data, urlParam);
}


//TYPE GET
//URL /materialTask/getUserList
getUserList(){
return this.get(Config.API_URL + Constant.MATERIALTASK_GETUSERLIST);
}


//TYPE POST
//URL /materialTask/batchSave
batchSave(data){
return this.post(Config.API_URL + Constant.MATERIALTASK_BATCHSAVE, data);
}


}
