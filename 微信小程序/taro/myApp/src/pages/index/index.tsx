import { Component, PropsWithChildren } from 'react'
import {View, Button, Text, Input} from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.less'
import Taro from "@tarojs/taro";
@inject('store')
@observer
class Index extends Component<PropsWithChildren> {


  state = {
    show:false,
  }

  clickAction(){
    this.setState({
      show:true,
    })
  }

  componentDidMount(): void {
    // request('https://api.artic.edu/api/v1/artworks','GET',{}).then((e) => {
    //   print(e);
    // });
    Taro.request({
      url:'https://api.artic.edu/api/v1/artworks',
    }).then((e) =>{
      console.log(e);
    });
  }



  render () {
    return (
      <View className='login_bg'>
        {/* 登录 注册 按钮 */}
        <View className='login_register_btn'>
          <View className='selected'>
            <Text>登录</Text>
          </View>
          <View className='no_selected'>
            <Text>注册</Text>
          </View>
        </View>
        {this.state.show == true ?'22':'33'}
        {/* 输入框 */}
        <view className='login_input_view'>
          <View>
            <Input placeholder='请输入用户名'></Input>
          </View>
          <View>
            <Input placeholder='请输入密码'></Input>
          </View>
        </view>
        {/* 底部按钮 */}
        <view className='login_bottom'>
          <Button onClick={this.clickAction.bind(this)}>登录</Button>
        </view>

      </View>
    )
  }
}

export default Index
