"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _html = document.documentElement;
var isiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var preloadImages = ['./img/sm/mainContentBg_1.jpg', './img/sm/mainContentBg_2.jpg', './img/sm/mainContentBg_3.jpg', './img/sm/mainContentBg_4.jpg', './img/sm/introBg_1_1.jpg', './img/sm/introBg_1_2.jpg', './img/sm/introBg_2_2.jpg', './img/sm/introBg_3_1.jpg', './img/sm/introBg_3_2.jpg'];

if (window.innerWidth > 992) {
  preloadImages = [].concat(_toConsumableArray(preloadImages), ['./img/mainContentBg_1.jpg', './img/mainContentBg_2.jpg', './img/mainContentBg_3.jpg', './img/mainContentBg_4.jpg', './img/introBg_1_1.jpg', './img/introBg_1_2.jpg', './img/introBg_2_2.jpg', './img/introBg_3_1.jpg', './img/introBg_3_2.jpg']);
}

if (isiOS) {
  _html.classList.add('isiOS');
}

function detectScreenRatio() {
  var wH = window.innerHeight;
  var wW = window.innerWidth;

  if (wW < 767) {
    _html.classList.remove('isScreenPortrait', 'isScreenLandscape', 'isScreenSquare');

    if (wH > wW) {
      _html.classList.add('isScreenPortrait');
    } else if (wH < wW) {
      _html.classList.add('isScreenLandscape');
    } else {
      _html.classList.add('isScreenSquare');
    }
  }
}

function LLQID_getRandomInt(min, max) {
  var int = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + int)) + min;
}

