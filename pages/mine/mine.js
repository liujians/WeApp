var app = getApp()
Page({
    data: {
        userInfo: {},
        list:[
            {
                list_tool:[
                    {
                        img:"../../image/photo.png",
                        name:"相册"
                    },
                    {
                        img:"../../image/sc_2.png",
                        name:"收藏"
                    }
                ]
            },
            {
                list_tool:[
                    {
                        img:"../../image/money.png",
                        name:"钱包(现在是播放器)",
                        url:"../audio/audio"
                    },
                    {
                        img:"../../image/card.png",
                        name:"卡包"
                    }
                ]
            },
            {
                list_tool:[
                    {
                        img:"../../image/bq_2.png",
                        name:"表情"
                    },
                    {
                        img:"../../image/setting.png",
                        name:"设置",
                        url:"../info/info"
                    }
                ]
            },
        ]
    },
    goPage:function(event){
        console.log(event.currentTarget.dataset.log);
        wx.navigateTo({
            url: event.currentTarget.dataset.url
        })
    },
    onLoad: function () {
        // wx.showNavigationBarLoading();
        var that = this
        //调用应用实例的方法获取全局数据
        that.setData({
            userInfo:app.globalData.userInfo
        })
    }
})
