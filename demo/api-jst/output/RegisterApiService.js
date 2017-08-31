import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Register extends ApiService {


//TYPE null
//URL /register/getList
all(){
return this.post(Config.API_URL + Constant.REGISTER_ALL);
}


}
