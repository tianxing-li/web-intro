// pages/list/list.js
const dayMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

Page({
  data: {
    weekWeather: [1, 2, 3, 4, 5, 6, 7],
    city: '北京市'
  },
  onLoad(options) {
    console.log('onLoad')
    //console.log(options.city)
    this.setData({
      city: options.city
    })
    this.getWeekWeather(()=>{
      wx.stopPullDownRefresh()
    })
  },
  onPullDownRefresh() {
    this.getWeekWeather()
  },
  getWeekWeather(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/future',
      data: {
        time: new Date().getTime(),
        city: this.data.city
      },
      success : res => {
        let result = res.data.result
        //console.log(result)
        this.setWeekWeather(result)
      },
      complete: ()=>{
        callback && callback()
      }
    })
  },
  setWeekWeather(result) {
    let weekWeather = []
    for (let i = 0; i < 7; i++) {
      let date = new Date()
      date.setDate(date.getDate() + i)
      weekWeather.push({
        day: dayMap[date.getDay()],
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        temp: `${result[i].minTemp}° - ${result[i].maxTemp}°`,
        iconPath: '/img/' + result[i].weather + '-icon.png'
      })
    }
    weekWeather[0].day = 'Today'
    this.setData({
      weekWeather: weekWeather
    })
  }
})