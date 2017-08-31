import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class TimingTask extends ApiService {


//TYPE null
//URL /mc/timingTask/cacheData
cacheDataFromDB(){
return this.post(Config.API_URL + Constant.TIMINGTASK_CACHEDATAFROMDB);
}


//TYPE null
//URL /mc/timingTask/mcTimingUpatePublishStatus
mcTimingUpatePublishStatus(){
return this.post(Config.API_URL + Constant.TIMINGTASK_MCTIMINGUPATEPUBLISHSTATUS);
}


//TYPE null
//URL /mc/timingTask/refferalSettlement
refferalSettlement(data){
return this.post(Config.API_URL + Constant.TIMINGTASK_REFFERALSETTLEMENT, data);
}


//TYPE null
//URL /mc/timingTask/getOneDayPvUvDataFromCms
getOneDayPvUvDataFromCms(data){
return this.post(Config.API_URL + Constant.TIMINGTASK_GETONEDAYPVUVDATAFROMCMS, data);
}


//TYPE null
//URL /mc/timingTask/getAppointDaysPvUvDataFromCms
getAppointDaysPvUvDataFromCms(){
return this.post(Config.API_URL + Constant.TIMINGTASK_GETAPPOINTDAYSPVUVDATAFROMCMS);
}


//TYPE null
//URL /mc/timingTask/updateRegisterPublishIds
updateRegisterPublishIds(){
return this.post(Config.API_URL + Constant.TIMINGTASK_UPDATEREGISTERPUBLISHIDS);
}


}
