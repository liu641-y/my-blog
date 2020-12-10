const {
    request
} = require("express");
var BlogDao = require("../dao/BlogDao");
var respUtil = require("../util/RespUtil");
var path = new Map();
var controltags = require("../web/TagsController");
var controlMap = require("../web/MapController");
var timeUtil = require("../util/TimeUtil");
var url = require("url");

function editBlog(request, response) {
    var params = url.parse(request.url, true).query;
    var tags = params.tags.replace(/ /g, "").replace(/，/g, ",");
    request.on("data", function (data) {
        BlogDao.insertBlog(params.title, data.toString().trim(), 0, tags, timeUtil.getNow(), timeUtil.getNow(), function (blogresult) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            tags = tags.split(",");
            for (var atag of tags) {
                controltags.getTags(atag, function (tagresult, tag) {
                    if (!tagresult.length) {
                        controltags.sendTags(tag,function(newresult){
                            controlMap.setMap(newresult.insertId, blogresult.insertId);
                        });
                    } else {
                        controlMap.setMap(tagresult[0].id, blogresult.insertId);
                    }
                });

            }
        });
    })
}

path.set("/editBlog", editBlog);


function queryBlog(request, response) {

    var params = url.parse(request.url, true).query;
    var offset = params.page;
    var limit = params.pageSize;
    console.log(offset, limit);
    
    BlogDao.queryBlog(offset, limit, function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "添加成功", result));
        response.end();
    })
}

path.set("/queryBlog", queryBlog);

function queryBlogCount(request, response) {
    BlogDao.queryBlogCount(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    })
}

path.set("/queryBlogCount", queryBlogCount);


function queryBlogById(request, response) {
    console.log("进来这里了吗");
    var params = url.parse(request.url, true).query;
    var blogid = params.blogId;
    console.log(blogid);
    BlogDao.queryBlogById(blogid,function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult("success","查询成功",result));
        response.end();
    })
}

path.set("/queryBlogById", queryBlogById);

module.exports.path = path;