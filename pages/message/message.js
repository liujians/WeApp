var app = getApp()
var getData = require('../../utils/util.js')
Page({
  data:{
    text:"这是消息页面，研发中。。。",
    title:"标题",
    userInfo: {},
    message:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _self = this
    getData.getMessage(options.id,_self)
    _self.setData({
      title:options.name
    })
    
    app.getUserInfo(function(userInfo){
    //更新数据
        _self.setData({
           userInfo:userInfo
        })
    })
  },
  onReady:function(){
    // 页面渲染完成
    var _self = this
    wx.setNavigationBarTitle({
      title: _self.data.title
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})