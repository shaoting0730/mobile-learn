import {Component, PropsWithChildren} from 'react'
import {View, Button, Text, Input} from '@tarojs/components'
import {observer, inject} from 'mobx-react'
import Taro from '@tarojs/taro'
import CONSTANS from  '../../utils/constans'
import './index.less'

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {


  state = {
    loginTag: 0, // 0登录  1注册
    loginMode: 0, // 0验证码  1密码
    loginCodeNum: 60,  // 登录倒计时
    registerCodeNum: 60,  // 注册倒计时
    loginTel:'', // 登录手机号
    loginCode:'', // 登录验证码
    loginPsw:'',  // 登录密码

    registerTel:'', // 注册手机号
    registerCode:'', // 注册验证码
    registerPsw:'', // 密码
    registerPswAgain:'', // 再一次密码
  }

  componentDidMount() {
    var token = Taro.getStorageSync(CONSTANS.token);
    if(token){
      Taro.switchTab({
        url:'/pages/home/index'
      });
    }else{
      return;
    }
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
  changeLoginMode(index) {
    if(index == 0){
      this.setState({
        loginPsw:'',
      })
    }else{
      this.setState({
        loginCode:'',
      })
    }
    this.setState({
      loginMode: index
    })
  }


  // 切换登录/注册
  changeUIMode(index) {
    if(index == 0){
      this.setState({
        registerTel:'', // 注册手机号
        registerCode:'', // 注册验证码
        registerPsw:'', // 密码
        registerPswAgain:'', // 再一次密码
      })
    }else{
      this.setState({
        loginTel:'', // 登录手机号
        loginCode:'', // 登录验证码
        loginPsw:'',
      })
    }

    this.setState({
      loginTag: index,
    })
  }

  // 登录按钮点击
  loginAction() {
    const {loginTel,loginCode,loginPsw} = this.state;
    console.log(loginTel,loginCode,loginPsw);
    // 假装开始注册 登录请求
    if(loginTel.length < 11){
      Taro.showToast({title: '请输入合法手机号',icon:'error'});
      return;
    }


    if(loginCode.length < 6){
      Taro.showToast({title: '请输入6位验证码',icon:'error'});
      return;
    }

    // 假装发起登录请求
    Taro.showLoading({title:'登录中'});
    setTimeout(function () {
      Taro.setStorageSync(CONSTANS.token,'token');
      Taro.hideLoading();
      Taro.switchTab({
        url:'/pages/home/index'
      });
    }, 2000)

  }

  // 注册按钮点击
  registerAction() {
    const {registerTel,registerCode,registerPsw,registerPswAgain} = this.state;
    if(registerTel.length < 11){
      alert('请输入合法手机号');
    }
    //  ... 假装已经发了验证码
    if(registerCode.length < 6){
      Taro.showToast({title: '请输入6位验证码',icon:'error'});
      return;
    }
    if(registerPsw.length < 6 || registerPswAgain.length < 6){
      Taro.showToast({title: '密码至少需要6位',icon:'error'});
      return;
    }
    if(registerPsw != registerPswAgain){
      Taro.showToast({title: '两次密码不一样',icon:'error'});
      return;
    }

    // 开始注册 并登录
    Taro.showLoading({title:'登录中'});
    setTimeout(function () {
      Taro.setStorageSync(CONSTANS.token,'token');
      Taro.hideLoading();
      Taro.switchTab({
        url:'/pages/home/index'
      });
    }, 2000)
  }



  /// ***********************************登录*********************************************

  loginTelChange(e){
    this.setState({
      loginTel:e, // 注册手机号,
    })
  }

  loginPswChange(e){
    this.setState({
      loginPsw:e,
    })
  }

  loginCodeChange(e){
    this.setState({
      loginCode:e,
    })
  }
  /// ***********************************注册*********************************************

  registerTelChange(e){
    this.setState({
      registerTel:e, // 注册手机号,
    })
  }

  registerCodeChange(e){
    this.setState({
      registerCode:e,
    })
  }

  registerPswChange(e){
    this.setState({
      registerPsw:e,
    })
  }

  registerPswAgainPswChange(e){
    this.setState({
      registerPswAgain:e,
    })
  }


  render() {
    const {loginTag, loginCodeNum, loginMode, registerCodeNum,loginCode,loginTel,loginPsw,registerTel,registerCode,registerPsw,registerPswAgain} = this.state;
    return (
      <View className='login_bg'>
        {/* 登录 注册 按钮 */}
        <View className='login_register_btn'>
          <View
            onClick={() => this.changeUIMode(0)}
            className={loginTag == 0 ? 'btn_left_select' : 'btn_left_unSelect'}
          >
            <Text>登录</Text>
          </View>
          <View
            onClick={() => this.changeUIMode(1)}
            className={loginTag == 1 ? 'btn_right_select' : 'btn_right_unSelect'}
          >
            <Text>注册</Text>
          </View>
        </View>
          {/* 输入框 */}
          {
            loginTag == 0 ?
              <View className='login_input_view'>
                <View className='input_name'>
                  <Input value={loginTel}  onInput={(e)=>this.loginTelChange(e.detail.value)} placeholder='请输入手机号' ></Input>
                </View>
                {
                  loginMode == 0 ?
                    <View className='input_code'>
                      <Input value={loginCode} onInput={(e)=>this.loginCodeChange(e.detail.value)} placeholder='请输入验证码'></Input>
                      <Text
                        onClick={this.sendLoginCodeAction.bind(this)}
                        className='send_code_txt'
                      >
                        {loginCodeNum == 60 ? "发送验证码" : loginCodeNum}
                      </Text>
                    </View>
                    :
                    <View className='input_psw'>
                      <Input value={loginPsw} onInput={(e)=>this.loginPswChange(e.detail.value)} placeholder='输入密码'></Input>
                    </View>
                }

                {
                  loginMode == 0 ? <View className='login_mode'>
                    <Text onClick={() => this.changeLoginMode(1)}>
                      验证码登录
                    </Text>
                  </View> : <View className='login_mode'>
                    <Text onClick={() => this.changeLoginMode(0)}>
                      密码登录
                    </Text>
                  </View>
                }


              </View>
              :
              <View className='login_input_view'>
                <View className='input_name'>
                  <Input  value={registerTel} onInput={(e)=>this.registerTelChange(e.detail.value)} placeholder='请输入手机号'></Input>
                </View>
                <View className='input_code'>
                  <Input value={registerCode} onInput={(e)=>this.registerCodeChange(e.detail.value)} placeholder='请输入验证码'></Input>
                  <Text onClick={this.sendRegisterAction.bind(this)} className='send_code_txt'>
                    {registerCodeNum == 60 ? "发送验证码" : registerCodeNum}
                  </Text>
                </View>
                <View  className='input_psw'>
                  <Input value={registerPsw} onInput={(e)=>this.registerPswChange(e.detail.value)} placeholder='输入密码'></Input>
                </View>
                <View className='input_psw'>
                  <Input value={registerPswAgain} onInput={(e)=>this.registerPswAgainPswChange(e.detail.value)} placeholder='再次输入密码'></Input>
                </View>
              </View>
          }
          {/* 底部按钮 */}
          <View className='login_bottom_view'>
            {
              loginTag == 0 ?
                <View className='login_bottom_btn'>
                  <Button onClick={()=>this.loginAction()} >登录</Button>
                </View>
                :
                <View className='login_bottom_btn'>
                  <Button onClick={()=>this.registerAction()} >注册</Button>
                </View>
            }
          </View>

      </View>
    )
  }
}

export default Index
