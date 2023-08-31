<template>
    <div class="blogs-list">
        <div v-for="(article, index) in articlesf" :key="index">
        <BlogArticle :article="article"/>    
        </div>
    </div>
</template>
  
<script>
import BlogArticle from '../components/BlogArticle.vue'
export default {
    name: 'Blog-List',
    components: {
        BlogArticle,
    },
    props: {
        articlesf: [],
    }
}
</script>

<style scoped lang="scss"></style>
  