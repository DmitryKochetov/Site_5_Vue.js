import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sortProjectItem: "",
    sortArticlesItem: "",
    selectedProjectId: 1,
    showFooter: true,

    projects: [
      {
        id: 1,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project1.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project2.png"),
        projectName: "Minimal Bedroom",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      },
      {
        id: 2,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project2.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project1.png"),
        projectName: "Minimal Bedroom",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 3,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project3.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project3.png"),
        projectName: "Classic Minimal Bedroom",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 4,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project4.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project4.png"),
        projectName: "Modern Bedroom",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 5,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project5.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project5.png"),
        projectName: "Minimal Bedroom",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 6,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project6.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project6.png"),
        projectName: "Minimal Bedroom table",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 7,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project7.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project7.png"),
        projectName: "System Table",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 8,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project8.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/project8.png"),
        projectName: "Modern Bedroom",
        desc: "Decor / Artchitecture",
        tag: "bedroom",
        text: "item N",
      },
      {
        id: 9,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project8.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/article3.png"),
        projectName: "Bathroom",
        desc: "Decor / Artchitecture",
        tag: "bathroom",
        text: "item N",
      },
      {
        id: 10,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project3.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/article1.png"),
        projectName: "Kitchen",
        desc: "Decor / Artchitecture",
        tag: "kitchen",
        text: "item N",
      },
      {
        id: 11,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/images/project3.png"),},
          {id: 2, name: 'img2', img: require("@/images/project5.png"),},
          {id: 3, name: 'img3', img: require("@/images/project7.png"),},
        ],
        image: require("@/images/article5.png"),
        projectName: "Living Area",
        desc: "Decor / Artchitecture",
        tag: "livingArea",
        text: "item N",
      },
    ],

    articles: [
      {
        id: 1,
        image: require("@/images/article1.png"),
        label: "Kitchen Design",
        heading: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022 ",
        link: "#",
        text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                          turpmaximus.posuere in.Contrary to popular belief.There are many variations 
                          of passages of Lorem Ipsum available, but the majority have suffered 
                          alteration in some form, by injecthumour, or randomised words which don't 
                          look even slightly believable. Embarrassing hidden in the middle of text.
                          All the Lorem Ipsum generators on the Internet tend to repeat predefined 
                          chunks as necessary.`,
        tag: "kitchen",
        summary: "summary for article 1",
      },
      {
        id: 2,
        image: require("@/images/article2.png"),
        label: "Living Design",
        heading: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
        link: "#",
        text: `Text for article 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Delectus, possimus? Alias aut fuga explicabo in voluptates, labore, asperiores 
                      accusamus odit ullam temporibus adipisci at perferendis nulla sed voluptas cum 
                      enim repellat. Deleniti numquam quas aliquid mollitia dolores repellat sed, quam 
                      xpedita in tempora libero unde, fugit sit aspernatur, officiis voluptatibus.`,
        tag: "kitchen",
        summary: "summary for article 2",
      },
      {
        id: 3,
        image: require("@/images/article3.png"),
        label: "Interior Design",
        heading: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
        link: "#",
        text: `Text for article 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Delectus, possimus? Alias aut fuga explicabo in voluptates, labore, asperiores 
                      accusamus odit ullam temporibus adipisci at perferendis nulla sed voluptas cum 
                      enim repellat. Deleniti numquam quas aliquid mollitia dolores repellat sed, quam 
                      expedita in tempora libero unde, fugit sit aspernatur, officiis voluptatibus.`,
        tag: "bedroom",
        summary: "summary for article 3",
      },
      {
        id: 4,
        image: require("@/images/article4.png"),
        label: "Kitchen Design",
        heading: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022 ",
        link: "#",
        text: `Text for article 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Delectus, possimus? Alias aut fuga explicabo in voluptates, labore, asperiores 
                      accusamus odit ullam temporibus adipisci at perferendis nulla sed voluptas cum 
                      enim repellat. Deleniti numquam quas aliquid mollitia dolores repellat sed, quam 
                      expedita in tempora libero unde, fugit sit aspernatur, officiis voluptatibus.`,
        tag: "building",
        summary: "summary for article 4",
      },
      {
        id: 5,
        image: require("@/images/article5.png"),
        label: "Living Design",
        heading: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
        link: "#",
        text: `Text for article 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Delectus, possimus? Alias aut fuga explicabo in voluptates, labore, asperiores 
                      accusamus odit ullam temporibus adipisci at perferendis nulla sed voluptas cum 
                      enim repellat. Deleniti numquam quas aliquid mollitia dolores repellat sed, quam 
                      expedita in tempora libero unde, fugit sit aspernatur, officiis voluptatibus.`,
        tag: `Architecture`,
        summary: "summary for article 5",
      },
      {
        id: 6,
        image: require("@/images/article6.png"),
        label: "Interior Design",
        heading: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
        link: "#",
        text: `Text for article 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Delectus, possimus? Alias aut fuga explicabo in voluptates, labore, asperiores 
                      accusamus odit ullam temporibus adipisci at perferendis nulla sed voluptas cum 
                      enim repellat. Deleniti numquam quas aliquid mollitia dolores repellat sed, quam 
                      expedita in tempora libero unde, fugit sit aspernatur, officiis voluptatibus.`,
        tag: `Kitchen Planning`,
        summary: "summary for article 6",
      },
      {
        id: 7,
        image: require("@/images/article6.png"),
        label: "Article 7",
        heading: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022 ",
        link: "#",
        text: `Text for article 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Delectus, possimus? Alias aut fuga explicabo in voluptates, labore, asperiores 
                      accusamus odit ullam temporibus adipisci at perferendis nulla sed voluptas cum 
                      enim repellat. Deleniti numquam quas aliquid mollitia dolores repellat sed, quam 
                      expedita in tempora libero unde, fugit sit aspernatur, officiis voluptatibus.`,
        tag: `Kitchen Planning`,
        summary: "summary for article 6",
      },
    ],
  },
  mutations: {
    CHANGEFOOTERSHOWFLAG(state, showFooter){
      state.showFooter = showFooter;
    },

    CHANGEPROJECTSORTITEM(state, sortProjectItem) {
      state.sortProjectItem = sortProjectItem;
    },

    CHANGEARTICLESSORTITEM(state, sortArticlesItem) {
      state.sortArticlesItem = sortArticlesItem;
    },

    CHANGESELECTEDPROJECTID(state, selectedProjecId){
      state.selectedProjectId = selectedProjecId;
    },
  },
  actions: {

  },
  getters: {
    getShowFooterFlag(state){
      return state.showFooter;
    },

    arrayOfTags(state) {
      return Array.from(new Set(state.articles.map((item) => item.tag)));
    },

    getArticles(state) {
      return state.articles;
    },

    getProject(state){
      return state.projects.find(function(elem){return elem.id === state.selectedProjectId})
    },

    getFilteredProjectsComp(state) {
      if (state.sortProjectItem === "") {
        return state.projects;
      }
      return state.projects.filter((el) => el.tag === state.sortProjectItem);
    },
    getFilteredArticlesComp(state) {
      if (state.sortArticlesItem === "") {
        return state.articles;
      }
      return state.articles.filter((el) => el.tag === state.sortArticlesItem);
    },
  },
  modules: {

  },
});
