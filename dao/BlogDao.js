var dbutil = require("./DBUtil");
function insertBlog(title, content, views, tags, ctime, utime, success) {
    var insertSql = "insert into blag (`title`, `content`, `views`, `tags`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?)";
    var params = [title, content, views, tags, ctime, utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result){
        if(error == null){
            
            success(result); //最后一个参数，对应edit函数中后面的处理函数，将result传递非处理函数的参数
        } else {
            console.log("这里发生错误了");
        }
    })
    connection.end();
}


function queryBlog(offset, limit, success) {
    var querySql = "select * from blag order by id desc limit ?,?;";
    console.log(offset, limit);
    var params = [Number(offset),Number(limit)];
    console.log(params);

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result){
        if(error == null){
            success(result);
        } else {
            console.log("这里错误了queryblog");
        }
    })
    connection.end();
}


function queryBlogCount(success) {
    var querySql = "select count(1) as count from blag;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result){
        if(error == null){
            success(result);
        } else {
            console.log("这里发生错误了queryblog");
        }
    })
    connection.end();
}

function queryBlogById(blogid, success) {
    var querySql = "select * from blag  where id = ?;";
    var params = [blogid];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result){
        if(error == null){
            console.log(result);
            success(result);
        } else {
            console.log("这里错误了queryblog");
        }
    })
    connection.end();
}

module.exports.queryBlogById = queryBlogById;
module.exports.queryBlogCount = queryBlogCount;
module.exports.insertBlog = insertBlog;
module.exports.queryBlog = queryBlog;