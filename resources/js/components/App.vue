<template>
    <main>
        <div class="navigate p-3 text-white bg-dark h-100">
            <span class="logo">nc1-test-task</span>
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
                <li>
                    <router-link to="/posts" class="nav-link text-white"
                        :class="{ 'active': isRouteActive('/posts') }">Posts</router-link>
                </li>
            </ul>
        </div>

        <router-view class="mt-4"></router-view>
    </main>
</template>

<script lang="ts">
import { Component } from 'vue';

export default {
    name: 'App',
    methods: {
        isRouteActive(routePath: string) {
            return this.$route.path === routePath;
        },
    },
} as Component;
</script>

<style>
@media (max-width: 750px) {
    body {
        font-size: 8px;
    }

    span {
        font-size: 10px;
    }
}

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
  