import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import AtToolTips from '../../../components/tooltips/index'
import AtButton from '../../../components/button/index'
import AtInput from '../../../components/input'
import AtTextArea from '../../../components/textarea'
import DocsHeader from '../../components/doc-header'
import './index.scss'


export default class ToolTipsPage extends Taro.Component {
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='提示'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>


          {/* tooltips */}
          <View className='panel'>
            <View className='panel__title'>按钮</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtToolTips trigger='click' direct='lb' renderTips={
                    <View style={{ width: '160px' }}>
                      <View>title</View>
                      <Text>this is test</Text>
                      <View>fjsdlfjldsjl</View>
                    </View>
                  }
                  >
                    <AtButton icon={{ value: 'clock', size: 16 }}>按钮</AtButton>
                  </AtToolTips>
                </View>

              </View>

              {<View className='example-item'>
                <View className='subitem'>
                  <AtToolTips trigger='click' direct='b' renderTips={
                    <View style={{ width: '160px' }}>
                      <View>title</View>
                      <Text>this is test</Text>
                      <View>fjsdlfjldsjl</View>
                    </View>
                  }
                  >
                    <AtButton icon={{ value: 'clock', size: 16 }}>按钮</AtButton>
                  </AtToolTips>
                </View>

              </View>}


              {<View className='example-item'>
                <View className='subitem'>
                  <AtToolTips trigger='click' direct='t' renderTips={
                    <View style={{ width: '160px' }}>
                      <View>title</View>
                      <Text>this is test</Text>
                      <View>fjsdlfjldsjl</View>
                    </View>
                  }
                  >
                    <AtButton icon={{ value: 'clock', size: 16 }}>按钮</AtButton>
                  </AtToolTips>
                </View>

              </View>}


            </View>
          </View>


          {/** */}
          <View className='panel'>
            <View className='panel__title'>输入框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtToolTips renderTips={
                    <View style={{ width: '300px' }}>
                      <View>大幅度jf</View>
                      <Text style={{ wordBreak: 'break-all' }}>kdlsjklfjsdlfjsldjflsdjfljsdlfjsldjflsdkjflsjdlfkjsdlkjflsdjfljksdlfjlsdkjfljsdlfjsdlkjflsdj</Text>
                    </View>
                  } direct='t'
                  >
                    <AtInput customStyle={{ border: '#eee 1px solid' }} placeholder='请输入信息'></AtInput>
                  </AtToolTips>
                </View>
              </View>

              {}
              <View className='example-item'>
                <View className='subitem'>
                  <AtToolTips renderTips={
                    <View style={{ width: '150px' }}>
                      <View>大幅度jf</View>
                      <Text style={{ wordBreak: 'break-all' }}>kdlsjklfjsdlfjsldjflsdjfljsdlfjsldjflsdkjflsjdlfkjsdlkjflsdjfljksdlfjlsdkjfljsdlfjsdlkjflsdj</Text>
                    </View>
                  } direct='r'
                  >
                    <AtTextArea customStyle={{ border: '#eee 1px solid', width: '200px' }} placeholder='请输入信息'></AtTextArea>
                  </AtToolTips>
                </View>
                {}
              </View>
            </View>
          </View>
          {}


        </View>
      </View>


    )
  }
}
