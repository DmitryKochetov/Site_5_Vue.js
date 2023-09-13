<template>
    <div class="blog">
        <main>
            <div class="articlesTopSet">
                <div class="articlesTopSet__label">
                    <div class="articlesTopSet__heading">Articles & News</div>
                    <div class="articlesTopSet__text">Home / Blog</div>
                </div>
            </div>
            <div class="container">
                <div class="latestPostHeading">Latest Post</div>
                <div class="latestPostSet">
                    <div class="latestPostSet__left">
                        <img class="latestPostSet__pic" src="../images/latestPostSetPicture.png" alt="">
                    </div>

                    <div class="latestPostSet__right">
                        <div class="latestPostSet__heading">Low Cost Latest Invented Interior Designing Ideas</div>
                        <div class="latestPostSet__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpis
                            dignissim maximus.posuere in.Contrary to popular belief.

                            Lorem Ipsum is not simply random text. It has roots in a piece of classica.</div>
                        <div class="latestPostSet__down">
                            <div class="latestPostSet__date">26 December,2022</div>
                            <a href="#" @click="$emit('goToBlogDetails')"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none">
                                    <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                    <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                        </div>
                    </div>
                </div>
                <div class="latestPostHeading">Articles & News</div>
                <div class="articlesSet">
                    <div v-for="article in getArticles" :key="article.id" class="article">
                        <img :src="article.image" alt="iterior" class="article__image">
                        <div class="article__label">{{ article.label }}</div>
                        <div class="article__heading">{{ article.heading }}</div>
                        <div class="article__down">
                            <div class="article__date">{{ article.date }}</div>
                            <a href="#" class="article__link" @click="$emit('goToBlogDetails')"><svg class="article__button"
                                    xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                                    fill="none">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a>
                        </div>
                    </div>
                </div>
                <div class="paginationBar">
                    <div class="paginationBar__element"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                            viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        </svg>
                        <div class="paginationBar__number">01</div>
                    </div>
                    <div class="paginationBar__element"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                            viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        </svg>
                        <div class="paginationBar__number">02</div>
                    </div>
                    <div class="paginationBar__element"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                            viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        </svg>
                        <div class="paginationBar__number">03</div>
                    </div>
                    <div class="paginationBar__element"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                            viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'Blog-component',
    props: {
        // articles: [],
    },
    
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getArticles']),
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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

.articlesTopSet {
    height: 340px;
    width: 100vw;
    background: no-repeat url("../images/articlesTopSetPhoto.jpg");
    background-size: cover;
    position: relative;

    &__label {
        position: absolute;
        top: 155px;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        width: 500px;
        padding: 41px 78px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 37px 37px 0px 0px;
        background: #fff;
    }

    &__heading {
        color: #292f36;
        @extend .standartDMText;
        font-size: 50px;
        line-height: 125%;
    }

    &__text {
        color: #4d5053;
        @extend .standartJostText;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
}

.latestPostHeading {
    margin-top: 150px;
    margin-bottom: 27px;
    color: #292f36;
    @extend .standartDMText;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 1px;
}

.latestPostSet {
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    max-width: 100%;
    padding: 22px;
    align-items: center;
    gap: 10px;

    &__pic {
        border-radius: 62px;
    }

    &__right {
        display: flex;
        flex-direction: column;
        max-width: 469px;
        margin: 0 auto;
    }

    &__down {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    &__heading {
        color: #292f36;
        @extend .standartDMText;
        font-size: 25px;
        line-height: 125%;
        letter-spacing: 0.5px;
    }

    &__text {
        color: #4d5053;
        @extend .standartJostText;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-top: 22px;
        margin-bottom: 41px;
    }

    &__date {
        color: #4d5053;
        font-size: 16px;
        @extend .standartJostText;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}

.paginationBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    max-width: 270px;
    margin: 100px auto 200px auto;

    &__element {
        position: relative;
    }

    &__number {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
  