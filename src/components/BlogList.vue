<template>
    <div class="blogs-list">
        <div v-for="(article, index) in getFilteredArticlesComp" :key="index">
            <BlogArticle :article="article" />
        </div>
    </div>
</template>
  
<script>
import {mapGetters} from 'vuex';
import BlogArticle from '../components/BlogArticle.vue'
export default {
    name: 'Blog-List',
    components: {
        BlogArticle,
    },
    props: {
        
    },
    computed: {
        ...mapGetters(['getFilteredArticlesComp']),
    },
}
</script>

<style scoped lang="scss"></style>
  