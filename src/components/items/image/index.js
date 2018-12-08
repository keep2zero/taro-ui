import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import AtIcon from '../../icon'
import AtFaIcon from '../../icon-fa'

export default class AtImage extends Taro.Component {
  render () {
    const {
      value, size, color, type
    } = this.props
    let image = null
    if (type === 'fa') {
      image = (<AtFaIcon value={value} size={size} color={color}></AtFaIcon>)
    }
    if (type === 'at') {
      image = <AtIcon value={value} size={size} color={color}></AtIcon>
    }
    if (type === 'image') {
      image = <Image src={value} mode={this.props.mode} style={{ width: `${size.width}px`, height: `${size.height}px` }}></Image>
    }


    return (
      <View className='at-image'>
        {image}
      </View>
    )
  }
}
