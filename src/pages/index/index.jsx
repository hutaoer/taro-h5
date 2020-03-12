import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { 
    var name = 33;
    console.log( 33 )
  }



  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='box'>
        <View className='boxHead'>头部</View>
        <Text className='box--desc'>Hello world!</Text>
      </View>
    )
  }
}
