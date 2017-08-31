import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class DataDic extends ApiService {


//TYPE POST
//URL /dataDic/update
update(data){
return this.post(Config.API_URL + Constant.DATADIC_UPDATE, data);
}


//TYPE POST
//URL /dataDic/delete/{id}
delete(data, urlParam){
return this.post(Config.API_URL + Constant.DATADIC_DELETE, data, urlParam);
}


//TYPE POST
//URL /dataDic/insert
insert(data){
return this.post(Config.API_URL + Constant.DATADIC_INSERT, data);
}


//TYPE GET
//URL /dataDic/getDataCode/{parentCode}/{parentId}
getDataCode(data, urlParam){
return this.get(Config.API_URL + Constant.DATADIC_GETDATACODE, data, urlParam);
}


//TYPE GET
//URL /dataDic/getDataDicList/{dataCode}
getDataDicList(data, urlParam){
return this.get(Config.API_URL + Constant.DATADIC_GETDATADICLIST, data, urlParam);
}


//TYPE GET
//URL /dataDic/selectDbDate
selectDbDate(){
return this.get(Config.API_URL + Constant.DATADIC_SELECTDBDATE);
}


//TYPE GET
//URL /dataDic/getDataDicListByDataType/{dataType}
getDataDicListByDataType(data, urlParam){
return this.get(Config.API_URL + Constant.DATADIC_GETDATADICLISTBYDATATYPE, data, urlParam);
}


//TYPE POST
//URL /dataDic/getMainDataListByPagination
getMainDataListByPagination(data){
return this.post(Config.API_URL + Constant.DATADIC_GETMAINDATALISTBYPAGINATION, data);
}


//TYPE GET
//URL /dataDic/getNameByCode/{dataCode}
getNameByCode(data, urlParam){
return this.get(Config.API_URL + Constant.DATADIC_GETNAMEBYCODE, data, urlParam);
}


//TYPE GET
//URL /dataDic/getRoleList
getRoleList(){
return this.get(Config.API_URL + Constant.DATADIC_GETROLELIST);
}


}
