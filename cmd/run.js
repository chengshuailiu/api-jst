var http = require('http');
var path = require("path");
var config = require(path.join(process.cwd(), "api-jst", "config.js"));
var fs = require("fs");
var ejs = require("ejs");
var request = require('request');
var chalk = require('chalk');

var template = fs.readFileSync(path.join(process.cwd(), config.template), 'utf8');
var urlTemplate = fs.readFileSync(path.join(process.cwd(), config.urlTemplate), 'utf8');


Array.prototype.groupBy = function (name) {
    var result = {};

    this.map(function (item, index) {

        var check = result[item[name]];
        if (check == undefined) {
            result[item[name]] = [];
        }
        result[item[name]].push(item);
    });
    return result;
};


var getServiceName = function (name) {
    return name.split('.').reverse()[0].replace('Controller', '');
};

var urlConstant = [];

var prettyData = function (arr) {
    var formatRequestType = function (type) {
        var result = 'post'
        switch (type) {
            case 'POST':
                result = 'post';
                break;
            case 'GET':
                result = 'get';
                break;
                // case 'DELETE':
                //     result = 'delete';
                break;
            default:
                result = "post";

        }
        return result;
    };
    var formatRequestTypeUrl = function (url) {
        return url.split('{')[0];
    };
    var formatParam = function (item) {

        if (item.methodParmaTypes.length > 0) {
            item.methodParma1 = ", data";
            item.methodParma2 = "data";
        }
        if (item.requestUrl.indexOf('{') != -1) {
            item.methodParma1 += ", urlParam";
            item.methodParma2 += ", urlParam";
        }
    }

    for (var i = 0; i < arr.length; i++) {
        //格式化方法
        arr[i].type = formatRequestType(arr[i].requestType);
        //var constKey =  arr[i].requestUrl.replace(/\//g, "_").toUpperCase();
        var constKey = getServiceName(arr[i].controllerName).toUpperCase() + "_" + (arr[i].methodName).toUpperCase();
        arr[i].url = constKey;
        urlConstant.push({key: constKey, value: arr[i].requestUrl});
        formatParam(arr[i]);
    }
    return arr;
}

var createTemplate = function (data) {
    // if (data.responseCode == '10000') {
    var mydata = prettyData(data.result);
    var d = mydata.groupBy('controllerName');
    var fileNames = Object.getOwnPropertyNames(d);
    fileNames.map(function (item) {
        var fileName = getServiceName(item);
        var ret = ejs.render(template, {data: d[item], name: fileName});
        var output = process.cwd() + config.output.replace("${name}", fileName);
        fs.writeFile(output, ret, function (err) {
            if (err) throw err;
        });
        console.log(chalk.blue('file has been output: ' + output));
    });

    var constantOut = ejs.render(urlTemplate, {data: urlConstant});

    fs.writeFile(process.cwd() + config.urlConstantOutput, constantOut, function (err) {
        if (err) throw err;
    });
    console.log(chalk.blue('constant has been output: ' + process.cwd() + config.urlConstantOutput));

    console.log(chalk.green("SUCCESS!"));
    // }
};


//获取后端请求参数
module.exports = function () {
    request(config.api, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body)
                createTemplate(result);
            }
        }
    );
}



