import ApiService from '../utilities/ApiService';
import Constant from './urlConstant';
import Config from 'react-native-config'

export default class Banner extends ApiService {


//TYPE null
//URL /banner/getList/{refferalId}
all(data, urlParam){
return this.post(Config.API_URL + Constant.BANNER_ALL, data, urlParam);
}


//TYPE POST
//URL /banner/save
save(data){
return this.post(Config.API_URL + Constant.BANNER_SAVE, data);
}


//TYPE null
//URL /banner/view/{id}
view(data, urlParam){
return this.post(Config.API_URL + Constant.BANNER_VIEW, data, urlParam);
}


//TYPE POST
//URL /banner/getBannersByRefferalIdAndPublishId
getBannersByRefferalIdAndPublishId(data){
return this.post(Config.API_URL + Constant.BANNER_GETBANNERSBYREFFERALIDANDPUBLISHID, data);
}


//TYPE POST
//URL /banner/excelImport
excelImport(data){
return this.post(Config.API_URL + Constant.BANNER_EXCELIMPORT, data);
}


//TYPE POST
//URL /banner/getBannersByRefferalId
getBannersByRefferalId(data){
return this.post(Config.API_URL + Constant.BANNER_GETBANNERSBYREFFERALID, data);
}


//TYPE GET
//URL /banner/getBannersByPublishId/{publishId}
getBannersByPublishId(data, urlParam){
return this.get(Config.API_URL + Constant.BANNER_GETBANNERSBYPUBLISHID, data, urlParam);
}


//TYPE GET
//URL /banner/template
bannerTemplateDownload(){
return this.get(Config.API_URL + Constant.BANNER_BANNERTEMPLATEDOWNLOAD);
}


//TYPE POST
//URL /banner/template/upload
bannerTemplateUpload(data){
return this.post(Config.API_URL + Constant.BANNER_BANNERTEMPLATEUPLOAD, data);
}


}
