import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PropTypes } from 'nervjs'
import AtImage from '../image'
import './line.scss'
/**
 * 1. 左右icon/image
 * 2. title
 * 3. desc
 * 4. subtitle
 */
export default class AtLine extends Taro.Component {
  static defaultProps = {
    title: false,
    desc: false,
    extraText: false,
    prefix: false,
    suffix: false,
    split: false,
  }

  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    desc: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    extraText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    prefix: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    suffix: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    split: PropTypes.bool
  }
  render () {
    const {
      prefix, suffix, title, desc, extraText, split
    } = this.props
    return (
      <View className='at-line-wrapper'>

        {<View className='at-line'>
          {prefix && <View className='at-line-icon'>
            <AtImage size={prefix.size} mode={prefix.mode} type={prefix.type} value={prefix.value}></AtImage>
          </View>}
          <View className='at-line-content'>
            {title && <View className='at-line-content__title'>{title}</View>}
            {desc && <View className='at-line-content__desc'>{desc}</View>}
          </View>
          {extraText && <View className='at-line-minor'>
            {extraText}
          </View>}
          {suffix && <View className='at-line-icon'>
            <AtImage mode={suffix.mode} size={suffix.size} color={suffix.color} type={suffix.type} value='angle-right'></AtImage>
          </View>}


        </View>}
        {split && <View className='at-line-split'></View>}
      </View>

    )
  }
}
