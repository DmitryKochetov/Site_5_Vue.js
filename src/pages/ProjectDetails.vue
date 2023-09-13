<template>
    <div class="ProjectDetails">
        <div class="projectDetailsTop"></div>
        <div class="container">
            <div class="projectInformation">
                <h2 class="projectInformation__header">{{ getProject.projectName }}</h2>
                <p class="projectInformation__text">{{ getProject.text }}</p>
            </div>
            <ProjectSlider></ProjectSlider>
        </div>

    </div>
</template>
  
<script>
import { mapMutations, mapGetters } from 'vuex';
import ProjectSlider from '../components/ProjectSlider.vue';


export default {

    name: 'ProjectDetails-component',
    components: {
        ProjectSlider,
    },
    props: {

    },
    data() {
        return {
            sortItem: '',
            filteredArticlesArray: [],
        }
    },
    computed: {
        ...mapGetters(['getProject']),
    },
    methods: {
        ...mapMutations(['CHANGEARTICLESSORTITEM']),
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

.projectInformation {
    max-height: 1200px;
    max-width: 658px;
    margin: 96px auto 96px auto;

    &__header {
        color: #292F36;
        @extend .standartDMText;
        font-size: 50px;
        line-height: 125%;
        letter-spacing: 1px;
        margin-bottom: 16px;
    }

    &__text {
        color: #4D5053;
        @extend .standartJostText;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
}

.projectDetailsTop {
    height: 340px;
    width: 100vw;
    background: no-repeat url('../images/projectDetailsTop.jpg');
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
</style>
  