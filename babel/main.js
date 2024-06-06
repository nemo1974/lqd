let _html = document.documentElement
let isiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
let preloadImages = [
  './img/sm/mainContentBg_1.jpg',
  './img/sm/mainContentBg_2.jpg',
  './img/sm/mainContentBg_3.jpg',
  './img/sm/mainContentBg_4.jpg',
  './img/sm/introBg_1_1.jpg',
  './img/sm/introBg_1_2.jpg',
  './img/sm/introBg_2_2.jpg',
  './img/sm/introBg_3_1.jpg',
  './img/sm/introBg_3_2.jpg'
]
if (window.innerWidth > 992) {
  preloadImages = [
    ...preloadImages,
    './img/mainContentBg_1.jpg',
    './img/mainContentBg_2.jpg',
    './img/mainContentBg_3.jpg',
    './img/mainContentBg_4.jpg',
    './img/introBg_1_1.jpg',
    './img/introBg_1_2.jpg',
    './img/introBg_2_2.jpg',
    './img/introBg_3_1.jpg',
    './img/introBg_3_2.jpg'
  ]
}
if (isiOS) {
  _html.classList.add('isiOS')
}
function detectScreenRatio () {
  let wH = window.innerHeight
  let wW = window.innerWidth
  if (wW < 767) {
    _html.classList.remove('isScreenPortrait', 'isScreenLandscape', 'isScreenSquare')
    if (wH > wW) {
      _html.classList.add('isScreenPortrait')
    } else if (wH < wW) {
      _html.classList.add('isScreenLandscape')
    } else {
      _html.classList.add('isScreenSquare')
    }
  }
}
function LLQID_getRandomInt (min, max, int = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + int)) + min;
}
const LLQID_liquidContainer = new Vue({
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
    'LLQID_liquidGooeyShow' (val) {
      if (!val) {
        this.$nextTick(() => {
          this.onHidden()
        })
      }
    },
    'LLQID_liquidBrandShow' (val) {
      if (!val) {
        this.$nextTick(() => {
          this.onHiddenWithBrand()
        })
      }
    }
  },
  watch: {
    'LLQID_liquidMovingShow' (val) {
      if (!val) {
        this.LLQID_liquidMovingTween.stop()
        this.LLQID_liquidMovingTweenScale.stop()
        this.LLQID_liquidMovingTweenShape.stop()
      }
    }
  },
  methods: {
    onHidden () {},
    onHiddenWithBrand () {},
    afterEnter (type) {
      switch (type) {
        case 'LLQID_liquidBrand':
          this.LLQID_liquidGooeyShow = false
          this.LLQID_liquidMovingShow = false
          break;
      }

    },
    LLQID_liquidGooey (endWithBrand) {
      if (endWithBrand) {
        const preloadImagesFunc = () => {
          this.LLQID_PreloadImagesInitialed = true
          let preloadImagesTotal = preloadImages.length
          let preloadImagesTotalComplete = 0
          preloadImages.forEach(preloadImageSrc => {
            let preloadImage = new Image()
            preloadImage.onload = () => {
              preloadImagesTotalComplete += 1
              if (preloadImagesTotalComplete === preloadImagesTotal) {
                this.LLQID_PreloadImagesDone = true
              }
            }
            preloadImage.src = preloadImageSrc
          });
        }
        if (!this.LLQID_PreloadImagesInitialed) {
          preloadImagesFunc()
        }
        if (this.LLQID_PreloadImagesTimer) {
          clearTimeout(this.LLQID_PreloadImagesTimer)
        }

        this.LLQID_PreloadImagesTimer = setTimeout(() => {
          if (this.LLQID_PreloadImagesDone) {
            this.LLQID_liquidBrandShow = true
            this.$nextTick(() => {
              setTimeout(() => {
                this.$refs.LLQID_liquidBrand.classList.add('showText')
                setTimeout(() => {
                  this.$refs.LLQID_liquidBrand.classList.add('brandFlyOut')
                  setTimeout(() => {
                    this.LLQID_liquidGooeyShow = false
                    this.LLQID_liquidMovingShow = false
                    this.LLQID_liquidBrandShow = false
                    LLQID_IntroContainer.scene1()
                  }, 1200);
                }, 1200);
              }, 1200);
            })
          } else {
            this.LLQID_liquidGooey(true)
          }
        }, 3000);

      }
    },
    LLQID_liquidMoving (endWithBrand = false) {
      if (endWithBrand) {
        LLQID_IntroContainer.LLQID_IntroContainerShow = false
        LLQID_mainContent.LLQID_mainContentShow = false
        document.body.appendChild(this.$el)
      }
      this.LLQID_liquidMovingShow = true
      this.LLQID_liquidGooeyShow = false
      this.$nextTick(() => {
        this.$el.style.opacity = 1

        let duration = 600
        let containers = [ 'LLQID_liquidMovingFromLeftTop', 'LLQID_liquidMovingFromRightTop', 'LLQID_liquidMovingFromRightBottom', 'LLQID_liquidMovingFromLeftBottom' ]

        containers.forEach((container, containerIndex) => {
          let posL
          let posT

          let posRandom = LLQID_getRandomInt(100, 250, 50)
          switch (container) {
            case 'LLQID_liquidMovingFromLeftTop':
              posL = -posRandom
              posT = -posRandom
              break;
            case 'LLQID_liquidMovingFromRightTop':
              posL = posRandom
              posT = -posRandom
              break;
            case 'LLQID_liquidMovingFromRightBottom':
              posL = posRandom
              posT = posRandom
              break;
            case 'LLQID_liquidMovingFromLeftBottom':
              posL = -posRandom
              posT = posRandom
              break;
          }

          this.LLQID_liquidMovingTweenScale = KUTE.fromTo(`#${container}`,
          { // from
            left: posL,
            top: posT,
            scale: 0,
            opacity: 0
          },
          { // to
            left: posL,
            top: posT,
            scale: 1,
            opacity: 1
          },
          { // options
            duration: duration
          })

          this.LLQID_liquidMovingTween = KUTE.fromTo(`#${container}`,
          { // from
            left: posL,
            top: posT
          },
          { // to
            left: 0,
            top: 0,
          },
          {
            duration: duration,
            complete: () => {
              if (containerIndex === 0) {
                this.LLQID_liquidGooeyShow = true
                this.LLQID_liquidMovingShow = false
                this.LLQID_liquidBrandShow = false
                if (endWithBrand) {
                  this.LLQID_liquidGooeyMsgShow = true
                } else {
                  this.LLQID_liquidGooeyMsgShow = false
                }
                this.$nextTick(() => {
                  this.LLQID_liquidGooey(endWithBrand)
                })
              }
            }
          })


          this.LLQID_liquidMovingTweenShape = KUTE.to(`#${container} .LLQID_liquidMovingShapeBegin path`,
          { path: `#${container} .LLQID_liquidMovingShape path` },
          {
            morphPrecision: 4,
            duration: duration
          })

          this.LLQID_liquidMovingTweenScaleBackToBegin = KUTE.to(`#${container} .LLQID_liquidMovingShapeBegin path`,
          { path: `#${container} .LLQID_liquidMovingShapeBegin path` },
          {
            morphPrecision: 4,
            duration: duration * 0.5
          })

          this.LLQID_liquidMovingTweenScale.start()
          this.LLQID_liquidMovingTweenScale.chain(this.LLQID_liquidMovingTween, this.LLQID_liquidMovingTweenShape)
          this.LLQID_liquidMovingTween.chain(this.LLQID_liquidMovingTweenScaleBackToBegin)

        })

      })
    }
  },
  // mounted () {
    // this.LLQID_liquidMoving(true)
  // }
})
const LLQID_IntroContainer = new Vue({
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
    LLQID_IntroSceneTween: '',
  },
  watch: {
    'LLQID_IntroContainerShow' (val) {
      if (!val) {
        this.LLQID_IntroSceneTween.kill()
      }
    }
  },
  methods: {
    playScene (sceneNumber, changeNextBg, done) {
      LLQID_mainContent.LLQID_mainContentShow = false
      this.LLQID_IntroContainerShow = true
      // intro rendered
      this.$nextTick(() => {

        this.$el.classList.add(`scene${sceneNumber}`)
        this.LLQID_IntroContainerInnerShow = true

        // messages rendered
        this.$nextTick(() => {

          let tl = this.LLQID_IntroSceneTween = new TimelineMax({})

          // background
          let elem_introBg = this.$refs.LLQID_IntroBg
          let elem_introBgInner = this.$refs.LLQID_IntroBgInner
          let elem_introBgOverlay = this.$refs.LLQID_IntroBgOverlay
          let elem_introBgBehind = this.$refs.LLQID_IntroBgBehind
          let elem_introBgBehindInner = this.$refs.LLQID_IntroBgBehindInner
          let elem_introBgNextScene = this.$refs.LLQID_IntroBgNextScene

          // message
          let elem_msgContainer = this.$refs.LLQID_IntroMessageContainer
          let elem_msgLiquid = this.$refs.LLQID_IntroMessageLiquid
          let elem_msg0 = this.$refs.LLQID_IntroMessage0
          let elem_msg1 = this.$refs.LLQID_IntroMessage1
          let elem_msg2 = this.$refs.LLQID_IntroMessage2
          let elem_msgBehind = this.$refs.LLQID_IntroMessageBehind

          elem_msgLiquid.appendChild(LLQID_liquidContainer.$el)

          if (!this.LLQID_IntroScene1Played) {
            this.LLQID_IntroScene1Played = true
            LLQID_header.$el.style.opacity = 1
            tl
            .to(elem_introBg, .3 , {transform: 'skew(-5deg)'})
            .to(elem_introBgInner, .3 , {transform: 'skew(5deg)'}, '-=.2')
            .to(elem_introBg, 1 , {left: '0', right: '0', opacity: 1, ease: Power4.easeInOut})
          } else {
            tl
            .to(elem_introBg, 0 , {left: '0', right: '0'})
          }

          tl
          .to(elem_introBg, .2 , {transform: 'skew(0)', margin: 0})
          .to(elem_introBgInner, .2 , {transform: 'skew(0)'}, '-=.2')
          .to(elem_introBgOverlay, 1 , {
            opacity: 0,
            onComplete: () => {
              LLQID_liquidContainer.LLQID_liquidMoving()
              changeNextBg()
            }
          }, '-= 0.2')
          .fromTo(elem_msg0, .5 , {opacity: 0, x: 100}, {opacity: 1, x: 0})
          .fromTo(elem_msg1, .5 , {opacity: 0, x: -100}, {opacity: 1, x: 0})
          .to(elem_msg0, .5 , {x: -30, ease: Power4.easeInOut}, '-=.2')
          .to(elem_msg1, .5 , {x: -30, ease: Power4.easeInOut}, '-=.5')
          .to(elem_msgContainer, .5 , {
            marginLeft: -((elem_msgContainer.clientWidth * 0.5) - (elem_msgLiquid.clientWidth * 0.5)),
            ease: Power4.easeInOut
          }, '-=.4')
          .to(elem_introBg, .5 , {right: '50%',left: '-100px', ease: Power4.easeInOut}, '-=.3')
          .to(elem_introBgBehind, .5 , {left: '0', right: '-100px', ease: Power4.easeInOut}, '-=.5')
          .to(elem_msg0, .5 , {x: 0}, '-=.5')
          .to(elem_msg1, .5 , {x: 0}, '-=.5')
          .to(elem_introBg, .2 , {transform: 'skew(-5deg)'})
          .to(elem_introBgInner, .2 , {transform: 'skew(5deg)'}, '-=.2')
          .to(elem_msgLiquid, .5 , {width: '2rem', height: '2rem'}, '-=.5')
          .fromTo(elem_msg2, .5 , {opacity: 0, x: -100}, {opacity: 1, x: 0}, '-=.5')
          .fromTo(elem_msgBehind, .5 , {opacity: 0, x: -20, marginLeft: 0}, {opacity: 1, x: 0, marginLeft: elem_msgLiquid.clientWidth * 0.5, ease: Power4.easeInOut}, '-=.3')
          .to(elem_introBgBehind, .5 , {left: '30%', right: '-100px', ease: Power4.easeInOut}, '-=.5')
          .to(elem_msg0, 3 , {x: 10}, '-=.4')
          .to(elem_msg1, 3 , {x: -15}, '-=3')
          .to(elem_msg2, 3 , {x: 5}, '-=3')
          .to(elem_msgBehind, 3 ,{x: 10}, '-=3')
          .to(elem_introBgBehind, 0 , {transform: 'skew(-5deg)'})
          .to(elem_introBgBehindInner, 0 , {transform: 'skew(5deg)'})
          .to(elem_introBg, 1 , {right: '100%',left: '-100px', opacity: 0, ease: Power4.easeInOut})
          .to(elem_introBgBehind, 1 , {left: '100%', right: '-100px', backgroundPosition: '0 -20%', opacity: 0, ease: Power4.easeInOut}, '-=1')
          .to(elem_msgContainer, 1 , {marginLeft: -(window.innerWidth * 0.5), opacity: 0, ease: Power4.easeInOut}, '-=1')
          .to(elem_msgBehind, 1 , {
            marginLeft: window.innerWidth * 0.5,
            opacity: 0,
            ease: Power4.easeInOut
          }, '-=1')
          .to(elem_introBgNextScene, 1 ,{
            opacity: 0.5,
            onComplete: () => {
              this.LLQID_IntroContainerInnerShow = false
              LLQID_liquidContainer.LLQID_liquidGooeyShow = false
              LLQID_liquidContainer.LLQID_liquidMovingShow = false
              LLQID_liquidContainer.LLQID_liquidBrandShow = false
              document.body.appendChild(LLQID_liquidContainer.$el)
              this.$el.classList.remove(`scene${sceneNumber}`)
              done()
            }
          }, '-=1')

          // TweenLite.to(tl, 5, {progress:1});

        })

      })
    },
    scene1 () {
      this.LLQID_IntroBgImg = {
        'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_1_1.jpg)`
      }
      this.LLQID_IntroBgBehindImg = {
        'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_1_2.jpg)`
      }
      this.LLQID_IntroMessages = [
        'Where',
        'shopping',
        'meets'
      ]
      this.LLQID_IntroMessageBehind = 'banking'
      this.playScene(
        '1',
        ()=> {
          this.LLQID_IntroBgNextSceneImg = {
            'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_2_1.jpg)`
          }
        },
        ()=> {
          this.scene2()
        }
      )

    },
    scene2 () {
      this.LLQID_IntroBgImg = {
        'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_2_1.jpg)`
      }
      this.LLQID_IntroBgBehindImg = {
        'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_2_2.jpg)`
      }
      this.LLQID_IntroMessages = [
        'Where',
        'technology',
        'meets'
      ]
      this.LLQID_IntroMessageBehind = 'people'
      this.playScene(
        '2',
        ()=> {
          this.LLQID_IntroBgNextSceneImg = {
            'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_3_1.jpg)`
          }
        },
        ()=> {
          this.scene3()
        }
      )

    },
    scene3 () {
      this.LLQID_IntroBgImg = {
        'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_3_1.jpg)`
      }
      this.LLQID_IntroBgBehindImg = {
        'background-image' : `url(./${this.LLQID_IntroBgPath}/introBg_3_2.jpg)`
      }
      this.LLQID_IntroMessages = [
        'Where',
        'money',
        'meets'
      ]
      this.LLQID_IntroMessageBehind = 'life'
      this.playScene(
        '3',
        ()=> {
          this.LLQID_IntroBgNextSceneImg = {
            'background-image' : `none`
          }
        },
        ()=> {
          LLQID_mainContent.show()
        }
      )

    }
  },
  mounted () {
    if (window.innerWidth < 991) {
      this.LLQID_IntroBgPath = 'img/sm'
    }
  }
})
const LLQID_mainContent = new Vue({
  el: '#LLQID_mainContent',
  data: {
    LLQID_mainContentShow: false,
    LLQID_mainContentBgBehindImg: '',
    LLQID_mainContentBgFrontImg: '',
    LLQID_mainContentBgFrontTransform: '',
    LLQID_mainContentBGs:[],
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
    'LLQID_mainContentShow' (val) {
      if (!val) {
        this.LLQID_mainContentPreventMouseWheel = true
      } else {
        this.LLQID_mainContentPreventMouseWheel = false
      }
    }
  },
  methods: {
    expand (index, initial = false) {
      if (!this.LLQID_mainContentBgChanging) {
        if (window.innerWidth < 991) {
          this.LLQID_mainContentPathBGs = 'img/sm'
        } else {
          this.LLQID_mainContentPathBGs = 'img'
        }
        this.LLQID_mainContentIndexCurrent = index
        const changingBGImage = (frontImgIndex) => {
          this.LLQID_mainContentBgFrontImg = {
            backgroundImage: `url(./${this.LLQID_mainContentPathBGs}/${this.LLQID_mainContentBGs[frontImgIndex]})`
          }
        }

        if (index + 1 <= this.LLQID_mainContentItemsTotal && index >= 0) {

          if (initial) {
            changingBGImage(index, index + 1)
            LLQID_header.$el.style.opacity = 1
          }
          if (this.LLQID_mainContentIndexPrev !== index) {
            this.LLQID_mainContentBgChanging = true
            this.$el.classList.add('isChanging')
            this.LLQID_mainContentBgBehindImg = {
              backgroundImage: `url(./${this.LLQID_mainContentPathBGs}/${this.LLQID_mainContentBGs[index]})`
            }
            let elem_bgFront = this.$refs.LLQID_mainContentBgFront
            let bgFrontPosY = window.innerHeight
            if (index > this.LLQID_mainContentIndexPrev) {
              bgFrontPosY = -bgFrontPosY
            }
            TweenLite.to(elem_bgFront, 0.6, {
              y: bgFrontPosY,
              onComplete: () => {
                TweenLite.to(elem_bgFront, 0, {y:0})
                changingBGImage(index)
                this.LLQID_mainContentIndexPrev = index
                this.LLQID_mainContentBgChanging = false
                this.$el.classList.remove('isChanging')
              }
            })
          }
          let elem_items = document.querySelectorAll('.LLQID_mainContentItem')
          let elem_descs = document.querySelectorAll('.LLQID_mainContentDesc')
          let elem_itemsTotal = elem_items.length

          elem_items.forEach(elem_item => {
            elem_item.classList.remove('active')
          });
          elem_descs.forEach(elem_desc => {
            elem_desc.style.height = 0
          });
          this.$refs[`LLQID_mainContentItem${index}`].classList.add('active')
          this.$refs[`LLQID_mainContentDesc${index}`].style.height = this.LLQID_mainContentDescsHight[index] + 'px'

          if (index + 1 === elem_itemsTotal) {
            this.LLQID_mainContentScrollSignShow = false
          } else {
            this.LLQID_mainContentScrollSignShow = true
          }

        }

        if (index === 0) {
          if (!this.LLQID_liquidMovingShowAppended) {
            this.$refs.LLQID_mainContentItems.appendChild(LLQID_liquidContainer.$el)
            this.LLQID_liquidMovingShowAppended = true
          }
          LLQID_liquidContainer.LLQID_liquidMovingShow = true
          LLQID_liquidContainer.$nextTick(() => {
            LLQID_liquidContainer.LLQID_liquidMoving()
          })
        } else {
          LLQID_liquidContainer.LLQID_liquidGooeyShow = false
          LLQID_liquidContainer.LLQID_liquidMovingShow = false
        }
      }

    },
    getItemData () {
      this.LLQID_mainContentDescsHight = []
      this.LLQID_mainContentItemsTotal = 0

      let elem_descs = document.querySelectorAll('.LLQID_mainContentDescInner')
      elem_descs.forEach(elem_desc => {
        this.LLQID_mainContentDescsHight.push(elem_desc.clientHeight)
        this.LLQID_mainContentBGs.push(elem_desc.dataset.bg)
        this.LLQID_mainContentItemsTotal += 1
      });
      this.expand(this.LLQID_mainContentIndexCurrent, true)
    },
    show () {
      this.LLQID_mainContentShow = true
      LLQID_header.hamburgerMenuShow = true
      LLQID_IntroContainer.LLQID_IntroContainerShow = false
      this.$nextTick(()=> {
        this.$el.style.opacity = 1
        this.getItemData()
      })
    },
    mouseWheelHandler (e) {
      if (!this.LLQID_mainContentPreventMouseWheel) {
        if (!this.LLQID_mainContentBgChanging) {
          if (e.deltaY > 0) {
            if (this.LLQID_mainContentIndexCurrent + 1 <= this.LLQID_mainContentItemsTotal) {
              this.LLQID_mainContentIndexCurrent += 1
            } else {
              this.LLQID_mainContentIndexCurrent = this.LLQID_mainContentItemsTotal - 1
            }
          } else if (e.deltaY < 0) {
            if (this.LLQID_mainContentIndexCurrent >= 0) {
              this.LLQID_mainContentIndexCurrent -= 1
            } else {
              this.LLQID_mainContentIndexCurrent = 0
            }
          }
          this.expand(this.LLQID_mainContentIndexCurrent)
        }
      }
    },
    resizeHandler () {
      clearTimeout(this.LLQID_resizeTimer);
      this.LLQID_resizeTimer = setTimeout(() => {
        this.getItemData()
      }, 650);
    }
  },
  mounted () {
    window.addEventListener("mousewheel", this.mouseWheelHandler, true);
    window.addEventListener("DOMMouseScroll", this.mouseWheelHandler, true);
  },
  beforeDestroy () {
    window.removeEventListener("mousewheel", this.mouseWheelHandler, true);
    window.removeEventListener("DOMMouseScroll", this.mouseWheelHandler, true);
  }
})

const LLQID_header = new Vue({
  el: '#LLQID_header',
  data: {
    hamburgerMenuShow: false,
    mainNavigationShow: false,
  },
  methods: {
    toggleMainNavigation () {
      this.mainNavigationShow = !this.mainNavigationShow
      if (this.mainNavigationShow) {
        this.$refs.LLQID_headerHamburgerBtn.classList.add('active')
        _html.classList.add('LLQID_headerSide_show')
        LLQID_mainContent.LLQID_mainContentPreventMouseWheel = true
      } else {
        this.$refs.LLQID_headerHamburgerBtn.classList.remove('active')
        _html.classList.remove('LLQID_headerSide_show')
        LLQID_mainContent.LLQID_mainContentPreventMouseWheel = false
      }
    },
    handleClickBrand () {
      LLQID_mainContent.show()
    }
  }
})

window.addEventListener('resize', () => {
  LLQID_mainContent.resizeHandler()
  detectScreenRatio()
})
detectScreenRatio()