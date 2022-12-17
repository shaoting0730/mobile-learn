import { Component, PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'
import loginStore from './store/login'
import './app.less'

const store = {
  loginStore,
  counterStore,
}

class App extends Component<PropsWithChildren> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
