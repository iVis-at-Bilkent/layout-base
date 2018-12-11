(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["layoutBase"] = factory();
	else
		root["layoutBase"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let layoutBase = function () {
  return;
};

layoutBase.DimensionD = __webpack_require__(1);
layoutBase.HashMap = __webpack_require__(2);
layoutBase.HashSet = __webpack_require__(4);
layoutBase.IGeometry = __webpack_require__(5);
layoutBase.IMath = __webpack_require__(6);
layoutBase.Integer = __webpack_require__(7);
layoutBase.Point = __webpack_require__(8);
layoutBase.PointD = __webpack_require__(9);
layoutBase.RandomSeed = __webpack_require__(10);
layoutBase.RectangleD = __webpack_require__(11);
layoutBase.Transform = __webpack_require__(12);
layoutBase.UniqueIDGeneretor = __webpack_require__(3);
layoutBase.Quicksort = __webpack_require__(13);
layoutBase.LinkedList = __webpack_require__(14);
layoutBase.LGraphObject = __webpack_require__(15);
layoutBase.LGraph = __webpack_require__(16);
layoutBase.LEdge = __webpack_require__(19);
layoutBase.LGraphManager = __webpack_require__(18);
layoutBase.LNode = __webpack_require__(20);
layoutBase.Layout = __webpack_require__(21);
layoutBase.LayoutConstants = __webpack_require__(17);

module.exports = layoutBase;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function DimensionD(width, height) {
  this.width = 0;
  this.height = 0;
  if (width !== null && height !== null) {
    this.height = height;
    this.width = width;
  }
}

DimensionD.prototype.getWidth = function () {
  return this.width;
};

DimensionD.prototype.setWidth = function (width) {
  this.width = width;
};

DimensionD.prototype.getHeight = function () {
  return this.height;
};

DimensionD.prototype.setHeight = function (height) {
  this.height = height;
};

module.exports = DimensionD;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(3);

function HashMap() {
  this.map = {};
  this.keys = [];
}

HashMap.prototype.put = function (key, value) {
  var theId = UniqueIDGeneretor.createID(key);
  if (!this.contains(theId)) {
    this.map[theId] = value;
    this.keys.push(key);
  }
};

HashMap.prototype.contains = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[key] != null;
};

HashMap.prototype.get = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[theId];
};

HashMap.prototype.keySet = function () {
  return this.keys;
};

module.exports = HashMap;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function UniqueIDGeneretor() {}

UniqueIDGeneretor.lastID = 0;

UniqueIDGeneretor.createID = function (obj) {
  if (UniqueIDGeneretor.isPrimitive(obj)) {
    return obj;
  }
  if (obj.uniqueID != null) {
    return obj.uniqueID;
  }
  obj.uniqueID = UniqueIDGeneretor.getString();
  UniqueIDGeneretor.lastID++;
  return obj.uniqueID;
};

UniqueIDGeneretor.getString = function (id) {
  if (id == null) id = UniqueIDGeneretor.lastID;
  return "Object#" + id + "";
};

UniqueIDGeneretor.isPrimitive = function (arg) {
  var type = typeof arg;
  return arg == null || type != "object" && type != "function";
};

module.exports = UniqueIDGeneretor;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(3);

function HashSet() {
  this.set = {};
}
;

HashSet.prototype.add = function (obj) {
  var theId = UniqueIDGeneretor.createID(obj);
  if (!this.contains(theId)) this.set[theId] = obj;
};

HashSet.prototype.remove = function (obj) {
  delete this.set[UniqueIDGeneretor.createID(obj)];
};

HashSet.prototype.clear = function () {
  this.set = {};
};

HashSet.prototype.contains = function (obj) {
  return this.set[UniqueIDGeneretor.createID(obj)] == obj;
};

HashSet.prototype.isEmpty = function () {
  return this.size() === 0;
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

//concats this.set to the given list
HashSet.prototype.addAllTo = function (list) {
  var keys = Object.keys(this.set);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    list.push(this.set[keys[i]]);
  }
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

HashSet.prototype.addAll = function (list) {
  var s = list.length;
  for (var i = 0; i < s; i++) {
    var v = list[i];
    this.add(v);
  }
};

module.exports = HashSet;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function IGeometry() {}

IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
  if (!rectA.intersects(rectB)) {
    throw "assert failed";
  }
  var directions = new Array(2);
  IGeometry.decideDirectionsForOverlappingNodes(rectA, rectB, directions);
  overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
  overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);
  // update the overlapping amounts for the following cases:
  if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
    overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
  } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
    overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
  }
  if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
    overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
  } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
    overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
  }

  // find slope of the line passes two centers
  var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
  // if centers are overlapped
  if (rectB.getCenterY() == rectA.getCenterY() && rectB.getCenterX() == rectA.getCenterX()) {
    // assume the slope is 1 (45 degree)
    slope = 1.0;
  }

  var moveByY = slope * overlapAmount[0];
  var moveByX = overlapAmount[1] / slope;
  if (overlapAmount[0] < moveByX) {
    moveByX = overlapAmount[0];
  } else {
    moveByY = overlapAmount[1];
  }
  // return half the amount so that if each rectangle is moved by these
  // amounts in opposite directions, overlap will be resolved
  overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
  overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
};

IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
  if (rectA.getCenterX() < rectB.getCenterX()) {
    directions[0] = -1;
  } else {
    directions[0] = 1;
  }

  if (rectA.getCenterY() < rectB.getCenterY()) {
    directions[1] = -1;
  } else {
    directions[1] = 1;
  }
};

IGeometry.getIntersection2 = function (rectA, rectB, result) {
  //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
  var p1x = rectA.getCenterX();
  var p1y = rectA.getCenterY();
  var p2x = rectB.getCenterX();
  var p2y = rectB.getCenterY();

  //if two rectangles intersect, then clipping points are centers
  if (rectA.intersects(rectB)) {
    result[0] = p1x;
    result[1] = p1y;
    result[2] = p2x;
    result[3] = p2y;
    return true;
  }
  //variables for rectA
  var topLeftAx = rectA.getX();
  var topLeftAy = rectA.getY();
  var topRightAx = rectA.getRight();
  var bottomLeftAx = rectA.getX();
  var bottomLeftAy = rectA.getBottom();
  var bottomRightAx = rectA.getRight();
  var halfWidthA = rectA.getWidthHalf();
  var halfHeightA = rectA.getHeightHalf();
  //variables for rectB
  var topLeftBx = rectB.getX();
  var topLeftBy = rectB.getY();
  var topRightBx = rectB.getRight();
  var bottomLeftBx = rectB.getX();
  var bottomLeftBy = rectB.getBottom();
  var bottomRightBx = rectB.getRight();
  var halfWidthB = rectB.getWidthHalf();
  var halfHeightB = rectB.getHeightHalf();
  //flag whether clipping points are found
  var clipPointAFound = false;
  var clipPointBFound = false;

  // line is vertical
  if (p1x == p2x) {
    if (p1y > p2y) {
      result[0] = p1x;
      result[1] = topLeftAy;
      result[2] = p2x;
      result[3] = bottomLeftBy;
      return false;
    } else if (p1y < p2y) {
      result[0] = p1x;
      result[1] = bottomLeftAy;
      result[2] = p2x;
      result[3] = topLeftBy;
      return false;
    } else {
      //not line, return null;
    }
  }
  // line is horizontal
  else if (p1y == p2y) {
      if (p1x > p2x) {
        result[0] = topLeftAx;
        result[1] = p1y;
        result[2] = topRightBx;
        result[3] = p2y;
        return false;
      } else if (p1x < p2x) {
        result[0] = topRightAx;
        result[1] = p1y;
        result[2] = topLeftBx;
        result[3] = p2y;
        return false;
      } else {
        //not valid line, return null;
      }
    } else {
      //slopes of rectA's and rectB's diagonals
      var slopeA = rectA.height / rectA.width;
      var slopeB = rectB.height / rectB.width;

      //slope of line between center of rectA and center of rectB
      var slopePrime = (p2y - p1y) / (p2x - p1x);
      var cardinalDirectionA;
      var cardinalDirectionB;
      var tempPointAx;
      var tempPointAy;
      var tempPointBx;
      var tempPointBy;

      //determine whether clipping point is the corner of nodeA
      if (-slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = bottomLeftAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = topRightAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        }
      } else if (slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = bottomRightAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        }
      }

      //determine whether clipping point is the corner of nodeB
      if (-slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = bottomLeftBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = topRightBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        }
      } else if (slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = topLeftBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = bottomRightBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        }
      }

      //if both clipping points are corners
      if (clipPointAFound && clipPointBFound) {
        return false;
      }

      //determine Cardinal Direction of rectangles
      if (p1x > p2x) {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 4);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 2);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 3);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 1);
        }
      } else {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 1);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 3);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 2);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 4);
        }
      }
      //calculate clipping Point if it is not found before
      if (!clipPointAFound) {
        switch (cardinalDirectionA) {
          case 1:
            tempPointAy = topLeftAy;
            tempPointAx = p1x + -halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 2:
            tempPointAx = bottomRightAx;
            tempPointAy = p1y + halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 3:
            tempPointAy = bottomLeftAy;
            tempPointAx = p1x + halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 4:
            tempPointAx = bottomLeftAx;
            tempPointAy = p1y + -halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
        }
      }
      if (!clipPointBFound) {
        switch (cardinalDirectionB) {
          case 1:
            tempPointBy = topLeftBy;
            tempPointBx = p2x + -halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 2:
            tempPointBx = bottomRightBx;
            tempPointBy = p2y + halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 3:
            tempPointBy = bottomLeftBy;
            tempPointBx = p2x + halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 4:
            tempPointBx = bottomLeftBx;
            tempPointBy = p2y + -halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
        }
      }
    }
  return false;
};

IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
  if (slope > slopePrime) {
    return line;
  } else {
    return 1 + line % 4;
  }
};

IGeometry.getIntersection = function (s1, s2, f1, f2) {
  if (f2 == null) {
    return IGeometry.getIntersection2(s1, s2, f1);
  }
  var x1 = s1.x;
  var y1 = s1.y;
  var x2 = s2.x;
  var y2 = s2.y;
  var x3 = f1.x;
  var y3 = f1.y;
  var x4 = f2.x;
  var y4 = f2.y;
  var x, y; // intersection point
  var a1, a2, b1, b2, c1, c2; // coefficients of line eqns.
  var denom;

  a1 = y2 - y1;
  b1 = x1 - x2;
  c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }

  a2 = y4 - y3;
  b2 = x3 - x4;
  c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }

  denom = a1 * b2 - a2 * b1;

  if (denom == 0) {
    return null;
  }

  x = (b1 * c2 - b2 * c1) / denom;
  y = (a2 * c1 - a1 * c2) / denom;

  return new Point(x, y);
};

// -----------------------------------------------------------------------------
// Section: Class Constants
// -----------------------------------------------------------------------------
/**
 * Some useful pre-calculated constants
 */
IGeometry.HALF_PI = 0.5 * Math.PI;
IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
IGeometry.TWO_PI = 2.0 * Math.PI;
IGeometry.THREE_PI = 3.0 * Math.PI;

module.exports = IGeometry;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function IMath() {}

/**
 * This method returns the sign of the input value.
 */
IMath.sign = function (value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
};

IMath.floor = function (value) {
  return value < 0 ? Math.ceil(value) : Math.floor(value);
};

IMath.ceil = function (value) {
  return value < 0 ? Math.floor(value) : Math.ceil(value);
};

module.exports = IMath;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
 *This class is the javascript implementation of the Point.java class in jdk
 */
function Point(x, y, p) {
  this.x = null;
  this.y = null;
  if (x == null && y == null && p == null) {
    this.x = 0;
    this.y = 0;
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    this.x = x;
    this.y = y;
  } else if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.x = p.x;
    this.y = p.y;
  }
}

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.getLocation = function () {
  return new Point(this.x, this.y);
};

Point.prototype.setLocation = function (x, y, p) {
  if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.setLocation(p.x, p.y);
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    //if both parameters are integer just move (x,y) location
    if (parseInt(x) == x && parseInt(y) == y) {
      this.move(x, y);
    } else {
      this.x = Math.floor(x + 0.5);
      this.y = Math.floor(y + 0.5);
    }
  }
};

Point.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

Point.prototype.equals = function (obj) {
  if (obj.constructor.name == "Point") {
    var pt = obj;
    return this.x == pt.x && this.y == pt.y;
  }
  return this == obj;
};

Point.prototype.toString = function () {
  return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
};

module.exports = Point;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function PointD(x, y) {
  if (x == null && y == null) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }
}

PointD.prototype.getX = function () {
  return this.x;
};

PointD.prototype.getY = function () {
  return this.y;
};

PointD.prototype.setX = function (x) {
  this.x = x;
};

PointD.prototype.setY = function (y) {
  this.y = y;
};

PointD.prototype.getDifference = function (pt) {
  return new DimensionD(this.x - pt.x, this.y - pt.y);
};

PointD.prototype.getCopy = function () {
  return new PointD(this.x, this.y);
};

PointD.prototype.translate = function (dim) {
  this.x += dim.width;
  this.y += dim.height;
  return this;
};

module.exports = PointD;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function RandomSeed() {}
RandomSeed.seed = 1;
RandomSeed.x = 0;

RandomSeed.nextDouble = function () {
  RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
  return RandomSeed.x - Math.floor(RandomSeed.x);
};

module.exports = RandomSeed;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function RectangleD(x, y, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;

  if (x != null && y != null && width != null && height != null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

RectangleD.prototype.getX = function () {
  return this.x;
};

RectangleD.prototype.setX = function (x) {
  this.x = x;
};

RectangleD.prototype.getY = function () {
  return this.y;
};

RectangleD.prototype.setY = function (y) {
  this.y = y;
};

RectangleD.prototype.getWidth = function () {
  return this.width;
};

RectangleD.prototype.setWidth = function (width) {
  this.width = width;
};

RectangleD.prototype.getHeight = function () {
  return this.height;
};

RectangleD.prototype.setHeight = function (height) {
  this.height = height;
};

RectangleD.prototype.getRight = function () {
  return this.x + this.width;
};

RectangleD.prototype.getBottom = function () {
  return this.y + this.height;
};

RectangleD.prototype.intersects = function (a) {
  if (this.getRight() < a.x) {
    return false;
  }

  if (this.getBottom() < a.y) {
    return false;
  }

  if (a.getRight() < this.x) {
    return false;
  }

  if (a.getBottom() < this.y) {
    return false;
  }

  return true;
};

RectangleD.prototype.getCenterX = function () {
  return this.x + this.width / 2;
};

RectangleD.prototype.getMinX = function () {
  return this.getX();
};

RectangleD.prototype.getMaxX = function () {
  return this.getX() + this.width;
};

RectangleD.prototype.getCenterY = function () {
  return this.y + this.height / 2;
};

RectangleD.prototype.getMinY = function () {
  return this.getY();
};

RectangleD.prototype.getMaxY = function () {
  return this.getY() + this.height;
};

RectangleD.prototype.getWidthHalf = function () {
  return this.width / 2;
};

RectangleD.prototype.getHeightHalf = function () {
  return this.height / 2;
};

module.exports = RectangleD;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var PointD = __webpack_require__(9);

function Transform(x, y) {
  this.lworldOrgX = 0.0;
  this.lworldOrgY = 0.0;
  this.ldeviceOrgX = 0.0;
  this.ldeviceOrgY = 0.0;
  this.lworldExtX = 1.0;
  this.lworldExtY = 1.0;
  this.ldeviceExtX = 1.0;
  this.ldeviceExtY = 1.0;
}

Transform.prototype.getWorldOrgX = function () {
  return this.lworldOrgX;
};

Transform.prototype.setWorldOrgX = function (wox) {
  this.lworldOrgX = wox;
};

Transform.prototype.getWorldOrgY = function () {
  return this.lworldOrgY;
};

Transform.prototype.setWorldOrgY = function (woy) {
  this.lworldOrgY = woy;
};

Transform.prototype.getWorldExtX = function () {
  return this.lworldExtX;
};

Transform.prototype.setWorldExtX = function (wex) {
  this.lworldExtX = wex;
};

Transform.prototype.getWorldExtY = function () {
  return this.lworldExtY;
};

Transform.prototype.setWorldExtY = function (wey) {
  this.lworldExtY = wey;
};

/* Device related */

Transform.prototype.getDeviceOrgX = function () {
  return this.ldeviceOrgX;
};

Transform.prototype.setDeviceOrgX = function (dox) {
  this.ldeviceOrgX = dox;
};

Transform.prototype.getDeviceOrgY = function () {
  return this.ldeviceOrgY;
};

Transform.prototype.setDeviceOrgY = function (doy) {
  this.ldeviceOrgY = doy;
};

Transform.prototype.getDeviceExtX = function () {
  return this.ldeviceExtX;
};

Transform.prototype.setDeviceExtX = function (dex) {
  this.ldeviceExtX = dex;
};

Transform.prototype.getDeviceExtY = function () {
  return this.ldeviceExtY;
};

Transform.prototype.setDeviceExtY = function (dey) {
  this.ldeviceExtY = dey;
};

Transform.prototype.transformX = function (x) {
  var xDevice = 0.0;
  var worldExtX = this.lworldExtX;
  if (worldExtX != 0.0) {
    xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
  }

  return xDevice;
};

Transform.prototype.transformY = function (y) {
  var yDevice = 0.0;
  var worldExtY = this.lworldExtY;
  if (worldExtY != 0.0) {
    yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
  }

  return yDevice;
};

Transform.prototype.inverseTransformX = function (x) {
  var xWorld = 0.0;
  var deviceExtX = this.ldeviceExtX;
  if (deviceExtX != 0.0) {
    xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
  }

  return xWorld;
};

Transform.prototype.inverseTransformY = function (y) {
  var yWorld = 0.0;
  var deviceExtY = this.ldeviceExtY;
  if (deviceExtY != 0.0) {
    yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
  }
  return yWorld;
};

Transform.prototype.inverseTransformPoint = function (inPoint) {
  var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
  return outPoint;
};

module.exports = Transform;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const LinkedList = __webpack_require__(14);

function Quicksort() {}

Quicksort.get_object_at = function (list, i) {
    if (list instanceof []) {
        return list[i];
    } else if (list instanceof LinkedList) {
        return list.get_object_at(i);
    }
};

Quicksort.set_object_at = function (list, i, value) {
    if (list instanceof []) {
        list[i] = value;
    } else if (list instanceof LinkedList) {
        list.set_object_at(i, value);
    }
};

Quicksort.quicksort = function (list, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof [])) {
        return;
    }

    var comparison_function = comparison_fn;

    if (comparison_function === undefined) {
        comparison_function = Quicksort.compare;
    }
    var end_index;

    if (list instanceof LinkedList) {
        end_index = list.size();
    } else if (list instanceof []) {
        end_index = list.length - 1;
    }

    // Prevent empty lists or arrays.
    if (end_index >= 0) {
        Quicksort.quicksort_between_indices(list, 0, end_index, comparison_function);
    }
};

Quicksort.quicksort_between_indices = function (list, low, high, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof [])) {
        return;
    }

    if (comparison_fn === undefined) {
        comparison_fn = Quicksort.compare;
    }

    var i = low;
    var j = high;
    var middleIndex = (i + j) / 2;
    var middle = Quicksort.get_object_at(list, middleIndex);

    do {

        while (comparison_fn(Quicksort.get_object_at(list, i), middle)) {

            i++;
        }

        while (comparison_fn(middle, Quicksort.get_object_at(list, j))) {

            j--;
        }

        if (i <= j) {

            var temp = Quicksort.get_object_at(list, i);
            Quicksort.set_object_at(list, i, Quicksort.getObjectAt(j));
            Quicksort.set_object_at(list, j, temp);
            i++;
            j--;
        }
    } while (i <= j);

    if (low < j) {

        Quicksort.quicksort_between_indices(low, j);
    }

    if (high > i) {

        Quicksort.quicksort_between_indices(i, high);
    }
};

// this function must be overriden for sorting different data types(e.g. string, integer etc.)
Quicksort.compare = function (a, b) {
    return b > a;
};

module.exports = Quicksort;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

const nodeFrom = value => ({ value, next: null, prev: null });

const add = (prev, node, next, list) => {
  if (prev !== null) {
    prev.next = node;
  } else {
    list.head = node;
  }

  if (next !== null) {
    next.prev = node;
  } else {
    list.tail = node;
  }

  node.prev = prev;
  node.next = next;

  list.length++;

  return node;
};

const remove = (node, list) => {
  let { prev, next } = node;

  if (prev !== null) {
    prev.next = next;
  } else {
    list.head = next;
  }

  if (next !== null) {
    next.prev = prev;
  } else {
    list.tail = prev;
  }

  node.prev = node.next = null;

  list.length--;

  return node;
};

