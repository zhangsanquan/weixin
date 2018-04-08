// pages/goto/goto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:''
  },

  openimg: function () {
    var that=this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          var imgurl= res.tempFilePaths[0]   //获取图片路径
          wx.getImageInfo({   //获取图片信息
            src: imgurl,
            success: function (res) {
              console.log(res.width)
              console.log(res.height)
            }
          })
          that.setData({  //这里要用that 
             imgsrc:imgurl
          })
          wx.saveImageToPhotosAlbum({
            filePath:imgurl,   //保存也需要文件路径
            success(res) {
              console.log('保存成功')
            }
          })
       },
    })
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