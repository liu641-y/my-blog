var blog_detail = new Vue({
    el: "#blog_detail",
    data: {
        blogcontent: [],
    },
    created: function(){
        axios({
            method: "get",
            url: "/queryBlogById?blogId=" + location.search.split("?")[1],
        }).then(function(resp){
            blog_detail.blogcontent = resp.data.data[0];
            blog_detail.blogcontent.utime = formatDate(blog_detail.blogcontent.ctime, 'yyyy-MM-dd hh:mm');
        })
    }
})