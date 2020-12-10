var dbutil = require("./DBUtil");

function insertTags(tags, ctime, utime, success) {
    var insertSql = "insert into tags (`tag`, `ctime`, `utime`) values (?, ?, ?)";
    var params = [tags, ctime, utime];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            console.log("添加标签也成功了");
            success(result);
        } else {
            console.log("这里发生错误了inserttags");
        }
    })
    connection.end();
}

function queryTags(atag, success) {
    var querySql = "select * from tags where tag ='" + atag + "';";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, function (error, result) {
        if (error == null) {
              success(result, atag);
        } else {
            console.log("这里发生错误了querytags");
        }
    })
    connection.end();
}

module.exports.queryTags = queryTags;
module.exports.insertTags = insertTags;