import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './home.scss'

export default class Home extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='home'>
        <h1 className='list-name'>list name </h1>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
