// pages/qrCode/qrCode.js
var QRCode = require('../../utils/qrcode.js')

var qrCode;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'input somthing',
    image: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qrCode = new QRCode('canvas', {
      text: "input somthing",
      image: '/images/bg.jpg',
      width: 150,
      height: 150,
      colorDark: "#1CA4FC",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },
  /**
   * 生成二维码按钮
   */
  tapHandler: function () {
    qrCode.makeCode(this.data.text);
  },
  inputHandler: function (e) {
    var value = e.detail.value
    this.setData({
      text: value
    })
  },
  confirmHandler: function (e) {
    var value = e.detail.value
    qrCode.makeCode(value)
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