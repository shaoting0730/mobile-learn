import {Component, PropsWithChildren} from 'react'
import {View, Button, Text, Input} from '@tarojs/components'
import {observer, inject} from 'mobx-react'
import './index.less'
import ServiceProvider from "../../service/service_provider";

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {


  state = {
    loginTag:0, // 0登录  1注册
    loginMode:0, // 0验证码  1密码
    loginCodeNum: 60,
    registerCodeNum: 60,
  }

  componentDidMount(): void {

  }

  /// 发送登录验证码
  sendLoginCodeAction() {
    if (this.state.loginCodeNum == 60) {
      const timerId = setInterval(() => {
        if (this.state.loginCodeNum == 0) {
          this.setState({
            loginCodeNum: 60,
          })
          clearInterval(timerId);
        } else {
          this.setState({
            loginCodeNum: this.state.loginCodeNum - 1
          })
        }

      }, 1000);
    }
  }

  /// 发送注册验证码
  sendRegisterAction() {
    if (this.state.registerCodeNum == 60) {
      const timerId = setInterval(() => {
        if (this.state.registerCodeNum == 0) {
          this.setState({
            registerCodeNum: 60,
          })
          clearInterval(timerId);
        } else {
          this.setState({
            registerCodeNum: this.state.registerCodeNum - 1
          })
        }

      }, 1000);
    }
  }

  /// 切换登录模式
  changeLoginMode(index){
    this.setState({
      loginMode:index
    })
  }


  // 切换登录/注册
  changeUIMode(index) {
    this.setState({
      loginTag: index,
    })
  }

  // 登录按钮点击
  loginAction() {
    ServiceProvider.login().then((e) => {
      console.log(e);
    });
  }

  // 注册按钮点击
  registerAction() {

  }


  render() {
    const {loginTag, loginCodeNum,loginMode, registerCodeNum} = this.state;
    return (
      <View className='login_bg'>
        {/* 登录 注册 按钮 */}
        <View className='login_register_btn'>
          <View onClick={() => this.changeUIMode(0)} className={loginTag == 0 ? 'btn_left_select' : 'btn_left_unSelect'}>
            <Text>登录</Text>
          </View>
          <View onClick={() => this.changeUIMode(1)} className={loginTag == 1 ? 'btn_right_select' : 'btn_right_unSelect'}>
            <Text>注册</Text>
          </View>
        </View>
        {/* 输入框 */}
        {
          loginTag == 0 ?
            <View className='login_input_view'>
              <View className='input_name'>
                <Input placeholder='请输入手机号'></Input>
              </View>
              {
                loginMode == 0 ?
                  <View className='input_code'>
                    <Input placeholder='请输入验证码'></Input>
                    <Text onClick={this.sendLoginCodeAction.bind(this)} className='send_code_txt'>{loginCodeNum == 60 ? "发送验证码" : loginCodeNum}</Text>
                  </View>
                  :
                  <View className='input_psw'>
                    <Input placeholder='输入密码'></Input>
                  </View>
              }

              {
                loginMode == 0 ? <View className='login_mode'>
                  <Text onClick={()=> this.changeLoginMode(1)}>
                    验证码登录
                  </Text>
                </View> : <View className='login_mode'>
                  <Text onClick={()=> this.changeLoginMode(0)}>
                    密码登录
                  </Text>
                </View>
              }


            </View>
            :
            <View className='login_input_view'>
              <View className='input_name'>
                <Input placeholder='请输入手机号'></Input>
              </View>
              <View className='input_code'>
                <Input placeholder='请输入验证码'></Input>
                <Text onClick={this.sendRegisterAction.bind(this)} className='send_code_txt'>
                  {registerCodeNum == 60 ? "发送验证码" : registerCodeNum}
                </Text>
              </View>
              <View className='input_psw'>
                <Input placeholder='输入密码'></Input>
              </View>
              <View className='input_psw'>
                <Input placeholder='再次输入密码'></Input>
              </View>
            </View>
        }
        {/* 底部按钮 */}
        <View className='login_bottom_view'>
          {
            loginTag == 0 ?
              <View className='login_bottom_btn'>
                <Button onClick={() => this.loginAction()}>登录</Button>
              </View>
              :
              <View className='login_bottom_btn'>
                <Button onClick={() => this.registerAction()}>注册</Button>
              </View>
          }

        </View>
      </View>
    )
  }
}

export default Index
