var prompt = require('prompt');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');

// chalk.red(
//     'You are currently running Node %s but React Native requires %s. ' +
//     'Please use a supported version of Node.\n' +
//     'See https://facebook.github.io/react-native/docs/getting-started.html'
// )

function copyTemplate(from, to) {
    from = path.join(__dirname, '/../template', from);
    write(to, fs.readFileSync(from, 'utf-8'))
}
function write(path, str, mode) {
    fs.writeFileSync(path, str)
}
function mkdir(path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn()
    })
}

var PATH = ".";
module.exports = function () {
    console.log(chalk.blue('start api-jst init'));

    var makeDir = function () {
        //创建模板
        mkdir(PATH + "/api-jst", function () {
            copyTemplate("config.js", PATH + "/api-jst/config.js");
            mkdir(PATH + "/api-jst/temp", function () {
                copyTemplate('/template/constant.ejs', PATH + "/api-jst/temp/constant.ejs");
                copyTemplate('/template/service.ejs', PATH + "/api-jst/temp/service.ejs");
                console.log(chalk.green('success'));
            });
        });
    };

    if (fs.existsSync(PATH + "/api-jst")) {
        prompt.start();
        var property = {
            name: 'yesno',
            message: 'Directory already exists. Continue?',
            validator: /y[es]*|n[o]?/,
            warning: 'Must respond yes or no',
            default: 'no'
        };
        prompt.get(property, function (error, result) {
            if (result && result.yesno[0] === 'y') {
                makeDir();
            }
            else {
                console.log(chalk.red('cancelled by the user'));
            }
        });
    }
    else {
        makeDir();
    }

};


