import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Idfa extends ApiService {


//TYPE null
//URL /idfa/click
addIdfa(data){
return this.post(Config.API_URL + Constant.IDFA_ADDIDFA, data);
}


}
