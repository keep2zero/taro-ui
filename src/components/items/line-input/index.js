import Taro from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { PropTypes } from 'nervjs'
import '../line/line.scss'
import AtInput from '../../input'
import AtImage from '../image'


export default class AtLineInput extends Taro.Component {
  static defaultProps = {
    title: false,
    desc: false,
    extraText: false,
    split: false,
    suffix: false,
  }

  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    desc: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    extraText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    split: PropTypes.bool,
    suffix: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  }
  render () {
    const { title, desc, split, suffix, type } = this.props
    return (

      <View className='at-line-wrapper'>

        {<View className='at-line'>
          { type === 'picker' &&
          <View className='at-line-content'>
            <Picker>
              <View className='at-line-picker'>

                {title && <View className='at-line-content__title'>{title}</View>}
                {desc && <View className='at-line-content__select'>{desc}</View>}
              </View>
            </Picker>
          </View>
          }
          {type === 'input' && <View className='at-line-input'>
            {<AtInput title={title} border={false}></AtInput>}
          </View>}
          {suffix && <View className='at-line-icon'>
            <AtImage mode={suffix.mode} size={suffix.size} color={suffix.color} type={suffix.type} value='angle-right'></AtImage>
          </View>
          }

        </View>}

        {split && <View className='at-line-split'></View>}
      </View>
    )
  }
}
