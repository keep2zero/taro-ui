import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'

import AtIcon from '../icon'
import AtComponent from '../../common/component'

import './index.scss'

export default class AtFaIcon extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    color: '',
    size: 24,
    onClick: () => { },
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    value: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onClick: PropTypes.func,
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const {
      value, size, color, className, customStyle
    } = this.props
    return (
      <AtIcon prefixClass='fa' value={value} size={size} onClick={this.handleClick.bind(this)} color={color} className={className} customStyle={customStyle}></AtIcon>
    )
  }
}