var LLQID_liquidContainer = new Vue((_ref = {
  el: '#LLQID_liquidContainer',
  data: {
    LLQID_liquidMovingShow: false,
    LLQID_liquidGooeyShow: false,
    LLQID_liquidGooeyMsgShow: false,
    LLQID_liquidBrandShow: false,
    LLQID_liquidMovingTween: '',
    LLQID_liquidMovingTweenScale: '',
    LLQID_liquidMovingTweenScaleBackToBegin: '',
    LLQID_liquidMovingTweenShape: '',
    LLQID_PreloadImagesInitialed: false,
    LLQID_PreloadImagesDone: false,
    LLQID_PreloadImagesTimer: ''
  },
  watch: {
    'LLQID_liquidGooeyShow': function LLQID_liquidGooeyShow(val) {
      var _this = this;

      if (!val) {
        this.$nextTick(function () {
          _this.onHidden();
        });
      }
    },
    'LLQID_liquidBrandShow': function LLQID_liquidBrandShow(val) {
      var _this2 = this;

      if (!val) {
        this.$nextTick(function () {
          _this2.onHiddenWithBrand();
        });
      }
    }
  }
}, _defineProperty(_ref, "watch", {
  'LLQID_liquidMovingShow': function LLQID_liquidMovingShow(val) {
    if (!val) {
      this.LLQID_liquidMovingTween.stop();
      this.LLQID_liquidMovingTweenScale.stop();
      this.LLQID_liquidMovingTweenShape.stop();
    }
  }
}), _defineProperty(_ref, "methods", {
  onHidden: function onHidden() {},
  onHiddenWithBrand: function onHiddenWithBrand() {},
  afterEnter: function afterEnter(type) {
    switch (type) {
      case 'LLQID_liquidBrand':
        this.LLQID_liquidGooeyShow = false;
        this.LLQID_liquidMovingShow = false;
        break;
    }
  },
  LLQID_liquidGooey: function LLQID_liquidGooey(endWithBrand) {
    var _this3 = this;

    if (endWithBrand) {
      var preloadImagesFunc = function preloadImagesFunc() {
        _this3.LLQID_PreloadImagesInitialed = true;
        var preloadImagesTotal = preloadImages.length;
        var preloadImagesTotalComplete = 0;
        preloadImages.forEach(function (preloadImageSrc) {
          var preloadImage = new Image();

          preloadImage.onload = function () {
            preloadImagesTotalComplete += 1;

            if (preloadImagesTotalComplete === preloadImagesTotal) {
              _this3.LLQID_PreloadImagesDone = true;
            }
          };

          preloadImage.src = preloadImageSrc;
        });
      };

      if (!this.LLQID_PreloadImagesInitialed) {
        preloadImagesFunc();
      }

      if (this.LLQID_PreloadImagesTimer) {
        clearTimeout(this.LLQID_PreloadImagesTimer);
      }

      this.LLQID_PreloadImagesTimer = setTimeout(function () {
        if (_this3.LLQID_PreloadImagesDone) {
          _this3.LLQID_liquidBrandShow = true;

          _this3.$nextTick(function () {
            setTimeout(function () {
              _this3.$refs.LLQID_liquidBrand.classList.add('showText');

              setTimeout(function () {
                _this3.$refs.LLQID_liquidBrand.classList.add('brandFlyOut');

                setTimeout(function () {
                  _this3.LLQID_liquidGooeyShow = false;
                  _this3.LLQID_liquidMovingShow = false;
                  _this3.LLQID_liquidBrandShow = false;
                  LLQID_IntroContainer.scene1();
                }, 1200);
              }, 1200);
            }, 1200);
          });
        } else {
          _this3.LLQID_liquidGooey(true);
        }
      }, 3000);
    }
  },
  LLQID_liquidMoving: function LLQID_liquidMoving() {
    var _this4 = this;

    var endWithBrand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (endWithBrand) {
      LLQID_IntroContainer.LLQID_IntroContainerShow = false;
      LLQID_mainContent.LLQID_mainContentShow = false;
      document.body.appendChild(this.$el);
    }

    this.LLQID_liquidMovingShow = true;
    this.LLQID_liquidGooeyShow = false;
    this.$nextTick(function () {
      _this4.$el.style.opacity = 1;
      var duration = 600;
      var containers = ['LLQID_liquidMovingFromLeftTop', 'LLQID_liquidMovingFromRightTop', 'LLQID_liquidMovingFromRightBottom', 'LLQID_liquidMovingFromLeftBottom'];
      containers.forEach(function (container, containerIndex) {
        var posL;
        var posT;
        var posRandom = LLQID_getRandomInt(100, 250, 50);

        switch (container) {
          case 'LLQID_liquidMovingFromLeftTop':
            posL = -posRandom;
            posT = -posRandom;
            break;

          case 'LLQID_liquidMovingFromRightTop':
            posL = posRandom;
            posT = -posRandom;
            break;

          case 'LLQID_liquidMovingFromRightBottom':
            posL = posRandom;
            posT = posRandom;
            break;

          case 'LLQID_liquidMovingFromLeftBottom':
            posL = -posRandom;
            posT = posRandom;
            break;
        }

        _this4.LLQID_liquidMovingTweenScale = KUTE.fromTo("#".concat(container), {
          // from
          left: posL,
          top: posT,
          scale: 0,
          opacity: 0
        }, {
          // to
          left: posL,
          top: posT,
          scale: 1,
          opacity: 1
        }, {
          // options
          duration: duration
        });
        _this4.LLQID_liquidMovingTween = KUTE.fromTo("#".concat(container), {
          // from
          left: posL,
          top: posT
        }, {
          // to
          left: 0,
          top: 0
        }, {
          duration: duration,
          complete: function complete() {
            if (containerIndex === 0) {
              _this4.LLQID_liquidGooeyShow = true;
              _this4.LLQID_liquidMovingShow = false;
              _this4.LLQID_liquidBrandShow = false;

              if (endWithBrand) {
                _this4.LLQID_liquidGooeyMsgShow = true;
              } else {
                _this4.LLQID_liquidGooeyMsgShow = false;
              }

              _this4.$nextTick(function () {
                _this4.LLQID_liquidGooey(endWithBrand);
              });
            }
          }
        });
        _this4.LLQID_liquidMovingTweenShape = KUTE.to("#".concat(container, " .LLQID_liquidMovingShapeBegin path"), {
          path: "#".concat(container, " .LLQID_liquidMovingShape path")
        }, {
          morphPrecision: 4,
          duration: duration
        });
        _this4.LLQID_liquidMovingTweenScaleBackToBegin = KUTE.to("#".concat(container, " .LLQID_liquidMovingShapeBegin path"), {
          path: "#".concat(container, " .LLQID_liquidMovingShapeBegin path")
        }, {
          morphPrecision: 4,
          duration: duration * 0.5
        });

        _this4.LLQID_liquidMovingTweenScale.start();

        _this4.LLQID_liquidMovingTweenScale.chain(_this4.LLQID_liquidMovingTween, _this4.LLQID_liquidMovingTweenShape);

        _this4.LLQID_liquidMovingTween.chain(_this4.LLQID_liquidMovingTweenScaleBackToBegin);
      });
    });
  }
}), _ref));
var LLQID_IntroContainer = new Vue({
  el: '#LLQID_IntroContainer',
  data: {
    LLQID_IntroBgImg: '',
    LLQID_IntroBgPath: 'img',
    LLQID_IntroBgBehindImg: '',
    LLQID_IntroBgNextSceneImg: '',
    LLQID_IntroContainerShow: false,
    LLQID_IntroContainerInnerShow: false,
    LLQID_IntroScene: '',
    LLQID_IntroMessages: [],
    LLQID_IntroMessageBehind: '',
    LLQID_IntroScene1Played: false,
    LLQID_IntroSceneTween: ''
  },
  watch: {
    'LLQID_IntroContainerShow': function LLQID_IntroContainerShow(val) {
      if (!val) {
        this.LLQID_IntroSceneTween.kill();
      }
    }
  },
  methods: {
    playScene: function playScene(sceneNumber, changeNextBg, done) {
      var _this5 = this;

      LLQID_mainContent.LLQID_mainContentShow = false;
      this.LLQID_IntroContainerShow = true; // intro rendered

      this.$nextTick(function () {
        _this5.$el.classList.add("scene".concat(sceneNumber));

        _this5.LLQID_IntroContainerInnerShow = true; // messages rendered

        _this5.$nextTick(function () {
          var tl = _this5.LLQID_IntroSceneTween = new TimelineMax({}); // background

          var elem_introBg = _this5.$refs.LLQID_IntroBg;
          var elem_introBgInner = _this5.$refs.LLQID_IntroBgInner;
          var elem_introBgOverlay = _this5.$refs.LLQID_IntroBgOverlay;
          var elem_introBgBehind = _this5.$refs.LLQID_IntroBgBehind;
          var elem_introBgBehindInner = _this5.$refs.LLQID_IntroBgBehindInner;
          var elem_introBgNextScene = _this5.$refs.LLQID_IntroBgNextScene; // message

          var elem_msgContainer = _this5.$refs.LLQID_IntroMessageContainer;
          var elem_msgLiquid = _this5.$refs.LLQID_IntroMessageLiquid;
          var elem_msg0 = _this5.$refs.LLQID_IntroMessage0;
          var elem_msg1 = _this5.$refs.LLQID_IntroMessage1;
          var elem_msg2 = _this5.$refs.LLQID_IntroMessage2;
          var elem_msgBehind = _this5.$refs.LLQID_IntroMessageBehind;
          elem_msgLiquid.appendChild(LLQID_liquidContainer.$el);

          if (!_this5.LLQID_IntroScene1Played) {
            _this5.LLQID_IntroScene1Played = true;
            LLQID_header.$el.style.opacity = 1;
            tl.to(elem_introBg, .3, {
              transform: 'skew(-5deg)'
            }).to(elem_introBgInner, .3, {
              transform: 'skew(5deg)'
            }, '-=.2').to(elem_introBg, 1, {
              left: '0',
              right: '0',
              opacity: 1,
              ease: Power4.easeInOut
            });
          } else {
            tl.to(elem_introBg, 0, {
              left: '0',
              right: '0'
            });
          }

          tl.to(elem_introBg, .2, {
            transform: 'skew(0)',
            margin: 0
          }).to(elem_introBgInner, .2, {
            transform: 'skew(0)'
          }, '-=.2').to(elem_introBgOverlay, 1, {
            opacity: 0,
            onComplete: function onComplete() {
              LLQID_liquidContainer.LLQID_liquidMoving();
              changeNextBg();
            }
          }, '-= 0.2').fromTo(elem_msg0, .5, {
            opacity: 0,
            x: 100
          }, {
            opacity: 1,
            x: 0
          }).fromTo(elem_msg1, .5, {
            opacity: 0,
            x: -100
          }, {
            opacity: 1,
            x: 0
          }).to(elem_msg0, .5, {
            x: -30,
            ease: Power4.easeInOut
          }, '-=.2').to(elem_msg1, .5, {
            x: -30,
            ease: Power4.easeInOut
          }, '-=.5').to(elem_msgContainer, .5, {
            marginLeft: -(elem_msgContainer.clientWidth * 0.5 - elem_msgLiquid.clientWidth * 0.5),
            ease: Power4.easeInOut
          }, '-=.4').to(elem_introBg, .5, {
            right: '50%',
            left: '-100px',
            ease: Power4.easeInOut
          }, '-=.3').to(elem_introBgBehind, .5, {
            left: '0',
            right: '-100px',
            ease: Power4.easeInOut
          }, '-=.5').to(elem_msg0, .5, {
            x: 0
          }, '-=.5').to(elem_msg1, .5, {
            x: 0
          }, '-=.5').to(elem_introBg, .2, {
            transform: 'skew(-5deg)'
          }).to(elem_introBgInner, .2, {
            transform: 'skew(5deg)'
          }, '-=.2').to(elem_msgLiquid, .5, {
            width: '2rem',
            height: '2rem'
          }, '-=.5').fromTo(elem_msg2, .5, {
            opacity: 0,
            x: -100
          }, {
            opacity: 1,
            x: 0
          }, '-=.5').fromTo(elem_msgBehind, .5, {
            opacity: 0,
            x: -20,
            marginLeft: 0
          }, {
            opacity: 1,
            x: 0,
            marginLeft: elem_msgLiquid.clientWidth * 0.5,
            ease: Power4.easeInOut
          }, '-=.3').to(elem_introBgBehind, .5, {
            left: '30%',
            right: '-100px',
            ease: Power4.easeInOut
          }, '-=.5').to(elem_msg0, 3, {
            x: 10
          }, '-=.4').to(elem_msg1, 3, {
            x: -15
          }, '-=3').to(elem_msg2, 3, {
            x: 5
          }, '-=3').to(elem_msgBehind, 3, {
            x: 10
          }, '-=3').to(elem_introBgBehind, 0, {
            transform: 'skew(-5deg)'
          }).to(elem_introBgBehindInner, 0, {
            transform: 'skew(5deg)'
          }).to(elem_introBg, 1, {
            right: '100%',
            left: '-100px',
            opacity: 0,
            ease: Power4.easeInOut
          }).to(elem_introBgBehind, 1, {
            left: '100%',
            right: '-100px',
            backgroundPosition: '0 -20%',
            opacity: 0,
            ease: Power4.easeInOut
          }, '-=1').to(elem_msgContainer, 1, {
            marginLeft: -(window.innerWidth * 0.5),
            opacity: 0,
            ease: Power4.easeInOut
          }, '-=1').to(elem_msgBehind, 1, {
            marginLeft: window.innerWidth * 0.5,
            opacity: 0,
            ease: Power4.easeInOut
          }, '-=1').to(elem_introBgNextScene, 1, {
            opacity: 0.5,
            onComplete: function onComplete() {
              _this5.LLQID_IntroContainerInnerShow = false;
              LLQID_liquidContainer.LLQID_liquidGooeyShow = false;
              LLQID_liquidContainer.LLQID_liquidMovingShow = false;
              LLQID_liquidContainer.LLQID_liquidBrandShow = false;
              document.body.appendChild(LLQID_liquidContainer.$el);

              _this5.$el.classList.remove("scene".concat(sceneNumber));

              done();
            }
          }, '-=1'); // TweenLite.to(tl, 5, {progress:1});
        });
      });
    },
    scene1: function scene1() {
      var _this6 = this;

      this.LLQID_IntroBgImg = {
        'background-image': "url(./".concat(this.LLQID_IntroBgPath, "/introBg_1_1.jpg)")
      };
      this.LLQID_IntroBgBehindImg = {
        'background-image': "url(./".concat(this.LLQID_IntroBgPath, "/introBg_1_2.jpg)")
      };
      this.LLQID_IntroMessages = ['Where', 'shopping', 'meets'];
      this.LLQID_IntroMessageBehind = 'banking';
      this.playScene('1', function () {
        _this6.LLQID_IntroBgNextSceneImg = {
          'background-image': "url(./".concat(_this6.LLQID_IntroBgPath, "/introBg_2_1.jpg)")
        };
      }, function () {
        _this6.scene2();
      });
    },
    scene2: function scene2() {
      var _this7 = this;

      this.LLQID_IntroBgImg = {
        'background-image': "url(./".concat(this.LLQID_IntroBgPath, "/introBg_2_1.jpg)")
      };
      this.LLQID_IntroBgBehindImg = {
        'background-image': "url(./".concat(this.LLQID_IntroBgPath, "/introBg_2_2.jpg)")
      };
      this.LLQID_IntroMessages = ['Where', 'technology', 'meets'];
      this.LLQID_IntroMessageBehind = 'people';
      this.playScene('2', function () {
        _this7.LLQID_IntroBgNextSceneImg = {
          'background-image': "url(./".concat(_this7.LLQID_IntroBgPath, "/introBg_3_1.jpg)")
        };
      }, function () {
        _this7.scene3();
      });
    },
    scene3: function scene3() {
      var _this8 = this;

      this.LLQID_IntroBgImg = {
        'background-image': "url(./".concat(this.LLQID_IntroBgPath, "/introBg_3_1.jpg)")
      };
      this.LLQID_IntroBgBehindImg = {
        'background-image': "url(./".concat(this.LLQID_IntroBgPath, "/introBg_3_2.jpg)")
      };
      this.LLQID_IntroMessages = ['Where', 'money', 'meets'];
      this.LLQID_IntroMessageBehind = 'life';
      this.playScene('3', function () {
        _this8.LLQID_IntroBgNextSceneImg = {
          'background-image': "none"
        };
      }, function () {
        LLQID_mainContent.show();
      });
    }
  },
  mounted: function mounted() {
    if (window.innerWidth < 991) {
      this.LLQID_IntroBgPath = 'img/sm';
    }
  }
});
var LLQID_mainContent = new Vue({
  el: '#LLQID_mainContent',
  data: {
    LLQID_mainContentShow: false,
    LLQID_mainContentBgBehindImg: '',
    LLQID_mainContentBgFrontImg: '',
    LLQID_mainContentBgFrontTransform: '',
    LLQID_mainContentBGs: [],
    LLQID_mainContentPathBGs: 'img',
    LLQID_mainContentDescsHight: [],
    LLQID_mainContentItemsTotal: 0,
    LLQID_mainContentIndexCurrent: 0,
    LLQID_mainContentIndexPrev: 0,
    LLQID_mainContentBgChanging: false,
    LLQID_mainContentBgChangingTimeout: '',
    LLQID_mainContentPreventMouseWheel: false,
    LLQID_liquidMovingShowAppended: false,
    LLQID_resizeTimer: '',
    LLQID_mainContentScrollSignShow: true
  },
  watch: {
    'LLQID_mainContentShow': function LLQID_mainContentShow(val) {
      if (!val) {
        this.LLQID_mainContentPreventMouseWheel = true;
      } else {
        this.LLQID_mainContentPreventMouseWheel = false;
      }
    }
  },
  methods: {
    expand: function expand(index) {
      var _this9 = this;

      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.LLQID_mainContentBgChanging) {
        if (window.innerWidth < 991) {
          this.LLQID_mainContentPathBGs = 'img/sm';
        } else {
          this.LLQID_mainContentPathBGs = 'img';
        }

        this.LLQID_mainContentIndexCurrent = index;

        var changingBGImage = function changingBGImage(frontImgIndex) {
          _this9.LLQID_mainContentBgFrontImg = {
            backgroundImage: "url(./".concat(_this9.LLQID_mainContentPathBGs, "/").concat(_this9.LLQID_mainContentBGs[frontImgIndex], ")")
          };
        };

        if (index + 1 <= this.LLQID_mainContentItemsTotal && index >= 0) {
          if (initial) {
            changingBGImage(index, index + 1);
            LLQID_header.$el.style.opacity = 1;
          }

          if (this.LLQID_mainContentIndexPrev !== index) {
            this.LLQID_mainContentBgChanging = true;
            this.$el.classList.add('isChanging');
            this.LLQID_mainContentBgBehindImg = {
              backgroundImage: "url(./".concat(this.LLQID_mainContentPathBGs, "/").concat(this.LLQID_mainContentBGs[index], ")")
            };
            var elem_bgFront = this.$refs.LLQID_mainContentBgFront;
            var bgFrontPosY = window.innerHeight;

            if (index > this.LLQID_mainContentIndexPrev) {
              bgFrontPosY = -bgFrontPosY;
            }

            TweenLite.to(elem_bgFront, 0.6, {
              y: bgFrontPosY,
              onComplete: function onComplete() {
                TweenLite.to(elem_bgFront, 0, {
                  y: 0
                });
                changingBGImage(index);
                _this9.LLQID_mainContentIndexPrev = index;
                _this9.LLQID_mainContentBgChanging = false;

                _this9.$el.classList.remove('isChanging');
              }
            });
          }

          var elem_items = document.querySelectorAll('.LLQID_mainContentItem');
          var elem_descs = document.querySelectorAll('.LLQID_mainContentDesc');
          var elem_itemsTotal = elem_items.length;
          elem_items.forEach(function (elem_item) {
            elem_item.classList.remove('active');
          });
          elem_descs.forEach(function (elem_desc) {
            elem_desc.style.height = 0;
          });
          this.$refs["LLQID_mainContentItem".concat(index)].classList.add('active');
          this.$refs["LLQID_mainContentDesc".concat(index)].style.height = this.LLQID_mainContentDescsHight[index] + 'px';

          if (index + 1 === elem_itemsTotal) {
            this.LLQID_mainContentScrollSignShow = false;
          } else {
            this.LLQID_mainContentScrollSignShow = true;
          }
        }

        if (index === 0) {
          if (!this.LLQID_liquidMovingShowAppended) {
            this.$refs.LLQID_mainContentItems.appendChild(LLQID_liquidContainer.$el);
            this.LLQID_liquidMovingShowAppended = true;
          }

          LLQID_liquidContainer.LLQID_liquidMovingShow = true;
          LLQID_liquidContainer.$nextTick(function () {
            LLQID_liquidContainer.LLQID_liquidMoving();
          });
        } else {
          LLQID_liquidContainer.LLQID_liquidGooeyShow = false;
          LLQID_liquidContainer.LLQID_liquidMovingShow = false;
        }
      }
    },
    getItemData: function getItemData() {
      var _this10 = this;

      this.LLQID_mainContentDescsHight = [];
      this.LLQID_mainContentItemsTotal = 0;
      var elem_descs = document.querySelectorAll('.LLQID_mainContentDescInner');
      elem_descs.forEach(function (elem_desc) {
        _this10.LLQID_mainContentDescsHight.push(elem_desc.clientHeight);

        _this10.LLQID_mainContentBGs.push(elem_desc.dataset.bg);

        _this10.LLQID_mainContentItemsTotal += 1;
      });
      this.expand(this.LLQID_mainContentIndexCurrent, true);
    },
    show: function show() {
      var _this11 = this;

      this.LLQID_mainContentShow = true;
      LLQID_header.hamburgerMenuShow = true;
      LLQID_IntroContainer.LLQID_IntroContainerShow = false;
      this.$nextTick(function () {
        _this11.$el.style.opacity = 1;

        _this11.getItemData();
      });
    },
    mouseWheelHandler: function mouseWheelHandler(e) {
      if (!this.LLQID_mainContentPreventMouseWheel) {
        if (!this.LLQID_mainContentBgChanging) {
          if (e.deltaY > 0) {
            if (this.LLQID_mainContentIndexCurrent + 1 <= this.LLQID_mainContentItemsTotal) {
              this.LLQID_mainContentIndexCurrent += 1;
            } else {
              this.LLQID_mainContentIndexCurrent = this.LLQID_mainContentItemsTotal - 1;
            }
          } else if (e.deltaY < 0) {
            if (this.LLQID_mainContentIndexCurrent >= 0) {
              this.LLQID_mainContentIndexCurrent -= 1;
            } else {
              this.LLQID_mainContentIndexCurrent = 0;
            }
          }

          this.expand(this.LLQID_mainContentIndexCurrent);
        }
      }
    },
    resizeHandler: function resizeHandler() {
      var _this12 = this;

      clearTimeout(this.LLQID_resizeTimer);
      this.LLQID_resizeTimer = setTimeout(function () {
        _this12.getItemData();
      }, 650);
    }
  },
  mounted: function mounted() {
    window.addEventListener("mousewheel", this.mouseWheelHandler, true);
    window.addEventListener("DOMMouseScroll", this.mouseWheelHandler, true);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("mousewheel", this.mouseWheelHandler, true);
    window.removeEventListener("DOMMouseScroll", this.mouseWheelHandler, true);
  }
});
var LLQID_header = new Vue({
  el: '#LLQID_header',
  data: {
    hamburgerMenuShow: false,
    mainNavigationShow: false
  },
  methods: {
    toggleMainNavigation: function toggleMainNavigation() {
      this.mainNavigationShow = !this.mainNavigationShow;

      if (this.mainNavigationShow) {
        this.$refs.LLQID_headerHamburgerBtn.classList.add('active');

        _html.classList.add('LLQID_headerSide_show');

        LLQID_mainContent.LLQID_mainContentPreventMouseWheel = true;
      } else {
        this.$refs.LLQID_headerHamburgerBtn.classList.remove('active');

        _html.classList.remove('LLQID_headerSide_show');

        LLQID_mainContent.LLQID_mainContentPreventMouseWheel = false;
      }
    },
    handleClickBrand: function handleClickBrand() {
      LLQID_mainContent.show();
    }
  }
});
window.addEventListener('resize', function () {
  LLQID_mainContent.resizeHandler();
  detectScreenRatio();
});
detectScreenRatio();