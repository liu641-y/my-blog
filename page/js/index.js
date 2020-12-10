
var everyday = new Vue({
    el: "#everyday",
    data: {
        todaydata: "2020.11.02",
        todayspeak: "成功的反面不是失败 而是什么都不做。",
        todayauthor: " ---松浦弥太郎 ",
    },
    created: function() {
        axios({
            method: "get",
            url: "/queryEveryDay"
        }).then(function(resp){
            everyday.todayspeak = resp.data.data[0].content;

        }).catch(function(resp) {
            console.log("请求每日一句失败");
        })
    }
})

var blog = new Vue({
    el: "#blog",
    data: {
        blogList: [],
        page: 1,
        pageSize: 7,
        count: 100,
        pageList: [],
    },
    computed: {
        getPage: function(){
           return function(page, pageSize){
            axios({
                method: "get",
                url: "/queryBlog?page=" + (page - 1) + "&pageSize=" + pageSize
            }).then(function(resp){
                // everyday.todayspeak = resp.data.data[0].content;
                console.log("这里是说请求成功了", resp);
                var blogdata = resp.data.data
                for(var i = 0; i < blogdata.length; i++){
                    var nowdata = blogdata[i];
                    nowdata.utime = formatDate(nowdata.ctime, 'yyyy-MM-dd hh:mm');
                }
                blog.blogList = blogdata;
            }).catch(function(resp) {
                console.log("请求博客失败");
            })
           }
        },
        getPageCount: function(){
            axios({
                method: "get",
                url: "/queryBlogCount"
            }).then(function(resp){
                console.log("查询数量成功了");
                blog.count = resp.data.data[0].count;
                blog.setPage;
            }).catch(function(resp) {
                console.log("请求博客数量失败");
            });
        },
        setPage: function(){

            var nowPage = this.page;
            var pageSize = this.pageSize;
            var totalPage = Math.ceil(this.count / pageSize);
            var pageList = this.pageList;
            pageList.push({text: '<<', page: 1});
            if(nowPage > 2){
                pageList.push({text: nowPage - 2 + '', page: nowPage - 2});
            }
            if(nowPage > 1){
                pageList.push({text: nowPage - 1 + '', page: nowPage - 1});
            }
            if(nowPage < totalPage){
                pageList.push({text: nowPage + 1 + '', page: nowPage + 1 });
            }
            if(nowPage < totalPage -1){
                pageList.push({text: nowPage + 2 + '', page: nowPage + 2});
            }
            pageList.push({text: '>>', page: totalPage})
            console.log(pageList);
        }
    },
    created: function(){
        console.log(this.page, this.pageSize);
        this.getPage(this.page, this.pageSize);
        this.getPageCount;
    }
})
