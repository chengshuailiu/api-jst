import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Utm extends ApiService {


//TYPE GET
//URL /mc/utm/seachUtm/{utmId}
seachUtm(data, urlParam){
return this.get(Config.API_URL + Constant.UTM_SEACHUTM, data, urlParam);
}


}
