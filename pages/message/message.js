var app = getApp()
var getData = require('../../utils/util.js')
Page({
  data:{
    text:"这是消息页面，研发中。。。",
    title:"标题",
    userInfo: {},
    message:[],
    animation:{},
    animation_2:{},
    tap:"tapOff"
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
    this.animation = wx.createAnimation();
    this.animation_2 = wx.createAnimation()
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  elseBtn:function(){
    // console.log(e);
    var _self = this;
    if(_self.data.tap=="tapOff"){
      _self.animation_2.height("55%").step();
      _self.setData({ animation_2: _self.animation_2.export() })
      _self.setData({
           tap:"tapOn"
      })
    }else{
      _self.animation_2.height("90%").step();
      _self.setData({ animation_2: _self.animation_2.export() })
      _self.setData({
           tap:"tapOff"
      })
    }
  },
  chooseImg:function(){
    var _self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        var t = _self.data.message;
        console.log(t)
        t.push({
          img:_self.data.userInfo.avatarUrl,
          imgList:tempFilePaths,
          me:true
        })
        _self.setData({
          message:t
        })
      }
    })
  }
})