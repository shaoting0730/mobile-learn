import { Component, PropsWithChildren } from 'react'
import {View, Button, Text, Input} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less';
@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount(): void {

  }
  render () {
    return (
      <View className='login_bg'>


      </View>
    )
  }
}

export default Index
