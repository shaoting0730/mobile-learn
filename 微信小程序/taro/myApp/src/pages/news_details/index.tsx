import {Component, PropsWithChildren} from 'react'
import {View, WebView} from '@tarojs/components'
import {observer, inject} from 'mobx-react'
import {getCurrentInstance} from '@tarojs/taro'
import './index.less';

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {

  state = {
    url: ''
  }

  componentDidMount() {
    const link = getCurrentInstance().router?.params.link;
    this.setState({
      url: link
    })
  }

  render() {
    return (
      <View>
        <WebView src={this.state.url}></WebView>
      </View>
    )
  }
}

export default Index