class LinkedList {
  constructor(vals) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (vals != null) {
      vals.forEach(v => this.push(v));
    }
  }

  size() {
    return this.length;
  }

  insertBefore(val, otherNode) {
    return add(otherNode.prev, nodeFrom(val), otherNode, this);
  }

  insertAfter(val, otherNode) {
    return add(otherNode, nodeFrom(val), otherNode.next, this);
  }

  insertNodeBefore(newNode, otherNode) {
    return add(otherNode.prev, newNode, otherNode, this);
  }

  insertNodeAfter(newNode, otherNode) {
    return add(otherNode, newNode, otherNode.next, this);
  }

  push(val) {
    return add(this.tail, nodeFrom(val), null, this);
  }

  unshift(val) {
    return add(null, nodeFrom(val), this.head, this);
  }

  remove(node) {
    return remove(node, this);
  }

  pop() {
    return remove(this.tail, this).value;
  }

  popNode() {
    return remove(this.tail, this);
  }

  shift() {
    return remove(this.head, this).value;
  }

  shiftNode() {
    return remove(this.head, this);
  }

  get_object_at(index) {
    if (index <= this.length()) {
      var i = 1;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current.value;
    }
  }

  set_object_at(index, value) {
    if (index <= this.length()) {
      var i = 1;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      current.value = value;
    }
  }
}

module.exports = LinkedList;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(15);
var Integer = __webpack_require__(7);
var LayoutConstants = __webpack_require__(17);
var LGraphManager = __webpack_require__(18);
var LNode = __webpack_require__(20);
var LEdge = __webpack_require__(19);
var HashSet = __webpack_require__(4);
var RectangleD = __webpack_require__(11);
var Point = __webpack_require__(8);
var LinkedList = __webpack_require__(14);

function LGraph(parent, obj2, vGraph) {
  LGraphObject.call(this, vGraph);
  this.estimatedSize = Integer.MIN_VALUE;
  this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
  this.edges = [];
  this.nodes = [];
  this.isConnected = false;
  this.parent = parent;

  if (obj2 != null && obj2 instanceof LGraphManager) {
    this.graphManager = obj2;
  } else if (obj2 != null && obj2 instanceof Layout) {
    this.graphManager = obj2.graphManager;
  }
}

LGraph.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LGraph[prop] = LGraphObject[prop];
}

LGraph.prototype.getNodes = function () {
  return this.nodes;
};

LGraph.prototype.getEdges = function () {
  return this.edges;
};

LGraph.prototype.getGraphManager = function () {
  return this.graphManager;
};

LGraph.prototype.getParent = function () {
  return this.parent;
};

LGraph.prototype.getLeft = function () {
  return this.left;
};

LGraph.prototype.getRight = function () {
  return this.right;
};

LGraph.prototype.getTop = function () {
  return this.top;
};

LGraph.prototype.getBottom = function () {
  return this.bottom;
};

LGraph.prototype.isConnected = function () {
  return this.isConnected;
};

LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
  if (sourceNode == null && targetNode == null) {
    var newNode = obj1;
    if (this.graphManager == null) {
      throw "Graph has no graph mgr!";
    }
    if (this.getNodes().indexOf(newNode) > -1) {
      throw "Node already in graph!";
    }
    newNode.owner = this;
    this.getNodes().push(newNode);

    return newNode;
  } else {
    var newEdge = obj1;
    if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
      throw "Source or target not in graph!";
    }

    if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
      throw "Both owners must be this graph!";
    }

    if (sourceNode.owner != targetNode.owner) {
      return null;
    }

    // set source and target
    newEdge.source = sourceNode;
    newEdge.target = targetNode;

    // set as intra-graph edge
    newEdge.isInterGraph = false;

    // add to graph edge list
    this.getEdges().push(newEdge);

    // add to incidency lists
    sourceNode.edges.push(newEdge);

    if (targetNode != sourceNode) {
      targetNode.edges.push(newEdge);
    }

    return newEdge;
  }
};

LGraph.prototype.remove = function (obj) {
  var node = obj;
  if (obj instanceof LNode) {
    if (node == null) {
      throw "Node is null!";
    }
    if (!(node.owner != null && node.owner == this)) {
      throw "Owner graph is invalid!";
    }
    if (this.graphManager == null) {
      throw "Owner graph manager is invalid!";
    }
    // remove incident edges first (make a copy to do it safely)
    var edgesToBeRemoved = node.edges.slice();
    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];

      if (edge.isInterGraph) {
        this.graphManager.remove(edge);
      } else {
        edge.source.owner.remove(edge);
      }
    }

    // now the node itself
    var index = this.nodes.indexOf(node);
    if (index == -1) {
      throw "Node not in owner node list!";
    }

    this.nodes.splice(index, 1);
  } else if (obj instanceof LEdge) {
    var edge = obj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }
    if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
      throw "Source and/or target owner is invalid!";
    }

    var sourceIndex = edge.source.edges.indexOf(edge);
    var targetIndex = edge.target.edges.indexOf(edge);
    if (!(sourceIndex > -1 && targetIndex > -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    edge.source.edges.splice(sourceIndex, 1);

    if (edge.target != edge.source) {
      edge.target.edges.splice(targetIndex, 1);
    }

    var index = edge.source.owner.getEdges().indexOf(edge);
    if (index == -1) {
      throw "Not in owner's edge list!";
    }

    edge.source.owner.getEdges().splice(index, 1);
  }
};

LGraph.prototype.updateLeftTop = function () {
  var top = Integer.MAX_VALUE;
  var left = Integer.MAX_VALUE;
  var nodeTop;
  var nodeLeft;
  var margin;

  var nodes = this.getNodes();
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeTop = lNode.getTop();
    nodeLeft = lNode.getLeft();

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (left > nodeLeft) {
      left = nodeLeft;
    }
  }

  // Do we have any nodes in this graph?
  if (top == Integer.MAX_VALUE) {
    return null;
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = left - margin;
  this.top = top - margin;

  // Apply the margins and return the result
  return new Point(this.left, this.top);
};

LGraph.prototype.updateBounds = function (recursive) {
  // calculate bounds
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;
  var margin;

  var nodes = this.nodes;
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];

    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  if (left == Integer.MAX_VALUE) {
    this.left = this.parent.getLeft();
    this.right = this.parent.getRight();
    this.top = this.parent.getTop();
    this.bottom = this.parent.getBottom();
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

LGraph.calculateBounds = function (nodes) {
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;

  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);

  return boundingRect;
};

LGraph.prototype.getInclusionTreeDepth = function () {
  if (this == this.graphManager.getRoot()) {
    return 1;
  } else {
    return this.parent.getInclusionTreeDepth();
  }
};

LGraph.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LGraph.prototype.calcEstimatedSize = function () {
  var size = 0;
  var nodes = this.nodes;
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    size += lNode.calcEstimatedSize();
  }

  if (size == 0) {
    this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
  } else {
    this.estimatedSize = size / Math.sqrt(this.nodes.length);
  }

  return this.estimatedSize;
};

LGraph.prototype.updateConnected = function () {
  var self = this;
  if (this.nodes.length == 0) {
    this.isConnected = true;
    return;
  }

  var toBeVisited = new LinkedList();
  var visited = new HashSet();
  var currentNode = this.nodes[0];
  var neighborEdges;
  var currentNeighbor;
  var childrenOfNode = currentNode.withChildren();
  childrenOfNode.forEach(function (node) {
    toBeVisited.push(node);
  });

  while (toBeVisited.length !== 0) {
    currentNode = toBeVisited.shift();
    visited.add(currentNode);

    // Traverse all neighbors of this node
    neighborEdges = currentNode.getEdges();
    var s = neighborEdges.length;
    for (var i = 0; i < s; i++) {
      var neighborEdge = neighborEdges[i];
      currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);

      // Add unvisited neighbors to the list to visit
      if (currentNeighbor != null && !visited.contains(currentNeighbor)) {
        var childrenOfNeighbor = currentNeighbor.withChildren();

        childrenOfNeighbor.forEach(function (node) {
          toBeVisited.push(node);
        });
      }
    }
  }

  this.isConnected = false;

  if (visited.size() >= this.nodes.length) {
    var noOfVisitedInThisGraph = 0;

    var s = visited.size();
    Object.keys(visited.set).forEach(function (visitedId) {
      var visitedNode = visited.set[visitedId];
      if (visitedNode.owner == self) {
        noOfVisitedInThisGraph++;
      }
    });

    if (noOfVisitedInThisGraph == this.nodes.length) {
      this.isConnected = true;
    }
  }
};

module.exports = LGraph;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function LayoutConstants() {}

/**
 * Layout Quality
 */
LayoutConstants.PROOF_QUALITY = 0;
LayoutConstants.DEFAULT_QUALITY = 1;
LayoutConstants.DRAFT_QUALITY = 2;

/**
 * Default parameters
 */
LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
//LayoutConstants.DEFAULT_INCREMENTAL = true;
LayoutConstants.DEFAULT_INCREMENTAL = false;
LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;

// -----------------------------------------------------------------------------
// Section: General other constants
// -----------------------------------------------------------------------------
/*
 * Margins of a graph to be applied on bouding rectangle of its contents. We
 * assume margins on all four sides to be uniform.
 */
LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;

/*
 * Whether to consider labels in node dimensions or not
 */
LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_SIZE = 40;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;

/*
 * Empty compound node size. When a compound node is empty, its both
 * dimensions should be of this value.
 */
LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;

/*
 * Minimum length that an edge should take during layout
 */
LayoutConstants.MIN_EDGE_LENGTH = 1;

/*
 * World boundaries that layout operates on
 */
LayoutConstants.WORLD_BOUNDARY = 1000000;

/*
 * World boundaries that random positioning can be performed with
 */
LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;

/*
 * Coordinates of the world center
 */
LayoutConstants.WORLD_CENTER_X = 1200;
LayoutConstants.WORLD_CENTER_Y = 900;

module.exports = LayoutConstants;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var LGraph;
var LEdge = __webpack_require__(19);

function LGraphManager(layout) {
  LGraph = __webpack_require__(16); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
  this.layout = layout;

  this.graphs = [];
  this.edges = [];
}

LGraphManager.prototype.addRoot = function () {
  var ngraph = this.layout.newGraph();
  var nnode = this.layout.newNode(null);
  var root = this.add(ngraph, nnode);
  this.setRootGraph(root);
  return this.rootGraph;
};

LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
  //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
  if (newEdge == null && sourceNode == null && targetNode == null) {
    if (newGraph == null) {
      throw "Graph is null!";
    }
    if (parentNode == null) {
      throw "Parent node is null!";
    }
    if (this.graphs.indexOf(newGraph) > -1) {
      throw "Graph already in this graph mgr!";
    }

    this.graphs.push(newGraph);

    if (newGraph.parent != null) {
      throw "Already has a parent!";
    }
    if (parentNode.child != null) {
      throw "Already has a child!";
    }

    newGraph.parent = parentNode;
    parentNode.child = newGraph;

    return newGraph;
  } else {
    //change the order of the parameters
    targetNode = newEdge;
    sourceNode = parentNode;
    newEdge = newGraph;
    var sourceGraph = sourceNode.getOwner();
    var targetGraph = targetNode.getOwner();

    if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
      throw "Source not in this graph mgr!";
    }
    if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
      throw "Target not in this graph mgr!";
    }

    if (sourceGraph == targetGraph) {
      newEdge.isInterGraph = false;
      return sourceGraph.add(newEdge, sourceNode, targetNode);
    } else {
      newEdge.isInterGraph = true;

      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;

      // add edge to inter-graph edge list
      if (this.edges.indexOf(newEdge) > -1) {
        throw "Edge already in inter-graph edge list!";
      }

      this.edges.push(newEdge);

      // add edge to source and target incidency lists
      if (!(newEdge.source != null && newEdge.target != null)) {
        throw "Edge source and/or target is null!";
      }

      if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
        throw "Edge already in source and/or target incidency list!";
      }

      newEdge.source.edges.push(newEdge);
      newEdge.target.edges.push(newEdge);

      return newEdge;
    }
  }
};

LGraphManager.prototype.remove = function (lObj) {
  if (lObj instanceof LGraph) {
    var graph = lObj;
    if (graph.getGraphManager() != this) {
      throw "Graph not in this graph mgr";
    }
    if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
      throw "Invalid parent node!";
    }

    // first the edges (make a copy to do it safely)
    var edgesToBeRemoved = [];

    edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());

    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];
      graph.remove(edge);
    }

    // then the nodes (make a copy to do it safely)
    var nodesToBeRemoved = [];

    nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());

    var node;
    s = nodesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      node = nodesToBeRemoved[i];
      graph.remove(node);
    }

    // check if graph is the root
    if (graph == this.rootGraph) {
      this.setRootGraph(null);
    }

    // now remove the graph itself
    var index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);

    // also reset the parent of the graph
    graph.parent = null;
  } else if (lObj instanceof LEdge) {
    edge = lObj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!edge.isInterGraph) {
      throw "Not an inter-graph edge!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }

    // remove edge from source and target nodes' incidency lists

    if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    var index = edge.source.edges.indexOf(edge);
    edge.source.edges.splice(index, 1);
    index = edge.target.edges.indexOf(edge);
    edge.target.edges.splice(index, 1);

    // remove edge from owner graph manager's inter-graph edge list

    if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
      throw "Edge owner graph or owner graph manager is null!";
    }
    if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
      throw "Not in owner graph manager's edge list!";
    }

    var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
    edge.source.owner.getGraphManager().edges.splice(index, 1);
  }
};

LGraphManager.prototype.updateBounds = function () {
  this.rootGraph.updateBounds(true);
};

LGraphManager.prototype.getGraphs = function () {
  return this.graphs;
};

LGraphManager.prototype.getAllNodes = function () {
  if (this.allNodes == null) {
    var nodeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < s; i++) {
      nodeList = nodeList.concat(graphs[i].getNodes());
    }
    this.allNodes = nodeList;
  }
  return this.allNodes;
};

LGraphManager.prototype.resetAllNodes = function () {
  this.allNodes = null;
};

LGraphManager.prototype.resetAllEdges = function () {
  this.allEdges = null;
};

LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
  this.allNodesToApplyGravitation = null;
};

LGraphManager.prototype.getAllEdges = function () {
  if (this.allEdges == null) {
    var edgeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < graphs.length; i++) {
      edgeList = edgeList.concat(graphs[i].getEdges());
    }

    edgeList = edgeList.concat(this.edges);

    this.allEdges = edgeList;
  }
  return this.allEdges;
};

LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
  return this.allNodesToApplyGravitation;
};

LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
  if (this.allNodesToApplyGravitation != null) {
    throw "assert failed";
  }

  this.allNodesToApplyGravitation = nodeList;
};

LGraphManager.prototype.getRoot = function () {
  return this.rootGraph;
};

LGraphManager.prototype.setRootGraph = function (graph) {
  if (graph.getGraphManager() != this) {
    throw "Root not in this graph mgr!";
  }

  this.rootGraph = graph;
  // root graph must have a root node associated with it for convenience
  if (graph.parent == null) {
    graph.parent = this.layout.newNode("Root node");
  }
};

LGraphManager.prototype.getLayout = function () {
  return this.layout;
};

LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
  if (!(firstNode != null && secondNode != null)) {
    throw "assert failed";
  }

  if (firstNode == secondNode) {
    return true;
  }
  // Is second node an ancestor of the first one?
  var ownerGraph = firstNode.getOwner();
  var parentNode;

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == secondNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);
  // Is first node an ancestor of the second one?
  ownerGraph = secondNode.getOwner();

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == firstNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);

  return false;
};

LGraphManager.prototype.calcLowestCommonAncestors = function () {
  var edge;
  var sourceNode;
  var targetNode;
  var sourceAncestorGraph;
  var targetAncestorGraph;

  var edges = this.getAllEdges();
  var s = edges.length;
  for (var i = 0; i < s; i++) {
    edge = edges[i];

    sourceNode = edge.source;
    targetNode = edge.target;
    edge.lca = null;
    edge.sourceInLca = sourceNode;
    edge.targetInLca = targetNode;

    if (sourceNode == targetNode) {
      edge.lca = sourceNode.getOwner();
      continue;
    }

    sourceAncestorGraph = sourceNode.getOwner();

    while (edge.lca == null) {
      edge.targetInLca = targetNode;
      targetAncestorGraph = targetNode.getOwner();

      while (edge.lca == null) {
        if (targetAncestorGraph == sourceAncestorGraph) {
          edge.lca = targetAncestorGraph;
          break;
        }

        if (targetAncestorGraph == this.rootGraph) {
          break;
        }

        if (edge.lca != null) {
          throw "assert failed";
        }
        edge.targetInLca = targetAncestorGraph.getParent();
        targetAncestorGraph = edge.targetInLca.getOwner();
      }

      if (sourceAncestorGraph == this.rootGraph) {
        break;
      }

      if (edge.lca == null) {
        edge.sourceInLca = sourceAncestorGraph.getParent();
        sourceAncestorGraph = edge.sourceInLca.getOwner();
      }
    }

    if (edge.lca == null) {
      throw "assert failed";
    }
  }
};

LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
  if (firstNode == secondNode) {
    return firstNode.getOwner();
  }
  var firstOwnerGraph = firstNode.getOwner();

  do {
    if (firstOwnerGraph == null) {
      break;
    }
    var secondOwnerGraph = secondNode.getOwner();

    do {
      if (secondOwnerGraph == null) {
        break;
      }

      if (secondOwnerGraph == firstOwnerGraph) {
        return secondOwnerGraph;
      }
      secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
    } while (true);

    firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
  } while (true);

  return firstOwnerGraph;
};

LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
  if (graph == null && depth == null) {
    graph = this.rootGraph;
    depth = 1;
  }
  var node;

  var nodes = graph.getNodes();
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    node = nodes[i];
    node.inclusionTreeDepth = depth;

    if (node.child != null) {
      this.calcInclusionTreeDepths(node.child, depth + 1);
    }
  }
};

LGraphManager.prototype.includesInvalidEdge = function () {
  var edge;

  var s = this.edges.length;
  for (var i = 0; i < s; i++) {
    edge = this.edges[i];

    if (this.isOneAncestorOfOther(edge.source, edge.target)) {
      return true;
    }
  }
  return false;
};

module.exports = LGraphManager;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(15);
var IGeometry = __webpack_require__(5);
var IMath = __webpack_require__(6);

function LEdge(source, target, vEdge) {
  LGraphObject.call(this, vEdge);

  this.isOverlapingSourceAndTarget = false;
  this.vGraphObject = vEdge;
  this.bendpoints = [];
  this.source = source;
  this.target = target;
}

LEdge.prototype = Object.create(LGraphObject.prototype);

for (var prop in LGraphObject) {
  LEdge[prop] = LGraphObject[prop];
}

LEdge.prototype.getSource = function () {
  return this.source;
};

LEdge.prototype.getTarget = function () {
  return this.target;
};

LEdge.prototype.isInterGraph = function () {
  return this.isInterGraph;
};

LEdge.prototype.getLength = function () {
  return this.length;
};

LEdge.prototype.isOverlapingSourceAndTarget = function () {
  return this.isOverlapingSourceAndTarget;
};

LEdge.prototype.getBendpoints = function () {
  return this.bendpoints;
};

LEdge.prototype.getLca = function () {
  return this.lca;
};

LEdge.prototype.getSourceInLca = function () {
  return this.sourceInLca;
};

LEdge.prototype.getTargetInLca = function () {
  return this.targetInLca;
};

LEdge.prototype.getOtherEnd = function (node) {
  if (this.source === node) {
    return this.target;
  } else if (this.target === node) {
    return this.source;
  } else {
    throw "Node is not incident with this edge";
  }
};

LEdge.prototype.getOtherEndInGraph = function (node, graph) {
  var otherEnd = this.getOtherEnd(node);
  var root = graph.getGraphManager().getRoot();

  while (true) {
    if (otherEnd.getOwner() == graph) {
      return otherEnd;
    }

    if (otherEnd.getOwner() == root) {
      break;
    }

    otherEnd = otherEnd.getOwner().getParent();
  }

  return null;
};

LEdge.prototype.updateLength = function () {
  var clipPointCoordinates = new Array(4);

  this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);

  if (!this.isOverlapingSourceAndTarget) {
    this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
    this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];

    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }

    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }

    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  }
};

LEdge.prototype.updateLengthSimple = function () {
  this.lengthX = this.target.getCenterX() - this.source.getCenterX();
  this.lengthY = this.target.getCenterY() - this.source.getCenterY();

  if (Math.abs(this.lengthX) < 1.0) {
    this.lengthX = IMath.sign(this.lengthX);
  }

  if (Math.abs(this.lengthY) < 1.0) {
    this.lengthY = IMath.sign(this.lengthY);
  }

  this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
};

module.exports = LEdge;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(15);
var Integer = __webpack_require__(7);
var RectangleD = __webpack_require__(11);
var LayoutConstants = __webpack_require__(17);
var RandomSeed = __webpack_require__(10);
var PointD = __webpack_require__(9);
var HashSet = __webpack_require__(4);

function LNode(gm, loc, size, vNode) {
  //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
  if (size == null && vNode == null) {
    vNode = loc;
  }

  LGraphObject.call(this, vNode);

  //Alternative constructor 2 : LNode(Layout layout, Object vNode)
  if (gm.graphManager != null) gm = gm.graphManager;

  this.estimatedSize = Integer.MIN_VALUE;
  this.inclusionTreeDepth = Integer.MAX_VALUE;
  this.vGraphObject = vNode;
  this.edges = [];
  this.graphManager = gm;

  if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
}

LNode.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LNode[prop] = LGraphObject[prop];
}

LNode.prototype.getEdges = function () {
  return this.edges;
};

LNode.prototype.getChild = function () {
  return this.child;
};

LNode.prototype.getOwner = function () {
  //  if (this.owner != null) {
  //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
  //      throw "assert failed";
  //    }
  //  }

  return this.owner;
};

LNode.prototype.getWidth = function () {
  return this.rect.width;
};

