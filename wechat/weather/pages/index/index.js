Page({
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '北京市'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res)
      }
    })
  }
})