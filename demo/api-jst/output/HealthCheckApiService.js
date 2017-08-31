import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class HealthCheck extends ApiService {


//TYPE null
//URL /healthCheck/checkServerStatus
checkServerStatus(){
return this.post(Config.API_URL + Constant.HEALTHCHECK_CHECKSERVERSTATUS);
}


}