LNode.prototype.setWidth = function (width) {
  this.rect.width = width;
};

LNode.prototype.getHeight = function () {
  return this.rect.height;
};

LNode.prototype.setHeight = function (height) {
  this.rect.height = height;
};

LNode.prototype.getCenterX = function () {
  return this.rect.x + this.rect.width / 2;
};

LNode.prototype.getCenterY = function () {
  return this.rect.y + this.rect.height / 2;
};

LNode.prototype.getCenter = function () {
  return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
};

LNode.prototype.getLocation = function () {
  return new PointD(this.rect.x, this.rect.y);
};

LNode.prototype.getRect = function () {
  return this.rect;
};

LNode.prototype.getDiagonal = function () {
  return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
};

LNode.prototype.setRect = function (upperLeft, dimension) {
  this.rect.x = upperLeft.x;
  this.rect.y = upperLeft.y;
  this.rect.width = dimension.width;
  this.rect.height = dimension.height;
};

LNode.prototype.setCenter = function (cx, cy) {
  this.rect.x = cx - this.rect.width / 2;
  this.rect.y = cy - this.rect.height / 2;
};

LNode.prototype.setLocation = function (x, y) {
  this.rect.x = x;
  this.rect.y = y;
};

LNode.prototype.moveBy = function (dx, dy) {
  this.rect.x += dx;
  this.rect.y += dy;
};

LNode.prototype.getEdgeListToNode = function (to) {
  var edgeList = [];
  var edge;
  var self = this;

  self.edges.forEach(function (edge) {

    if (edge.target == to) {
      if (edge.source != self) throw "Incorrect edge source!";

      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getEdgesBetween = function (other) {
  var edgeList = [];
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";

    if (edge.target == other || edge.source == other) {
      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getNeighborsList = function () {
  var neighbors = new HashSet();
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (edge.source == self) {
      neighbors.add(edge.target);
    } else {
      if (edge.target != self) {
        throw "Incorrect incidency!";
      }

      neighbors.add(edge.source);
    }
  });

  return neighbors;
};

LNode.prototype.withChildren = function () {
  var withNeighborsList = new Set();
  var childNode;
  var children;

  withNeighborsList.add(this);

  if (this.child != null) {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];
      children = childNode.withChildren();
      children.forEach(function (node) {
        withNeighborsList.add(node);
      });
    }
  }

  return withNeighborsList;
};

LNode.prototype.getNoOfChildren = function () {
  var noOfChildren = 0;
  var childNode;

  if (this.child == null) {
    noOfChildren = 1;
  } else {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];

      noOfChildren += childNode.getNoOfChildren();
    }
  }

  if (noOfChildren == 0) {
    noOfChildren = 1;
  }
  return noOfChildren;
};

LNode.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LNode.prototype.calcEstimatedSize = function () {
  if (this.child == null) {
    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
  } else {
    this.estimatedSize = this.child.calcEstimatedSize();
    this.rect.width = this.estimatedSize;
    this.rect.height = this.estimatedSize;

    return this.estimatedSize;
  }
};

LNode.prototype.scatter = function () {
  var randomCenterX;
  var randomCenterY;

  var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;

  var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;

  this.rect.x = randomCenterX;
  this.rect.y = randomCenterY;
};

LNode.prototype.updateBounds = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds(true);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());

    // Update compound bounds considering its label properties    
    if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {

      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if (this.labelWidth > width) {
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if (this.labelHeight > height) {
        if (this.labelPos == "center") {
          this.rect.y -= (this.labelHeight - height) / 2;
        } else if (this.labelPos == "top") {
          this.rect.y -= this.labelHeight - height;
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

LNode.prototype.getInclusionTreeDepth = function () {
  if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
    throw "assert failed";
  }
  return this.inclusionTreeDepth;
};

LNode.prototype.transform = function (trans) {
  var left = this.rect.x;

  if (left > LayoutConstants.WORLD_BOUNDARY) {
    left = LayoutConstants.WORLD_BOUNDARY;
  } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
    left = -LayoutConstants.WORLD_BOUNDARY;
  }

  var top = this.rect.y;

  if (top > LayoutConstants.WORLD_BOUNDARY) {
    top = LayoutConstants.WORLD_BOUNDARY;
  } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
    top = -LayoutConstants.WORLD_BOUNDARY;
  }

  var leftTop = new PointD(left, top);
  var vLeftTop = trans.inverseTransformPoint(leftTop);

  this.setLocation(vLeftTop.x, vLeftTop.y);
};

LNode.prototype.getLeft = function () {
  return this.rect.x;
};

LNode.prototype.getRight = function () {
  return this.rect.x + this.rect.width;
};

LNode.prototype.getTop = function () {
  return this.rect.y;
};

LNode.prototype.getBottom = function () {
  return this.rect.y + this.rect.height;
};

LNode.prototype.getParent = function () {
  if (this.owner == null) {
    return null;
  }

  return this.owner.getParent();
};

module.exports = LNode;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(17);
var HashMap = __webpack_require__(2);
var LGraphManager = __webpack_require__(18);
var LNode = __webpack_require__(20);
var LEdge = __webpack_require__(19);
var LGraph = __webpack_require__(16);
var PointD = __webpack_require__(9);
var Transform = __webpack_require__(12);
var Emitter = __webpack_require__(22);
var HashSet = __webpack_require__(4);

function Layout(isRemoteUse) {
  Emitter.call(this);

  //Layout Quality: 0:proof, 1:default, 2:draft
  this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
  //Whether layout should create bendpoints as needed or not
  this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  //Whether layout should be incremental or not
  this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
  //Whether we animate from before to after layout node positions
  this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
  //Whether we animate the layout process or not
  this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
  //Number iterations that should be done between two successive animations
  this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
  /**
   * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
   * they are, both spring and repulsion forces between two leaf nodes can be
   * calculated without the expensive clipping point calculations, resulting
   * in major speed-up.
   */
  this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  /**
   * This is used for creation of bendpoints by using dummy nodes and edges.
   * Maps an LEdge to its dummy bendpoint path.
   */
  this.edgeToDummyNodes = new HashMap();
  this.graphManager = new LGraphManager(this);
  this.isLayoutFinished = false;
  this.isSubLayout = false;
  this.isRemoteUse = false;

  if (isRemoteUse != null) {
    this.isRemoteUse = isRemoteUse;
  }
}

Layout.RANDOM_SEED = 1;

Layout.prototype = Object.create(Emitter.prototype);

Layout.prototype.getGraphManager = function () {
  return this.graphManager;
};

Layout.prototype.getAllNodes = function () {
  return this.graphManager.getAllNodes();
};

Layout.prototype.getAllEdges = function () {
  return this.graphManager.getAllEdges();
};

Layout.prototype.getAllNodesToApplyGravitation = function () {
  return this.graphManager.getAllNodesToApplyGravitation();
};

Layout.prototype.newGraphManager = function () {
  var gm = new LGraphManager(this);
  this.graphManager = gm;
  return gm;
};

Layout.prototype.newGraph = function (vGraph) {
  return new LGraph(null, this.graphManager, vGraph);
};

Layout.prototype.newNode = function (vNode) {
  return new LNode(this.graphManager, vNode);
};

Layout.prototype.newEdge = function (vEdge) {
  return new LEdge(null, null, vEdge);
};

Layout.prototype.checkLayoutSuccess = function () {
  return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
};

Layout.prototype.runLayout = function () {
  this.isLayoutFinished = false;

  if (this.tilingPreLayout) {
    this.tilingPreLayout();
  }

  this.initParameters();
  var isLayoutSuccessfull;

  if (this.checkLayoutSuccess()) {
    isLayoutSuccessfull = false;
  } else {
    isLayoutSuccessfull = this.layout();
  }

  if (LayoutConstants.ANIMATE === 'during') {
    // If this is a 'during' layout animation. Layout is not finished yet. 
    // We need to perform these in index.js when layout is really finished.
    return false;
  }

  if (isLayoutSuccessfull) {
    if (!this.isSubLayout) {
      this.doPostLayout();
    }
  }

  if (this.tilingPostLayout) {
    this.tilingPostLayout();
  }

  this.isLayoutFinished = true;

  return isLayoutSuccessfull;
};

/**
 * This method performs the operations required after layout.
 */
Layout.prototype.doPostLayout = function () {
  //assert !isSubLayout : "Should not be called on sub-layout!";
  // Propagate geometric changes to v-level objects
  if (!this.incremental) {
    this.transform();
  }
  this.update();
};

/**
 * This method updates the geometry of the target graph according to
 * calculated layout.
 */
Layout.prototype.update2 = function () {
  // update bend points
  if (this.createBendsAsNeeded) {
    this.createBendpointsFromDummyNodes();

    // reset all edges, since the topology has changed
    this.graphManager.resetAllEdges();
  }

  // perform edge, node and root updates if layout is not called
  // remotely
  if (!this.isRemoteUse) {
    // update all edges
    var edge;
    var allEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
      //      this.update(edge);
    }

    // recursively update nodes
    var node;
    var nodes = this.graphManager.getRoot().getNodes();
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      //      this.update(node);
    }

    // update root graph
    this.update(this.graphManager.getRoot());
  }
};

Layout.prototype.update = function (obj) {
  if (obj == null) {
    this.update2();
  } else if (obj instanceof LNode) {
    var node = obj;
    if (node.getChild() != null) {
      // since node is compound, recursively update child nodes
      var nodes = node.getChild().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        update(nodes[i]);
      }
    }

    // if the l-level node is associated with a v-level graph object,
    // then it is assumed that the v-level node implements the
    // interface Updatable.
    if (node.vGraphObject != null) {
      // cast to Updatable without any type check
      var vNode = node.vGraphObject;

      // call the update method of the interface
      vNode.update(node);
    }
  } else if (obj instanceof LEdge) {
    var edge = obj;
    // if the l-level edge is associated with a v-level graph object,
    // then it is assumed that the v-level edge implements the
    // interface Updatable.

    if (edge.vGraphObject != null) {
      // cast to Updatable without any type check
      var vEdge = edge.vGraphObject;

      // call the update method of the interface
      vEdge.update(edge);
    }
  } else if (obj instanceof LGraph) {
    var graph = obj;
    // if the l-level graph is associated with a v-level graph object,
    // then it is assumed that the v-level object implements the
    // interface Updatable.

    if (graph.vGraphObject != null) {
      // cast to Updatable without any type check
      var vGraph = graph.vGraphObject;

      // call the update method of the interface
      vGraph.update(graph);
    }
  }
};

/**
 * This method is used to set all layout parameters to default values
 * determined at compile time.
 */
Layout.prototype.initParameters = function () {
  if (!this.isSubLayout) {
    this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  }

  if (this.animationDuringLayout) {
    this.animationOnLayout = false;
  }
};

Layout.prototype.transform = function (newLeftTop) {
  if (newLeftTop == undefined) {
    this.transform(new PointD(0, 0));
  } else {
    // create a transformation object (from Eclipse to layout). When an
    // inverse transform is applied, we get upper-left coordinate of the
    // drawing or the root graph at given input coordinate (some margins
    // already included in calculation of left-top).

    var trans = new Transform();
    var leftTop = this.graphManager.getRoot().updateLeftTop();

    if (leftTop != null) {
      trans.setWorldOrgX(newLeftTop.x);
      trans.setWorldOrgY(newLeftTop.y);

      trans.setDeviceOrgX(leftTop.x);
      trans.setDeviceOrgY(leftTop.y);

      var nodes = this.getAllNodes();
      var node;

      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.transform(trans);
      }
    }
  }
};

Layout.prototype.positionNodesRandomly = function (graph) {

  if (graph == undefined) {
    //assert !this.incremental;
    this.positionNodesRandomly(this.getGraphManager().getRoot());
    this.getGraphManager().getRoot().updateBounds(true);
  } else {
    var lNode;
    var childGraph;

    var nodes = graph.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      lNode = nodes[i];
      childGraph = lNode.getChild();

      if (childGraph == null) {
        lNode.scatter();
      } else if (childGraph.getNodes().length == 0) {
        lNode.scatter();
      } else {
        this.positionNodesRandomly(childGraph);
        lNode.updateBounds();
      }
    }
  }
};

/**
 * This method returns a list of trees where each tree is represented as a
 * list of l-nodes. The method returns a list of size 0 when:
 * - The graph is not flat or
 * - One of the component(s) of the graph is not a tree.
 */
Layout.prototype.getFlatForest = function () {
  var flatForest = [];
  var isForest = true;

  // Quick reference for all nodes in the graph manager associated with
  // this layout. The list should not be changed.
  var allNodes = this.graphManager.getRoot().getNodes();

  // First be sure that the graph is flat
  var isFlat = true;

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].getChild() != null) {
      isFlat = false;
    }
  }

  // Return empty forest if the graph is not flat.
  if (!isFlat) {
    return flatForest;
  }

  // Run BFS for each component of the graph.

  var visited = new HashSet();
  var toBeVisited = [];
  var parents = new HashMap();
  var unProcessedNodes = [];

  unProcessedNodes = unProcessedNodes.concat(allNodes);

  // Each iteration of this loop finds a component of the graph and
  // decides whether it is a tree or not. If it is a tree, adds it to the
  // forest and continued with the next component.

  while (unProcessedNodes.length > 0 && isForest) {
    toBeVisited.push(unProcessedNodes[0]);

    // Start the BFS. Each iteration of this loop visits a node in a
    // BFS manner.
    while (toBeVisited.length > 0 && isForest) {
      //pool operation
      var currentNode = toBeVisited[0];
      toBeVisited.splice(0, 1);
      visited.add(currentNode);

      // Traverse all neighbors of this node
      var neighborEdges = currentNode.getEdges();

      for (var i = 0; i < neighborEdges.length; i++) {
        var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);

        // If BFS is not growing from this neighbor.
        if (parents.get(currentNode) != currentNeighbor) {
          // We haven't previously visited this neighbor.
          if (!visited.contains(currentNeighbor)) {
            toBeVisited.push(currentNeighbor);
            parents.put(currentNeighbor, currentNode);
          }
          // Since we have previously visited this neighbor and
          // this neighbor is not parent of currentNode, given
          // graph contains a component that is not tree, hence
          // it is not a forest.
          else {
              isForest = false;
              break;
            }
        }
      }
    }

    // The graph contains a component that is not a tree. Empty
    // previously found trees. The method will end.
    if (!isForest) {
      flatForest = [];
    }
    // Save currently visited nodes as a tree in our forest. Reset
    // visited and parents lists. Continue with the next component of
    // the graph, if any.
    else {
        var temp = [];
        visited.addAllTo(temp);
        flatForest.push(temp);
        //flatForest = flatForest.concat(temp);
        //unProcessedNodes.removeAll(visited);
        for (var i = 0; i < temp.length; i++) {
          var value = temp[i];
          var index = unProcessedNodes.indexOf(value);
          if (index > -1) {
            unProcessedNodes.splice(index, 1);
          }
        }
        visited = new HashSet();
        parents = new HashMap();
      }
  }

  return flatForest;
};

/**
 * This method creates dummy nodes (an l-level node with minimal dimensions)
 * for the given edge (one per bendpoint). The existing l-level structure
 * is updated accordingly.
 */
Layout.prototype.createDummyNodesForBendpoints = function (edge) {
  var dummyNodes = [];
  var prev = edge.source;

  var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = this.newNode(null);
    dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));

    graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = this.newEdge(null);
  this.graphManager.add(dummyEdge, prev, edge.target);

  this.edgeToDummyNodes.put(edge, dummyNodes);

  // remove real edge from graph manager if it is inter-graph
  if (edge.isInterGraph()) {
    this.graphManager.remove(edge);
  }
  // else, remove the edge from the current graph
  else {
      graph.remove(edge);
    }

  return dummyNodes;
};

/**
 * This method creates bendpoints for edges from the dummy nodes
 * at l-level.
 */
Layout.prototype.createBendpointsFromDummyNodes = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  edges = this.edgeToDummyNodes.keySet().concat(edges);

  for (var k = 0; k < edges.length; k++) {
    var lEdge = edges[k];

    if (lEdge.bendpoints.length > 0) {
      var path = this.edgeToDummyNodes.get(lEdge);

      for (var i = 0; i < path.length; i++) {
        var dummyNode = path[i];
        var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());

        // update bendpoint's location according to dummy node
        var ebp = lEdge.bendpoints.get(i);
        ebp.x = p.x;
        ebp.y = p.y;

        // remove the dummy node, dummy edges incident with this
        // dummy node is also removed (within the remove method)
        dummyNode.getOwner().remove(dummyNode);
      }

      // add the real edge to graph
      this.graphManager.add(lEdge, lEdge.source, lEdge.target);
    }
  }
};

Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
  if (minDiv != undefined && maxMul != undefined) {
    var value = defaultValue;

    if (sliderValue <= 50) {
      var minValue = defaultValue / minDiv;
      value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
    } else {
      var maxValue = defaultValue * maxMul;
      value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
    }

    return value;
  } else {
    var a, b;

    if (sliderValue <= 50) {
      a = 9.0 * defaultValue / 500.0;
      b = defaultValue / 10.0;
    } else {
      a = 9.0 * defaultValue / 50.0;
      b = -8 * defaultValue;
    }

    return a * sliderValue + b;
  }
};

/**
 * This method finds and returns the center of the given nodes, assuming
 * that the given nodes form a tree in themselves.
 */
Layout.findCenterOfTree = function (nodes) {
  var list = [];
  list = list.concat(nodes);

  var removedNodes = [];
  var remainingDegrees = new HashMap();
  var foundCenter = false;
  var centerNode = null;

  if (list.length == 1 || list.length == 2) {
    foundCenter = true;
    centerNode = list[0];
  }

  for (var i = 0; i < list.length; i++) {
    var node = list[i];
    var degree = node.getNeighborsList().size();
    remainingDegrees.put(node, node.getNeighborsList().size());

    if (degree == 1) {
      removedNodes.push(node);
    }
  }

  var tempList = [];
  tempList = tempList.concat(removedNodes);

  while (!foundCenter) {
    var tempList2 = [];
    tempList2 = tempList2.concat(tempList);
    tempList = [];

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      var index = list.indexOf(node);
      if (index >= 0) {
        list.splice(index, 1);
      }

      var neighbours = node.getNeighborsList();

      Object.keys(neighbours.set).forEach(function (j) {
        var neighbour = neighbours.set[j];
        if (removedNodes.indexOf(neighbour) < 0) {
          var otherDegree = remainingDegrees.get(neighbour);
          var newDegree = otherDegree - 1;

          if (newDegree == 1) {
            tempList.push(neighbour);
          }

          remainingDegrees.put(neighbour, newDegree);
        }
      });
    }

    removedNodes = removedNodes.concat(tempList);

    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  }

  return centerNode;
};

/**
 * During the coarsening process, this layout may be referenced by two graph managers
 * this setter function grants access to change the currently being used graph manager
 */
Layout.prototype.setGraphManager = function (gm) {
  this.graphManager = gm;
};

module.exports = Layout;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function Emitter() {
  this.listeners = [];
}

var p = Emitter.prototype;

p.addListener = function (event, callback) {
  this.listeners.push({
    event: event,
    callback: callback
  });
};

p.removeListener = function (event, callback) {
  for (var i = this.listeners.length; i >= 0; i--) {
    var l = this.listeners[i];

    if (l.event === event && l.callback === callback) {
      this.listeners.splice(i, 1);
    }
  }
};

p.emit = function (event, data) {
  for (var i = 0; i < this.listeners.length; i++) {
    var l = this.listeners[i];

    if (event === l.event) {
      l.callback(data);
    }
  }
};

