import { Component, PropsWithChildren } from 'react'
import {Text,ScrollView,View} from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro';
import ServiceProvider from "../../service/service_provider";
import './index.less';

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {

  state = {
    newsData : [], // 新闻list
  }

  componentDidMount(): void {
    this.getNewsData();
  }

  getNewsData(){
    ServiceProvider.newInfo().then((e) => {
      console.log(e);
      if(e['code'] == 1){
        this.setState({
          newsData: e['data'],
        })
      }
    });
  }

  // 点击item
  // @ts-ignore
  onclickItem(e){
    let link = e['link'];
    Taro.navigateTo({
      url: 'pages/news_details/index?link=' + JSON.stringify(link)
    }).then(_  =>{});
  }

  render () {
    const {newsData} = this.state;
    return (
      <ScrollView
        onScrollToLower={()=>{}}
      >
        {
          newsData.length > 0 ?
            newsData.map((e,i) => {
              return <View className='item' onClick={()=>this.onclickItem(e)} key={i} >
                        <Text style={{display:'block',fontSize:'15px'}}>标题: {e['title']}</Text>
                        <Text style={{display:'block',fontSize:'14PX'}}>点赞数: {e['heat']}</Text>
                     </View>
            })

            :<Text>无数据</Text>
        }
      </ScrollView>
    )
  }
}

export default Index
