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
    address: '', // 要查询的地点
  }

  componentDidMount(): void {

  }

  /// swiper切换输入
  swiperChange(e) {
   console.log(e);
  }

  // 查询天气
  searchWeather() {
    let address = this.state.address;
    console.log(address);
    if (address.length == 0) {
      Taro.showToast({
        title: '请输入值',
        icon: 'error'
      })
      return;
    }

    ServiceProvider.newsList().then((e)=>{
      console.log(e);
    });

  }

/// 地址输入改变
  addressInput(e) {
    this.setState({
      address: e
    })
  }

  render() {
    return (
      <View>
        {/*轮播*/}
        <Swiper indicatorColor='gray' indicatorActiveColor='red' indicatorDots previousMargin='25px' nextMargin='25px'
                onChange={(e) => this.swiperChange(e)} className='swiper-style' autoplay>
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
        {/* 天气 */}
        <View className='weather'>
          <View className='weather_input'>
            <Input className='input' onInput={(e) => this.addressInput(e.detail.value)}
                   placeholder='请输入要查询天气的地方'></Input>
            <Button className='search-btn' onClick={() => this.searchWeather()}>查询</Button>
          </View>
          <View>
            <Text>天气结果:</Text>
          </View>
        </View>
        {/* 星座信息*/}
        {/* 历史上的今天 */}
        {/* 电影信息 */}
      </View>
    )
  }
}

export default Index
