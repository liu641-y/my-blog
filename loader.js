//加载web层文件的
var fs = require("fs");
var globalConfig = require("./config");

var controllerSet = [];
var pathMap =new Map();  //键值对形式的数据集合
var files = fs.readdirSync(globalConfig["web_path"]);  //获取文件中的目录和子目录

for (let i = 0; i < files.length; i++) { //挨个读取web文件夹中的文件名和目录
   var temp = require("./" + globalConfig["web_path"]+ "/" + files[i]);
   if(temp.path) {
       for(var [key, value] of temp.path) {
           if(pathMap.get(key) == null) {
               pathMap.set(key, value);
           } else {
               throw new Error("url path异常, url:" + key);
           }
       }
       controllerSet.push(temp);
   }
}

module.exports = pathMap;