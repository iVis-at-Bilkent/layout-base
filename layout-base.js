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
    if (list instanceof Array) {
        return list[i];
    } else if (list instanceof LinkedList) {
        return list.get_object_at(i);
    }
};

Quicksort.set_object_at = function (list, i, value) {
    if (list instanceof Array) {
        list[i] = value;
    } else if (list instanceof LinkedList) {
        list.set_object_at(i, value);
    }
};

Quicksort.quicksort = function (list, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof Array)) {
        return;
    }

    var comparison_function = comparison_fn;

    if (comparison_function === undefined) {
        comparison_function = Quicksort.compare;
    }
    var end_index;

    if (list instanceof LinkedList) {
        end_index = list.size();
    } else if (list instanceof Array) {
        end_index = list.length - 1;
    }

    // Prevent empty lists or arrays.
    if (end_index >= 0) {
        Quicksort.quicksort_between_indices(list, 0, end_index, comparison_function);
    }
};

Quicksort.quicksort_between_indices = function (list, low, high, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof Array)) {
        return;
    }

    if (comparison_fn === undefined) {
        comparison_fn = Quicksort.compare;
    }

    var i = low;
    var j = high;
    var middleIndex = Math.floor((i + j) / 2);
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
            Quicksort.set_object_at(list, i, Quicksort.get_object_at(list, j));
            Quicksort.set_object_at(list, j, temp);
            i++;
            j--;
        }
    } while (i <= j);

    if (low < j) {

        Quicksort.quicksort_between_indices(list, low, j, comparison_fn);
    }

    if (high > i) {

        Quicksort.quicksort_between_indices(list, i, high, comparison_fn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dEJhc2UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0lHZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSU1hdGguanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1BvaW50LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1JhbmRvbVNlZWQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1JlY3RhbmdsZUQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvUXVpY2tzb3J0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoT2JqZWN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xFZGdlLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTE5vZGUuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0VtaXR0ZXIuanMiXSwibmFtZXMiOlsibGF5b3V0QmFzZSIsIkRpbWVuc2lvbkQiLCJyZXF1aXJlIiwiSGFzaE1hcCIsIkhhc2hTZXQiLCJJR2VvbWV0cnkiLCJJTWF0aCIsIkludGVnZXIiLCJQb2ludCIsIlBvaW50RCIsIlJhbmRvbVNlZWQiLCJSZWN0YW5nbGVEIiwiVHJhbnNmb3JtIiwiVW5pcXVlSURHZW5lcmV0b3IiLCJRdWlja3NvcnQiLCJMaW5rZWRMaXN0IiwiTEdyYXBoT2JqZWN0IiwiTEdyYXBoIiwiTEVkZ2UiLCJMR3JhcGhNYW5hZ2VyIiwiTE5vZGUiLCJMYXlvdXQiLCJMYXlvdXRDb25zdGFudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwid2lkdGgiLCJoZWlnaHQiLCJwcm90b3R5cGUiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwibWFwIiwia2V5cyIsInB1dCIsImtleSIsInZhbHVlIiwidGhlSWQiLCJjcmVhdGVJRCIsImNvbnRhaW5zIiwicHVzaCIsImdldCIsImtleVNldCIsImxhc3RJRCIsIm9iaiIsImlzUHJpbWl0aXZlIiwidW5pcXVlSUQiLCJnZXRTdHJpbmciLCJpZCIsImFyZyIsInR5cGUiLCJzZXQiLCJhZGQiLCJyZW1vdmUiLCJjbGVhciIsImlzRW1wdHkiLCJzaXplIiwiT2JqZWN0IiwibGVuZ3RoIiwiYWRkQWxsVG8iLCJsaXN0IiwiaSIsImFkZEFsbCIsInMiLCJ2IiwiY2FsY1NlcGFyYXRpb25BbW91bnQiLCJyZWN0QSIsInJlY3RCIiwib3ZlcmxhcEFtb3VudCIsInNlcGFyYXRpb25CdWZmZXIiLCJpbnRlcnNlY3RzIiwiZGlyZWN0aW9ucyIsIkFycmF5IiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJNYXRoIiwibWluIiwiZ2V0UmlnaHQiLCJtYXgiLCJ4IiwiZ2V0Qm90dG9tIiwieSIsImdldFgiLCJnZXRZIiwic2xvcGUiLCJhYnMiLCJnZXRDZW50ZXJZIiwiZ2V0Q2VudGVyWCIsIm1vdmVCeVkiLCJtb3ZlQnlYIiwiZ2V0SW50ZXJzZWN0aW9uMiIsInJlc3VsdCIsInAxeCIsInAxeSIsInAyeCIsInAyeSIsInRvcExlZnRBeCIsInRvcExlZnRBeSIsInRvcFJpZ2h0QXgiLCJib3R0b21MZWZ0QXgiLCJib3R0b21MZWZ0QXkiLCJib3R0b21SaWdodEF4IiwiaGFsZldpZHRoQSIsImdldFdpZHRoSGFsZiIsImhhbGZIZWlnaHRBIiwiZ2V0SGVpZ2h0SGFsZiIsInRvcExlZnRCeCIsInRvcExlZnRCeSIsInRvcFJpZ2h0QngiLCJib3R0b21MZWZ0QngiLCJib3R0b21MZWZ0QnkiLCJib3R0b21SaWdodEJ4IiwiaGFsZldpZHRoQiIsImhhbGZIZWlnaHRCIiwiY2xpcFBvaW50QUZvdW5kIiwiY2xpcFBvaW50QkZvdW5kIiwic2xvcGVBIiwic2xvcGVCIiwic2xvcGVQcmltZSIsImNhcmRpbmFsRGlyZWN0aW9uQSIsImNhcmRpbmFsRGlyZWN0aW9uQiIsInRlbXBQb2ludEF4IiwidGVtcFBvaW50QXkiLCJ0ZW1wUG9pbnRCeCIsInRlbXBQb2ludEJ5IiwiZ2V0Q2FyZGluYWxEaXJlY3Rpb24iLCJsaW5lIiwiZ2V0SW50ZXJzZWN0aW9uIiwiczEiLCJzMiIsImYxIiwiZjIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJ4NCIsInk0IiwiYTEiLCJhMiIsImIxIiwiYjIiLCJjMSIsImMyIiwiZGVub20iLCJIQUxGX1BJIiwiUEkiLCJPTkVfQU5EX0hBTEZfUEkiLCJUV09fUEkiLCJUSFJFRV9QSSIsInNpZ24iLCJmbG9vciIsImNlaWwiLCJNQVhfVkFMVUUiLCJNSU5fVkFMVUUiLCJwIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZ2V0TG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInBhcnNlSW50IiwibW92ZSIsInRyYW5zbGF0ZSIsImR4IiwiZHkiLCJlcXVhbHMiLCJwdCIsInRvU3RyaW5nIiwic2V0WCIsInNldFkiLCJnZXREaWZmZXJlbmNlIiwiZ2V0Q29weSIsImRpbSIsInNlZWQiLCJuZXh0RG91YmxlIiwic2luIiwiYSIsImdldE1pblgiLCJnZXRNYXhYIiwiZ2V0TWluWSIsImdldE1heFkiLCJsd29ybGRPcmdYIiwibHdvcmxkT3JnWSIsImxkZXZpY2VPcmdYIiwibGRldmljZU9yZ1kiLCJsd29ybGRFeHRYIiwibHdvcmxkRXh0WSIsImxkZXZpY2VFeHRYIiwibGRldmljZUV4dFkiLCJnZXRXb3JsZE9yZ1giLCJzZXRXb3JsZE9yZ1giLCJ3b3giLCJnZXRXb3JsZE9yZ1kiLCJzZXRXb3JsZE9yZ1kiLCJ3b3kiLCJnZXRXb3JsZEV4dFgiLCJzZXRXb3JsZEV4dFgiLCJ3ZXgiLCJnZXRXb3JsZEV4dFkiLCJzZXRXb3JsZEV4dFkiLCJ3ZXkiLCJnZXREZXZpY2VPcmdYIiwic2V0RGV2aWNlT3JnWCIsImRveCIsImdldERldmljZU9yZ1kiLCJzZXREZXZpY2VPcmdZIiwiZG95IiwiZ2V0RGV2aWNlRXh0WCIsInNldERldmljZUV4dFgiLCJkZXgiLCJnZXREZXZpY2VFeHRZIiwic2V0RGV2aWNlRXh0WSIsImRleSIsInRyYW5zZm9ybVgiLCJ4RGV2aWNlIiwid29ybGRFeHRYIiwidHJhbnNmb3JtWSIsInlEZXZpY2UiLCJ3b3JsZEV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtWCIsInhXb3JsZCIsImRldmljZUV4dFgiLCJpbnZlcnNlVHJhbnNmb3JtWSIsInlXb3JsZCIsImRldmljZUV4dFkiLCJpbnZlcnNlVHJhbnNmb3JtUG9pbnQiLCJpblBvaW50Iiwib3V0UG9pbnQiLCJnZXRfb2JqZWN0X2F0Iiwic2V0X29iamVjdF9hdCIsInF1aWNrc29ydCIsImNvbXBhcmlzb25fZm4iLCJjb21wYXJpc29uX2Z1bmN0aW9uIiwidW5kZWZpbmVkIiwiY29tcGFyZSIsImVuZF9pbmRleCIsInF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMiLCJsb3ciLCJoaWdoIiwiaiIsIm1pZGRsZUluZGV4IiwibWlkZGxlIiwidGVtcCIsImIiLCJub2RlRnJvbSIsIm5leHQiLCJwcmV2Iiwibm9kZSIsImhlYWQiLCJ0YWlsIiwidmFscyIsImZvckVhY2giLCJpbnNlcnRCZWZvcmUiLCJ2YWwiLCJvdGhlck5vZGUiLCJpbnNlcnRBZnRlciIsImluc2VydE5vZGVCZWZvcmUiLCJuZXdOb2RlIiwiaW5zZXJ0Tm9kZUFmdGVyIiwidW5zaGlmdCIsInBvcCIsInBvcE5vZGUiLCJzaGlmdCIsInNoaWZ0Tm9kZSIsImluZGV4IiwiY3VycmVudCIsInZHcmFwaE9iamVjdCIsInBhcmVudCIsIm9iajIiLCJ2R3JhcGgiLCJjYWxsIiwiZXN0aW1hdGVkU2l6ZSIsIm1hcmdpbiIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwiZWRnZXMiLCJub2RlcyIsImlzQ29ubmVjdGVkIiwiZ3JhcGhNYW5hZ2VyIiwiY3JlYXRlIiwicHJvcCIsImdldE5vZGVzIiwiZ2V0RWRnZXMiLCJnZXRHcmFwaE1hbmFnZXIiLCJnZXRQYXJlbnQiLCJnZXRMZWZ0IiwibGVmdCIsInJpZ2h0IiwiZ2V0VG9wIiwidG9wIiwiYm90dG9tIiwib2JqMSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwiaW5kZXhPZiIsIm93bmVyIiwibmV3RWRnZSIsInNvdXJjZSIsInRhcmdldCIsImlzSW50ZXJHcmFwaCIsImVkZ2VzVG9CZVJlbW92ZWQiLCJzbGljZSIsImVkZ2UiLCJzcGxpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwidXBkYXRlTGVmdFRvcCIsIm5vZGVUb3AiLCJub2RlTGVmdCIsImxOb2RlIiwicGFkZGluZ0xlZnQiLCJ1cGRhdGVCb3VuZHMiLCJyZWN1cnNpdmUiLCJub2RlUmlnaHQiLCJub2RlQm90dG9tIiwiY2hpbGQiLCJib3VuZGluZ1JlY3QiLCJjYWxjdWxhdGVCb3VuZHMiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJnZXRSb290IiwiZ2V0RXN0aW1hdGVkU2l6ZSIsImNhbGNFc3RpbWF0ZWRTaXplIiwiRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFIiwic3FydCIsInVwZGF0ZUNvbm5lY3RlZCIsInNlbGYiLCJ0b0JlVmlzaXRlZCIsInZpc2l0ZWQiLCJjdXJyZW50Tm9kZSIsIm5laWdoYm9yRWRnZXMiLCJjdXJyZW50TmVpZ2hib3IiLCJjaGlsZHJlbk9mTm9kZSIsIndpdGhDaGlsZHJlbiIsIm5laWdoYm9yRWRnZSIsImdldE90aGVyRW5kSW5HcmFwaCIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsIlBST09GX1FVQUxJVFkiLCJERUZBVUxUX1FVQUxJVFkiLCJEUkFGVF9RVUFMSVRZIiwiREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEIiwiREVGQVVMVF9JTkNSRU1FTlRBTCIsIkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQiLCJERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QiLCJERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTIiwiTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTIiwiU0lNUExFX05PREVfU0laRSIsIlNJTVBMRV9OT0RFX0hBTEZfU0laRSIsIk1JTl9FREdFX0xFTkdUSCIsIldPUkxEX0JPVU5EQVJZIiwiSU5JVElBTF9XT1JMRF9CT1VOREFSWSIsIldPUkxEX0NFTlRFUl9YIiwiV09STERfQ0VOVEVSX1kiLCJsYXlvdXQiLCJncmFwaHMiLCJhZGRSb290IiwibmdyYXBoIiwibmV3R3JhcGgiLCJubm9kZSIsInJvb3QiLCJzZXRSb290R3JhcGgiLCJyb290R3JhcGgiLCJwYXJlbnROb2RlIiwic291cmNlR3JhcGgiLCJnZXRPd25lciIsInRhcmdldEdyYXBoIiwibE9iaiIsImdyYXBoIiwiY29uY2F0Iiwibm9kZXNUb0JlUmVtb3ZlZCIsImdldEdyYXBocyIsImdldEFsbE5vZGVzIiwiYWxsTm9kZXMiLCJub2RlTGlzdCIsInJlc2V0QWxsTm9kZXMiLCJyZXNldEFsbEVkZ2VzIiwiYWxsRWRnZXMiLCJyZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJnZXRBbGxFZGdlcyIsImVkZ2VMaXN0IiwiZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImdldExheW91dCIsImlzT25lQW5jZXN0b3JPZk90aGVyIiwiZmlyc3ROb2RlIiwic2Vjb25kTm9kZSIsIm93bmVyR3JhcGgiLCJjYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzIiwic291cmNlQW5jZXN0b3JHcmFwaCIsInRhcmdldEFuY2VzdG9yR3JhcGgiLCJsY2EiLCJzb3VyY2VJbkxjYSIsInRhcmdldEluTGNhIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZGVwdGgiLCJpbmNsdXNpb25UcmVlRGVwdGgiLCJpbmNsdWRlc0ludmFsaWRFZGdlIiwidkVkZ2UiLCJpc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQiLCJiZW5kcG9pbnRzIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0TGVuZ3RoIiwiZ2V0QmVuZHBvaW50cyIsImdldExjYSIsImdldFNvdXJjZUluTGNhIiwiZ2V0VGFyZ2V0SW5MY2EiLCJnZXRPdGhlckVuZCIsIm90aGVyRW5kIiwidXBkYXRlTGVuZ3RoIiwiY2xpcFBvaW50Q29vcmRpbmF0ZXMiLCJnZXRSZWN0IiwibGVuZ3RoWCIsImxlbmd0aFkiLCJ1cGRhdGVMZW5ndGhTaW1wbGUiLCJnbSIsImxvYyIsInZOb2RlIiwicmVjdCIsImdldENoaWxkIiwiZ2V0Q2VudGVyIiwiZ2V0RGlhZ29uYWwiLCJzZXRSZWN0IiwidXBwZXJMZWZ0IiwiZGltZW5zaW9uIiwic2V0Q2VudGVyIiwiY3giLCJjeSIsIm1vdmVCeSIsImdldEVkZ2VMaXN0VG9Ob2RlIiwidG8iLCJnZXRFZGdlc0JldHdlZW4iLCJvdGhlciIsImdldE5laWdoYm9yc0xpc3QiLCJuZWlnaGJvcnMiLCJ3aXRoTmVpZ2hib3JzTGlzdCIsIlNldCIsImNoaWxkTm9kZSIsImNoaWxkcmVuIiwiZ2V0Tm9PZkNoaWxkcmVuIiwibm9PZkNoaWxkcmVuIiwic2NhdHRlciIsInJhbmRvbUNlbnRlclgiLCJyYW5kb21DZW50ZXJZIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsImNoaWxkR3JhcGgiLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJsYWJlbFBvcyIsInRyYW5zZm9ybSIsInRyYW5zIiwibGVmdFRvcCIsInZMZWZ0VG9wIiwiRW1pdHRlciIsImlzUmVtb3RlVXNlIiwibGF5b3V0UXVhbGl0eSIsImNyZWF0ZUJlbmRzQXNOZWVkZWQiLCJpbmNyZW1lbnRhbCIsImFuaW1hdGlvbk9uTGF5b3V0IiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwiYW5pbWF0aW9uUGVyaW9kIiwidW5pZm9ybUxlYWZOb2RlU2l6ZXMiLCJlZGdlVG9EdW1teU5vZGVzIiwiaXNMYXlvdXRGaW5pc2hlZCIsImlzU3ViTGF5b3V0IiwiUkFORE9NX1NFRUQiLCJuZXdHcmFwaE1hbmFnZXIiLCJjaGVja0xheW91dFN1Y2Nlc3MiLCJydW5MYXlvdXQiLCJ0aWxpbmdQcmVMYXlvdXQiLCJpbml0UGFyYW1ldGVycyIsImlzTGF5b3V0U3VjY2Vzc2Z1bGwiLCJBTklNQVRFIiwiZG9Qb3N0TGF5b3V0IiwidGlsaW5nUG9zdExheW91dCIsInVwZGF0ZSIsInVwZGF0ZTIiLCJjcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMiLCJuZXdMZWZ0VG9wIiwicG9zaXRpb25Ob2Rlc1JhbmRvbWx5IiwiZ2V0RmxhdEZvcmVzdCIsImZsYXRGb3Jlc3QiLCJpc0ZvcmVzdCIsImlzRmxhdCIsInBhcmVudHMiLCJ1blByb2Nlc3NlZE5vZGVzIiwiY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMiLCJkdW1teU5vZGVzIiwiZHVtbXlOb2RlIiwiRGltZW5zaW9uIiwiZHVtbXlFZGdlIiwiayIsImxFZGdlIiwicGF0aCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImZpbmRDZW50ZXJPZlRyZWUiLCJyZW1vdmVkTm9kZXMiLCJyZW1haW5pbmdEZWdyZWVzIiwiZm91bmRDZW50ZXIiLCJjZW50ZXJOb2RlIiwiZGVncmVlIiwidGVtcExpc3QiLCJ0ZW1wTGlzdDIiLCJuZWlnaGJvdXJzIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJsaXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsImV2ZW50IiwiY2FsbGJhY2siLCJyZW1vdmVMaXN0ZW5lciIsImwiLCJlbWl0IiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7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O0FBQzlDLFFBQUlvZCxJQUFJLEtBQUtMLFNBQUwsQ0FBZS9jLENBQWYsQ0FBUjs7QUFFQSxRQUFJaWQsVUFBVUcsRUFBRUgsS0FBaEIsRUFBdUI7QUFDckJHLFFBQUVGLFFBQUYsQ0FBWUksSUFBWjtBQUNEO0FBQ0Y7QUFDRixDQVJEOztBQVVBNWYsT0FBT0MsT0FBUCxHQUFpQnViLE9BQWpCLEMiLCJmaWxlIjoibGF5b3V0LWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXlvdXRCYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheW91dEJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IGxheW91dEJhc2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm47XG59O1xuXG5sYXlvdXRCYXNlLkRpbWVuc2lvbkQgPSByZXF1aXJlKCcuL3NyYy91dGlsL0RpbWVuc2lvbkQnKTtcbmxheW91dEJhc2UuSGFzaE1hcCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSGFzaE1hcCcpO1xubGF5b3V0QmFzZS5IYXNoU2V0ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9IYXNoU2V0Jyk7XG5sYXlvdXRCYXNlLklHZW9tZXRyeSA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSUdlb21ldHJ5Jyk7XG5sYXlvdXRCYXNlLklNYXRoID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9JTWF0aCcpO1xubGF5b3V0QmFzZS5JbnRlZ2VyID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9JbnRlZ2VyJyk7XG5sYXlvdXRCYXNlLlBvaW50ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9Qb2ludCcpO1xubGF5b3V0QmFzZS5Qb2ludEQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1BvaW50RCcpO1xubGF5b3V0QmFzZS5SYW5kb21TZWVkID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9SYW5kb21TZWVkJyk7XG5sYXlvdXRCYXNlLlJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1JlY3RhbmdsZUQnKTtcbmxheW91dEJhc2UuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9UcmFuc2Zvcm0nKTtcbmxheW91dEJhc2UuVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL3NyYy91dGlsL1VuaXF1ZUlER2VuZXJldG9yJyk7XG5sYXlvdXRCYXNlLlF1aWNrc29ydCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvUXVpY2tzb3J0Jyk7XG5sYXlvdXRCYXNlLkxpbmtlZExpc3QgPSByZXF1aXJlKCcuL3NyYy91dGlsL0xpbmtlZExpc3QnKTtcbmxheW91dEJhc2UuTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9zcmMvTEdyYXBoT2JqZWN0Jyk7XG5sYXlvdXRCYXNlLkxHcmFwaCA9IHJlcXVpcmUoJy4vc3JjL0xHcmFwaCcpO1xubGF5b3V0QmFzZS5MRWRnZSA9IHJlcXVpcmUoJy4vc3JjL0xFZGdlJyk7XG5sYXlvdXRCYXNlLkxHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL3NyYy9MR3JhcGhNYW5hZ2VyJyk7XG5sYXlvdXRCYXNlLkxOb2RlID0gcmVxdWlyZSgnLi9zcmMvTE5vZGUnKTtcbmxheW91dEJhc2UuTGF5b3V0ID0gcmVxdWlyZSgnLi9zcmMvTGF5b3V0Jyk7XG5sYXlvdXRCYXNlLkxheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vc3JjL0xheW91dENvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxheW91dEJhc2U7XG5cblxuIiwiZnVuY3Rpb24gRGltZW5zaW9uRCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgdGhpcy53aWR0aCA9IDA7XHJcbiAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gIGlmICh3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGwpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIH1cclxufVxyXG5cclxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcclxue1xyXG4gIHRoaXMud2lkdGggPSB3aWR0aDtcclxufTtcclxuXHJcbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5oZWlnaHQ7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxyXG57XHJcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XHJcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcclxuXHJcbmZ1bmN0aW9uIEhhc2hNYXAoKSB7XHJcbiAgdGhpcy5tYXAgPSB7fTtcclxuICB0aGlzLmtleXMgPSBbXTtcclxufVxyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xyXG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHtcclxuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xyXG4gICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcclxuICB9XHJcbn07XHJcblxyXG5IYXNoTWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xyXG4gIHJldHVybiB0aGlzLm1hcFtrZXldICE9IG51bGw7XHJcbn07XHJcblxyXG5IYXNoTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcclxuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xyXG59O1xyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmtleXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hNYXA7XHJcbiIsImZ1bmN0aW9uIFVuaXF1ZUlER2VuZXJldG9yKCkge1xyXG59XHJcblxyXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG9iai51bmlxdWVJRDtcclxuICB9XHJcbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XHJcbiAgVW5pcXVlSURHZW5lcmV0b3IubGFzdElEKys7XHJcbiAgcmV0dXJuIG9iai51bmlxdWVJRDtcclxufVxyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgaWYgKGlkID09IG51bGwpXHJcbiAgICBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcclxuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XHJcbn1cclxuXHJcblVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24gKGFyZykge1xyXG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcclxuICByZXR1cm4gYXJnID09IG51bGwgfHwgKHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XHJcbiIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcclxuXHJcbmZ1bmN0aW9uIEhhc2hTZXQoKSB7XHJcbiAgdGhpcy5zZXQgPSB7fTtcclxufVxyXG47XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKTtcclxuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKVxyXG4gICAgdGhpcy5zZXRbdGhlSWRdID0gb2JqO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIGRlbGV0ZSB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXTtcclxufTtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuc2V0ID0ge307XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcclxuICByZXR1cm4gdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV0gPT0gb2JqO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xyXG59O1xyXG5cclxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XHJcbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbFRvID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KTtcclxuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgbGlzdC5wdXNoKHRoaXMuc2V0W2tleXNbaV1dKTtcclxuICB9XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICB2YXIgcyA9IGxpc3QubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XHJcbiAgICB2YXIgdiA9IGxpc3RbaV07XHJcbiAgICB0aGlzLmFkZCh2KTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XHJcbiIsImZ1bmN0aW9uIElHZW9tZXRyeSgpIHtcclxufVxyXG5cclxuSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgc2VwYXJhdGlvbkJ1ZmZlcilcclxue1xyXG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcclxuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcclxuICBvdmVybGFwQW1vdW50WzBdID0gTWF0aC5taW4ocmVjdEEuZ2V0UmlnaHQoKSwgcmVjdEIuZ2V0UmlnaHQoKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XHJcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IE1hdGgubWluKHJlY3RBLmdldEJvdHRvbSgpLCByZWN0Qi5nZXRCb3R0b20oKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XHJcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxyXG4gIGlmICgocmVjdEEuZ2V0WCgpIDw9IHJlY3RCLmdldFgoKSkgJiYgKHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkpXHJcbiAge1xyXG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcclxuICAgICAgICAgICAgKHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcclxuICB7XHJcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0QS5nZXRYKCkgLSByZWN0Qi5nZXRYKCkpLFxyXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcclxuICB9XHJcbiAgaWYgKChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpKSAmJiAocmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0QS5nZXRCb3R0b20oKSAtIHJlY3RCLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRZKCkgPD0gcmVjdEEuZ2V0WSgpKSAmJiAocmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xyXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC9cclxuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcclxuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXHJcbiAgaWYgKChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAmJlxyXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxyXG4gIHtcclxuICAgIC8vIGFzc3VtZSB0aGUgc2xvcGUgaXMgMSAoNDUgZGVncmVlKVxyXG4gICAgc2xvcGUgPSAxLjA7XHJcbiAgfVxyXG5cclxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcclxuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcclxuICBpZiAob3ZlcmxhcEFtb3VudFswXSA8IG1vdmVCeVgpXHJcbiAge1xyXG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBtb3ZlQnlZID0gb3ZlcmxhcEFtb3VudFsxXTtcclxuICB9XHJcbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXHJcbiAgLy8gYW1vdW50cyBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zLCBvdmVybGFwIHdpbGwgYmUgcmVzb2x2ZWRcclxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxuICBvdmVybGFwQW1vdW50WzFdID0gLTEgKiBkaXJlY3Rpb25zWzFdICogKChtb3ZlQnlZIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxufVxyXG5cclxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucylcclxue1xyXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XHJcbiAgfVxyXG5cclxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpXHJcbntcclxuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcclxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xyXG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XHJcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcclxuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xyXG5cclxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcclxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpXHJcbiAge1xyXG4gICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgcmVzdWx0WzFdID0gcDF5O1xyXG4gICAgcmVzdWx0WzJdID0gcDJ4O1xyXG4gICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxyXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxyXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcclxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XHJcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXHJcbiAgaWYgKHAxeCA9PSBwMngpXHJcbiAge1xyXG4gICAgaWYgKHAxeSA+IHAyeSlcclxuICAgIHtcclxuICAgICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcclxuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcclxuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xyXG4gICAgICByZXN1bHRbMl0gPSBwMng7XHJcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvL25vdCBsaW5lLCByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gbGluZSBpcyBob3Jpem9udGFsXHJcbiAgZWxzZSBpZiAocDF5ID09IHAyeSlcclxuICB7XHJcbiAgICBpZiAocDF4ID4gcDJ4KVxyXG4gICAge1xyXG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXggPCBwMngpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xyXG4gICAgICByZXN1bHRbM10gPSBwMnk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy9ub3QgdmFsaWQgbGluZSwgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xyXG4gICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xyXG4gICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xyXG5cclxuICAgIC8vc2xvcGUgb2YgbGluZSBiZXR3ZWVuIGNlbnRlciBvZiByZWN0QSBhbmQgY2VudGVyIG9mIHJlY3RCXHJcbiAgICB2YXIgc2xvcGVQcmltZSA9IChwMnkgLSBwMXkpIC8gKHAyeCAtIHAxeCk7XHJcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xyXG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQjtcclxuICAgIHZhciB0ZW1wUG9pbnRBeDtcclxuICAgIHZhciB0ZW1wUG9pbnRBeTtcclxuICAgIHZhciB0ZW1wUG9pbnRCeDtcclxuICAgIHZhciB0ZW1wUG9pbnRCeTtcclxuXHJcbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcclxuICAgIGlmICgoLXNsb3BlQSkgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbG9wZUEgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXHJcbiAgICBpZiAoKC1zbG9wZUIpID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21MZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcclxuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcclxuICAgIGlmIChwMXggPiBwMngpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXHJcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcclxuICAgIHtcclxuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XHJcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xyXG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQilcclxuICAgICAge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcclxuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21SaWdodEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IGJvdHRvbUxlZnRCeTtcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XHJcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tTGVmdEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbklHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzbG9wZSwgc2xvcGVQcmltZSwgbGluZSlcclxue1xyXG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXHJcbiAge1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChzMSwgczIsIGYxLCBmMilcclxue1xyXG4gIGlmIChmMiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XHJcbiAgfVxyXG4gIHZhciB4MSA9IHMxLng7XHJcbiAgdmFyIHkxID0gczEueTtcclxuICB2YXIgeDIgPSBzMi54O1xyXG4gIHZhciB5MiA9IHMyLnk7XHJcbiAgdmFyIHgzID0gZjEueDtcclxuICB2YXIgeTMgPSBmMS55O1xyXG4gIHZhciB4NCA9IGYyLng7XHJcbiAgdmFyIHk0ID0gZjIueTtcclxuICB2YXIgeCwgeTsgLy8gaW50ZXJzZWN0aW9uIHBvaW50XHJcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXHJcbiAgdmFyIGRlbm9tO1xyXG5cclxuICBhMSA9IHkyIC0geTE7XHJcbiAgYjEgPSB4MSAtIHgyO1xyXG4gIGMxID0geDIgKiB5MSAtIHgxICogeTI7ICAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XHJcblxyXG4gIGEyID0geTQgLSB5MztcclxuICBiMiA9IHgzIC0geDQ7XHJcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cclxuXHJcbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcclxuXHJcbiAgaWYgKGRlbm9tID09IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xyXG4gIHkgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gZGVub207XHJcblxyXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKipcclxuICogU29tZSB1c2VmdWwgcHJlLWNhbGN1bGF0ZWQgY29uc3RhbnRzXHJcbiAqL1xyXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XHJcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xyXG5JR2VvbWV0cnkuVFdPX1BJID0gMi4wICogTWF0aC5QSTtcclxuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSUdlb21ldHJ5O1xyXG4iLCJmdW5jdGlvbiBJTWF0aCgpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxyXG4gKi9cclxuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA+IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHZhbHVlIDwgMClcclxuICB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuXHJcbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcclxufVxyXG5cclxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSU1hdGg7XHJcbiIsImZ1bmN0aW9uIEludGVnZXIoKSB7XHJcbn1cclxuXHJcbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcclxuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcclxuIiwiLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cclxuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xyXG4gIHRoaXMueCA9IG51bGw7XHJcbiAgdGhpcy55ID0gbnVsbDtcclxuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gIH1cclxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuICBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XHJcbiAgICBwID0geDtcclxuICAgIHRoaXMueCA9IHAueDtcclxuICAgIHRoaXMueSA9IHAueTtcclxuICB9XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxufVxyXG5cclxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcclxuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xyXG4gICAgcCA9IHg7XHJcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XHJcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cclxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcclxuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XHJcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoeSArIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xyXG4gIHRoaXMueCArPSBkeDtcclxuICB0aGlzLnkgKz0gZHk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xyXG4gICAgdmFyIHB0ID0gb2JqO1xyXG4gICAgcmV0dXJuICh0aGlzLnggPT0gcHQueCkgJiYgKHRoaXMueSA9PSBwdC55KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQb2ludCgpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xyXG4iLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xyXG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueDtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXHJcbntcclxuICB0aGlzLnkgPSB5O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxyXG57XHJcbiAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIHB0LngsIHRoaXMueSAtIHB0LnkpO1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSlcclxue1xyXG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XHJcbiAgdGhpcy55ICs9IGRpbS5oZWlnaHQ7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcclxuIiwiZnVuY3Rpb24gUmFuZG9tU2VlZCgpIHtcclxufVxyXG5SYW5kb21TZWVkLnNlZWQgPSAxO1xyXG5SYW5kb21TZWVkLnggPSAwO1xyXG5cclxuUmFuZG9tU2VlZC5uZXh0RG91YmxlID0gZnVuY3Rpb24gKCkge1xyXG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xyXG4gIHJldHVybiBSYW5kb21TZWVkLnggLSBNYXRoLmZsb29yKFJhbmRvbVNlZWQueCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmRvbVNlZWQ7XHJcbiIsImZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIHRoaXMueCA9IDA7XHJcbiAgdGhpcy55ID0gMDtcclxuICB0aGlzLndpZHRoID0gMDtcclxuICB0aGlzLmhlaWdodCA9IDA7XHJcblxyXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdGhpcy55ID0geTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLndpZHRoO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXHJcbntcclxuICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcclxue1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxyXG57XHJcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueClcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSlcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdldFgoKTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZUQ7XHJcbiIsInZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xyXG5cclxuZnVuY3Rpb24gVHJhbnNmb3JtKHgsIHkpIHtcclxuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XHJcbiAgdGhpcy5sd29ybGRPcmdZID0gMC4wO1xyXG4gIHRoaXMubGRldmljZU9yZ1ggPSAwLjA7XHJcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcclxuICB0aGlzLmx3b3JsZEV4dFggPSAxLjA7XHJcbiAgdGhpcy5sd29ybGRFeHRZID0gMS4wO1xyXG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XHJcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IDEuMDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KVxyXG57XHJcbiAgdGhpcy5sd29ybGRPcmdYID0gd294O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICh3b3kpXHJcbntcclxuICB0aGlzLmx3b3JsZE9yZ1kgPSB3b3k7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKHdleClcclxue1xyXG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KVxyXG57XHJcbiAgdGhpcy5sd29ybGRFeHRZID0gd2V5O1xyXG59XHJcblxyXG4vKiBEZXZpY2UgcmVsYXRlZCAqL1xyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IGRveDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoZG95KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IGRveTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFggPSBmdW5jdGlvbiAoZGV4KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KVxyXG57XHJcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IGRleTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB2YXIgeERldmljZSA9IDAuMDtcclxuICB2YXIgd29ybGRFeHRYID0gdGhpcy5sd29ybGRFeHRYO1xyXG4gIGlmICh3b3JsZEV4dFggIT0gMC4wKVxyXG4gIHtcclxuICAgIHhEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdYICtcclxuICAgICAgICAgICAgKCh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHhEZXZpY2U7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdmFyIHlEZXZpY2UgPSAwLjA7XHJcbiAgdmFyIHdvcmxkRXh0WSA9IHRoaXMubHdvcmxkRXh0WTtcclxuICBpZiAod29ybGRFeHRZICE9IDAuMClcclxuICB7XHJcbiAgICB5RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWSArXHJcbiAgICAgICAgICAgICgoeSAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gd29ybGRFeHRZKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4geURldmljZTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxyXG57XHJcbiAgdmFyIHhXb3JsZCA9IDAuMDtcclxuICB2YXIgZGV2aWNlRXh0WCA9IHRoaXMubGRldmljZUV4dFg7XHJcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKVxyXG4gIHtcclxuICAgIHhXb3JsZCA9IHRoaXMubHdvcmxkT3JnWCArXHJcbiAgICAgICAgICAgICgoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHhXb3JsZDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdmFyIHlXb3JsZCA9IDAuMDtcclxuICB2YXIgZGV2aWNlRXh0WSA9IHRoaXMubGRldmljZUV4dFk7XHJcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKVxyXG4gIHtcclxuICAgIHlXb3JsZCA9IHRoaXMubHdvcmxkT3JnWSArXHJcbiAgICAgICAgICAgICgoeSAtIHRoaXMubGRldmljZU9yZ1kpICogdGhpcy5sd29ybGRFeHRZIC8gZGV2aWNlRXh0WSk7XHJcbiAgfVxyXG4gIHJldHVybiB5V29ybGQ7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpXHJcbntcclxuICB2YXIgb3V0UG9pbnQgPVxyXG4gICAgICAgICAgbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XHJcbiAgcmV0dXJuIG91dFBvaW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcclxuIiwiY29uc3QgTGlua2VkTGlzdCA9IHJlcXVpcmUoJy4vTGlua2VkTGlzdC5qcycpO1xuXG5mdW5jdGlvbiBRdWlja3NvcnQoKXtcblxufVxuXG5RdWlja3NvcnQuZ2V0X29iamVjdF9hdCA9ICBmdW5jdGlvbihsaXN0LCBpKXtcbiAgICBpZiggbGlzdCBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgfVxuICAgIGVsc2UgaWYobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3Qpe1xuICAgICAgICByZXR1cm4gbGlzdC5nZXRfb2JqZWN0X2F0KGkpO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5zZXRfb2JqZWN0X2F0ID0gIGZ1bmN0aW9uKGxpc3QsIGksIHZhbHVlKXtcbiAgICBpZiggbGlzdCBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgbGlzdFtpXSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KXtcbiAgICAgICAgbGlzdC5zZXRfb2JqZWN0X2F0KGksIHZhbHVlKTtcbiAgICB9XG59O1xuXG5RdWlja3NvcnQucXVpY2tzb3J0ID0gZnVuY3Rpb24obGlzdCwgY29tcGFyaXNvbl9mbil7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEgKCAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHx8ICggbGlzdCBpbnN0YW5jZW9mIEFycmF5KSkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cdHZhciBjb21wYXJpc29uX2Z1bmN0aW9uID0gY29tcGFyaXNvbl9mbjtcblx0XG4gICAgaWYoIGNvbXBhcmlzb25fZnVuY3Rpb24gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBRdWlja3NvcnQuY29tcGFyZTtcbiAgICB9XG4gICAgdmFyIGVuZF9pbmRleDtcblxuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCl7XG4gICAgICAgIGVuZF9pbmRleCA9IGxpc3Quc2l6ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmKCBsaXN0IGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5sZW5ndGgtMTtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGVtcHR5IGxpc3RzIG9yIGFycmF5cy5cbiAgICBpZiAoZW5kX2luZGV4ID49IDApe1xuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCAwLCBlbmRfaW5kZXgsIGNvbXBhcmlzb25fZnVuY3Rpb24pO1xuICAgIH1cblxufTtcblxuXG5RdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyA9IGZ1bmN0aW9uKGxpc3QsIGxvdywgaGlnaCwgY29tcGFyaXNvbl9mbil7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEgKCAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHx8ICggbGlzdCBpbnN0YW5jZW9mIEFycmF5KSkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoY29tcGFyaXNvbl9mbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29tcGFyaXNvbl9mbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cblxuICAgIHZhciBpID0gbG93O1xuICAgIHZhciBqID0gaGlnaDtcbiAgICB2YXIgbWlkZGxlSW5kZXggPSBNYXRoLmZsb29yKCAoIGkgKyBqICkgLyAyICk7XG4gICAgdmFyIG1pZGRsZSA9IFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIG1pZGRsZUluZGV4KTtcblxuICAgIGRvXG4gICAge1xuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpLCBtaWRkbGUpKXtcblxuICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY29tcGFyaXNvbl9mbihtaWRkbGUsIFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGopKSl7XG5cbiAgICAgICAgICAgIGotLTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPD0gail7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wID0gUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaSk7XG4gICAgICAgICAgICBRdWlja3NvcnQuc2V0X29iamVjdF9hdChsaXN0LCBpLCBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBqKSk7XG4gICAgICAgICAgICBRdWlja3NvcnQuc2V0X29iamVjdF9hdChsaXN0LCBqLCB0ZW1wKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGotLTtcblxuICAgICAgICB9XG5cbiAgICB9IHdoaWxlIChpPD1qKTtcblxuICAgIGlmKCBsb3cgPCBqICl7XG5cbiAgICAgICAgUXVpY2tzb3J0LnF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMobGlzdCwgbG93LCBqLCBjb21wYXJpc29uX2ZuKTtcblxuICAgIH1cblxuICAgIGlmKCBoaWdoID4gaSl7XG5cbiAgICAgICAgUXVpY2tzb3J0LnF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMobGlzdCwgaSwgaGlnaCwgY29tcGFyaXNvbl9mbik7XG5cbiAgICB9XG5cbn07XG5cbi8vIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBvdmVycmlkZW4gZm9yIHNvcnRpbmcgZGlmZmVyZW50IGRhdGEgdHlwZXMoZS5nLiBzdHJpbmcsIGludGVnZXIgZXRjLilcblF1aWNrc29ydC5jb21wYXJlID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gYiA+IGE7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUXVpY2tzb3J0OyIsImNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XHJcblxyXG5jb25zdCBhZGQgPSAoIHByZXYsIG5vZGUsIG5leHQsIGxpc3QgKSA9PiB7XHJcbiAgaWYoIHByZXYgIT09IG51bGwgKXtcclxuICAgIHByZXYubmV4dCA9IG5vZGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpc3QuaGVhZCA9IG5vZGU7XHJcbiAgfVxyXG5cclxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xyXG4gICAgbmV4dC5wcmV2ID0gbm9kZTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdC50YWlsID0gbm9kZTtcclxuICB9XHJcblxyXG4gIG5vZGUucHJldiA9IHByZXY7XHJcbiAgbm9kZS5uZXh0ID0gbmV4dDtcclxuXHJcbiAgbGlzdC5sZW5ndGgrKztcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmUgPSAoIG5vZGUsIGxpc3QgKSA9PiB7XHJcbiAgbGV0IHsgcHJldiwgbmV4dCB9ID0gbm9kZTtcclxuXHJcbiAgaWYoIHByZXYgIT09IG51bGwgKXtcclxuICAgIHByZXYubmV4dCA9IG5leHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpc3QuaGVhZCA9IG5leHQ7XHJcbiAgfVxyXG5cclxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xyXG4gICAgbmV4dC5wcmV2ID0gcHJldjtcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdC50YWlsID0gcHJldjtcclxuICB9XHJcblxyXG4gIG5vZGUucHJldiA9IG5vZGUubmV4dCA9IG51bGw7XHJcblxyXG4gIGxpc3QubGVuZ3RoLS07XHJcblxyXG4gIHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuY2xhc3MgTGlua2VkTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoIHZhbHMgKXtcclxuICAgIHRoaXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuaGVhZCA9IG51bGw7XHJcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xyXG5cclxuICAgIGlmKCB2YWxzICE9IG51bGwgKXtcclxuICAgICAgdmFscy5mb3JFYWNoKCB2ID0+IHRoaXMucHVzaCh2KSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2l6ZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0QmVmb3JlKCB2YWwsIG90aGVyTm9kZSApe1xyXG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLnByZXYsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZSwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0QWZ0ZXIoIHZhbCwgb3RoZXJOb2RlICl7XHJcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnROb2RlQmVmb3JlKCBuZXdOb2RlLCBvdGhlck5vZGUgKXtcclxuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBuZXdOb2RlLCBvdGhlck5vZGUsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIGluc2VydE5vZGVBZnRlciggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XHJcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUsIG5ld05vZGUsIG90aGVyTm9kZS5uZXh0LCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBwdXNoKCB2YWwgKXtcclxuICAgIHJldHVybiBhZGQoIHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgdW5zaGlmdCggdmFsICl7XHJcbiAgICByZXR1cm4gYWRkKCBudWxsLCBub2RlRnJvbSh2YWwpLCB0aGlzLmhlYWQsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSggbm9kZSApe1xyXG4gICAgcmV0dXJuIHJlbW92ZSggbm9kZSwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgcG9wKCl7XHJcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHBvcE5vZGUoKXtcclxuICAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHNoaWZ0KCl7XHJcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLmhlYWQsIHRoaXMgKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNoaWZ0Tm9kZSgpe1xyXG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBnZXRfb2JqZWN0X2F0KCBpbmRleCApe1xyXG4gICAgaWYoaW5kZXggPD0gdGhpcy5sZW5ndGgoKSl7XHJcbiAgICAgIHZhciBpID0gMTtcclxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICAgIHdoaWxlKGkgPCBpbmRleCl7XHJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRfb2JqZWN0X2F0KCBpbmRleCwgdmFsdWUpe1xyXG4gICAgaWYoaW5kZXggPD0gdGhpcy5sZW5ndGgoKSkge1xyXG4gICAgICB2YXIgaSA9IDE7XHJcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgICB3aGlsZSAoaSA8IGluZGV4KSB7XHJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICBpKys7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5rZWRMaXN0O1xyXG4iLCJmdW5jdGlvbiBMR3JhcGhPYmplY3QodkdyYXBoT2JqZWN0KSB7XHJcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2R3JhcGhPYmplY3Q7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoT2JqZWN0O1xyXG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcclxudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL3V0aWwvSW50ZWdlcicpO1xyXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcclxudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcclxudmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xyXG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XHJcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi91dGlsL0hhc2hTZXQnKTtcclxudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL3V0aWwvUmVjdGFuZ2xlRCcpO1xyXG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL3V0aWwvUG9pbnQnKTtcclxudmFyIExpbmtlZExpc3QgPSByZXF1aXJlKCcuL3V0aWwvTGlua2VkTGlzdCcpO1xyXG5cclxuZnVuY3Rpb24gTEdyYXBoKHBhcmVudCwgb2JqMiwgdkdyYXBoKSB7XHJcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdkdyYXBoKTtcclxuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcclxuICB0aGlzLm1hcmdpbiA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTjtcclxuICB0aGlzLmVkZ2VzID0gW107XHJcbiAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTEdyYXBoTWFuYWdlcikge1xyXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIgPSBvYmoyO1xyXG4gIH1cclxuICBlbHNlIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExheW91dCkge1xyXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIgPSBvYmoyLmdyYXBoTWFuYWdlcjtcclxuICB9XHJcbn1cclxuXHJcbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xyXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xyXG4gIExHcmFwaFtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcclxufVxyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ub2RlcztcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5wYXJlbnQ7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGVmdDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmlnaHQ7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy50b3A7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5ib3R0b207XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqMSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xyXG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XHJcbiAgICB2YXIgbmV3Tm9kZSA9IG9iajE7XHJcbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YobmV3Tm9kZSkgPiAtMSkge1xyXG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcclxuICAgIH1cclxuICAgIG5ld05vZGUub3duZXIgPSB0aGlzO1xyXG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld05vZGU7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIG5ld0VkZ2UgPSBvYmoxO1xyXG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YodGFyZ2V0Tm9kZSkpID4gLTEpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIG9yIHRhcmdldCBub3QgaW4gZ3JhcGghXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEoc291cmNlTm9kZS5vd25lciA9PSB0YXJnZXROb2RlLm93bmVyICYmIHNvdXJjZU5vZGUub3duZXIgPT0gdGhpcykpIHtcclxuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcilcclxuICAgIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XHJcbiAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XHJcbiAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XHJcblxyXG4gICAgLy8gc2V0IGFzIGludHJhLWdyYXBoIGVkZ2VcclxuICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XHJcblxyXG4gICAgLy8gYWRkIHRvIGdyYXBoIGVkZ2UgbGlzdFxyXG4gICAgdGhpcy5nZXRFZGdlcygpLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgLy8gYWRkIHRvIGluY2lkZW5jeSBsaXN0c1xyXG4gICAgc291cmNlTm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xyXG5cclxuICAgIGlmICh0YXJnZXROb2RlICE9IHNvdXJjZU5vZGUpXHJcbiAgICB7XHJcbiAgICAgIHRhcmdldE5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3RWRnZTtcclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICB2YXIgbm9kZSA9IG9iajtcclxuICBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcclxuICAgIGlmIChub2RlID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIShub2RlLm93bmVyICE9IG51bGwgJiYgbm9kZS5vd25lciA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcclxuICAgIH1cclxuICAgIC8vIHJlbW92ZSBpbmNpZGVudCBlZGdlcyBmaXJzdCAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxyXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XHJcbiAgICB2YXIgZWRnZTtcclxuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XHJcblxyXG4gICAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIucmVtb3ZlKGVkZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKG5vZGUpO1xyXG4gICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcclxuICAgIHZhciBlZGdlID0gb2JqO1xyXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnRhcmdldC5vd25lciAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIGVkZ2Uuc291cmNlLm93bmVyID09IHRoaXMgJiYgZWRnZS50YXJnZXQub3duZXIgPT0gdGhpcykpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBvd25lciBpcyBpbnZhbGlkIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzb3VyY2VJbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xyXG4gICAgaWYgKCEoc291cmNlSW5kZXggPiAtMSAmJiB0YXJnZXRJbmRleCA+IC0xKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKHNvdXJjZUluZGV4LCAxKTtcclxuXHJcbiAgICBpZiAoZWRnZS50YXJnZXQgIT0gZWRnZS5zb3VyY2UpXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5pbmRleE9mKGVkZ2UpO1xyXG4gICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUxlZnRUb3AgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIG5vZGVUb3A7XHJcbiAgdmFyIG5vZGVMZWZ0O1xyXG4gIHZhciBtYXJnaW47XHJcblxyXG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Tm9kZXMoKTtcclxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XHJcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XHJcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcclxuXHJcbiAgICBpZiAodG9wID4gbm9kZVRvcClcclxuICAgIHtcclxuICAgICAgdG9wID0gbm9kZVRvcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxyXG4gICAge1xyXG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEbyB3ZSBoYXZlIGFueSBub2RlcyBpbiB0aGlzIGdyYXBoP1xyXG4gIGlmICh0b3AgPT0gSW50ZWdlci5NQVhfVkFMVUUpXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZihub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCAhPSB1bmRlZmluZWQpe1xyXG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcclxuICB9XHJcblxyXG4gIHRoaXMubGVmdCA9IGxlZnQgLSBtYXJnaW47XHJcbiAgdGhpcy50b3AgPSB0b3AgLSBtYXJnaW47XHJcblxyXG4gIC8vIEFwcGx5IHRoZSBtYXJnaW5zIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxyXG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChyZWN1cnNpdmUpXHJcbntcclxuICAvLyBjYWxjdWxhdGUgYm91bmRzXHJcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIG5vZGVMZWZ0O1xyXG4gIHZhciBub2RlUmlnaHQ7XHJcbiAgdmFyIG5vZGVUb3A7XHJcbiAgdmFyIG5vZGVCb3R0b207XHJcbiAgdmFyIG1hcmdpbjtcclxuXHJcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcclxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuXHJcbiAgICBpZiAocmVjdXJzaXZlICYmIGxOb2RlLmNoaWxkICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xyXG4gICAgfVxyXG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XHJcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xyXG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xyXG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xyXG5cclxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXHJcbiAgICB7XHJcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXHJcbiAgICB7XHJcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxyXG4gICAge1xyXG4gICAgICB0b3AgPSBub2RlVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKVxyXG4gICAge1xyXG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0LCBib3R0b20gLSB0b3ApO1xyXG4gIGlmIChsZWZ0ID09IEludGVnZXIuTUFYX1ZBTFVFKVxyXG4gIHtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMucGFyZW50LmdldExlZnQoKTtcclxuICAgIHRoaXMucmlnaHQgPSB0aGlzLnBhcmVudC5nZXRSaWdodCgpO1xyXG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcclxuICAgIHRoaXMuYm90dG9tID0gdGhpcy5wYXJlbnQuZ2V0Qm90dG9tKCk7XHJcbiAgfVxyXG5cclxuICBpZihub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCAhPSB1bmRlZmluZWQpe1xyXG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcclxuICB9XHJcblxyXG4gIHRoaXMubGVmdCA9IGJvdW5kaW5nUmVjdC54IC0gbWFyZ2luO1xyXG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcclxuICB0aGlzLnRvcCA9IGJvdW5kaW5nUmVjdC55IC0gbWFyZ2luO1xyXG4gIHRoaXMuYm90dG9tID0gYm91bmRpbmdSZWN0LnkgKyBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgbWFyZ2luO1xyXG59O1xyXG5cclxuTEdyYXBoLmNhbGN1bGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChub2Rlcylcclxue1xyXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBub2RlTGVmdDtcclxuICB2YXIgbm9kZVJpZ2h0O1xyXG4gIHZhciBub2RlVG9wO1xyXG4gIHZhciBub2RlQm90dG9tO1xyXG5cclxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XHJcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcclxuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XHJcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XHJcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XHJcblxyXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcclxuICAgIHtcclxuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodClcclxuICAgIHtcclxuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXHJcbiAgICB7XHJcbiAgICAgIHRvcCA9IG5vZGVUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXHJcbiAgICB7XHJcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XHJcblxyXG4gIHJldHVybiBib3VuZGluZ1JlY3Q7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcyA9PSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpXHJcbiAge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgc2l6ZSA9IDA7XHJcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcclxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XHJcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2l6ZSA9PSAwKVxyXG4gIHtcclxuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IExheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkU7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID09IDApXHJcbiAge1xyXG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgdG9CZVZpc2l0ZWQgPSBuZXcgTGlua2VkTGlzdCgpO1xyXG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcclxuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xyXG4gIHZhciBuZWlnaGJvckVkZ2VzO1xyXG4gIHZhciBjdXJyZW50TmVpZ2hib3I7XHJcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XHJcbiAgY2hpbGRyZW5PZk5vZGUuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcbiAgICB0b0JlVmlzaXRlZC5wdXNoKG5vZGUpO1xyXG4gIH0pO1xyXG5cclxuICB3aGlsZSAodG9CZVZpc2l0ZWQubGVuZ3RoICE9PSAwKVxyXG4gIHtcclxuICAgIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWQuc2hpZnQoKTtcclxuICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxyXG4gICAgbmVpZ2hib3JFZGdlcyA9IGN1cnJlbnROb2RlLmdldEVkZ2VzKCk7XHJcbiAgICB2YXIgcyA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIHZhciBuZWlnaGJvckVkZ2UgPSBuZWlnaGJvckVkZ2VzW2ldO1xyXG4gICAgICBjdXJyZW50TmVpZ2hib3IgPVxyXG4gICAgICAgICAgICAgIG5laWdoYm9yRWRnZS5nZXRPdGhlckVuZEluR3JhcGgoY3VycmVudE5vZGUsIHRoaXMpO1xyXG5cclxuICAgICAgLy8gQWRkIHVudmlzaXRlZCBuZWlnaGJvcnMgdG8gdGhlIGxpc3QgdG8gdmlzaXRcclxuICAgICAgaWYgKGN1cnJlbnROZWlnaGJvciAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcclxuICAgICAge1xyXG4gICAgICAgIHZhciBjaGlsZHJlbk9mTmVpZ2hib3IgPSBjdXJyZW50TmVpZ2hib3Iud2l0aENoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIGNoaWxkcmVuT2ZOZWlnaGJvci5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgaWYgKHZpc2l0ZWQuc2l6ZSgpID49IHRoaXMubm9kZXMubGVuZ3RoKVxyXG4gIHtcclxuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcclxuXHJcbiAgICB2YXIgcyA9IHZpc2l0ZWQuc2l6ZSgpO1xyXG4gICAgIE9iamVjdC5rZXlzKHZpc2l0ZWQuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKHZpc2l0ZWRJZCkge1xyXG4gICAgICB2YXIgdmlzaXRlZE5vZGUgPSB2aXNpdGVkLnNldFt2aXNpdGVkSWRdO1xyXG4gICAgICBpZiAodmlzaXRlZE5vZGUub3duZXIgPT0gc2VsZilcclxuICAgICAge1xyXG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPT0gdGhpcy5ub2Rlcy5sZW5ndGgpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xyXG4iLCJmdW5jdGlvbiBMYXlvdXRDb25zdGFudHMoKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgUXVhbGl0eVxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZID0gMTtcclxuTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkgPSAyO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgcGFyYW1ldGVyc1xyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCA9IGZhbHNlO1xyXG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBmYWxzZTtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9IHRydWU7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MDtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMgPSBmYWxzZTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb246IEdlbmVyYWwgb3RoZXIgY29uc3RhbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qXHJcbiAqIE1hcmdpbnMgb2YgYSBncmFwaCB0byBiZSBhcHBsaWVkIG9uIGJvdWRpbmcgcmVjdGFuZ2xlIG9mIGl0cyBjb250ZW50cy4gV2VcclxuICogYXNzdW1lIG1hcmdpbnMgb24gYWxsIGZvdXIgc2lkZXMgdG8gYmUgdW5pZm9ybS5cclxuICovXHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTiA9IDE1O1xyXG5cclxuLypcclxuICogV2hldGhlciB0byBjb25zaWRlciBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zIG9yIG5vdFxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IGZhbHNlO1xyXG5cclxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXHJcbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFID0gNDA7XHJcblxyXG4vKlxyXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX0hBTEZfU0laRSA9IExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFIC8gMjtcclxuXHJcbi8qXHJcbiAqIEVtcHR5IGNvbXBvdW5kIG5vZGUgc2l6ZS4gV2hlbiBhIGNvbXBvdW5kIG5vZGUgaXMgZW1wdHksIGl0cyBib3RoXHJcbiAqIGRpbWVuc2lvbnMgc2hvdWxkIGJlIG9mIHRoaXMgdmFsdWUuXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFID0gNDA7XHJcblxyXG4vKlxyXG4gKiBNaW5pbXVtIGxlbmd0aCB0aGF0IGFuIGVkZ2Ugc2hvdWxkIHRha2UgZHVyaW5nIGxheW91dFxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XHJcblxyXG4vKlxyXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgbGF5b3V0IG9wZXJhdGVzIG9uXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgPSAxMDAwMDAwO1xyXG5cclxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IHJhbmRvbSBwb3NpdGlvbmluZyBjYW4gYmUgcGVyZm9ybWVkIHdpdGhcclxuICovXHJcbkxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZIC8gMTAwMDtcclxuXHJcbi8qXHJcbiAqIENvb3JkaW5hdGVzIG9mIHRoZSB3b3JsZCBjZW50ZXJcclxuICovXHJcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCA9IDEyMDA7XHJcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0Q29uc3RhbnRzO1xyXG4iLCJ2YXIgTEdyYXBoO1xyXG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XHJcblxyXG5mdW5jdGlvbiBMR3JhcGhNYW5hZ2VyKGxheW91dCkge1xyXG4gIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxyXG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xyXG5cclxuICB0aGlzLmdyYXBocyA9IFtdO1xyXG4gIHRoaXMuZWRnZXMgPSBbXTtcclxufVxyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkUm9vdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgbmdyYXBoID0gdGhpcy5sYXlvdXQubmV3R3JhcGgoKTtcclxuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xyXG4gIHZhciByb290ID0gdGhpcy5hZGQobmdyYXBoLCBubm9kZSk7XHJcbiAgdGhpcy5zZXRSb290R3JhcGgocm9vdCk7XHJcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKVxyXG57XHJcbiAgLy90aGVyZSBhcmUganVzdCAyIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCB0aGVuIGl0IGFkZHMgYW4gTEdyYXBoIGVsc2UgaXQgYWRkcyBhbiBMRWRnZVxyXG4gIGlmIChuZXdFZGdlID09IG51bGwgJiYgc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xyXG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJHcmFwaCBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIlBhcmVudCBub2RlIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xyXG4gICAgICB0aHJvdyBcIkdyYXBoIGFscmVhZHkgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncmFwaHMucHVzaChuZXdHcmFwaCk7XHJcblxyXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiQWxyZWFkeSBoYXMgYSBwYXJlbnQhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgIHRocm93ICBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcclxuICAgIHBhcmVudE5vZGUuY2hpbGQgPSBuZXdHcmFwaDtcclxuXHJcbiAgICByZXR1cm4gbmV3R3JhcGg7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXHJcbiAgICB0YXJnZXROb2RlID0gbmV3RWRnZTtcclxuICAgIHNvdXJjZU5vZGUgPSBwYXJlbnROb2RlO1xyXG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xyXG4gICAgdmFyIHNvdXJjZUdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xyXG4gICAgdmFyIHRhcmdldEdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgIGlmICghKHNvdXJjZUdyYXBoICE9IG51bGwgJiYgc291cmNlR3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2Ugbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEodGFyZ2V0R3JhcGggIT0gbnVsbCAmJiB0YXJnZXRHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIlRhcmdldCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZUdyYXBoID09IHRhcmdldEdyYXBoKVxyXG4gICAge1xyXG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XHJcblxyXG4gICAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcclxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xyXG4gICAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XHJcblxyXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcclxuICAgICAgaWYgKHRoaXMuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA+IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gaW50ZXItZ3JhcGggZWRnZSBsaXN0IVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgICAvLyBhZGQgZWRnZSB0byBzb3VyY2UgYW5kIHRhcmdldCBpbmNpZGVuY3kgbGlzdHNcclxuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBuZXdFZGdlLnRhcmdldCAhPSBudWxsKSkge1xyXG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gc291cmNlIGFuZC9vciB0YXJnZXQgaW5jaWRlbmN5IGxpc3QhXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld0VkZ2Uuc291cmNlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcbiAgICAgIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3RWRnZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xyXG4gIGlmIChsT2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XHJcbiAgICB2YXIgZ3JhcGggPSBsT2JqO1xyXG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcclxuICAgICAgdGhyb3cgXCJHcmFwaCBub3QgaW4gdGhpcyBncmFwaCBtZ3JcIjtcclxuICAgIH1cclxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IChncmFwaC5wYXJlbnQgIT0gbnVsbCAmJiBncmFwaC5wYXJlbnQuZ3JhcGhNYW5hZ2VyID09IHRoaXMpKSkge1xyXG4gICAgICB0aHJvdyBcIkludmFsaWQgcGFyZW50IG5vZGUhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlyc3QgdGhlIGVkZ2VzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXHJcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xyXG5cclxuICAgIGVkZ2VzVG9CZVJlbW92ZWQgPSBlZGdlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXRFZGdlcygpKTtcclxuXHJcbiAgICB2YXIgZWRnZTtcclxuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XHJcbiAgICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGVuIHRoZSBub2RlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxyXG4gICAgdmFyIG5vZGVzVG9CZVJlbW92ZWQgPSBbXTtcclxuXHJcbiAgICBub2Rlc1RvQmVSZW1vdmVkID0gbm9kZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XHJcblxyXG4gICAgdmFyIG5vZGU7XHJcbiAgICBzID0gbm9kZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgbm9kZSA9IG5vZGVzVG9CZVJlbW92ZWRbaV07XHJcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxyXG4gICAgaWYgKGdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNldFJvb3RHcmFwaChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBub3cgcmVtb3ZlIHRoZSBncmFwaCBpdHNlbGZcclxuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JhcGhzLmluZGV4T2YoZ3JhcGgpO1xyXG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAvLyBhbHNvIHJlc2V0IHRoZSBwYXJlbnQgb2YgdGhlIGdyYXBoXHJcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xyXG4gIH1cclxuICBlbHNlIGlmIChsT2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcclxuICAgIGVkZ2UgPSBsT2JqO1xyXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICghZWRnZS5pc0ludGVyR3JhcGgpIHtcclxuICAgICAgdGhyb3cgXCJOb3QgYW4gaW50ZXItZ3JhcGggZWRnZSFcIjtcclxuICAgIH1cclxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gc291cmNlIGFuZCB0YXJnZXQgbm9kZXMnIGluY2lkZW5jeSBsaXN0c1xyXG5cclxuICAgIGlmICghKGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEgJiYgZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgaW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xyXG4gICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIG93bmVyIGdyYXBoIG1hbmFnZXIncyBpbnRlci1ncmFwaCBlZGdlIGxpc3RcclxuXHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XHJcbiAgICAgIHRocm93IFwiRWRnZSBvd25lciBncmFwaCBvciBvd25lciBncmFwaCBtYW5hZ2VyIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xyXG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lciBncmFwaCBtYW5hZ2VyJ3MgZWRnZSBsaXN0IVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLnJvb3RHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRHcmFwaHMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbClcclxuICB7XHJcbiAgICB2YXIgbm9kZUxpc3QgPSBbXTtcclxuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xyXG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIG5vZGVMaXN0ID0gbm9kZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXROb2RlcygpKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsTm9kZXMgPSBub2RlTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMuYWxsTm9kZXMgPSBudWxsO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmFsbEVkZ2VzID0gbnVsbDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5hbGxFZGdlcyA9PSBudWxsKVxyXG4gIHtcclxuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xyXG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XHJcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xyXG5cclxuICAgIHRoaXMuYWxsRWRnZXMgPSBlZGdlTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbjtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKG5vZGVMaXN0KVxyXG57XHJcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG5cclxuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbm9kZUxpc3Q7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldFJvb3RHcmFwaCA9IGZ1bmN0aW9uIChncmFwaClcclxue1xyXG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XHJcbiAgICB0aHJvdyBcIlJvb3Qgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5yb290R3JhcGggPSBncmFwaDtcclxuICAvLyByb290IGdyYXBoIG11c3QgaGF2ZSBhIHJvb3Qgbm9kZSBhc3NvY2lhdGVkIHdpdGggaXQgZm9yIGNvbnZlbmllbmNlXHJcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKVxyXG4gIHtcclxuICAgIGdyYXBoLnBhcmVudCA9IHRoaXMubGF5b3V0Lm5ld05vZGUoXCJSb290IG5vZGVcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxheW91dDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmlzT25lQW5jZXN0b3JPZk90aGVyID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcclxue1xyXG4gIGlmICghKGZpcnN0Tm9kZSAhPSBudWxsICYmIHNlY29uZE5vZGUgIT0gbnVsbCkpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxyXG4gIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBJcyBzZWNvbmQgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgZmlyc3Qgb25lP1xyXG4gIHZhciBvd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XHJcbiAgdmFyIHBhcmVudE5vZGU7XHJcblxyXG4gIGRvXHJcbiAge1xyXG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSlcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcclxuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gd2hpbGUgKHRydWUpO1xyXG4gIC8vIElzIGZpcnN0IG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIHNlY29uZCBvbmU/XHJcbiAgb3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgZG9cclxuICB7XHJcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBmaXJzdE5vZGUpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XHJcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9IHdoaWxlICh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZWRnZTtcclxuICB2YXIgc291cmNlTm9kZTtcclxuICB2YXIgdGFyZ2V0Tm9kZTtcclxuICB2YXIgc291cmNlQW5jZXN0b3JHcmFwaDtcclxuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcclxuXHJcbiAgdmFyIGVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xyXG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIGVkZ2UgPSBlZGdlc1tpXTtcclxuXHJcbiAgICBzb3VyY2VOb2RlID0gZWRnZS5zb3VyY2U7XHJcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XHJcbiAgICBlZGdlLmxjYSA9IG51bGw7XHJcbiAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlTm9kZTtcclxuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xyXG5cclxuICAgIGlmIChzb3VyY2VOb2RlID09IHRhcmdldE5vZGUpXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UubGNhID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTsgIFxyXG4gICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSBzb3VyY2VBbmNlc3RvckdyYXBoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSBlZGdlLnRhcmdldEluTGNhLmdldE93bmVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzb3VyY2VBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IGVkZ2Uuc291cmNlSW5MY2EuZ2V0T3duZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXHJcbntcclxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXHJcbiAge1xyXG4gICAgcmV0dXJuIGZpcnN0Tm9kZS5nZXRPd25lcigpO1xyXG4gIH1cclxuICB2YXIgZmlyc3RPd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XHJcblxyXG4gIGRvXHJcbiAge1xyXG4gICAgaWYgKGZpcnN0T3duZXJHcmFwaCA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHZhciBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgIGRvXHJcbiAgICB7XHJcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gZmlyc3RPd25lckdyYXBoKVxyXG4gICAgICB7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZE93bmVyR3JhcGg7XHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcclxuICAgIH0gd2hpbGUgKHRydWUpO1xyXG5cclxuICAgIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0T3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xyXG4gIH0gd2hpbGUgKHRydWUpO1xyXG5cclxuICByZXR1cm4gZmlyc3RPd25lckdyYXBoO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMgPSBmdW5jdGlvbiAoZ3JhcGgsIGRlcHRoKSB7XHJcbiAgaWYgKGdyYXBoID09IG51bGwgJiYgZGVwdGggPT0gbnVsbCkge1xyXG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcclxuICAgIGRlcHRoID0gMTtcclxuICB9XHJcbiAgdmFyIG5vZGU7XHJcblxyXG4gIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XHJcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgbm9kZS5pbmNsdXNpb25UcmVlRGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaW5jbHVkZXNJbnZhbGlkRWRnZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZWRnZTtcclxuXHJcbiAgdmFyIHMgPSB0aGlzLmVkZ2VzLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICBlZGdlID0gdGhpcy5lZGdlc1tpXTtcclxuXHJcbiAgICBpZiAodGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhNYW5hZ2VyO1xyXG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcclxudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vdXRpbC9JR2VvbWV0cnknKTtcclxudmFyIElNYXRoID0gcmVxdWlyZSgnLi91dGlsL0lNYXRoJyk7XHJcblxyXG5mdW5jdGlvbiBMRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcclxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2RWRnZSk7XHJcblxyXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZmFsc2U7XHJcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2RWRnZTtcclxuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcclxuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxufVxyXG5cclxuTEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcclxuXHJcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XHJcbiAgTEVkZ2VbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XHJcbn1cclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuaXNJbnRlckdyYXBoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmlzSW50ZXJHcmFwaDtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0QmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5iZW5kcG9pbnRzO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldExjYSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sY2E7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0SW5MY2EgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMudGFyZ2V0SW5MY2E7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmQgPSBmdW5jdGlvbiAobm9kZSlcclxue1xyXG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSlcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHRoaXMudGFyZ2V0ID09PSBub2RlKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHRocm93IFwiTm9kZSBpcyBub3QgaW5jaWRlbnQgd2l0aCB0aGlzIGVkZ2VcIjtcclxuICB9XHJcbn1cclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpXHJcbntcclxuICB2YXIgb3RoZXJFbmQgPSB0aGlzLmdldE90aGVyRW5kKG5vZGUpO1xyXG4gIHZhciByb290ID0gZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpO1xyXG5cclxuICB3aGlsZSAodHJ1ZSlcclxuICB7XHJcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaClcclxuICAgIHtcclxuICAgICAgcmV0dXJuIG90aGVyRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgY2xpcFBvaW50Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoNCk7XHJcblxyXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID1cclxuICAgICAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24odGhpcy50YXJnZXQuZ2V0UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgIGNsaXBQb2ludENvb3JkaW5hdGVzKTtcclxuXHJcbiAgaWYgKCF0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcclxuICB7XHJcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xyXG4gICAgdGhpcy5sZW5ndGhZID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMV0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1szXTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcclxuICAgIHtcclxuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmxlbmd0aFggPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJYKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJYKCk7XHJcbiAgdGhpcy5sZW5ndGhZID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWSgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWSgpO1xyXG5cclxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcclxuICB7XHJcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XHJcbiAgfVxyXG5cclxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcclxuICB7XHJcbiAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTEVkZ2U7XHJcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xyXG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vdXRpbC9JbnRlZ2VyJyk7XHJcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi91dGlsL1JlY3RhbmdsZUQnKTtcclxudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XHJcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi91dGlsL1JhbmRvbVNlZWQnKTtcclxudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vdXRpbC9Qb2ludEQnKTtcclxudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL3V0aWwvSGFzaFNldCcpO1xyXG5cclxuZnVuY3Rpb24gTE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcclxuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDEgOiBMTm9kZShMR3JhcGhNYW5hZ2VyIGdtLCBQb2ludCBsb2MsIERpbWVuc2lvbiBzaXplLCBPYmplY3Qgdk5vZGUpXHJcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XHJcbiAgICB2Tm9kZSA9IGxvYztcclxuICB9XHJcblxyXG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZOb2RlKTtcclxuXHJcbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxyXG4gIGlmIChnbS5ncmFwaE1hbmFnZXIgIT0gbnVsbClcclxuICAgIGdtID0gZ20uZ3JhcGhNYW5hZ2VyO1xyXG5cclxuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcclxuICB0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdk5vZGU7XHJcbiAgdGhpcy5lZGdlcyA9IFtdO1xyXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XHJcblxyXG4gIGlmIChzaXplICE9IG51bGwgJiYgbG9jICE9IG51bGwpXHJcbiAgICB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRChsb2MueCwgbG9jLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuICBlbHNlXHJcbiAgICB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRCgpO1xyXG59XHJcblxyXG5MTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xyXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xyXG4gIExOb2RlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xyXG59XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuY2hpbGQ7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbi8vICBpZiAodGhpcy5vd25lciAhPSBudWxsKSB7XHJcbi8vICAgIGlmICghKHRoaXMub3duZXIgPT0gbnVsbCB8fCB0aGlzLm93bmVyLmdldE5vZGVzKCkuaW5kZXhPZih0aGlzKSA+IC0xKSkge1xyXG4vLyAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4vLyAgICB9XHJcbi8vICB9XHJcblxyXG4gIHJldHVybiB0aGlzLm93bmVyO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3Qud2lkdGg7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXHJcbntcclxuICB0aGlzLnJlY3Qud2lkdGggPSB3aWR0aDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcclxue1xyXG4gIHRoaXMucmVjdC5oZWlnaHQgPSBoZWlnaHQ7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMixcclxuICAgICAgICAgIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54LCB0aGlzLnJlY3QueSk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmVjdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldERpYWdvbmFsID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICtcclxuICAgICAgICAgIHRoaXMucmVjdC5oZWlnaHQgKiB0aGlzLnJlY3QuaGVpZ2h0KTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRSZWN0ID0gZnVuY3Rpb24gKHVwcGVyTGVmdCwgZGltZW5zaW9uKVxyXG57XHJcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcclxuICB0aGlzLnJlY3QueSA9IHVwcGVyTGVmdC55O1xyXG4gIHRoaXMucmVjdC53aWR0aCA9IGRpbWVuc2lvbi53aWR0aDtcclxuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KVxyXG57XHJcbiAgdGhpcy5yZWN0LnggPSBjeCAtIHRoaXMucmVjdC53aWR0aCAvIDI7XHJcbiAgdGhpcy5yZWN0LnkgPSBjeSAtIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHkpXHJcbntcclxuICB0aGlzLnJlY3QueCA9IHg7XHJcbiAgdGhpcy5yZWN0LnkgPSB5O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uIChkeCwgZHkpXHJcbntcclxuICB0aGlzLnJlY3QueCArPSBkeDtcclxuICB0aGlzLnJlY3QueSArPSBkeTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bylcclxue1xyXG4gIHZhciBlZGdlTGlzdCA9IFtdO1xyXG4gIHZhciBlZGdlO1xyXG4gIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcclxuICAgIFxyXG4gICAgaWYgKGVkZ2UudGFyZ2V0ID09IHRvKVxyXG4gICAge1xyXG4gICAgICBpZiAoZWRnZS5zb3VyY2UgIT0gc2VsZilcclxuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSFcIjtcclxuXHJcbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlZGdlTGlzdDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlc0JldHdlZW4gPSBmdW5jdGlvbiAob3RoZXIpXHJcbntcclxuICB2YXIgZWRnZUxpc3QgPSBbXTtcclxuICB2YXIgZWRnZTtcclxuICBcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcclxuXHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZSA9PSBzZWxmIHx8IGVkZ2UudGFyZ2V0ID09IHNlbGYpKVxyXG4gICAgICB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0XCI7XHJcblxyXG4gICAgaWYgKChlZGdlLnRhcmdldCA9PSBvdGhlcikgfHwgKGVkZ2Uuc291cmNlID09IG90aGVyKSlcclxuICAgIHtcclxuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVkZ2VMaXN0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldE5laWdoYm9yc0xpc3QgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIG5laWdoYm9ycyA9IG5ldyBIYXNoU2V0KCk7XHJcbiAgdmFyIGVkZ2U7XHJcbiAgXHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XHJcblxyXG4gICAgaWYgKGVkZ2Uuc291cmNlID09IHNlbGYpXHJcbiAgICB7XHJcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS50YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBpZiAoZWRnZS50YXJnZXQgIT0gc2VsZikge1xyXG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGluY2lkZW5jeSFcIjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS5zb3VyY2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmVpZ2hib3JzO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLndpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgd2l0aE5laWdoYm9yc0xpc3QgPSBuZXcgU2V0KCk7XHJcbiAgdmFyIGNoaWxkTm9kZTtcclxuICB2YXIgY2hpbGRyZW47XHJcblxyXG4gIHdpdGhOZWlnaGJvcnNMaXN0LmFkZCh0aGlzKTtcclxuXHJcbiAgaWYgKHRoaXMuY2hpbGQgIT0gbnVsbClcclxuICB7XHJcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgY2hpbGRyZW4gPSBjaGlsZE5vZGUud2l0aENoaWxkcmVuKCk7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgIHdpdGhOZWlnaGJvcnNMaXN0LmFkZChub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2l0aE5laWdoYm9yc0xpc3Q7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBub09mQ2hpbGRyZW4gPSAwO1xyXG4gIHZhciBjaGlsZE5vZGU7XHJcblxyXG4gIGlmKHRoaXMuY2hpbGQgPT0gbnVsbCl7XHJcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XHJcblxyXG4gICAgICBub09mQ2hpbGRyZW4gKz0gY2hpbGROb2RlLmdldE5vT2ZDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpZihub09mQ2hpbGRyZW4gPT0gMCl7XHJcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xyXG4gIH1cclxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplID0gKHRoaXMucmVjdC53aWR0aCArIHRoaXMucmVjdC5oZWlnaHQpIC8gMjtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHRoaXMuY2hpbGQuY2FsY0VzdGltYXRlZFNpemUoKTtcclxuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxuICAgIHRoaXMucmVjdC5oZWlnaHQgPSB0aGlzLmVzdGltYXRlZFNpemU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxuICB9XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2NhdHRlciA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgcmFuZG9tQ2VudGVyWDtcclxuICB2YXIgcmFuZG9tQ2VudGVyWTtcclxuXHJcbiAgdmFyIG1pblggPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XHJcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcclxuICByYW5kb21DZW50ZXJYID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YICtcclxuICAgICAgICAgIChSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhYIC0gbWluWCkpICsgbWluWDtcclxuXHJcbiAgdmFyIG1pblkgPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XHJcbiAgdmFyIG1heFkgPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcclxuICByYW5kb21DZW50ZXJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZICtcclxuICAgICAgICAgIChSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhZIC0gbWluWSkpICsgbWluWTtcclxuXHJcbiAgdGhpcy5yZWN0LnggPSByYW5kb21DZW50ZXJYO1xyXG4gIHRoaXMucmVjdC55ID0gcmFuZG9tQ2VudGVyWVxyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5nZXRDaGlsZCgpID09IG51bGwpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCkubGVuZ3RoICE9IDApXHJcbiAge1xyXG4gICAgLy8gd3JhcCB0aGUgY2hpbGRyZW4gbm9kZXMgYnkgcmUtYXJyYW5naW5nIHRoZSBib3VuZGFyaWVzXHJcbiAgICB2YXIgY2hpbGRHcmFwaCA9IHRoaXMuZ2V0Q2hpbGQoKTtcclxuICAgIGNoaWxkR3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xyXG5cclxuICAgIHRoaXMucmVjdC54ID0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XHJcbiAgICB0aGlzLnJlY3QueSA9IGNoaWxkR3JhcGguZ2V0VG9wKCk7XHJcblxyXG4gICAgdGhpcy5zZXRXaWR0aChjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKSk7XHJcbiAgICB0aGlzLnNldEhlaWdodChjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKSk7XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSBjb21wb3VuZCBib3VuZHMgY29uc2lkZXJpbmcgaXRzIGxhYmVsIHByb3BlcnRpZXMgICAgXHJcbiAgICBpZihMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTKXtcclxuICAgICAgICBcclxuICAgICAgdmFyIHdpZHRoID0gY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XHJcbiAgICAgIHZhciBoZWlnaHQgPSBjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcclxuXHJcbiAgICAgIGlmKHRoaXMubGFiZWxXaWR0aCA+IHdpZHRoKXtcclxuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgICAgICB0aGlzLnNldFdpZHRoKHRoaXMubGFiZWxXaWR0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMubGFiZWxIZWlnaHQgPiBoZWlnaHQpe1xyXG4gICAgICAgIGlmKHRoaXMubGFiZWxQb3MgPT0gXCJjZW50ZXJcIil7XHJcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMubGFiZWxQb3MgPT0gXCJ0b3BcIil7XHJcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEhlaWdodCh0aGlzLmxhYmVsSGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFucylcclxue1xyXG4gIHZhciBsZWZ0ID0gdGhpcy5yZWN0Lng7XHJcblxyXG4gIGlmIChsZWZ0ID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxyXG4gIHtcclxuICAgIGxlZnQgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGxlZnQgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxyXG4gIHtcclxuICAgIGxlZnQgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xyXG4gIH1cclxuXHJcbiAgdmFyIHRvcCA9IHRoaXMucmVjdC55O1xyXG5cclxuICBpZiAodG9wID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxyXG4gIHtcclxuICAgIHRvcCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcclxuICB9XHJcbiAgZWxzZSBpZiAodG9wIDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcclxuICB7XHJcbiAgICB0b3AgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xyXG4gIH1cclxuXHJcbiAgdmFyIGxlZnRUb3AgPSBuZXcgUG9pbnREKGxlZnQsIHRvcCk7XHJcbiAgdmFyIHZMZWZ0VG9wID0gdHJhbnMuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGxlZnRUb3ApO1xyXG5cclxuICB0aGlzLnNldExvY2F0aW9uKHZMZWZ0VG9wLngsIHZMZWZ0VG9wLnkpO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC55O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5vd25lciA9PSBudWxsKVxyXG4gIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMub3duZXIuZ2V0UGFyZW50KCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExOb2RlO1xyXG4iLCJ2YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcclxudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL3V0aWwvSGFzaE1hcCcpO1xyXG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xyXG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XHJcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcclxudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XHJcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL3V0aWwvUG9pbnREJyk7XHJcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvVHJhbnNmb3JtJyk7XHJcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnLi91dGlsL0VtaXR0ZXInKTtcclxudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL3V0aWwvSGFzaFNldCcpO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KGlzUmVtb3RlVXNlKSB7XHJcbiAgRW1pdHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxyXG4gIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XHJcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgY3JlYXRlIGJlbmRwb2ludHMgYXMgbmVlZGVkIG9yIG5vdFxyXG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9XHJcbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xyXG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxyXG4gIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcclxuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSBmcm9tIGJlZm9yZSB0byBhZnRlciBsYXlvdXQgbm9kZSBwb3NpdGlvbnNcclxuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID1cclxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XHJcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxyXG4gIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XHJcbiAgLy9OdW1iZXIgaXRlcmF0aW9ucyB0aGF0IHNob3VsZCBiZSBkb25lIGJldHdlZW4gdHdvIHN1Y2Nlc3NpdmUgYW5pbWF0aW9uc1xyXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIG9yIG5vdCBsZWFmIG5vZGVzIChub24tY29tcG91bmQgbm9kZXMpIGFyZSBvZiB1bmlmb3JtIHNpemVzLiBXaGVuXHJcbiAgICogdGhleSBhcmUsIGJvdGggc3ByaW5nIGFuZCByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gdHdvIGxlYWYgbm9kZXMgY2FuIGJlXHJcbiAgICogY2FsY3VsYXRlZCB3aXRob3V0IHRoZSBleHBlbnNpdmUgY2xpcHBpbmcgcG9pbnQgY2FsY3VsYXRpb25zLCByZXN1bHRpbmdcclxuICAgKiBpbiBtYWpvciBzcGVlZC11cC5cclxuICAgKi9cclxuICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID1cclxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgY3JlYXRpb24gb2YgYmVuZHBvaW50cyBieSB1c2luZyBkdW1teSBub2RlcyBhbmQgZWRnZXMuXHJcbiAgICogTWFwcyBhbiBMRWRnZSB0byBpdHMgZHVtbXkgYmVuZHBvaW50IHBhdGguXHJcbiAgICovXHJcbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcclxuICB0aGlzLmdyYXBoTWFuYWdlciA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xyXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xyXG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcclxuICB0aGlzLmlzUmVtb3RlVXNlID0gZmFsc2U7XHJcblxyXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XHJcbiAgICB0aGlzLmlzUmVtb3RlVXNlID0gaXNSZW1vdGVVc2U7XHJcbiAgfVxyXG59XHJcblxyXG5MYXlvdXQuUkFORE9NX1NFRUQgPSAxO1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEVtaXR0ZXIucHJvdG90eXBlICk7XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcclxuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xyXG4gIHJldHVybiBnbTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXHJcbntcclxuICByZXR1cm4gbmV3IExOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpXHJcbntcclxuICByZXR1cm4gbmV3IExFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuY2hlY2tMYXlvdXRTdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbClcclxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcclxuICBcclxuICBpZiAodGhpcy50aWxpbmdQcmVMYXlvdXQpIHtcclxuICAgIHRoaXMudGlsaW5nUHJlTGF5b3V0KCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmluaXRQYXJhbWV0ZXJzKCk7XHJcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XHJcblxyXG4gIGlmICh0aGlzLmNoZWNrTGF5b3V0U3VjY2VzcygpKVxyXG4gIHtcclxuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSBmYWxzZTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSB0aGlzLmxheW91dCgpO1xyXG4gIH1cclxuICBcclxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XHJcbiAgICAvLyBJZiB0aGlzIGlzIGEgJ2R1cmluZycgbGF5b3V0IGFuaW1hdGlvbi4gTGF5b3V0IGlzIG5vdCBmaW5pc2hlZCB5ZXQuIFxyXG4gICAgLy8gV2UgbmVlZCB0byBwZXJmb3JtIHRoZXNlIGluIGluZGV4LmpzIHdoZW4gbGF5b3V0IGlzIHJlYWxseSBmaW5pc2hlZC5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGlzTGF5b3V0U3VjY2Vzc2Z1bGwpXHJcbiAge1xyXG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxyXG4gICAge1xyXG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMudGlsaW5nUG9zdExheW91dCkge1xyXG4gICAgdGhpcy50aWxpbmdQb3N0TGF5b3V0KCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gaXNMYXlvdXRTdWNjZXNzZnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyB0aGUgb3BlcmF0aW9ucyByZXF1aXJlZCBhZnRlciBsYXlvdXQuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmRvUG9zdExheW91dCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XHJcbiAgLy8gUHJvcGFnYXRlIGdlb21ldHJpYyBjaGFuZ2VzIHRvIHYtbGV2ZWwgb2JqZWN0c1xyXG4gIGlmKCF0aGlzLmluY3JlbWVudGFsKXtcclxuICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgfVxyXG4gIHRoaXMudXBkYXRlKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgZ2VvbWV0cnkgb2YgdGhlIHRhcmdldCBncmFwaCBhY2NvcmRpbmcgdG9cclxuICogY2FsY3VsYXRlZCBsYXlvdXQuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZTIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXHJcbiAgaWYgKHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZClcclxuICB7XHJcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xyXG5cclxuICAgIC8vIHJlc2V0IGFsbCBlZGdlcywgc2luY2UgdGhlIHRvcG9sb2d5IGhhcyBjaGFuZ2VkXHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxyXG4gIC8vIHJlbW90ZWx5XHJcbiAgaWYgKCF0aGlzLmlzUmVtb3RlVXNlKVxyXG4gIHtcclxuICAgIC8vIHVwZGF0ZSBhbGwgZWRnZXNcclxuICAgIHZhciBlZGdlO1xyXG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcclxuLy8gICAgICB0aGlzLnVwZGF0ZShlZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWN1cnNpdmVseSB1cGRhdGUgbm9kZXNcclxuICAgIHZhciBub2RlO1xyXG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbi8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcclxuICAgIHRoaXMudXBkYXRlKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKG9iaiA9PSBudWxsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZTIoKTtcclxuICB9XHJcbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcclxuICAgIHZhciBub2RlID0gb2JqO1xyXG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAvLyBzaW5jZSBub2RlIGlzIGNvbXBvdW5kLCByZWN1cnNpdmVseSB1cGRhdGUgY2hpbGQgbm9kZXNcclxuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICB1cGRhdGUobm9kZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcclxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG5vZGUgaW1wbGVtZW50cyB0aGVcclxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXHJcbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xyXG4gICAgICB2YXIgdk5vZGUgPSBub2RlLnZHcmFwaE9iamVjdDtcclxuXHJcbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxyXG4gICAgICB2Tm9kZS51cGRhdGUobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XHJcbiAgICB2YXIgZWRnZSA9IG9iajtcclxuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXHJcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBlZGdlIGltcGxlbWVudHMgdGhlXHJcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxyXG5cclxuICAgIGlmIChlZGdlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXHJcbiAgICAgIHZhciB2RWRnZSA9IGVkZ2UudkdyYXBoT2JqZWN0O1xyXG5cclxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXHJcbiAgICAgIHZFZGdlLnVwZGF0ZShlZGdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XHJcbiAgICB2YXIgZ3JhcGggPSBvYmo7XHJcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBncmFwaCBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcclxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG9iamVjdCBpbXBsZW1lbnRzIHRoZVxyXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cclxuXHJcbiAgICBpZiAoZ3JhcGgudkdyYXBoT2JqZWN0ICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcclxuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcclxuXHJcbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxyXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzZXQgYWxsIGxheW91dCBwYXJhbWV0ZXJzIHRvIGRlZmF1bHQgdmFsdWVzXHJcbiAqIGRldGVybWluZWQgYXQgY29tcGlsZSB0aW1lLlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXHJcbiAge1xyXG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcclxuICAgIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XHJcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcclxuICAgIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcclxuICAgIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XHJcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpXHJcbiAge1xyXG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcclxuICBpZiAobmV3TGVmdFRvcCA9PSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtKG5ldyBQb2ludEQoMCwgMCkpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIC8vIGNyZWF0ZSBhIHRyYW5zZm9ybWF0aW9uIG9iamVjdCAoZnJvbSBFY2xpcHNlIHRvIGxheW91dCkuIFdoZW4gYW5cclxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXHJcbiAgICAvLyBkcmF3aW5nIG9yIHRoZSByb290IGdyYXBoIGF0IGdpdmVuIGlucHV0IGNvb3JkaW5hdGUgKHNvbWUgbWFyZ2luc1xyXG4gICAgLy8gYWxyZWFkeSBpbmNsdWRlZCBpbiBjYWxjdWxhdGlvbiBvZiBsZWZ0LXRvcCkuXHJcblxyXG4gICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkudXBkYXRlTGVmdFRvcCgpO1xyXG5cclxuICAgIGlmIChsZWZ0VG9wICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWChuZXdMZWZ0VG9wLngpO1xyXG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1kobmV3TGVmdFRvcC55KTtcclxuXHJcbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1gobGVmdFRvcC54KTtcclxuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWShsZWZ0VG9wLnkpO1xyXG5cclxuICAgICAgdmFyIG5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xyXG4gICAgICB2YXIgbm9kZTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcclxuXHJcbiAgaWYgKGdyYXBoID09IHVuZGVmaW5lZCkge1xyXG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XHJcbiAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSh0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKSk7XHJcbiAgICB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKS51cGRhdGVCb3VuZHModHJ1ZSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIGxOb2RlO1xyXG4gICAgdmFyIGNoaWxkR3JhcGg7XHJcblxyXG4gICAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XHJcbiAgICAgIGNoaWxkR3JhcGggPSBsTm9kZS5nZXRDaGlsZCgpO1xyXG5cclxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChjaGlsZEdyYXBoLmdldE5vZGVzKCkubGVuZ3RoID09IDApXHJcbiAgICAgIHtcclxuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoY2hpbGRHcmFwaCk7XHJcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcclxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxyXG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxyXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRGbGF0Rm9yZXN0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBmbGF0Rm9yZXN0ID0gW107XHJcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcclxuXHJcbiAgLy8gUXVpY2sgcmVmZXJlbmNlIGZvciBhbGwgbm9kZXMgaW4gdGhlIGdyYXBoIG1hbmFnZXIgYXNzb2NpYXRlZCB3aXRoXHJcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cclxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcclxuXHJcbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XHJcbiAgdmFyIGlzRmxhdCA9IHRydWU7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXHJcbiAge1xyXG4gICAgaWYgKGFsbE5vZGVzW2ldLmdldENoaWxkKCkgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgaXNGbGF0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cclxuICBpZiAoIWlzRmxhdClcclxuICB7XHJcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcclxuICB9XHJcblxyXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cclxuXHJcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xyXG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xyXG4gIHZhciBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcclxuICB2YXIgdW5Qcm9jZXNzZWROb2RlcyA9IFtdO1xyXG5cclxuICB1blByb2Nlc3NlZE5vZGVzID0gdW5Qcm9jZXNzZWROb2Rlcy5jb25jYXQoYWxsTm9kZXMpO1xyXG5cclxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxyXG4gIC8vIGRlY2lkZXMgd2hldGhlciBpdCBpcyBhIHRyZWUgb3Igbm90LiBJZiBpdCBpcyBhIHRyZWUsIGFkZHMgaXQgdG8gdGhlXHJcbiAgLy8gZm9yZXN0IGFuZCBjb250aW51ZWQgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQuXHJcblxyXG4gIHdoaWxlICh1blByb2Nlc3NlZE5vZGVzLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXHJcbiAge1xyXG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcclxuXHJcbiAgICAvLyBTdGFydCB0aGUgQkZTLiBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgdmlzaXRzIGEgbm9kZSBpbiBhXHJcbiAgICAvLyBCRlMgbWFubmVyLlxyXG4gICAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXHJcbiAgICB7XHJcbiAgICAgIC8vcG9vbCBvcGVyYXRpb25cclxuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWRbMF07XHJcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcclxuICAgICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcclxuICAgICAgdmFyIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgQkZTIGlzIG5vdCBncm93aW5nIGZyb20gdGhpcyBuZWlnaGJvci5cclxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBXZSBoYXZlbid0IHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yLlxyXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcclxuICAgICAgICAgICAgcGFyZW50cy5wdXQoY3VycmVudE5laWdoYm9yLCBjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxyXG4gICAgICAgICAgLy8gdGhpcyBuZWlnaGJvciBpcyBub3QgcGFyZW50IG9mIGN1cnJlbnROb2RlLCBnaXZlblxyXG4gICAgICAgICAgLy8gZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgdHJlZSwgaGVuY2VcclxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgdHJlZS4gRW1wdHlcclxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXHJcbiAgICBpZiAoIWlzRm9yZXN0KVxyXG4gICAge1xyXG4gICAgICBmbGF0Rm9yZXN0ID0gW107XHJcbiAgICB9XHJcbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxyXG4gICAgLy8gdmlzaXRlZCBhbmQgcGFyZW50cyBsaXN0cy4gQ29udGludWUgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQgb2ZcclxuICAgIC8vIHRoZSBncmFwaCwgaWYgYW55LlxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB2YXIgdGVtcCA9IFtdO1xyXG4gICAgICB2aXNpdGVkLmFkZEFsbFRvKHRlbXApO1xyXG4gICAgICBmbGF0Rm9yZXN0LnB1c2godGVtcCk7XHJcbiAgICAgIC8vZmxhdEZvcmVzdCA9IGZsYXRGb3Jlc3QuY29uY2F0KHRlbXApO1xyXG4gICAgICAvL3VuUHJvY2Vzc2VkTm9kZXMucmVtb3ZlQWxsKHZpc2l0ZWQpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0ZW1wW2ldO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHVuUHJvY2Vzc2VkTm9kZXMuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIHVuUHJvY2Vzc2VkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XHJcbiAgICAgIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZsYXRGb3Jlc3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBkdW1teSBub2RlcyAoYW4gbC1sZXZlbCBub2RlIHdpdGggbWluaW1hbCBkaW1lbnNpb25zKVxyXG4gKiBmb3IgdGhlIGdpdmVuIGVkZ2UgKG9uZSBwZXIgYmVuZHBvaW50KS4gVGhlIGV4aXN0aW5nIGwtbGV2ZWwgc3RydWN0dXJlXHJcbiAqIGlzIHVwZGF0ZWQgYWNjb3JkaW5nbHkuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpXHJcbntcclxuICB2YXIgZHVtbXlOb2RlcyA9IFtdO1xyXG4gIHZhciBwcmV2ID0gZWRnZS5zb3VyY2U7XHJcblxyXG4gIHZhciBncmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IG5vZGVcclxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XHJcbiAgICBkdW1teU5vZGUuc2V0UmVjdChuZXcgUG9pbnQoMCwgMCksIG5ldyBEaW1lbnNpb24oMSwgMSkpO1xyXG5cclxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgZWRnZSBiZXR3ZWVuIHByZXYgYW5kIGR1bW15IG5vZGVcclxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBkdW1teU5vZGUpO1xyXG5cclxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XHJcbiAgICBwcmV2ID0gZHVtbXlOb2RlO1xyXG4gIH1cclxuXHJcbiAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcclxuICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBlZGdlLnRhcmdldCk7XHJcblxyXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5wdXQoZWRnZSwgZHVtbXlOb2Rlcyk7XHJcblxyXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXHJcbiAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKCkpXHJcbiAge1xyXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xyXG4gIH1cclxuICAvLyBlbHNlLCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBncmFwaFxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBncmFwaC5yZW1vdmUoZWRnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHVtbXlOb2RlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXHJcbiAqIGF0IGwtbGV2ZWwuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZWRnZXMgPSBbXTtcclxuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcclxuICBlZGdlcyA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5rZXlTZXQoKS5jb25jYXQoZWRnZXMpO1xyXG5cclxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKVxyXG4gIHtcclxuICAgIHZhciBsRWRnZSA9IGVkZ2VzW2tdO1xyXG5cclxuICAgIGlmIChsRWRnZS5iZW5kcG9pbnRzLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgIHZhciBwYXRoID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmdldChsRWRnZSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgZHVtbXlOb2RlID0gcGF0aFtpXTtcclxuICAgICAgICB2YXIgcCA9IG5ldyBQb2ludEQoZHVtbXlOb2RlLmdldENlbnRlclgoKSxcclxuICAgICAgICAgICAgICAgIGR1bW15Tm9kZS5nZXRDZW50ZXJZKCkpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcclxuICAgICAgICB2YXIgZWJwID0gbEVkZ2UuYmVuZHBvaW50cy5nZXQoaSk7XHJcbiAgICAgICAgZWJwLnggPSBwLng7XHJcbiAgICAgICAgZWJwLnkgPSBwLnk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZHVtbXkgbm9kZSwgZHVtbXkgZWRnZXMgaW5jaWRlbnQgd2l0aCB0aGlzXHJcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcclxuICAgICAgICBkdW1teU5vZGUuZ2V0T3duZXIoKS5yZW1vdmUoZHVtbXlOb2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIHRoZSByZWFsIGVkZ2UgdG8gZ3JhcGhcclxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGxFZGdlLCBsRWRnZS5zb3VyY2UsIGxFZGdlLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzbGlkZXJWYWx1ZSwgZGVmYXVsdFZhbHVlLCBtaW5EaXYsIG1heE11bCkge1xyXG4gIGlmIChtaW5EaXYgIT0gdW5kZWZpbmVkICYmIG1heE11bCAhPSB1bmRlZmluZWQpIHtcclxuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXHJcbiAgICB7XHJcbiAgICAgIHZhciBtaW5WYWx1ZSA9IGRlZmF1bHRWYWx1ZSAvIG1pbkRpdjtcclxuICAgICAgdmFsdWUgLT0gKChkZWZhdWx0VmFsdWUgLSBtaW5WYWx1ZSkgLyA1MCkgKiAoNTAgLSBzbGlkZXJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGRlZmF1bHRWYWx1ZSAqIG1heE11bDtcclxuICAgICAgdmFsdWUgKz0gKChtYXhWYWx1ZSAtIGRlZmF1bHRWYWx1ZSkgLyA1MCkgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBhLCBiO1xyXG5cclxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcclxuICAgIHtcclxuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwMC4wO1xyXG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XHJcbiAgICAgIGIgPSAtOCAqIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGEgKiBzbGlkZXJWYWx1ZSArIGIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcclxuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cclxuICovXHJcbkxheW91dC5maW5kQ2VudGVyT2ZUcmVlID0gZnVuY3Rpb24gKG5vZGVzKVxyXG57XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xyXG5cclxuICB2YXIgcmVtb3ZlZE5vZGVzID0gW107XHJcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xyXG4gIHZhciBmb3VuZENlbnRlciA9IGZhbHNlO1xyXG4gIHZhciBjZW50ZXJOb2RlID0gbnVsbDtcclxuXHJcbiAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcclxuICB7XHJcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XHJcbiAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XHJcbiAgICB2YXIgZGVncmVlID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpO1xyXG4gICAgcmVtYWluaW5nRGVncmVlcy5wdXQobm9kZSwgbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpKTtcclxuXHJcbiAgICBpZiAoZGVncmVlID09IDEpXHJcbiAgICB7XHJcbiAgICAgIHJlbW92ZWROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIHRlbXBMaXN0ID0gW107XHJcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcclxuXHJcbiAgd2hpbGUgKCFmb3VuZENlbnRlcilcclxuICB7XHJcbiAgICB2YXIgdGVtcExpc3QyID0gW107XHJcbiAgICB0ZW1wTGlzdDIgPSB0ZW1wTGlzdDIuY29uY2F0KHRlbXBMaXN0KTtcclxuICAgIHRlbXBMaXN0ID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICB2YXIgbm9kZSA9IGxpc3RbaV07XHJcblxyXG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yobm9kZSk7XHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xyXG5cclxuICAgICAgT2JqZWN0LmtleXMobmVpZ2hib3Vycy5zZXQpLmZvckVhY2goZnVuY3Rpb24oaikge1xyXG4gICAgICAgIHZhciBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzLnNldFtqXTtcclxuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzLmluZGV4T2YobmVpZ2hib3VyKSA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIG90aGVyRGVncmVlID0gcmVtYWluaW5nRGVncmVlcy5nZXQobmVpZ2hib3VyKTtcclxuICAgICAgICAgIHZhciBuZXdEZWdyZWUgPSBvdGhlckRlZ3JlZSAtIDE7XHJcblxyXG4gICAgICAgICAgaWYgKG5ld0RlZ3JlZSA9PSAxKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKG5laWdoYm91cik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVtYWluaW5nRGVncmVlcy5wdXQobmVpZ2hib3VyLCBuZXdEZWdyZWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XHJcblxyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcclxuICAgIHtcclxuICAgICAgZm91bmRDZW50ZXIgPSB0cnVlO1xyXG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjZW50ZXJOb2RlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIER1cmluZyB0aGUgY29hcnNlbmluZyBwcm9jZXNzLCB0aGlzIGxheW91dCBtYXkgYmUgcmVmZXJlbmNlZCBieSB0d28gZ3JhcGggbWFuYWdlcnNcclxuICogdGhpcyBzZXR0ZXIgZnVuY3Rpb24gZ3JhbnRzIGFjY2VzcyB0byBjaGFuZ2UgdGhlIGN1cnJlbnRseSBiZWluZyB1c2VkIGdyYXBoIG1hbmFnZXJcclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuc2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKGdtKVxyXG57XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xyXG4iLCJmdW5jdGlvbiBFbWl0dGVyKCl7XHJcbiAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcclxufVxyXG5cclxudmFyIHAgPSBFbWl0dGVyLnByb3RvdHlwZTtcclxuXHJcbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XHJcbiAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XHJcbiAgICBldmVudDogZXZlbnQsXHJcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcclxuICB9KTtcclxufTtcclxuXHJcbnAucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XHJcbiAgZm9yKCB2YXIgaSA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA+PSAwOyBpLS0gKXtcclxuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XHJcblxyXG4gICAgaWYoIGwuZXZlbnQgPT09IGV2ZW50ICYmIGwuY2FsbGJhY2sgPT09IGNhbGxiYWNrICl7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSggaSwgMSApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnAuZW1pdCA9IGZ1bmN0aW9uKCBldmVudCwgZGF0YSApe1xyXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKysgKXtcclxuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XHJcblxyXG4gICAgaWYoIGV2ZW50ID09PSBsLmV2ZW50ICl7XHJcbiAgICAgIGwuY2FsbGJhY2soIGRhdGEgKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=