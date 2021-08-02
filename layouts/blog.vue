<template>
<div class="container">
      <div class="darkmode-background" />
      <div class="darkmode-layer" />
      <div class="navbar">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img>
            <h4>名称</h4>
          </a>
        </div>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <web-font icon="bars" />
        </button>
        <div class="navbar-collapse" :class="{ showMenu }">
          <ul>
            <li
              :class="{
                'blog-active':
                  $route.path === '/' || $route.path.startsWith('/blog')
              }"
              @click="hideMenu"
            >
              <nuxt-link to="/">
                <font-awesome-icon :icon="['fas', 'pen-nib']" />博客
              </nuxt-link>
              <div class="nav-line" />
            </li>
            <li :class="{ 'guestbook-active': $route.path === '/guestbook' }" @click="hideMenu">
              <nuxt-link to="/guestbook">
                <font-awesome-icon :icon="['fas', 'comment-dots']" />留言
              </nuxt-link>
              <div class="nav-line" />
            </li>
            <li :class="{ 'profile-active': $route.path === '/profile' }" @click="hideMenu">
              <nuxt-link to="/profile">
                <font-awesome-icon :icon="['fas', 'user']" />关于
              </nuxt-link>
              <div class="nav-line" />
            </li>
            <li class="dark-tools">
              <a class="dark-mode-btn" title="深色模式" @click="toggleMode">
                <web-font icon="moon" />
              </a>
              <a class="light-mode-btn" title="浅色模式" @click="toggleMode">
                <web-font icon="sun" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nuxt />
      <Footer />
      <div class="fixed-tools">
        <div :class="{ 'show-to-top': showToTop }" class="to-top" @click="toTop">
          <web-font icon="arrow-to-top" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/footer.vue';

export default Vue.extend({
  components: {
    Footer
  },
  data () {
    return {
      year: new Date().getFullYear(),
      showToTop: false,
      showMenu: false
    };
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.showToTop = true;
      } else {
        this.showToTop = false;
      }
    }, {
      passive: true
    });
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu;
    },
    hideMenu () {
      this.showMenu = false;
    },
    toTop () {
      window.scrollTo(0, 0);
    },
    toggleMode () {
      const container = document.body;
      if (container.classList.contains('dark-mode')) {
        container.classList.remove('dark-expaned');
        setTimeout(() => {
          container.classList.remove('dark-notransition');
          container.classList.remove('dark-mode');
          container.classList.add('light-mode');
        }, 10);
        localStorage.removeItem('dark-mode');
      } else {
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
        setTimeout(() => {
          container.classList.add('dark-notransition');
          container.classList.add('dark-expaned');
        }, 300);
        localStorage.setItem('dark-mode', '1');
      }
    }
  },
  head: {
    script: [{
      src: '/darkmode.js'
    }]
  }
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid rgba(234, 234, 234, 0.8);
  z-index: 999;
  box-shadow: 0 0 3px rgba(234, 234, 234, 0.8);
}

.navbar .navbar-header {
  height: 70px;
  padding: 0 15px;
}

.navbar .navbar-brand {
  display: flex;
  align-items: center;
  height: 100%;
  color: #2b2b2b;
  font-size: 18px;
}

.navbar .navbar-brand img {
  height: 46px;
  margin-right: 5px;
}

.navbar .navbar-brand h4 {
  margin: 0;
  font-weight: 400;
}

.navbar .navbar-brand h4 p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
}

.navbar-toggler {
  display: none;
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #ccc;
  cursor: pointer;
  width: 56px;
  height: 40px;
  border-radius: 5px;
  margin: 15px 15px 0;
  font-size: 28px;
  line-height: 1;
  background: #fff;
}

.navbar-toggler:focus {
  outline: none;
}

.navbar-collapse ul {
  display: flex;
}

.navbar-collapse li {
  position: relative;
}

.navbar-collapse a {
  display: block;
  font-size: 16px;
  line-height: 69px;
  padding: 0 13px;
  border-bottom: 1px solid transparent;
  color: #333;
  -ms-opacity: 0.8;
  opacity: 0.8;
  letter-spacing: 1px;
}

.navbar-collapse a:hover {
  -ms-opacity: 1;
  opacity: 1;
}

