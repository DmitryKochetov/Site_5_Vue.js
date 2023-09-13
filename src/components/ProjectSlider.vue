<template>
    <div @mouseover="stopAutoPlay" @mouseout="startAutoPlay">
        <div class="sliderWrapper">
            <div @click="nextSlide" class="projectSlider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
                <projectSliderItem v-for="item in getProject.sliderItems" :key="item.id" :item_data="item" />

            </div>


        </div>
        <div class="sliderButtons">
            <div @click="prevSlide"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg></div>
            <div @click="nextSlide"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import projectSliderItem from '../components/ProjectSlider-item.vue'
export default {
    name: "Project-Slider",
    components: {
        projectSliderItem,
    },
    props: {

    },
    data() {
        return {
            currentSlideIndex: 0,
            // stopSlideMove: false,
            autoPlay: true,
            autoPlayDelay: 3000,

        }
    },
    computed: {
        ...mapGetters(['getProject']),
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--;

            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.getProject.sliderItems.length - 1) {
                this.currentSlideIndex = 0;
                return;
            }
            this.currentSlideIndex++;

        },
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        },
        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        },
    },

    mounted() {
        if (this.autoPlay) {
            this.startAutoPlay();
        }
        // let cont = this;
        // if (this.stopSlideMove) {
        //     setInterval(function () {
        //         cont.nextSlide()
        //     }, 3000)
        // }
    },

}
</script>

<style lang="scss" scoped>
.sliderWrapper {
    border-radius: 48px;
    max-width: 1200px;
    // height: 300px;
    overflow: hidden;
    margin: 0 auto;
}

.projectSlider {
    display: flex;
    transition: all ease 0.5s;
    // height: 100%;
    // width: 100%;
}

.sliderButtons {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px
}
</style>