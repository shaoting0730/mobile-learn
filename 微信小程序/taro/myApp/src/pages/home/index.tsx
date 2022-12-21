import {Component, PropsWithChildren} from 'react'
import {View, Swiper, Image, SwiperItem, Input, Button, Text} from '@tarojs/components'
import {observer, inject} from 'mobx-react'
import Taro from "@tarojs/taro";
import ServiceProvider from '../../service/service_provider'
import './index.less';

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {

  state = {
    covid19Address: '', // 疫情要查询的地点
    COVID19Info:{}, // 疫情信息

    weatherAddress: '', // 天气要查询的地点
    weatherInfo: [], // 天气信息
  }

  componentDidMount(): void {

  }

  /// swiper切换输入
  swiperChange(e) {
   // console.log(e);
  }

  // 查询疫情
  searchCOVID19() {
    let address = this.state.covid19Address;
    console.log(address);
    if (address.length == 0) {
      Taro.showToast({
        title: '请输入合法地名',
        icon: 'error'
      })
      return;
    }

    ServiceProvider.COVID19Info(address).then((e)=>{
      console.log(e);
      this.setState({
        COVID19Info:e,
      })
    });

  }

  /// 查询天气
  searchWeather(){
    let address = this.state.weatherAddress;
    console.log(address);
    if (address.length == 0) {
      Taro.showToast({
        title: '请输入合法地名',
        icon: 'error'
      })
      return;
    }
    ServiceProvider.weatherInfo(address).then((e)=>{
      console.log(e);
      this.setState({
        weatherInfo:e.data,
      })
    });

  }

/// 地址输入改变 疫情
  covid19AddressInput(e) {
    this.setState({
      covid19Address: e
    })
  }

/// 地址输入改变 天气
  weatherAddressInput(e){
    this.setState({
      weatherAddress:e
    })
  }

render() {
  const  {COVID19Info,weatherInfo} = this.state;
  return (
      <View>
        {/*轮播*/}
        <Swiper indicatorColor='gray' indicatorActiveColor='red' indicatorDots previousMargin='25px' nextMargin='25px' onChange={(e) => this.swiperChange(e)} className='swiper-style' autoplay>
          <SwiperItem>
            <Image mode='aspectFit' src={require('../../assets/swiper1.jpeg')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image mode='aspectFit' src={require('../../assets/swiper2.jpeg')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image mode='aspectFit' src={require('../../assets/swiper3.jpeg')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image mode='aspectFit' src={require('../../assets/swiper4.jpeg')}></Image>
          </SwiperItem>
        </Swiper>
        {/* 疫情 */}
        <View className='COVID19'>
          <View className='COVID19_input'>
            <Input className='input' onInput={(e) => this.covid19AddressInput(e.detail.value)} placeholder='请输入要查询疫情的地方'></Input>
            <Button className='search-btn' onClick={() => this.searchCOVID19()}>查询</Button>
          </View>
          <View>
            <Text style={{marginLeft:'10PX'}}>疫情结果:</Text>
            {
               COVID19Info['diagnosis'] > 0 ?
                 <View className='COVID19_info'>
                   <Text style={{display:"block"}}>地点：{COVID19Info['region']}</Text>
                   <Text style={{display:"block"}}>痊愈：{COVID19Info['cure']}</Text>
                   <Text style={{display:"block"}}>死亡：{COVID19Info['death']}</Text>
                   <Text style={{display:"block"}}>确诊：{COVID19Info['diagnosis']}</Text>
                   <Text style={{display:"block"}}>时间：{COVID19Info['time']}</Text>
                   <Text style={{display:"block"}}>来源：{COVID19Info['cj']}</Text>
                 </View> :
                 <Text style={{fontSize:'14PX',color:"red"}}>没有查到疫情信息</Text>
            }
          </View>
        </View>
        {/* 天气 */}
        <View className='weather'>
          <View className='weather_input'>
            <Input className='input' onInput={(e) => this.weatherAddressInput(e.detail.value)} placeholder='请输入要查询天气的地方'></Input>
            <Button className='search-btn' onClick={() => this.searchWeather()}>查询</Button>
          </View>
          <View>
            <Text style={{marginLeft:'10PX'}}>天气结果:</Text>
            {
              weatherInfo.length  > 0 ?
                <View className='weather_info'>
                  {
                    weatherInfo.map((e,i) =>{
                       return <View key={i}>
                         <View><Text>{e['riqi']}</Text> <Text style={{color:'red'}}>{e['tianqi']}</Text>
                         </View>
                         <View>
                           <Text>温度：{e['wendu']}  </Text>
                           <Text style={{color:'red'}}>风度：{e['fengdu']}  </Text>
                           <Text>空气质量：{e['pm']}</Text>
                         </View>
                       </View>
                  })
                  }
                </View> :
                <Text style={{fontSize:'14PX',color:"red"}}>没有查到天气信息</Text>
            }
          </View>
        </View>
        {/* 星座 */}
        {/* 历史上的今天 */}
      </View>
    )
  }
}

export default Index
