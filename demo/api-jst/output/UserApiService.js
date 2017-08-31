import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class User extends ApiService {


//TYPE POST
//URL /user/batchPermission
batchPermission(data){
return this.post(Config.API_URL + Constant.USER_BATCHPERMISSION, data);
}


//TYPE GET
//URL /user/getUserByEmail
getUserByEmail(data){
return this.get(Config.API_URL + Constant.USER_GETUSERBYEMAIL, data);
}


//TYPE POST
//URL /user/getUserList
getUserList(data){
return this.post(Config.API_URL + Constant.USER_GETUSERLIST, data);
}


}
