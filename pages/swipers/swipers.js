// pages/swipers/swipers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../../images/1.png',
      '../../images/2.png',
      '../../images/3.png',
      '../../images/4.png',
      '../../images/5.png',
      '../../images/6.png',
      '../../images/7.png',
    ],
    indicatorDots:true,  //是否显示导航小圆圈       
    autoplay:true,       //是否自动播放 
    interval:2000,       //切换时间
    togethernum:1        //同时显示多少张图片

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})