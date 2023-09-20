<template>
    <div class="blog">
        <main>
            <div class="articlesTopSet">
                <div class="articlesTopSet__label">
                    <div class="articlesTopSet__heading">Our Projects</div>
                    <div class="articlesTopSet__text">Home / Project</div>
                </div>
            </div>
            <div class="container">
                <div class="categoriesSwitch">
                    <div class="categoriesSwitch__item" @click="CHANGEPROJECTSORTITEM('bathroom')">Bathroom</div>
                    <div class="categoriesSwitch__item" @click="CHANGEPROJECTSORTITEM('bedroom')">Bed Room</div>
                    <div class="categoriesSwitch__item" @click="CHANGEPROJECTSORTITEM('kitchen')">Kitchen</div>
                    <div class="categoriesSwitch__item" @click="CHANGEPROJECTSORTITEM('livingArea')">Living Area</div>
                </div>

                <div class="ourProjectSet">
                    <div v-for="(item, index) in productsForCurrentPage" :key="index" class="ourProjectSetCard">
                        <img :src="item.image" class="ourProjectSetCard__img" alt="great project pic">
                        <div class="ourProjectSetCard__info">
                            <div class="ourProjectSetCard__infoLeft">
                                <div class="ourProjectSetCard__projectName">{{ item.projectName }}</div>
                                <div class="ourProjectSetCard__disc">{{ item.desc }}</div>
                            </div>
                            <div class="ourProjectSetCard__infoRight">
                                <router-link to="/ProjectDetails">
                                    <a href="#" @click="CHANGESELECTEDPROJECTID(item.id)"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                                            fill="none">
                                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></a></router-link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="paginationBar">
                    <router-link v-for="page in numberOfProductPages" :to="`/OurProjects/${page}`" :key="page">
                        <div class="paginationBar__element"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                                viewBox="0 0 53 52" fill="none">
                                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                            </svg>
                            <div class="paginationBar__number"> {{ page }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    name: 'OurProject-component',
    props: {
    },

    data() {
        return {
            sortItem: '',
            currentPage: 1,
        }
    },
    computed: {
        ...mapGetters(['getFilteredProjectsComp']),
        numberOfProductPages() {
            return Math.ceil(this.getFilteredProjectsComp.length / 5);
        },
        productsForCurrentPage() {
            const { currentPage } = this;
            let startIndex = currentPage;

            return this.getFilteredProjectsComp.slice(((startIndex - 1) * 5), ((startIndex - 1) * 5) + 5);
        },

    },
    watch: {
        $route() {
            const page = this.$route.params.page;
            this.currentPage = +page;

        },
    },
    methods: {
        ...mapMutations(['CHANGEPROJECTSORTITEM', 'CHANGESELECTEDPROJECTID']),
    },
}
</script>

<style scoped lang="scss">
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
    margin-bottom: 96px;
}

.ourProjectSet {
    margin: 0 auto;
    max-width: 1200px;
    columns: 2;
    gap: 24px
}

.ourProjectSetCard {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    break-inside: avoid;

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
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    &__disc {
        color: #4d5053;
        @extend .standartJostText;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.22px;
    }




}

.categoriesSwitch {
    margin: 0 auto 48px auto;
    display: flex;
    flex-direction: row;
    max-width: 880px;
    height: 75px;
    align-items: center;
    justify-content: space-around;
    // gap: 96px;
    border-radius: 18px;
    border: solid 1px #CDA274;

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 25%;
        border-radius: 18px;

        color: #292F36;
        text-align: center;
        @extend .standartJostText;
        font-size: 18px;
        line-height: 125%;
        letter-spacing: 0.36px;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
    }

    &__item:hover {
        background: #CDA274;
    }


}
</style>
  