<template>
    <div class="projectSlider-item" >
        <div class="sliderImage" :style="{backgroundImage:`url(${item_data.img})`}"></div>
    </div>

</template>

<script>
export default {
    name: "projectSlider-item",
    props: {
        item_data: Object,
        default: () => { },

    },
    data() {
        return {

        }
    },
    computed: {}

}


</script>

<style lang="scss" scoped>
.sliderImage {
    width: 1200px;
    height: 800px;
    background-size: cover;
    background-position: center;
    
}
</style>