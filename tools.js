import { MessageBox } from 'element-ui'
import conf from '@/util/config'
import store from '@/store'

/**
 * @description 道格拉斯-普克抽稀算法
 */
var DouglasPeucker = function () {

  /**
   * 两点是否相同
   * @param {*} pt1 点1
   * @param {*} pt2 点2
   */
  function _equals(pt1, pt2) {
    if (pt1 && pt2 && pt1.lat && pt1.lng && pt2.lat && pt2.lng) {
      return (pt1.lat === pt2.lat && pt1.lng === pt2.lng)
    }
    return false
  }

  /**
   * 获取处理后的点
   * @param {Array} points 包含点的数组
   * @param {Number} tolerance 取样阈值
   * @returns {Array}
   */
  this.getProcessPoints = function (points, tolerance) {
    try {
      if (!points || !points.length) {                                          // 当points不是数组或没有值时，直接返回一个空数组
        return [];
      }
      if (points.length < 3) {                                                  // 小于3个点时不抽稀，因为1个或2个点无法进行抽稀
        return points;
      }
      var firstPoint = 0, lastPoint = points.length - 1;                        // 取开始点与结束点的下标
      var pointIndexsToKeep = [];                                               // 保存需要点下标的数组
      pointIndexsToKeep.push(firstPoint);                                       // 开始与结束不进行处理，直接保留
      pointIndexsToKeep.push(lastPoint);                                        // 开始与结束不进行处理，直接保留
      while (_equals(points[firstPoint], points[lastPoint])) {                  // 处理闭合情况，闭合时，强制断开
        lastPoint--;
      }
      this.reduce(points, firstPoint, lastPoint, tolerance, pointIndexsToKeep); // 抽稀
      var resultPoints = [];
      pointIndexsToKeep.sort((a, b) => {                                        // 下标排序
        return a - b;
      });                                                                       // 返回的点数组
      for (var i = 0; i < pointIndexsToKeep.length; i++) {
        resultPoints.push(points[pointIndexsToKeep[i]]);
      }
      return resultPoints;
    } catch (error) {
      console.log(error)
      return []
    }
  },

    /**
     * 递归抽稀处理
     * @param {Object} points 待抽稀的数组
     * @param {Number} firstPoint 起点
     * @param {Number} lastPoint 终点
     * @param {Number} tolerance 取样阈值
     * @param {Array} pointIndexsToKeep 保留点下标的数组
     */
    this.reduce = function (points, firstPoint, lastPoint, tolerance, pointIndexsToKeep) {
      try {
        var maxDis = 0, idxFarthest = 0;                                                      // 定义最大长度及最远点的下标
        for (var i = firstPoint, dis; i < lastPoint; i++) {
          dis = this.perpendicularDistance(points[firstPoint], points[lastPoint], points[i]); // 获取当前点的起点与终点
          if (dis > maxDis) {                                                                 // 保存最远距离
            maxDis = dis;
            idxFarthest = i;
          }
        }
        if (maxDis > tolerance && idxFarthest != 0) {                                         // 如果最远距离大于临界值
          pointIndexsToKeep.push(idxFarthest);
          this.reduce(points, firstPoint, idxFarthest, tolerance, pointIndexsToKeep);
          this.reduce(points, idxFarthest, lastPoint, tolerance, pointIndexsToKeep);
        }
      } catch (error) {
        console.log(error)
      }
    },

    /**
     * 计算给出的comparePoint到beginPoint与endPoint组成的直线的垂直距离
     * @param {Object} beginPoint 起始点
     * @param {Object} endPoint 结束点
     * @param {Object} comparePoint 比较点
     * @returns {Number}
     * Area = |(1/2)(x1y2 + x2y3 + x3y1 - x2y1 - x3y2 - x1y3)|   *Area of triangle
     * Base = v((x1-x2)2+(y1-y2)2)                               *Base of Triangle*
     * Area = .5*Base*H                                          *Solve for height
     * Height = Area/.5/Base
     */
    this.perpendicularDistance = function (beginPoint, endPoint, comparePoint) {
      try {
        var area = Math.abs(0.5 * (beginPoint.lat * endPoint.lng + endPoint.lat * comparePoint.lng + comparePoint.lat * beginPoint.lng -
          endPoint.lat * beginPoint.lng - comparePoint.lat * endPoint.lng - beginPoint.lat * comparePoint.lng));
        var bottom = Math.sqrt(Math.pow(beginPoint.lat - endPoint.lat, 2) + Math.pow(beginPoint.lng - endPoint.lng, 2));
        var height = area / bottom * 2;
        return height;
      } catch (error) {
        console.log(error)
        return 0
      }
    }

  return this
}


