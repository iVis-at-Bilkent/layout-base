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

layoutBase.FDLayout = __webpack_require__(1);
layoutBase.FDLayoutConstants = __webpack_require__(22);
layoutBase.FDLayoutEdge = __webpack_require__(23);
layoutBase.FDLayoutNode = __webpack_require__(24);
layoutBase.DimensionD = __webpack_require__(25);
layoutBase.HashMap = __webpack_require__(4);
layoutBase.HashSet = __webpack_require__(17);
layoutBase.IGeometry = __webpack_require__(9);
layoutBase.IMath = __webpack_require__(10);
layoutBase.Integer = __webpack_require__(12);
layoutBase.Point = __webpack_require__(18);
layoutBase.PointD = __webpack_require__(16);
layoutBase.RandomSeed = __webpack_require__(15);
layoutBase.RectangleD = __webpack_require__(14);
layoutBase.Transform = __webpack_require__(20);
layoutBase.UniqueIDGeneretor = __webpack_require__(5);
layoutBase.Quicksort = __webpack_require__(26);
layoutBase.LinkedList = __webpack_require__(19);
layoutBase.LGraphObject = __webpack_require__(8);
layoutBase.LGraph = __webpack_require__(11);
layoutBase.LEdge = __webpack_require__(7);
layoutBase.LGraphManager = __webpack_require__(6);
layoutBase.LNode = __webpack_require__(13);
layoutBase.Layout = __webpack_require__(2);
layoutBase.LayoutConstants = __webpack_require__(3);

module.exports = layoutBase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Layout = __webpack_require__(2);
var FDLayoutConstants = __webpack_require__(22);
var LayoutConstants = __webpack_require__(3);
var IGeometry = __webpack_require__(9);
var IMath = __webpack_require__(10);

function FDLayout() {
  Layout.call(this);

  this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
  this.idealEdgeLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
  this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
  this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
  this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
  this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
  this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.totalDisplacement = 0.0;
  this.oldTotalDisplacement = 0.0;
  this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
}

FDLayout.prototype = Object.create(Layout.prototype);

for (var prop in Layout) {
  FDLayout[prop] = Layout[prop];
}

FDLayout.prototype.initParameters = function () {
  Layout.prototype.initParameters.call(this, arguments);

  if (this.layoutQuality == LayoutConstants.DRAFT_QUALITY) {
    this.displacementThresholdPerNode += 0.30;
    this.maxIterations *= 0.8;
  } else if (this.layoutQuality == LayoutConstants.PROOF_QUALITY) {
    this.displacementThresholdPerNode -= 0.30;
    this.maxIterations *= 1.2;
  }

  this.totalIterations = 0;
  this.notAnimatedIterations = 0;

  this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;

  this.grid = [];
};

FDLayout.prototype.calcIdealEdgeLengths = function () {
  var edge;
  var lcaDepth;
  var source;
  var target;
  var sizeOfSourceInLca;
  var sizeOfTargetInLca;

  var allEdges = this.getGraphManager().getAllEdges();
  for (var i = 0; i < allEdges.length; i++) {
    edge = allEdges[i];

    edge.idealLength = this.idealEdgeLength;

    if (edge.isInterGraph) {
      source = edge.getSource();
      target = edge.getTarget();

      sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
      sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();

      if (this.useSmartIdealEdgeLengthCalculation) {
        edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
      }

      lcaDepth = edge.getLca().getInclusionTreeDepth();

      edge.idealLength += FDLayoutConstants.DEFAULT_EDGE_LENGTH * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
    }
  }
};

FDLayout.prototype.initSpringEmbedder = function () {

  if (this.incremental) {
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
  } else {
    this.coolingFactor = 1.0;
    this.initialCoolingFactor = 1.0;
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
  }

  this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);

  this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;

  this.repulsionRange = this.calcRepulsionRange();
};

FDLayout.prototype.calcSpringForces = function () {
  var lEdges = this.getAllEdges();
  var edge;

  for (var i = 0; i < lEdges.length; i++) {
    edge = lEdges[i];

    this.calcSpringForce(edge, edge.idealLength);
  }
};

FDLayout.prototype.calcRepulsionForces = function (gridUpdateAllowed = true, forceToNodeSurroundingUpdate = false) {
  var i, j;
  var nodeA, nodeB;
  var lNodes = this.getAllNodes();
  var processedNodeSet;

  if (this.useFRGridVariant) {
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed) {
      this.updateGrid();
    }

    processedNodeSet = new Set();

    // calculate repulsion forces between each nodes and its surrounding
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.calculateRepulsionForceOfANode(nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate);
      processedNodeSet.add(nodeA);
    }
  } else {
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];

      for (j = i + 1; j < lNodes.length; j++) {
        nodeB = lNodes[j];

        // If both nodes are not members of the same graph, skip.
        if (nodeA.getOwner() != nodeB.getOwner()) {
          continue;
        }

        this.calcRepulsionForce(nodeA, nodeB);
      }
    }
  }
};

FDLayout.prototype.calcGravitationalForces = function () {
  var node;
  var lNodes = this.getAllNodesToApplyGravitation();

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    this.calcGravitationalForce(node);
  }
};

FDLayout.prototype.moveNodes = function () {
  var lNodes = this.getAllNodes();
  var node;

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    node.move();
  }
};

FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
  var sourceNode = edge.getSource();
  var targetNode = edge.getTarget();

  var length;
  var springForce;
  var springForceX;
  var springForceY;

  // Update edge length
  if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
    edge.updateLengthSimple();
  } else {
    edge.updateLength();

    if (edge.isOverlapingSourceAndTarget) {
      return;
    }
  }

  length = edge.getLength();

  // Calculate spring forces
  springForce = this.springConstant * (length - idealLength);

  // Project force onto x and y axes
  springForceX = springForce * (edge.lengthX / length);
  springForceY = springForce * (edge.lengthY / length);

  // Apply forces on the end nodes
  sourceNode.springForceX += springForceX;
  sourceNode.springForceY += springForceY;
  targetNode.springForceX -= springForceX;
  targetNode.springForceY -= springForceY;
};

FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
  var rectA = nodeA.getRect();
  var rectB = nodeB.getRect();
  var overlapAmount = new Array(2);
  var clipPoints = new Array(4);
  var distanceX;
  var distanceY;
  var distanceSquared;
  var distance;
  var repulsionForce;
  var repulsionForceX;
  var repulsionForceY;

  if (rectA.intersects(rectB)) // two nodes overlap
    {
      // calculate separation amount in x and y directions
      IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);

      repulsionForceX = 2 * overlapAmount[0];
      repulsionForceY = 2 * overlapAmount[1];

      var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);

      // Apply forces on the two nodes
      nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
      nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
      nodeB.repulsionForceX += childrenConstant * repulsionForceX;
      nodeB.repulsionForceY += childrenConstant * repulsionForceY;
    } else // no overlap
    {
      // calculate distance

      if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
        {
          distanceX = rectB.getCenterX() - rectA.getCenterX();
          distanceY = rectB.getCenterY() - rectA.getCenterY();
        } else // use clipping points
        {
          IGeometry.getIntersection(rectA, rectB, clipPoints);

          distanceX = clipPoints[2] - clipPoints[0];
          distanceY = clipPoints[3] - clipPoints[1];
        }

      // No repulsion range. FR grid variant should take care of this.
      if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      distanceSquared = distanceX * distanceX + distanceY * distanceY;
      distance = Math.sqrt(distanceSquared);

      repulsionForce = this.repulsionConstant * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;

      // Project force onto x and y axes
      repulsionForceX = repulsionForce * distanceX / distance;
      repulsionForceY = repulsionForce * distanceY / distance;

      // Apply forces on the two nodes    
      nodeA.repulsionForceX -= repulsionForceX;
      nodeA.repulsionForceY -= repulsionForceY;
      nodeB.repulsionForceX += repulsionForceX;
      nodeB.repulsionForceY += repulsionForceY;
    }
};

FDLayout.prototype.calcGravitationalForce = function (node) {
  var ownerGraph;
  var ownerCenterX;
  var ownerCenterY;
  var distanceX;
  var distanceY;
  var absDistanceX;
  var absDistanceY;
  var estimatedSize;
  ownerGraph = node.getOwner();

  ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
  ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
  distanceX = node.getCenterX() - ownerCenterX;
  distanceY = node.getCenterY() - ownerCenterY;
  absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
  absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;

  if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX;
        node.gravitationForceY = -this.gravityConstant * distanceY;
      }
    } else // inside a compound
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
        node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
      }
    }
};

FDLayout.prototype.isConverged = function () {
  var converged;
  var oscilating = false;

  if (this.totalIterations > this.maxIterations / 3) {
    oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
  }

  converged = this.totalDisplacement < this.totalDisplacementThreshold;

  this.oldTotalDisplacement = this.totalDisplacement;

  return converged || oscilating;
};

FDLayout.prototype.animate = function () {
  if (this.animationDuringLayout && !this.isSubLayout) {
    if (this.notAnimatedIterations == this.animationPeriod) {
      this.update();
      this.notAnimatedIterations = 0;
    } else {
      this.notAnimatedIterations++;
    }
  }
};

//This method calculates the number of children (weight) for all nodes
FDLayout.prototype.calcNoOfChildrenForAllNodes = function () {
  var node;
  var allNodes = this.graphManager.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    node = allNodes[i];
    node.noOfChildren = node.getNoOfChildren();
  }
};

// -----------------------------------------------------------------------------
// Section: FR-Grid Variant Repulsion Force Calculation
// -----------------------------------------------------------------------------

FDLayout.prototype.calcGrid = function (graph) {

  var sizeX = 0;
  var sizeY = 0;

  sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
  sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));

  var grid = new Array(sizeX);

  for (var i = 0; i < sizeX; i++) {
    grid[i] = new Array(sizeY);
  }

  for (var i = 0; i < sizeX; i++) {
    for (var j = 0; j < sizeY; j++) {
      grid[i][j] = new Array();
    }
  }

  return grid;
};

FDLayout.prototype.addNodeToGrid = function (v, left, top) {

  var startX = 0;
  var finishX = 0;
  var startY = 0;
  var finishY = 0;

  startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
  finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
  startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
  finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));

  for (var i = startX; i <= finishX; i++) {
    for (var j = startY; j <= finishY; j++) {
      this.grid[i][j].push(v);
      v.setGridCoordinates(startX, finishX, startY, finishY);
    }
  }
};

FDLayout.prototype.updateGrid = function () {
  var i;
  var nodeA;
  var lNodes = this.getAllNodes();

  this.grid = this.calcGrid(this.graphManager.getRoot());

  // put all nodes to proper grid cells
  for (i = 0; i < lNodes.length; i++) {
    nodeA = lNodes[i];
    this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
  }
};

FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate) {

  if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed || forceToNodeSurroundingUpdate) {
    var surrounding = new Set();
    nodeA.surrounding = new Array();
    var nodeB;
    var grid = this.grid;

    for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
      for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
        if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
          for (var k = 0; k < grid[i][j].length; k++) {
            nodeB = grid[i][j][k];

            // If both nodes are not members of the same graph, 
            // or both nodes are the same, skip.
            if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
              continue;
            }

            // check if the repulsion force between
            // nodeA and nodeB has already been calculated
            if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
              var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
              var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);

              // if the distance between nodeA and nodeB 
              // is less then calculation range
              if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                //then add nodeB to surrounding of nodeA
                surrounding.add(nodeB);
              }
            }
          }
        }
      }
    }

    nodeA.surrounding = [...surrounding];
  }
  for (i = 0; i < nodeA.surrounding.length; i++) {
    this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
  }
};

FDLayout.prototype.calcRepulsionRange = function () {
  return 0.0;
};

module.exports = FDLayout;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(3);
var HashMap = __webpack_require__(4);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(13);
var LEdge = __webpack_require__(7);
var LGraph = __webpack_require__(11);
var PointD = __webpack_require__(16);
var Transform = __webpack_require__(20);
var Emitter = __webpack_require__(21);
var HashSet = __webpack_require__(17);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(5);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var LGraph;
var LEdge = __webpack_require__(7);

