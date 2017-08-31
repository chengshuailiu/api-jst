import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Report extends ApiService {


//TYPE POST
//URL /report/export/roi/detail
exportRoiDetail(data){
return this.post(Config.API_URL + Constant.REPORT_EXPORTROIDETAIL, data);
}


}