.navbar-collapse svg {
  width: 16px;
  margin-right: 4px;
}

.nav-line {
  display: none;
  position: absolute;
  height: 3px;
  border-radius: 5px;
  bottom: 0;
  left: 33px;
  width: 30px;
  animation: fadeInLeft 1s;
}

.navbar-collapse li.blog-active a {
  color: #f60;
  opacity: 1;
}

.navbar-collapse li.blog-active .nav-line {
  display: block;
  background: #f60c;
}

.navbar-collapse li.guestbook-active a {
  color: #d243ff;
  opacity: 1;
}

.navbar-collapse li.guestbook-active .nav-line {
  display: block;
  background: #d243ffcc;
}

.navbar-collapse li.profile-active a {
  color: #01b7ee;
  opacity: 1;
}

.navbar-collapse li.profile-active .nav-line {
  display: block;
  background: #01b7eecc;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-60%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.fixed-tools {
  position: fixed;
  bottom: 70px;
  right: 30px;
  user-select: none;
  z-index: 9999;
}

.to-top {
  display: none;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 22px;
  border-radius: 50%;
  color: #555;
  opacity: 0.7;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.4s;
}

.to-top.show-to-top {
  display: flex;
}

.to-top:hover {
  background: #1890ff;
  color: #fff;
}

.navbar-collapse .dark-tools {
  user-select: none;
}

.navbar-collapse .dark-tools svg {
  height: 22px;
  width: 22px;
  position: relative;
  top: 6px;
  color: #efbb35;
}

.darkmode-background {
  background: #f3f3f4;
  position: fixed;
  pointer-events: none;
  z-index: -10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.darkmode-layer {
  /* display: none; */
  position: fixed;
  pointer-events: none;
  background: #fff;
  mix-blend-mode: difference;
  width: 22px;
  height: 22px;
  top: 24px;
  right: 17px;
  border-radius: 50%;
  transform: scale(0);
  transition: all 0.3s ease;
  z-index: 99999;
}

.dark-mode .darkmode-layer {
  transform: scale(200);
  border-radius: 0;
}

.dark-mode.dark-expaned .darkmode-layer {
  transform: scale(1);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}

.dark-mode.dark-notransition .darkmode-layer {
  transition: none;
}

.light-mode .dark-mode-btn,
.dark-mode .light-mode-btn {
  display: block;
}

.light-mode .light-mode-btn,
.dark-mode .dark-mode-btn {
  display: none;
}

@media (max-width: 576px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-collapse {
    display: none;
    flex-basis: 100%;
    border-bottom: 1px solid rgba(234, 234, 234, 0.8);
    z-index: 999;
    box-shadow: 0 0 3px 0 rgba(234, 234, 234, 0.8);
  }

  .navbar-collapse.showMenu {
    display: block;
  }

  .navbar-collapse ul {
    flex-direction: column;
    padding: 10px 5px;
    background: #fff;
  }

  .navbar-collapse a {
    line-height: 50px;
  }

  .navbar-collapse li .nav-line {
    display: none !important;
  }
}
</style>
<style>
.widget-container {
  border-radius: 5px;
  background: #fff;
  margin-bottom: 20px;
}

.widget-header {
  font-size: 15px;
  padding: 0 20px;
  line-height: 50px;
  border-bottom: 1px solid #e7eaec;
  user-select: none;
}

.widget-body {
  padding: 20px;
  min-height: 170px;
  position: relative;
}

.widget-body .ant-spin {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px;
}

.dark-mode .container img,
.dark-mode .container .item-footer1 a:hover,
.dark-mode .container .item-footer2 a:hover,
.dark-mode .container .navbar-collapse .dark-tools,
.dark-mode .container .avatar svg,
.dark-mode .container .comment-item-avatar,
.dark-mode .container .profile-wrap,
.dark-mode .ant-drawer .pre-header-left div,
.dark-mode .container .article-content .pre-header-left div,
.dark-mode .container pre.info,
.dark-mode .container pre.alert,
.dark-mode .container .icon-emoji,
.dark-mode .ant-drawer img,
.dark-mode .ant-drawer pre.info,
.dark-mode .ant-drawer pre.alert {
  mix-blend-mode: difference;
}
</style>