function LGraphManager(layout) {
  LGraph = __webpack_require__(11); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var IGeometry = __webpack_require__(9);
var IMath = __webpack_require__(10);

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
/* 8 */
/***/ (function(module, exports) {

function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var Integer = __webpack_require__(12);
var LayoutConstants = __webpack_require__(3);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(13);
var LEdge = __webpack_require__(7);
var HashSet = __webpack_require__(17);
var RectangleD = __webpack_require__(14);
var Point = __webpack_require__(18);
var LinkedList = __webpack_require__(19);

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
/* 12 */
/***/ (function(module, exports) {

function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var Integer = __webpack_require__(12);
var RectangleD = __webpack_require__(14);
var LayoutConstants = __webpack_require__(3);
var RandomSeed = __webpack_require__(15);
var PointD = __webpack_require__(16);
var HashSet = __webpack_require__(17);

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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(5);

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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var PointD = __webpack_require__(16);

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
/* 21 */
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(3);

function FDLayoutConstants() {}

//FDLayoutConstants inherits static props in LayoutConstants
for (var prop in LayoutConstants) {
  FDLayoutConstants[prop] = LayoutConstants[prop];
}

FDLayoutConstants.MAX_ITERATIONS = 2500;

FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.5;
FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
FDLayoutConstants.MIN_EDGE_LENGTH = 1;
FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;

module.exports = FDLayoutConstants;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var LEdge = __webpack_require__(7);
var FDLayoutConstants = __webpack_require__(22);

function FDLayoutEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
}

FDLayoutEdge.prototype = Object.create(LEdge.prototype);

for (var prop in LEdge) {
  FDLayoutEdge[prop] = LEdge[prop];
}

module.exports = FDLayoutEdge;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var LNode = __webpack_require__(13);

function FDLayoutNode(gm, loc, size, vNode) {
  // alternative constructor is handled inside LNode
  LNode.call(this, gm, loc, size, vNode);
  //Spring, repulsion and gravitational forces acting on this node
  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  //Amount by which this node is to be moved in this iteration
  this.displacementX = 0;
  this.displacementY = 0;

  //Start and finish grid coordinates that this node is fallen into
  this.startX = 0;
  this.finishX = 0;
  this.startY = 0;
  this.finishY = 0;

  //Geometric neighbors of this node
  this.surrounding = [];
}

FDLayoutNode.prototype = Object.create(LNode.prototype);

for (var prop in LNode) {
  FDLayoutNode[prop] = LNode[prop];
}

FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
  this.startX = _startX;
  this.finishX = _finishX;
  this.startY = _startY;
  this.finishY = _finishY;
};

module.exports = FDLayoutNode;

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const LinkedList = __webpack_require__(19);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dEJhc2UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL2ZkL0ZETGF5b3V0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTGF5b3V0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvTGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9IYXNoTWFwLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9VbmlxdWVJREdlbmVyZXRvci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xHcmFwaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy9MRWRnZS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xHcmFwaE9iamVjdC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSUdlb21ldHJ5LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9JTWF0aC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xHcmFwaC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL0xOb2RlLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9SZWN0YW5nbGVELmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9SYW5kb21TZWVkLmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9Qb2ludEQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL1BvaW50LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovL2xheW91dEJhc2UvLi9zcmMvdXRpbC9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy91dGlsL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0QmFzZS8uL3NyYy9mZC9GRExheW91dENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL2ZkL0ZETGF5b3V0RWRnZS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL2ZkL0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly9sYXlvdXRCYXNlLy4vc3JjL3V0aWwvUXVpY2tzb3J0LmpzIl0sIm5hbWVzIjpbImxheW91dEJhc2UiLCJGRExheW91dCIsInJlcXVpcmUiLCJGRExheW91dENvbnN0YW50cyIsIkZETGF5b3V0RWRnZSIsIkZETGF5b3V0Tm9kZSIsIkRpbWVuc2lvbkQiLCJIYXNoTWFwIiwiSGFzaFNldCIsIklHZW9tZXRyeSIsIklNYXRoIiwiSW50ZWdlciIsIlBvaW50IiwiUG9pbnREIiwiUmFuZG9tU2VlZCIsIlJlY3RhbmdsZUQiLCJUcmFuc2Zvcm0iLCJVbmlxdWVJREdlbmVyZXRvciIsIlF1aWNrc29ydCIsIkxpbmtlZExpc3QiLCJMR3JhcGhPYmplY3QiLCJMR3JhcGgiLCJMRWRnZSIsIkxHcmFwaE1hbmFnZXIiLCJMTm9kZSIsIkxheW91dCIsIkxheW91dENvbnN0YW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxsIiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwiaWRlYWxFZGdlTGVuZ3RoIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsInNwcmluZ0NvbnN0YW50IiwiREVGQVVMVF9TUFJJTkdfU1RSRU5HVEgiLCJyZXB1bHNpb25Db25zdGFudCIsIkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIIiwiZ3Jhdml0eUNvbnN0YW50IiwiREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIIiwiY29tcG91bmRHcmF2aXR5Q29uc3RhbnQiLCJERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEgiLCJncmF2aXR5UmFuZ2VGYWN0b3IiLCJERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SIiwiY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IiLCJERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsImNvb2xpbmdGYWN0b3IiLCJERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJ0b3RhbERpc3BsYWNlbWVudCIsIm9sZFRvdGFsRGlzcGxhY2VtZW50IiwibWF4SXRlcmF0aW9ucyIsIk1BWF9JVEVSQVRJT05TIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwicHJvcCIsImluaXRQYXJhbWV0ZXJzIiwiYXJndW1lbnRzIiwibGF5b3V0UXVhbGl0eSIsIkRSQUZUX1FVQUxJVFkiLCJQUk9PRl9RVUFMSVRZIiwidG90YWxJdGVyYXRpb25zIiwibm90QW5pbWF0ZWRJdGVyYXRpb25zIiwidXNlRlJHcmlkVmFyaWFudCIsIkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiIsImdyaWQiLCJjYWxjSWRlYWxFZGdlTGVuZ3RocyIsImVkZ2UiLCJsY2FEZXB0aCIsInNvdXJjZSIsInRhcmdldCIsInNpemVPZlNvdXJjZUluTGNhIiwic2l6ZU9mVGFyZ2V0SW5MY2EiLCJhbGxFZGdlcyIsImdldEdyYXBoTWFuYWdlciIsImdldEFsbEVkZ2VzIiwiaSIsImxlbmd0aCIsImlkZWFsTGVuZ3RoIiwiaXNJbnRlckdyYXBoIiwiZ2V0U291cmNlIiwiZ2V0VGFyZ2V0IiwiZ2V0U291cmNlSW5MY2EiLCJnZXRFc3RpbWF0ZWRTaXplIiwiZ2V0VGFyZ2V0SW5MY2EiLCJTSU1QTEVfTk9ERV9TSVpFIiwiZ2V0TGNhIiwiZ2V0SW5jbHVzaW9uVHJlZURlcHRoIiwiUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiIsImluaXRTcHJpbmdFbWJlZGRlciIsImluY3JlbWVudGFsIiwibWF4Tm9kZURpc3BsYWNlbWVudCIsIk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCIsIk1BWF9OT0RFX0RJU1BMQUNFTUVOVCIsIk1hdGgiLCJtYXgiLCJnZXRBbGxOb2RlcyIsInRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkIiwicmVwdWxzaW9uUmFuZ2UiLCJjYWxjUmVwdWxzaW9uUmFuZ2UiLCJjYWxjU3ByaW5nRm9yY2VzIiwibEVkZ2VzIiwiY2FsY1NwcmluZ0ZvcmNlIiwiY2FsY1JlcHVsc2lvbkZvcmNlcyIsImdyaWRVcGRhdGVBbGxvd2VkIiwiZm9yY2VUb05vZGVTdXJyb3VuZGluZ1VwZGF0ZSIsImoiLCJub2RlQSIsIm5vZGVCIiwibE5vZGVzIiwicHJvY2Vzc2VkTm9kZVNldCIsIkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EIiwidXBkYXRlR3JpZCIsIlNldCIsImNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSIsImFkZCIsImdldE93bmVyIiwiY2FsY1JlcHVsc2lvbkZvcmNlIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMiLCJub2RlIiwiZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlIiwibW92ZU5vZGVzIiwibW92ZSIsInNvdXJjZU5vZGUiLCJ0YXJnZXROb2RlIiwic3ByaW5nRm9yY2UiLCJzcHJpbmdGb3JjZVgiLCJzcHJpbmdGb3JjZVkiLCJ1bmlmb3JtTGVhZk5vZGVTaXplcyIsImdldENoaWxkIiwidXBkYXRlTGVuZ3RoU2ltcGxlIiwidXBkYXRlTGVuZ3RoIiwiaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoWCIsImxlbmd0aFkiLCJyZWN0QSIsImdldFJlY3QiLCJyZWN0QiIsIm92ZXJsYXBBbW91bnQiLCJBcnJheSIsImNsaXBQb2ludHMiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJkaXN0YW5jZVNxdWFyZWQiLCJkaXN0YW5jZSIsInJlcHVsc2lvbkZvcmNlIiwicmVwdWxzaW9uRm9yY2VYIiwicmVwdWxzaW9uRm9yY2VZIiwiaW50ZXJzZWN0cyIsImNhbGNTZXBhcmF0aW9uQW1vdW50IiwiY2hpbGRyZW5Db25zdGFudCIsIm5vT2ZDaGlsZHJlbiIsImdldENlbnRlclgiLCJnZXRDZW50ZXJZIiwiZ2V0SW50ZXJzZWN0aW9uIiwiYWJzIiwiTUlOX1JFUFVMU0lPTl9ESVNUIiwic2lnbiIsInNxcnQiLCJvd25lckdyYXBoIiwib3duZXJDZW50ZXJYIiwib3duZXJDZW50ZXJZIiwiYWJzRGlzdGFuY2VYIiwiYWJzRGlzdGFuY2VZIiwiZXN0aW1hdGVkU2l6ZSIsImdldFJpZ2h0IiwiZ2V0TGVmdCIsImdldFRvcCIsImdldEJvdHRvbSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiZ3JhcGhNYW5hZ2VyIiwiZ2V0Um9vdCIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZ3Jhdml0YXRpb25Gb3JjZVkiLCJpc0NvbnZlcmdlZCIsImNvbnZlcmdlZCIsIm9zY2lsYXRpbmciLCJhbmltYXRlIiwiYW5pbWF0aW9uRHVyaW5nTGF5b3V0IiwiaXNTdWJMYXlvdXQiLCJhbmltYXRpb25QZXJpb2QiLCJ1cGRhdGUiLCJjYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMiLCJhbGxOb2RlcyIsImdldE5vT2ZDaGlsZHJlbiIsImNhbGNHcmlkIiwiZ3JhcGgiLCJzaXplWCIsInNpemVZIiwicGFyc2VJbnQiLCJjZWlsIiwiYWRkTm9kZVRvR3JpZCIsInYiLCJsZWZ0IiwidG9wIiwic3RhcnRYIiwiZmluaXNoWCIsInN0YXJ0WSIsImZpbmlzaFkiLCJmbG9vciIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJwdXNoIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJrIiwiaGFzIiwiRW1pdHRlciIsImlzUmVtb3RlVXNlIiwiREVGQVVMVF9RVUFMSVRZIiwiY3JlYXRlQmVuZHNBc05lZWRlZCIsIkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCIsIkRFRkFVTFRfSU5DUkVNRU5UQUwiLCJhbmltYXRpb25PbkxheW91dCIsIkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCIsIkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQiLCJERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QiLCJERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTIiwiZWRnZVRvRHVtbXlOb2RlcyIsImlzTGF5b3V0RmluaXNoZWQiLCJSQU5ET01fU0VFRCIsIm5ld0dyYXBoTWFuYWdlciIsImdtIiwibmV3R3JhcGgiLCJ2R3JhcGgiLCJuZXdOb2RlIiwidk5vZGUiLCJuZXdFZGdlIiwidkVkZ2UiLCJjaGVja0xheW91dFN1Y2Nlc3MiLCJnZXROb2RlcyIsImluY2x1ZGVzSW52YWxpZEVkZ2UiLCJydW5MYXlvdXQiLCJ0aWxpbmdQcmVMYXlvdXQiLCJpc0xheW91dFN1Y2Nlc3NmdWxsIiwibGF5b3V0IiwiQU5JTUFURSIsImRvUG9zdExheW91dCIsInRpbGluZ1Bvc3RMYXlvdXQiLCJ0cmFuc2Zvcm0iLCJ1cGRhdGUyIiwiY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzIiwicmVzZXRBbGxFZGdlcyIsIm5vZGVzIiwib2JqIiwidkdyYXBoT2JqZWN0IiwibmV3TGVmdFRvcCIsInVuZGVmaW5lZCIsInRyYW5zIiwibGVmdFRvcCIsInVwZGF0ZUxlZnRUb3AiLCJzZXRXb3JsZE9yZ1giLCJzZXRXb3JsZE9yZ1kiLCJzZXREZXZpY2VPcmdYIiwic2V0RGV2aWNlT3JnWSIsInBvc2l0aW9uTm9kZXNSYW5kb21seSIsInVwZGF0ZUJvdW5kcyIsImxOb2RlIiwiY2hpbGRHcmFwaCIsInNjYXR0ZXIiLCJnZXRGbGF0Rm9yZXN0IiwiZmxhdEZvcmVzdCIsImlzRm9yZXN0IiwiaXNGbGF0IiwidmlzaXRlZCIsInRvQmVWaXNpdGVkIiwicGFyZW50cyIsInVuUHJvY2Vzc2VkTm9kZXMiLCJjb25jYXQiLCJjdXJyZW50Tm9kZSIsInNwbGljZSIsIm5laWdoYm9yRWRnZXMiLCJnZXRFZGdlcyIsImN1cnJlbnROZWlnaGJvciIsImdldE90aGVyRW5kIiwiZ2V0IiwiY29udGFpbnMiLCJwdXQiLCJ0ZW1wIiwiYWRkQWxsVG8iLCJ2YWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsImNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzIiwiZHVtbXlOb2RlcyIsInByZXYiLCJjYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IiLCJiZW5kcG9pbnRzIiwiZHVtbXlOb2RlIiwic2V0UmVjdCIsIkRpbWVuc2lvbiIsImR1bW15RWRnZSIsInJlbW92ZSIsImVkZ2VzIiwia2V5U2V0IiwibEVkZ2UiLCJwYXRoIiwicCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwiZmluZENlbnRlck9mVHJlZSIsImxpc3QiLCJyZW1vdmVkTm9kZXMiLCJyZW1haW5pbmdEZWdyZWVzIiwiZm91bmRDZW50ZXIiLCJjZW50ZXJOb2RlIiwiZGVncmVlIiwiZ2V0TmVpZ2hib3JzTGlzdCIsInNpemUiLCJ0ZW1wTGlzdCIsInRlbXBMaXN0MiIsIm5laWdoYm91cnMiLCJrZXlzIiwic2V0IiwiZm9yRWFjaCIsIm5laWdoYm91ciIsIm90aGVyRGVncmVlIiwibmV3RGVncmVlIiwic2V0R3JhcGhNYW5hZ2VyIiwiREVGQVVMVF9HUkFQSF9NQVJHSU4iLCJOT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMiLCJTSU1QTEVfTk9ERV9IQUxGX1NJWkUiLCJFTVBUWV9DT01QT1VORF9OT0RFX1NJWkUiLCJNSU5fRURHRV9MRU5HVEgiLCJXT1JMRF9CT1VOREFSWSIsIklOSVRJQUxfV09STERfQk9VTkRBUlkiLCJXT1JMRF9DRU5URVJfWCIsIldPUkxEX0NFTlRFUl9ZIiwibWFwIiwia2V5IiwidGhlSWQiLCJjcmVhdGVJRCIsImxhc3RJRCIsImlzUHJpbWl0aXZlIiwidW5pcXVlSUQiLCJnZXRTdHJpbmciLCJpZCIsImFyZyIsInR5cGUiLCJncmFwaHMiLCJhZGRSb290IiwibmdyYXBoIiwibm5vZGUiLCJyb290Iiwic2V0Um9vdEdyYXBoIiwicm9vdEdyYXBoIiwicGFyZW50Tm9kZSIsInBhcmVudCIsImNoaWxkIiwic291cmNlR3JhcGgiLCJ0YXJnZXRHcmFwaCIsImxPYmoiLCJlZGdlc1RvQmVSZW1vdmVkIiwicyIsIm5vZGVzVG9CZVJlbW92ZWQiLCJvd25lciIsImdldEdyYXBocyIsIm5vZGVMaXN0IiwicmVzZXRBbGxOb2RlcyIsInJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJhbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImVkZ2VMaXN0Iiwic2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJnZXRMYXlvdXQiLCJpc09uZUFuY2VzdG9yT2ZPdGhlciIsImZpcnN0Tm9kZSIsInNlY29uZE5vZGUiLCJnZXRQYXJlbnQiLCJjYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzIiwic291cmNlQW5jZXN0b3JHcmFwaCIsInRhcmdldEFuY2VzdG9yR3JhcGgiLCJsY2EiLCJzb3VyY2VJbkxjYSIsInRhcmdldEluTGNhIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZGVwdGgiLCJpbmNsdXNpb25UcmVlRGVwdGgiLCJnZXRCZW5kcG9pbnRzIiwiZ2V0T3RoZXJFbmRJbkdyYXBoIiwib3RoZXJFbmQiLCJjbGlwUG9pbnRDb29yZGluYXRlcyIsInNlcGFyYXRpb25CdWZmZXIiLCJkaXJlY3Rpb25zIiwiZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMiLCJtaW4iLCJnZXRYIiwiZ2V0WSIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRXT19QSSIsIlRIUkVFX1BJIiwib2JqMiIsIk1JTl9WQUxVRSIsIm1hcmdpbiIsImlzQ29ubmVjdGVkIiwicmlnaHQiLCJib3R0b20iLCJvYmoxIiwic2xpY2UiLCJzb3VyY2VJbmRleCIsInRhcmdldEluZGV4IiwiTUFYX1ZBTFVFIiwibm9kZVRvcCIsIm5vZGVMZWZ0IiwicGFkZGluZ0xlZnQiLCJyZWN1cnNpdmUiLCJub2RlUmlnaHQiLCJub2RlQm90dG9tIiwiYm91bmRpbmdSZWN0IiwiY2FsY3VsYXRlQm91bmRzIiwiY2FsY0VzdGltYXRlZFNpemUiLCJ1cGRhdGVDb25uZWN0ZWQiLCJzZWxmIiwiY2hpbGRyZW5PZk5vZGUiLCJ3aXRoQ2hpbGRyZW4iLCJzaGlmdCIsIm5laWdoYm9yRWRnZSIsImNoaWxkcmVuT2ZOZWlnaGJvciIsIm5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgiLCJ2aXNpdGVkSWQiLCJ2aXNpdGVkTm9kZSIsImxvYyIsInJlY3QiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsImdldENlbnRlciIsImdldExvY2F0aW9uIiwiZ2V0RGlhZ29uYWwiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJzZXRDZW50ZXIiLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJtb3ZlQnkiLCJkeCIsImR5IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJ0byIsImdldEVkZ2VzQmV0d2VlbiIsIm90aGVyIiwibmVpZ2hib3JzIiwid2l0aE5laWdoYm9yc0xpc3QiLCJjaGlsZE5vZGUiLCJjaGlsZHJlbiIsInJhbmRvbUNlbnRlclgiLCJyYW5kb21DZW50ZXJZIiwibWluWCIsIm1heFgiLCJuZXh0RG91YmxlIiwibWluWSIsIm1heFkiLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJsYWJlbFBvcyIsInZMZWZ0VG9wIiwiaW52ZXJzZVRyYW5zZm9ybVBvaW50Iiwic2V0WCIsInNldFkiLCJnZXRNaW5YIiwiZ2V0TWF4WCIsImdldE1pblkiLCJnZXRNYXhZIiwic2VlZCIsInNpbiIsImdldERpZmZlcmVuY2UiLCJwdCIsImdldENvcHkiLCJ0cmFuc2xhdGUiLCJkaW0iLCJjbGVhciIsImlzRW1wdHkiLCJhZGRBbGwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJlcXVhbHMiLCJ0b1N0cmluZyIsIm5vZGVGcm9tIiwibmV4dCIsImhlYWQiLCJ0YWlsIiwidmFscyIsImluc2VydEJlZm9yZSIsInZhbCIsIm90aGVyTm9kZSIsImluc2VydEFmdGVyIiwiaW5zZXJ0Tm9kZUJlZm9yZSIsImluc2VydE5vZGVBZnRlciIsInVuc2hpZnQiLCJwb3AiLCJwb3BOb2RlIiwic2hpZnROb2RlIiwiZ2V0X29iamVjdF9hdCIsImN1cnJlbnQiLCJzZXRfb2JqZWN0X2F0IiwibHdvcmxkT3JnWCIsImx3b3JsZE9yZ1kiLCJsZGV2aWNlT3JnWCIsImxkZXZpY2VPcmdZIiwibHdvcmxkRXh0WCIsImx3b3JsZEV4dFkiLCJsZGV2aWNlRXh0WCIsImxkZXZpY2VFeHRZIiwiZ2V0V29ybGRPcmdYIiwid294IiwiZ2V0V29ybGRPcmdZIiwid295IiwiZ2V0V29ybGRFeHRYIiwic2V0V29ybGRFeHRYIiwid2V4IiwiZ2V0V29ybGRFeHRZIiwic2V0V29ybGRFeHRZIiwid2V5IiwiZ2V0RGV2aWNlT3JnWCIsImRveCIsImdldERldmljZU9yZ1kiLCJkb3kiLCJnZXREZXZpY2VFeHRYIiwic2V0RGV2aWNlRXh0WCIsImRleCIsImdldERldmljZUV4dFkiLCJzZXREZXZpY2VFeHRZIiwiZGV5IiwidHJhbnNmb3JtWCIsInhEZXZpY2UiLCJ3b3JsZEV4dFgiLCJ0cmFuc2Zvcm1ZIiwieURldmljZSIsIndvcmxkRXh0WSIsImludmVyc2VUcmFuc2Zvcm1YIiwieFdvcmxkIiwiZGV2aWNlRXh0WCIsImludmVyc2VUcmFuc2Zvcm1ZIiwieVdvcmxkIiwiZGV2aWNlRXh0WSIsImluUG9pbnQiLCJvdXRQb2ludCIsImxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwiZXZlbnQiLCJjYWxsYmFjayIsInJlbW92ZUxpc3RlbmVyIiwibCIsImVtaXQiLCJkYXRhIiwiQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EIiwiZGlzcGxhY2VtZW50WCIsImRpc3BsYWNlbWVudFkiLCJfc3RhcnRYIiwiX2ZpbmlzaFgiLCJfc3RhcnRZIiwiX2ZpbmlzaFkiLCJxdWlja3NvcnQiLCJjb21wYXJpc29uX2ZuIiwiY29tcGFyaXNvbl9mdW5jdGlvbiIsImNvbXBhcmUiLCJlbmRfaW5kZXgiLCJxdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzIiwibG93IiwiaGlnaCIsIm1pZGRsZUluZGV4IiwibWlkZGxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7QUNsRmE7O0FBRWIsSUFBSUEsYUFBYSxZQUFVO0FBQ3pCO0FBQ0QsQ0FGRDs7QUFJQUEsV0FBV0MsUUFBWCxHQUFzQkMsbUJBQU9BLENBQUMsQ0FBUixDQUF0QjtBQUNBRixXQUFXRyxpQkFBWCxHQUErQkQsbUJBQU9BLENBQUMsRUFBUixDQUEvQjtBQUNBRixXQUFXSSxZQUFYLEdBQTBCRixtQkFBT0EsQ0FBQyxFQUFSLENBQTFCO0FBQ0FGLFdBQVdLLFlBQVgsR0FBMEJILG1CQUFPQSxDQUFDLEVBQVIs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OEI3TyxDQUE5QixFQUFpQzVELFVBQVVzaUIsYUFBVixDQUF3QjdQLElBQXhCLEVBQThCL00sQ0FBOUIsQ0FBakM7QUFDQTFGLHNCQUFVd2lCLGFBQVYsQ0FBd0IvUCxJQUF4QixFQUE4Qi9NLENBQTlCLEVBQWlDaUwsSUFBakM7QUFDQS9NO0FBQ0E4QjtBQUVIO0FBRUosS0F6QkQsUUF5QlM5QixLQUFHOEIsQ0F6Qlo7O0FBMkJBLFFBQUk4Z0IsTUFBTTlnQixDQUFWLEVBQWE7O0FBRVQxRixrQkFBVXVtQix5QkFBVixDQUFvQzlULElBQXBDLEVBQTBDK1QsR0FBMUMsRUFBK0M5Z0IsQ0FBL0MsRUFBa0R5Z0IsYUFBbEQ7QUFFSDs7QUFFRCxRQUFJTSxPQUFPN2lCLENBQVgsRUFBYTs7QUFFVDVELGtCQUFVdW1CLHlCQUFWLENBQW9DOVQsSUFBcEMsRUFBMEM3TyxDQUExQyxFQUE2QzZpQixJQUE3QyxFQUFtRE4sYUFBbkQ7QUFFSDtBQUVKLENBdkREOztBQXlEQTtBQUNBbm1CLFVBQVVxbUIsT0FBVixHQUFvQixVQUFTL1QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFDN0IsV0FBT0EsSUFBSUQsQ0FBWDtBQUNILENBRkQ7O0FBS0E3UixPQUFPQyxPQUFQLEdBQWlCVixTQUFqQixDIiwiZmlsZSI6ImxheW91dC1iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGF5b3V0QmFzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsYXlvdXRCYXNlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBsYXlvdXRCYXNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuO1xufTtcblxubGF5b3V0QmFzZS5GRExheW91dCA9IHJlcXVpcmUoJy4vc3JjL2ZkL0ZETGF5b3V0Jyk7XG5sYXlvdXRCYXNlLkZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9zcmMvZmQvRkRMYXlvdXRDb25zdGFudHMnKTtcbmxheW91dEJhc2UuRkRMYXlvdXRFZGdlID0gcmVxdWlyZSgnLi9zcmMvZmQvRkRMYXlvdXRFZGdlJyk7XG5sYXlvdXRCYXNlLkZETGF5b3V0Tm9kZSA9IHJlcXVpcmUoJy4vc3JjL2ZkL0ZETGF5b3V0Tm9kZScpO1xubGF5b3V0QmFzZS5EaW1lbnNpb25EID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9EaW1lbnNpb25EJyk7XG5sYXlvdXRCYXNlLkhhc2hNYXAgPSByZXF1aXJlKCcuL3NyYy91dGlsL0hhc2hNYXAnKTtcbmxheW91dEJhc2UuSGFzaFNldCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSGFzaFNldCcpO1xubGF5b3V0QmFzZS5JR2VvbWV0cnkgPSByZXF1aXJlKCcuL3NyYy91dGlsL0lHZW9tZXRyeScpO1xubGF5b3V0QmFzZS5JTWF0aCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSU1hdGgnKTtcbmxheW91dEJhc2UuSW50ZWdlciA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvSW50ZWdlcicpO1xubGF5b3V0QmFzZS5Qb2ludCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvUG9pbnQnKTtcbmxheW91dEJhc2UuUG9pbnREID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9Qb2ludEQnKTtcbmxheW91dEJhc2UuUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvUmFuZG9tU2VlZCcpO1xubGF5b3V0QmFzZS5SZWN0YW5nbGVEID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9SZWN0YW5nbGVEJyk7XG5sYXlvdXRCYXNlLlRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vc3JjL3V0aWwvVHJhbnNmb3JtJyk7XG5sYXlvdXRCYXNlLlVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9VbmlxdWVJREdlbmVyZXRvcicpO1xubGF5b3V0QmFzZS5RdWlja3NvcnQgPSByZXF1aXJlKCcuL3NyYy91dGlsL1F1aWNrc29ydCcpO1xubGF5b3V0QmFzZS5MaW5rZWRMaXN0ID0gcmVxdWlyZSgnLi9zcmMvdXRpbC9MaW5rZWRMaXN0Jyk7XG5sYXlvdXRCYXNlLkxHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vc3JjL0xHcmFwaE9iamVjdCcpO1xubGF5b3V0QmFzZS5MR3JhcGggPSByZXF1aXJlKCcuL3NyYy9MR3JhcGgnKTtcbmxheW91dEJhc2UuTEVkZ2UgPSByZXF1aXJlKCcuL3NyYy9MRWRnZScpO1xubGF5b3V0QmFzZS5MR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9zcmMvTEdyYXBoTWFuYWdlcicpO1xubGF5b3V0QmFzZS5MTm9kZSA9IHJlcXVpcmUoJy4vc3JjL0xOb2RlJyk7XG5sYXlvdXRCYXNlLkxheW91dCA9IHJlcXVpcmUoJy4vc3JjL0xheW91dCcpO1xubGF5b3V0QmFzZS5MYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL3NyYy9MYXlvdXRDb25zdGFudHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsYXlvdXRCYXNlO1xuXG5cbiIsInZhciBMYXlvdXQgPSByZXF1aXJlKCcuLi9MYXlvdXQnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91dGlsL0lHZW9tZXRyeScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi4vdXRpbC9JTWF0aCcpO1xuXG5mdW5jdGlvbiBGRExheW91dCgpIHtcbiAgTGF5b3V0LmNhbGwodGhpcyk7XG5cbiAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbiAgdGhpcy5zcHJpbmdDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIO1xuICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgPSAoMy4wICogRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCkgLyAxMDA7XG4gIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuICB0aGlzLm1heEl0ZXJhdGlvbnMgPSBGRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUztcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXQpIHtcbiAgRkRMYXlvdXRbcHJvcF0gPSBMYXlvdXRbcHJvcF07XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKHRoaXMubGF5b3V0UXVhbGl0eSA9PSBMYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSlcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSArPSAwLjMwO1xuICAgIHRoaXMubWF4SXRlcmF0aW9ucyAqPSAwLjg7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5QUk9PRl9RVUFMSVRZKVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlIC09IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDEuMjtcbiAgfVxuXG4gIHRoaXMudG90YWxJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuXG4gIHRoaXMudXNlRlJHcmlkVmFyaWFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTjtcbiAgXG4gIHRoaXMuZ3JpZCA9IFtdO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNJZGVhbEVkZ2VMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcbiAgdmFyIGxjYURlcHRoO1xuICB2YXIgc291cmNlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgc2l6ZU9mU291cmNlSW5MY2E7XG4gIHZhciBzaXplT2ZUYXJnZXRJbkxjYTtcblxuICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldEFsbEVkZ2VzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBlZGdlID0gYWxsRWRnZXNbaV07XG5cbiAgICBlZGdlLmlkZWFsTGVuZ3RoID0gdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG5cbiAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpXG4gICAge1xuICAgICAgc291cmNlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgICAgIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIHNpemVPZlNvdXJjZUluTGNhID0gZWRnZS5nZXRTb3VyY2VJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcbiAgICAgIHNpemVPZlRhcmdldEluTGNhID0gZWRnZS5nZXRUYXJnZXRJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcblxuICAgICAgaWYgKHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbilcbiAgICAgIHtcbiAgICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBzaXplT2ZTb3VyY2VJbkxjYSArIHNpemVPZlRhcmdldEluTGNhIC1cbiAgICAgICAgICAgICAgICAyICogTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkU7XG4gICAgICB9XG5cbiAgICAgIGxjYURlcHRoID0gZWRnZS5nZXRMY2EoKS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcblxuICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiAqXG4gICAgICAgICAgICAgIChzb3VyY2UuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgK1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSAtIDIgKiBsY2FEZXB0aCk7XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuaW5pdFNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24gKCkge1xuXG4gIGlmICh0aGlzLmluY3JlbWVudGFsKVxuICB7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTDtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UO1xuICB9XG5cbiAgdGhpcy5tYXhJdGVyYXRpb25zID1cbiAgICAgICAgICBNYXRoLm1heCh0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoICogNSwgdGhpcy5tYXhJdGVyYXRpb25zKTtcblxuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkID1cbiAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKiB0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoO1xuXG4gIHRoaXMucmVwdWxzaW9uUmFuZ2UgPSB0aGlzLmNhbGNSZXB1bHNpb25SYW5nZSgpO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsRWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBlZGdlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGxFZGdlc1tpXTtcblxuICAgIHRoaXMuY2FsY1NwcmluZ0ZvcmNlKGVkZ2UsIGVkZ2UuaWRlYWxMZW5ndGgpO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlcyA9IGZ1bmN0aW9uIChncmlkVXBkYXRlQWxsb3dlZCA9IHRydWUsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUgPSBmYWxzZSkge1xuICB2YXIgaSwgajtcbiAgdmFyIG5vZGVBLCBub2RlQjtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHByb2Nlc3NlZE5vZGVTZXQ7XG5cbiAgaWYgKHRoaXMudXNlRlJHcmlkVmFyaWFudClcbiAgeyAgICAgICBcbiAgICBpZiAoKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCkpXG4gICAgeyAgICAgICBcbiAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyAgXG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkTm9kZVNldCA9IG5ldyBTZXQoKTtcbiAgICBcbiAgICAvLyBjYWxjdWxhdGUgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIGVhY2ggbm9kZXMgYW5kIGl0cyBzdXJyb3VuZGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCwgZ3JpZFVwZGF0ZUFsbG93ZWQsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuXG4gICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGxOb2Rlcy5sZW5ndGg7IGorKylcbiAgICAgIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpXG4gICAgICAgIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlID0gZnVuY3Rpb24gKGVkZ2UsIGlkZWFsTGVuZ3RoKSB7XG4gIHZhciBzb3VyY2VOb2RlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgdmFyIHRhcmdldE5vZGUgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gIHZhciBsZW5ndGg7XG4gIHZhciBzcHJpbmdGb3JjZTtcbiAgdmFyIHNwcmluZ0ZvcmNlWDtcbiAgdmFyIHNwcmluZ0ZvcmNlWTtcblxuICAvLyBVcGRhdGUgZWRnZSBsZW5ndGhcbiAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiZcbiAgICAgICAgICBzb3VyY2VOb2RlLmdldENoaWxkKCkgPT0gbnVsbCAmJiB0YXJnZXROb2RlLmdldENoaWxkKCkgPT0gbnVsbClcbiAge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoU2ltcGxlKCk7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGgoKTtcblxuICAgIGlmIChlZGdlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAgICB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpLy8gdHdvIG5vZGVzIG92ZXJsYXBcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSBzZXBhcmF0aW9uIGFtb3VudCBpbiB4IGFuZCB5IGRpcmVjdGlvbnNcbiAgICBJR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQocmVjdEEsXG4gICAgICAgICAgICByZWN0QixcbiAgICAgICAgICAgIG92ZXJsYXBBbW91bnQsXG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMi4wKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IDIgKiBvdmVybGFwQW1vdW50WzFdO1xuICAgIFxuICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG4gICAgXG4gICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVkgLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgfVxuICBlbHNlLy8gbm8gb3ZlcmxhcFxuICB7XG4gICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlXG5cbiAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJlxuICAgICAgICAgICAgbm9kZUEuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIG5vZGVCLmdldENoaWxkKCkgPT0gbnVsbCkvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gcmVjdEIuZ2V0Q2VudGVyWCgpIC0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgIH1cbiAgICBlbHNlLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgIHtcbiAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24ocmVjdEEsIHJlY3RCLCBjbGlwUG9pbnRzKTtcblxuICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICBkaXN0YW5jZVkgPSBjbGlwUG9pbnRzWzNdIC0gY2xpcFBvaW50c1sxXTtcbiAgICB9XG5cbiAgICAvLyBObyByZXB1bHNpb24gcmFuZ2UuIEZSIGdyaWQgdmFyaWFudCBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKVxuICAgIHtcbiAgICAgIGRpc3RhbmNlWSA9IElNYXRoLnNpZ24oZGlzdGFuY2VZKSAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVNxdWFyZWQgPSBkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVk7XG4gICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGlzdGFuY2VTcXVhcmVkKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgICByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG4gICAgIFxuICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSByZXB1bHNpb25Gb3JjZVk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG93bmVyR3JhcGg7XG4gIHZhciBvd25lckNlbnRlclg7XG4gIHZhciBvd25lckNlbnRlclk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBhYnNEaXN0YW5jZVg7XG4gIHZhciBhYnNEaXN0YW5jZVk7XG4gIHZhciBlc3RpbWF0ZWRTaXplO1xuICBvd25lckdyYXBoID0gbm9kZS5nZXRPd25lcigpO1xuXG4gIG93bmVyQ2VudGVyWCA9IChvd25lckdyYXBoLmdldFJpZ2h0KCkgKyBvd25lckdyYXBoLmdldExlZnQoKSkgLyAyO1xuICBvd25lckNlbnRlclkgPSAob3duZXJHcmFwaC5nZXRUb3AoKSArIG93bmVyR3JhcGguZ2V0Qm90dG9tKCkpIC8gMjtcbiAgZGlzdGFuY2VYID0gbm9kZS5nZXRDZW50ZXJYKCkgLSBvd25lckNlbnRlclg7XG4gIGRpc3RhbmNlWSA9IG5vZGUuZ2V0Q2VudGVyWSgpIC0gb3duZXJDZW50ZXJZO1xuICBhYnNEaXN0YW5jZVggPSBNYXRoLmFicyhkaXN0YW5jZVgpICsgbm9kZS5nZXRXaWR0aCgpIC8gMjtcbiAgYWJzRGlzdGFuY2VZID0gTWF0aC5hYnMoZGlzdGFuY2VZKSArIG5vZGUuZ2V0SGVpZ2h0KCkgLyAyO1xuXG4gIGlmIChub2RlLmdldE93bmVyKCkgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKS8vIGluIHRoZSByb290IGdyYXBoXG4gIHtcbiAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWDtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVk7XG4gICAgfVxuICB9XG4gIGVsc2UvLyBpbnNpZGUgYSBjb21wb3VuZFxuICB7XG4gICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqXG4gICAgICAgICAgICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZICpcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKVxuICB7XG4gICAgb3NjaWxhdGluZyA9XG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLnRvdGFsRGlzcGxhY2VtZW50IC0gdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCkgPCAyO1xuICB9XG5cbiAgY29udmVyZ2VkID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCA8IHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG5cbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQ7XG5cbiAgcmV0dXJuIGNvbnZlcmdlZCB8fCBvc2NpbGF0aW5nO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCAmJiAhdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIGlmICh0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9PSB0aGlzLmFuaW1hdGlvblBlcmlvZClcbiAgICB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMrKztcbiAgICB9XG4gIH1cbn07XG5cbi8vVGhpcyBtZXRob2QgY2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuICh3ZWlnaHQpIGZvciBhbGwgbm9kZXNcbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbm9kZTtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgICAgbm9kZS5ub09mQ2hpbGRyZW4gPSBub2RlLmdldE5vT2ZDaGlsZHJlbigpO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogRlItR3JpZCBWYXJpYW50IFJlcHVsc2lvbiBGb3JjZSBDYWxjdWxhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmlkID0gZnVuY3Rpb24gKGdyYXBoKXtcblxuICB2YXIgc2l6ZVggPSAwOyBcbiAgdmFyIHNpemVZID0gMDtcbiAgXG4gIHNpemVYID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRSaWdodCgpIC0gZ3JhcGguZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc2l6ZVkgPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldEJvdHRvbSgpIC0gZ3JhcGguZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBcbiAgdmFyIGdyaWQgPSBuZXcgQXJyYXkoc2l6ZVgpO1xuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspe1xuICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkoc2l6ZVkpOyAgICBcbiAgfVxuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspe1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBzaXplWTsgaisrKXtcbiAgICAgIGdyaWRbaV1bal0gPSBuZXcgQXJyYXkoKTsgICAgXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZ3JpZDtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5hZGROb2RlVG9HcmlkID0gZnVuY3Rpb24gKHYsIGxlZnQsIHRvcCl7XG4gICAgXG4gIHZhciBzdGFydFggPSAwO1xuICB2YXIgZmluaXNoWCA9IDA7XG4gIHZhciBzdGFydFkgPSAwO1xuICB2YXIgZmluaXNoWSA9IDA7XG4gIFxuICBzdGFydFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS53aWR0aCArIHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc3RhcnRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS5oZWlnaHQgKyB2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnRYOyBpIDw9IGZpbmlzaFg7IGkrKylcbiAge1xuICAgIGZvciAodmFyIGogPSBzdGFydFk7IGogPD0gZmluaXNoWTsgaisrKVxuICAgIHtcbiAgICAgIHRoaXMuZ3JpZFtpXVtqXS5wdXNoKHYpO1xuICAgICAgdi5zZXRHcmlkQ29vcmRpbmF0ZXMoc3RhcnRYLCBmaW5pc2hYLCBzdGFydFksIGZpbmlzaFkpOyBcbiAgICB9XG4gIH0gIFxuXG59O1xuXG5GRExheW91dC5wcm90b3R5cGUudXBkYXRlR3JpZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaTtcbiAgdmFyIG5vZGVBO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICBcbiAgdGhpcy5ncmlkID0gdGhpcy5jYWxjR3JpZCh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpOyAgIFxuXG4gIC8vIHB1dCBhbGwgbm9kZXMgdG8gcHJvcGVyIGdyaWQgY2VsbHNcbiAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuYWRkTm9kZVRvR3JpZChub2RlQSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldExlZnQoKSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldFRvcCgpKTtcbiAgfSBcblxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSA9IGZ1bmN0aW9uIChub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCwgZ3JpZFVwZGF0ZUFsbG93ZWQsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpe1xuICBcbiAgaWYgKCh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgZ3JpZFVwZGF0ZUFsbG93ZWQpIHx8IGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpXG4gIHtcbiAgICB2YXIgc3Vycm91bmRpbmcgPSBuZXcgU2V0KCk7XG4gICAgbm9kZUEuc3Vycm91bmRpbmcgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgbm9kZUI7XG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IChub2RlQS5zdGFydFggLSAxKTsgaSA8IChub2RlQS5maW5pc2hYICsgMik7IGkrKylcbiAgICB7XG4gICAgICBmb3IgKHZhciBqID0gKG5vZGVBLnN0YXJ0WSAtIDEpOyBqIDwgKG5vZGVBLmZpbmlzaFkgKyAyKTsgaisrKVxuICAgICAge1xuICAgICAgICBpZiAoISgoaSA8IDApIHx8IChqIDwgMCkgfHwgKGkgPj0gZ3JpZC5sZW5ndGgpIHx8IChqID49IGdyaWRbMF0ubGVuZ3RoKSkpXG4gICAgICAgIHsgIFxuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ3JpZFtpXVtqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbm9kZUIgPSBncmlkW2ldW2pdW2tdO1xuXG4gICAgICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgXG4gICAgICAgICAgICAvLyBvciBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSwgc2tpcC5cbiAgICAgICAgICAgIGlmICgobm9kZUEuZ2V0T3duZXIoKSAhPSBub2RlQi5nZXRPd25lcigpKSB8fCAobm9kZUEgPT0gbm9kZUIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHJlcHVsc2lvbiBmb3JjZSBiZXR3ZWVuXG4gICAgICAgICAgICAvLyBub2RlQSBhbmQgbm9kZUIgaGFzIGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkXG4gICAgICAgICAgICBpZiAoIXByb2Nlc3NlZE5vZGVTZXQuaGFzKG5vZGVCKSAmJiAhc3Vycm91bmRpbmcuaGFzKG5vZGVCKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclgoKS1ub2RlQi5nZXRDZW50ZXJYKCkpIC0gXG4gICAgICAgICAgICAgICAgICAgICgobm9kZUEuZ2V0V2lkdGgoKS8yKSArIChub2RlQi5nZXRXaWR0aCgpLzIpKTtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclkoKS1ub2RlQi5nZXRDZW50ZXJZKCkpIC0gXG4gICAgICAgICAgICAgICAgICAgICgobm9kZUEuZ2V0SGVpZ2h0KCkvMikgKyAobm9kZUIuZ2V0SGVpZ2h0KCkvMikpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVBIGFuZCBub2RlQiBcbiAgICAgICAgICAgICAgLy8gaXMgbGVzcyB0aGVuIGNhbGN1bGF0aW9uIHJhbmdlXG4gICAgICAgICAgICAgIGlmICgoZGlzdGFuY2VYIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UpICYmIChkaXN0YW5jZVkgPD0gdGhpcy5yZXB1bHNpb25SYW5nZSkpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3RoZW4gYWRkIG5vZGVCIHRvIHN1cnJvdW5kaW5nIG9mIG5vZGVBXG4gICAgICAgICAgICAgICAgc3Vycm91bmRpbmcuYWRkKG5vZGVCKTtcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IFsuLi5zdXJyb3VuZGluZ107XG5cdFxuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBub2RlQS5zdXJyb3VuZGluZy5sZW5ndGg7IGkrKylcbiAge1xuICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQS5zdXJyb3VuZGluZ1tpXSk7XG4gIH1cdFxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDAuMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXQ7XG4iLCJ2YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcclxudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL3V0aWwvSGFzaE1hcCcpO1xyXG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xyXG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XHJcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcclxudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XHJcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL3V0aWwvUG9pbnREJyk7XHJcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvVHJhbnNmb3JtJyk7XHJcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnLi91dGlsL0VtaXR0ZXInKTtcclxudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL3V0aWwvSGFzaFNldCcpO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KGlzUmVtb3RlVXNlKSB7XHJcbiAgRW1pdHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxyXG4gIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XHJcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgY3JlYXRlIGJlbmRwb2ludHMgYXMgbmVlZGVkIG9yIG5vdFxyXG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9XHJcbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xyXG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxyXG4gIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcclxuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSBmcm9tIGJlZm9yZSB0byBhZnRlciBsYXlvdXQgbm9kZSBwb3NpdGlvbnNcclxuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID1cclxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XHJcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxyXG4gIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XHJcbiAgLy9OdW1iZXIgaXRlcmF0aW9ucyB0aGF0IHNob3VsZCBiZSBkb25lIGJldHdlZW4gdHdvIHN1Y2Nlc3NpdmUgYW5pbWF0aW9uc1xyXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIG9yIG5vdCBsZWFmIG5vZGVzIChub24tY29tcG91bmQgbm9kZXMpIGFyZSBvZiB1bmlmb3JtIHNpemVzLiBXaGVuXHJcbiAgICogdGhleSBhcmUsIGJvdGggc3ByaW5nIGFuZCByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gdHdvIGxlYWYgbm9kZXMgY2FuIGJlXHJcbiAgICogY2FsY3VsYXRlZCB3aXRob3V0IHRoZSBleHBlbnNpdmUgY2xpcHBpbmcgcG9pbnQgY2FsY3VsYXRpb25zLCByZXN1bHRpbmdcclxuICAgKiBpbiBtYWpvciBzcGVlZC11cC5cclxuICAgKi9cclxuICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID1cclxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgY3JlYXRpb24gb2YgYmVuZHBvaW50cyBieSB1c2luZyBkdW1teSBub2RlcyBhbmQgZWRnZXMuXHJcbiAgICogTWFwcyBhbiBMRWRnZSB0byBpdHMgZHVtbXkgYmVuZHBvaW50IHBhdGguXHJcbiAgICovXHJcbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcclxuICB0aGlzLmdyYXBoTWFuYWdlciA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xyXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xyXG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcclxuICB0aGlzLmlzUmVtb3RlVXNlID0gZmFsc2U7XHJcblxyXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XHJcbiAgICB0aGlzLmlzUmVtb3RlVXNlID0gaXNSZW1vdGVVc2U7XHJcbiAgfVxyXG59XHJcblxyXG5MYXlvdXQuUkFORE9NX1NFRUQgPSAxO1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEVtaXR0ZXIucHJvdG90eXBlICk7XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcclxuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xyXG4gIHJldHVybiBnbTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXHJcbntcclxuICByZXR1cm4gbmV3IExOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpXHJcbntcclxuICByZXR1cm4gbmV3IExFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUuY2hlY2tMYXlvdXRTdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbClcclxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcclxuICBcclxuICBpZiAodGhpcy50aWxpbmdQcmVMYXlvdXQpIHtcclxuICAgIHRoaXMudGlsaW5nUHJlTGF5b3V0KCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmluaXRQYXJhbWV0ZXJzKCk7XHJcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XHJcblxyXG4gIGlmICh0aGlzLmNoZWNrTGF5b3V0U3VjY2VzcygpKVxyXG4gIHtcclxuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSBmYWxzZTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSB0aGlzLmxheW91dCgpO1xyXG4gIH1cclxuICBcclxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XHJcbiAgICAvLyBJZiB0aGlzIGlzIGEgJ2R1cmluZycgbGF5b3V0IGFuaW1hdGlvbi4gTGF5b3V0IGlzIG5vdCBmaW5pc2hlZCB5ZXQuIFxyXG4gICAgLy8gV2UgbmVlZCB0byBwZXJmb3JtIHRoZXNlIGluIGluZGV4LmpzIHdoZW4gbGF5b3V0IGlzIHJlYWxseSBmaW5pc2hlZC5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGlzTGF5b3V0U3VjY2Vzc2Z1bGwpXHJcbiAge1xyXG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxyXG4gICAge1xyXG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMudGlsaW5nUG9zdExheW91dCkge1xyXG4gICAgdGhpcy50aWxpbmdQb3N0TGF5b3V0KCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gaXNMYXlvdXRTdWNjZXNzZnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyB0aGUgb3BlcmF0aW9ucyByZXF1aXJlZCBhZnRlciBsYXlvdXQuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmRvUG9zdExheW91dCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XHJcbiAgLy8gUHJvcGFnYXRlIGdlb21ldHJpYyBjaGFuZ2VzIHRvIHYtbGV2ZWwgb2JqZWN0c1xyXG4gIGlmKCF0aGlzLmluY3JlbWVudGFsKXtcclxuICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgfVxyXG4gIHRoaXMudXBkYXRlKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgZ2VvbWV0cnkgb2YgdGhlIHRhcmdldCBncmFwaCBhY2NvcmRpbmcgdG9cclxuICogY2FsY3VsYXRlZCBsYXlvdXQuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZTIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXHJcbiAgaWYgKHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZClcclxuICB7XHJcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xyXG5cclxuICAgIC8vIHJlc2V0IGFsbCBlZGdlcywgc2luY2UgdGhlIHRvcG9sb2d5IGhhcyBjaGFuZ2VkXHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxyXG4gIC8vIHJlbW90ZWx5XHJcbiAgaWYgKCF0aGlzLmlzUmVtb3RlVXNlKVxyXG4gIHtcclxuICAgIC8vIHVwZGF0ZSBhbGwgZWRnZXNcclxuICAgIHZhciBlZGdlO1xyXG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcclxuLy8gICAgICB0aGlzLnVwZGF0ZShlZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZWN1cnNpdmVseSB1cGRhdGUgbm9kZXNcclxuICAgIHZhciBub2RlO1xyXG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbi8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcclxuICAgIHRoaXMudXBkYXRlKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKG9iaiA9PSBudWxsKSB7XHJcbiAgICB0aGlzLnVwZGF0ZTIoKTtcclxuICB9XHJcbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcclxuICAgIHZhciBub2RlID0gb2JqO1xyXG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAvLyBzaW5jZSBub2RlIGlzIGNvbXBvdW5kLCByZWN1cnNpdmVseSB1cGRhdGUgY2hpbGQgbm9kZXNcclxuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICB1cGRhdGUobm9kZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcclxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG5vZGUgaW1wbGVtZW50cyB0aGVcclxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXHJcbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xyXG4gICAgICB2YXIgdk5vZGUgPSBub2RlLnZHcmFwaE9iamVjdDtcclxuXHJcbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxyXG4gICAgICB2Tm9kZS51cGRhdGUobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XHJcbiAgICB2YXIgZWRnZSA9IG9iajtcclxuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXHJcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBlZGdlIGltcGxlbWVudHMgdGhlXHJcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxyXG5cclxuICAgIGlmIChlZGdlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXHJcbiAgICAgIHZhciB2RWRnZSA9IGVkZ2UudkdyYXBoT2JqZWN0O1xyXG5cclxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXHJcbiAgICAgIHZFZGdlLnVwZGF0ZShlZGdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XHJcbiAgICB2YXIgZ3JhcGggPSBvYmo7XHJcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBncmFwaCBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcclxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG9iamVjdCBpbXBsZW1lbnRzIHRoZVxyXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cclxuXHJcbiAgICBpZiAoZ3JhcGgudkdyYXBoT2JqZWN0ICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcclxuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcclxuXHJcbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxyXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzZXQgYWxsIGxheW91dCBwYXJhbWV0ZXJzIHRvIGRlZmF1bHQgdmFsdWVzXHJcbiAqIGRldGVybWluZWQgYXQgY29tcGlsZSB0aW1lLlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXHJcbiAge1xyXG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcclxuICAgIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XHJcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcclxuICAgIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcclxuICAgIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XHJcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpXHJcbiAge1xyXG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcclxuICBpZiAobmV3TGVmdFRvcCA9PSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtKG5ldyBQb2ludEQoMCwgMCkpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIC8vIGNyZWF0ZSBhIHRyYW5zZm9ybWF0aW9uIG9iamVjdCAoZnJvbSBFY2xpcHNlIHRvIGxheW91dCkuIFdoZW4gYW5cclxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXHJcbiAgICAvLyBkcmF3aW5nIG9yIHRoZSByb290IGdyYXBoIGF0IGdpdmVuIGlucHV0IGNvb3JkaW5hdGUgKHNvbWUgbWFyZ2luc1xyXG4gICAgLy8gYWxyZWFkeSBpbmNsdWRlZCBpbiBjYWxjdWxhdGlvbiBvZiBsZWZ0LXRvcCkuXHJcblxyXG4gICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkudXBkYXRlTGVmdFRvcCgpO1xyXG5cclxuICAgIGlmIChsZWZ0VG9wICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWChuZXdMZWZ0VG9wLngpO1xyXG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1kobmV3TGVmdFRvcC55KTtcclxuXHJcbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1gobGVmdFRvcC54KTtcclxuICAgICAgdHJhbnMuc2V0RGV2aWNlT3JnWShsZWZ0VG9wLnkpO1xyXG5cclxuICAgICAgdmFyIG5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xyXG4gICAgICB2YXIgbm9kZTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcclxuXHJcbiAgaWYgKGdyYXBoID09IHVuZGVmaW5lZCkge1xyXG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XHJcbiAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSh0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKSk7XHJcbiAgICB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKS51cGRhdGVCb3VuZHModHJ1ZSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdmFyIGxOb2RlO1xyXG4gICAgdmFyIGNoaWxkR3JhcGg7XHJcblxyXG4gICAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XHJcbiAgICAgIGNoaWxkR3JhcGggPSBsTm9kZS5nZXRDaGlsZCgpO1xyXG5cclxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbClcclxuICAgICAge1xyXG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChjaGlsZEdyYXBoLmdldE5vZGVzKCkubGVuZ3RoID09IDApXHJcbiAgICAgIHtcclxuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoY2hpbGRHcmFwaCk7XHJcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcclxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxyXG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxyXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxyXG4gKi9cclxuTGF5b3V0LnByb3RvdHlwZS5nZXRGbGF0Rm9yZXN0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBmbGF0Rm9yZXN0ID0gW107XHJcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcclxuXHJcbiAgLy8gUXVpY2sgcmVmZXJlbmNlIGZvciBhbGwgbm9kZXMgaW4gdGhlIGdyYXBoIG1hbmFnZXIgYXNzb2NpYXRlZCB3aXRoXHJcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cclxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcclxuXHJcbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XHJcbiAgdmFyIGlzRmxhdCA9IHRydWU7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXHJcbiAge1xyXG4gICAgaWYgKGFsbE5vZGVzW2ldLmdldENoaWxkKCkgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgaXNGbGF0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cclxuICBpZiAoIWlzRmxhdClcclxuICB7XHJcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcclxuICB9XHJcblxyXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cclxuXHJcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xyXG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xyXG4gIHZhciBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcclxuICB2YXIgdW5Qcm9jZXNzZWROb2RlcyA9IFtdO1xyXG5cclxuICB1blByb2Nlc3NlZE5vZGVzID0gdW5Qcm9jZXNzZWROb2Rlcy5jb25jYXQoYWxsTm9kZXMpO1xyXG5cclxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxyXG4gIC8vIGRlY2lkZXMgd2hldGhlciBpdCBpcyBhIHRyZWUgb3Igbm90LiBJZiBpdCBpcyBhIHRyZWUsIGFkZHMgaXQgdG8gdGhlXHJcbiAgLy8gZm9yZXN0IGFuZCBjb250aW51ZWQgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQuXHJcblxyXG4gIHdoaWxlICh1blByb2Nlc3NlZE5vZGVzLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXHJcbiAge1xyXG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcclxuXHJcbiAgICAvLyBTdGFydCB0aGUgQkZTLiBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgdmlzaXRzIGEgbm9kZSBpbiBhXHJcbiAgICAvLyBCRlMgbWFubmVyLlxyXG4gICAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpXHJcbiAgICB7XHJcbiAgICAgIC8vcG9vbCBvcGVyYXRpb25cclxuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWRbMF07XHJcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcclxuICAgICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xyXG5cclxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcclxuICAgICAgdmFyIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgQkZTIGlzIG5vdCBncm93aW5nIGZyb20gdGhpcyBuZWlnaGJvci5cclxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBXZSBoYXZlbid0IHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yLlxyXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcclxuICAgICAgICAgICAgcGFyZW50cy5wdXQoY3VycmVudE5laWdoYm9yLCBjdXJyZW50Tm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxyXG4gICAgICAgICAgLy8gdGhpcyBuZWlnaGJvciBpcyBub3QgcGFyZW50IG9mIGN1cnJlbnROb2RlLCBnaXZlblxyXG4gICAgICAgICAgLy8gZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgdHJlZSwgaGVuY2VcclxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgdHJlZS4gRW1wdHlcclxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXHJcbiAgICBpZiAoIWlzRm9yZXN0KVxyXG4gICAge1xyXG4gICAgICBmbGF0Rm9yZXN0ID0gW107XHJcbiAgICB9XHJcbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxyXG4gICAgLy8gdmlzaXRlZCBhbmQgcGFyZW50cyBsaXN0cy4gQ29udGludWUgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQgb2ZcclxuICAgIC8vIHRoZSBncmFwaCwgaWYgYW55LlxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICB2YXIgdGVtcCA9IFtdO1xyXG4gICAgICB2aXNpdGVkLmFkZEFsbFRvKHRlbXApO1xyXG4gICAgICBmbGF0Rm9yZXN0LnB1c2godGVtcCk7XHJcbiAgICAgIC8vZmxhdEZvcmVzdCA9IGZsYXRGb3Jlc3QuY29uY2F0KHRlbXApO1xyXG4gICAgICAvL3VuUHJvY2Vzc2VkTm9kZXMucmVtb3ZlQWxsKHZpc2l0ZWQpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0ZW1wW2ldO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHVuUHJvY2Vzc2VkTm9kZXMuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIHVuUHJvY2Vzc2VkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XHJcbiAgICAgIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZsYXRGb3Jlc3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBkdW1teSBub2RlcyAoYW4gbC1sZXZlbCBub2RlIHdpdGggbWluaW1hbCBkaW1lbnNpb25zKVxyXG4gKiBmb3IgdGhlIGdpdmVuIGVkZ2UgKG9uZSBwZXIgYmVuZHBvaW50KS4gVGhlIGV4aXN0aW5nIGwtbGV2ZWwgc3RydWN0dXJlXHJcbiAqIGlzIHVwZGF0ZWQgYWNjb3JkaW5nbHkuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpXHJcbntcclxuICB2YXIgZHVtbXlOb2RlcyA9IFtdO1xyXG4gIHZhciBwcmV2ID0gZWRnZS5zb3VyY2U7XHJcblxyXG4gIHZhciBncmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IG5vZGVcclxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XHJcbiAgICBkdW1teU5vZGUuc2V0UmVjdChuZXcgUG9pbnQoMCwgMCksIG5ldyBEaW1lbnNpb24oMSwgMSkpO1xyXG5cclxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgZWRnZSBiZXR3ZWVuIHByZXYgYW5kIGR1bW15IG5vZGVcclxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBkdW1teU5vZGUpO1xyXG5cclxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XHJcbiAgICBwcmV2ID0gZHVtbXlOb2RlO1xyXG4gIH1cclxuXHJcbiAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcclxuICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBlZGdlLnRhcmdldCk7XHJcblxyXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5wdXQoZWRnZSwgZHVtbXlOb2Rlcyk7XHJcblxyXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXHJcbiAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKCkpXHJcbiAge1xyXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xyXG4gIH1cclxuICAvLyBlbHNlLCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBncmFwaFxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBncmFwaC5yZW1vdmUoZWRnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHVtbXlOb2RlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXHJcbiAqIGF0IGwtbGV2ZWwuXHJcbiAqL1xyXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZWRnZXMgPSBbXTtcclxuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcclxuICBlZGdlcyA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5rZXlTZXQoKS5jb25jYXQoZWRnZXMpO1xyXG5cclxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKVxyXG4gIHtcclxuICAgIHZhciBsRWRnZSA9IGVkZ2VzW2tdO1xyXG5cclxuICAgIGlmIChsRWRnZS5iZW5kcG9pbnRzLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgIHZhciBwYXRoID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmdldChsRWRnZSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspXHJcbiAgICAgIHtcclxuICAgICAgICB2YXIgZHVtbXlOb2RlID0gcGF0aFtpXTtcclxuICAgICAgICB2YXIgcCA9IG5ldyBQb2ludEQoZHVtbXlOb2RlLmdldENlbnRlclgoKSxcclxuICAgICAgICAgICAgICAgIGR1bW15Tm9kZS5nZXRDZW50ZXJZKCkpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcclxuICAgICAgICB2YXIgZWJwID0gbEVkZ2UuYmVuZHBvaW50cy5nZXQoaSk7XHJcbiAgICAgICAgZWJwLnggPSBwLng7XHJcbiAgICAgICAgZWJwLnkgPSBwLnk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZHVtbXkgbm9kZSwgZHVtbXkgZWRnZXMgaW5jaWRlbnQgd2l0aCB0aGlzXHJcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcclxuICAgICAgICBkdW1teU5vZGUuZ2V0T3duZXIoKS5yZW1vdmUoZHVtbXlOb2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIHRoZSByZWFsIGVkZ2UgdG8gZ3JhcGhcclxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGxFZGdlLCBsRWRnZS5zb3VyY2UsIGxFZGdlLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTGF5b3V0LnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzbGlkZXJWYWx1ZSwgZGVmYXVsdFZhbHVlLCBtaW5EaXYsIG1heE11bCkge1xyXG4gIGlmIChtaW5EaXYgIT0gdW5kZWZpbmVkICYmIG1heE11bCAhPSB1bmRlZmluZWQpIHtcclxuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApXHJcbiAgICB7XHJcbiAgICAgIHZhciBtaW5WYWx1ZSA9IGRlZmF1bHRWYWx1ZSAvIG1pbkRpdjtcclxuICAgICAgdmFsdWUgLT0gKChkZWZhdWx0VmFsdWUgLSBtaW5WYWx1ZSkgLyA1MCkgKiAoNTAgLSBzbGlkZXJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGRlZmF1bHRWYWx1ZSAqIG1heE11bDtcclxuICAgICAgdmFsdWUgKz0gKChtYXhWYWx1ZSAtIGRlZmF1bHRWYWx1ZSkgLyA1MCkgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBhLCBiO1xyXG5cclxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcclxuICAgIHtcclxuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwMC4wO1xyXG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XHJcbiAgICAgIGIgPSAtOCAqIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGEgKiBzbGlkZXJWYWx1ZSArIGIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcclxuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cclxuICovXHJcbkxheW91dC5maW5kQ2VudGVyT2ZUcmVlID0gZnVuY3Rpb24gKG5vZGVzKVxyXG57XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xyXG5cclxuICB2YXIgcmVtb3ZlZE5vZGVzID0gW107XHJcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xyXG4gIHZhciBmb3VuZENlbnRlciA9IGZhbHNlO1xyXG4gIHZhciBjZW50ZXJOb2RlID0gbnVsbDtcclxuXHJcbiAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcclxuICB7XHJcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XHJcbiAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XHJcbiAgICB2YXIgZGVncmVlID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpO1xyXG4gICAgcmVtYWluaW5nRGVncmVlcy5wdXQobm9kZSwgbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpKTtcclxuXHJcbiAgICBpZiAoZGVncmVlID09IDEpXHJcbiAgICB7XHJcbiAgICAgIHJlbW92ZWROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIHRlbXBMaXN0ID0gW107XHJcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcclxuXHJcbiAgd2hpbGUgKCFmb3VuZENlbnRlcilcclxuICB7XHJcbiAgICB2YXIgdGVtcExpc3QyID0gW107XHJcbiAgICB0ZW1wTGlzdDIgPSB0ZW1wTGlzdDIuY29uY2F0KHRlbXBMaXN0KTtcclxuICAgIHRlbXBMaXN0ID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICB2YXIgbm9kZSA9IGxpc3RbaV07XHJcblxyXG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yobm9kZSk7XHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xyXG5cclxuICAgICAgT2JqZWN0LmtleXMobmVpZ2hib3Vycy5zZXQpLmZvckVhY2goZnVuY3Rpb24oaikge1xyXG4gICAgICAgIHZhciBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzLnNldFtqXTtcclxuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzLmluZGV4T2YobmVpZ2hib3VyKSA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIG90aGVyRGVncmVlID0gcmVtYWluaW5nRGVncmVlcy5nZXQobmVpZ2hib3VyKTtcclxuICAgICAgICAgIHZhciBuZXdEZWdyZWUgPSBvdGhlckRlZ3JlZSAtIDE7XHJcblxyXG4gICAgICAgICAgaWYgKG5ld0RlZ3JlZSA9PSAxKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKG5laWdoYm91cik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVtYWluaW5nRGVncmVlcy5wdXQobmVpZ2hib3VyLCBuZXdEZWdyZWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XHJcblxyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMilcclxuICAgIHtcclxuICAgICAgZm91bmRDZW50ZXIgPSB0cnVlO1xyXG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjZW50ZXJOb2RlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIER1cmluZyB0aGUgY29hcnNlbmluZyBwcm9jZXNzLCB0aGlzIGxheW91dCBtYXkgYmUgcmVmZXJlbmNlZCBieSB0d28gZ3JhcGggbWFuYWdlcnNcclxuICogdGhpcyBzZXR0ZXIgZnVuY3Rpb24gZ3JhbnRzIGFjY2VzcyB0byBjaGFuZ2UgdGhlIGN1cnJlbnRseSBiZWluZyB1c2VkIGdyYXBoIG1hbmFnZXJcclxuICovXHJcbkxheW91dC5wcm90b3R5cGUuc2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKGdtKVxyXG57XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xyXG4iLCJmdW5jdGlvbiBMYXlvdXRDb25zdGFudHMoKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgUXVhbGl0eVxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xyXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZID0gMTtcclxuTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkgPSAyO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgcGFyYW1ldGVyc1xyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCA9IGZhbHNlO1xyXG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBmYWxzZTtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9IHRydWU7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MDtcclxuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMgPSBmYWxzZTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb246IEdlbmVyYWwgb3RoZXIgY29uc3RhbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qXHJcbiAqIE1hcmdpbnMgb2YgYSBncmFwaCB0byBiZSBhcHBsaWVkIG9uIGJvdWRpbmcgcmVjdGFuZ2xlIG9mIGl0cyBjb250ZW50cy4gV2VcclxuICogYXNzdW1lIG1hcmdpbnMgb24gYWxsIGZvdXIgc2lkZXMgdG8gYmUgdW5pZm9ybS5cclxuICovXHJcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTiA9IDE1O1xyXG5cclxuLypcclxuICogV2hldGhlciB0byBjb25zaWRlciBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zIG9yIG5vdFxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IGZhbHNlO1xyXG5cclxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXHJcbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFID0gNDA7XHJcblxyXG4vKlxyXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX0hBTEZfU0laRSA9IExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFIC8gMjtcclxuXHJcbi8qXHJcbiAqIEVtcHR5IGNvbXBvdW5kIG5vZGUgc2l6ZS4gV2hlbiBhIGNvbXBvdW5kIG5vZGUgaXMgZW1wdHksIGl0cyBib3RoXHJcbiAqIGRpbWVuc2lvbnMgc2hvdWxkIGJlIG9mIHRoaXMgdmFsdWUuXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFID0gNDA7XHJcblxyXG4vKlxyXG4gKiBNaW5pbXVtIGxlbmd0aCB0aGF0IGFuIGVkZ2Ugc2hvdWxkIHRha2UgZHVyaW5nIGxheW91dFxyXG4gKi9cclxuTGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XHJcblxyXG4vKlxyXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgbGF5b3V0IG9wZXJhdGVzIG9uXHJcbiAqL1xyXG5MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgPSAxMDAwMDAwO1xyXG5cclxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IHJhbmRvbSBwb3NpdGlvbmluZyBjYW4gYmUgcGVyZm9ybWVkIHdpdGhcclxuICovXHJcbkxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZIC8gMTAwMDtcclxuXHJcbi8qXHJcbiAqIENvb3JkaW5hdGVzIG9mIHRoZSB3b3JsZCBjZW50ZXJcclxuICovXHJcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCA9IDEyMDA7XHJcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0Q29uc3RhbnRzO1xyXG4iLCJ2YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XHJcblxyXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xyXG4gIHRoaXMubWFwID0ge307XHJcbiAgdGhpcy5rZXlzID0gW107XHJcbn1cclxuXHJcbkhhc2hNYXAucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcclxuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKSB7XHJcbiAgICB0aGlzLm1hcFt0aGVJZF0gPSB2YWx1ZTtcclxuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XHJcbiAgfVxyXG59O1xyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcclxuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xyXG59O1xyXG5cclxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XHJcbiAgcmV0dXJuIHRoaXMubWFwW3RoZUlkXTtcclxufTtcclxuXHJcbkhhc2hNYXAucHJvdG90eXBlLmtleVNldCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5rZXlzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xyXG4iLCJmdW5jdGlvbiBVbmlxdWVJREdlbmVyZXRvcigpIHtcclxufVxyXG5cclxuVW5pcXVlSURHZW5lcmV0b3IubGFzdElEID0gMDtcclxuXHJcblVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIGlmIChVbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZShvYmopKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuICBpZiAob2JqLnVuaXF1ZUlEICE9IG51bGwpIHtcclxuICAgIHJldHVybiBvYmoudW5pcXVlSUQ7XHJcbiAgfVxyXG4gIG9iai51bmlxdWVJRCA9IFVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZygpO1xyXG4gIFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCsrO1xyXG4gIHJldHVybiBvYmoudW5pcXVlSUQ7XHJcbn1cclxuXHJcblVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gIGlmIChpZCA9PSBudWxsKVxyXG4gICAgaWQgPSBVbmlxdWVJREdlbmVyZXRvci5sYXN0SUQ7XHJcbiAgcmV0dXJuIFwiT2JqZWN0I1wiICsgaWQgKyBcIlwiO1xyXG59XHJcblxyXG5VbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICB2YXIgdHlwZSA9IHR5cGVvZiBhcmc7XHJcbiAgcmV0dXJuIGFyZyA9PSBudWxsIHx8ICh0eXBlICE9IFwib2JqZWN0XCIgJiYgdHlwZSAhPSBcImZ1bmN0aW9uXCIpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXF1ZUlER2VuZXJldG9yO1xyXG4iLCJ2YXIgTEdyYXBoO1xyXG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XHJcblxyXG5mdW5jdGlvbiBMR3JhcGhNYW5hZ2VyKGxheW91dCkge1xyXG4gIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxyXG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xyXG5cclxuICB0aGlzLmdyYXBocyA9IFtdO1xyXG4gIHRoaXMuZWRnZXMgPSBbXTtcclxufVxyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkUm9vdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgbmdyYXBoID0gdGhpcy5sYXlvdXQubmV3R3JhcGgoKTtcclxuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xyXG4gIHZhciByb290ID0gdGhpcy5hZGQobmdyYXBoLCBubm9kZSk7XHJcbiAgdGhpcy5zZXRSb290R3JhcGgocm9vdCk7XHJcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKVxyXG57XHJcbiAgLy90aGVyZSBhcmUganVzdCAyIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCB0aGVuIGl0IGFkZHMgYW4gTEdyYXBoIGVsc2UgaXQgYWRkcyBhbiBMRWRnZVxyXG4gIGlmIChuZXdFZGdlID09IG51bGwgJiYgc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xyXG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgXCJHcmFwaCBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIlBhcmVudCBub2RlIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xyXG4gICAgICB0aHJvdyBcIkdyYXBoIGFscmVhZHkgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncmFwaHMucHVzaChuZXdHcmFwaCk7XHJcblxyXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiQWxyZWFkeSBoYXMgYSBwYXJlbnQhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgIHRocm93ICBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcclxuICAgIHBhcmVudE5vZGUuY2hpbGQgPSBuZXdHcmFwaDtcclxuXHJcbiAgICByZXR1cm4gbmV3R3JhcGg7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXHJcbiAgICB0YXJnZXROb2RlID0gbmV3RWRnZTtcclxuICAgIHNvdXJjZU5vZGUgPSBwYXJlbnROb2RlO1xyXG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xyXG4gICAgdmFyIHNvdXJjZUdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xyXG4gICAgdmFyIHRhcmdldEdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgIGlmICghKHNvdXJjZUdyYXBoICE9IG51bGwgJiYgc291cmNlR3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2Ugbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEodGFyZ2V0R3JhcGggIT0gbnVsbCAmJiB0YXJnZXRHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIlRhcmdldCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZUdyYXBoID09IHRhcmdldEdyYXBoKVxyXG4gICAge1xyXG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XHJcblxyXG4gICAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcclxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xyXG4gICAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XHJcblxyXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcclxuICAgICAgaWYgKHRoaXMuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA+IC0xKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gaW50ZXItZ3JhcGggZWRnZSBsaXN0IVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgICAvLyBhZGQgZWRnZSB0byBzb3VyY2UgYW5kIHRhcmdldCBpbmNpZGVuY3kgbGlzdHNcclxuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBuZXdFZGdlLnRhcmdldCAhPSBudWxsKSkge1xyXG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gc291cmNlIGFuZC9vciB0YXJnZXQgaW5jaWRlbmN5IGxpc3QhXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld0VkZ2Uuc291cmNlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcbiAgICAgIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3RWRnZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xyXG4gIGlmIChsT2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XHJcbiAgICB2YXIgZ3JhcGggPSBsT2JqO1xyXG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcclxuICAgICAgdGhyb3cgXCJHcmFwaCBub3QgaW4gdGhpcyBncmFwaCBtZ3JcIjtcclxuICAgIH1cclxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IChncmFwaC5wYXJlbnQgIT0gbnVsbCAmJiBncmFwaC5wYXJlbnQuZ3JhcGhNYW5hZ2VyID09IHRoaXMpKSkge1xyXG4gICAgICB0aHJvdyBcIkludmFsaWQgcGFyZW50IG5vZGUhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlyc3QgdGhlIGVkZ2VzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXHJcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xyXG5cclxuICAgIGVkZ2VzVG9CZVJlbW92ZWQgPSBlZGdlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXRFZGdlcygpKTtcclxuXHJcbiAgICB2YXIgZWRnZTtcclxuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XHJcbiAgICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGVuIHRoZSBub2RlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxyXG4gICAgdmFyIG5vZGVzVG9CZVJlbW92ZWQgPSBbXTtcclxuXHJcbiAgICBub2Rlc1RvQmVSZW1vdmVkID0gbm9kZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XHJcblxyXG4gICAgdmFyIG5vZGU7XHJcbiAgICBzID0gbm9kZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgbm9kZSA9IG5vZGVzVG9CZVJlbW92ZWRbaV07XHJcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxyXG4gICAgaWYgKGdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNldFJvb3RHcmFwaChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBub3cgcmVtb3ZlIHRoZSBncmFwaCBpdHNlbGZcclxuICAgIHZhciBpbmRleCA9IHRoaXMuZ3JhcGhzLmluZGV4T2YoZ3JhcGgpO1xyXG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAvLyBhbHNvIHJlc2V0IHRoZSBwYXJlbnQgb2YgdGhlIGdyYXBoXHJcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xyXG4gIH1cclxuICBlbHNlIGlmIChsT2JqIGluc3RhbmNlb2YgTEVkZ2UpIHtcclxuICAgIGVkZ2UgPSBsT2JqO1xyXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIkVkZ2UgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICghZWRnZS5pc0ludGVyR3JhcGgpIHtcclxuICAgICAgdGhyb3cgXCJOb3QgYW4gaW50ZXItZ3JhcGggZWRnZSFcIjtcclxuICAgIH1cclxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBlZGdlIGZyb20gc291cmNlIGFuZCB0YXJnZXQgbm9kZXMnIGluY2lkZW5jeSBsaXN0c1xyXG5cclxuICAgIGlmICghKGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEgJiYgZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgaW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xyXG4gICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIG93bmVyIGdyYXBoIG1hbmFnZXIncyBpbnRlci1ncmFwaCBlZGdlIGxpc3RcclxuXHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XHJcbiAgICAgIHRocm93IFwiRWRnZSBvd25lciBncmFwaCBvciBvd25lciBncmFwaCBtYW5hZ2VyIGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xyXG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lciBncmFwaCBtYW5hZ2VyJ3MgZWRnZSBsaXN0IVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLnJvb3RHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRHcmFwaHMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbClcclxuICB7XHJcbiAgICB2YXIgbm9kZUxpc3QgPSBbXTtcclxuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xyXG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIG5vZGVMaXN0ID0gbm9kZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXROb2RlcygpKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsTm9kZXMgPSBub2RlTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHRoaXMuYWxsTm9kZXMgPSBudWxsO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmFsbEVkZ2VzID0gbnVsbDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5hbGxFZGdlcyA9PSBudWxsKVxyXG4gIHtcclxuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xyXG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XHJcbiAgICB2YXIgcyA9IGdyYXBocy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xyXG5cclxuICAgIHRoaXMuYWxsRWRnZXMgPSBlZGdlTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbjtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKG5vZGVMaXN0KVxyXG57XHJcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG5cclxuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbm9kZUxpc3Q7XHJcbn07XHJcblxyXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldFJvb3RHcmFwaCA9IGZ1bmN0aW9uIChncmFwaClcclxue1xyXG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XHJcbiAgICB0aHJvdyBcIlJvb3Qgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5yb290R3JhcGggPSBncmFwaDtcclxuICAvLyByb290IGdyYXBoIG11c3QgaGF2ZSBhIHJvb3Qgbm9kZSBhc3NvY2lhdGVkIHdpdGggaXQgZm9yIGNvbnZlbmllbmNlXHJcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKVxyXG4gIHtcclxuICAgIGdyYXBoLnBhcmVudCA9IHRoaXMubGF5b3V0Lm5ld05vZGUoXCJSb290IG5vZGVcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmxheW91dDtcclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmlzT25lQW5jZXN0b3JPZk90aGVyID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcclxue1xyXG4gIGlmICghKGZpcnN0Tm9kZSAhPSBudWxsICYmIHNlY29uZE5vZGUgIT0gbnVsbCkpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxyXG4gIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvLyBJcyBzZWNvbmQgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgZmlyc3Qgb25lP1xyXG4gIHZhciBvd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XHJcbiAgdmFyIHBhcmVudE5vZGU7XHJcblxyXG4gIGRvXHJcbiAge1xyXG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSlcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcclxuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gd2hpbGUgKHRydWUpO1xyXG4gIC8vIElzIGZpcnN0IG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIHNlY29uZCBvbmU/XHJcbiAgb3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcclxuXHJcbiAgZG9cclxuICB7XHJcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZSA9PSBmaXJzdE5vZGUpXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG93bmVyR3JhcGggPSBwYXJlbnROb2RlLmdldE93bmVyKCk7XHJcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9IHdoaWxlICh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZWRnZTtcclxuICB2YXIgc291cmNlTm9kZTtcclxuICB2YXIgdGFyZ2V0Tm9kZTtcclxuICB2YXIgc291cmNlQW5jZXN0b3JHcmFwaDtcclxuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcclxuXHJcbiAgdmFyIGVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xyXG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIGVkZ2UgPSBlZGdlc1tpXTtcclxuXHJcbiAgICBzb3VyY2VOb2RlID0gZWRnZS5zb3VyY2U7XHJcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XHJcbiAgICBlZGdlLmxjYSA9IG51bGw7XHJcbiAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlTm9kZTtcclxuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xyXG5cclxuICAgIGlmIChzb3VyY2VOb2RlID09IHRhcmdldE5vZGUpXHJcbiAgICB7XHJcbiAgICAgIGVkZ2UubGNhID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTsgIFxyXG4gICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSBzb3VyY2VBbmNlc3RvckdyYXBoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSBlZGdlLnRhcmdldEluTGNhLmdldE93bmVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzb3VyY2VBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKVxyXG4gICAgICB7XHJcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IGVkZ2Uuc291cmNlSW5MY2EuZ2V0T3duZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXHJcbntcclxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXHJcbiAge1xyXG4gICAgcmV0dXJuIGZpcnN0Tm9kZS5nZXRPd25lcigpO1xyXG4gIH1cclxuICB2YXIgZmlyc3RPd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XHJcblxyXG4gIGRvXHJcbiAge1xyXG4gICAgaWYgKGZpcnN0T3duZXJHcmFwaCA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHZhciBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xyXG5cclxuICAgIGRvXHJcbiAgICB7XHJcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpXHJcbiAgICAgIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gZmlyc3RPd25lckdyYXBoKVxyXG4gICAgICB7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZE93bmVyR3JhcGg7XHJcbiAgICAgIH1cclxuICAgICAgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcclxuICAgIH0gd2hpbGUgKHRydWUpO1xyXG5cclxuICAgIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0T3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xyXG4gIH0gd2hpbGUgKHRydWUpO1xyXG5cclxuICByZXR1cm4gZmlyc3RPd25lckdyYXBoO1xyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMgPSBmdW5jdGlvbiAoZ3JhcGgsIGRlcHRoKSB7XHJcbiAgaWYgKGdyYXBoID09IG51bGwgJiYgZGVwdGggPT0gbnVsbCkge1xyXG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcclxuICAgIGRlcHRoID0gMTtcclxuICB9XHJcbiAgdmFyIG5vZGU7XHJcblxyXG4gIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XHJcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXHJcbiAge1xyXG4gICAgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgbm9kZS5pbmNsdXNpb25UcmVlRGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaW5jbHVkZXNJbnZhbGlkRWRnZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgZWRnZTtcclxuXHJcbiAgdmFyIHMgPSB0aGlzLmVkZ2VzLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICBlZGdlID0gdGhpcy5lZGdlc1tpXTtcclxuXHJcbiAgICBpZiAodGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhNYW5hZ2VyO1xyXG4iLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcclxudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vdXRpbC9JR2VvbWV0cnknKTtcclxudmFyIElNYXRoID0gcmVxdWlyZSgnLi91dGlsL0lNYXRoJyk7XHJcblxyXG5mdW5jdGlvbiBMRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcclxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2RWRnZSk7XHJcblxyXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZmFsc2U7XHJcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2RWRnZTtcclxuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcclxuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxufVxyXG5cclxuTEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcclxuXHJcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XHJcbiAgTEVkZ2VbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XHJcbn1cclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuaXNJbnRlckdyYXBoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmlzSW50ZXJHcmFwaDtcclxufTtcclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0QmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5iZW5kcG9pbnRzO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLmdldExjYSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sY2E7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0SW5MY2EgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMudGFyZ2V0SW5MY2E7XHJcbn07XHJcblxyXG5MRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmQgPSBmdW5jdGlvbiAobm9kZSlcclxue1xyXG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSlcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHRoaXMudGFyZ2V0ID09PSBub2RlKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHRocm93IFwiTm9kZSBpcyBub3QgaW5jaWRlbnQgd2l0aCB0aGlzIGVkZ2VcIjtcclxuICB9XHJcbn1cclxuXHJcbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpXHJcbntcclxuICB2YXIgb3RoZXJFbmQgPSB0aGlzLmdldE90aGVyRW5kKG5vZGUpO1xyXG4gIHZhciByb290ID0gZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpO1xyXG5cclxuICB3aGlsZSAodHJ1ZSlcclxuICB7XHJcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaClcclxuICAgIHtcclxuICAgICAgcmV0dXJuIG90aGVyRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgY2xpcFBvaW50Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoNCk7XHJcblxyXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID1cclxuICAgICAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24odGhpcy50YXJnZXQuZ2V0UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgIGNsaXBQb2ludENvb3JkaW5hdGVzKTtcclxuXHJcbiAgaWYgKCF0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcclxuICB7XHJcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xyXG4gICAgdGhpcy5sZW5ndGhZID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMV0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1szXTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcclxuICAgIHtcclxuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB0aGlzLmxlbmd0aFggPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJYKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJYKCk7XHJcbiAgdGhpcy5sZW5ndGhZID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWSgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWSgpO1xyXG5cclxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcclxuICB7XHJcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XHJcbiAgfVxyXG5cclxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMClcclxuICB7XHJcbiAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcclxuICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTEVkZ2U7XHJcbiIsImZ1bmN0aW9uIExHcmFwaE9iamVjdCh2R3JhcGhPYmplY3QpIHtcclxuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XHJcbiIsImZ1bmN0aW9uIElHZW9tZXRyeSgpIHtcclxufVxyXG5cclxuSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50ID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgc2VwYXJhdGlvbkJ1ZmZlcilcclxue1xyXG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcclxuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcclxuICBvdmVybGFwQW1vdW50WzBdID0gTWF0aC5taW4ocmVjdEEuZ2V0UmlnaHQoKSwgcmVjdEIuZ2V0UmlnaHQoKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XHJcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IE1hdGgubWluKHJlY3RBLmdldEJvdHRvbSgpLCByZWN0Qi5nZXRCb3R0b20oKSkgLVxyXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XHJcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxyXG4gIGlmICgocmVjdEEuZ2V0WCgpIDw9IHJlY3RCLmdldFgoKSkgJiYgKHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkpXHJcbiAge1xyXG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcclxuICAgICAgICAgICAgKHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcclxuICB7XHJcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0QS5nZXRYKCkgLSByZWN0Qi5nZXRYKCkpLFxyXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcclxuICB9XHJcbiAgaWYgKChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpKSAmJiAocmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0QS5nZXRCb3R0b20oKSAtIHJlY3RCLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRZKCkgPD0gcmVjdEEuZ2V0WSgpKSAmJiAocmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpKVxyXG4gIHtcclxuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXHJcbiAgICAgICAgICAgIChyZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xyXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC9cclxuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcclxuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXHJcbiAgaWYgKChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAmJlxyXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxyXG4gIHtcclxuICAgIC8vIGFzc3VtZSB0aGUgc2xvcGUgaXMgMSAoNDUgZGVncmVlKVxyXG4gICAgc2xvcGUgPSAxLjA7XHJcbiAgfVxyXG5cclxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcclxuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcclxuICBpZiAob3ZlcmxhcEFtb3VudFswXSA8IG1vdmVCeVgpXHJcbiAge1xyXG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBtb3ZlQnlZID0gb3ZlcmxhcEFtb3VudFsxXTtcclxuICB9XHJcbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXHJcbiAgLy8gYW1vdW50cyBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zLCBvdmVybGFwIHdpbGwgYmUgcmVzb2x2ZWRcclxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxuICBvdmVybGFwQW1vdW50WzFdID0gLTEgKiBkaXJlY3Rpb25zWzFdICogKChtb3ZlQnlZIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcclxufVxyXG5cclxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucylcclxue1xyXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XHJcbiAgfVxyXG5cclxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpXHJcbntcclxuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcclxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xyXG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XHJcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcclxuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xyXG5cclxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcclxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpXHJcbiAge1xyXG4gICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgcmVzdWx0WzFdID0gcDF5O1xyXG4gICAgcmVzdWx0WzJdID0gcDJ4O1xyXG4gICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxyXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxyXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XHJcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcclxuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XHJcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcclxuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XHJcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xyXG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XHJcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xyXG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcclxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XHJcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXHJcbiAgaWYgKHAxeCA9PSBwMngpXHJcbiAge1xyXG4gICAgaWYgKHAxeSA+IHAyeSlcclxuICAgIHtcclxuICAgICAgcmVzdWx0WzBdID0gcDF4O1xyXG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcclxuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcclxuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xyXG4gICAgICByZXN1bHRbMl0gPSBwMng7XHJcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAvL25vdCBsaW5lLCByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gbGluZSBpcyBob3Jpem9udGFsXHJcbiAgZWxzZSBpZiAocDF5ID09IHAyeSlcclxuICB7XHJcbiAgICBpZiAocDF4ID4gcDJ4KVxyXG4gICAge1xyXG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwMXggPCBwMngpXHJcbiAgICB7XHJcbiAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XHJcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcclxuICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xyXG4gICAgICByZXN1bHRbM10gPSBwMnk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy9ub3QgdmFsaWQgbGluZSwgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xyXG4gICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xyXG4gICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xyXG5cclxuICAgIC8vc2xvcGUgb2YgbGluZSBiZXR3ZWVuIGNlbnRlciBvZiByZWN0QSBhbmQgY2VudGVyIG9mIHJlY3RCXHJcbiAgICB2YXIgc2xvcGVQcmltZSA9IChwMnkgLSBwMXkpIC8gKHAyeCAtIHAxeCk7XHJcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xyXG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQjtcclxuICAgIHZhciB0ZW1wUG9pbnRBeDtcclxuICAgIHZhciB0ZW1wUG9pbnRBeTtcclxuICAgIHZhciB0ZW1wUG9pbnRCeDtcclxuICAgIHZhciB0ZW1wUG9pbnRCeTtcclxuXHJcbiAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcclxuICAgIGlmICgoLXNsb3BlQSkgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbG9wZUEgPT0gc2xvcGVQcmltZSlcclxuICAgIHtcclxuICAgICAgaWYgKHAxeCA+IHAyeClcclxuICAgICAge1xyXG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcclxuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XHJcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xyXG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcclxuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXHJcbiAgICBpZiAoKC1zbG9wZUIpID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21MZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMnggPiBwMXgpXHJcbiAgICAgIHtcclxuICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XHJcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcclxuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XHJcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcclxuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcclxuICAgIGlmIChwMXggPiBwMngpXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmIChwMXkgPiBwMnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XHJcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xyXG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXHJcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcclxuICAgIHtcclxuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XHJcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xyXG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcclxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcclxuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxyXG4gICAge1xyXG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQilcclxuICAgICAge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XHJcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcclxuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21SaWdodEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IGJvdHRvbUxlZnRCeTtcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xyXG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XHJcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tTGVmdEJ4O1xyXG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcclxuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xyXG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbklHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzbG9wZSwgc2xvcGVQcmltZSwgbGluZSlcclxue1xyXG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXHJcbiAge1xyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xyXG4gIH1cclxufVxyXG5cclxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChzMSwgczIsIGYxLCBmMilcclxue1xyXG4gIGlmIChmMiA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XHJcbiAgfVxyXG4gIHZhciB4MSA9IHMxLng7XHJcbiAgdmFyIHkxID0gczEueTtcclxuICB2YXIgeDIgPSBzMi54O1xyXG4gIHZhciB5MiA9IHMyLnk7XHJcbiAgdmFyIHgzID0gZjEueDtcclxuICB2YXIgeTMgPSBmMS55O1xyXG4gIHZhciB4NCA9IGYyLng7XHJcbiAgdmFyIHk0ID0gZjIueTtcclxuICB2YXIgeCwgeTsgLy8gaW50ZXJzZWN0aW9uIHBvaW50XHJcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXHJcbiAgdmFyIGRlbm9tO1xyXG5cclxuICBhMSA9IHkyIC0geTE7XHJcbiAgYjEgPSB4MSAtIHgyO1xyXG4gIGMxID0geDIgKiB5MSAtIHgxICogeTI7ICAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XHJcblxyXG4gIGEyID0geTQgLSB5MztcclxuICBiMiA9IHgzIC0geDQ7XHJcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cclxuXHJcbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcclxuXHJcbiAgaWYgKGRlbm9tID09IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xyXG4gIHkgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gZGVub207XHJcblxyXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKipcclxuICogU29tZSB1c2VmdWwgcHJlLWNhbGN1bGF0ZWQgY29uc3RhbnRzXHJcbiAqL1xyXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XHJcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xyXG5JR2VvbWV0cnkuVFdPX1BJID0gMi4wICogTWF0aC5QSTtcclxuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSUdlb21ldHJ5O1xyXG4iLCJmdW5jdGlvbiBJTWF0aCgpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxyXG4gKi9cclxuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA+IDApXHJcbiAge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHZhbHVlIDwgMClcclxuICB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuXHJcbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcclxufVxyXG5cclxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSU1hdGg7XHJcbiIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xyXG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vdXRpbC9JbnRlZ2VyJyk7XHJcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xyXG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xyXG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XHJcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcclxudmFyIEhhc2hTZXQgPSByZXF1aXJlKCcuL3V0aWwvSGFzaFNldCcpO1xyXG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vdXRpbC9SZWN0YW5nbGVEJyk7XHJcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vdXRpbC9Qb2ludCcpO1xyXG52YXIgTGlua2VkTGlzdCA9IHJlcXVpcmUoJy4vdXRpbC9MaW5rZWRMaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBMR3JhcGgocGFyZW50LCBvYmoyLCB2R3JhcGgpIHtcclxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xyXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xyXG4gIHRoaXMubWFyZ2luID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOO1xyXG4gIHRoaXMuZWRnZXMgPSBbXTtcclxuICB0aGlzLm5vZGVzID0gW107XHJcbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMR3JhcGhNYW5hZ2VyKSB7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTGF5b3V0KSB7XHJcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xyXG4gIH1cclxufVxyXG5cclxuTEdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XHJcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XHJcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xyXG59XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLm5vZGVzO1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5lZGdlcztcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnBhcmVudDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sZWZ0O1xyXG59O1xyXG5cclxuTEdyYXBoLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yaWdodDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnRvcDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmJvdHRvbTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuaXNDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XHJcbiAgaWYgKHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcclxuICAgIHZhciBuZXdOb2RlID0gb2JqMTtcclxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiR3JhcGggaGFzIG5vIGdyYXBoIG1nciFcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XHJcbiAgICAgIHRocm93IFwiTm9kZSBhbHJlYWR5IGluIGdyYXBoIVwiO1xyXG4gICAgfVxyXG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XHJcbiAgICB0aGlzLmdldE5vZGVzKCkucHVzaChuZXdOb2RlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3Tm9kZTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XHJcbiAgICBpZiAoISh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihzb3VyY2VOb2RlKSA+IC0xICYmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih0YXJnZXROb2RlKSkgPiAtMSkpIHtcclxuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlTm9kZS5vd25lciAhPSB0YXJnZXROb2RlLm93bmVyKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcclxuICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcclxuICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcclxuXHJcbiAgICAvLyBzZXQgYXMgaW50cmEtZ3JhcGggZWRnZVxyXG4gICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcclxuXHJcbiAgICAvLyBhZGQgdG8gZ3JhcGggZWRnZSBsaXN0XHJcbiAgICB0aGlzLmdldEVkZ2VzKCkucHVzaChuZXdFZGdlKTtcclxuXHJcbiAgICAvLyBhZGQgdG8gaW5jaWRlbmN5IGxpc3RzXHJcbiAgICBzb3VyY2VOb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XHJcblxyXG4gICAgaWYgKHRhcmdldE5vZGUgIT0gc291cmNlTm9kZSlcclxuICAgIHtcclxuICAgICAgdGFyZ2V0Tm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdFZGdlO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIHZhciBub2RlID0gb2JqO1xyXG4gIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xyXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBcIk5vZGUgaXMgbnVsbCFcIjtcclxuICAgIH1cclxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XHJcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggaXMgaW52YWxpZCFcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggbWFuYWdlciBpcyBpbnZhbGlkIVwiO1xyXG4gICAgfVxyXG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXHJcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IG5vZGUuZWRnZXMuc2xpY2UoKTtcclxuICAgIHZhciBlZGdlO1xyXG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gICAge1xyXG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcclxuXHJcbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBub3cgdGhlIG5vZGUgaXRzZWxmXHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLm5vZGVzLmluZGV4T2Yobm9kZSk7XHJcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xyXG4gICAgdmFyIGVkZ2UgPSBvYmo7XHJcbiAgICBpZiAoZWRnZSA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBlZGdlLnRhcmdldCAhPSBudWxsKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2UudGFyZ2V0Lm93bmVyICE9IG51bGwgJiZcclxuICAgICAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIgPT0gdGhpcyAmJiBlZGdlLnRhcmdldC5vd25lciA9PSB0aGlzKSkge1xyXG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIHZhciB0YXJnZXRJbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XHJcbiAgICBpZiAoIShzb3VyY2VJbmRleCA+IC0xICYmIHRhcmdldEluZGV4ID4gLTEpKSB7XHJcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcclxuICAgIH1cclxuXHJcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xyXG5cclxuICAgIGlmIChlZGdlLnRhcmdldCAhPSBlZGdlLnNvdXJjZSlcclxuICAgIHtcclxuICAgICAgZWRnZS50YXJnZXQuZWRnZXMuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRFZGdlcygpLmluZGV4T2YoZWRnZSk7XHJcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIncyBlZGdlIGxpc3QhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlTGVmdFRvcCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgbm9kZVRvcDtcclxuICB2YXIgbm9kZUxlZnQ7XHJcbiAgdmFyIG1hcmdpbjtcclxuXHJcbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcclxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xyXG5cclxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxyXG4gICAge1xyXG4gICAgICB0b3AgPSBub2RlVG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXHJcbiAgICB7XHJcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERvIHdlIGhhdmUgYW55IG5vZGVzIGluIHRoaXMgZ3JhcGg/XHJcbiAgaWYgKHRvcCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcclxuICB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5sZWZ0ID0gbGVmdCAtIG1hcmdpbjtcclxuICB0aGlzLnRvcCA9IHRvcCAtIG1hcmdpbjtcclxuXHJcbiAgLy8gQXBwbHkgdGhlIG1hcmdpbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0XHJcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSlcclxue1xyXG4gIC8vIGNhbGN1bGF0ZSBib3VuZHNcclxuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgbm9kZUxlZnQ7XHJcbiAgdmFyIG5vZGVSaWdodDtcclxuICB2YXIgbm9kZVRvcDtcclxuICB2YXIgbm9kZUJvdHRvbTtcclxuICB2YXIgbWFyZ2luO1xyXG5cclxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxyXG4gIHtcclxuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xyXG5cclxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XHJcbiAgICB9XHJcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcclxuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XHJcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XHJcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XHJcblxyXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcclxuICAgIHtcclxuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodClcclxuICAgIHtcclxuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXHJcbiAgICB7XHJcbiAgICAgIHRvcCA9IG5vZGVUb3A7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXHJcbiAgICB7XHJcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XHJcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpXHJcbiAge1xyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5wYXJlbnQuZ2V0TGVmdCgpO1xyXG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XHJcbiAgICB0aGlzLnRvcCA9IHRoaXMucGFyZW50LmdldFRvcCgpO1xyXG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLnBhcmVudC5nZXRCb3R0b20oKTtcclxuICB9XHJcblxyXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XHJcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XHJcbiAgdGhpcy5yaWdodCA9IGJvdW5kaW5nUmVjdC54ICsgYm91bmRpbmdSZWN0LndpZHRoICsgbWFyZ2luO1xyXG4gIHRoaXMudG9wID0gYm91bmRpbmdSZWN0LnkgLSBtYXJnaW47XHJcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XHJcbn07XHJcblxyXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKVxyXG57XHJcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcclxuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xyXG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdmFyIG5vZGVMZWZ0O1xyXG4gIHZhciBub2RlUmlnaHQ7XHJcbiAgdmFyIG5vZGVUb3A7XHJcbiAgdmFyIG5vZGVCb3R0b207XHJcblxyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xyXG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcclxuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcclxuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcclxuXHJcbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxyXG4gICAge1xyXG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxyXG4gICAge1xyXG4gICAgICByaWdodCA9IG5vZGVSaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9wID4gbm9kZVRvcClcclxuICAgIHtcclxuICAgICAgdG9wID0gbm9kZVRvcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcclxuICAgIHtcclxuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcclxuXHJcbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSlcclxuICB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcclxuICB9XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XHJcbn07XHJcblxyXG5MR3JhcGgucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBzaXplID0gMDtcclxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xyXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICB7XHJcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcclxuICAgIHNpemUgKz0gbE5vZGUuY2FsY0VzdGltYXRlZFNpemUoKTtcclxuICB9XHJcblxyXG4gIGlmIChzaXplID09IDApXHJcbiAge1xyXG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHNpemUgLyBNYXRoLnNxcnQodGhpcy5ub2Rlcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxufTtcclxuXHJcbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciBzZWxmID0gdGhpcztcclxuICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMClcclxuICB7XHJcbiAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciB0b0JlVmlzaXRlZCA9IG5ldyBMaW5rZWRMaXN0KCk7XHJcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xyXG4gIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMubm9kZXNbMF07XHJcbiAgdmFyIG5laWdoYm9yRWRnZXM7XHJcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcclxuICB2YXIgY2hpbGRyZW5PZk5vZGUgPSBjdXJyZW50Tm9kZS53aXRoQ2hpbGRyZW4oKTtcclxuICBjaGlsZHJlbk9mTm9kZS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggIT09IDApXHJcbiAge1xyXG4gICAgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZC5zaGlmdCgpO1xyXG4gICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xyXG5cclxuICAgIC8vIFRyYXZlcnNlIGFsbCBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXHJcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcclxuICAgIHZhciBzID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcclxuICAgIHtcclxuICAgICAgdmFyIG5laWdoYm9yRWRnZSA9IG5laWdoYm9yRWRnZXNbaV07XHJcbiAgICAgIGN1cnJlbnROZWlnaGJvciA9XHJcbiAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlLmdldE90aGVyRW5kSW5HcmFwaChjdXJyZW50Tm9kZSwgdGhpcyk7XHJcblxyXG4gICAgICAvLyBBZGQgdW52aXNpdGVkIG5laWdoYm9ycyB0byB0aGUgbGlzdCB0byB2aXNpdFxyXG4gICAgICBpZiAoY3VycmVudE5laWdoYm9yICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAhdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuT2ZOZWlnaGJvciA9IGN1cnJlbnROZWlnaGJvci53aXRoQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgY2hpbGRyZW5PZk5laWdoYm9yLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICBpZiAodmlzaXRlZC5zaXplKCkgPj0gdGhpcy5ub2Rlcy5sZW5ndGgpXHJcbiAge1xyXG4gICAgdmFyIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPSAwO1xyXG5cclxuICAgIHZhciBzID0gdmlzaXRlZC5zaXplKCk7XHJcbiAgICAgT2JqZWN0LmtleXModmlzaXRlZC5zZXQpLmZvckVhY2goZnVuY3Rpb24odmlzaXRlZElkKSB7XHJcbiAgICAgIHZhciB2aXNpdGVkTm9kZSA9IHZpc2l0ZWQuc2V0W3Zpc2l0ZWRJZF07XHJcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKVxyXG4gICAgICB7XHJcbiAgICAgICAgbm9PZlZpc2l0ZWRJblRoaXNHcmFwaCsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9PSB0aGlzLm5vZGVzLmxlbmd0aClcclxuICAgIHtcclxuICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGg7XHJcbiIsImZ1bmN0aW9uIEludGVnZXIoKSB7XHJcbn1cclxuXHJcbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcclxuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcclxuIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XHJcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi91dGlsL0ludGVnZXInKTtcclxudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL3V0aWwvUmVjdGFuZ2xlRCcpO1xyXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcclxudmFyIFJhbmRvbVNlZWQgPSByZXF1aXJlKCcuL3V0aWwvUmFuZG9tU2VlZCcpO1xyXG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi91dGlsL1BvaW50RCcpO1xyXG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vdXRpbC9IYXNoU2V0Jyk7XHJcblxyXG5mdW5jdGlvbiBMTm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xyXG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcclxuICBpZiAoc2l6ZSA9PSBudWxsICYmIHZOb2RlID09IG51bGwpIHtcclxuICAgIHZOb2RlID0gbG9jO1xyXG4gIH1cclxuXHJcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdk5vZGUpO1xyXG5cclxuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDIgOiBMTm9kZShMYXlvdXQgbGF5b3V0LCBPYmplY3Qgdk5vZGUpXHJcbiAgaWYgKGdtLmdyYXBoTWFuYWdlciAhPSBudWxsKVxyXG4gICAgZ20gPSBnbS5ncmFwaE1hbmFnZXI7XHJcblxyXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xyXG4gIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID0gSW50ZWdlci5NQVhfVkFMVUU7XHJcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2Tm9kZTtcclxuICB0aGlzLmVkZ2VzID0gW107XHJcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcclxuXHJcbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbClcclxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxvYy54LCBsb2MueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xyXG4gIGVsc2VcclxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKCk7XHJcbn1cclxuXHJcbkxOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XHJcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XHJcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XHJcbn1cclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5lZGdlcztcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5jaGlsZDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRPd25lciA9IGZ1bmN0aW9uICgpXHJcbntcclxuLy8gIGlmICh0aGlzLm93bmVyICE9IG51bGwpIHtcclxuLy8gICAgaWYgKCEodGhpcy5vd25lciA9PSBudWxsIHx8IHRoaXMub3duZXIuZ2V0Tm9kZXMoKS5pbmRleE9mKHRoaXMpID4gLTEpKSB7XHJcbi8vICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbi8vICAgIH1cclxuLy8gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMub3duZXI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC53aWR0aDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcclxue1xyXG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LmhlaWdodDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxyXG57XHJcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGhlaWdodDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLFxyXG4gICAgICAgICAgdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMik7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LngsIHRoaXMucmVjdC55KTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXRSZWN0ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3Q7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggK1xyXG4gICAgICAgICAgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pXHJcbntcclxuICB0aGlzLnJlY3QueCA9IHVwcGVyTGVmdC54O1xyXG4gIHRoaXMucmVjdC55ID0gdXBwZXJMZWZ0Lnk7XHJcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xyXG4gIHRoaXMucmVjdC5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLnNldENlbnRlciA9IGZ1bmN0aW9uIChjeCwgY3kpXHJcbntcclxuICB0aGlzLnJlY3QueCA9IGN4IC0gdGhpcy5yZWN0LndpZHRoIC8gMjtcclxuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSlcclxue1xyXG4gIHRoaXMucmVjdC54ID0geDtcclxuICB0aGlzLnJlY3QueSA9IHk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUubW92ZUJ5ID0gZnVuY3Rpb24gKGR4LCBkeSlcclxue1xyXG4gIHRoaXMucmVjdC54ICs9IGR4O1xyXG4gIHRoaXMucmVjdC55ICs9IGR5O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VMaXN0VG9Ob2RlID0gZnVuY3Rpb24gKHRvKVxyXG57XHJcbiAgdmFyIGVkZ2VMaXN0ID0gW107XHJcbiAgdmFyIGVkZ2U7XHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xyXG4gICAgXHJcbiAgICBpZiAoZWRnZS50YXJnZXQgPT0gdG8pXHJcbiAgICB7XHJcbiAgICAgIGlmIChlZGdlLnNvdXJjZSAhPSBzZWxmKVxyXG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xyXG5cclxuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVkZ2VMaXN0O1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcilcclxue1xyXG4gIHZhciBlZGdlTGlzdCA9IFtdO1xyXG4gIHZhciBlZGdlO1xyXG4gIFxyXG4gIHZhciBzZWxmID0gdGhpcztcclxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xyXG5cclxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpXHJcbiAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcclxuXHJcbiAgICBpZiAoKGVkZ2UudGFyZ2V0ID09IG90aGVyKSB8fCAoZWRnZS5zb3VyY2UgPT0gb3RoZXIpKVxyXG4gICAge1xyXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWRnZUxpc3Q7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzTGlzdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcclxuICB2YXIgZWRnZTtcclxuICBcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcclxuXHJcbiAgICBpZiAoZWRnZS5zb3VyY2UgPT0gc2VsZilcclxuICAgIHtcclxuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmIChlZGdlLnRhcmdldCAhPSBzZWxmKSB7XHJcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZWlnaGJvcnM7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHZhciB3aXRoTmVpZ2hib3JzTGlzdCA9IG5ldyBTZXQoKTtcclxuICB2YXIgY2hpbGROb2RlO1xyXG4gIHZhciBjaGlsZHJlbjtcclxuXHJcbiAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKHRoaXMpO1xyXG5cclxuICBpZiAodGhpcy5jaGlsZCAhPSBudWxsKVxyXG4gIHtcclxuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICBjaGlsZHJlbiA9IGNoaWxkTm9kZS53aXRoQ2hpbGRyZW4oKTtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3aXRoTmVpZ2hib3JzTGlzdDtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5nZXROb09mQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgdmFyIG5vT2ZDaGlsZHJlbiA9IDA7XHJcbiAgdmFyIGNoaWxkTm9kZTtcclxuXHJcbiAgaWYodGhpcy5jaGlsZCA9PSBudWxsKXtcclxuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcclxuXHJcbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlmKG5vT2ZDaGlsZHJlbiA9PSAwKXtcclxuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XHJcbiAgfVxyXG4gIHJldHVybiBub09mQ2hpbGRyZW47XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XHJcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemUgPSAodGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCkgLyAyO1xyXG4gIH1cclxuICBlbHNlXHJcbiAge1xyXG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xyXG4gICAgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG4gICAgdGhpcy5yZWN0LmhlaWdodCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xyXG4gIH1cclxufTtcclxuXHJcbkxOb2RlLnByb3RvdHlwZS5zY2F0dGVyID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciByYW5kb21DZW50ZXJYO1xyXG4gIHZhciByYW5kb21DZW50ZXJZO1xyXG5cclxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcclxuICB2YXIgbWF4WCA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xyXG4gIHJhbmRvbUNlbnRlclggPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggK1xyXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSkgKyBtaW5YO1xyXG5cclxuICB2YXIgbWluWSA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcclxuICB2YXIgbWF4WSA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xyXG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgK1xyXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFkgLSBtaW5ZKSkgKyBtaW5ZO1xyXG5cclxuICB0aGlzLnJlY3QueCA9IHJhbmRvbUNlbnRlclg7XHJcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZXHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbCkge1xyXG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XHJcbiAgfVxyXG4gIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKS5sZW5ndGggIT0gMClcclxuICB7XHJcbiAgICAvLyB3cmFwIHRoZSBjaGlsZHJlbiBub2RlcyBieSByZS1hcnJhbmdpbmcgdGhlIGJvdW5kYXJpZXNcclxuICAgIHZhciBjaGlsZEdyYXBoID0gdGhpcy5nZXRDaGlsZCgpO1xyXG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5yZWN0LnggPSBjaGlsZEdyYXBoLmdldExlZnQoKTtcclxuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcclxuXHJcbiAgICB0aGlzLnNldFdpZHRoKGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpKTtcclxuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGNvbXBvdW5kIGJvdW5kcyBjb25zaWRlcmluZyBpdHMgbGFiZWwgcHJvcGVydGllcyAgICBcclxuICAgIGlmKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpe1xyXG4gICAgICAgIFxyXG4gICAgICB2YXIgd2lkdGggPSBjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKTtcclxuICAgICAgdmFyIGhlaWdodCA9IGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpO1xyXG5cclxuICAgICAgaWYodGhpcy5sYWJlbFdpZHRoID4gd2lkdGgpe1xyXG4gICAgICAgIHRoaXMucmVjdC54IC09ICh0aGlzLmxhYmVsV2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgIHRoaXMuc2V0V2lkdGgodGhpcy5sYWJlbFdpZHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCl7XHJcbiAgICAgICAgaWYodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKXtcclxuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5sYWJlbFBvcyA9PSBcInRvcFwiKXtcclxuICAgICAgICAgIHRoaXMucmVjdC55IC09ICh0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0KTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcclxuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5pbmNsdXNpb25UcmVlRGVwdGg7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zKVxyXG57XHJcbiAgdmFyIGxlZnQgPSB0aGlzLnJlY3QueDtcclxuXHJcbiAgaWYgKGxlZnQgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcclxuICB9XHJcbiAgZWxzZSBpZiAobGVmdCA8IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgbGVmdCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XHJcbiAgfVxyXG5cclxuICB2YXIgdG9wID0gdGhpcy5yZWN0Lnk7XHJcblxyXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXHJcbiAge1xyXG4gICAgdG9wID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xyXG4gIH1cclxuICBlbHNlIGlmICh0b3AgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxyXG4gIHtcclxuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XHJcbiAgfVxyXG5cclxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcclxuICB2YXIgdkxlZnRUb3AgPSB0cmFucy5pbnZlcnNlVHJhbnNmb3JtUG9pbnQobGVmdFRvcCk7XHJcblxyXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0Lng7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xyXG59O1xyXG5cclxuTE5vZGUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5yZWN0Lnk7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQ7XHJcbn07XHJcblxyXG5MTm9kZS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIGlmICh0aGlzLm93bmVyID09IG51bGwpXHJcbiAge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTE5vZGU7XHJcbiIsImZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gIHRoaXMueCA9IDA7XHJcbiAgdGhpcy55ID0gMDtcclxuICB0aGlzLndpZHRoID0gMDtcclxuICB0aGlzLmhlaWdodCA9IDA7XHJcblxyXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxyXG57XHJcbiAgdGhpcy55ID0geTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLndpZHRoO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXHJcbntcclxuICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcclxue1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxyXG57XHJcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueClcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSlcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KVxyXG4gIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmdldFgoKTtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpO1xyXG59O1xyXG5cclxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcclxufTtcclxuXHJcblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XHJcbn07XHJcblxyXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmhlaWdodCAvIDI7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZUQ7XHJcbiIsImZ1bmN0aW9uIFJhbmRvbVNlZWQoKSB7XHJcbn1cclxuUmFuZG9tU2VlZC5zZWVkID0gMTtcclxuUmFuZG9tU2VlZC54ID0gMDtcclxuXHJcblJhbmRvbVNlZWQubmV4dERvdWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICBSYW5kb21TZWVkLnggPSBNYXRoLnNpbihSYW5kb21TZWVkLnNlZWQrKykgKiAxMDAwMDtcclxuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xyXG4iLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xyXG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMueDtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy55O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB0aGlzLnggPSB4O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXHJcbntcclxuICB0aGlzLnkgPSB5O1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxyXG57XHJcbiAgcmV0dXJuIG5ldyBEaW1lbnNpb25EKHRoaXMueCAtIHB0LngsIHRoaXMueSAtIHB0LnkpO1xyXG59O1xyXG5cclxuUG9pbnRELnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcclxufTtcclxuXHJcblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSlcclxue1xyXG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XHJcbiAgdGhpcy55ICs9IGRpbS5oZWlnaHQ7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcclxuIiwidmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xyXG5cclxuZnVuY3Rpb24gSGFzaFNldCgpIHtcclxuICB0aGlzLnNldCA9IHt9O1xyXG59XHJcbjtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopO1xyXG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpXHJcbiAgICB0aGlzLnNldFt0aGVJZF0gPSBvYmo7XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xyXG59O1xyXG5cclxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5zZXQgPSB7fTtcclxufTtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xyXG4gIHJldHVybiB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXSA9PSBvYmo7XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcclxufTtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XHJcbn07XHJcblxyXG4vL2NvbmNhdHMgdGhpcy5zZXQgdG8gdGhlIGdpdmVuIGxpc3RcclxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsVG8gPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xyXG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xyXG4gIH1cclxufTtcclxuXHJcbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XHJcbn07XHJcblxyXG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcclxuICAgIHZhciB2ID0gbGlzdFtpXTtcclxuICAgIHRoaXMuYWRkKHYpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSGFzaFNldDtcclxuIiwiLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cclxuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xyXG4gIHRoaXMueCA9IG51bGw7XHJcbiAgdGhpcy55ID0gbnVsbDtcclxuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IDA7XHJcbiAgICB0aGlzLnkgPSAwO1xyXG4gIH1cclxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuICBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XHJcbiAgICBwID0geDtcclxuICAgIHRoaXMueCA9IHAueDtcclxuICAgIHRoaXMueSA9IHAueTtcclxuICB9XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLng7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxufVxyXG5cclxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcclxuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xyXG4gICAgcCA9IHg7XHJcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XHJcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cclxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcclxuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XHJcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoeSArIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy54ID0geDtcclxuICB0aGlzLnkgPSB5O1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xyXG4gIHRoaXMueCArPSBkeDtcclxuICB0aGlzLnkgKz0gZHk7XHJcbn1cclxuXHJcblBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xyXG4gICAgdmFyIHB0ID0gb2JqO1xyXG4gICAgcmV0dXJuICh0aGlzLnggPT0gcHQueCkgJiYgKHRoaXMueSA9PSBwdC55KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xyXG59XHJcblxyXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBQb2ludCgpLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlt4PVwiICsgdGhpcy54ICsgXCIseT1cIiArIHRoaXMueSArIFwiXVwiO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xyXG4iLCJjb25zdCBub2RlRnJvbSA9IHZhbHVlID0+ICh7IHZhbHVlLCBuZXh0OiBudWxsLCBwcmV2OiBudWxsIH0pO1xyXG5cclxuY29uc3QgYWRkID0gKCBwcmV2LCBub2RlLCBuZXh0LCBsaXN0ICkgPT4ge1xyXG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XHJcbiAgICBwcmV2Lm5leHQgPSBub2RlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgaWYoIG5leHQgIT09IG51bGwgKXtcclxuICAgIG5leHQucHJldiA9IG5vZGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpc3QudGFpbCA9IG5vZGU7XHJcbiAgfVxyXG5cclxuICBub2RlLnByZXYgPSBwcmV2O1xyXG4gIG5vZGUubmV4dCA9IG5leHQ7XHJcblxyXG4gIGxpc3QubGVuZ3RoKys7XHJcblxyXG4gIHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlID0gKCBub2RlLCBsaXN0ICkgPT4ge1xyXG4gIGxldCB7IHByZXYsIG5leHQgfSA9IG5vZGU7XHJcblxyXG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XHJcbiAgICBwcmV2Lm5leHQgPSBuZXh0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0LmhlYWQgPSBuZXh0O1xyXG4gIH1cclxuXHJcbiAgaWYoIG5leHQgIT09IG51bGwgKXtcclxuICAgIG5leHQucHJldiA9IHByZXY7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxpc3QudGFpbCA9IHByZXY7XHJcbiAgfVxyXG5cclxuICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xyXG5cclxuICBsaXN0Lmxlbmd0aC0tO1xyXG5cclxuICByZXR1cm4gbm9kZTtcclxufTtcclxuXHJcbmNsYXNzIExpbmtlZExpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCB2YWxzICl7XHJcbiAgICB0aGlzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xyXG4gICAgdGhpcy50YWlsID0gbnVsbDtcclxuXHJcbiAgICBpZiggdmFscyAhPSBudWxsICl7XHJcbiAgICAgIHZhbHMuZm9yRWFjaCggdiA9PiB0aGlzLnB1c2godikgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpemUoKXtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGluc2VydEJlZm9yZSggdmFsLCBvdGhlck5vZGUgKXtcclxuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIGluc2VydEFmdGVyKCB2YWwsIG90aGVyTm9kZSApe1xyXG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0Tm9kZUJlZm9yZSggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XHJcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnROb2RlQWZ0ZXIoIG5ld05vZGUsIG90aGVyTm9kZSApe1xyXG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBuZXdOb2RlLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgcHVzaCggdmFsICl7XHJcbiAgICByZXR1cm4gYWRkKCB0aGlzLnRhaWwsIG5vZGVGcm9tKHZhbCksIG51bGwsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHVuc2hpZnQoIHZhbCApe1xyXG4gICAgcmV0dXJuIGFkZCggbnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoIG5vZGUgKXtcclxuICAgIHJldHVybiByZW1vdmUoIG5vZGUsIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIHBvcCgpe1xyXG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwb3BOb2RlKCl7XHJcbiAgICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICBzaGlmdCgpe1xyXG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzaGlmdE5vZGUoKXtcclxuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgZ2V0X29iamVjdF9hdCggaW5kZXggKXtcclxuICAgIGlmKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpe1xyXG4gICAgICB2YXIgaSA9IDE7XHJcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgICB3aGlsZShpIDwgaW5kZXgpe1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0X29iamVjdF9hdCggaW5kZXgsIHZhbHVlKXtcclxuICAgIGlmKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpIHtcclxuICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdDtcclxuIiwidmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XHJcblxyXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xyXG4gIHRoaXMubHdvcmxkT3JnWCA9IDAuMDtcclxuICB0aGlzLmx3b3JsZE9yZ1kgPSAwLjA7XHJcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcclxuICB0aGlzLmxkZXZpY2VPcmdZID0gMC4wO1xyXG4gIHRoaXMubHdvcmxkRXh0WCA9IDEuMDtcclxuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XHJcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IDEuMDtcclxuICB0aGlzLmxkZXZpY2VFeHRZID0gMS4wO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICh3b3gpXHJcbntcclxuICB0aGlzLmx3b3JsZE9yZ1ggPSB3b3g7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1k7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKHdveSlcclxue1xyXG4gIHRoaXMubHdvcmxkT3JnWSA9IHdveTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KVxyXG57XHJcbiAgdGhpcy5sd29ybGRFeHRYID0gd2V4O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICh3ZXkpXHJcbntcclxuICB0aGlzLmx3b3JsZEV4dFkgPSB3ZXk7XHJcbn1cclxuXHJcbi8qIERldmljZSByZWxhdGVkICovXHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uIChkb3gpXHJcbntcclxuICB0aGlzLmxkZXZpY2VPcmdYID0gZG94O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1k7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uIChkb3kpXHJcbntcclxuICB0aGlzLmxkZXZpY2VPcmdZID0gZG95O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFggPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFg7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpXHJcbntcclxuICB0aGlzLmxkZXZpY2VFeHRYID0gZGV4O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFkgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XHJcbn1cclxuXHJcblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uIChkZXkpXHJcbntcclxuICB0aGlzLmxkZXZpY2VFeHRZID0gZGV5O1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeClcclxue1xyXG4gIHZhciB4RGV2aWNlID0gMC4wO1xyXG4gIHZhciB3b3JsZEV4dFggPSB0aGlzLmx3b3JsZEV4dFg7XHJcbiAgaWYgKHdvcmxkRXh0WCAhPSAwLjApXHJcbiAge1xyXG4gICAgeERldmljZSA9IHRoaXMubGRldmljZU9yZ1ggK1xyXG4gICAgICAgICAgICAoKHggLSB0aGlzLmx3b3JsZE9yZ1gpICogdGhpcy5sZGV2aWNlRXh0WCAvIHdvcmxkRXh0WCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geERldmljZTtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpXHJcbntcclxuICB2YXIgeURldmljZSA9IDAuMDtcclxuICB2YXIgd29ybGRFeHRZID0gdGhpcy5sd29ybGRFeHRZO1xyXG4gIGlmICh3b3JsZEV4dFkgIT0gMC4wKVxyXG4gIHtcclxuICAgIHlEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdZICtcclxuICAgICAgICAgICAgKCh5IC0gdGhpcy5sd29ybGRPcmdZKSAqIHRoaXMubGRldmljZUV4dFkgLyB3b3JsZEV4dFkpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiB5RGV2aWNlO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXHJcbntcclxuICB2YXIgeFdvcmxkID0gMC4wO1xyXG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcclxuICBpZiAoZGV2aWNlRXh0WCAhPSAwLjApXHJcbiAge1xyXG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICtcclxuICAgICAgICAgICAgKCh4IC0gdGhpcy5sZGV2aWNlT3JnWCkgKiB0aGlzLmx3b3JsZEV4dFggLyBkZXZpY2VFeHRYKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4geFdvcmxkO1xyXG59XHJcblxyXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpXHJcbntcclxuICB2YXIgeVdvcmxkID0gMC4wO1xyXG4gIHZhciBkZXZpY2VFeHRZID0gdGhpcy5sZGV2aWNlRXh0WTtcclxuICBpZiAoZGV2aWNlRXh0WSAhPSAwLjApXHJcbiAge1xyXG4gICAgeVdvcmxkID0gdGhpcy5sd29ybGRPcmdZICtcclxuICAgICAgICAgICAgKCh5IC0gdGhpcy5sZGV2aWNlT3JnWSkgKiB0aGlzLmx3b3JsZEV4dFkgLyBkZXZpY2VFeHRZKTtcclxuICB9XHJcbiAgcmV0dXJuIHlXb3JsZDtcclxufVxyXG5cclxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQgPSBmdW5jdGlvbiAoaW5Qb2ludClcclxue1xyXG4gIHZhciBvdXRQb2ludCA9XHJcbiAgICAgICAgICBuZXcgUG9pbnREKHRoaXMuaW52ZXJzZVRyYW5zZm9ybVgoaW5Qb2ludC54KSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnZlcnNlVHJhbnNmb3JtWShpblBvaW50LnkpKTtcclxuICByZXR1cm4gb3V0UG9pbnQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xyXG4iLCJmdW5jdGlvbiBFbWl0dGVyKCl7XHJcbiAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcclxufVxyXG5cclxudmFyIHAgPSBFbWl0dGVyLnByb3RvdHlwZTtcclxuXHJcbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XHJcbiAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XHJcbiAgICBldmVudDogZXZlbnQsXHJcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcclxuICB9KTtcclxufTtcclxuXHJcbnAucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XHJcbiAgZm9yKCB2YXIgaSA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA+PSAwOyBpLS0gKXtcclxuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XHJcblxyXG4gICAgaWYoIGwuZXZlbnQgPT09IGV2ZW50ICYmIGwuY2FsbGJhY2sgPT09IGNhbGxiYWNrICl7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSggaSwgMSApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnAuZW1pdCA9IGZ1bmN0aW9uKCBldmVudCwgZGF0YSApe1xyXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKysgKXtcclxuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XHJcblxyXG4gICAgaWYoIGV2ZW50ID09PSBsLmV2ZW50ICl7XHJcbiAgICAgIGwuY2FsbGJhY2soIGRhdGEgKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbiIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuLi9MYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRDb25zdGFudHMoKSB7XG59XG5cbi8vRkRMYXlvdXRDb25zdGFudHMgaW5oZXJpdHMgc3RhdGljIHByb3BzIGluIExheW91dENvbnN0YW50c1xuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXRDb25zdGFudHMpIHtcbiAgRkRMYXlvdXRDb25zdGFudHNbcHJvcF0gPSBMYXlvdXRDb25zdGFudHNbcHJvcF07XG59XG5cbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gMjUwMDtcblxuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IDUwO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSAwLjQ1O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSA0NTAwLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEggPSAwLjQ7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSAxLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMy44O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDEuNTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gMC41O1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMID0gMTAwLjA7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgKiAzO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwLjA7XG5GRExheW91dENvbnN0YW50cy5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPSAxMDA7XG5GRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gMC4xO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcbkZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRDb25zdGFudHM7XG4iLCJ2YXIgTEVkZ2UgPSByZXF1aXJlKCcuLi9MRWRnZScpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbiAgdGhpcy5pZGVhbExlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG59XG5cbkZETGF5b3V0RWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlW3Byb3BdID0gTEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRFZGdlO1xuIiwidmFyIExOb2RlID0gcmVxdWlyZSgnLi4vTE5vZGUnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKVxue1xuICB0aGlzLnN0YXJ0WCA9IF9zdGFydFg7XG4gIHRoaXMuZmluaXNoWCA9IF9maW5pc2hYO1xuICB0aGlzLnN0YXJ0WSA9IF9zdGFydFk7XG4gIHRoaXMuZmluaXNoWSA9IF9maW5pc2hZO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcbiIsImZ1bmN0aW9uIERpbWVuc2lvbkQod2lkdGgsIGhlaWdodCkge1xyXG4gIHRoaXMud2lkdGggPSAwO1xyXG4gIHRoaXMuaGVpZ2h0ID0gMDtcclxuICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICB9XHJcbn1cclxuXHJcbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcclxue1xyXG4gIHJldHVybiB0aGlzLndpZHRoO1xyXG59O1xyXG5cclxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXHJcbntcclxuICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbn07XHJcblxyXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG59O1xyXG5cclxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcclxue1xyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEaW1lbnNpb25EO1xyXG4iLCJjb25zdCBMaW5rZWRMaXN0ID0gcmVxdWlyZSgnLi9MaW5rZWRMaXN0LmpzJyk7XG5cbmZ1bmN0aW9uIFF1aWNrc29ydCgpe1xuXG59XG5cblF1aWNrc29ydC5nZXRfb2JqZWN0X2F0ID0gIGZ1bmN0aW9uKGxpc3QsIGkpe1xuICAgIGlmKCBsaXN0IGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICB9XG4gICAgZWxzZSBpZihsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCl7XG4gICAgICAgIHJldHVybiBsaXN0LmdldF9vYmplY3RfYXQoaSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnNldF9vYmplY3RfYXQgPSAgZnVuY3Rpb24obGlzdCwgaSwgdmFsdWUpe1xuICAgIGlmKCBsaXN0IGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICBsaXN0W2ldID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3Qpe1xuICAgICAgICBsaXN0LnNldF9vYmplY3RfYXQoaSwgdmFsdWUpO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5xdWlja3NvcnQgPSBmdW5jdGlvbihsaXN0LCBjb21wYXJpc29uX2ZuKXtcblxuICAgIC8vIGlucHV0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgTGlua2VkTGlzdCBjbGFzcyBvciBtdXN0IGJlIGFuIGFycmF5IGluIG9yZGVyIHRvIHNvcnRcbiAgICBpZiAoISAoIChsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCkgfHwgKCBsaXN0IGluc3RhbmNlb2YgQXJyYXkpKSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblx0dmFyIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBjb21wYXJpc29uX2ZuO1xuXHRcbiAgICBpZiggY29tcGFyaXNvbl9mdW5jdGlvbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29tcGFyaXNvbl9mdW5jdGlvbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cbiAgICB2YXIgZW5kX2luZGV4O1xuXG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KXtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5zaXplKCk7XG4gICAgfVxuICAgIGVsc2UgaWYoIGxpc3QgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgICAgICBlbmRfaW5kZXggPSBsaXN0Lmxlbmd0aC0xO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZW1wdHkgbGlzdHMgb3IgYXJyYXlzLlxuICAgIGlmIChlbmRfaW5kZXggPj0gMCl7XG4gICAgICAgIFF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzKGxpc3QsIDAsIGVuZF9pbmRleCwgY29tcGFyaXNvbl9mdW5jdGlvbik7XG4gICAgfVxuXG59O1xuXG5cblF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzID0gZnVuY3Rpb24obGlzdCwgbG93LCBoaWdoLCBjb21wYXJpc29uX2ZuKXtcblxuICAgIC8vIGlucHV0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgTGlua2VkTGlzdCBjbGFzcyBvciBtdXN0IGJlIGFuIGFycmF5IGluIG9yZGVyIHRvIHNvcnRcbiAgICBpZiAoISAoIChsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCkgfHwgKCBsaXN0IGluc3RhbmNlb2YgQXJyYXkpKSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihjb21wYXJpc29uX2ZuID09PSB1bmRlZmluZWQpe1xuICAgICAgICBjb21wYXJpc29uX2ZuID0gUXVpY2tzb3J0LmNvbXBhcmU7XG4gICAgfVxuXG4gICAgdmFyIGkgPSBsb3c7XG4gICAgdmFyIGogPSBoaWdoO1xuICAgIHZhciBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3IoICggaSArIGogKSAvIDIgKTtcbiAgICB2YXIgbWlkZGxlID0gUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgbWlkZGxlSW5kZXgpO1xuXG4gICAgZG9cbiAgICB7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBhcmlzb25fZm4oUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaSksIG1pZGRsZSkpe1xuXG4gICAgICAgICAgICBpKys7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKG1pZGRsZSwgUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaikpKXtcblxuICAgICAgICAgICAgai0tO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA8PSBqKXtcblxuICAgICAgICAgICAgdmFyIHRlbXAgPSBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBpKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGksIFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGopKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGosIHRlbXApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuXG4gICAgICAgIH1cblxuICAgIH0gd2hpbGUgKGk8PWopO1xuXG4gICAgaWYoIGxvdyA8IGogKXtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCBsb3csIGosIGNvbXBhcmlzb25fZm4pO1xuXG4gICAgfVxuXG4gICAgaWYoIGhpZ2ggPiBpKXtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCBpLCBoaWdoLCBjb21wYXJpc29uX2ZuKTtcblxuICAgIH1cblxufTtcblxuLy8gdGhpcyBmdW5jdGlvbiBtdXN0IGJlIG92ZXJyaWRlbiBmb3Igc29ydGluZyBkaWZmZXJlbnQgZGF0YSB0eXBlcyhlLmcuIHN0cmluZywgaW50ZWdlciBldGMuKVxuUXVpY2tzb3J0LmNvbXBhcmUgPSBmdW5jdGlvbihhLGIpe1xuICAgIHJldHVybiBiID4gYTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja3NvcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==