<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Where shopping meets banking | LiveLQID</title>
    <meta name="description" content="LQID is a lifestyle banking and digital commerce ecosystem that makes your life, and your business, run a whole lot smoother." />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" property="og:title" content="Where shopping meets banking | LiveLQID" />
    <meta property="og:description" content="LQID is a lifestyle banking and digital commerce ecosystem that makes your life, and your business, run a whole lot smoother." />
    <meta name="twitter:image" property="og:image" content="https://www.livelqid.com/img/liveLQID_OG.jpg" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="favicon/manifest.json">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#ffffff">
    <link rel="shortcut icon" href="favicon/favicon.ico">
    <meta name="msapplication-config" content="favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="css/main.css"/>
    <script src="./js/loadScript.js"></script>

</head>
<body>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134366180-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-134366180-1');
  </script>

  <?php include './_inc-liquid.php' ?>

  <div id="LLQID_header">
    <div class="LLQID_headerContainer">
      <div class="LLQID_headerInner">
        <div class="LLQID_headerBrand" @click="handleClickBrand">
          <img src="./img/LQID-shape-text.svg">
        </div>
        <div class="LLQID_headerHamburgerBtn" ref="LLQID_headerHamburgerBtn" @click="toggleMainNavigation" v-if="hamburgerMenuShow">
          <div class="LLQID_headerHamburgerBtnInner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="LLQID_headerSide" ref="LLQID_headerSide">
      <div class="LLQID_headerSideContainer">
        <div class="LLQID_headerSideInner">
          <div class="LLQID_headerSideItems">
            <div class="LLQID_headerSideItem">Contact Us</div>
            <div class="LLQID_headerSideItem">
              <div class="isTextSM">
                <b>LQID</b>
              </div>
              <address class="isTextSM">
                Brook Green, 184 Shepherds Bush Road, London W6 7NL, United Kingdom
              </address>
            </div>
            <div class="LLQID_headerSideItem"><a href="mailto:hello@LiveLQID.com" class="isHL1">hello@LiveLQID.com</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="LLQID_IntroContainer" v-if="LLQID_IntroContainerShow">
    <div class="LLQID_IntroBgNextScene" ref="LLQID_IntroBgNextScene" :style="LLQID_IntroBgNextSceneImg"></div>
    <div class="LLQID_IntroContainerInner" v-if="LLQID_IntroContainerInnerShow">
      <div class="LLQID_IntroBgBehind" ref="LLQID_IntroBgBehind" >
        <div class="LLQID_IntroBgBehindInner" ref="LLQID_IntroBgBehindInner" :style="LLQID_IntroBgBehindImg"></div>
      </div>
      <div class="LLQID_IntroBg" ref="LLQID_IntroBg">
        <div class="LLQID_IntroBgInner" ref="LLQID_IntroBgInner" :style="LLQID_IntroBgImg"></div>
        <div class="LLQID_IntroBgOverlay" ref="LLQID_IntroBgOverlay" ></div>
      </div>
      <div class="LLQID_IntroMessageContainer" ref="LLQID_IntroMessageContainer">
        <div class="LLQID_IntroMessages">
          <div class="LLQID_IntroMessage" :ref="`LLQID_IntroMessage${LLQID_IntroMessageIndex}`" v-for="(LLQID_IntroMessage, LLQID_IntroMessageIndex) in LLQID_IntroMessages">{{ LLQID_IntroMessage }}</div>
        </div>
        <div class="LLQID_IntroMessageLiquid" ref="LLQID_IntroMessageLiquid"></div>
      </div>
      <div class="LLQID_IntroMessageBehind" ref="LLQID_IntroMessageBehind">{{LLQID_IntroMessageBehind}}</div>
    </div>
  </div>
  <!-- end #LLQID_IntroContainer -->

  <div id="LLQID_mainContent" v-if="LLQID_mainContentShow">
    <div class="LLQID_mainContentInner">
      <div class="LLQID_mainContentBg" ref="LLQID_mainContentBg">
        <div class="LLQID_mainContentBgBehind" :style="LLQID_mainContentBgBehindImg"></div>
        <div class="LLQID_mainContentBgFront" :style="LLQID_mainContentBgFrontImg" ref="LLQID_mainContentBgFront"></div>
      </div>
      <div class="LLQID_mainContentContainer">
        <div class="LLQID_mainContentItems" ref="LLQID_mainContentItems">
          <?php
          $LLQID_mainContentBGs = array(
            'mainContentBg_1.jpg',
            'mainContentBg_2.jpg',
            'mainContentBg_3.jpg',
            'mainContentBg_4.jpg',
          );
          $LLQID_mainContentTitles = array(
            'WHAT IS LQID',
            'LQID LIFE',
            'LQID PEOPLE',
            'LQID CONNECT'
          );
          for ($i=0; $i < 4 ; $i++): ?>
          <div class="LLQID_mainContentItem" ref="LLQID_mainContentItem<?php echo($i); ?>">
            <div class="LLQID_mainContentTitle">
              <div class="LLQID_mainContentTitleInner" @click="expand(<?php echo($i); ?>)">
                <?php echo($LLQID_mainContentTitles[$i]); ?>
              </div>
            </div>
            <div class="LLQID_mainContentDesc" ref="LLQID_mainContentDesc<?php echo($i); ?>">
              <div class="LLQID_mainContentDescInner" data-bg="<?php echo($LLQID_mainContentBGs[$i]); ?>">
                <?php if ($LLQID_mainContentTitles[$i] === 'WHAT IS LQID') : ?>
                  LQID is a lifestyle banking and digital commerce ecosystem that makes your life, and your business, run a whole lot smoother.
                <?php endif; ?>
                <?php if ($LLQID_mainContentTitles[$i] === 'LQID LIFE') : ?>
                  ShopLQID and BankLQID provide innovative, human-centric solutions that allow people and businesses to thrive in the new digital economy.
                <?php endif; ?>
                <?php if ($LLQID_mainContentTitles[$i] === 'LQID PEOPLE') : ?>
                  We're a people-powered business with technologists, designers and bankers collaborating towards a common goal: making banking and shopping a better experience.
                <?php endif; ?>
                <?php if ($LLQID_mainContentTitles[$i] === 'LQID CONNECT') : ?>
                  <a href="mailto:hello@livelqid.com" class="isHl1 connectLink">Contact</a> the LQID team to discover investor opportunities and how you can become a LQID franchise partner in your local market.
                <?php endif; ?>
              </div>
            </div>
          </div>
          <?php endfor; ?>
        </div>
      </div>
    </div>
    <transition name="LLQID_mainContentScrollSign">
    <div class="LLQID_mainContentScrollSign" v-if="LLQID_mainContentScrollSignShow">
      <div class="LLQID_mainContentScrollSignInner">SCROLL</div>
    </div>
    </transition>
  </div>
  <!-- #LLQID_mainContent -->

  <script>
    // production version, optimized for size and speed
    // var vuejsSrc = 'https://cdn.jsdelivr.net/npm/vue'
    // development version, includes helpful console warnings
    var vuejsSrc = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
    var kutejsSrc  = 'https://cdn.jsdelivr.net/npm/kute.js@1.6.5/kute.min.js'
    var kutejsSvgSrc = 'https://cdn.jsdelivr.net/npm/kute.js@1.6.5/kute-svg.min.js'
    var greensockTimelineMaxSrc = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TimelineMax.min.js'
    var greensockTweenMaxSrc = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js'
    var vuejsDone = false
    var kutejsDone = false
    var greensockDone = false

    loadScript(vuejsSrc, function () {
      vuejsDone = true
      loadMainScript()
    })
    loadScript(kutejsSrc, function () {
      loadScript(kutejsSvgSrc, function () {
        kutejsDone = true
        loadMainScript()
      })
    })
    loadScript(greensockTweenMaxSrc, function () {
      loadScript(greensockTimelineMaxSrc, function () {
        greensockDone = true
        loadMainScript()
      })
    })
    function loadMainScript () {
      if (vuejsDone && kutejsDone && greensockDone) {
        loadScript('./js/main.js', function () {
          LLQID_liquidContainer.LLQID_liquidMoving(true)
          // Skip intro: Comment above and uncomment below this line.
          // LLQID_mainContent.show()
        })
      }
    }
  </script>
</body>
</html>