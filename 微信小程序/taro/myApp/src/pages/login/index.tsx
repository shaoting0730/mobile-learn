import { Component, PropsWithChildren } from 'react'
import { View, Button, Text,Input } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { observer, inject } from 'mobx-react'
import './index.less'

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
        {/* 输入框 */}
        <View className='login_input_view'>
          <View>
               <Input placeholder='请输入用户名'></Input>
          </View>
          <View>
               <Input placeholder='请输入密码'></Input>
          </View>
        </View>
        {/* 底部按钮 */}
        <View className='login_bottom'>
             <Button onClick={this.clickAction.bind(this)}>登录</Button>
        </View>

      </View>
    )
  }
}

export default Index
