import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class BasicError extends ApiService {


//TYPE null
//URL /error
error(data){
return this.post(Config.API_URL + Constant.BASICERROR_ERROR, data);
}


//TYPE null
//URL /error
errorHtml(data){
return this.post(Config.API_URL + Constant.BASICERROR_ERRORHTML, data);
}


}
