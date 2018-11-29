import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import AtToolTips from '../../../components/tooltips/index'

import './index.scss'


export default class ToolTipsPage extends Taro.Component {
  render () {
    return (
      <View style={{ padding: '100px', height: '9000px' }}>
      fjsldjflksdjflksjdlfjsldfsdfsd
        <AtToolTips trigger='click' direct='t' renderTips={
          <View>
            <View>大幅度jf</View>
            <Text>kdlsjklfjsdlfjsldjflsdjfljsdlfjsldjflsdkjflsjdlfkjsdlkjflsdjfljksdlfjlsdkjfljsdlfjsdlkjflsdj</Text>
          </View>
        }
        >
          <View className='at-tooltips-demo'>fskdjflsjdlj</View>
        </AtToolTips>


        <AtToolTips renderTips={
          <View>
            <View>大幅度jf</View>
            <Text>kdlsjklfjsdlfjsldjflsdjfljsdlfjsldjflsdkjflsjdlfkjsdlkjflsdjfljksdlfjlsdkjfljsdlfjsdlkjflsdj</Text>
          </View>
        } direct='b'
        >
          <View className='test'>flskdjflksjdflkjsdlkfjsdlkjfslkdjflkjsd</View>
        </AtToolTips>
      </View>
    )
  }
}
