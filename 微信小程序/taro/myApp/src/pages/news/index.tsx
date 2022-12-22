import { Component, PropsWithChildren } from 'react'
import {Text,ScrollView} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.less';

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount(): void {

  }
  render () {
    return (
      <ScrollView
        onScrollToLower={()=>{}}
      >
        <Text>新闻</Text>
      </ScrollView>
    )
  }
}

export default Index
