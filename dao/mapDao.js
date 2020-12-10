var dbutil = require("./DBUtil");
function insertMap(tagid, blogid, ctime, utime) {
    var insertSql = "insert into tag_blog_mapping (`tag_id`, `blog_id`, `ctime`, `utime`) values (?, ?, ?, ?)";
    var params = [tagid, blogid, ctime, utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result){
        if(error == null){
           console.log("这里添加对应关系成功了");
        } else {
            console.log("这里发生错误了insertMap");
        }
    })
    connection.end();
}

module.exports.insertMap = insertMap;
