import {Component, PropsWithChildren} from 'react'
import {View, Swiper,Image, SwiperItem} from '@tarojs/components'
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

  render() {
    return (
      <View>
        <Swiper  indicatorColor='gray' indicatorActiveColor='red' indicatorDots previousMargin='25px' nextMargin='25px' onChange={(e)=>this.swiperChange(e)} className='swiper-style' autoplay >
          <SwiperItem >
            <Image src={require('../../assets/swiper1.jpeg')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src={require('../../assets/swiper2.jpeg')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src={require('../../assets/swiper3.jpeg')}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src={require('../../assets/swiper4.jpeg')}></Image>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Index
