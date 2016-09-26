//index.js
var store = require('../../store.js')
//获取应用实例
var app = getApp()
var hnType = ['Top', 'New', 'Show', 'Ask', 'Jobs']
var pageObj = {
  data: {
    header:{
      heardImage: {
        mode: 'scaleToFill',
        src: 'https://news.ycombinator.com/y18.gif'
      }
    },
    actionSheetHidden: true,
    actionSheetItems: hnType,
    listData: [],
    userInfo: {}
  },
  logoTap: function() {
    wx.navigateTo({
      url: '/'
    })
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
}

for (var i = 0; i < hnType.length; ++i) {
  (function(itemName) {
    pageObj['bind' + itemName] = function(e) {
      var params= {
        type: itemName
      }
      store.getList(params, function(data){
        console.log(data)
      })
    }
  })(hnType[i])
}
Page(pageObj);