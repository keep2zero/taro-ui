import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtComponent from '../../common/component'
import { LeftPlace, RightPlace, LeftTopPlace, TopPlace, BottomPlace, RightBottomPlace, RightTopPlace, LeftBottomPlace } from './placement'
import './index.scss'

/**
 * 目前组件用在微信小程序中, 测试是正确的.
 * 在h5中获取到的trigger项的高度是有问题的.
 */
export default class AtToolTips extends AtComponent {
  static zIndex = 90
  static defaultProps = {
    direct: 'b',
    offset: {
      offsetX: 0,
      offsetY: 0,
      arrowsOffsetX: 12,
      arrowsOffsetY: 0
    },
    trigger: 'click',
    renderTips: null

  }

  static propTypes = {
    direct: PropTypes.string,
    offset: PropTypes.object,
    trigger: PropTypes.string,
    renderTips: PropTypes.func
  }

  placement = {
    l: LeftPlace,
    r: RightPlace,
    t: TopPlace,
    lt: LeftTopPlace,
    rt: RightTopPlace,
    b: BottomPlace,
    lb: LeftBottomPlace,
    rb: RightBottomPlace
  }

  state = {
    popArrowStyle: {},
    popStyle: {},
    show: false,
    width: ''
  }


  updatePop () {
    console.log(AtToolTips.zIndex)
    const width = Taro.getSystemInfoSync().windowWidth
    console.log(width)
    if (this.state.show) {
      const query = Taro.createSelectorQuery().in(this.$scope)
      query.select('.at-tooltips__children').boundingClientRect()
      query.select('.at-tooltips__pop').boundingClientRect()
      query.select('.at-tooltips__pop-arrow').boundingClientRect()

      query.exec(res => {
        console.log(res)
        const place = new this.placement[this.props.direct](res, this.props.offset)
        place.exec()
        console.log(place)

        // let width = Taro.getSystemInfoSync().windowWidth
        // if (place.popRect.width <= width) {
        //   width = place.rect.width
        // }

        const popStyle = {
          // width: `${place.rect.width}px`,
          // height: `${place.height}px`,

          // overflow: 'hidden',
          zIndex: ++AtToolTips.zIndex,
          top: `${place.top}px`,
          left: `${place.left}px`,
          // width: `${width - place.rect.left}px`
        }


        const popArrowStyle = {
          left: `${place.arrowsLeft}px`,
          top: `${place.arrowsTop}px`,
          transform: `rotate(${place.arrowsRotate}deg)`
        }


        this.setState({
          popStyle,
          popArrowStyle,
          width: place.width
        })
      })
    } else {
      this.setState({
        popStyle: {
          zIndex: 0
        }
      })
    }
  }

  clickOperation () {
    if (this.props.trigger !== 'click') return
    this.operation()
  }

  hoverOperation () {
    if (this.props.trigger !== 'hover') return
    this.operation()
  }


  operation () {
    this.setState({
      show: !this.state.show
    }, function () {
      this.updatePop()
    }.bind(this))
    //
  }

  close () {
    this.setState({
      popStyle: {
        zIndex: 0
      }
    })
    this.setState({ show: false })
  }


  render () {
    return (
      <View className='at-tooltips'>
        {
          this.state.show && (
            <View className='at-tooltips__overlay' onClick={this.close.bind(this)}></View>
          )
        }
        <View className='at-tooltips__body' style={{ zIndex: this.state.popStyle.zIndex }}>


          <View className='at-tooltips__pop-wrapper ' style={{ ...this.state.popStyle, visibility: (this.state.show ? 'visible' : 'hidden') }}>
            <View className='at-tooltips__pop-arrow' style={this.state.popArrowStyle}></View>
            <View className='at-tooltips__pop' style={{ width: `${this.state.width}px` }}>
              {this.props.renderTips}
            </View>
          </View>


          <View className='at-tooltips__children'
            // style={{ height: `${this.props.triggerHeight}px` }}
            onClick={this.operation.bind(this)}
            onMouseEnter={this.hoverOperation.bind(this)}
            onMouseLeave={this.hoverOperation.bind(this)}
          >
            {this.props.children}
          </View>
        </View>
      </View>
    )
  }
}
