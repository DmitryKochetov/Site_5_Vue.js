<template>
  <div id="app">
    <Header v-if="showHeader"/>
    <router-view />
    <Footer v-if="getShowFooterFlag"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Header from './blocks/Header.vue'
import Footer from './blocks/Footer.vue'

export default {
  
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showHeader: true,
      // showFooter: true,
    }
  },
  computed: {
        ...mapGetters(['getShowFooterFlag']),
    },
  methods: {
    // goToblogFunc() {
    //   this.showBlog = true;
    //   this.showMain = false;
    //   this.showBlogDetails = false;
    //   this.showOurProjects = false;
    //   this.showProjectDetails = false;
    // },

    // goToMainFunc() {
    //   this.showBlog = false;
    //   this.showMain = true;
    //   this.showBlogDetails = false;
    //   this.showOurProjects = false;
    //   this.showProjectDetails = false;
    // },

    // goToBlogDetailsFunc() {
    //   this.showBlog = false;
    //   this.showMain = false;
    //   this.showBlogDetails = true;
    //   this.showOurProjects = false;
    //   this.showProjectDetails = false;
    // },

    // goToOurProjectsFunc() {
    //   this.showBlog = false;
    //   this.showMain = false;
    //   this.showBlogDetails = false;
    //   this.showOurProjects = true;
    //   this.showProjectDetails = false;
    // },

    // goToProjectDetailsFunc() {
    //   this.showBlog = false;
    //   this.showMain = false;
    //   this.showBlogDetails = false;
    //   this.showOurProjects = false;
    //   this.showProjectDetails = true;
    // },

    // changeFlag(item) {
    //   item.isOpenedFlag = !item.isOpenedFlag;
    // }
  }

}


</script>

<style lang="scss">

.defaultBautton {
  display: flex;
  width: 220px;
  height: 75px;
  background: #fff;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);

  color: #fff;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.36px;
}

.standartDMText {
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 400;
}

.standartJostText {
  font-family: Jost;
  font-style: normal;
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.headerTopMenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 53px;
  margin-bottom: 46px;
}

.logoLeft {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #292f36;
  @extend .standartDMText;
  font-size: 40px;
  line-height: 125%;
  /* 50px */
}

.headerRight {
  display: flex;
  align-items: center;
  gap: 24px;
  color: #292f36;
  text-align: center;
  @extend .standartJostText;
  font-size: 20px;
  line-height: 125%;
}

.mainProposal {
  max-width: 100%;
  height: 620px;
  background-color: aqua;
  background: no-repeat url("../src/images/MainPageHomeUnique.png");
  border-radius: 48px;
  padding-left: 48px;
  padding-top: 128px;

  &__heading {
    max-width: 434px;
    @extend .standartDMText;
    color: #292f36;
    font-size: 65px;
    line-height: 125%;
    margin-bottom: 18px;
  }

  &__text {
    max-width: 434px;
    color: #4d5053;
    @extend .standartJostText;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 21px;
  }
}

.followProjects {
  display: flex;
  flex-direction: column;
  max-width: 737px;
  margin: 96px auto 93px auto;

  &__heading {
    @extend .standartDMText;
    color: #292f36;
    text-align: center;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  &__text {
    @extend .standartJostText;
    color: #4d5053;
    text-align: center;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}

.FollowProjectsSet {
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(547px, 1fr));
  column-gap: 6%;
  row-gap: 3%;
}

.FollowProjectsSetCard {
  display: flex;
  flex-direction: column;

  &__info {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__projectName {
    color: #292f36;
    @extend .standartDMText;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.5px;
  }

  &__disc {
    color: #4d5053;
    @extend .standartJostText;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__img_radiusTopRight {
    border-radius: 0 100px 0 0;
  }

  &__img_radiusTopLeft {
    border-radius: 100px 0 0 0;
  }

  &__img_radiusDownRight {
    border-radius: 0 0 100px 0;
  }

  &__img_radiusDownLeft {
    border-radius: 0 0 0 100px;
  }
}

.successBarWrapper {
  background-color: #f4f0ec;
}

.successBar {
  margin-top: 121px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 457px;

  &__element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__number {
    color: #cda274;
    @extend .standartDMText;
    font-size: 85px;
    line-height: 125%;
    letter-spacing: 1.7px;
  }

  &__disc {
    color: #4d5053;
    @extend .standartJostText;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__verticalLine {
    width: 0px;
    height: 130px;
    border: #cda274 solid 1px;
  }
}

.articlesSet {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  column-gap: 2%;
  row-gap: 3%;

}

.article {
  position: relative;
  max-width: 340px;
  padding: 21px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

  &__image {
    border-radius: 62px 62px 0 0;
  }

  &__label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 42px;
    top: 248px;
    width: 124px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 8px 8px 8px 0px;
    background: #fff;
    color: #4d5053;
    @extend .standartJostText;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }

  &__heading {
    color: #292f36;
    @extend .standartDMText;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-top: 21px;
    max-width: 305px;
    min-height: 100px;
  }

  &__down {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__date {
    color: #4d5053;
    @extend .standartJostText;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}

.footerSet {
  margin-top: 214px;
  margin-bottom: 96px;
  display: flex;
  justify-content: space-between;

  &__text {
    color: #4d5053;
    @extend .standartJostText;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__heading {
    color: #292f36;
    @extend .standartDMText;
    font-size: 25px;
    line-height: 125%;
  }

  &__leftModule {
    display: flex;
    flex-direction: column;
    max-width: 393px;
    gap: 18px;
  }

  &__logoBar {
    margin-top: 13px;
    display: flex;
    gap: 54px;
  }

  &__middleModule {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }

  &__rightModule {
    display: flex;
    flex-direction: column;
    gap: 33px;
    max-width: 258px;
  }
}
</style>