/**
 * 重新登录
 */
function reLogin() {
  MessageBox.alert('暂未获得用户信息，请重新登录').then(() => {
      let url = window.location.href
      if (url.lastIndexOf('/')!==(url.length-1)){
          url = url + '/'
      }
      if (url.indexOf('wos.blg')>0){
          window.location.href = conf.LOGIN_URL + '/login?ret=' + window.location.href
          return
      }
      if (url.indexOf('wos')>0){
          url = url.split('wos')[1]
          window.location.href = 'http://login' + url + '/login?ret=' + window.location.href
      }
  })
}


/**
 *
 * @param {*} array
 */
function simpleMenuFactory(array) {
  let toString = Object.prototype.toString
  if (toString.call(array) === '[object Array]' && array.length > 0) {
    array.map(function (item, index) {
      if (item.childrenMenu) {
        if (item.childrenMenu.length > 0) {
          methods.simpleMenuFactory(item.childrenMenu)
        } else if (item.childrenMenu.length === 0) {
          delete item.childrenMenu
        }
      }
    })
  } else {
    throw '生成简单菜单  需要不为空的原始菜单数组'
  }
  return array
}


/**
 * 取出n级的id,用于默认展开到n级
 * @param {*} sourceTree
 */
function getExpandedKeys(sourceTree) {
  // 判断入参是长度大于0的数组或类数组
  function isOrLikeArray(input) {
    let toString = Object.prototype.toString
    return toString.call(input) === '[object Array]' && input.length > 0
  }

  let expandedKeys = []
  let expandedClassFlag = 0
  // 取出n级的id,用于默认展开到3级,所以传2（第3级不用展开）
  function getKeys(sourceTree, expandedClass = 2) {
    if (!isOrLikeArray(sourceTree)) return expandedKeys
    expandedClassFlag++
    expandedClassFlag <= expandedClass && sourceTree.forEach(function (treeOne, treeOneIndex) {
      treeOne && treeOne.id && expandedKeys.push(treeOne.id)
      treeOne.children && getKeys(treeOne.children, expandedClass)
    })

    return expandedKeys
  }
  return getKeys(sourceTree)
}

/**
 * @description 通过链接的形式下载文件
 * @param {string} url   @example '/console/ess/boon/exportTemplate'
 * @param {object} param @example { name: 'xxx' }
 */
function downloadFile(url, params) {
  let accessToken = store.state.user.accessToken
  if (!accessToken) {
    methods.reLogin()
    return
  }
  let qryStr = ''
  for (let key in params) {
    let val = params[key]
    if (!val) {
      continue
    }
    if (key === 'pageNo') {
      key = 'PageNo'
    }
    if (key === 'pageSize') {
      key = 'PageSize'
      val = 1000
    }
    qryStr += '&' + key + '=' + val
  }
  console.log(url + "?accessToken=" + encodeURIComponent(accessToken) + qryStr)
 
  window.location.href = url + "?accessToken=" + encodeURIComponent(accessToken) + qryStr
}

function isStrEmpty(str) {
  return (typeof str !== 'string' || !str || str == '')
}

function getFromSource() {
  return sessionStorage.getItem('from_source')
}

export default {
  DP: DouglasPeucker,
  reLogin,
  simpleMenuFactory,
  getExpandedKeys,
  downloadFile,
  isStrEmpty,
  getFromSource
}
