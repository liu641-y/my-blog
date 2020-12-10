var express = require("express");
var globalConfig = require("./config");
var loader = require("./loader");

var app = new express();

app.use(express.static("./page/"));   //建立静态资源服务器
app.post("/editEveryDay", loader.get("/editEveryDay")); //当是/ediEveryDay这个路径的时候，给他读取这个文件
app.get("/queryEveryDay", loader.get("/queryEveryDay")); 
                                    
app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlog", loader.get("/queryBlog")); 
app.get("/queryBlogCount", loader.get("/queryBlogCount"));
app.get("/queryBlogById", loader.get("/queryBlogById"));

app.listen(globalConfig.port, function() {
    console.log("服务器已启动");
})