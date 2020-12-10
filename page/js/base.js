
var tags = new Vue({
    el: "#tags",
    data: {
        tagList: ["日居月诸", "照临下土", "乃如之人兮", "逝不古处", "胡能有定", "宁不我顾", "日居月诸", "下土是冒", "乃如之人兮", "逝不相好", "胡能有定", "宁不我报", "日居月诸", "出自东方", "乃如之人兮", "德音无良", "胡能有定", "俾也可忘", "日居月诸", "东方自出", "父兮母兮", "畜我不卒", "胡能有定", "报我不述"]
    }
})

var hot = new Vue({
    el: "#hot_recent",
    data: {
        hotList: [
            "1华为55岁外籍副总裁在深圳去世",
            "2美国大选选举日投票正式开始471万",
            "3央视呼吁双11促销少一些套路454万",
            "4玛莎拉蒂案死者女儿抑郁休学438万",
            "5王岳伦退出李湘关联公司423万",
            "6马云被四部门联合约谈408万",
            "7万豪因泄露3亿客人信息被罚1",
            "8女子刺死14岁第三者逃亡25年380万",
        ]
    }
})

var right_comment = new Vue({
    el: "#new_comment",
    data: {
        commentList: [
            {name:"这里是用户名", date:"2020年11月11日",comment:"这里是一大串评论，balabalabalabalabalabalabalbalabalbabalbablabablab" },
            {name:"这里是用户名", date:"2020年11月11日",comment:"这里是一大串评论，balabalabalabalabalabalabalbalabalbabalbablabablab" },
            {name:"这里是用户名", date:"2020年11月11日",comment:"这里是一大串评论，balabalabalabalabalabalabalbalabalbabalbablabablab" },
            {name:"这里是用户名", date:"2020年11月11日",comment:"这里是一大串评论，balabalabalabalabalabalabalbalabalbabalbablabablab" },
        ]
    }
})