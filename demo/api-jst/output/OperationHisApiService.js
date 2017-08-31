import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class OperationHis extends ApiService {


//TYPE POST
//URL /operationHis/getOperationHis
getOperationHis(data){
return this.post(Config.API_URL + Constant.OPERATIONHIS_GETOPERATIONHIS, data);
}


}
