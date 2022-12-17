import { Component, PropsWithChildren } from 'react'
import { View, Button, Text,Input } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less'
import ServiceProvider from "../../service/service_provider";

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {


  state = {
     loginTag: 0, // 0登录  1注册
  }

  clickAction(){
  }

  componentDidMount(): void {
    ServiceProvider.login().then((e) =>{
      console.log(e);
    });
  }

  changeUIMode(index){
    this.setState({
      loginTag:index,
    })
  }



  render () {
    const  {loginTag} = this.state;
    return (
      <View className='login_bg'>
        {/* 登录 注册 按钮 */}
        <View className='login_register_btn'>
             <View onClick={()=>this.changeUIMode(0)} className={loginTag == 0 ? 'btn_left_select' :'btn_left_unSelect'}>
                 <Text>登录</Text>
             </View>
             <View onClick={()=>this.changeUIMode(1)} className={loginTag == 1 ? 'btn_right_select' :'btn_right_unSelect'}>
                 <Text>注册</Text>
             </View>
        </View>
        {/* 输入框 */}
        {
          loginTag == 0 ?
            <View className='login_input_view'>
            <View>
              <Input placeholder='请输入用户名'></Input>
            </View>
            <View>
              <Input placeholder='请输入密码'></Input>
            </View>
          </View>
            :
            <View className='login_input_view'>
              <View>
                <Input placeholder='请输入手机号'></Input>
              </View>
              <View>
                <Input placeholder='发送验证码'></Input>
              </View>
            </View>
        }
        {/* 底部按钮 */}
        <View className='login_bottom'>
             <Button onClick={this.clickAction.bind(this)}>登录</Button>
        </View>

      </View>
    )
  }
}

export default Index
