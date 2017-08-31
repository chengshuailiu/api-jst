import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Roi extends ApiService {


//TYPE POST
//URL /roi/roiList
roiList(data){
return this.post(Config.API_URL + Constant.ROI_ROILIST, data);
}


}
