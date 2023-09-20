<template>
    <div class="header">
        <header>
            <div class="container">
                <nav class="headerTopMenu">
                    <router-link to="/">
                        <div class="logoLeft">
                            <svg class="logoLeft__img" xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                viewBox="0 0 34 34" fill="none">
                                <path
                                    d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                    fill="#CDA274" />
                            </svg>
                            <div class="logoLeft__text">Interno</div>
                        </div>
                    </router-link>
                    <div class="headerRight">
                        <router-link to="/">
                            <div class="headerRight__menuItem">Home</div>
                        </router-link>
                        <router-link to="/OurProjects">
                        <div class="headerRight__menuItem">Project</div>
                    </router-link>
                        <router-link to="/Blog">
                        <div class="headerRight__menuItem">Blog</div>
                    </router-link>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>
  
<script>
export default {
    name: 'Header-block',
    props: {
        msg: String
    }
}
</script>
  
<style scoped lang="scss"></style>