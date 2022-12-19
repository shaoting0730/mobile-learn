import { Component, PropsWithChildren } from 'react'
import {View,Text} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less';

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount(): void {

  }
  render () {
    return (
      <View>
        <Text>新闻</Text>
      </View>
    )
  }
}

export default Index