module.exports = Emitter;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dEJhc2UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0lHZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSU1hdGguanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1BvaW50LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvUXVpY2tzb3J0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xFZGdlLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTE5vZGUuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0VtaXR0ZXIuanMiXSwibmFtZXMiOlsibGF5b3V0QmFzZSIsIkRpbWVuc2lvbkQiLCJyZXF1aXJlIiwiSGFzaE1hcCIsIkhhc2hTZXQiLCJJR2VvbWV0cnkiLCJJTWF0aCIsIkludGVnZXIiLCJQb2ludCIsIlBvaW50RCIsIlJhbmRvbVNlZWQiLCJSZWN0YW5nbGVEIiwiVHJhbnNmb3JtIiwiVW5pcXVlSURHZW5lcmV0b3IiLCJRdWlja3NvcnQiLCJMaW5rZWRMaXN0IiwiTEdyYXBoT2JqZWN0IiwiTEdyYXBoIiwiTEVkZ2UiLCJMR3JhcGhNYW5hZ2VyIiwiTE5vZGUiLCJMYXlvdXQiLCJMYXlvdXRDb25zdGFudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwid2lkdGgiLCJoZWlnaHQiLCJwcm90b3R5cGUiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwibWFwIiwia2V5cyIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImNvbnRhaW5zIiwicHVzaCIsImdldCIsImtleVNldCIsImxhc3RJRCIsIm9iaiIsImlzUHJpbWl0aXZlIiwidW5pcXVlSUQiLCJnZXRTdHJpbmciLCJpZCIsImFyZyIsInR5cGUiLCJzZXQiLCJhZGQiLCJyZW1vdmUiLCJjbGVhciIsImlzRW1wdHkiLCJzaXplIiwiT2JqZWN0IiwibGVuZ3RoIiwiYWRkQWxsVG8iLCJsaXN0IiwiaSIsImFkZEFsbCIsInMiLCJ2IiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJyZWN0QSIsInJlY3RCIiwib3ZlcmxhcEFtb3VudCIsInNlcGFyYXRpb25CdWZmZXIiLCJpbnRlcnNlY3RzIiwiZGlyZWN0aW9ucyIsIkFycmF5IiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJNYXRoIiwibWluIiwiZ2V0UmlnaHQiLCJtYXgiLCJ4IiwiZ2V0Qm90dG9tIiwieSIsImdldFgiLCJnZXRZIiwic2xvcGUiLCJhYnMiLCJnZXRDZW50ZXJZIiwiZ2V0Q2VudGVyWCIsIm1vdmVCeVkiLCJtb3ZlQnlYIiwiZ2V0SW50ZXJzZWN0aW9uMiIsInJlc3VsdCIsInAxeCIsInAxeSIsInAyeCIsInAyeSIsInRvcExlZnRBeCIsInRvcExlZnRBeSIsInRvcFJpZ2h0QXgiLCJib3R0b21MZWZ0QXgiLCJib3R0b21MZWZ0QXkiLCJib3R0b21SaWdodEF4IiwiaGFsZldpZHRoQSIsImdldFdpZHRoSGFsZiIsImhhbGZIZWlnaHRBIiwiZ2V0SGVpZ2h0SGFsZiIsInRvcExlZnRCeCIsInRvcExlZnRCeSIsInRvcFJpZ2h0QngiLCJib3R0b21MZWZ0QngiLCJib3R0b21MZWZ0QnkiLCJib3R0b21SaWdodEJ4IiwiaGFsZldpZHRoQiIsImhhbGZIZWlnaHRCIiwiY2xpcFBvaW50QUZvdW5kIiwiY2xpcFBvaW50QkZvdW5kIiwic2xvcGVBIiwic2xvcGVCIiwic2xvcGVQcmltZSIsImNhcmRpbmFsRGlyZWN0aW9uQSIsImNhcmRpbmFsRGlyZWN0aW9uQiIsInRlbXBQb2ludEF4IiwidGVtcFBvaW50QXkiLCJ0ZW1wUG9pbnRCeCIsInRlbXBQb2ludEJ5IiwiZ2V0Q2FyZGluYWxEaXJlY3Rpb24iLCJsaW5lIiwiZ2V0SW50ZXJzZWN0aW9uIiwiczEiLCJzMiIsImYxIiwiZjIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJ4NCIsInk0IiwiYTEiLCJhMiIsImIxIiwiYjIiLCJjMSIsImMyIiwiZGVub20iLCJIQUxGX1BJIiwiUEkiLCJPTkVfQU5EX0hBTEZfUEkiLCJUV09fUEkiLCJUSFJFRV9QSSIsInNpZ24iLCJmbG9vciIsImNlaWwiLCJNQVhfVkFMVUUiLCJNSU5fVkFMVUUiLCJwIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZ2V0TG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInBhcnNlSW50IiwibW92ZSIsInRyYW5zbGF0ZSIsImR4IiwiZHkiLCJlcXVhbHMiLCJwdCIsInRvU3RyaW5nIiwic2V0WCIsInNldFkiLCJnZXREaWZmZXJlbmNlIiwiZ2V0Q29weSIsImRpbSIsInNlZWQiLCJuZXh0RG91YmxlIiwic2luIiwiYSIsImdldE1pblgiLCJnZXRNYXhYIiwiZ2V0TWluWSIsImdldE1heFkiLCJsd29ybGRPcmdYIiwibHdvcmxkT3JnWSIsImxkZXZpY2VPcmdYIiwibGRldmljZU9yZ1kiLCJsd29ybGRFeHRYIiwibHdvcmxkRXh0WSIsImxkZXZpY2VFeHRYIiwibGRldmljZUV4dFkiLCJnZXRXb3JsZE9yZ1giLCJzZXRXb3JsZE9yZ1giLCJ3b3giLCJnZXRXb3JsZE9yZ1kiLCJzZXRXb3JsZE9yZ1kiLCJ3b3kiLCJnZXRXb3JsZEV4dFgiLCJzZXRXb3JsZEV4dFgiLCJ3ZXgiLCJnZXRXb3JsZEV4dFkiLCJzZXRXb3JsZEV4dFkiLCJ3ZXkiLCJnZXREZXZpY2VPcmdYIiwic2V0RGV2aWNlT3JnWCIsImRveCIsImdldERldmljZU9yZ1kiLCJzZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJnZXRfb2JqZWN0X2F0Iiwic2V0X29iamVjdF9hdCIsInF1aWNrc29ydCIsImNvbXBhcmlzb25fZm4iLCJjb21wYXJpc29uX2Z1bmN0aW9uIiwidW5kZWZpbmVkIiwiY29tcGFyZSIsImVuZF9pbmRleCIsInF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMiLCJsb3ciLCJoaWdoIiwiaiIsIm1pZGRsZUluZGV4IiwibWlkZGxlIiwidGVtcCIsImdldE9iamVjdEF0IiwiYiIsIm5vZGVGcm9tIiwibmV4dCIsInByZXYiLCJub2RlIiwiaGVhZCIsInRhaWwiLCJ2YWxzIiwiZm9yRWFjaCIsImluc2VydEJlZm9yZSIsInZhbCIsIm90aGVyTm9kZSIsImluc2VydEFmdGVyIiwiaW5zZXJ0Tm9kZUJlZm9yZSIsIm5ld05vZGUiLCJpbnNlcnROb2RlQWZ0ZXIiLCJ1bnNoaWZ0IiwicG9wIiwicG9wTm9kZSIsInNoaWZ0Iiwic2hpZnROb2RlIiwiaW5kZXgiLCJjdXJyZW50IiwidkdyYXBoT2JqZWN0IiwicGFyZW50Iiwib2JqMiIsInZHcmFwaCIsImNhbGwiLCJlc3RpbWF0ZWRTaXplIiwibWFyZ2luIiwiREVGQVVMVF9HUkFQSF9NQVJHSU4iLCJlZGdlcyIsIm5vZGVzIiwiaXNDb25uZWN0ZWQiLCJncmFwaE1hbmFnZXIiLCJjcmVhdGUiLCJwcm9wIiwiZ2V0Tm9kZXMiLCJnZXRFZGdlcyIsImdldEdyYXBoTWFuYWdlciIsImdldFBhcmVudCIsImdldExlZnQiLCJsZWZ0IiwicmlnaHQiLCJnZXRUb3AiLCJ0b3AiLCJib3R0b20iLCJvYmoxIiwic291cmNlTm9kZSIsInRhcmdldE5vZGUiLCJpbmRleE9mIiwib3duZXIiLCJuZXdFZGdlIiwic291cmNlIiwidGFyZ2V0IiwiaXNJbnRlckdyYXBoIiwiZWRnZXNUb0JlUmVtb3ZlZCIsInNsaWNlIiwiZWRnZSIsInNwbGljZSIsInNvdXJjZUluZGV4IiwidGFyZ2V0SW5kZXgiLCJ1cGRhdGVMZWZ0VG9wIiwibm9kZVRvcCIsIm5vZGVMZWZ0IiwibE5vZGUiLCJwYWRkaW5nTGVmdCIsInVwZGF0ZUJvdW5kcyIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJjaGlsZCIsImJvdW5kaW5nUmVjdCIsImNhbGN1bGF0ZUJvdW5kcyIsImdldEluY2x1c2lvblRyZWVEZXB0aCIsImdldFJvb3QiLCJnZXRFc3RpbWF0ZWRTaXplIiwiY2FsY0VzdGltYXRlZFNpemUiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJzcXJ0IiwidXBkYXRlQ29ubmVjdGVkIiwic2VsZiIsInRvQmVWaXNpdGVkIiwidmlzaXRlZCIsImN1cnJlbnROb2RlIiwibmVpZ2hib3JFZGdlcyIsImN1cnJlbnROZWlnaGJvciIsImNoaWxkcmVuT2ZOb2RlIiwid2l0aENoaWxkcmVuIiwibmVpZ2hib3JFZGdlIiwiZ2V0T3RoZXJFbmRJbkdyYXBoIiwiY2hpbGRyZW5PZk5laWdoYm9yIiwibm9PZlZpc2l0ZWRJblRoaXNHcmFwaCIsInZpc2l0ZWRJZCIsInZpc2l0ZWROb2RlIiwiUFJPT0ZfUVVBTElUWSIsIkRFRkFVTFRfUVVBTElUWSIsIkRSQUZUX1FVQUxJVFkiLCJERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQiLCJERUZBVUxUX0lOQ1JFTUVOVEFMIiwiREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCIsIkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMiLCJOT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMiLCJTSU1QTEVfTk9ERV9TSVpFIiwiU0lNUExFX05PREVfSEFMRl9TSVpFIiwiTUlOX0VER0VfTEVOR1RIIiwiV09STERfQk9VTkRBUlkiLCJJTklUSUFMX1dPUkxEX0JPVU5EQVJZIiwiV09STERfQ0VOVEVSX1giLCJXT1JMRF9DRU5URVJfWSIsImxheW91dCIsImdyYXBocyIsImFkZFJvb3QiLCJuZ3JhcGgiLCJuZXdHcmFwaCIsIm5ub2RlIiwicm9vdCIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsImdldE93bmVyIiwidGFyZ2V0R3JhcGgiLCJsT2JqIiwiZ3JhcGgiLCJjb25jYXQiLCJub2Rlc1RvQmVSZW1vdmVkIiwiZ2V0R3JhcGhzIiwiZ2V0QWxsTm9kZXMiLCJhbGxOb2RlcyIsIm5vZGVMaXN0IiwicmVzZXRBbGxOb2RlcyIsInJlc2V0QWxsRWRnZXMiLCJhbGxFZGdlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImdldEFsbEVkZ2VzIiwiZWRnZUxpc3QiLCJnZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsInNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiZ2V0TGF5b3V0IiwiaXNPbmVBbmNlc3Rvck9mT3RoZXIiLCJmaXJzdE5vZGUiLCJzZWNvbmROb2RlIiwib3duZXJHcmFwaCIsImNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMiLCJzb3VyY2VBbmNlc3RvckdyYXBoIiwidGFyZ2V0QW5jZXN0b3JHcmFwaCIsImxjYSIsInNvdXJjZUluTGNhIiwidGFyZ2V0SW5MY2EiLCJjYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IiLCJmaXJzdE93bmVyR3JhcGgiLCJzZWNvbmRPd25lckdyYXBoIiwiY2FsY0luY2x1c2lvblRyZWVEZXB0aHMiLCJkZXB0aCIsImluY2x1c2lvblRyZWVEZXB0aCIsImluY2x1ZGVzSW52YWxpZEVkZ2UiLCJ2RWRnZSIsImlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCIsImJlbmRwb2ludHMiLCJnZXRTb3VyY2UiLCJnZXRUYXJnZXQiLCJnZXRMZW5ndGgiLCJnZXRCZW5kcG9pbnRzIiwiZ2V0TGNhIiwiZ2V0U291cmNlSW5MY2EiLCJnZXRUYXJnZXRJbkxjYSIsImdldE90aGVyRW5kIiwib3RoZXJFbmQiLCJ1cGRhdGVMZW5ndGgiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsImdldFJlY3QiLCJsZW5ndGhYIiwibGVuZ3RoWSIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsImdtIiwibG9jIiwidk5vZGUiLCJyZWN0IiwiZ2V0Q2hpbGQiLCJnZXRDZW50ZXIiLCJnZXREaWFnb25hbCIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJzZXRDZW50ZXIiLCJjeCIsImN5IiwibW92ZUJ5IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJ0byIsImdldEVkZ2VzQmV0d2VlbiIsIm90aGVyIiwiZ2V0TmVpZ2hib3JzTGlzdCIsIm5laWdoYm9ycyIsIndpdGhOZWlnaGJvcnNMaXN0IiwiU2V0IiwiY2hpbGROb2RlIiwiY2hpbGRyZW4iLCJnZXROb09mQ2hpbGRyZW4iLCJub09mQ2hpbGRyZW4iLCJzY2F0dGVyIiwicmFuZG9tQ2VudGVyWCIsInJhbmRvbUNlbnRlclkiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwiY2hpbGRHcmFwaCIsImxhYmVsV2lkdGgiLCJsYWJlbEhlaWdodCIsImxhYmVsUG9zIiwidHJhbnNmb3JtIiwidHJhbnMiLCJsZWZ0VG9wIiwidkxlZnRUb3AiLCJFbWl0dGVyIiwiaXNSZW1vdGVVc2UiLCJsYXlvdXRRdWFsaXR5IiwiY3JlYXRlQmVuZHNBc05lZWRlZCIsImluY3JlbWVudGFsIiwiYW5pbWF0aW9uT25MYXlvdXQiLCJhbmltYXRpb25EdXJpbmdMYXlvdXQiLCJhbmltYXRpb25QZXJpb2QiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsImVkZ2VUb0R1bW15Tm9kZXMiLCJpc0xheW91dEZpbmlzaGVkIiwiaXNTdWJMYXlvdXQiLCJSQU5ET01fU0VFRCIsIm5ld0dyYXBoTWFuYWdlciIsImNoZWNrTGF5b3V0U3VjY2VzcyIsInJ1bkxheW91dCIsInRpbGluZ1ByZUxheW91dCIsImluaXRQYXJhbWV0ZXJzIiwiaXNMYXlvdXRTdWNjZXNzZnVsbCIsIkFOSU1BVEUiLCJkb1Bvc3RMYXlvdXQiLCJ0aWxpbmdQb3N0TGF5b3V0IiwidXBkYXRlIiwidXBkYXRlMiIsImNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcyIsIm5ld0xlZnRUb3AiLCJwb3NpdGlvbk5vZGVzUmFuZG9tbHkiLCJnZXRGbGF0Rm9yZXN0IiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJjcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyIsImR1bW15Tm9kZXMiLCJkdW1teU5vZGUiLCJEaW1lbnNpb24iLCJkdW1teUVkZ2UiLCJrIiwibEVkZ2UiLCJwYXRoIiwiZWJwIiwic2xpZGVyVmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJtaW5EaXYiLCJtYXhNdWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiZmluZENlbnRlck9mVHJlZSIsInJlbW92ZWROb2RlcyIsInJlbWFpbmluZ0RlZ3JlZXMiLCJmb3VuZENlbnRlciIsImNlbnRlck5vZGUiLCJkZWdyZWUiLCJ0ZW1wTGlzdCIsInRlbXBMaXN0MiIsIm5laWdoYm91cnMiLCJuZWlnaGJvdXIiLCJvdGhlckRlZ3JlZSIsIm5ld0RlZ3JlZSIsInNldEdyYXBoTWFuYWdlciIsImxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiZXZlbnQiLCJjYWxsYmFjayIsInJlbW92ZUxpc3RlbmVyIiwibCIsImVtaXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FB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QUFDckJHLFFBQUVGLFFBQUYsQ0FBWUksSUFBWjtBQUNEO0FBQ0Y7QUFDRixDQVJEOztBQVVBN2YsT0FBT0MsT0FBUCxHQUFpQndiLE9BQWpCLEMiLCJmaWxlIjoibGF5b3V0LWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXlvdXRCYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheW91dEJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IGxheW91dEJhc2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm47XG59O1xuXG5sYXlvdXRCYXNlLkRpbWVuc2lvbkQgPSByZXF1aXJlKCcuL3NyYy91dGlsL0RpbWVuc2lvbkQnKTtcbmxheW91dEJhc2UuSGFzaE1hcCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSGFzaE1hcCcpO1xubGF5b3V0QmFzZS5IYXNoU2V0ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9IYXNoU2V0Jyk7XG5sYXlvdXRCYXNlLklHZW9tZXRyeSA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSUdlb21ldHJ5Jyk7XG5sYXlvdXRCYXNlLklNYXRoID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9JTWF0aCcpO1xubGF5b3V0QmFzZS5JbnRlZ2VyID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9JbnRlZ2VyJyk7XG5sYXlvdXRCYXNlLlBvaW50ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9Qb2ludCcpO1xubGF5b3V0QmFzZS5Qb2ludEQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1BvaW50RCcpO1xubGF5b3V0QmFzZS5SYW5kb21TZWVkID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9SYW5kb21TZWVkJyk7XG5sYXlvdXRCYXNlLlJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1JlY3RhbmdsZUQnKTtcbmxheW91dEJhc2UuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9UcmFuc2Zvcm0nKTtcbmxheW91dEJhc2UuVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL3NyYy91dGlsL1VuaXF1ZUlER2VuZXJldG9yJyk7XG5sYXlvdXRCYXNlLlF1aWNrc29ydCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvUXVpY2tzb3J0Jyk7XG5sYXlvdXRCYXNlLkxpbmtlZExpc3QgPSByZXF1aXJlKCcuL3NyYy91dGlsL0xpbmtlZExpc3QnKTtcbmxheW91dEJhc2UuTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9zcmMvTEdyYXBoT2JqZWN0Jyk7XG5sYXlvdXRCYXNlLkxHcmFwaCA9IHJlcXVpcmUoJy4vc3JjL0xHcmFwaCcpO1xubGF5b3V0QmFzZS5MRWRnZSA9IHJlcXVpcmUoJy4vc3JjL0xFZGdlJyk7XG5sYXlvdXRCYXNlLkxHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL3NyYy9MR3JhcGhNYW5hZ2VyJyk7XG5sYXlvdXRCYXNlLkxOb2RlID0gcmVxdWlyZSgnLi9zcmMvTE5vZGUnKTtcbmxheW91dEJhc2UuTGF5b3V0ID0gcmVxdWlyZSgnLi9zcmMvTGF5b3V0Jyk7XG5sYXlvdXRCYXNlLkxheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vc3JjL0xheW91dENvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxheW91dEJhc2U7XG5cblxuIiwiZnVuY3Rpb24gRGltZW5zaW9uRCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgdGhpcy53aWR0aCA9IDA7XHJcbiAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gIGlmICh3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGwpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcclxue1xyXG4gIHRoaXMud2lkdGggPSB3aWR0aDtcclxufTtcclxuXHJcbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5oZWlnaHQ7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxyXG57XHJcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XHJcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcclxuXHJcbmZ1bmN0aW9uIEhhc2hNYXAoKSB7XHJcbiAgdGhpcy5tYXAgPSB7fTtcclxuICB0aGlzLmtleXMgPSBbXTtcclxufVxyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xyXG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHtcclxuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xyXG4gICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcclxuICB9XHJcbn07XHJcblxyXG5IYXNoTWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xyXG4gIHJldHVybiB0aGlzLm1hcFtrZXldICE9IG51bGw7XHJcbn07XHJcblxyXG5IYXNoTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcclxuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xyXG59O1xyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmtleXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hNYXA7XHJcbiIsImZ1bmN0aW9uIFVuaXF1ZUlER2VuZXJldG9yKCkge1xyXG59XHJcblxyXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG9iai51bmlxdWVJRDtcclxuICB9XHJcbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XHJcbiAgVW5pcXVlSURHZW5lcmV0b3IubGFzdElEKys7XHJcbiAgcmV0dXJuIG9iai51bmlxdWVJRDtcclxufVxyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgaWYgKGlkID09IG51bGwpXHJcbiAgICBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcclxuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XHJcbn1cclxuXHJcblVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24gKGFyZykge1xyXG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcclxuICByZXR1cm4gYXJnID09IG51bGwgfHwgKHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XHJcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcclxuXHJcbmZ1bmN0aW9uIEhhc2hTZXQoKSB7XHJcbiAgdGhpcy5zZXQgPSB7fTtcclxufVxyXG47XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKTtcclxuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKVxyXG4gICAgdGhpcy5zZXRbdGhlSWRdID0gb2JqO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIGRlbGV0ZSB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXTtcclxufTtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuc2V0ID0ge307XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcclxuICByZXR1cm4gdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV0gPT0gb2JqO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xyXG59O1xyXG5cclxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XHJcbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbFRvID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KTtcclxuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgbGlzdC5wdXNoKHRoaXMuc2V0W2tleXNbaV1dKTtcclxuICB9XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICB2YXIgcyA9IGxpc3QubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XHJcbiAgICB2YXIgdiA9IGxpc3RbaV07XHJcbiAgICB0aGlzLmFkZCh2KTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XHJcbiIsImZ1bmN0aW9uIElHZW9tZXRyeSgpIHtcclxufVxyXG5cclxuSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgc2VwYXJhdGlvbkJ1ZmZlcilcclxue1xyXG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcclxuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcclxuICBvdmVybGFwQW1vdW50WzBdID0gTWF0aC5taW4ocmVjdEEuZ2V0UmlnaHQoKSwgcmVjdEIuZ2V0UmlnaHQoKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XHJcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IE1hdGgubWluKHJlY3RBLmdldEJvdHRvbSgpLCByZWN0Qi5nZXRCb3R0b20oKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XHJcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxyXG4gIGlmICgocmVjdEEuZ2V0WCgpIDw9IHJlY3RCLmdldFgoKSkgJiYgKHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkpXHJcbiAge1xyXG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcclxuICAgICAgICAgICAgKHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcclxuICB7XHJcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0QS5nZXRYKCkgLSByZWN0Qi5nZXRYKCkpLFxyXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcclxuICB9XHJcbiAgaWYgKChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpKSAmJiAocmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0QS5nZXRCb3R0b20oKSAtIHJlY3RCLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRZKCkgPD0gcmVjdEEuZ2V0WSgpKSAmJiAocmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xyXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC9cclxuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcclxuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXHJcbiAgaWYgKChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAmJlxyXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxyXG4gIHtcclxuICAgIC8vIGFzc3VtZSB0aGUgc2xvcGUgaXMgMSAoNDUgZGVncmVlKVxyXG4gICAgc2xvcGUgPSAxLjA7XHJcbiAgfVxyXG5cclxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcclxuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcclxuICBpZiAob3ZlcmxhcEFtb3VudFswXSA8IG1vdmVCeVgpXHJcbiAge1xyXG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBtb3ZlQnlZID0gb3ZlcmxhcEFtb3VudFsxXTtcclxuICB9XHJcbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXHJcbiAgLy8gYW1vdW50cyBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zLCBvdmVybGFwIHdpbGwgYmUgcmVzb2x2ZWRcclxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxuICBvdmVybGFwQW1vdW50WzFdID0gLTEgKiBkaXJlY3Rpb25zWzFdICogKChtb3ZlQnlZIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxufVxyXG5cclxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucylcclxue1xyXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XHJcbiAgfVxyXG5cclxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpXHJcbntcclxuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcclxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xyXG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XHJcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcclxuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xyXG5cclxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcclxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpXHJcbiAge1xyXG4gICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgcmVzdWx0WzFdID0gcDF5O1xyXG4gICAgcmVzdWx0WzJdID0gcDJ4O1xyXG4gICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxyXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxyXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcclxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XHJcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXHJcbiAgaWYgKHAxeCA9PSBwMngpXHJcbiAge1xyXG4gICAgaWYgKHAxeSA+IHAyeSlcclxuICAgIHtcclxuICAgICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcclxuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcclxuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xyXG4gICAgICByZXN1bHRbMl0gPSBwMng7XHJcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvL25vdCBsaW5lLCByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gbGluZSBpcyBob3Jpem9udGFsXHJcbiAgZWxzZSBpZiAocDF5ID09IHAyeSlcclxuICB7XHJcbiAgICBpZiAocDF4ID4gcDJ4KVxyXG4gICAge1xyXG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXggPCBwMngpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xyXG4gICAgICByZXN1bHRbM10gPSBwMnk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy9ub3QgdmFsaWQgbGluZSwgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xyXG4gICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xyXG4gICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xyXG5cclxuICAgIC8vc2xvcGUgb2YgbGluZSBiZXR3ZWVuIGNlbnRlciBvZiByZWN0QSBhbmQgY2VudGVyIG9mIHJlY3RCXHJcbiAgICB2YXIgc2xvcGVQcmltZSA9IChwMnkgLSBwMXkpIC8gKHAyeCAtIHAxeCk7XHJcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xyXG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQjtcclxuICAgIHZhciB0ZW1wUG9pbnRBeDtcclxuICAgIHZhciB0ZW1wUG9pbnRBeTtcclxuICAgIHZhciB0ZW1wUG9pbnRCeDtcclxuICAgIHZhciB0ZW1wUG9pbnRCeTtcclxuXHJcbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcclxuICAgIGlmICgoLXNsb3BlQSkgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbG9wZUEgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXHJcbiAgICBpZiAoKC1zbG9wZUIpID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21MZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcclxuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcclxuICAgIGlmIChwMXggPiBwMngpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXHJcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcclxuICAgIHtcclxuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XHJcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xyXG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQilcclxuICAgICAge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcclxuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21SaWdodEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IGJvdHRvbUxlZnRCeTtcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XHJcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tTGVmdEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbklHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzbG9wZSwgc2xvcGVQcmltZSwgbGluZSlcclxue1xyXG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXHJcbiAge1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChzMSwgczIsIGYxLCBmMilcclxue1xyXG4gIGlmIChmMiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XHJcbiAgfVxyXG4gIHZhciB4MSA9IHMxLng7XHJcbiAgdmFyIHkxID0gczEueTtcclxuICB2YXIgeDIgPSBzMi54O1xyXG4gIHZhciB5MiA9IHMyLnk7XHJcbiAgdmFyIHgzID0gZjEueDtcclxuICB2YXIgeTMgPSBmMS55O1xyXG4gIHZhciB4NCA9IGYyLng7XHJcbiAgdmFyIHk0ID0gZjIueTtcclxuICB2YXIgeCwgeTsgLy8gaW50ZXJzZWN0aW9uIHBvaW50XHJcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXHJcbiAgdmFyIGRlbm9tO1xyXG5cclxuICBhMSA9IHkyIC0geTE7XHJcbiAgYjEgPSB4MSAtIHgyO1xyXG4gIGMxID0geDIgKiB5MSAtIHgxICogeTI7ICAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XHJcblxyXG4gIGEyID0geTQgLSB5MztcclxuICBiMiA9IHgzIC0geDQ7XHJcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cclxuXHJcbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcclxuXHJcbiAgaWYgKGRlbm9tID09IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xyXG4gIHkgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gZGVub207XHJcblxyXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKipcclxuICogU29tZSB1c2VmdWwgcHJlLWNhbGN1bGF0ZWQgY29uc3RhbnRzXHJcbiAqL1xyXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XHJcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xyXG5JR2VvbWV0cnkuVFdPX1BJID0gMi4wICogTWF0aC5QSTtcclxuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSUdlb21ldHJ5O1xyXG4iLCJmdW5jdGlvbiBJTWF0aCgpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxyXG4gKi9cclxuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA+IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHZhbHVlIDwgMClcclxuICB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuXHJcbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcclxufVxyXG5cclxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSU1hdGg7XHJcbiIsImZ1bmN0aW9uIEludGVnZXIoKSB7XHJcbn1cclxuXHJcbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcclxuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcclxuIiwiLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cclxuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xyXG4gIHRoaXMueCA9IG51bGw7XHJcbiAgdGhpcy55ID0gbnVsbDtcclxuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gIH1cclxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuICBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XHJcbiAgICBwID0geDtcclxuICAgIHRoaXMueCA9IHAueDtcclxuICAgIHRoaXMueSA9IHAueTtcclxuICB9XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxufVxyXG5cclxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcclxuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xyXG4gICAgcCA9IHg7XHJcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XHJcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cclxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcclxuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XHJcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoeSArIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xyXG4gIHRoaXMueCArPSBkeDtcclxuICB0aGlzLnkgKz0gZHk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xyXG4gICAgdmFyIHB0ID0gb2JqO1xyXG4gICAgcmV0dXJuICh0aGlzLnggPT0gcHQueCkgJiYgKHRoaXMueSA9PSBwdC55KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQb2ludCgpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xyXG4iLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xyXG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueDtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXHJcbntcclxuICB0aGlzLnkgPSB5O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxyXG57XHJcbiAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIHB0LngsIHRoaXMueSAtIHB0LnkpO1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSlcclxue1xyXG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XHJcbiAgdGhpcy55ICs9IGRpbS5oZWlnaHQ7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcclxuIiwiZnVuY3Rpb24gUmFuZG9tU2VlZCgpIHtcclxufVxyXG5SYW5kb21TZWVkLnNlZWQgPSAxO1xyXG5SYW5kb21TZWVkLnggPSAwO1xyXG5cclxuUmFuZG9tU2VlZC5uZXh0RG91YmxlID0gZnVuY3Rpb24gKCkge1xyXG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xyXG4gIHJldHVybiBSYW5kb21TZWVkLnggLSBNYXRoLmZsb29yKFJhbmRvbVNlZWQueCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmRvbVNlZWQ7XHJcbiIsImZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIHRoaXMueCA9IDA7XHJcbiAgdGhpcy55ID0gMDtcclxuICB0aGlzLndpZHRoID0gMDtcclxuICB0aGlzLmhlaWdodCA9IDA7XHJcblxyXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdGhpcy55ID0geTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLndpZHRoO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXHJcbntcclxuICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcclxue1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxyXG57XHJcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueClcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSlcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdldFgoKTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZUQ7XHJcbiIsInZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xyXG5cclxuZnVuY3Rpb24gVHJhbnNmb3JtKHgsIHkpIHtcclxuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XHJcbiAgdGhpcy5sd29ybGRPcmdZID0gMC4wO1xyXG4gIHRoaXMubGRldmljZU9yZ1ggPSAwLjA7XHJcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcclxuICB0aGlzLmx3b3JsZEV4dFggPSAxLjA7XHJcbiAgdGhpcy5sd29ybGRFeHRZID0gMS4wO1xyXG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XHJcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IDEuMDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KVxyXG57XHJcbiAgdGhpcy5sd29ybGRPcmdYID0gd294O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICh3b3kpXHJcbntcclxuICB0aGlzLmx3b3JsZE9yZ1kgPSB3b3k7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKHdleClcclxue1xyXG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KVxyXG57XHJcbiAgdGhpcy5sd29ybGRFeHRZID0gd2V5O1xyXG59XHJcblxyXG4vKiBEZXZpY2UgcmVsYXRlZCAqL1xyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IGRveDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoZG95KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IGRveTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFggPSBmdW5jdGlvbiAoZGV4KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IGRleTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB2YXIgeERldmljZSA9IDAuMDtcclxuICB2YXIgd29ybGRFeHRYID0gdGhpcy5sd29ybGRFeHRYO1xyXG4gIGlmICh3b3JsZEV4dFggIT0gMC4wKVxyXG4gIHtcclxuICAgIHhEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdYICtcclxuICAgICAgICAgICAgKCh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHhEZXZpY2U7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdmFyIHlEZXZpY2UgPSAwLjA7XHJcbiAgdmFyIHdvcmxkRXh0WSA9IHRoaXMubHdvcmxkRXh0WTtcclxuICBpZiAod29ybGRFeHRZICE9IDAuMClcclxuICB7XHJcbiAgICB5RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWSArXHJcbiAgICAgICAgICAgICgoeSAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gd29ybGRFeHRZKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4geURldmljZTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxyXG57XHJcbiAgdmFyIHhXb3JsZCA9IDAuMDtcclxuICB2YXIgZGV2aWNlRXh0WCA9IHRoaXMubGRldmljZUV4dFg7XHJcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKVxyXG4gIHtcclxuICAgIHhXb3JsZCA9IHRoaXMubHdvcmxkT3JnWCArXHJcbiAgICAgICAgICAgICgoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHhXb3JsZDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdmFyIHlXb3JsZCA9IDAuMDtcclxuICB2YXIgZGV2aWNlRXh0WSA9IHRoaXMubGRldmljZUV4dFk7XHJcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKVxyXG4gIHtcclxuICAgIHlXb3JsZCA9IHRoaXMubHdvcmxkT3JnWSArXHJcbiAgICAgICAgICAgICgoeSAtIHRoaXMubGRldmljZU9yZ1kpICogdGhpcy5sd29ybGRFeHRZIC8gZGV2aWNlRXh0WSk7XHJcbiAgfVxyXG4gIHJldHVybiB5V29ybGQ7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpXHJcbntcclxuICB2YXIgb3V0UG9pbnQgPVxyXG4gICAgICAgICAgbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XHJcbiAgcmV0dXJuIG91dFBvaW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcclxuIiwiY29uc3QgTGlua2VkTGlzdCA9IHJlcXVpcmUoJy4vTGlua2VkTGlzdC5qcycpO1xuXG5mdW5jdGlvbiBRdWlja3NvcnQoKXtcblxufVxuXG5RdWlja3NvcnQuZ2V0X29iamVjdF9hdCA9ICBmdW5jdGlvbihsaXN0LCBpKXtcbiAgICBpZiggbGlzdCBpbnN0YW5jZW9mIFtdKXtcbiAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgfVxuICAgIGVsc2UgaWYobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3Qpe1xuICAgICAgICByZXR1cm4gbGlzdC5nZXRfb2JqZWN0X2F0KGkpO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5zZXRfb2JqZWN0X2F0ID0gIGZ1bmN0aW9uKGxpc3QsIGksIHZhbHVlKXtcbiAgICBpZiggbGlzdCBpbnN0YW5jZW9mIFtdKXtcbiAgICAgICAgbGlzdFtpXSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KXtcbiAgICAgICAgbGlzdC5zZXRfb2JqZWN0X2F0KGksIHZhbHVlKTtcbiAgICB9XG59O1xuXG5RdWlja3NvcnQucXVpY2tzb3J0ID0gZnVuY3Rpb24obGlzdCwgY29tcGFyaXNvbl9mbil7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEgKCAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHx8ICggbGlzdCBpbnN0YW5jZW9mIFtdKSkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cdHZhciBjb21wYXJpc29uX2Z1bmN0aW9uID0gY29tcGFyaXNvbl9mbjtcblx0XG4gICAgaWYoIGNvbXBhcmlzb25fZnVuY3Rpb24gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBRdWlja3NvcnQuY29tcGFyZTtcbiAgICB9XG4gICAgdmFyIGVuZF9pbmRleDtcblxuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCl7XG4gICAgICAgIGVuZF9pbmRleCA9IGxpc3Quc2l6ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmKCBsaXN0IGluc3RhbmNlb2YgW10gKXtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5sZW5ndGgtMTtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGVtcHR5IGxpc3RzIG9yIGFycmF5cy5cbiAgICBpZiAoZW5kX2luZGV4ID49IDApe1xuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCAwLCBlbmRfaW5kZXgsIGNvbXBhcmlzb25fZnVuY3Rpb24pO1xuICAgIH1cblxufTtcblxuXG5RdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyA9IGZ1bmN0aW9uKGxpc3QsIGxvdywgaGlnaCwgY29tcGFyaXNvbl9mbil7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEgKCAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHx8ICggbGlzdCBpbnN0YW5jZW9mIFtdKSkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoY29tcGFyaXNvbl9mbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29tcGFyaXNvbl9mbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cblxuICAgIHZhciBpID0gbG93O1xuICAgIHZhciBqID0gaGlnaDtcbiAgICB2YXIgbWlkZGxlSW5kZXggPSAoIGkgKyBqICkgLyAyO1xuICAgIHZhciBtaWRkbGUgPSBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBtaWRkbGVJbmRleCk7XG5cbiAgICBkb1xuICAgIHtcblxuICAgICAgICB3aGlsZSAoY29tcGFyaXNvbl9mbihRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBpKSwgbWlkZGxlKSl7XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGNvbXBhcmlzb25fZm4obWlkZGxlLCBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBqKSkpe1xuXG4gICAgICAgICAgICBqLS07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpIDw9IGope1xuXG4gICAgICAgICAgICB2YXIgdGVtcCA9IFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpO1xuICAgICAgICAgICAgUXVpY2tzb3J0LnNldF9vYmplY3RfYXQobGlzdCwgaSwgUXVpY2tzb3J0LmdldE9iamVjdEF0KGopKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGosIHRlbXApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuXG4gICAgICAgIH1cblxuICAgIH0gd2hpbGUgKGk8PWopO1xuXG4gICAgaWYoIGxvdyA8IGogKXtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsb3csIGopO1xuXG4gICAgfVxuXG4gICAgaWYoIGhpZ2ggPiBpKXtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhpLCBoaWdoKTtcblxuICAgIH1cblxufTtcblxuLy8gdGhpcyBmdW5jdGlvbiBtdXN0IGJlIG92ZXJyaWRlbiBmb3Igc29ydGluZyBkaWZmZXJlbnQgZGF0YSB0eXBlcyhlLmcuIHN0cmluZywgaW50ZWdlciBldGMuKVxuUXVpY2tzb3J0LmNvbXBhcmUgPSBmdW5jdGlvbihhLGIpe1xuICAgIHJldHVybiBiID4gYTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja3NvcnQ7IiwiY29uc3Qgbm9kZUZyb20gPSB2YWx1ZSA9PiAoeyB2YWx1ZSwgbmV4dDogbnVsbCwgcHJldjogbnVsbCB9KTtcclxuXHJcbmNvbnN0IGFkZCA9ICggcHJldiwgbm9kZSwgbmV4dCwgbGlzdCApID0+IHtcclxuICBpZiggcHJldiAhPT0gbnVsbCApe1xyXG4gICAgcHJldi5uZXh0ID0gbm9kZTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdC5oZWFkID0gbm9kZTtcclxuICB9XHJcblxyXG4gIGlmKCBuZXh0ICE9PSBudWxsICl7XHJcbiAgICBuZXh0LnByZXYgPSBub2RlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0LnRhaWwgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgbm9kZS5wcmV2ID0gcHJldjtcclxuICBub2RlLm5leHQgPSBuZXh0O1xyXG5cclxuICBsaXN0Lmxlbmd0aCsrO1xyXG5cclxuICByZXR1cm4gbm9kZTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZSA9ICggbm9kZSwgbGlzdCApID0+IHtcclxuICBsZXQgeyBwcmV2LCBuZXh0IH0gPSBub2RlO1xyXG5cclxuICBpZiggcHJldiAhPT0gbnVsbCApe1xyXG4gICAgcHJldi5uZXh0ID0gbmV4dDtcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdC5oZWFkID0gbmV4dDtcclxuICB9XHJcblxyXG4gIGlmKCBuZXh0ICE9PSBudWxsICl7XHJcbiAgICBuZXh0LnByZXYgPSBwcmV2O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0LnRhaWwgPSBwcmV2O1xyXG4gIH1cclxuXHJcbiAgbm9kZS5wcmV2ID0gbm9kZS5uZXh0ID0gbnVsbDtcclxuXHJcbiAgbGlzdC5sZW5ndGgtLTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn07XHJcblxyXG5jbGFzcyBMaW5rZWRMaXN0IHtcclxuICBjb25zdHJ1Y3RvciggdmFscyApe1xyXG4gICAgdGhpcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5oZWFkID0gbnVsbDtcclxuICAgIHRoaXMudGFpbCA9IG51bGw7XHJcblxyXG4gICAgaWYoIHZhbHMgIT0gbnVsbCApe1xyXG4gICAgICB2YWxzLmZvckVhY2goIHYgPT4gdGhpcy5wdXNoKHYpICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaXplKCl7XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRCZWZvcmUoIHZhbCwgb3RoZXJOb2RlICl7XHJcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRBZnRlciggdmFsLCBvdGhlck5vZGUgKXtcclxuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIGluc2VydE5vZGVCZWZvcmUoIG5ld05vZGUsIG90aGVyTm9kZSApe1xyXG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLnByZXYsIG5ld05vZGUsIG90aGVyTm9kZSwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0Tm9kZUFmdGVyKCBuZXdOb2RlLCBvdGhlck5vZGUgKXtcclxuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHB1c2goIHZhbCApe1xyXG4gICAgcmV0dXJuIGFkZCggdGhpcy50YWlsLCBub2RlRnJvbSh2YWwpLCBudWxsLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICB1bnNoaWZ0KCB2YWwgKXtcclxuICAgIHJldHVybiBhZGQoIG51bGwsIG5vZGVGcm9tKHZhbCksIHRoaXMuaGVhZCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCBub2RlICl7XHJcbiAgICByZXR1cm4gcmVtb3ZlKCBub2RlLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBwb3AoKXtcclxuICAgIHJldHVybiByZW1vdmUoIHRoaXMudGFpbCwgdGhpcyApLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcG9wTm9kZSgpe1xyXG4gICAgIHJldHVybiByZW1vdmUoIHRoaXMudGFpbCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgc2hpZnQoKXtcclxuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2hpZnROb2RlKCl7XHJcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLmhlYWQsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIGdldF9vYmplY3RfYXQoIGluZGV4ICl7XHJcbiAgICBpZihpbmRleCA8PSB0aGlzLmxlbmd0aCgpKXtcclxuICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgICAgd2hpbGUoaSA8IGluZGV4KXtcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldF9vYmplY3RfYXQoIGluZGV4LCB2YWx1ZSl7XHJcbiAgICBpZihpbmRleCA8PSB0aGlzLmxlbmd0aCgpKSB7XHJcbiAgICAgIHZhciBpID0gMTtcclxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICAgIHdoaWxlIChpIDwgaW5kZXgpIHtcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XHJcbiIsImZ1bmN0aW9uIExHcmFwaE9iamVjdCh2R3JhcGhPYmplY3QpIHtcclxuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XHJcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xyXG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vdXRpbC9JbnRlZ2VyJyk7XHJcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xyXG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xyXG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XHJcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcclxudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL3V0aWwvSGFzaFNldCcpO1xyXG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vdXRpbC9SZWN0YW5nbGVEJyk7XHJcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vdXRpbC9Qb2ludCcpO1xyXG52YXIgTGlua2VkTGlzdCA9IHJlcXVpcmUoJy4vdXRpbC9MaW5rZWRMaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBMR3JhcGgocGFyZW50LCBvYmoyLCB2R3JhcGgpIHtcclxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xyXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xyXG4gIHRoaXMubWFyZ2luID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOO1xyXG4gIHRoaXMuZWRnZXMgPSBbXTtcclxuICB0aGlzLm5vZGVzID0gW107XHJcbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMR3JhcGhNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTGF5b3V0KSB7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xyXG4gIH1cclxufVxyXG5cclxuTEdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XHJcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XHJcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xyXG59XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLm5vZGVzO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5lZGdlcztcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnBhcmVudDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sZWZ0O1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yaWdodDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnRvcDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmJvdHRvbTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XHJcbiAgaWYgKHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcclxuICAgIHZhciBuZXdOb2RlID0gb2JqMTtcclxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiR3JhcGggaGFzIG5vIGdyYXBoIG1nciFcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XHJcbiAgICAgIHRocm93IFwiTm9kZSBhbHJlYWR5IGluIGdyYXBoIVwiO1xyXG4gICAgfVxyXG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XHJcbiAgICB0aGlzLmdldE5vZGVzKCkucHVzaChuZXdOb2RlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3Tm9kZTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XHJcbiAgICBpZiAoISh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihzb3VyY2VOb2RlKSA+IC0xICYmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih0YXJnZXROb2RlKSkgPiAtMSkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlTm9kZS5vd25lciAhPSB0YXJnZXROb2RlLm93bmVyKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcclxuICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcclxuICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcclxuXHJcbiAgICAvLyBzZXQgYXMgaW50cmEtZ3JhcGggZWRnZVxyXG4gICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcclxuXHJcbiAgICAvLyBhZGQgdG8gZ3JhcGggZWRnZSBsaXN0XHJcbiAgICB0aGlzLmdldEVkZ2VzKCkucHVzaChuZXdFZGdlKTtcclxuXHJcbiAgICAvLyBhZGQgdG8gaW5jaWRlbmN5IGxpc3RzXHJcbiAgICBzb3VyY2VOb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgaWYgKHRhcmdldE5vZGUgIT0gc291cmNlTm9kZSlcclxuICAgIHtcclxuICAgICAgdGFyZ2V0Tm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdFZGdlO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIHZhciBub2RlID0gb2JqO1xyXG4gIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xyXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIk5vZGUgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XHJcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggaXMgaW52YWxpZCFcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggbWFuYWdlciBpcyBpbnZhbGlkIVwiO1xyXG4gICAgfVxyXG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXHJcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IG5vZGUuZWRnZXMuc2xpY2UoKTtcclxuICAgIHZhciBlZGdlO1xyXG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gICAge1xyXG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcclxuXHJcbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBub3cgdGhlIG5vZGUgaXRzZWxmXHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLm5vZGVzLmluZGV4T2Yobm9kZSk7XHJcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xyXG4gICAgdmFyIGVkZ2UgPSBvYmo7XHJcbiAgICBpZiAoZWRnZSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBlZGdlLnRhcmdldCAhPSBudWxsKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2UudGFyZ2V0Lm93bmVyICE9IG51bGwgJiZcclxuICAgICAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIgPT0gdGhpcyAmJiBlZGdlLnRhcmdldC5vd25lciA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIHZhciB0YXJnZXRJbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBpZiAoIShzb3VyY2VJbmRleCA+IC0xICYmIHRhcmdldEluZGV4ID4gLTEpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcclxuICAgIH1cclxuXHJcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xyXG5cclxuICAgIGlmIChlZGdlLnRhcmdldCAhPSBlZGdlLnNvdXJjZSlcclxuICAgIHtcclxuICAgICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLmluZGV4T2YoZWRnZSk7XHJcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIncyBlZGdlIGxpc3QhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlTGVmdFRvcCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgbm9kZVRvcDtcclxuICB2YXIgbm9kZUxlZnQ7XHJcbiAgdmFyIG1hcmdpbjtcclxuXHJcbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcclxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xyXG5cclxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxyXG4gICAge1xyXG4gICAgICB0b3AgPSBub2RlVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXHJcbiAgICB7XHJcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERvIHdlIGhhdmUgYW55IG5vZGVzIGluIHRoaXMgZ3JhcGg/XHJcbiAgaWYgKHRvcCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcclxuICB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5sZWZ0ID0gbGVmdCAtIG1hcmdpbjtcclxuICB0aGlzLnRvcCA9IHRvcCAtIG1hcmdpbjtcclxuXHJcbiAgLy8gQXBwbHkgdGhlIG1hcmdpbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0XHJcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSlcclxue1xyXG4gIC8vIGNhbGN1bGF0ZSBib3VuZHNcclxuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgbm9kZUxlZnQ7XHJcbiAgdmFyIG5vZGVSaWdodDtcclxuICB2YXIgbm9kZVRvcDtcclxuICB2YXIgbm9kZUJvdHRvbTtcclxuICB2YXIgbWFyZ2luO1xyXG5cclxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xyXG5cclxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XHJcbiAgICB9XHJcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcclxuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XHJcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XHJcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XHJcblxyXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcclxuICAgIHtcclxuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodClcclxuICAgIHtcclxuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXHJcbiAgICB7XHJcbiAgICAgIHRvcCA9IG5vZGVUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXHJcbiAgICB7XHJcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XHJcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpXHJcbiAge1xyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5wYXJlbnQuZ2V0TGVmdCgpO1xyXG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XHJcbiAgICB0aGlzLnRvcCA9IHRoaXMucGFyZW50LmdldFRvcCgpO1xyXG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLnBhcmVudC5nZXRCb3R0b20oKTtcclxuICB9XHJcblxyXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XHJcbiAgdGhpcy5yaWdodCA9IGJvdW5kaW5nUmVjdC54ICsgYm91bmRpbmdSZWN0LndpZHRoICsgbWFyZ2luO1xyXG4gIHRoaXMudG9wID0gYm91bmRpbmdSZWN0LnkgLSBtYXJnaW47XHJcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XHJcbn07XHJcblxyXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKVxyXG57XHJcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIG5vZGVMZWZ0O1xyXG4gIHZhciBub2RlUmlnaHQ7XHJcbiAgdmFyIG5vZGVUb3A7XHJcbiAgdmFyIG5vZGVCb3R0b207XHJcblxyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xyXG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcclxuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcclxuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcclxuXHJcbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxyXG4gICAge1xyXG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxyXG4gICAge1xyXG4gICAgICByaWdodCA9IG5vZGVSaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9wID4gbm9kZVRvcClcclxuICAgIHtcclxuICAgICAgdG9wID0gbm9kZVRvcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcclxuICAgIHtcclxuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcclxuXHJcbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSlcclxuICB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBzaXplID0gMDtcclxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgIHNpemUgKz0gbE5vZGUuY2FsY0VzdGltYXRlZFNpemUoKTtcclxuICB9XHJcblxyXG4gIGlmIChzaXplID09IDApXHJcbiAge1xyXG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHNpemUgLyBNYXRoLnNxcnQodGhpcy5ub2Rlcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBzZWxmID0gdGhpcztcclxuICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMClcclxuICB7XHJcbiAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciB0b0JlVmlzaXRlZCA9IG5ldyBMaW5rZWRMaXN0KCk7XHJcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xyXG4gIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMubm9kZXNbMF07XHJcbiAgdmFyIG5laWdoYm9yRWRnZXM7XHJcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcclxuICB2YXIgY2hpbGRyZW5PZk5vZGUgPSBjdXJyZW50Tm9kZS53aXRoQ2hpbGRyZW4oKTtcclxuICBjaGlsZHJlbk9mTm9kZS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggIT09IDApXHJcbiAge1xyXG4gICAgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZC5zaGlmdCgpO1xyXG4gICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xyXG5cclxuICAgIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXHJcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcclxuICAgIHZhciBzID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgdmFyIG5laWdoYm9yRWRnZSA9IG5laWdoYm9yRWRnZXNbaV07XHJcbiAgICAgIGN1cnJlbnROZWlnaGJvciA9XHJcbiAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlLmdldE90aGVyRW5kSW5HcmFwaChjdXJyZW50Tm9kZSwgdGhpcyk7XHJcblxyXG4gICAgICAvLyBBZGQgdW52aXNpdGVkIG5laWdoYm9ycyB0byB0aGUgbGlzdCB0byB2aXNpdFxyXG4gICAgICBpZiAoY3VycmVudE5laWdoYm9yICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAhdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuT2ZOZWlnaGJvciA9IGN1cnJlbnROZWlnaGJvci53aXRoQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgY2hpbGRyZW5PZk5laWdoYm9yLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICBpZiAodmlzaXRlZC5zaXplKCkgPj0gdGhpcy5ub2Rlcy5sZW5ndGgpXHJcbiAge1xyXG4gICAgdmFyIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPSAwO1xyXG5cclxuICAgIHZhciBzID0gdmlzaXRlZC5zaXplKCk7XHJcbiAgICAgT2JqZWN0LmtleXModmlzaXRlZC5zZXQpLmZvckVhY2goZnVuY3Rpb24odmlzaXRlZElkKSB7XHJcbiAgICAgIHZhciB2aXNpdGVkTm9kZSA9IHZpc2l0ZWQuc2V0W3Zpc2l0ZWRJZF07XHJcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKVxyXG4gICAgICB7XHJcbiAgICAgICAgbm9PZlZpc2l0ZWRJblRoaXNHcmFwaCsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9PSB0aGlzLm5vZGVzLmxlbmd0aClcclxuICAgIHtcclxuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGg7XHJcbiIsImZ1bmN0aW9uIExheW91dENvbnN0YW50cygpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIExheW91dCBRdWFsaXR5XHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSA9IDA7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFkgPSAxO1xyXG5MYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSA9IDI7XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBwYXJhbWV0ZXJzXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gZmFsc2U7XHJcbi8vTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSB0cnVlO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IGZhbHNlO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUID0gdHJ1ZTtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQgPSBmYWxzZTtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCA9IDUwO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IGZhbHNlO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2VjdGlvbjogR2VuZXJhbCBvdGhlciBjb25zdGFudHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLypcclxuICogTWFyZ2lucyBvZiBhIGdyYXBoIHRvIGJlIGFwcGxpZWQgb24gYm91ZGluZyByZWN0YW5nbGUgb2YgaXRzIGNvbnRlbnRzLiBXZVxyXG4gKiBhc3N1bWUgbWFyZ2lucyBvbiBhbGwgZm91ciBzaWRlcyB0byBiZSB1bmlmb3JtLlxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOID0gMTU7XHJcblxyXG4vKlxyXG4gKiBXaGV0aGVyIHRvIGNvbnNpZGVyIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnMgb3Igbm90XHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XHJcblxyXG4vKlxyXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgPSA0MDtcclxuXHJcbi8qXHJcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfSEFMRl9TSVpFID0gTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgLyAyO1xyXG5cclxuLypcclxuICogRW1wdHkgY29tcG91bmQgbm9kZSBzaXplLiBXaGVuIGEgY29tcG91bmQgbm9kZSBpcyBlbXB0eSwgaXRzIGJvdGhcclxuICogZGltZW5zaW9ucyBzaG91bGQgYmUgb2YgdGhpcyB2YWx1ZS5cclxuICovXHJcbkxheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MDtcclxuXHJcbi8qXHJcbiAqIE1pbmltdW0gbGVuZ3RoIHRoYXQgYW4gZWRnZSBzaG91bGQgdGFrZSBkdXJpbmcgbGF5b3V0XHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcclxuXHJcbi8qXHJcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCBsYXlvdXQgb3BlcmF0ZXMgb25cclxuICovXHJcbkxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSA9IDEwMDAwMDA7XHJcblxyXG4vKlxyXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgcmFuZG9tIHBvc2l0aW9uaW5nIGNhbiBiZSBwZXJmb3JtZWQgd2l0aFxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgLyAxMDAwO1xyXG5cclxuLypcclxuICogQ29vcmRpbmF0ZXMgb2YgdGhlIHdvcmxkIGNlbnRlclxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcclxuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZID0gOTAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XHJcbiIsInZhciBMR3JhcGg7XHJcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcclxuXHJcbmZ1bmN0aW9uIExHcmFwaE1hbmFnZXIobGF5b3V0KSB7XHJcbiAgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTsgLy8gSXQgbWF5IGJlIGJldHRlciB0byBpbml0aWxpemUgdGhpcyBvdXQgb2YgdGhpcyBmdW5jdGlvbiBidXQgaXQgZ2l2ZXMgYW4gZXJyb3IgKFJpZ2h0LWhhbmQgc2lkZSBvZiAnaW5zdGFuY2VvZicgaXMgbm90IGNhbGxhYmxlKSBub3cuXHJcbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XHJcblxyXG4gIHRoaXMuZ3JhcGhzID0gW107XHJcbiAgdGhpcy5lZGdlcyA9IFtdO1xyXG59XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGRSb290ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBuZ3JhcGggPSB0aGlzLmxheW91dC5uZXdHcmFwaCgpO1xyXG4gIHZhciBubm9kZSA9IHRoaXMubGF5b3V0Lm5ld05vZGUobnVsbCk7XHJcbiAgdmFyIHJvb3QgPSB0aGlzLmFkZChuZ3JhcGgsIG5ub2RlKTtcclxuICB0aGlzLnNldFJvb3RHcmFwaChyb290KTtcclxuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmV3R3JhcGgsIHBhcmVudE5vZGUsIG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpXHJcbntcclxuICAvL3RoZXJlIGFyZSBqdXN0IDIgcGFyYW1ldGVycyBhcmUgcGFzc2VkIHRoZW4gaXQgYWRkcyBhbiBMR3JhcGggZWxzZSBpdCBhZGRzIGFuIExFZGdlXHJcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XHJcbiAgICBpZiAobmV3R3JhcGggPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIkdyYXBoIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiUGFyZW50IG5vZGUgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXBocy5pbmRleE9mKG5ld0dyYXBoKSA+IC0xKSB7XHJcbiAgICAgIHRocm93IFwiR3JhcGggYWxyZWFkeSBpbiB0aGlzIGdyYXBoIG1nciFcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdyYXBocy5wdXNoKG5ld0dyYXBoKTtcclxuXHJcbiAgICBpZiAobmV3R3JhcGgucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJBbHJlYWR5IGhhcyBhIHBhcmVudCFcIjtcclxuICAgIH1cclxuICAgIGlmIChwYXJlbnROb2RlLmNoaWxkICE9IG51bGwpIHtcclxuICAgICAgdGhyb3cgIFwiQWxyZWFkeSBoYXMgYSBjaGlsZCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZXdHcmFwaC5wYXJlbnQgPSBwYXJlbnROb2RlO1xyXG4gICAgcGFyZW50Tm9kZS5jaGlsZCA9IG5ld0dyYXBoO1xyXG5cclxuICAgIHJldHVybiBuZXdHcmFwaDtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICAvL2NoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIHBhcmFtZXRlcnNcclxuICAgIHRhcmdldE5vZGUgPSBuZXdFZGdlO1xyXG4gICAgc291cmNlTm9kZSA9IHBhcmVudE5vZGU7XHJcbiAgICBuZXdFZGdlID0gbmV3R3JhcGg7XHJcbiAgICB2YXIgc291cmNlR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XHJcbiAgICB2YXIgdGFyZ2V0R3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XHJcblxyXG4gICAgaWYgKCEoc291cmNlR3JhcGggIT0gbnVsbCAmJiBzb3VyY2VHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoISh0YXJnZXRHcmFwaCAhPSBudWxsICYmIHRhcmdldEdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XHJcbiAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlR3JhcGggPT0gdGFyZ2V0R3JhcGgpXHJcbiAgICB7XHJcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBzb3VyY2VHcmFwaC5hZGQobmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxyXG4gICAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XHJcbiAgICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcclxuXHJcbiAgICAgIC8vIGFkZCBlZGdlIHRvIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxyXG4gICAgICBpZiAodGhpcy5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID4gLTEpIHtcclxuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcclxuXHJcbiAgICAgIC8vIGFkZCBlZGdlIHRvIHNvdXJjZSBhbmQgdGFyZ2V0IGluY2lkZW5jeSBsaXN0c1xyXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZSAhPSBudWxsICYmIG5ld0VkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEgJiYgbmV3RWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSkpIHtcclxuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBzb3VyY2UgYW5kL29yIHRhcmdldCBpbmNpZGVuY3kgbGlzdCFcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3RWRnZS5zb3VyY2UuZWRnZXMucHVzaChuZXdFZGdlKTtcclxuICAgICAgbmV3RWRnZS50YXJnZXQuZWRnZXMucHVzaChuZXdFZGdlKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdFZGdlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChsT2JqKSB7XHJcbiAgaWYgKGxPYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcclxuICAgIHZhciBncmFwaCA9IGxPYmo7XHJcbiAgICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xyXG4gICAgICB0aHJvdyBcIkdyYXBoIG5vdCBpbiB0aGlzIGdyYXBoIG1nclwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZ3JhcGggPT0gdGhpcy5yb290R3JhcGggfHwgKGdyYXBoLnBhcmVudCAhPSBudWxsICYmIGdyYXBoLnBhcmVudC5ncmFwaE1hbmFnZXIgPT0gdGhpcykpKSB7XHJcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcclxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gW107XHJcblxyXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xyXG5cclxuICAgIHZhciBlZGdlO1xyXG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gICAge1xyXG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcclxuICAgICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZW4gdGhlIG5vZGVzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXHJcbiAgICB2YXIgbm9kZXNUb0JlUmVtb3ZlZCA9IFtdO1xyXG5cclxuICAgIG5vZGVzVG9CZVJlbW92ZWQgPSBub2Rlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXROb2RlcygpKTtcclxuXHJcbiAgICB2YXIgbm9kZTtcclxuICAgIHMgPSBub2Rlc1RvQmVSZW1vdmVkLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gICAge1xyXG4gICAgICBub2RlID0gbm9kZXNUb0JlUmVtb3ZlZFtpXTtcclxuICAgICAgZ3JhcGgucmVtb3ZlKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGdyYXBoIGlzIHRoZSByb290XHJcbiAgICBpZiAoZ3JhcGggPT0gdGhpcy5yb290R3JhcGgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc2V0Um9vdEdyYXBoKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5vdyByZW1vdmUgdGhlIGdyYXBoIGl0c2VsZlxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XHJcbiAgICB0aGlzLmdyYXBocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcclxuICAgIGdyYXBoLnBhcmVudCA9IG51bGw7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xyXG4gICAgZWRnZSA9IGxPYmo7XHJcbiAgICBpZiAoZWRnZSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCFlZGdlLmlzSW50ZXJHcmFwaCkge1xyXG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBlZGdlLnRhcmdldCAhPSBudWxsKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXHJcblxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSAmJiBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gb3duZXIgZ3JhcGggbWFuYWdlcidzIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxyXG5cclxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gbnVsbCkpIHtcclxuICAgICAgdGhyb3cgXCJFZGdlIG93bmVyIGdyYXBoIG9yIG93bmVyIGdyYXBoIG1hbmFnZXIgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmIChlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpID09IC0xKSB7XHJcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyIGdyYXBoIG1hbmFnZXIncyBlZGdlIGxpc3QhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMucm9vdEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEdyYXBocyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5ncmFwaHM7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5hbGxOb2RlcyA9PSBudWxsKVxyXG4gIHtcclxuICAgIHZhciBub2RlTGlzdCA9IFtdO1xyXG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XHJcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldE5vZGVzKCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbGxOb2RlcyA9IG5vZGVMaXN0O1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hbGxOb2RlcztcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5hbGxOb2RlcyA9IG51bGw7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbnVsbDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzLmFsbEVkZ2VzID09IG51bGwpXHJcbiAge1xyXG4gICAgdmFyIGVkZ2VMaXN0ID0gW107XHJcbiAgICB2YXIgZ3JhcGhzID0gdGhpcy5nZXRHcmFwaHMoKTtcclxuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0RWRnZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGhpcy5lZGdlcyk7XHJcblxyXG4gICAgdGhpcy5hbGxFZGdlcyA9IGVkZ2VMaXN0O1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hbGxFZGdlcztcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpXHJcbntcclxuICBpZiAodGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiAhPSBudWxsKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcblxyXG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBub2RlTGlzdDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24gKGdyYXBoKVxyXG57XHJcbiAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcclxuICAgIHRocm93IFwiUm9vdCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XHJcbiAgfVxyXG5cclxuICB0aGlzLnJvb3RHcmFwaCA9IGdyYXBoO1xyXG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcclxuICBpZiAoZ3JhcGgucGFyZW50ID09IG51bGwpXHJcbiAge1xyXG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGF5b3V0O1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaXNPbmVBbmNlc3Rvck9mT3RoZXIgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxyXG57XHJcbiAgaWYgKCEoZmlyc3ROb2RlICE9IG51bGwgJiYgc2Vjb25kTm9kZSAhPSBudWxsKSkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXHJcbiAge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIElzIHNlY29uZCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBmaXJzdCBvbmU/XHJcbiAgdmFyIG93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcclxuICB2YXIgcGFyZW50Tm9kZTtcclxuXHJcbiAgZG9cclxuICB7XHJcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBzZWNvbmROb2RlKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xyXG4gICAgaWYgKG93bmVyR3JhcGggPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSB3aGlsZSAodHJ1ZSk7XHJcbiAgLy8gSXMgZmlyc3Qgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgc2Vjb25kIG9uZT9cclxuICBvd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xyXG5cclxuICBkb1xyXG4gIHtcclxuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJlbnROb2RlID09IGZpcnN0Tm9kZSlcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcclxuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gd2hpbGUgKHRydWUpO1xyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBlZGdlO1xyXG4gIHZhciBzb3VyY2VOb2RlO1xyXG4gIHZhciB0YXJnZXROb2RlO1xyXG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xyXG4gIHZhciB0YXJnZXRBbmNlc3RvckdyYXBoO1xyXG5cclxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XHJcbiAgdmFyIHMgPSBlZGdlcy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgZWRnZSA9IGVkZ2VzW2ldO1xyXG5cclxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcclxuICAgIHRhcmdldE5vZGUgPSBlZGdlLnRhcmdldDtcclxuICAgIGVkZ2UubGNhID0gbnVsbDtcclxuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xyXG4gICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7XHJcblxyXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSlcclxuICAgIHtcclxuICAgICAgZWRnZS5sY2EgPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XHJcblxyXG4gICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlOyAgXHJcbiAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XHJcblxyXG4gICAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHNvdXJjZUFuY2VzdG9yR3JhcGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZWRnZS5sY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGdlLmxjYSAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IGVkZ2UudGFyZ2V0SW5MY2EuZ2V0T3duZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNvdXJjZUFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXHJcbiAgICAgIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVkZ2UubGNhID09IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlQW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcclxuICAgICAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gZWRnZS5zb3VyY2VJbkxjYS5nZXRPd25lcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcclxue1xyXG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSlcclxuICB7XHJcbiAgICByZXR1cm4gZmlyc3ROb2RlLmdldE93bmVyKCk7XHJcbiAgfVxyXG4gIHZhciBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgZG9cclxuICB7XHJcbiAgICBpZiAoZmlyc3RPd25lckdyYXBoID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XHJcblxyXG4gICAgZG9cclxuICAgIHtcclxuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2Vjb25kT3duZXJHcmFwaCA9PSBmaXJzdE93bmVyR3JhcGgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXR1cm4gc2Vjb25kT3duZXJHcmFwaDtcclxuICAgICAgfVxyXG4gICAgICBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kT3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xyXG4gICAgfSB3aGlsZSAodHJ1ZSk7XHJcblxyXG4gICAgZmlyc3RPd25lckdyYXBoID0gZmlyc3RPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XHJcbiAgfSB3aGlsZSAodHJ1ZSk7XHJcblxyXG4gIHJldHVybiBmaXJzdE93bmVyR3JhcGg7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyA9IGZ1bmN0aW9uIChncmFwaCwgZGVwdGgpIHtcclxuICBpZiAoZ3JhcGggPT0gbnVsbCAmJiBkZXB0aCA9PSBudWxsKSB7XHJcbiAgICBncmFwaCA9IHRoaXMucm9vdEdyYXBoO1xyXG4gICAgZGVwdGggPSAxO1xyXG4gIH1cclxuICB2YXIgbm9kZTtcclxuXHJcbiAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcclxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICBub2RlLmluY2x1c2lvblRyZWVEZXB0aCA9IGRlcHRoO1xyXG5cclxuICAgIGlmIChub2RlLmNoaWxkICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMobm9kZS5jaGlsZCwgZGVwdGggKyAxKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBlZGdlO1xyXG5cclxuICB2YXIgcyA9IHRoaXMuZWRnZXMubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIGVkZ2UgPSB0aGlzLmVkZ2VzW2ldO1xyXG5cclxuICAgIGlmICh0aGlzLmlzT25lQW5jZXN0b3JPZk90aGVyKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCkpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE1hbmFnZXI7XHJcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xyXG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi91dGlsL0lHZW9tZXRyeScpO1xyXG52YXIgSU1hdGggPSByZXF1aXJlKCcuL3V0aWwvSU1hdGgnKTtcclxuXHJcbmZ1bmN0aW9uIExFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xyXG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcclxuXHJcbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmYWxzZTtcclxuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xyXG4gIHRoaXMuYmVuZHBvaW50cyA9IFtdO1xyXG4gIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG59XHJcblxyXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xyXG5cclxuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcclxuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcclxufVxyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5zb3VyY2U7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnRhcmdldDtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5pc0ludGVyR3JhcGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldDtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRCZW5kcG9pbnRzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxjYTtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2VJbkxjYSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5zb3VyY2VJbkxjYTtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXRJbkxjYSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKVxyXG57XHJcbiAgaWYgKHRoaXMuc291cmNlID09PSBub2RlKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldDtcclxuICB9XHJcbiAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09IG5vZGUpXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgdGhyb3cgXCJOb2RlIGlzIG5vdCBpbmNpZGVudCB3aXRoIHRoaXMgZWRnZVwiO1xyXG4gIH1cclxufVxyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kSW5HcmFwaCA9IGZ1bmN0aW9uIChub2RlLCBncmFwaClcclxue1xyXG4gIHZhciBvdGhlckVuZCA9IHRoaXMuZ2V0T3RoZXJFbmQobm9kZSk7XHJcbiAgdmFyIHJvb3QgPSBncmFwaC5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7XHJcblxyXG4gIHdoaWxlICh0cnVlKVxyXG4gIHtcclxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IGdyYXBoKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gb3RoZXJFbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gcm9vdClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJFbmQgPSBvdGhlckVuZC5nZXRPd25lcigpLmdldFBhcmVudCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBjbGlwUG9pbnRDb29yZGluYXRlcyA9IG5ldyBBcnJheSg0KTtcclxuXHJcbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPVxyXG4gICAgICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgY2xpcFBvaW50Q29vcmRpbmF0ZXMpO1xyXG5cclxuICBpZiAoIXRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KVxyXG4gIHtcclxuICAgIHRoaXMubGVuZ3RoWCA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzBdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMl07XHJcbiAgICB0aGlzLmxlbmd0aFkgPSBjbGlwUG9pbnRDb29yZGluYXRlc1sxXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzNdO1xyXG5cclxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcclxuICB9XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoU2ltcGxlID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMubGVuZ3RoWCA9IHRoaXMudGFyZ2V0LmdldENlbnRlclgoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclgoKTtcclxuICB0aGlzLmxlbmd0aFkgPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJZKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJZKCk7XHJcblxyXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKVxyXG4gIHtcclxuICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcclxuICB9XHJcblxyXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxyXG4gIHtcclxuICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcclxuICB9XHJcblxyXG4gIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMRWRnZTtcclxuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XHJcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi91dGlsL0ludGVnZXInKTtcclxudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL3V0aWwvUmVjdGFuZ2xlRCcpO1xyXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcclxudmFyIFJhbmRvbVNlZWQgPSByZXF1aXJlKCcuL3V0aWwvUmFuZG9tU2VlZCcpO1xyXG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi91dGlsL1BvaW50RCcpO1xyXG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vdXRpbC9IYXNoU2V0Jyk7XHJcblxyXG5mdW5jdGlvbiBMTm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xyXG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcclxuICBpZiAoc2l6ZSA9PSBudWxsICYmIHZOb2RlID09IG51bGwpIHtcclxuICAgIHZOb2RlID0gbG9jO1xyXG4gIH1cclxuXHJcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdk5vZGUpO1xyXG5cclxuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDIgOiBMTm9kZShMYXlvdXQgbGF5b3V0LCBPYmplY3Qgdk5vZGUpXHJcbiAgaWYgKGdtLmdyYXBoTWFuYWdlciAhPSBudWxsKVxyXG4gICAgZ20gPSBnbS5ncmFwaE1hbmFnZXI7XHJcblxyXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xyXG4gIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2Tm9kZTtcclxuICB0aGlzLmVkZ2VzID0gW107XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcclxuXHJcbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbClcclxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxvYy54LCBsb2MueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gIGVsc2VcclxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKCk7XHJcbn1cclxuXHJcbkxOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XHJcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XHJcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XHJcbn1cclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5lZGdlcztcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5jaGlsZDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRPd25lciA9IGZ1bmN0aW9uICgpXHJcbntcclxuLy8gIGlmICh0aGlzLm93bmVyICE9IG51bGwpIHtcclxuLy8gICAgaWYgKCEodGhpcy5vd25lciA9PSBudWxsIHx8IHRoaXMub3duZXIuZ2V0Tm9kZXMoKS5pbmRleE9mKHRoaXMpID4gLTEpKSB7XHJcbi8vICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbi8vICAgIH1cclxuLy8gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMub3duZXI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC53aWR0aDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcclxue1xyXG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LmhlaWdodDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxyXG57XHJcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGhlaWdodDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLFxyXG4gICAgICAgICAgdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMik7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LngsIHRoaXMucmVjdC55KTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRSZWN0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3Q7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggK1xyXG4gICAgICAgICAgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pXHJcbntcclxuICB0aGlzLnJlY3QueCA9IHVwcGVyTGVmdC54O1xyXG4gIHRoaXMucmVjdC55ID0gdXBwZXJMZWZ0Lnk7XHJcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xyXG4gIHRoaXMucmVjdC5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldENlbnRlciA9IGZ1bmN0aW9uIChjeCwgY3kpXHJcbntcclxuICB0aGlzLnJlY3QueCA9IGN4IC0gdGhpcy5yZWN0LndpZHRoIC8gMjtcclxuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSlcclxue1xyXG4gIHRoaXMucmVjdC54ID0geDtcclxuICB0aGlzLnJlY3QueSA9IHk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUubW92ZUJ5ID0gZnVuY3Rpb24gKGR4LCBkeSlcclxue1xyXG4gIHRoaXMucmVjdC54ICs9IGR4O1xyXG4gIHRoaXMucmVjdC55ICs9IGR5O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VMaXN0VG9Ob2RlID0gZnVuY3Rpb24gKHRvKVxyXG57XHJcbiAgdmFyIGVkZ2VMaXN0ID0gW107XHJcbiAgdmFyIGVkZ2U7XHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xyXG4gICAgXHJcbiAgICBpZiAoZWRnZS50YXJnZXQgPT0gdG8pXHJcbiAgICB7XHJcbiAgICAgIGlmIChlZGdlLnNvdXJjZSAhPSBzZWxmKVxyXG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xyXG5cclxuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVkZ2VMaXN0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcilcclxue1xyXG4gIHZhciBlZGdlTGlzdCA9IFtdO1xyXG4gIHZhciBlZGdlO1xyXG4gIFxyXG4gIHZhciBzZWxmID0gdGhpcztcclxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xyXG5cclxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpXHJcbiAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcclxuXHJcbiAgICBpZiAoKGVkZ2UudGFyZ2V0ID09IG90aGVyKSB8fCAoZWRnZS5zb3VyY2UgPT0gb3RoZXIpKVxyXG4gICAge1xyXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWRnZUxpc3Q7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzTGlzdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcclxuICB2YXIgZWRnZTtcclxuICBcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcclxuXHJcbiAgICBpZiAoZWRnZS5zb3VyY2UgPT0gc2VsZilcclxuICAgIHtcclxuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmIChlZGdlLnRhcmdldCAhPSBzZWxmKSB7XHJcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciB3aXRoTmVpZ2hib3JzTGlzdCA9IG5ldyBTZXQoKTtcclxuICB2YXIgY2hpbGROb2RlO1xyXG4gIHZhciBjaGlsZHJlbjtcclxuXHJcbiAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKHRoaXMpO1xyXG5cclxuICBpZiAodGhpcy5jaGlsZCAhPSBudWxsKVxyXG4gIHtcclxuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBjaGlsZHJlbiA9IGNoaWxkTm9kZS53aXRoQ2hpbGRyZW4oKTtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3aXRoTmVpZ2hib3JzTGlzdDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXROb09mQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIG5vT2ZDaGlsZHJlbiA9IDA7XHJcbiAgdmFyIGNoaWxkTm9kZTtcclxuXHJcbiAgaWYodGhpcy5jaGlsZCA9PSBudWxsKXtcclxuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcclxuXHJcbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlmKG5vT2ZDaGlsZHJlbiA9PSAwKXtcclxuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiBub09mQ2hpbGRyZW47XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemUgPSAodGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCkgLyAyO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xyXG4gICAgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG4gICAgdGhpcy5yZWN0LmhlaWdodCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG4gIH1cclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zY2F0dGVyID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciByYW5kb21DZW50ZXJYO1xyXG4gIHZhciByYW5kb21DZW50ZXJZO1xyXG5cclxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcclxuICB2YXIgbWF4WCA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xyXG4gIHJhbmRvbUNlbnRlclggPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggK1xyXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSkgKyBtaW5YO1xyXG5cclxuICB2YXIgbWluWSA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcclxuICB2YXIgbWF4WSA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xyXG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgK1xyXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFkgLSBtaW5ZKSkgKyBtaW5ZO1xyXG5cclxuICB0aGlzLnJlY3QueCA9IHJhbmRvbUNlbnRlclg7XHJcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZXHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbCkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG4gIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKS5sZW5ndGggIT0gMClcclxuICB7XHJcbiAgICAvLyB3cmFwIHRoZSBjaGlsZHJlbiBub2RlcyBieSByZS1hcnJhbmdpbmcgdGhlIGJvdW5kYXJpZXNcclxuICAgIHZhciBjaGlsZEdyYXBoID0gdGhpcy5nZXRDaGlsZCgpO1xyXG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5yZWN0LnggPSBjaGlsZEdyYXBoLmdldExlZnQoKTtcclxuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcclxuXHJcbiAgICB0aGlzLnNldFdpZHRoKGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpKTtcclxuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGNvbXBvdW5kIGJvdW5kcyBjb25zaWRlcmluZyBpdHMgbGFiZWwgcHJvcGVydGllcyAgICBcclxuICAgIGlmKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpe1xyXG4gICAgICAgIFxyXG4gICAgICB2YXIgd2lkdGggPSBjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKTtcclxuICAgICAgdmFyIGhlaWdodCA9IGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpO1xyXG5cclxuICAgICAgaWYodGhpcy5sYWJlbFdpZHRoID4gd2lkdGgpe1xyXG4gICAgICAgIHRoaXMucmVjdC54IC09ICh0aGlzLmxhYmVsV2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgIHRoaXMuc2V0V2lkdGgodGhpcy5sYWJlbFdpZHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCl7XHJcbiAgICAgICAgaWYodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKXtcclxuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5sYWJlbFBvcyA9PSBcInRvcFwiKXtcclxuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5pbmNsdXNpb25UcmVlRGVwdGg7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zKVxyXG57XHJcbiAgdmFyIGxlZnQgPSB0aGlzLnJlY3QueDtcclxuXHJcbiAgaWYgKGxlZnQgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcclxuICB9XHJcbiAgZWxzZSBpZiAobGVmdCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgbGVmdCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XHJcbiAgfVxyXG5cclxuICB2YXIgdG9wID0gdGhpcy5yZWN0Lnk7XHJcblxyXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgdG9wID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xyXG4gIH1cclxuICBlbHNlIGlmICh0b3AgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxyXG4gIHtcclxuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XHJcbiAgfVxyXG5cclxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcclxuICB2YXIgdkxlZnRUb3AgPSB0cmFucy5pbnZlcnNlVHJhbnNmb3JtUG9pbnQobGVmdFRvcCk7XHJcblxyXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0Lng7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0Lnk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQ7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzLm93bmVyID09IG51bGwpXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTE5vZGU7XHJcbiIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xyXG52YXIgSGFzaE1hcCA9IHJlcXVpcmUoJy4vdXRpbC9IYXNoTWFwJyk7XHJcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XHJcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcclxudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xyXG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcclxudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vdXRpbC9Qb2ludEQnKTtcclxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9UcmFuc2Zvcm0nKTtcclxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCcuL3V0aWwvRW1pdHRlcicpO1xyXG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vdXRpbC9IYXNoU2V0Jyk7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcclxuICBFbWl0dGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgLy9MYXlvdXQgUXVhbGl0eTogMDpwcm9vZiwgMTpkZWZhdWx0LCAyOmRyYWZ0XHJcbiAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcclxuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBjcmVhdGUgYmVuZHBvaW50cyBhcyBuZWVkZWQgb3Igbm90XHJcbiAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID1cclxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XHJcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgYmUgaW5jcmVtZW50YWwgb3Igbm90XHJcbiAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xyXG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIGZyb20gYmVmb3JlIHRvIGFmdGVyIGxheW91dCBub2RlIHBvc2l0aW9uc1xyXG4gIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPVxyXG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcclxuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSB0aGUgbGF5b3V0IHByb2Nlc3Mgb3Igbm90XHJcbiAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcclxuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXHJcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgb3Igbm90IGxlYWYgbm9kZXMgKG5vbi1jb21wb3VuZCBub2RlcykgYXJlIG9mIHVuaWZvcm0gc2l6ZXMuIFdoZW5cclxuICAgKiB0aGV5IGFyZSwgYm90aCBzcHJpbmcgYW5kIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiB0d28gbGVhZiBub2RlcyBjYW4gYmVcclxuICAgKiBjYWxjdWxhdGVkIHdpdGhvdXQgdGhlIGV4cGVuc2l2ZSBjbGlwcGluZyBwb2ludCBjYWxjdWxhdGlvbnMsIHJlc3VsdGluZ1xyXG4gICAqIGluIG1ham9yIHNwZWVkLXVwLlxyXG4gICAqL1xyXG4gIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPVxyXG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB1c2VkIGZvciBjcmVhdGlvbiBvZiBiZW5kcG9pbnRzIGJ5IHVzaW5nIGR1bW15IG5vZGVzIGFuZCBlZGdlcy5cclxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cclxuICAgKi9cclxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMgPSBuZXcgSGFzaE1hcCgpO1xyXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XHJcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XHJcbiAgdGhpcy5pc1N1YkxheW91dCA9IGZhbHNlO1xyXG4gIHRoaXMuaXNSZW1vdGVVc2UgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGlzUmVtb3RlVXNlICE9IG51bGwpIHtcclxuICAgIHRoaXMuaXNSZW1vdGVVc2UgPSBpc1JlbW90ZVVzZTtcclxuICB9XHJcbn1cclxuXHJcbkxheW91dC5SQU5ET01fU0VFRCA9IDE7XHJcblxyXG5MYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRW1pdHRlci5wcm90b3R5cGUgKTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBnbSA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xyXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XHJcbiAgcmV0dXJuIGdtO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpXHJcbntcclxuICByZXR1cm4gbmV3IExHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSlcclxue1xyXG4gIHJldHVybiBuZXcgTE5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uICh2RWRnZSlcclxue1xyXG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA9PSBudWxsKVxyXG4gICAgICAgICAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkubGVuZ3RoID09IDBcclxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmluY2x1ZGVzSW52YWxpZEVkZ2UoKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUucnVuTGF5b3V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xyXG4gIFxyXG4gIGlmICh0aGlzLnRpbGluZ1ByZUxheW91dCkge1xyXG4gICAgdGhpcy50aWxpbmdQcmVMYXlvdXQoKTtcclxuICB9XHJcblxyXG4gIHRoaXMuaW5pdFBhcmFtZXRlcnMoKTtcclxuICB2YXIgaXNMYXlvdXRTdWNjZXNzZnVsbDtcclxuXHJcbiAgaWYgKHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkpXHJcbiAge1xyXG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IGZhbHNlO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IHRoaXMubGF5b3V0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9PT0gJ2R1cmluZycpIHtcclxuICAgIC8vIElmIHRoaXMgaXMgYSAnZHVyaW5nJyBsYXlvdXQgYW5pbWF0aW9uLiBMYXlvdXQgaXMgbm90IGZpbmlzaGVkIHlldC4gXHJcbiAgICAvLyBXZSBuZWVkIHRvIHBlcmZvcm0gdGhlc2UgaW4gaW5kZXguanMgd2hlbiBsYXlvdXQgaXMgcmVhbGx5IGZpbmlzaGVkLlxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBpZiAoaXNMYXlvdXRTdWNjZXNzZnVsbClcclxuICB7XHJcbiAgICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuZG9Qb3N0TGF5b3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy50aWxpbmdQb3N0TGF5b3V0KSB7XHJcbiAgICB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQoKTtcclxuICB9XHJcblxyXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XHJcblxyXG4gIHJldHVybiBpc0xheW91dFN1Y2Nlc3NmdWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHRoZSBvcGVyYXRpb25zIHJlcXVpcmVkIGFmdGVyIGxheW91dC5cclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuZG9Qb3N0TGF5b3V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIC8vYXNzZXJ0ICFpc1N1YkxheW91dCA6IFwiU2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gc3ViLWxheW91dCFcIjtcclxuICAvLyBQcm9wYWdhdGUgZ2VvbWV0cmljIGNoYW5nZXMgdG8gdi1sZXZlbCBvYmplY3RzXHJcbiAgaWYoIXRoaXMuaW5jcmVtZW50YWwpe1xyXG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICB9XHJcbiAgdGhpcy51cGRhdGUoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSBnZW9tZXRyeSBvZiB0aGUgdGFyZ2V0IGdyYXBoIGFjY29yZGluZyB0b1xyXG4gKiBjYWxjdWxhdGVkIGxheW91dC5cclxuICovXHJcbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyB1cGRhdGUgYmVuZCBwb2ludHNcclxuICBpZiAodGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkKVxyXG4gIHtcclxuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzKCk7XHJcblxyXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcclxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIHBlcmZvcm0gZWRnZSwgbm9kZSBhbmQgcm9vdCB1cGRhdGVzIGlmIGxheW91dCBpcyBub3QgY2FsbGVkXHJcbiAgLy8gcmVtb3RlbHlcclxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpXHJcbiAge1xyXG4gICAgLy8gdXBkYXRlIGFsbCBlZGdlc1xyXG4gICAgdmFyIGVkZ2U7XHJcbiAgICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgZWRnZSA9IGFsbEVkZ2VzW2ldO1xyXG4vLyAgICAgIHRoaXMudXBkYXRlKGVkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBub2Rlc1xyXG4gICAgdmFyIG5vZGU7XHJcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuLy8gICAgICB0aGlzLnVwZGF0ZShub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgcm9vdCBncmFwaFxyXG4gICAgdGhpcy51cGRhdGUodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcclxuICB9XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICBpZiAob2JqID09IG51bGwpIHtcclxuICAgIHRoaXMudXBkYXRlMigpO1xyXG4gIH1cclxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xyXG4gICAgdmFyIG5vZGUgPSBvYmo7XHJcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xyXG4gICAgICB2YXIgbm9kZXMgPSBub2RlLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcclxuICAgICAge1xyXG4gICAgICAgIHVwZGF0ZShub2Rlc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBub2RlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxyXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgbm9kZSBpbXBsZW1lbnRzIHRoZVxyXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cclxuICAgIGlmIChub2RlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXHJcbiAgICAgIHZhciB2Tm9kZSA9IG5vZGUudkdyYXBoT2JqZWN0O1xyXG5cclxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXHJcbiAgICAgIHZOb2RlLnVwZGF0ZShub2RlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcclxuICAgIHZhciBlZGdlID0gb2JqO1xyXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZWRnZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcclxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIGVkZ2UgaW1wbGVtZW50cyB0aGVcclxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXHJcblxyXG4gICAgaWYgKGVkZ2UudkdyYXBoT2JqZWN0ICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcclxuICAgICAgdmFyIHZFZGdlID0gZWRnZS52R3JhcGhPYmplY3Q7XHJcblxyXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcclxuICAgICAgdkVkZ2UudXBkYXRlKGVkZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcclxuICAgIHZhciBncmFwaCA9IG9iajtcclxuICAgIC8vIGlmIHRoZSBsLWxldmVsIGdyYXBoIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxyXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgb2JqZWN0IGltcGxlbWVudHMgdGhlXHJcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxyXG5cclxuICAgIGlmIChncmFwaC52R3JhcGhPYmplY3QgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xyXG4gICAgICB2YXIgdkdyYXBoID0gZ3JhcGgudkdyYXBoT2JqZWN0O1xyXG5cclxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXHJcbiAgICAgIHZHcmFwaC51cGRhdGUoZ3JhcGgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNldCBhbGwgbGF5b3V0IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICghdGhpcy5pc1N1YkxheW91dClcclxuICB7XHJcbiAgICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xyXG4gICAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcclxuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcclxuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xyXG4gICAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xyXG4gICAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcclxuICAgIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dClcclxuICB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAobmV3TGVmdFRvcCkge1xyXG4gIGlmIChuZXdMZWZ0VG9wID09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy50cmFuc2Zvcm0obmV3IFBvaW50RCgwLCAwKSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgLy8gY3JlYXRlIGEgdHJhbnNmb3JtYXRpb24gb2JqZWN0IChmcm9tIEVjbGlwc2UgdG8gbGF5b3V0KS4gV2hlbiBhblxyXG4gICAgLy8gaW52ZXJzZSB0cmFuc2Zvcm0gaXMgYXBwbGllZCwgd2UgZ2V0IHVwcGVyLWxlZnQgY29vcmRpbmF0ZSBvZiB0aGVcclxuICAgIC8vIGRyYXdpbmcgb3IgdGhlIHJvb3QgZ3JhcGggYXQgZ2l2ZW4gaW5wdXQgY29vcmRpbmF0ZSAoc29tZSBtYXJnaW5zXHJcbiAgICAvLyBhbHJlYWR5IGluY2x1ZGVkIGluIGNhbGN1bGF0aW9uIG9mIGxlZnQtdG9wKS5cclxuXHJcbiAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtKCk7XHJcbiAgICB2YXIgbGVmdFRvcCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XHJcblxyXG4gICAgaWYgKGxlZnRUb3AgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgdHJhbnMuc2V0V29ybGRPcmdYKG5ld0xlZnRUb3AueCk7XHJcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xyXG5cclxuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWChsZWZ0VG9wLngpO1xyXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XHJcblxyXG4gICAgICB2YXIgbm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XHJcbiAgICAgIHZhciBub2RlO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcclxuICAgICAge1xyXG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgICBub2RlLnRyYW5zZm9ybSh0cmFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYW5kb21seSA9IGZ1bmN0aW9uIChncmFwaCkge1xyXG5cclxuICBpZiAoZ3JhcGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvL2Fzc2VydCAhdGhpcy5pbmNyZW1lbnRhbDtcclxuICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpKTtcclxuICAgIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyh0cnVlKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgbE5vZGU7XHJcbiAgICB2YXIgY2hpbGRHcmFwaDtcclxuXHJcbiAgICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgY2hpbGRHcmFwaCA9IGxOb2RlLmdldENoaWxkKCk7XHJcblxyXG4gICAgICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoaWxkR3JhcGguZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMClcclxuICAgICAge1xyXG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShjaGlsZEdyYXBoKTtcclxuICAgICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiB0cmVlcyB3aGVyZSBlYWNoIHRyZWUgaXMgcmVwcmVzZW50ZWQgYXMgYVxyXG4gKiBsaXN0IG9mIGwtbm9kZXMuIFRoZSBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2Ygc2l6ZSAwIHdoZW46XHJcbiAqIC0gVGhlIGdyYXBoIGlzIG5vdCBmbGF0IG9yXHJcbiAqIC0gT25lIG9mIHRoZSBjb21wb25lbnQocykgb2YgdGhlIGdyYXBoIGlzIG5vdCBhIHRyZWUuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmdldEZsYXRGb3Jlc3QgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIGZsYXRGb3Jlc3QgPSBbXTtcclxuICB2YXIgaXNGb3Jlc3QgPSB0cnVlO1xyXG5cclxuICAvLyBRdWljayByZWZlcmVuY2UgZm9yIGFsbCBub2RlcyBpbiB0aGUgZ3JhcGggbWFuYWdlciBhc3NvY2lhdGVkIHdpdGhcclxuICAvLyB0aGlzIGxheW91dC4gVGhlIGxpc3Qgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxyXG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xyXG5cclxuICAvLyBGaXJzdCBiZSBzdXJlIHRoYXQgdGhlIGdyYXBoIGlzIGZsYXRcclxuICB2YXIgaXNGbGF0ID0gdHJ1ZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICBpZiAoYWxsTm9kZXNbaV0uZ2V0Q2hpbGQoKSAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICBpc0ZsYXQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJldHVybiBlbXB0eSBmb3Jlc3QgaWYgdGhlIGdyYXBoIGlzIG5vdCBmbGF0LlxyXG4gIGlmICghaXNGbGF0KVxyXG4gIHtcclxuICAgIHJldHVybiBmbGF0Rm9yZXN0O1xyXG4gIH1cclxuXHJcbiAgLy8gUnVuIEJGUyBmb3IgZWFjaCBjb21wb25lbnQgb2YgdGhlIGdyYXBoLlxyXG5cclxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XHJcbiAgdmFyIHRvQmVWaXNpdGVkID0gW107XHJcbiAgdmFyIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xyXG4gIHZhciB1blByb2Nlc3NlZE5vZGVzID0gW107XHJcblxyXG4gIHVuUHJvY2Vzc2VkTm9kZXMgPSB1blByb2Nlc3NlZE5vZGVzLmNvbmNhdChhbGxOb2Rlcyk7XHJcblxyXG4gIC8vIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCBmaW5kcyBhIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGggYW5kXHJcbiAgLy8gZGVjaWRlcyB3aGV0aGVyIGl0IGlzIGEgdHJlZSBvciBub3QuIElmIGl0IGlzIGEgdHJlZSwgYWRkcyBpdCB0byB0aGVcclxuICAvLyBmb3Jlc3QgYW5kIGNvbnRpbnVlZCB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudC5cclxuXHJcbiAgd2hpbGUgKHVuUHJvY2Vzc2VkTm9kZXMubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcclxuICB7XHJcbiAgICB0b0JlVmlzaXRlZC5wdXNoKHVuUHJvY2Vzc2VkTm9kZXNbMF0pO1xyXG5cclxuICAgIC8vIFN0YXJ0IHRoZSBCRlMuIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCB2aXNpdHMgYSBub2RlIGluIGFcclxuICAgIC8vIEJGUyBtYW5uZXIuXHJcbiAgICB3aGlsZSAodG9CZVZpc2l0ZWQubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcclxuICAgIHtcclxuICAgICAgLy9wb29sIG9wZXJhdGlvblxyXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcclxuICAgICAgdG9CZVZpc2l0ZWQuc3BsaWNlKDAsIDEpO1xyXG4gICAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxyXG4gICAgICB2YXIgbmVpZ2hib3JFZGdlcyA9IGN1cnJlbnROb2RlLmdldEVkZ2VzKCk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9yRWRnZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgY3VycmVudE5laWdoYm9yID1cclxuICAgICAgICAgICAgICAgIG5laWdoYm9yRWRnZXNbaV0uZ2V0T3RoZXJFbmQoY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxyXG4gICAgICAgIGlmIChwYXJlbnRzLmdldChjdXJyZW50Tm9kZSkgIT0gY3VycmVudE5laWdoYm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXHJcbiAgICAgICAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChjdXJyZW50TmVpZ2hib3IpO1xyXG4gICAgICAgICAgICBwYXJlbnRzLnB1dChjdXJyZW50TmVpZ2hib3IsIGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFNpbmNlIHdlIGhhdmUgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IgYW5kXHJcbiAgICAgICAgICAvLyB0aGlzIG5laWdoYm9yIGlzIG5vdCBwYXJlbnQgb2YgY3VycmVudE5vZGUsIGdpdmVuXHJcbiAgICAgICAgICAvLyBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB0cmVlLCBoZW5jZVxyXG4gICAgICAgICAgLy8gaXQgaXMgbm90IGEgZm9yZXN0LlxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpc0ZvcmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgYSB0cmVlLiBFbXB0eVxyXG4gICAgLy8gcHJldmlvdXNseSBmb3VuZCB0cmVlcy4gVGhlIG1ldGhvZCB3aWxsIGVuZC5cclxuICAgIGlmICghaXNGb3Jlc3QpXHJcbiAgICB7XHJcbiAgICAgIGZsYXRGb3Jlc3QgPSBbXTtcclxuICAgIH1cclxuICAgIC8vIFNhdmUgY3VycmVudGx5IHZpc2l0ZWQgbm9kZXMgYXMgYSB0cmVlIGluIG91ciBmb3Jlc3QuIFJlc2V0XHJcbiAgICAvLyB2aXNpdGVkIGFuZCBwYXJlbnRzIGxpc3RzLiBDb250aW51ZSB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudCBvZlxyXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHZhciB0ZW1wID0gW107XHJcbiAgICAgIHZpc2l0ZWQuYWRkQWxsVG8odGVtcCk7XHJcbiAgICAgIGZsYXRGb3Jlc3QucHVzaCh0ZW1wKTtcclxuICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XHJcbiAgICAgIC8vdW5Qcm9jZXNzZWROb2Rlcy5yZW1vdmVBbGwodmlzaXRlZCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdW5Qcm9jZXNzZWROb2Rlcy5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcclxuICAgICAgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmxhdEZvcmVzdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXHJcbiAqIGZvciB0aGUgZ2l2ZW4gZWRnZSAob25lIHBlciBiZW5kcG9pbnQpLiBUaGUgZXhpc3RpbmcgbC1sZXZlbCBzdHJ1Y3R1cmVcclxuICogaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMgPSBmdW5jdGlvbiAoZWRnZSlcclxue1xyXG4gIHZhciBkdW1teU5vZGVzID0gW107XHJcbiAgdmFyIHByZXYgPSBlZGdlLnNvdXJjZTtcclxuXHJcbiAgdmFyIGdyYXBoID0gdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZS5iZW5kcG9pbnRzLmxlbmd0aDsgaSsrKVxyXG4gIHtcclxuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgbm9kZVxyXG4gICAgdmFyIGR1bW15Tm9kZSA9IHRoaXMubmV3Tm9kZShudWxsKTtcclxuICAgIGR1bW15Tm9kZS5zZXRSZWN0KG5ldyBQb2ludCgwLCAwKSwgbmV3IERpbWVuc2lvbigxLCAxKSk7XHJcblxyXG4gICAgZ3JhcGguYWRkKGR1bW15Tm9kZSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBlZGdlIGJldHdlZW4gcHJldiBhbmQgZHVtbXkgbm9kZVxyXG4gICAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcclxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGR1bW15Tm9kZSk7XHJcblxyXG4gICAgZHVtbXlOb2Rlcy5hZGQoZHVtbXlOb2RlKTtcclxuICAgIHByZXYgPSBkdW1teU5vZGU7XHJcbiAgfVxyXG5cclxuICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xyXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGVkZ2UudGFyZ2V0KTtcclxuXHJcbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzLnB1dChlZGdlLCBkdW1teU5vZGVzKTtcclxuXHJcbiAgLy8gcmVtb3ZlIHJlYWwgZWRnZSBmcm9tIGdyYXBoIG1hbmFnZXIgaWYgaXQgaXMgaW50ZXItZ3JhcGhcclxuICBpZiAoZWRnZS5pc0ludGVyR3JhcGgoKSlcclxuICB7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XHJcbiAgfVxyXG4gIC8vIGVsc2UsIHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGdyYXBoXHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkdW1teU5vZGVzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYmVuZHBvaW50cyBmb3IgZWRnZXMgZnJvbSB0aGUgZHVtbXkgbm9kZXNcclxuICogYXQgbC1sZXZlbC5cclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBlZGdlcyA9IFtdO1xyXG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xyXG4gIGVkZ2VzID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmtleVNldCgpLmNvbmNhdChlZGdlcyk7XHJcblxyXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgZWRnZXMubGVuZ3RoOyBrKyspXHJcbiAge1xyXG4gICAgdmFyIGxFZGdlID0gZWRnZXNba107XHJcblxyXG4gICAgaWYgKGxFZGdlLmJlbmRwb2ludHMubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgdmFyIHBhdGggPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMuZ2V0KGxFZGdlKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKylcclxuICAgICAge1xyXG4gICAgICAgIHZhciBkdW1teU5vZGUgPSBwYXRoW2ldO1xyXG4gICAgICAgIHZhciBwID0gbmV3IFBvaW50RChkdW1teU5vZGUuZ2V0Q2VudGVyWCgpLFxyXG4gICAgICAgICAgICAgICAgZHVtbXlOb2RlLmdldENlbnRlclkoKSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBiZW5kcG9pbnQncyBsb2NhdGlvbiBhY2NvcmRpbmcgdG8gZHVtbXkgbm9kZVxyXG4gICAgICAgIHZhciBlYnAgPSBsRWRnZS5iZW5kcG9pbnRzLmdldChpKTtcclxuICAgICAgICBlYnAueCA9IHAueDtcclxuICAgICAgICBlYnAueSA9IHAueTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcclxuICAgICAgICAvLyBkdW1teSBub2RlIGlzIGFsc28gcmVtb3ZlZCAod2l0aGluIHRoZSByZW1vdmUgbWV0aG9kKVxyXG4gICAgICAgIGR1bW15Tm9kZS5nZXRPd25lcigpLnJlbW92ZShkdW1teU5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgdGhlIHJlYWwgZWRnZSB0byBncmFwaFxyXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MYXlvdXQudHJhbnNmb3JtID0gZnVuY3Rpb24gKHNsaWRlclZhbHVlLCBkZWZhdWx0VmFsdWUsIG1pbkRpdiwgbWF4TXVsKSB7XHJcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xyXG4gICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcclxuICAgIHtcclxuICAgICAgdmFyIG1pblZhbHVlID0gZGVmYXVsdFZhbHVlIC8gbWluRGl2O1xyXG4gICAgICB2YWx1ZSAtPSAoKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwKSAqICg1MCAtIHNsaWRlclZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdmFyIG1heFZhbHVlID0gZGVmYXVsdFZhbHVlICogbWF4TXVsO1xyXG4gICAgICB2YWx1ZSArPSAoKG1heFZhbHVlIC0gZGVmYXVsdFZhbHVlKSAvIDUwKSAqIChzbGlkZXJWYWx1ZSAtIDUwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIGEsIGI7XHJcblxyXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKVxyXG4gICAge1xyXG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XHJcbiAgICAgIGIgPSBkZWZhdWx0VmFsdWUgLyAxMC4wO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAuMDtcclxuICAgICAgYiA9IC04ICogZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoYSAqIHNsaWRlclZhbHVlICsgYik7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGZpbmRzIGFuZCByZXR1cm5zIHRoZSBjZW50ZXIgb2YgdGhlIGdpdmVuIG5vZGVzLCBhc3N1bWluZ1xyXG4gKiB0aGF0IHRoZSBnaXZlbiBub2RlcyBmb3JtIGEgdHJlZSBpbiB0aGVtc2VsdmVzLlxyXG4gKi9cclxuTGF5b3V0LmZpbmRDZW50ZXJPZlRyZWUgPSBmdW5jdGlvbiAobm9kZXMpXHJcbntcclxuICB2YXIgbGlzdCA9IFtdO1xyXG4gIGxpc3QgPSBsaXN0LmNvbmNhdChub2Rlcyk7XHJcblxyXG4gIHZhciByZW1vdmVkTm9kZXMgPSBbXTtcclxuICB2YXIgcmVtYWluaW5nRGVncmVlcyA9IG5ldyBIYXNoTWFwKCk7XHJcbiAgdmFyIGZvdW5kQ2VudGVyID0gZmFsc2U7XHJcbiAgdmFyIGNlbnRlck5vZGUgPSBudWxsO1xyXG5cclxuICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxyXG4gIHtcclxuICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcclxuICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxyXG4gIHtcclxuICAgIHZhciBub2RlID0gbGlzdFtpXTtcclxuICAgIHZhciBkZWdyZWUgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCk7XHJcbiAgICByZW1haW5pbmdEZWdyZWVzLnB1dChub2RlLCBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCkpO1xyXG5cclxuICAgIGlmIChkZWdyZWUgPT0gMSlcclxuICAgIHtcclxuICAgICAgcmVtb3ZlZE5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgdGVtcExpc3QgPSBbXTtcclxuICB0ZW1wTGlzdCA9IHRlbXBMaXN0LmNvbmNhdChyZW1vdmVkTm9kZXMpO1xyXG5cclxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKVxyXG4gIHtcclxuICAgIHZhciB0ZW1wTGlzdDIgPSBbXTtcclxuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xyXG4gICAgdGVtcExpc3QgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcclxuXHJcbiAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihub2RlKTtcclxuICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBuZWlnaGJvdXJzID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCk7XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhuZWlnaGJvdXJzLnNldCkuZm9yRWFjaChmdW5jdGlvbihqKSB7XHJcbiAgICAgICAgdmFyIG5laWdoYm91ciA9IG5laWdoYm91cnMuc2V0W2pdO1xyXG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaW5kZXhPZihuZWlnaGJvdXIpIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YXIgb3RoZXJEZWdyZWUgPSByZW1haW5pbmdEZWdyZWVzLmdldChuZWlnaGJvdXIpO1xyXG4gICAgICAgICAgdmFyIG5ld0RlZ3JlZSA9IG90aGVyRGVncmVlIC0gMTtcclxuXHJcbiAgICAgICAgICBpZiAobmV3RGVncmVlID09IDEpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRlbXBMaXN0LnB1c2gobmVpZ2hib3VyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZW1haW5pbmdEZWdyZWVzLnB1dChuZWlnaGJvdXIsIG5ld0RlZ3JlZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVkTm9kZXMgPSByZW1vdmVkTm9kZXMuY29uY2F0KHRlbXBMaXN0KTtcclxuXHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxyXG4gICAge1xyXG4gICAgICBmb3VuZENlbnRlciA9IHRydWU7XHJcbiAgICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNlbnRlck5vZGU7XHJcbn07XHJcblxyXG4vKipcclxuICogRHVyaW5nIHRoZSBjb2Fyc2VuaW5nIHByb2Nlc3MsIHRoaXMgbGF5b3V0IG1heSBiZSByZWZlcmVuY2VkIGJ5IHR3byBncmFwaCBtYW5hZ2Vyc1xyXG4gKiB0aGlzIHNldHRlciBmdW5jdGlvbiBncmFudHMgYWNjZXNzIHRvIGNoYW5nZSB0aGUgY3VycmVudGx5IGJlaW5nIHVzZWQgZ3JhcGggbWFuYWdlclxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoZ20pXHJcbntcclxuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQ7XHJcbiIsImZ1bmN0aW9uIEVtaXR0ZXIoKXtcclxuICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG59XHJcblxyXG52YXIgcCA9IEVtaXR0ZXIucHJvdG90eXBlO1xyXG5cclxucC5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcclxuICB0aGlzLmxpc3RlbmVycy5wdXNoKHtcclxuICAgIGV2ZW50OiBldmVudCxcclxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gIH0pO1xyXG59O1xyXG5cclxucC5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcclxuICBmb3IoIHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpID49IDA7IGktLSApe1xyXG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcclxuXHJcbiAgICBpZiggbC5ldmVudCA9PT0gZXZlbnQgJiYgbC5jYWxsYmFjayA9PT0gY2FsbGJhY2sgKXtcclxuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKCBpLCAxICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxucC5lbWl0ID0gZnVuY3Rpb24oIGV2ZW50LCBkYXRhICl7XHJcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKyApe1xyXG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcclxuXHJcbiAgICBpZiggZXZlbnQgPT09IGwuZXZlbnQgKXtcclxuICAgICAgbC5jYWxsYmFjayggZGF0YSApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==