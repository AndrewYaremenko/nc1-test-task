<template>
    <main>
        <div class="p-3 text-white bg-dark h-100" style="width: 280px;">
            <span class="fs-4">nc1-test-task</span>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link text-white"
                        :class="{ 'active': isRouteActive('/') }">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="nav-link text-white"
                        :class="{ 'active': isRouteActive('/about') }">About</router-link>
                </li>
                <li>
                    <router-link to="/contacts" class="nav-link text-white"
                        :class="{ 'active': isRouteActive('/contacts') }">Contacts</router-link>
                </li>
            </ul>
        </div>

        <router-view class="mt-4"></router-view>
    </main>
</template>
  
<script>
export default {
    name: 'App',
    methods: {
        isRouteActive(routePath) {
            return this.$route.path === routePath;
        },
    },
};
</script>
  
<style>
body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
}

html {
    height: -webkit-fill-available;
}

main {
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
}
</style>
  