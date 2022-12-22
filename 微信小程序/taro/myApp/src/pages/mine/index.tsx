import { Component, PropsWithChildren } from 'react'
import {View, Text, Image, Input, Button} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less';
import Taro from "@tarojs/taro";
import ServiceProvider from "../../service/service_provider";

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {

  state = {
    qq:'',
    qqInfo:{},
  }

  componentDidMount(): void {

  }

  searchQQ(){
    let qq = this.state.qq;
    console.log(qq);
    if (qq.length == 0) {
      Taro.showToast({
        title: '请输入合法QQ',
        icon: 'error'
      })
      return;
    }
    ServiceProvider.qqInfo(qq).then((e) => {
      console.log(e);
      this.setState({
        qqInfo: e,
      })
    });
  }

  qqInput(e){
    this.setState({
      qq:e
    })
  }

  render () {
    const {qqInfo} = this.state;
    return (
      <View className='mine-bg'>
      {/* 用户信息 */}
        <View className='user_info'>
          <Image className='avatar' src='https://v.api.aa1.cn/api/api-tx/index.php?wpon=aosijur75fi5huyty5f'></Image>
          <View className='name_gender'>
            <Text className='userName'>用户名:未知</Text>
            <Text  className='gender'>性别:未知</Text>
          </View>
        </View>
        {/*  QQ信息*/}
          <View className='qq'>
            <View className='qq_input'>
              <Input className='input' onInput={(e) => this.qqInput(e.detail.value)} placeholder='请输入要查询的QQ'
              ></Input>
              <Button className='search-btn' onClick={() => this.searchQQ()}>查询</Button>
            </View>
            <View>
              <Text style={{marginLeft: '10PX'}}>QQ查询结果:</Text>
              {
                Object.getOwnPropertyNames(qqInfo).length > 0 ?
                  <View>
                    <Text style={{display:"block"}}>用户名:{qqInfo['nickname']}</Text>
                    <Text style={{display:"block"}}>邮箱:{qqInfo['email']}</Text>
                    <View>
                      <Text>头像:</Text>
                      <Image style={{width:'80PX',height:'80PX'}} src={qqInfo['touxiang']}></Image>
                    </View>
                  </View> :
                  <Text style={{fontSize: '14PX', color: "red"}}>没有查到QQ信息</Text>
              }
            </View>
          </View>
        <View className='version'>
          <Text>0.0.1</Text>
        </View>
      </View>
    )
  }
}

export default Index
