<template>
    <div class="blogArticle">
        <div class="blogArticle__header">{{ article.heading }}</div>
        <img :src="article.image" alt="interior picture" class="blogArticle__image">
        <div class="blogArticle__inscription">
            <div class="blogArticle__date">{{ article.date }}</div>
            <div class="blogArticle__crumbs">Interior / Home / Decore</div>
        </div>
        <div class="blogArticle__text">{{ article.text }}</div>
        <article-summary :summary="article.summary"/>
    </div>
</template>
  
<script>
import ArticleSummary from '../components/ArticleSummary.vue'
export default {
    name: 'BlogArticle',
    components: {
        ArticleSummary,
    },
    props: {
        article: Object,
    }
}
</script>

<style scoped lang="scss"></style>