const weatherMap = {
  'sunny': '晴天',
  'cloudy': '多云',
  'overcast': '阴',
  'lightrain': '小雨',
  'heavyrain': '大雨',
  'snow': '雪'
}
const weatherColorMap = {
  'sunny': '#cbeefd',
  'cloudy': '#deeef6',
  'overcast': '#c6ced2',
  'lightrain': '#bdd5e1',
  'heavyrain': '#c5ccd0',
  'snow': '#aae1fc'
}
Page({
  data: {
    nowTemp: '',
    nowWeather: '',
    nowWeatherBg: '',
    hourlyWeather: []
  },
  onPullDownRefresh(){
    this.getNow(()=>{
      wx.stopPullDownRefresh()//传入参数执行结束下拉刷新
    })
  },
  onLoad(){
    this.getNow()    
  },
  getNow(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '上海市'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        //console.log(res)
        let result = res.data.result
        this.setNow(result)
        this.setHourlyWeather(result)
      },
      complete: ()=>{
        callback && callback() //前面那个参数判断是否执行，后面是执行语句
      }
    })
  },
  setNow(result){
    let temp = result.now.temp
    let weather = result.now.weather
    this.setData({
      nowTemp: temp + '°',
      nowWeather: weatherMap[weather],
      nowWeatherBg: '/img/' + weather + '-bg.png'
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: weatherColorMap[weather],
    })
    //console.log(temp, weather)

  },
  setHourlyWeather(result){
    //set forecast
    console.log(result)
    let forecast = result.forecast
    let hourlyWeather = []
    let nowHour = new Date().getHours()
    for (let i = 0; i < 8; i += 1) {
      hourlyWeather.push({
        time: (i * 3 + nowHour) % 24 + '时',
        iconPath: '/img/' + forecast[i].weather + '-icon.png',
        temp: forecast[i].temp + '°'
      })
    }
    hourlyWeather[0].time = '现在'
    this.setData({
      hourlyWeather: hourlyWeather
    })
  }
})