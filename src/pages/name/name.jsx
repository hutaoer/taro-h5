import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './name.scss'

export default class Name extends Component {

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
      <View className='name'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
