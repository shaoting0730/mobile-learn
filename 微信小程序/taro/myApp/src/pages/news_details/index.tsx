import { Component, PropsWithChildren } from 'react'
import {View,WebView} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less';

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {

  render () {
    return (
    <View>
      <WebView src=''></WebView>
    </View>
    )
  }
}

export default Index
