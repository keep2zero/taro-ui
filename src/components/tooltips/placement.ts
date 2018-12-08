import * as Taro from '@tarojs/taro'
interface WayRect {
  width: number;
  height: number;
  top: number;
  left: number;
}

interface WayOffset {
  offsetX: number
  offsetY: number
  arrowsOffsetX: number
  arrowsOffsetY: number
  width: number
}

export default class Placement {

  offsetX: number;
  offsetY: number;
  arrowsOffsetX: number;
  arrowsOffsetY: number;
  rect: WayRect;
  popRect: WayRect;
  arrowsRect: WayRect;

  width: number;
  height: number;
  left: number;
  top: number;
  arrowsLeft: number;
  arrowsTop: number;
  arrowsRotate: number;
  winWidth: number;
  winHeight: number;




  constructor(rects: WayRect[], offset: WayOffset) {

    this.rect = rects[0];
    this.popRect = rects[1];
    this.arrowsRect = rects[2];

    this.offsetX = offset.offsetX;
    this.offsetY = offset.offsetY;
    this.arrowsOffsetX = offset.arrowsOffsetX;
    this.arrowsOffsetY = offset.arrowsOffsetY;
    this.arrowsRotate = 0;
    this.winWidth = Taro.getSystemInfoSync().windowWidth;
    this.winHeight = Taro.getSystemInfoSync().windowHeight;

    this.width =  offset.width || this.popRect.width;
  }

  public exec() { }


}

export class LeftPlace extends Placement {
  exec() {
    this.left = -this.popRect.width - this.offsetX - this.arrowsRect.width/2;
    this.top = -(this.popRect.height - this.rect.height) / 2 + this.offsetY
    this.arrowsLeft = this.popRect.width;
    this.arrowsTop = (this.popRect.height - this.arrowsRect.height)/2 + this.arrowsOffsetY;
    this.arrowsRotate = 90
  }
}

export class RightPlace extends LeftPlace {
  exec() {
    super.exec();
    this.left = this.rect.width + this.arrowsRect.width/2 + this.offsetX;
    this.arrowsLeft = -this.arrowsRect.width;
    this.arrowsRotate = 270;
    this.width = this.winWidth - (this.rect.left + this.rect.width + 20)
  }
}





export class TopPlace extends Placement {


  exec() {
    this.top = -this.popRect.height - this.arrowsRect.height/2 - this.offsetY;
    // this.left = -(this.popRect.width - this.rect.width) / 2 + this.offsetX;
    this.width = this.rect.width + this.rect.left * 2;
    this.left = -this.rect.left;
    //
    this.arrowsTop = this.popRect.height + this.arrowsOffsetY;
    // this.arrowsLeft = (this.popRect.width - this.arrowsRect.width) / 2 + this.arrowsOffsetX;
    this.arrowsLeft = (this.width - this.arrowsRect.width) / 2;
    this.arrowsRotate = 180;



  }
}


export class LeftTopPlace extends TopPlace {
  exec() {
    super.exec();
    this.left = 0 + this.offsetX;
    this.arrowsLeft = 0 + this.arrowsOffsetX;
    this.width = this.winWidth - this.rect.left * 2;
  }
}


export class RightTopPlace extends TopPlace {
  exec() {
    super.exec()
    this.left = this.rect.width - this.popRect.width;
    this.arrowsLeft = this.popRect.width - this.arrowsRect.width - this.arrowsOffsetX;
  }
}


export class BottomPlace extends Placement {
  exec() {
    this.top = this.rect.height + this.offsetY + this.arrowsRect.height / 2 + this.offsetY;
    this.left = -(this.popRect.width - this.rect.width / 2) + this.offsetX;
    // this.arrowsLeft = (this.popRect.width - this.arrowsRect.width) / 2 + this.arrowsOffsetX;
    this.arrowsTop = 0 - this.arrowsRect.height - this.arrowsOffsetY;

    this.width = this.rect.width + this.rect.left * 2;
    this.left = -this.rect.left;
    this.arrowsLeft = (this.width - this.arrowsRect.width) / 2;
  }
}


export class RightBottomPlace extends BottomPlace {
  exec() {
    super.exec();
    this.left = this.rect.width - this.popRect.width + this.offsetX;
    this.arrowsLeft = this.popRect.width - this.arrowsRect.width - this.arrowsOffsetX;
  }
}

export class LeftBottomPlace extends BottomPlace {
  exec() {

    super.exec();
    this.left = this.offsetX;
    this.arrowsLeft = this.arrowsOffsetX;

  }
}
