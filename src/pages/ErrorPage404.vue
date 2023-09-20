<template>
    <div class="container">
        <div class="errorPage">
            <div class="errorPage__Left">
                <div class="errorPage__heading">
                    404
                </div>
                <div class="errorPage__text">
                    We are sorry, but the page
                    you requested was not found
                </div>
                <router-link to="Main">
                    <button class="defaultBautton">
                        Back To Home<svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"
                            fill="none">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </button>
                </router-link>
            </div>
            <div class="errorPage__Right">

            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'ErrorPage404',
    methods: {
        ...mapMutations(['CHANGEFOOTERSHOWFLAG']),
    },
    props: {

    },
    // beforeEnter(){
    //     this.CHANGEFOOTERSHOWFLAG(false);
    //     // next();
    // },

    beforeRouteLeave(to, from, next) {
        this.CHANGEFOOTERSHOWFLAG(true);
        next();
    },
    mounted() {
        this.CHANGEFOOTERSHOWFLAG(false);
    },

}
</script>

<style scoped lang="scss">
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
    // max-width: 1200px;
    margin: 0 auto;
}

.errorPage {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__heading {
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__text {
        width: 30vw;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.35px;
        margin-bottom: 34px;
    }

    &__Right {
        background: url("../images/404Page.jpg") lightgray 50% / cover no-repeat;
        height: 55vh;
        width: 45vw;
        border-radius: 0 0 0 250px;
    }

}
</style>