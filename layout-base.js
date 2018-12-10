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

    if (comparison_fn === undefined) {
        comparison_fn = Quicksort.compare;
    }
    var end_index;

    if (list instanceof LinkedList) {
        end_index = list.size();
    } else if (list instanceof []) {
        end_index = list.length - 1;
    }

    // Prevent empty lists or arrays.
    if (end_index >= 0) {
        Quicksort.quicksort_between_indices(0, end_index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dEJhc2UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0lHZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSU1hdGguanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1BvaW50LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvUXVpY2tzb3J0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xFZGdlLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTE5vZGUuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0VtaXR0ZXIuanMiXSwibmFtZXMiOlsibGF5b3V0QmFzZSIsIkRpbWVuc2lvbkQiLCJyZXF1aXJlIiwiSGFzaE1hcCIsIkhhc2hTZXQiLCJJR2VvbWV0cnkiLCJJTWF0aCIsIkludGVnZXIiLCJQb2ludCIsIlBvaW50RCIsIlJhbmRvbVNlZWQiLCJSZWN0YW5nbGVEIiwiVHJhbnNmb3JtIiwiVW5pcXVlSURHZW5lcmV0b3IiLCJRdWlja3NvcnQiLCJMaW5rZWRMaXN0IiwiTEdyYXBoT2JqZWN0IiwiTEdyYXBoIiwiTEVkZ2UiLCJMR3JhcGhNYW5hZ2VyIiwiTE5vZGUiLCJMYXlvdXQiLCJMYXlvdXRDb25zdGFudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwid2lkdGgiLCJoZWlnaHQiLCJwcm90b3R5cGUiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwibWFwIiwia2V5cyIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImNvbnRhaW5zIiwicHVzaCIsImdldCIsImtleVNldCIsImxhc3RJRCIsIm9iaiIsImlzUHJpbWl0aXZlIiwidW5pcXVlSUQiLCJnZXRTdHJpbmciLCJpZCIsImFyZyIsInR5cGUiLCJzZXQiLCJhZGQiLCJyZW1vdmUiLCJjbGVhciIsImlzRW1wdHkiLCJzaXplIiwiT2JqZWN0IiwibGVuZ3RoIiwiYWRkQWxsVG8iLCJsaXN0IiwiaSIsImFkZEFsbCIsInMiLCJ2IiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJyZWN0QSIsInJlY3RCIiwib3ZlcmxhcEFtb3VudCIsInNlcGFyYXRpb25CdWZmZXIiLCJpbnRlcnNlY3RzIiwiZGlyZWN0aW9ucyIsIkFycmF5IiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJNYXRoIiwibWluIiwiZ2V0UmlnaHQiLCJtYXgiLCJ4IiwiZ2V0Qm90dG9tIiwieSIsImdldFgiLCJnZXRZIiwic2xvcGUiLCJhYnMiLCJnZXRDZW50ZXJZIiwiZ2V0Q2VudGVyWCIsIm1vdmVCeVkiLCJtb3ZlQnlYIiwiZ2V0SW50ZXJzZWN0aW9uMiIsInJlc3VsdCIsInAxeCIsInAxeSIsInAyeCIsInAyeSIsInRvcExlZnRBeCIsInRvcExlZnRBeSIsInRvcFJpZ2h0QXgiLCJib3R0b21MZWZ0QXgiLCJib3R0b21MZWZ0QXkiLCJib3R0b21SaWdodEF4IiwiaGFsZldpZHRoQSIsImdldFdpZHRoSGFsZiIsImhhbGZIZWlnaHRBIiwiZ2V0SGVpZ2h0SGFsZiIsInRvcExlZnRCeCIsInRvcExlZnRCeSIsInRvcFJpZ2h0QngiLCJib3R0b21MZWZ0QngiLCJib3R0b21MZWZ0QnkiLCJib3R0b21SaWdodEJ4IiwiaGFsZldpZHRoQiIsImhhbGZIZWlnaHRCIiwiY2xpcFBvaW50QUZvdW5kIiwiY2xpcFBvaW50QkZvdW5kIiwic2xvcGVBIiwic2xvcGVCIiwic2xvcGVQcmltZSIsImNhcmRpbmFsRGlyZWN0aW9uQSIsImNhcmRpbmFsRGlyZWN0aW9uQiIsInRlbXBQb2ludEF4IiwidGVtcFBvaW50QXkiLCJ0ZW1wUG9pbnRCeCIsInRlbXBQb2ludEJ5IiwiZ2V0Q2FyZGluYWxEaXJlY3Rpb24iLCJsaW5lIiwiZ2V0SW50ZXJzZWN0aW9uIiwiczEiLCJzMiIsImYxIiwiZjIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJ4NCIsInk0IiwiYTEiLCJhMiIsImIxIiwiYjIiLCJjMSIsImMyIiwiZGVub20iLCJIQUxGX1BJIiwiUEkiLCJPTkVfQU5EX0hBTEZfUEkiLCJUV09fUEkiLCJUSFJFRV9QSSIsInNpZ24iLCJmbG9vciIsImNlaWwiLCJNQVhfVkFMVUUiLCJNSU5fVkFMVUUiLCJwIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZ2V0TG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInBhcnNlSW50IiwibW92ZSIsInRyYW5zbGF0ZSIsImR4IiwiZHkiLCJlcXVhbHMiLCJwdCIsInRvU3RyaW5nIiwic2V0WCIsInNldFkiLCJnZXREaWZmZXJlbmNlIiwiZ2V0Q29weSIsImRpbSIsInNlZWQiLCJuZXh0RG91YmxlIiwic2luIiwiYSIsImdldE1pblgiLCJnZXRNYXhYIiwiZ2V0TWluWSIsImdldE1heFkiLCJsd29ybGRPcmdYIiwibHdvcmxkT3JnWSIsImxkZXZpY2VPcmdYIiwibGRldmljZU9yZ1kiLCJsd29ybGRFeHRYIiwibHdvcmxkRXh0WSIsImxkZXZpY2VFeHRYIiwibGRldmljZUV4dFkiLCJnZXRXb3JsZE9yZ1giLCJzZXRXb3JsZE9yZ1giLCJ3b3giLCJnZXRXb3JsZE9yZ1kiLCJzZXRXb3JsZE9yZ1kiLCJ3b3kiLCJnZXRXb3JsZEV4dFgiLCJzZXRXb3JsZEV4dFgiLCJ3ZXgiLCJnZXRXb3JsZEV4dFkiLCJzZXRXb3JsZEV4dFkiLCJ3ZXkiLCJnZXREZXZpY2VPcmdYIiwic2V0RGV2aWNlT3JnWCIsImRveCIsImdldERldmljZU9yZ1kiLCJzZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJnZXRfb2JqZWN0X2F0Iiwic2V0X29iamVjdF9hdCIsInF1aWNrc29ydCIsImNvbXBhcmlzb25fZm4iLCJ1bmRlZmluZWQiLCJjb21wYXJlIiwiZW5kX2luZGV4IiwicXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyIsImxvdyIsImhpZ2giLCJqIiwibWlkZGxlSW5kZXgiLCJtaWRkbGUiLCJ0ZW1wIiwiZ2V0T2JqZWN0QXQiLCJiIiwibm9kZUZyb20iLCJuZXh0IiwicHJldiIsIm5vZGUiLCJoZWFkIiwidGFpbCIsInZhbHMiLCJmb3JFYWNoIiwiaW5zZXJ0QmVmb3JlIiwidmFsIiwib3RoZXJOb2RlIiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnROb2RlQmVmb3JlIiwibmV3Tm9kZSIsImluc2VydE5vZGVBZnRlciIsInVuc2hpZnQiLCJwb3AiLCJwb3BOb2RlIiwic2hpZnQiLCJzaGlmdE5vZGUiLCJpbmRleCIsImN1cnJlbnQiLCJ2R3JhcGhPYmplY3QiLCJwYXJlbnQiLCJvYmoyIiwidkdyYXBoIiwiY2FsbCIsImVzdGltYXRlZFNpemUiLCJtYXJnaW4iLCJERUZBVUxUX0dSQVBIX01BUkdJTiIsImVkZ2VzIiwibm9kZXMiLCJpc0Nvbm5lY3RlZCIsImdyYXBoTWFuYWdlciIsImNyZWF0ZSIsInByb3AiLCJnZXROb2RlcyIsImdldEVkZ2VzIiwiZ2V0R3JhcGhNYW5hZ2VyIiwiZ2V0UGFyZW50IiwiZ2V0TGVmdCIsImxlZnQiLCJyaWdodCIsImdldFRvcCIsInRvcCIsImJvdHRvbSIsIm9iajEiLCJzb3VyY2VOb2RlIiwidGFyZ2V0Tm9kZSIsImluZGV4T2YiLCJvd25lciIsIm5ld0VkZ2UiLCJzb3VyY2UiLCJ0YXJnZXQiLCJpc0ludGVyR3JhcGgiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJlZGdlIiwic3BsaWNlIiwic291cmNlSW5kZXgiLCJ0YXJnZXRJbmRleCIsInVwZGF0ZUxlZnRUb3AiLCJub2RlVG9wIiwibm9kZUxlZnQiLCJsTm9kZSIsInBhZGRpbmdMZWZ0IiwidXBkYXRlQm91bmRzIiwicmVjdXJzaXZlIiwibm9kZVJpZ2h0Iiwibm9kZUJvdHRvbSIsImNoaWxkIiwiYm91bmRpbmdSZWN0IiwiY2FsY3VsYXRlQm91bmRzIiwiZ2V0SW5jbHVzaW9uVHJlZURlcHRoIiwiZ2V0Um9vdCIsImdldEVzdGltYXRlZFNpemUiLCJjYWxjRXN0aW1hdGVkU2l6ZSIsIkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSIsInNxcnQiLCJ1cGRhdGVDb25uZWN0ZWQiLCJzZWxmIiwidG9CZVZpc2l0ZWQiLCJ2aXNpdGVkIiwiY3VycmVudE5vZGUiLCJuZWlnaGJvckVkZ2VzIiwiY3VycmVudE5laWdoYm9yIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJuZWlnaGJvckVkZ2UiLCJnZXRPdGhlckVuZEluR3JhcGgiLCJjaGlsZHJlbk9mTmVpZ2hib3IiLCJub09mVmlzaXRlZEluVGhpc0dyYXBoIiwidmlzaXRlZElkIiwidmlzaXRlZE5vZGUiLCJQUk9PRl9RVUFMSVRZIiwiREVGQVVMVF9RVUFMSVRZIiwiRFJBRlRfUVVBTElUWSIsIkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCIsIkRFRkFVTFRfSU5DUkVNRU5UQUwiLCJERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fUEVSSU9EIiwiREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyIsIk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyIsIlNJTVBMRV9OT0RFX1NJWkUiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJNSU5fRURHRV9MRU5HVEgiLCJXT1JMRF9CT1VOREFSWSIsIklOSVRJQUxfV09STERfQk9VTkRBUlkiLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwibGF5b3V0IiwiZ3JhcGhzIiwiYWRkUm9vdCIsIm5ncmFwaCIsIm5ld0dyYXBoIiwibm5vZGUiLCJyb290Iiwic2V0Um9vdEdyYXBoIiwicm9vdEdyYXBoIiwicGFyZW50Tm9kZSIsInNvdXJjZUdyYXBoIiwiZ2V0T3duZXIiLCJ0YXJnZXRHcmFwaCIsImxPYmoiLCJncmFwaCIsImNvbmNhdCIsIm5vZGVzVG9CZVJlbW92ZWQiLCJnZXRHcmFwaHMiLCJnZXRBbGxOb2RlcyIsImFsbE5vZGVzIiwibm9kZUxpc3QiLCJyZXNldEFsbE5vZGVzIiwicmVzZXRBbGxFZGdlcyIsImFsbEVkZ2VzIiwicmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiZ2V0QWxsRWRnZXMiLCJlZGdlTGlzdCIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwic2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJnZXRMYXlvdXQiLCJpc09uZUFuY2VzdG9yT2ZPdGhlciIsImZpcnN0Tm9kZSIsInNlY29uZE5vZGUiLCJvd25lckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwibGNhIiwic291cmNlSW5MY2EiLCJ0YXJnZXRJbkxjYSIsImNhbGNMb3dlc3RDb21tb25BbmNlc3RvciIsImZpcnN0T3duZXJHcmFwaCIsInNlY29uZE93bmVyR3JhcGgiLCJjYWxjSW5jbHVzaW9uVHJlZURlcHRocyIsImRlcHRoIiwiaW5jbHVzaW9uVHJlZURlcHRoIiwiaW5jbHVkZXNJbnZhbGlkRWRnZSIsInZFZGdlIiwiaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0IiwiYmVuZHBvaW50cyIsImdldFNvdXJjZSIsImdldFRhcmdldCIsImdldExlbmd0aCIsImdldEJlbmRwb2ludHMiLCJnZXRMY2EiLCJnZXRTb3VyY2VJbkxjYSIsImdldFRhcmdldEluTGNhIiwiZ2V0T3RoZXJFbmQiLCJvdGhlckVuZCIsInVwZGF0ZUxlbmd0aCIsImNsaXBQb2ludENvb3JkaW5hdGVzIiwiZ2V0UmVjdCIsImxlbmd0aFgiLCJsZW5ndGhZIiwidXBkYXRlTGVuZ3RoU2ltcGxlIiwiZ20iLCJsb2MiLCJ2Tm9kZSIsInJlY3QiLCJnZXRDaGlsZCIsImdldENlbnRlciIsImdldERpYWdvbmFsIiwic2V0UmVjdCIsInVwcGVyTGVmdCIsImRpbWVuc2lvbiIsInNldENlbnRlciIsImN4IiwiY3kiLCJtb3ZlQnkiLCJnZXRFZGdlTGlzdFRvTm9kZSIsInRvIiwiZ2V0RWRnZXNCZXR3ZWVuIiwib3RoZXIiLCJnZXROZWlnaGJvcnNMaXN0IiwibmVpZ2hib3JzIiwid2l0aE5laWdoYm9yc0xpc3QiLCJTZXQiLCJjaGlsZE5vZGUiLCJjaGlsZHJlbiIsImdldE5vT2ZDaGlsZHJlbiIsIm5vT2ZDaGlsZHJlbiIsInNjYXR0ZXIiLCJyYW5kb21DZW50ZXJYIiwicmFuZG9tQ2VudGVyWSIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJjaGlsZEdyYXBoIiwibGFiZWxXaWR0aCIsImxhYmVsSGVpZ2h0IiwibGFiZWxQb3MiLCJ0cmFuc2Zvcm0iLCJ0cmFucyIsImxlZnRUb3AiLCJ2TGVmdFRvcCIsIkVtaXR0ZXIiLCJpc1JlbW90ZVVzZSIsImxheW91dFF1YWxpdHkiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiaW5jcmVtZW50YWwiLCJhbmltYXRpb25PbkxheW91dCIsImFuaW1hdGlvbkR1cmluZ0xheW91dCIsImFuaW1hdGlvblBlcmlvZCIsInVuaWZvcm1MZWFmTm9kZVNpemVzIiwiZWRnZVRvRHVtbXlOb2RlcyIsImlzTGF5b3V0RmluaXNoZWQiLCJpc1N1YkxheW91dCIsIlJBTkRPTV9TRUVEIiwibmV3R3JhcGhNYW5hZ2VyIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwidGlsaW5nUHJlTGF5b3V0IiwiaW5pdFBhcmFtZXRlcnMiLCJpc0xheW91dFN1Y2Nlc3NmdWxsIiwiQU5JTUFURSIsImRvUG9zdExheW91dCIsInRpbGluZ1Bvc3RMYXlvdXQiLCJ1cGRhdGUiLCJ1cGRhdGUyIiwiY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzIiwibmV3TGVmdFRvcCIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsImdldEZsYXRGb3Jlc3QiLCJmbGF0Rm9yZXN0IiwiaXNGb3Jlc3QiLCJpc0ZsYXQiLCJwYXJlbnRzIiwidW5Qcm9jZXNzZWROb2RlcyIsImNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzIiwiZHVtbXlOb2RlcyIsImR1bW15Tm9kZSIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsImsiLCJsRWRnZSIsInBhdGgiLCJlYnAiLCJzbGlkZXJWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsIm1pbkRpdiIsIm1heE11bCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJmaW5kQ2VudGVyT2ZUcmVlIiwicmVtb3ZlZE5vZGVzIiwicmVtYWluaW5nRGVncmVlcyIsImZvdW5kQ2VudGVyIiwiY2VudGVyTm9kZSIsImRlZ3JlZSIsInRlbXBMaXN0IiwidGVtcExpc3QyIiwibmVpZ2hib3VycyIsIm5laWdoYm91ciIsIm90aGVyRGVncmVlIiwibmV3RGVncmVlIiwic2V0R3JhcGhNYW5hZ2VyIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJldmVudCIsImNhbGxiYWNrIiwicmVtb3ZlTGlzdGVuZXIiLCJsIiwiZW1pdCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFD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QWpCLEMiLCJmaWxlIjoibGF5b3V0LWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXlvdXRCYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheW91dEJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IGxheW91dEJhc2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm47XG59O1xuXG5sYXlvdXRCYXNlLkRpbWVuc2lvbkQgPSByZXF1aXJlKCcuL3NyYy91dGlsL0RpbWVuc2lvbkQnKTtcbmxheW91dEJhc2UuSGFzaE1hcCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSGFzaE1hcCcpO1xubGF5b3V0QmFzZS5IYXNoU2V0ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9IYXNoU2V0Jyk7XG5sYXlvdXRCYXNlLklHZW9tZXRyeSA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSUdlb21ldHJ5Jyk7XG5sYXlvdXRCYXNlLklNYXRoID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9JTWF0aCcpO1xubGF5b3V0QmFzZS5JbnRlZ2VyID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9JbnRlZ2VyJyk7XG5sYXlvdXRCYXNlLlBvaW50ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9Qb2ludCcpO1xubGF5b3V0QmFzZS5Qb2ludEQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1BvaW50RCcpO1xubGF5b3V0QmFzZS5SYW5kb21TZWVkID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9SYW5kb21TZWVkJyk7XG5sYXlvdXRCYXNlLlJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1JlY3RhbmdsZUQnKTtcbmxheW91dEJhc2UuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9UcmFuc2Zvcm0nKTtcbmxheW91dEJhc2UuVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL3NyYy91dGlsL1VuaXF1ZUlER2VuZXJldG9yJyk7XG5sYXlvdXRCYXNlLlF1aWNrc29ydCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvUXVpY2tzb3J0Jyk7XG5sYXlvdXRCYXNlLkxpbmtlZExpc3QgPSByZXF1aXJlKCcuL3NyYy91dGlsL0xpbmtlZExpc3QnKTtcbmxheW91dEJhc2UuTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9zcmMvTEdyYXBoT2JqZWN0Jyk7XG5sYXlvdXRCYXNlLkxHcmFwaCA9IHJlcXVpcmUoJy4vc3JjL0xHcmFwaCcpO1xubGF5b3V0QmFzZS5MRWRnZSA9IHJlcXVpcmUoJy4vc3JjL0xFZGdlJyk7XG5sYXlvdXRCYXNlLkxHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL3NyYy9MR3JhcGhNYW5hZ2VyJyk7XG5sYXlvdXRCYXNlLkxOb2RlID0gcmVxdWlyZSgnLi9zcmMvTE5vZGUnKTtcbmxheW91dEJhc2UuTGF5b3V0ID0gcmVxdWlyZSgnLi9zcmMvTGF5b3V0Jyk7XG5sYXlvdXRCYXNlLkxheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vc3JjL0xheW91dENvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxheW91dEJhc2U7XG5cblxuIiwiZnVuY3Rpb24gRGltZW5zaW9uRCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgdGhpcy53aWR0aCA9IDA7XHJcbiAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gIGlmICh3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGwpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcclxue1xyXG4gIHRoaXMud2lkdGggPSB3aWR0aDtcclxufTtcclxuXHJcbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5oZWlnaHQ7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxyXG57XHJcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XHJcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcclxuXHJcbmZ1bmN0aW9uIEhhc2hNYXAoKSB7XHJcbiAgdGhpcy5tYXAgPSB7fTtcclxuICB0aGlzLmtleXMgPSBbXTtcclxufVxyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xyXG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHtcclxuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xyXG4gICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcclxuICB9XHJcbn07XHJcblxyXG5IYXNoTWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xyXG4gIHJldHVybiB0aGlzLm1hcFtrZXldICE9IG51bGw7XHJcbn07XHJcblxyXG5IYXNoTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcclxuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xyXG59O1xyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmtleXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hNYXA7XHJcbiIsImZ1bmN0aW9uIFVuaXF1ZUlER2VuZXJldG9yKCkge1xyXG59XHJcblxyXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG9iai51bmlxdWVJRDtcclxuICB9XHJcbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XHJcbiAgVW5pcXVlSURHZW5lcmV0b3IubGFzdElEKys7XHJcbiAgcmV0dXJuIG9iai51bmlxdWVJRDtcclxufVxyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgaWYgKGlkID09IG51bGwpXHJcbiAgICBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcclxuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XHJcbn1cclxuXHJcblVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24gKGFyZykge1xyXG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcclxuICByZXR1cm4gYXJnID09IG51bGwgfHwgKHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XHJcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcclxuXHJcbmZ1bmN0aW9uIEhhc2hTZXQoKSB7XHJcbiAgdGhpcy5zZXQgPSB7fTtcclxufVxyXG47XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKTtcclxuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKVxyXG4gICAgdGhpcy5zZXRbdGhlSWRdID0gb2JqO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIGRlbGV0ZSB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXTtcclxufTtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuc2V0ID0ge307XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcclxuICByZXR1cm4gdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV0gPT0gb2JqO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xyXG59O1xyXG5cclxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XHJcbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbFRvID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KTtcclxuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgbGlzdC5wdXNoKHRoaXMuc2V0W2tleXNbaV1dKTtcclxuICB9XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICB2YXIgcyA9IGxpc3QubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XHJcbiAgICB2YXIgdiA9IGxpc3RbaV07XHJcbiAgICB0aGlzLmFkZCh2KTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XHJcbiIsImZ1bmN0aW9uIElHZW9tZXRyeSgpIHtcclxufVxyXG5cclxuSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgc2VwYXJhdGlvbkJ1ZmZlcilcclxue1xyXG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcclxuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcclxuICBvdmVybGFwQW1vdW50WzBdID0gTWF0aC5taW4ocmVjdEEuZ2V0UmlnaHQoKSwgcmVjdEIuZ2V0UmlnaHQoKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XHJcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IE1hdGgubWluKHJlY3RBLmdldEJvdHRvbSgpLCByZWN0Qi5nZXRCb3R0b20oKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XHJcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxyXG4gIGlmICgocmVjdEEuZ2V0WCgpIDw9IHJlY3RCLmdldFgoKSkgJiYgKHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkpXHJcbiAge1xyXG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcclxuICAgICAgICAgICAgKHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcclxuICB7XHJcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0QS5nZXRYKCkgLSByZWN0Qi5nZXRYKCkpLFxyXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcclxuICB9XHJcbiAgaWYgKChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpKSAmJiAocmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0QS5nZXRCb3R0b20oKSAtIHJlY3RCLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRZKCkgPD0gcmVjdEEuZ2V0WSgpKSAmJiAocmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xyXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC9cclxuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcclxuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXHJcbiAgaWYgKChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAmJlxyXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxyXG4gIHtcclxuICAgIC8vIGFzc3VtZSB0aGUgc2xvcGUgaXMgMSAoNDUgZGVncmVlKVxyXG4gICAgc2xvcGUgPSAxLjA7XHJcbiAgfVxyXG5cclxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcclxuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcclxuICBpZiAob3ZlcmxhcEFtb3VudFswXSA8IG1vdmVCeVgpXHJcbiAge1xyXG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBtb3ZlQnlZID0gb3ZlcmxhcEFtb3VudFsxXTtcclxuICB9XHJcbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXHJcbiAgLy8gYW1vdW50cyBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zLCBvdmVybGFwIHdpbGwgYmUgcmVzb2x2ZWRcclxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxuICBvdmVybGFwQW1vdW50WzFdID0gLTEgKiBkaXJlY3Rpb25zWzFdICogKChtb3ZlQnlZIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxufVxyXG5cclxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucylcclxue1xyXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XHJcbiAgfVxyXG5cclxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpXHJcbntcclxuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcclxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xyXG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XHJcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcclxuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xyXG5cclxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcclxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpXHJcbiAge1xyXG4gICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgcmVzdWx0WzFdID0gcDF5O1xyXG4gICAgcmVzdWx0WzJdID0gcDJ4O1xyXG4gICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxyXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxyXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcclxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XHJcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXHJcbiAgaWYgKHAxeCA9PSBwMngpXHJcbiAge1xyXG4gICAgaWYgKHAxeSA+IHAyeSlcclxuICAgIHtcclxuICAgICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcclxuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcclxuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xyXG4gICAgICByZXN1bHRbMl0gPSBwMng7XHJcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvL25vdCBsaW5lLCByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gbGluZSBpcyBob3Jpem9udGFsXHJcbiAgZWxzZSBpZiAocDF5ID09IHAyeSlcclxuICB7XHJcbiAgICBpZiAocDF4ID4gcDJ4KVxyXG4gICAge1xyXG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXggPCBwMngpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xyXG4gICAgICByZXN1bHRbM10gPSBwMnk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy9ub3QgdmFsaWQgbGluZSwgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xyXG4gICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xyXG4gICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xyXG5cclxuICAgIC8vc2xvcGUgb2YgbGluZSBiZXR3ZWVuIGNlbnRlciBvZiByZWN0QSBhbmQgY2VudGVyIG9mIHJlY3RCXHJcbiAgICB2YXIgc2xvcGVQcmltZSA9IChwMnkgLSBwMXkpIC8gKHAyeCAtIHAxeCk7XHJcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xyXG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQjtcclxuICAgIHZhciB0ZW1wUG9pbnRBeDtcclxuICAgIHZhciB0ZW1wUG9pbnRBeTtcclxuICAgIHZhciB0ZW1wUG9pbnRCeDtcclxuICAgIHZhciB0ZW1wUG9pbnRCeTtcclxuXHJcbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcclxuICAgIGlmICgoLXNsb3BlQSkgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbG9wZUEgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXHJcbiAgICBpZiAoKC1zbG9wZUIpID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21MZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcclxuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcclxuICAgIGlmIChwMXggPiBwMngpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXHJcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcclxuICAgIHtcclxuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XHJcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xyXG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQilcclxuICAgICAge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcclxuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21SaWdodEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IGJvdHRvbUxlZnRCeTtcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XHJcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tTGVmdEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbklHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzbG9wZSwgc2xvcGVQcmltZSwgbGluZSlcclxue1xyXG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXHJcbiAge1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChzMSwgczIsIGYxLCBmMilcclxue1xyXG4gIGlmIChmMiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XHJcbiAgfVxyXG4gIHZhciB4MSA9IHMxLng7XHJcbiAgdmFyIHkxID0gczEueTtcclxuICB2YXIgeDIgPSBzMi54O1xyXG4gIHZhciB5MiA9IHMyLnk7XHJcbiAgdmFyIHgzID0gZjEueDtcclxuICB2YXIgeTMgPSBmMS55O1xyXG4gIHZhciB4NCA9IGYyLng7XHJcbiAgdmFyIHk0ID0gZjIueTtcclxuICB2YXIgeCwgeTsgLy8gaW50ZXJzZWN0aW9uIHBvaW50XHJcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXHJcbiAgdmFyIGRlbm9tO1xyXG5cclxuICBhMSA9IHkyIC0geTE7XHJcbiAgYjEgPSB4MSAtIHgyO1xyXG4gIGMxID0geDIgKiB5MSAtIHgxICogeTI7ICAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XHJcblxyXG4gIGEyID0geTQgLSB5MztcclxuICBiMiA9IHgzIC0geDQ7XHJcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cclxuXHJcbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcclxuXHJcbiAgaWYgKGRlbm9tID09IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xyXG4gIHkgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gZGVub207XHJcblxyXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKipcclxuICogU29tZSB1c2VmdWwgcHJlLWNhbGN1bGF0ZWQgY29uc3RhbnRzXHJcbiAqL1xyXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XHJcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xyXG5JR2VvbWV0cnkuVFdPX1BJID0gMi4wICogTWF0aC5QSTtcclxuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSUdlb21ldHJ5O1xyXG4iLCJmdW5jdGlvbiBJTWF0aCgpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxyXG4gKi9cclxuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA+IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHZhbHVlIDwgMClcclxuICB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuXHJcbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcclxufVxyXG5cclxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSU1hdGg7XHJcbiIsImZ1bmN0aW9uIEludGVnZXIoKSB7XHJcbn1cclxuXHJcbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcclxuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcclxuIiwiLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cclxuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xyXG4gIHRoaXMueCA9IG51bGw7XHJcbiAgdGhpcy55ID0gbnVsbDtcclxuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gIH1cclxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuICBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XHJcbiAgICBwID0geDtcclxuICAgIHRoaXMueCA9IHAueDtcclxuICAgIHRoaXMueSA9IHAueTtcclxuICB9XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxufVxyXG5cclxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcclxuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xyXG4gICAgcCA9IHg7XHJcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XHJcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cclxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcclxuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XHJcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoeSArIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xyXG4gIHRoaXMueCArPSBkeDtcclxuICB0aGlzLnkgKz0gZHk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xyXG4gICAgdmFyIHB0ID0gb2JqO1xyXG4gICAgcmV0dXJuICh0aGlzLnggPT0gcHQueCkgJiYgKHRoaXMueSA9PSBwdC55KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQb2ludCgpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xyXG4iLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xyXG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueDtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXHJcbntcclxuICB0aGlzLnkgPSB5O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxyXG57XHJcbiAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIHB0LngsIHRoaXMueSAtIHB0LnkpO1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSlcclxue1xyXG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XHJcbiAgdGhpcy55ICs9IGRpbS5oZWlnaHQ7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcclxuIiwiZnVuY3Rpb24gUmFuZG9tU2VlZCgpIHtcclxufVxyXG5SYW5kb21TZWVkLnNlZWQgPSAxO1xyXG5SYW5kb21TZWVkLnggPSAwO1xyXG5cclxuUmFuZG9tU2VlZC5uZXh0RG91YmxlID0gZnVuY3Rpb24gKCkge1xyXG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xyXG4gIHJldHVybiBSYW5kb21TZWVkLnggLSBNYXRoLmZsb29yKFJhbmRvbVNlZWQueCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmRvbVNlZWQ7XHJcbiIsImZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIHRoaXMueCA9IDA7XHJcbiAgdGhpcy55ID0gMDtcclxuICB0aGlzLndpZHRoID0gMDtcclxuICB0aGlzLmhlaWdodCA9IDA7XHJcblxyXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdGhpcy55ID0geTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLndpZHRoO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXHJcbntcclxuICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcclxue1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxyXG57XHJcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueClcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSlcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdldFgoKTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZUQ7XHJcbiIsInZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xyXG5cclxuZnVuY3Rpb24gVHJhbnNmb3JtKHgsIHkpIHtcclxuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XHJcbiAgdGhpcy5sd29ybGRPcmdZID0gMC4wO1xyXG4gIHRoaXMubGRldmljZU9yZ1ggPSAwLjA7XHJcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcclxuICB0aGlzLmx3b3JsZEV4dFggPSAxLjA7XHJcbiAgdGhpcy5sd29ybGRFeHRZID0gMS4wO1xyXG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XHJcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IDEuMDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KVxyXG57XHJcbiAgdGhpcy5sd29ybGRPcmdYID0gd294O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICh3b3kpXHJcbntcclxuICB0aGlzLmx3b3JsZE9yZ1kgPSB3b3k7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKHdleClcclxue1xyXG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KVxyXG57XHJcbiAgdGhpcy5sd29ybGRFeHRZID0gd2V5O1xyXG59XHJcblxyXG4vKiBEZXZpY2UgcmVsYXRlZCAqL1xyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IGRveDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoZG95KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IGRveTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFggPSBmdW5jdGlvbiAoZGV4KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IGRleTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB2YXIgeERldmljZSA9IDAuMDtcclxuICB2YXIgd29ybGRFeHRYID0gdGhpcy5sd29ybGRFeHRYO1xyXG4gIGlmICh3b3JsZEV4dFggIT0gMC4wKVxyXG4gIHtcclxuICAgIHhEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdYICtcclxuICAgICAgICAgICAgKCh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHhEZXZpY2U7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdmFyIHlEZXZpY2UgPSAwLjA7XHJcbiAgdmFyIHdvcmxkRXh0WSA9IHRoaXMubHdvcmxkRXh0WTtcclxuICBpZiAod29ybGRFeHRZICE9IDAuMClcclxuICB7XHJcbiAgICB5RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWSArXHJcbiAgICAgICAgICAgICgoeSAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gd29ybGRFeHRZKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4geURldmljZTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxyXG57XHJcbiAgdmFyIHhXb3JsZCA9IDAuMDtcclxuICB2YXIgZGV2aWNlRXh0WCA9IHRoaXMubGRldmljZUV4dFg7XHJcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKVxyXG4gIHtcclxuICAgIHhXb3JsZCA9IHRoaXMubHdvcmxkT3JnWCArXHJcbiAgICAgICAgICAgICgoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHhXb3JsZDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdmFyIHlXb3JsZCA9IDAuMDtcclxuICB2YXIgZGV2aWNlRXh0WSA9IHRoaXMubGRldmljZUV4dFk7XHJcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKVxyXG4gIHtcclxuICAgIHlXb3JsZCA9IHRoaXMubHdvcmxkT3JnWSArXHJcbiAgICAgICAgICAgICgoeSAtIHRoaXMubGRldmljZU9yZ1kpICogdGhpcy5sd29ybGRFeHRZIC8gZGV2aWNlRXh0WSk7XHJcbiAgfVxyXG4gIHJldHVybiB5V29ybGQ7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpXHJcbntcclxuICB2YXIgb3V0UG9pbnQgPVxyXG4gICAgICAgICAgbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XHJcbiAgcmV0dXJuIG91dFBvaW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcclxuIiwiY29uc3QgTGlua2VkTGlzdCA9IHJlcXVpcmUoJy4vTGlua2VkTGlzdC5qcycpO1xuXG5mdW5jdGlvbiBRdWlja3NvcnQoKXtcblxufVxuXG5RdWlja3NvcnQuZ2V0X29iamVjdF9hdCA9ICBmdW5jdGlvbihsaXN0LCBpKXtcbiAgICBpZiggbGlzdCBpbnN0YW5jZW9mIFtdKXtcbiAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgfVxuICAgIGVsc2UgaWYobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3Qpe1xuICAgICAgICByZXR1cm4gbGlzdC5nZXRfb2JqZWN0X2F0KGkpO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5zZXRfb2JqZWN0X2F0ID0gIGZ1bmN0aW9uKGxpc3QsIGksIHZhbHVlKXtcbiAgICBpZiggbGlzdCBpbnN0YW5jZW9mIFtdKXtcbiAgICAgICAgbGlzdFtpXSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KXtcbiAgICAgICAgbGlzdC5zZXRfb2JqZWN0X2F0KGksIHZhbHVlKTtcbiAgICB9XG59O1xuXG5RdWlja3NvcnQucXVpY2tzb3J0ID0gZnVuY3Rpb24obGlzdCwgY29tcGFyaXNvbl9mbil7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEgKCAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHx8ICggbGlzdCBpbnN0YW5jZW9mIFtdKSkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoY29tcGFyaXNvbl9mbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29tcGFyaXNvbl9mbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cbiAgICB2YXIgZW5kX2luZGV4O1xuXG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KXtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5zaXplKCk7XG4gICAgfVxuICAgIGVsc2UgaWYoIGxpc3QgaW5zdGFuY2VvZiBbXSApe1xuICAgICAgICBlbmRfaW5kZXggPSBsaXN0Lmxlbmd0aC0xO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZW1wdHkgbGlzdHMgb3IgYXJyYXlzLlxuICAgIGlmIChlbmRfaW5kZXggPj0gMCl7XG4gICAgICAgIFF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzKDAsIGVuZF9pbmRleCk7XG4gICAgfVxuXG59O1xuXG5cblF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzID0gZnVuY3Rpb24obGlzdCwgbG93LCBoaWdoLCBjb21wYXJpc29uX2ZuKXtcblxuICAgIC8vIGlucHV0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgTGlua2VkTGlzdCBjbGFzcyBvciBtdXN0IGJlIGFuIGFycmF5IGluIG9yZGVyIHRvIHNvcnRcbiAgICBpZiAoISAoIChsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCkgfHwgKCBsaXN0IGluc3RhbmNlb2YgW10pKSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihjb21wYXJpc29uX2ZuID09PSB1bmRlZmluZWQpe1xuICAgICAgICBjb21wYXJpc29uX2ZuID0gUXVpY2tzb3J0LmNvbXBhcmU7XG4gICAgfVxuXG4gICAgdmFyIGkgPSBsb3c7XG4gICAgdmFyIGogPSBoaWdoO1xuICAgIHZhciBtaWRkbGVJbmRleCA9ICggaSArIGogKSAvIDI7XG4gICAgdmFyIG1pZGRsZSA9IFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIG1pZGRsZUluZGV4KTtcblxuICAgIGRvXG4gICAge1xuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpLCBtaWRkbGUpKXtcblxuICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY29tcGFyaXNvbl9mbihtaWRkbGUsIFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGopKSl7XG5cbiAgICAgICAgICAgIGotLTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPD0gail7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wID0gUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaSk7XG4gICAgICAgICAgICBRdWlja3NvcnQuc2V0X29iamVjdF9hdChsaXN0LCBpLCBRdWlja3NvcnQuZ2V0T2JqZWN0QXQoaikpO1xuICAgICAgICAgICAgUXVpY2tzb3J0LnNldF9vYmplY3RfYXQobGlzdCwgaiwgdGVtcCk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG5cbiAgICAgICAgfVxuXG4gICAgfSB3aGlsZSAoaTw9aik7XG5cbiAgICBpZiggbG93IDwgaiApe1xuXG4gICAgICAgIFF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzKGxvdywgaik7XG5cbiAgICB9XG5cbiAgICBpZiggaGlnaCA+IGkpe1xuXG4gICAgICAgIFF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzKGksIGhpZ2gpO1xuXG4gICAgfVxuXG59O1xuXG4vLyB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgb3ZlcnJpZGVuIGZvciBzb3J0aW5nIGRpZmZlcmVudCBkYXRhIHR5cGVzKGUuZy4gc3RyaW5nLCBpbnRlZ2VyIGV0Yy4pXG5RdWlja3NvcnQuY29tcGFyZSA9IGZ1bmN0aW9uKGEsYil7XG4gICAgcmV0dXJuIGIgPiBhO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1aWNrc29ydDsiLCJjb25zdCBub2RlRnJvbSA9IHZhbHVlID0+ICh7IHZhbHVlLCBuZXh0OiBudWxsLCBwcmV2OiBudWxsIH0pO1xyXG5cclxuY29uc3QgYWRkID0gKCBwcmV2LCBub2RlLCBuZXh0LCBsaXN0ICkgPT4ge1xyXG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XHJcbiAgICBwcmV2Lm5leHQgPSBub2RlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgaWYoIG5leHQgIT09IG51bGwgKXtcclxuICAgIG5leHQucHJldiA9IG5vZGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpc3QudGFpbCA9IG5vZGU7XHJcbiAgfVxyXG5cclxuICBub2RlLnByZXYgPSBwcmV2O1xyXG4gIG5vZGUubmV4dCA9IG5leHQ7XHJcblxyXG4gIGxpc3QubGVuZ3RoKys7XHJcblxyXG4gIHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlID0gKCBub2RlLCBsaXN0ICkgPT4ge1xyXG4gIGxldCB7IHByZXYsIG5leHQgfSA9IG5vZGU7XHJcblxyXG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XHJcbiAgICBwcmV2Lm5leHQgPSBuZXh0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0LmhlYWQgPSBuZXh0O1xyXG4gIH1cclxuXHJcbiAgaWYoIG5leHQgIT09IG51bGwgKXtcclxuICAgIG5leHQucHJldiA9IHByZXY7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpc3QudGFpbCA9IHByZXY7XHJcbiAgfVxyXG5cclxuICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xyXG5cclxuICBsaXN0Lmxlbmd0aC0tO1xyXG5cclxuICByZXR1cm4gbm9kZTtcclxufTtcclxuXHJcbmNsYXNzIExpbmtlZExpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCB2YWxzICl7XHJcbiAgICB0aGlzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xyXG4gICAgdGhpcy50YWlsID0gbnVsbDtcclxuXHJcbiAgICBpZiggdmFscyAhPSBudWxsICl7XHJcbiAgICAgIHZhbHMuZm9yRWFjaCggdiA9PiB0aGlzLnB1c2godikgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpemUoKXtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGluc2VydEJlZm9yZSggdmFsLCBvdGhlck5vZGUgKXtcclxuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIGluc2VydEFmdGVyKCB2YWwsIG90aGVyTm9kZSApe1xyXG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0Tm9kZUJlZm9yZSggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XHJcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnROb2RlQWZ0ZXIoIG5ld05vZGUsIG90aGVyTm9kZSApe1xyXG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBuZXdOb2RlLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgcHVzaCggdmFsICl7XHJcbiAgICByZXR1cm4gYWRkKCB0aGlzLnRhaWwsIG5vZGVGcm9tKHZhbCksIG51bGwsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHVuc2hpZnQoIHZhbCApe1xyXG4gICAgcmV0dXJuIGFkZCggbnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoIG5vZGUgKXtcclxuICAgIHJldHVybiByZW1vdmUoIG5vZGUsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHBvcCgpe1xyXG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwb3BOb2RlKCl7XHJcbiAgICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBzaGlmdCgpe1xyXG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzaGlmdE5vZGUoKXtcclxuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgZ2V0X29iamVjdF9hdCggaW5kZXggKXtcclxuICAgIGlmKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpe1xyXG4gICAgICB2YXIgaSA9IDE7XHJcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgICB3aGlsZShpIDwgaW5kZXgpe1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0X29iamVjdF9hdCggaW5kZXgsIHZhbHVlKXtcclxuICAgIGlmKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpIHtcclxuICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdDtcclxuIiwiZnVuY3Rpb24gTEdyYXBoT2JqZWN0KHZHcmFwaE9iamVjdCkge1xyXG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkdyYXBoT2JqZWN0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE9iamVjdDtcclxuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XHJcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi91dGlsL0ludGVnZXInKTtcclxudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XHJcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XHJcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcclxudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xyXG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vdXRpbC9IYXNoU2V0Jyk7XHJcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi91dGlsL1JlY3RhbmdsZUQnKTtcclxudmFyIFBvaW50ID0gcmVxdWlyZSgnLi91dGlsL1BvaW50Jyk7XHJcbnZhciBMaW5rZWRMaXN0ID0gcmVxdWlyZSgnLi91dGlsL0xpbmtlZExpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xyXG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZHcmFwaCk7XHJcbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XHJcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XHJcbiAgdGhpcy5lZGdlcyA9IFtdO1xyXG4gIHRoaXMubm9kZXMgPSBbXTtcclxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcclxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMjtcclxuICB9XHJcbiAgZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcclxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMi5ncmFwaE1hbmFnZXI7XHJcbiAgfVxyXG59XHJcblxyXG5MR3JhcGgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcclxuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcclxuICBMR3JhcGhbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XHJcbn1cclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMubm9kZXM7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmVkZ2VzO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucGFyZW50O1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxlZnQ7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJpZ2h0O1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMudG9wO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5pc0Nvbm5lY3RlZDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iajEsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcclxuICBpZiAoc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xyXG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xyXG4gICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJHcmFwaCBoYXMgbm8gZ3JhcGggbWdyIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKG5ld05vZGUpID4gLTEpIHtcclxuICAgICAgdGhyb3cgXCJOb2RlIGFscmVhZHkgaW4gZ3JhcGghXCI7XHJcbiAgICB9XHJcbiAgICBuZXdOb2RlLm93bmVyID0gdGhpcztcclxuICAgIHRoaXMuZ2V0Tm9kZXMoKS5wdXNoKG5ld05vZGUpO1xyXG5cclxuICAgIHJldHVybiBuZXdOb2RlO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBuZXdFZGdlID0gb2JqMTtcclxuICAgIGlmICghKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHNvdXJjZU5vZGUpID4gLTEgJiYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHRhcmdldE5vZGUpKSA+IC0xKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBvciB0YXJnZXQgbm90IGluIGdyYXBoIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKHNvdXJjZU5vZGUub3duZXIgPT0gdGFyZ2V0Tm9kZS5vd25lciAmJiBzb3VyY2VOb2RlLm93bmVyID09IHRoaXMpKSB7XHJcbiAgICAgIHRocm93IFwiQm90aCBvd25lcnMgbXVzdCBiZSB0aGlzIGdyYXBoIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3VyY2VOb2RlLm93bmVyICE9IHRhcmdldE5vZGUub3duZXIpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxyXG4gICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xyXG4gICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xyXG5cclxuICAgIC8vIHNldCBhcyBpbnRyYS1ncmFwaCBlZGdlXHJcbiAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGFkZCB0byBncmFwaCBlZGdlIGxpc3RcclxuICAgIHRoaXMuZ2V0RWRnZXMoKS5wdXNoKG5ld0VkZ2UpO1xyXG5cclxuICAgIC8vIGFkZCB0byBpbmNpZGVuY3kgbGlzdHNcclxuICAgIHNvdXJjZU5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0Tm9kZSAhPSBzb3VyY2VOb2RlKVxyXG4gICAge1xyXG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0VkZ2U7XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIG5vZGUgPSBvYmo7XHJcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XHJcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiTm9kZSBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEobm9kZS5vd25lciAhPSBudWxsICYmIG5vZGUub3duZXIgPT0gdGhpcykpIHtcclxuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBpcyBpbnZhbGlkIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBtYW5hZ2VyIGlzIGludmFsaWQhXCI7XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgaW5jaWRlbnQgZWRnZXMgZmlyc3QgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcclxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gbm9kZS5lZGdlcy5zbGljZSgpO1xyXG4gICAgdmFyIGVkZ2U7XHJcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UgPSBlZGdlc1RvQmVSZW1vdmVkW2ldO1xyXG5cclxuICAgICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGVkZ2Uuc291cmNlLm93bmVyLnJlbW92ZShlZGdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG5vdyB0aGUgbm9kZSBpdHNlbGZcclxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcclxuICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICB0aHJvdyBcIk5vZGUgbm90IGluIG93bmVyIG5vZGUgbGlzdCFcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XHJcbiAgICB2YXIgZWRnZSA9IG9iajtcclxuICAgIGlmIChlZGdlID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgb3duZXIgaXMgaW52YWxpZCFcIjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc291cmNlSW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xyXG4gICAgdmFyIHRhcmdldEluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShzb3VyY2VJbmRleCwgMSk7XHJcblxyXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKVxyXG4gICAge1xyXG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcclxuICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lcidzIGVkZ2UgbGlzdCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBlZGdlLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBub2RlVG9wO1xyXG4gIHZhciBub2RlTGVmdDtcclxuICB2YXIgbWFyZ2luO1xyXG5cclxuICB2YXIgbm9kZXMgPSB0aGlzLmdldE5vZGVzKCk7XHJcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xyXG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XHJcblxyXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXHJcbiAgICB7XHJcbiAgICAgIHRvcCA9IG5vZGVUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcclxuICAgIHtcclxuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRG8gd2UgaGF2ZSBhbnkgbm9kZXMgaW4gdGhpcyBncmFwaD9cclxuICBpZiAodG9wID09IEludGVnZXIuTUFYX1ZBTFVFKVxyXG4gIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcclxuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XHJcbiAgfVxyXG5cclxuICB0aGlzLmxlZnQgPSBsZWZ0IC0gbWFyZ2luO1xyXG4gIHRoaXMudG9wID0gdG9wIC0gbWFyZ2luO1xyXG5cclxuICAvLyBBcHBseSB0aGUgbWFyZ2lucyBhbmQgcmV0dXJuIHRoZSByZXN1bHRcclxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAocmVjdXJzaXZlKVxyXG57XHJcbiAgLy8gY2FsY3VsYXRlIGJvdW5kc1xyXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBub2RlTGVmdDtcclxuICB2YXIgbm9kZVJpZ2h0O1xyXG4gIHZhciBub2RlVG9wO1xyXG4gIHZhciBub2RlQm90dG9tO1xyXG4gIHZhciBtYXJnaW47XHJcblxyXG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XHJcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XHJcblxyXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiBsTm9kZS5jaGlsZCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcclxuICAgIH1cclxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xyXG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcclxuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcclxuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcclxuXHJcbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxyXG4gICAge1xyXG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxyXG4gICAge1xyXG4gICAgICByaWdodCA9IG5vZGVSaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9wID4gbm9kZVRvcClcclxuICAgIHtcclxuICAgICAgdG9wID0gbm9kZVRvcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcclxuICAgIHtcclxuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcclxuICBpZiAobGVmdCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcclxuICB7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XHJcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5wYXJlbnQuZ2V0UmlnaHQoKTtcclxuICAgIHRoaXMudG9wID0gdGhpcy5wYXJlbnQuZ2V0VG9wKCk7XHJcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xyXG4gIH1cclxuXHJcbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcclxuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XHJcbiAgfVxyXG5cclxuICB0aGlzLmxlZnQgPSBib3VuZGluZ1JlY3QueCAtIG1hcmdpbjtcclxuICB0aGlzLnJpZ2h0ID0gYm91bmRpbmdSZWN0LnggKyBib3VuZGluZ1JlY3Qud2lkdGggKyBtYXJnaW47XHJcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcclxuICB0aGlzLmJvdHRvbSA9IGJvdW5kaW5nUmVjdC55ICsgYm91bmRpbmdSZWN0LmhlaWdodCArIG1hcmdpbjtcclxufTtcclxuXHJcbkxHcmFwaC5jYWxjdWxhdGVCb3VuZHMgPSBmdW5jdGlvbiAobm9kZXMpXHJcbntcclxuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgbm9kZUxlZnQ7XHJcbiAgdmFyIG5vZGVSaWdodDtcclxuICB2YXIgbm9kZVRvcDtcclxuICB2YXIgbm9kZUJvdHRvbTtcclxuXHJcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XHJcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xyXG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xyXG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xyXG5cclxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXHJcbiAgICB7XHJcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXHJcbiAgICB7XHJcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxyXG4gICAge1xyXG4gICAgICB0b3AgPSBub2RlVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKVxyXG4gICAge1xyXG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0LCBib3R0b20gLSB0b3ApO1xyXG5cclxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKVxyXG4gIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIHNpemUgPSAwO1xyXG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XHJcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgc2l6ZSArPSBsTm9kZS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNpemUgPT0gMClcclxuICB7XHJcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBMYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gc2l6ZSAvIE1hdGguc3FydCh0aGlzLm5vZGVzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIGlmICh0aGlzLm5vZGVzLmxlbmd0aCA9PSAwKVxyXG4gIHtcclxuICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHRvQmVWaXNpdGVkID0gbmV3IExpbmtlZExpc3QoKTtcclxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XHJcbiAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5ub2Rlc1swXTtcclxuICB2YXIgbmVpZ2hib3JFZGdlcztcclxuICB2YXIgY3VycmVudE5laWdoYm9yO1xyXG4gIHZhciBjaGlsZHJlbk9mTm9kZSA9IGN1cnJlbnROb2RlLndpdGhDaGlsZHJlbigpO1xyXG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xyXG4gICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcclxuICB9KTtcclxuXHJcbiAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCAhPT0gMClcclxuICB7XHJcbiAgICBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkLnNoaWZ0KCk7XHJcbiAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcclxuICAgIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xyXG4gICAgdmFyIHMgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gICAge1xyXG4gICAgICB2YXIgbmVpZ2hib3JFZGdlID0gbmVpZ2hib3JFZGdlc1tpXTtcclxuICAgICAgY3VycmVudE5laWdoYm9yID1cclxuICAgICAgICAgICAgICBuZWlnaGJvckVkZ2UuZ2V0T3RoZXJFbmRJbkdyYXBoKGN1cnJlbnROb2RlLCB0aGlzKTtcclxuXHJcbiAgICAgIC8vIEFkZCB1bnZpc2l0ZWQgbmVpZ2hib3JzIHRvIHRoZSBsaXN0IHRvIHZpc2l0XHJcbiAgICAgIGlmIChjdXJyZW50TmVpZ2hib3IgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgY2hpbGRyZW5PZk5laWdoYm9yID0gY3VycmVudE5laWdoYm9yLndpdGhDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBjaGlsZHJlbk9mTmVpZ2hib3IuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG4gIGlmICh2aXNpdGVkLnNpemUoKSA+PSB0aGlzLm5vZGVzLmxlbmd0aClcclxuICB7XHJcbiAgICB2YXIgbm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9IDA7XHJcblxyXG4gICAgdmFyIHMgPSB2aXNpdGVkLnNpemUoKTtcclxuICAgICBPYmplY3Qua2V5cyh2aXNpdGVkLnNldCkuZm9yRWFjaChmdW5jdGlvbih2aXNpdGVkSWQpIHtcclxuICAgICAgdmFyIHZpc2l0ZWROb2RlID0gdmlzaXRlZC5zZXRbdmlzaXRlZElkXTtcclxuICAgICAgaWYgKHZpc2l0ZWROb2RlLm93bmVyID09IHNlbGYpXHJcbiAgICAgIHtcclxuICAgICAgICBub09mVmlzaXRlZEluVGhpc0dyYXBoKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaDtcclxuIiwiZnVuY3Rpb24gTGF5b3V0Q29uc3RhbnRzKCkge1xyXG59XHJcblxyXG4vKipcclxuICogTGF5b3V0IFF1YWxpdHlcclxuICovXHJcbkxheW91dENvbnN0YW50cy5QUk9PRl9RVUFMSVRZID0gMDtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWSA9IDE7XHJcbkxheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZID0gMjtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcclxuICovXHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQgPSBmYWxzZTtcclxuLy9MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IHRydWU7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gZmFsc2U7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQgPSB0cnVlO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCA9IGZhbHNlO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EID0gNTA7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTID0gZmFsc2U7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTZWN0aW9uOiBHZW5lcmFsIG90aGVyIGNvbnN0YW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKlxyXG4gKiBNYXJnaW5zIG9mIGEgZ3JhcGggdG8gYmUgYXBwbGllZCBvbiBib3VkaW5nIHJlY3RhbmdsZSBvZiBpdHMgY29udGVudHMuIFdlXHJcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU4gPSAxNTtcclxuXHJcbi8qXHJcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9ucyBvciBub3RcclxuICovXHJcbkxheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBmYWxzZTtcclxuXHJcbi8qXHJcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSA9IDQwO1xyXG5cclxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXHJcbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9IQUxGX1NJWkUgPSBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSAvIDI7XHJcblxyXG4vKlxyXG4gKiBFbXB0eSBjb21wb3VuZCBub2RlIHNpemUuIFdoZW4gYSBjb21wb3VuZCBub2RlIGlzIGVtcHR5LCBpdHMgYm90aFxyXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSA9IDQwO1xyXG5cclxuLypcclxuICogTWluaW11bSBsZW5ndGggdGhhdCBhbiBlZGdlIHNob3VsZCB0YWtlIGR1cmluZyBsYXlvdXRcclxuICovXHJcbkxheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xyXG5cclxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IGxheW91dCBvcGVyYXRlcyBvblxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZID0gMTAwMDAwMDtcclxuXHJcbi8qXHJcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSAvIDEwMDA7XHJcblxyXG4vKlxyXG4gKiBDb29yZGluYXRlcyBvZiB0aGUgd29ybGQgY2VudGVyXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggPSAxMjAwO1xyXG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgPSA5MDA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dENvbnN0YW50cztcclxuIiwidmFyIExHcmFwaDtcclxudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xyXG5cclxuZnVuY3Rpb24gTEdyYXBoTWFuYWdlcihsYXlvdXQpIHtcclxuICBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpOyAvLyBJdCBtYXkgYmUgYmV0dGVyIHRvIGluaXRpbGl6ZSB0aGlzIG91dCBvZiB0aGlzIGZ1bmN0aW9uIGJ1dCBpdCBnaXZlcyBhbiBlcnJvciAoUmlnaHQtaGFuZCBzaWRlIG9mICdpbnN0YW5jZW9mJyBpcyBub3QgY2FsbGFibGUpIG5vdy5cclxuICB0aGlzLmxheW91dCA9IGxheW91dDtcclxuXHJcbiAgdGhpcy5ncmFwaHMgPSBbXTtcclxuICB0aGlzLmVkZ2VzID0gW107XHJcbn1cclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZFJvb3QgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIG5ncmFwaCA9IHRoaXMubGF5b3V0Lm5ld0dyYXBoKCk7XHJcbiAgdmFyIG5ub2RlID0gdGhpcy5sYXlvdXQubmV3Tm9kZShudWxsKTtcclxuICB2YXIgcm9vdCA9IHRoaXMuYWRkKG5ncmFwaCwgbm5vZGUpO1xyXG4gIHRoaXMuc2V0Um9vdEdyYXBoKHJvb3QpO1xyXG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuZXdHcmFwaCwgcGFyZW50Tm9kZSwgbmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSlcclxue1xyXG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcclxuICBpZiAobmV3RWRnZSA9PSBudWxsICYmIHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcclxuICAgIGlmIChuZXdHcmFwaCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JhcGhzLmluZGV4T2YobmV3R3JhcGgpID4gLTEpIHtcclxuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xyXG5cclxuICAgIGlmIChuZXdHcmFwaC5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmVudE5vZGUuY2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyAgXCJBbHJlYWR5IGhhcyBhIGNoaWxkIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0dyYXBoLnBhcmVudCA9IHBhcmVudE5vZGU7XHJcbiAgICBwYXJlbnROb2RlLmNoaWxkID0gbmV3R3JhcGg7XHJcblxyXG4gICAgcmV0dXJuIG5ld0dyYXBoO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIC8vY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgcGFyYW1ldGVyc1xyXG4gICAgdGFyZ2V0Tm9kZSA9IG5ld0VkZ2U7XHJcbiAgICBzb3VyY2VOb2RlID0gcGFyZW50Tm9kZTtcclxuICAgIG5ld0VkZ2UgPSBuZXdHcmFwaDtcclxuICAgIHZhciBzb3VyY2VHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcclxuICAgIHZhciB0YXJnZXRHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgICBpZiAoIShzb3VyY2VHcmFwaCAhPSBudWxsICYmIHNvdXJjZUdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcclxuICAgIH1cclxuICAgIGlmICghKHRhcmdldEdyYXBoICE9IG51bGwgJiYgdGFyZ2V0R3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcclxuICAgICAgdGhyb3cgXCJUYXJnZXQgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3VyY2VHcmFwaCA9PSB0YXJnZXRHcmFwaClcclxuICAgIHtcclxuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIHNvdXJjZUdyYXBoLmFkZChuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSB0cnVlO1xyXG5cclxuICAgICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XHJcbiAgICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcclxuICAgICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xyXG5cclxuICAgICAgLy8gYWRkIGVkZ2UgdG8gaW50ZXItZ3JhcGggZWRnZSBsaXN0XHJcbiAgICAgIGlmICh0aGlzLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPiAtMSkge1xyXG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIGludGVyLWdyYXBoIGVkZ2UgbGlzdCFcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xyXG5cclxuICAgICAgLy8gYWRkIGVkZ2UgdG8gc291cmNlIGFuZCB0YXJnZXQgaW5jaWRlbmN5IGxpc3RzXHJcbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlICE9IG51bGwgJiYgbmV3RWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcclxuICAgICAgICB0aHJvdyBcIkVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSAmJiBuZXdFZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xKSkge1xyXG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdFZGdlLnNvdXJjZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xyXG4gICAgICBuZXdFZGdlLnRhcmdldC5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ld0VkZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGxPYmopIHtcclxuICBpZiAobE9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xyXG4gICAgdmFyIGdyYXBoID0gbE9iajtcclxuICAgIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XHJcbiAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIShncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCB8fCAoZ3JhcGgucGFyZW50ICE9IG51bGwgJiYgZ3JhcGgucGFyZW50LmdyYXBoTWFuYWdlciA9PSB0aGlzKSkpIHtcclxuICAgICAgdGhyb3cgXCJJbnZhbGlkIHBhcmVudCBub2RlIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpcnN0IHRoZSBlZGdlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxyXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBbXTtcclxuXHJcbiAgICBlZGdlc1RvQmVSZW1vdmVkID0gZWRnZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0RWRnZXMoKSk7XHJcblxyXG4gICAgdmFyIGVkZ2U7XHJcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UgPSBlZGdlc1RvQmVSZW1vdmVkW2ldO1xyXG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlbiB0aGUgbm9kZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcclxuICAgIHZhciBub2Rlc1RvQmVSZW1vdmVkID0gW107XHJcblxyXG4gICAgbm9kZXNUb0JlUmVtb3ZlZCA9IG5vZGVzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xyXG5cclxuICAgIHZhciBub2RlO1xyXG4gICAgcyA9IG5vZGVzVG9CZVJlbW92ZWQubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIG5vZGUgPSBub2Rlc1RvQmVSZW1vdmVkW2ldO1xyXG4gICAgICBncmFwaC5yZW1vdmUobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgZ3JhcGggaXMgdGhlIHJvb3RcclxuICAgIGlmIChncmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcclxuICAgIHtcclxuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdyYXBocy5pbmRleE9mKGdyYXBoKTtcclxuICAgIHRoaXMuZ3JhcGhzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgLy8gYWxzbyByZXNldCB0aGUgcGFyZW50IG9mIHRoZSBncmFwaFxyXG4gICAgZ3JhcGgucGFyZW50ID0gbnVsbDtcclxuICB9XHJcbiAgZWxzZSBpZiAobE9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XHJcbiAgICBlZGdlID0gbE9iajtcclxuICAgIGlmIChlZGdlID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XHJcbiAgICAgIHRocm93IFwiTm90IGFuIGludGVyLWdyYXBoIGVkZ2UhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIHNvdXJjZSBhbmQgdGFyZ2V0IG5vZGVzJyBpbmNpZGVuY3kgbGlzdHNcclxuXHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xyXG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XHJcblxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKSAhPSBudWxsKSkge1xyXG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSkgPT0gLTEpIHtcclxuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xyXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0R3JhcGhzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdyYXBocztcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzLmFsbE5vZGVzID09IG51bGwpXHJcbiAge1xyXG4gICAgdmFyIG5vZGVMaXN0ID0gW107XHJcbiAgICB2YXIgZ3JhcGhzID0gdGhpcy5nZXRHcmFwaHMoKTtcclxuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gICAge1xyXG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0Tm9kZXMoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFsbE5vZGVzID0gbm9kZUxpc3Q7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFsbE5vZGVzO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5hbGxFZGdlcyA9IG51bGw7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBudWxsO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbClcclxuICB7XHJcbiAgICB2YXIgZWRnZUxpc3QgPSBbXTtcclxuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xyXG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncmFwaHMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXRFZGdlcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdCh0aGlzLmVkZ2VzKTtcclxuXHJcbiAgICB0aGlzLmFsbEVkZ2VzID0gZWRnZUxpc3Q7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb247XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uIChub2RlTGlzdClcclxue1xyXG4gIGlmICh0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uICE9IG51bGwpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG5vZGVMaXN0O1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRSb290R3JhcGggPSBmdW5jdGlvbiAoZ3JhcGgpXHJcbntcclxuICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xyXG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcclxuICB9XHJcblxyXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XHJcbiAgLy8gcm9vdCBncmFwaCBtdXN0IGhhdmUgYSByb290IG5vZGUgYXNzb2NpYXRlZCB3aXRoIGl0IGZvciBjb252ZW5pZW5jZVxyXG4gIGlmIChncmFwaC5wYXJlbnQgPT0gbnVsbClcclxuICB7XHJcbiAgICBncmFwaC5wYXJlbnQgPSB0aGlzLmxheW91dC5uZXdOb2RlKFwiUm9vdCBub2RlXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldExheW91dCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sYXlvdXQ7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXHJcbntcclxuICBpZiAoIShmaXJzdE5vZGUgIT0gbnVsbCAmJiBzZWNvbmROb2RlICE9IG51bGwpKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcblxyXG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSlcclxuICB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gSXMgc2Vjb25kIG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIGZpcnN0IG9uZT9cclxuICB2YXIgb3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xyXG4gIHZhciBwYXJlbnROb2RlO1xyXG5cclxuICBkb1xyXG4gIHtcclxuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJlbnROb2RlID09IHNlY29uZE5vZGUpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XHJcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9IHdoaWxlICh0cnVlKTtcclxuICAvLyBJcyBmaXJzdCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBzZWNvbmQgb25lP1xyXG4gIG93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XHJcblxyXG4gIGRvXHJcbiAge1xyXG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gZmlyc3ROb2RlKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xyXG4gICAgaWYgKG93bmVyR3JhcGggPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSB3aGlsZSAodHJ1ZSk7XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIGVkZ2U7XHJcbiAgdmFyIHNvdXJjZU5vZGU7XHJcbiAgdmFyIHRhcmdldE5vZGU7XHJcbiAgdmFyIHNvdXJjZUFuY2VzdG9yR3JhcGg7XHJcbiAgdmFyIHRhcmdldEFuY2VzdG9yR3JhcGg7XHJcblxyXG4gIHZhciBlZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcclxuICB2YXIgcyA9IGVkZ2VzLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICBlZGdlID0gZWRnZXNbaV07XHJcblxyXG4gICAgc291cmNlTm9kZSA9IGVkZ2Uuc291cmNlO1xyXG4gICAgdGFyZ2V0Tm9kZSA9IGVkZ2UudGFyZ2V0O1xyXG4gICAgZWRnZS5sY2EgPSBudWxsO1xyXG4gICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZU5vZGU7XHJcbiAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTtcclxuXHJcbiAgICBpZiAoc291cmNlTm9kZSA9PSB0YXJnZXROb2RlKVxyXG4gICAge1xyXG4gICAgICBlZGdlLmxjYSA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7ICBcclxuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gc291cmNlQW5jZXN0b3JHcmFwaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlZGdlLmxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVkZ2UubGNhICE9IG51bGwpIHtcclxuICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcclxuICAgICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gZWRnZS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc291cmNlQW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxyXG57XHJcbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxyXG4gIHtcclxuICAgIHJldHVybiBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcclxuICB9XHJcbiAgdmFyIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xyXG5cclxuICBkb1xyXG4gIHtcclxuICAgIGlmIChmaXJzdE93bmVyR3JhcGggPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgICBkb1xyXG4gICAge1xyXG4gICAgICBpZiAoc2Vjb25kT3duZXJHcmFwaCA9PSBudWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaClcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBzZWNvbmRPd25lckdyYXBoO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmRPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XHJcbiAgICB9IHdoaWxlICh0cnVlKTtcclxuXHJcbiAgICBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcclxuICB9IHdoaWxlICh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIGZpcnN0T3duZXJHcmFwaDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24gKGdyYXBoLCBkZXB0aCkge1xyXG4gIGlmIChncmFwaCA9PSBudWxsICYmIGRlcHRoID09IG51bGwpIHtcclxuICAgIGdyYXBoID0gdGhpcy5yb290R3JhcGg7XHJcbiAgICBkZXB0aCA9IDE7XHJcbiAgfVxyXG4gIHZhciBub2RlO1xyXG5cclxuICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgIG5vZGUuaW5jbHVzaW9uVHJlZURlcHRoID0gZGVwdGg7XHJcblxyXG4gICAgaWYgKG5vZGUuY2hpbGQgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgdGhpcy5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyhub2RlLmNoaWxkLCBkZXB0aCArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmluY2x1ZGVzSW52YWxpZEVkZ2UgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIGVkZ2U7XHJcblxyXG4gIHZhciBzID0gdGhpcy5lZGdlcy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgZWRnZSA9IHRoaXMuZWRnZXNbaV07XHJcblxyXG4gICAgaWYgKHRoaXMuaXNPbmVBbmNlc3Rvck9mT3RoZXIoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KSlcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcclxuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XHJcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL3V0aWwvSUdlb21ldHJ5Jyk7XHJcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vdXRpbC9JTWF0aCcpO1xyXG5cclxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XHJcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdkVkZ2UpO1xyXG5cclxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xyXG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkVkZ2U7XHJcbiAgdGhpcy5iZW5kcG9pbnRzID0gW107XHJcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbn1cclxuXHJcbkxFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XHJcblxyXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xyXG4gIExFZGdlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xyXG59XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnNvdXJjZTtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMudGFyZ2V0O1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmlzSW50ZXJHcmFwaCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5pc0ludGVyR3JhcGg7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxlbmd0aDtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0O1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldEJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuYmVuZHBvaW50cztcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRMY2EgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGNhO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZUluTGNhID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnNvdXJjZUluTGNhO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldEluTGNhID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnRhcmdldEluTGNhO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kID0gZnVuY3Rpb24gKG5vZGUpXHJcbntcclxuICBpZiAodGhpcy5zb3VyY2UgPT09IG5vZGUpXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xyXG4gIH1cclxuICBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gbm9kZSlcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmRJbkdyYXBoID0gZnVuY3Rpb24gKG5vZGUsIGdyYXBoKVxyXG57XHJcbiAgdmFyIG90aGVyRW5kID0gdGhpcy5nZXRPdGhlckVuZChub2RlKTtcclxuICB2YXIgcm9vdCA9IGdyYXBoLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKTtcclxuXHJcbiAgd2hpbGUgKHRydWUpXHJcbiAge1xyXG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gZ3JhcGgpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBvdGhlckVuZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSByb290KVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBvdGhlckVuZCA9IG90aGVyRW5kLmdldE93bmVyKCkuZ2V0UGFyZW50KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xyXG5cclxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9XHJcbiAgICAgICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHRoaXMudGFyZ2V0LmdldFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICBjbGlwUG9pbnRDb29yZGluYXRlcyk7XHJcblxyXG4gIGlmICghdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpXHJcbiAge1xyXG4gICAgdGhpcy5sZW5ndGhYID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMF0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1syXTtcclxuICAgIHRoaXMubGVuZ3RoWSA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzFdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbM107XHJcblxyXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcclxuICAgIHtcclxuICAgICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xyXG4gIH1cclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGhTaW1wbGUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5sZW5ndGhYID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWCgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWCgpO1xyXG4gIHRoaXMubGVuZ3RoWSA9IHRoaXMudGFyZ2V0LmdldENlbnRlclkoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclkoKTtcclxuXHJcbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXHJcbiAge1xyXG4gICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApXHJcbiAge1xyXG4gICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICB0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExFZGdlO1xyXG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcclxudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL3V0aWwvSW50ZWdlcicpO1xyXG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vdXRpbC9SZWN0YW5nbGVEJyk7XHJcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xyXG52YXIgUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vdXRpbC9SYW5kb21TZWVkJyk7XHJcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL3V0aWwvUG9pbnREJyk7XHJcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi91dGlsL0hhc2hTZXQnKTtcclxuXHJcbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XHJcbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAxIDogTE5vZGUoTEdyYXBoTWFuYWdlciBnbSwgUG9pbnQgbG9jLCBEaW1lbnNpb24gc2l6ZSwgT2JqZWN0IHZOb2RlKVxyXG4gIGlmIChzaXplID09IG51bGwgJiYgdk5vZGUgPT0gbnVsbCkge1xyXG4gICAgdk5vZGUgPSBsb2M7XHJcbiAgfVxyXG5cclxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XHJcblxyXG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMiA6IExOb2RlKExheW91dCBsYXlvdXQsIE9iamVjdCB2Tm9kZSlcclxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpXHJcbiAgICBnbSA9IGdtLmdyYXBoTWFuYWdlcjtcclxuXHJcbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XHJcbiAgdGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZOb2RlO1xyXG4gIHRoaXMuZWRnZXMgPSBbXTtcclxuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xyXG5cclxuICBpZiAoc2l6ZSAhPSBudWxsICYmIGxvYyAhPSBudWxsKVxyXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQobG9jLngsIGxvYy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgZWxzZVxyXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQoKTtcclxufVxyXG5cclxuTE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcclxuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcclxuICBMTm9kZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcclxufVxyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmVkZ2VzO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmNoaWxkO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKClcclxue1xyXG4vLyAgaWYgKHRoaXMub3duZXIgIT0gbnVsbCkge1xyXG4vLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcclxuLy8gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuLy8gICAgfVxyXG4vLyAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5vd25lcjtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxyXG57XHJcbiAgdGhpcy5yZWN0LndpZHRoID0gd2lkdGg7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QuaGVpZ2h0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXHJcbntcclxuICB0aGlzLnJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMjtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDIsXHJcbiAgICAgICAgICB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyKTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldFJlY3QgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXREaWFnb25hbCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMucmVjdC53aWR0aCAqIHRoaXMucmVjdC53aWR0aCArXHJcbiAgICAgICAgICB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uICh1cHBlckxlZnQsIGRpbWVuc2lvbilcclxue1xyXG4gIHRoaXMucmVjdC54ID0gdXBwZXJMZWZ0Lng7XHJcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcclxuICB0aGlzLnJlY3Qud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XHJcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGRpbWVuc2lvbi5oZWlnaHQ7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2V0Q2VudGVyID0gZnVuY3Rpb24gKGN4LCBjeSlcclxue1xyXG4gIHRoaXMucmVjdC54ID0gY3ggLSB0aGlzLnJlY3Qud2lkdGggLyAyO1xyXG4gIHRoaXMucmVjdC55ID0gY3kgLSB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5KVxyXG57XHJcbiAgdGhpcy5yZWN0LnggPSB4O1xyXG4gIHRoaXMucmVjdC55ID0geTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoZHgsIGR5KVxyXG57XHJcbiAgdGhpcy5yZWN0LnggKz0gZHg7XHJcbiAgdGhpcy5yZWN0LnkgKz0gZHk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZUxpc3RUb05vZGUgPSBmdW5jdGlvbiAodG8pXHJcbntcclxuICB2YXIgZWRnZUxpc3QgPSBbXTtcclxuICB2YXIgZWRnZTtcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XHJcbiAgICBcclxuICAgIGlmIChlZGdlLnRhcmdldCA9PSB0bylcclxuICAgIHtcclxuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpXHJcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UhXCI7XHJcblxyXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWRnZUxpc3Q7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXNCZXR3ZWVuID0gZnVuY3Rpb24gKG90aGVyKVxyXG57XHJcbiAgdmFyIGVkZ2VMaXN0ID0gW107XHJcbiAgdmFyIGVkZ2U7XHJcbiAgXHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XHJcblxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgPT0gc2VsZiB8fCBlZGdlLnRhcmdldCA9PSBzZWxmKSlcclxuICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldFwiO1xyXG5cclxuICAgIGlmICgoZWRnZS50YXJnZXQgPT0gb3RoZXIpIHx8IChlZGdlLnNvdXJjZSA9PSBvdGhlcikpXHJcbiAgICB7XHJcbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlZGdlTGlzdDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBuZWlnaGJvcnMgPSBuZXcgSGFzaFNldCgpO1xyXG4gIHZhciBlZGdlO1xyXG4gIFxyXG4gIHZhciBzZWxmID0gdGhpcztcclxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xyXG5cclxuICAgIGlmIChlZGdlLnNvdXJjZSA9PSBzZWxmKVxyXG4gICAge1xyXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2UudGFyZ2V0KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgaWYgKGVkZ2UudGFyZ2V0ICE9IHNlbGYpIHtcclxuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBpbmNpZGVuY3khXCI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5laWdoYm9ycztcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS53aXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIHdpdGhOZWlnaGJvcnNMaXN0ID0gbmV3IFNldCgpO1xyXG4gIHZhciBjaGlsZE5vZGU7XHJcbiAgdmFyIGNoaWxkcmVuO1xyXG5cclxuICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQodGhpcyk7XHJcblxyXG4gIGlmICh0aGlzLmNoaWxkICE9IG51bGwpXHJcbiAge1xyXG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XHJcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQobm9kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpdGhOZWlnaGJvcnNMaXN0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldE5vT2ZDaGlsZHJlbiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcclxuICB2YXIgY2hpbGROb2RlO1xyXG5cclxuICBpZih0aGlzLmNoaWxkID09IG51bGwpe1xyXG4gICAgbm9PZkNoaWxkcmVuID0gMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xyXG5cclxuICAgICAgbm9PZkNoaWxkcmVuICs9IGNoaWxkTm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaWYobm9PZkNoaWxkcmVuID09IDApe1xyXG4gICAgbm9PZkNoaWxkcmVuID0gMTtcclxuICB9XHJcbiAgcmV0dXJuIG5vT2ZDaGlsZHJlbjtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSB0aGlzLmNoaWxkLmNhbGNFc3RpbWF0ZWRTaXplKCk7XHJcbiAgICB0aGlzLnJlY3Qud2lkdGggPSB0aGlzLmVzdGltYXRlZFNpemU7XHJcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XHJcbiAgfVxyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHJhbmRvbUNlbnRlclg7XHJcbiAgdmFyIHJhbmRvbUNlbnRlclk7XHJcblxyXG4gIHZhciBtaW5YID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xyXG4gIHZhciBtYXhYID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XHJcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArXHJcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WCAtIG1pblgpKSArIG1pblg7XHJcblxyXG4gIHZhciBtaW5ZID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xyXG4gIHZhciBtYXhZID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XHJcbiAgcmFuZG9tQ2VudGVyWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSArXHJcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WSAtIG1pblkpKSArIG1pblk7XHJcblxyXG4gIHRoaXMucmVjdC54ID0gcmFuZG9tQ2VudGVyWDtcclxuICB0aGlzLnJlY3QueSA9IHJhbmRvbUNlbnRlcllcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKVxyXG4gIHtcclxuICAgIC8vIHdyYXAgdGhlIGNoaWxkcmVuIG5vZGVzIGJ5IHJlLWFycmFuZ2luZyB0aGUgYm91bmRhcmllc1xyXG4gICAgdmFyIGNoaWxkR3JhcGggPSB0aGlzLmdldENoaWxkKCk7XHJcbiAgICBjaGlsZEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcclxuXHJcbiAgICB0aGlzLnJlY3QueCA9IGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xyXG4gICAgdGhpcy5yZWN0LnkgPSBjaGlsZEdyYXBoLmdldFRvcCgpO1xyXG5cclxuICAgIHRoaXMuc2V0V2lkdGgoY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCkpO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCkpO1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgY29tcG91bmQgYm91bmRzIGNvbnNpZGVyaW5nIGl0cyBsYWJlbCBwcm9wZXJ0aWVzICAgIFxyXG4gICAgaWYoTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyl7XHJcbiAgICAgICAgXHJcbiAgICAgIHZhciB3aWR0aCA9IGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCk7XHJcblxyXG4gICAgICBpZih0aGlzLmxhYmVsV2lkdGggPiB3aWR0aCl7XHJcbiAgICAgICAgdGhpcy5yZWN0LnggLT0gKHRoaXMubGFiZWxXaWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmxhYmVsSGVpZ2h0ID4gaGVpZ2h0KXtcclxuICAgICAgICBpZih0aGlzLmxhYmVsUG9zID09IFwiY2VudGVyXCIpe1xyXG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmxhYmVsUG9zID09IFwidG9wXCIpe1xyXG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodGhpcy5sYWJlbEhlaWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmluY2x1c2lvblRyZWVEZXB0aDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHJhbnMpXHJcbntcclxuICB2YXIgbGVmdCA9IHRoaXMucmVjdC54O1xyXG5cclxuICBpZiAobGVmdCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcclxuICB7XHJcbiAgICBsZWZ0ID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xyXG4gIH1cclxuICBlbHNlIGlmIChsZWZ0IDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcclxuICB7XHJcbiAgICBsZWZ0ID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcclxuICB9XHJcblxyXG4gIHZhciB0b3AgPSB0aGlzLnJlY3QueTtcclxuXHJcbiAgaWYgKHRvcCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcclxuICB7XHJcbiAgICB0b3AgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHRvcCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgdG9wID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcclxuICB9XHJcblxyXG4gIHZhciBsZWZ0VG9wID0gbmV3IFBvaW50RChsZWZ0LCB0b3ApO1xyXG4gIHZhciB2TGVmdFRvcCA9IHRyYW5zLmludmVyc2VUcmFuc2Zvcm1Qb2ludChsZWZ0VG9wKTtcclxuXHJcbiAgdGhpcy5zZXRMb2NhdGlvbih2TGVmdFRvcC54LCB2TGVmdFRvcC55KTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGg7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMub3duZXIgPT0gbnVsbClcclxuICB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzLm93bmVyLmdldFBhcmVudCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMTm9kZTtcclxuIiwidmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XHJcbnZhciBIYXNoTWFwID0gcmVxdWlyZSgnLi91dGlsL0hhc2hNYXAnKTtcclxudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcclxudmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xyXG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XHJcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xyXG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi91dGlsL1BvaW50RCcpO1xyXG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL1RyYW5zZm9ybScpO1xyXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJy4vdXRpbC9FbWl0dGVyJyk7XHJcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi91dGlsL0hhc2hTZXQnKTtcclxuXHJcbmZ1bmN0aW9uIExheW91dChpc1JlbW90ZVVzZSkge1xyXG4gIEVtaXR0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuICAvL0xheW91dCBRdWFsaXR5OiAwOnByb29mLCAxOmRlZmF1bHQsIDI6ZHJhZnRcclxuICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xyXG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGNyZWF0ZSBiZW5kcG9pbnRzIGFzIG5lZWRlZCBvciBub3RcclxuICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPVxyXG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcclxuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBiZSBpbmNyZW1lbnRhbCBvciBub3RcclxuICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XHJcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgZnJvbSBiZWZvcmUgdG8gYWZ0ZXIgbGF5b3V0IG5vZGUgcG9zaXRpb25zXHJcbiAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9XHJcbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xyXG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIHRoZSBsYXlvdXQgcHJvY2VzcyBvciBub3RcclxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xyXG4gIC8vTnVtYmVyIGl0ZXJhdGlvbnMgdGhhdCBzaG91bGQgYmUgZG9uZSBiZXR3ZWVuIHR3byBzdWNjZXNzaXZlIGFuaW1hdGlvbnNcclxuICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciBvciBub3QgbGVhZiBub2RlcyAobm9uLWNvbXBvdW5kIG5vZGVzKSBhcmUgb2YgdW5pZm9ybSBzaXplcy4gV2hlblxyXG4gICAqIHRoZXkgYXJlLCBib3RoIHNwcmluZyBhbmQgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIHR3byBsZWFmIG5vZGVzIGNhbiBiZVxyXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXHJcbiAgICogaW4gbWFqb3Igc3BlZWQtdXAuXHJcbiAgICovXHJcbiAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9XHJcbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcclxuICAvKipcclxuICAgKiBUaGlzIGlzIHVzZWQgZm9yIGNyZWF0aW9uIG9mIGJlbmRwb2ludHMgYnkgdXNpbmcgZHVtbXkgbm9kZXMgYW5kIGVkZ2VzLlxyXG4gICAqIE1hcHMgYW4gTEVkZ2UgdG8gaXRzIGR1bW15IGJlbmRwb2ludCBwYXRoLlxyXG4gICAqL1xyXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2RlcyA9IG5ldyBIYXNoTWFwKCk7XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcclxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcclxuICB0aGlzLmlzU3ViTGF5b3V0ID0gZmFsc2U7XHJcbiAgdGhpcy5pc1JlbW90ZVVzZSA9IGZhbHNlO1xyXG5cclxuICBpZiAoaXNSZW1vdGVVc2UgIT0gbnVsbCkge1xyXG4gICAgdGhpcy5pc1JlbW90ZVVzZSA9IGlzUmVtb3RlVXNlO1xyXG4gIH1cclxufVxyXG5cclxuTGF5b3V0LlJBTkRPTV9TRUVEID0gMTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFbWl0dGVyLnByb3RvdHlwZSApO1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGdtID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcclxuICByZXR1cm4gZ207XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaClcclxue1xyXG4gIHJldHVybiBuZXcgTEdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5uZXdOb2RlID0gZnVuY3Rpb24gKHZOb2RlKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBMTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBMRWRnZShudWxsLCBudWxsLCB2RWRnZSk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmNoZWNrTGF5b3V0U3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpID09IG51bGwpXHJcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMFxyXG4gICAgICAgICAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuaW5jbHVkZXNJbnZhbGlkRWRnZSgpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5ydW5MYXlvdXQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XHJcbiAgXHJcbiAgaWYgKHRoaXMudGlsaW5nUHJlTGF5b3V0KSB7XHJcbiAgICB0aGlzLnRpbGluZ1ByZUxheW91dCgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5pbml0UGFyYW1ldGVycygpO1xyXG4gIHZhciBpc0xheW91dFN1Y2Nlc3NmdWxsO1xyXG5cclxuICBpZiAodGhpcy5jaGVja0xheW91dFN1Y2Nlc3MoKSlcclxuICB7XHJcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gZmFsc2U7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gdGhpcy5sYXlvdXQoKTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKExheW91dENvbnN0YW50cy5BTklNQVRFID09PSAnZHVyaW5nJykge1xyXG4gICAgLy8gSWYgdGhpcyBpcyBhICdkdXJpbmcnIGxheW91dCBhbmltYXRpb24uIExheW91dCBpcyBub3QgZmluaXNoZWQgeWV0LiBcclxuICAgIC8vIFdlIG5lZWQgdG8gcGVyZm9ybSB0aGVzZSBpbiBpbmRleC5qcyB3aGVuIGxheW91dCBpcyByZWFsbHkgZmluaXNoZWQuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKVxyXG4gIHtcclxuICAgIGlmICghdGhpcy5pc1N1YkxheW91dClcclxuICAgIHtcclxuICAgICAgdGhpcy5kb1Bvc3RMYXlvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0aGlzLnRpbGluZ1Bvc3RMYXlvdXQpIHtcclxuICAgIHRoaXMudGlsaW5nUG9zdExheW91dCgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5kb1Bvc3RMYXlvdXQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgLy9hc3NlcnQgIWlzU3ViTGF5b3V0IDogXCJTaG91bGQgbm90IGJlIGNhbGxlZCBvbiBzdWItbGF5b3V0IVwiO1xyXG4gIC8vIFByb3BhZ2F0ZSBnZW9tZXRyaWMgY2hhbmdlcyB0byB2LWxldmVsIG9iamVjdHNcclxuICBpZighdGhpcy5pbmNyZW1lbnRhbCl7XHJcbiAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gIH1cclxuICB0aGlzLnVwZGF0ZSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSB0YXJnZXQgZ3JhcGggYWNjb3JkaW5nIHRvXHJcbiAqIGNhbGN1bGF0ZWQgbGF5b3V0LlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUyID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIHVwZGF0ZSBiZW5kIHBvaW50c1xyXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpXHJcbiAge1xyXG4gICAgdGhpcy5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMoKTtcclxuXHJcbiAgICAvLyByZXNldCBhbGwgZWRnZXMsIHNpbmNlIHRoZSB0b3BvbG9neSBoYXMgY2hhbmdlZFxyXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gcGVyZm9ybSBlZGdlLCBub2RlIGFuZCByb290IHVwZGF0ZXMgaWYgbGF5b3V0IGlzIG5vdCBjYWxsZWRcclxuICAvLyByZW1vdGVseVxyXG4gIGlmICghdGhpcy5pc1JlbW90ZVVzZSlcclxuICB7XHJcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXHJcbiAgICB2YXIgZWRnZTtcclxuICAgIHZhciBhbGxFZGdlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBlZGdlID0gYWxsRWRnZXNbaV07XHJcbi8vICAgICAgdGhpcy51cGRhdGUoZWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVjdXJzaXZlbHkgdXBkYXRlIG5vZGVzXHJcbiAgICB2YXIgbm9kZTtcclxuICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4vLyAgICAgIHRoaXMudXBkYXRlKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSByb290IGdyYXBoXHJcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xyXG4gIH1cclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIGlmIChvYmogPT0gbnVsbCkge1xyXG4gICAgdGhpcy51cGRhdGUyKCk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XHJcbiAgICB2YXIgbm9kZSA9IG9iajtcclxuICAgIGlmIChub2RlLmdldENoaWxkKCkgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgLy8gc2luY2Ugbm9kZSBpcyBjb21wb3VuZCwgcmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkIG5vZGVzXHJcbiAgICAgIHZhciBub2RlcyA9IG5vZGUuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgdXBkYXRlKG5vZGVzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHRoZSBsLWxldmVsIG5vZGUgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXHJcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBub2RlIGltcGxlbWVudHMgdGhlXHJcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxyXG4gICAgaWYgKG5vZGUudkdyYXBoT2JqZWN0ICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcclxuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XHJcblxyXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcclxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xyXG4gICAgdmFyIGVkZ2UgPSBvYmo7XHJcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBlZGdlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxyXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxyXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cclxuXHJcbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xyXG4gICAgICB2YXIgdkVkZ2UgPSBlZGdlLnZHcmFwaE9iamVjdDtcclxuXHJcbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxyXG4gICAgICB2RWRnZS51cGRhdGUoZWRnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xyXG4gICAgdmFyIGdyYXBoID0gb2JqO1xyXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZ3JhcGggaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXHJcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBvYmplY3QgaW1wbGVtZW50cyB0aGVcclxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXHJcblxyXG4gICAgaWYgKGdyYXBoLnZHcmFwaE9iamVjdCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXHJcbiAgICAgIHZhciB2R3JhcGggPSBncmFwaC52R3JhcGhPYmplY3Q7XHJcblxyXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcclxuICAgICAgdkdyYXBoLnVwZGF0ZShncmFwaCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2V0IGFsbCBsYXlvdXQgcGFyYW1ldGVycyB0byBkZWZhdWx0IHZhbHVlc1xyXG4gKiBkZXRlcm1pbmVkIGF0IGNvbXBpbGUgdGltZS5cclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxyXG4gIHtcclxuICAgIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xyXG4gICAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xyXG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XHJcbiAgICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XHJcbiAgICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xyXG4gICAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0KVxyXG4gIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChuZXdMZWZ0VG9wKSB7XHJcbiAgaWYgKG5ld0xlZnRUb3AgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybShuZXcgUG9pbnREKDAsIDApKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICAvLyBjcmVhdGUgYSB0cmFuc2Zvcm1hdGlvbiBvYmplY3QgKGZyb20gRWNsaXBzZSB0byBsYXlvdXQpLiBXaGVuIGFuXHJcbiAgICAvLyBpbnZlcnNlIHRyYW5zZm9ybSBpcyBhcHBsaWVkLCB3ZSBnZXQgdXBwZXItbGVmdCBjb29yZGluYXRlIG9mIHRoZVxyXG4gICAgLy8gZHJhd2luZyBvciB0aGUgcm9vdCBncmFwaCBhdCBnaXZlbiBpbnB1dCBjb29yZGluYXRlIChzb21lIG1hcmdpbnNcclxuICAgIC8vIGFscmVhZHkgaW5jbHVkZWQgaW4gY2FsY3VsYXRpb24gb2YgbGVmdC10b3ApLlxyXG5cclxuICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm0oKTtcclxuICAgIHZhciBsZWZ0VG9wID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLnVwZGF0ZUxlZnRUb3AoKTtcclxuXHJcbiAgICBpZiAobGVmdFRvcCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcclxuICAgICAgdHJhbnMuc2V0V29ybGRPcmdZKG5ld0xlZnRUb3AueSk7XHJcblxyXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XHJcbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1kobGVmdFRvcC55KTtcclxuXHJcbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcclxuICAgICAgdmFyIG5vZGU7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICAgIG5vZGUudHJhbnNmb3JtKHRyYW5zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUucG9zaXRpb25Ob2Rlc1JhbmRvbWx5ID0gZnVuY3Rpb24gKGdyYXBoKSB7XHJcblxyXG4gIGlmIChncmFwaCA9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vYXNzZXJ0ICF0aGlzLmluY3JlbWVudGFsO1xyXG4gICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpO1xyXG4gICAgdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkudXBkYXRlQm91bmRzKHRydWUpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBsTm9kZTtcclxuICAgIHZhciBjaGlsZEdyYXBoO1xyXG5cclxuICAgIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBsTm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcclxuXHJcbiAgICAgIGlmIChjaGlsZEdyYXBoID09IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hpbGRHcmFwaC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KGNoaWxkR3JhcGgpO1xyXG4gICAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHRyZWVzIHdoZXJlIGVhY2ggdHJlZSBpcyByZXByZXNlbnRlZCBhcyBhXHJcbiAqIGxpc3Qgb2YgbC1ub2Rlcy4gVGhlIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiBzaXplIDAgd2hlbjpcclxuICogLSBUaGUgZ3JhcGggaXMgbm90IGZsYXQgb3JcclxuICogLSBPbmUgb2YgdGhlIGNvbXBvbmVudChzKSBvZiB0aGUgZ3JhcGggaXMgbm90IGEgdHJlZS5cclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuZ2V0RmxhdEZvcmVzdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZmxhdEZvcmVzdCA9IFtdO1xyXG4gIHZhciBpc0ZvcmVzdCA9IHRydWU7XHJcblxyXG4gIC8vIFF1aWNrIHJlZmVyZW5jZSBmb3IgYWxsIG5vZGVzIGluIHRoZSBncmFwaCBtYW5hZ2VyIGFzc29jaWF0ZWQgd2l0aFxyXG4gIC8vIHRoaXMgbGF5b3V0LiBUaGUgbGlzdCBzaG91bGQgbm90IGJlIGNoYW5nZWQuXHJcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XHJcblxyXG4gIC8vIEZpcnN0IGJlIHN1cmUgdGhhdCB0aGUgZ3JhcGggaXMgZmxhdFxyXG4gIHZhciBpc0ZsYXQgPSB0cnVlO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gIHtcclxuICAgIGlmIChhbGxOb2Rlc1tpXS5nZXRDaGlsZCgpICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGlzRmxhdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIGVtcHR5IGZvcmVzdCBpZiB0aGUgZ3JhcGggaXMgbm90IGZsYXQuXHJcbiAgaWYgKCFpc0ZsYXQpXHJcbiAge1xyXG4gICAgcmV0dXJuIGZsYXRGb3Jlc3Q7XHJcbiAgfVxyXG5cclxuICAvLyBSdW4gQkZTIGZvciBlYWNoIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGguXHJcblxyXG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcclxuICB2YXIgdG9CZVZpc2l0ZWQgPSBbXTtcclxuICB2YXIgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XHJcbiAgdmFyIHVuUHJvY2Vzc2VkTm9kZXMgPSBbXTtcclxuXHJcbiAgdW5Qcm9jZXNzZWROb2RlcyA9IHVuUHJvY2Vzc2VkTm9kZXMuY29uY2F0KGFsbE5vZGVzKTtcclxuXHJcbiAgLy8gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIGZpbmRzIGEgY29tcG9uZW50IG9mIHRoZSBncmFwaCBhbmRcclxuICAvLyBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgYSB0cmVlIG9yIG5vdC4gSWYgaXQgaXMgYSB0cmVlLCBhZGRzIGl0IHRvIHRoZVxyXG4gIC8vIGZvcmVzdCBhbmQgY29udGludWVkIHdpdGggdGhlIG5leHQgY29tcG9uZW50LlxyXG5cclxuICB3aGlsZSAodW5Qcm9jZXNzZWROb2Rlcy5sZW5ndGggPiAwICYmIGlzRm9yZXN0KVxyXG4gIHtcclxuICAgIHRvQmVWaXNpdGVkLnB1c2godW5Qcm9jZXNzZWROb2Rlc1swXSk7XHJcblxyXG4gICAgLy8gU3RhcnQgdGhlIEJGUy4gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIHZpc2l0cyBhIG5vZGUgaW4gYVxyXG4gICAgLy8gQkZTIG1hbm5lci5cclxuICAgIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggPiAwICYmIGlzRm9yZXN0KVxyXG4gICAge1xyXG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXHJcbiAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkWzBdO1xyXG4gICAgICB0b0JlVmlzaXRlZC5zcGxpY2UoMCwgMSk7XHJcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXHJcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVpZ2hib3JFZGdlcy5sZW5ndGg7IGkrKylcclxuICAgICAge1xyXG4gICAgICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPVxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlc1tpXS5nZXRPdGhlckVuZChjdXJyZW50Tm9kZSk7XHJcblxyXG4gICAgICAgIC8vIElmIEJGUyBpcyBub3QgZ3Jvd2luZyBmcm9tIHRoaXMgbmVpZ2hib3IuXHJcbiAgICAgICAgaWYgKHBhcmVudHMuZ2V0KGN1cnJlbnROb2RlKSAhPSBjdXJyZW50TmVpZ2hib3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gV2UgaGF2ZW4ndCBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvci5cclxuICAgICAgICAgIGlmICghdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKGN1cnJlbnROZWlnaGJvcik7XHJcbiAgICAgICAgICAgIHBhcmVudHMucHV0KGN1cnJlbnROZWlnaGJvciwgY3VycmVudE5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gU2luY2Ugd2UgaGF2ZSBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvciBhbmRcclxuICAgICAgICAgIC8vIHRoaXMgbmVpZ2hib3IgaXMgbm90IHBhcmVudCBvZiBjdXJyZW50Tm9kZSwgZ2l2ZW5cclxuICAgICAgICAgIC8vIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHRyZWUsIGhlbmNlXHJcbiAgICAgICAgICAvLyBpdCBpcyBub3QgYSBmb3Jlc3QuXHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzRm9yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCBhIHRyZWUuIEVtcHR5XHJcbiAgICAvLyBwcmV2aW91c2x5IGZvdW5kIHRyZWVzLiBUaGUgbWV0aG9kIHdpbGwgZW5kLlxyXG4gICAgaWYgKCFpc0ZvcmVzdClcclxuICAgIHtcclxuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgLy8gU2F2ZSBjdXJyZW50bHkgdmlzaXRlZCBub2RlcyBhcyBhIHRyZWUgaW4gb3VyIGZvcmVzdC4gUmVzZXRcclxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXHJcbiAgICAvLyB0aGUgZ3JhcGgsIGlmIGFueS5cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdmFyIHRlbXAgPSBbXTtcclxuICAgICAgdmlzaXRlZC5hZGRBbGxUbyh0ZW1wKTtcclxuICAgICAgZmxhdEZvcmVzdC5wdXNoKHRlbXApO1xyXG4gICAgICAvL2ZsYXRGb3Jlc3QgPSBmbGF0Rm9yZXN0LmNvbmNhdCh0ZW1wKTtcclxuICAgICAgLy91blByb2Nlc3NlZE5vZGVzLnJlbW92ZUFsbCh2aXNpdGVkKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGVtcFtpXTtcclxuICAgICAgICB2YXIgaW5kZXggPSB1blByb2Nlc3NlZE5vZGVzLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICB1blByb2Nlc3NlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xyXG4gICAgICBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmbGF0Rm9yZXN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgZHVtbXkgbm9kZXMgKGFuIGwtbGV2ZWwgbm9kZSB3aXRoIG1pbmltYWwgZGltZW5zaW9ucylcclxuICogZm9yIHRoZSBnaXZlbiBlZGdlIChvbmUgcGVyIGJlbmRwb2ludCkuIFRoZSBleGlzdGluZyBsLWxldmVsIHN0cnVjdHVyZVxyXG4gKiBpcyB1cGRhdGVkIGFjY29yZGluZ2x5LlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyA9IGZ1bmN0aW9uIChlZGdlKVxyXG57XHJcbiAgdmFyIGR1bW15Tm9kZXMgPSBbXTtcclxuICB2YXIgcHJldiA9IGVkZ2Uuc291cmNlO1xyXG5cclxuICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlLmJlbmRwb2ludHMubGVuZ3RoOyBpKyspXHJcbiAge1xyXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBub2RlXHJcbiAgICB2YXIgZHVtbXlOb2RlID0gdGhpcy5uZXdOb2RlKG51bGwpO1xyXG4gICAgZHVtbXlOb2RlLnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKTtcclxuXHJcbiAgICBncmFwaC5hZGQoZHVtbXlOb2RlKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IGVkZ2UgYmV0d2VlbiBwcmV2IGFuZCBkdW1teSBub2RlXHJcbiAgICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xyXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZHVtbXlOb2RlKTtcclxuXHJcbiAgICBkdW1teU5vZGVzLmFkZChkdW1teU5vZGUpO1xyXG4gICAgcHJldiA9IGR1bW15Tm9kZTtcclxuICB9XHJcblxyXG4gIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZWRnZS50YXJnZXQpO1xyXG5cclxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMucHV0KGVkZ2UsIGR1bW15Tm9kZXMpO1xyXG5cclxuICAvLyByZW1vdmUgcmVhbCBlZGdlIGZyb20gZ3JhcGggbWFuYWdlciBpZiBpdCBpcyBpbnRlci1ncmFwaFxyXG4gIGlmIChlZGdlLmlzSW50ZXJHcmFwaCgpKVxyXG4gIHtcclxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcclxuICB9XHJcbiAgLy8gZWxzZSwgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZ3JhcGhcclxuICBlbHNlXHJcbiAge1xyXG4gICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGR1bW15Tm9kZXM7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBiZW5kcG9pbnRzIGZvciBlZGdlcyBmcm9tIHRoZSBkdW1teSBub2Rlc1xyXG4gKiBhdCBsLWxldmVsLlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIGVkZ2VzID0gW107XHJcbiAgZWRnZXMgPSBlZGdlcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XHJcbiAgZWRnZXMgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMua2V5U2V0KCkuY29uY2F0KGVkZ2VzKTtcclxuXHJcbiAgZm9yICh2YXIgayA9IDA7IGsgPCBlZGdlcy5sZW5ndGg7IGsrKylcclxuICB7XHJcbiAgICB2YXIgbEVkZ2UgPSBlZGdlc1trXTtcclxuXHJcbiAgICBpZiAobEVkZ2UuYmVuZHBvaW50cy5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIGR1bW15Tm9kZSA9IHBhdGhbaV07XHJcbiAgICAgICAgdmFyIHAgPSBuZXcgUG9pbnREKGR1bW15Tm9kZS5nZXRDZW50ZXJYKCksXHJcbiAgICAgICAgICAgICAgICBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGJlbmRwb2ludCdzIGxvY2F0aW9uIGFjY29yZGluZyB0byBkdW1teSBub2RlXHJcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xyXG4gICAgICAgIGVicC54ID0gcC54O1xyXG4gICAgICAgIGVicC55ID0gcC55O1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGR1bW15IG5vZGUsIGR1bW15IGVkZ2VzIGluY2lkZW50IHdpdGggdGhpc1xyXG4gICAgICAgIC8vIGR1bW15IG5vZGUgaXMgYWxzbyByZW1vdmVkICh3aXRoaW4gdGhlIHJlbW92ZSBtZXRob2QpXHJcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXHJcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChsRWRnZSwgbEVkZ2Uuc291cmNlLCBsRWRnZS50YXJnZXQpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcclxuICBpZiAobWluRGl2ICE9IHVuZGVmaW5lZCAmJiBtYXhNdWwgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKVxyXG4gICAge1xyXG4gICAgICB2YXIgbWluVmFsdWUgPSBkZWZhdWx0VmFsdWUgLyBtaW5EaXY7XHJcbiAgICAgIHZhbHVlIC09ICgoZGVmYXVsdFZhbHVlIC0gbWluVmFsdWUpIC8gNTApICogKDUwIC0gc2xpZGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB2YXIgbWF4VmFsdWUgPSBkZWZhdWx0VmFsdWUgKiBtYXhNdWw7XHJcbiAgICAgIHZhbHVlICs9ICgobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTApICogKHNsaWRlclZhbHVlIC0gNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgYSwgYjtcclxuXHJcbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXHJcbiAgICB7XHJcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MDAuMDtcclxuICAgICAgYiA9IGRlZmF1bHRWYWx1ZSAvIDEwLjA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MC4wO1xyXG4gICAgICBiID0gLTggKiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhICogc2xpZGVyVmFsdWUgKyBiKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgZmluZHMgYW5kIHJldHVybnMgdGhlIGNlbnRlciBvZiB0aGUgZ2l2ZW4gbm9kZXMsIGFzc3VtaW5nXHJcbiAqIHRoYXQgdGhlIGdpdmVuIG5vZGVzIGZvcm0gYSB0cmVlIGluIHRoZW1zZWx2ZXMuXHJcbiAqL1xyXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2Rlcylcclxue1xyXG4gIHZhciBsaXN0ID0gW107XHJcbiAgbGlzdCA9IGxpc3QuY29uY2F0KG5vZGVzKTtcclxuXHJcbiAgdmFyIHJlbW92ZWROb2RlcyA9IFtdO1xyXG4gIHZhciByZW1haW5pbmdEZWdyZWVzID0gbmV3IEhhc2hNYXAoKTtcclxuICB2YXIgZm91bmRDZW50ZXIgPSBmYWxzZTtcclxuICB2YXIgY2VudGVyTm9kZSA9IG51bGw7XHJcblxyXG4gIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpXHJcbiAge1xyXG4gICAgZm91bmRDZW50ZXIgPSB0cnVlO1xyXG4gICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXHJcbiAge1xyXG4gICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xyXG4gICAgdmFyIGRlZ3JlZSA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKTtcclxuICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5vZGUsIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKSk7XHJcblxyXG4gICAgaWYgKGRlZ3JlZSA9PSAxKVxyXG4gICAge1xyXG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciB0ZW1wTGlzdCA9IFtdO1xyXG4gIHRlbXBMaXN0ID0gdGVtcExpc3QuY29uY2F0KHJlbW92ZWROb2Rlcyk7XHJcblxyXG4gIHdoaWxlICghZm91bmRDZW50ZXIpXHJcbiAge1xyXG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xyXG4gICAgdGVtcExpc3QyID0gdGVtcExpc3QyLmNvbmNhdCh0ZW1wTGlzdCk7XHJcbiAgICB0ZW1wTGlzdCA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xyXG5cclxuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKG5vZGUpO1xyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG5laWdoYm91cnMgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKG5laWdoYm91cnMuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGopIHtcclxuICAgICAgICB2YXIgbmVpZ2hib3VyID0gbmVpZ2hib3Vycy5zZXRbal07XHJcbiAgICAgICAgaWYgKHJlbW92ZWROb2Rlcy5pbmRleE9mKG5laWdoYm91cikgPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhciBvdGhlckRlZ3JlZSA9IHJlbWFpbmluZ0RlZ3JlZXMuZ2V0KG5laWdoYm91cik7XHJcbiAgICAgICAgICB2YXIgbmV3RGVncmVlID0gb3RoZXJEZWdyZWUgLSAxO1xyXG5cclxuICAgICAgICAgIGlmIChuZXdEZWdyZWUgPT0gMSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZWROb2RlcyA9IHJlbW92ZWROb2Rlcy5jb25jYXQodGVtcExpc3QpO1xyXG5cclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpXHJcbiAgICB7XHJcbiAgICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2VudGVyTm9kZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXHJcbiAqIHRoaXMgc2V0dGVyIGZ1bmN0aW9uIGdyYW50cyBhY2Nlc3MgdG8gY2hhbmdlIHRoZSBjdXJyZW50bHkgYmVpbmcgdXNlZCBncmFwaCBtYW5hZ2VyXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLnNldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uIChnbSlcclxue1xyXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dDtcclxuIiwiZnVuY3Rpb24gRW1pdHRlcigpe1xyXG4gIHRoaXMubGlzdGVuZXJzID0gW107XHJcbn1cclxuXHJcbnZhciBwID0gRW1pdHRlci5wcm90b3R5cGU7XHJcblxyXG5wLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oIGV2ZW50LCBjYWxsYmFjayApe1xyXG4gIHRoaXMubGlzdGVuZXJzLnB1c2goe1xyXG4gICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrXHJcbiAgfSk7XHJcbn07XHJcblxyXG5wLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oIGV2ZW50LCBjYWxsYmFjayApe1xyXG4gIGZvciggdmFyIGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPj0gMDsgaS0tICl7XHJcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xyXG5cclxuICAgIGlmKCBsLmV2ZW50ID09PSBldmVudCAmJiBsLmNhbGxiYWNrID09PSBjYWxsYmFjayApe1xyXG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoIGksIDEgKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5wLmVtaXQgPSBmdW5jdGlvbiggZXZlbnQsIGRhdGEgKXtcclxuICBmb3IoIHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrICl7XHJcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xyXG5cclxuICAgIGlmKCBldmVudCA9PT0gbC5ldmVudCApe1xyXG4gICAgICBsLmNhbGxiYWNrKCBkYXRhICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9