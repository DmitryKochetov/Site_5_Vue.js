<template>
    <div class="blogDetails">
        <div class="blogDetailsTop"></div>


        <div class="container">
            <div class="blogs">
                <BlogList :articlesf="getFilteredArticlesComp" />
                <div class="blogs-tags">
                    <button v-for="(item, index) in arrayOfTags" :key="index" @click="sortItem = item" class="blogsTag">{{
                        item }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import BlogList from '../components/BlogList.vue'

export default {
    name: 'BlogDetails-component',
    components: {
        BlogList,
    },
    props: {
        articles: [],
    },
    data() {
        return {
            sortItem: '',
            filteredArticlesArray: [],
        }
    },
    computed: {
        getFilteredArticlesComp() {
            if (this.sortItem === '') {
                return this.articles;
            }
            return this.articles.filter(el => el.tag === this.sortItem);
        },
        arrayOfTags() {
            return Array.from(new Set(this.articles.map(item => item.tag)))
        }
    },

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

.blogDetailsTop {
    height: 340px;
    width: 100vw;
    background: no-repeat url("../images/blogDetailsTop.jpg");
    background-size: cover;
}

.blogs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 150px;
}

.blogs-list {
    display: flex;
    flex-direction: column;
    max-width: 800px;
}

.blogArticle {
    display: flex;
    flex-direction: column;

    &__header {
        color: #292f36;
        @extend .standartDMText;
        font-size: 50px;
        line-height: 125%;
        letter-spacing: 1px;
        margin-bottom: 11px;
    }

    &__image {
        border-radius: 62px;
    }

    &__text {
        color: #4d5053;
        font-size: 22px;
        @extend .standartJostText;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__summary {
        color: #cda274;
        text-align: center;
        @extend .standartDMText;
        font-size: 25px;
        font-style: italic;
        line-height: 125%;
        letter-spacing: 0.5px;
        border-radius: 62px;
        background: #f4f0ec;
        padding: 53px;
        margin-top: 35px;
        margin-bottom: 53px;
    }

    &__inscription {
        display: flex;
        justify-content: space-between;
        margin: 46px 0 48px 0;
        color: #4d5053;
        @extend .standartJostText;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}

.blogs-tags {
    max-width: 345px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: fit-content;
}


.blogsTag {
    display: flex;
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: #f4f0ec;
    color: #292f36;
    text-align: center;
    @extend .standartJostText;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.36px;
    max-height: 41px;
}

.blogsTag:active {
    background: #292F36;
    color: #FFF;

}
</style>
  