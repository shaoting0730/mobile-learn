import {Component, PropsWithChildren} from 'react'
import {View, Swiper,Image, SwiperItem,Input,Button,Text} from '@tarojs/components'
import {observer, inject} from 'mobx-react'
import './index.less';
@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount(): void {

  }

  swiperChange(e){
    console.log(e);
  }

  // 查询天气
  searchWeather(){

  }

  render() {
    return (
      <View>
        {/*轮播*/}
        <Swiper  indicatorColor='gray' indicatorActiveColor='red' indicatorDots previousMargin='25px' nextMargin='25px' onChange={(e)=>this.swiperChange(e)} className='swiper-style' autoplay >
          <SwiperItem >
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
            <Input placeholder={'请输入要查询天气的地方'}></Input>
            <Button onClick={()=>this.searchWeather()}>查询</Button>
          </View>
          <View>
            <Text>天气结果</Text>
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
