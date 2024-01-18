<template>
    <div class="drawer">
        <input id="sidebar-drawer" v-model="drawerOpen" type="checkbox" class="drawer-toggle" />

        <!-- Page content here -->
        <div class="drawer-content bg-base-100">
            <header class="sticky top-0 z-30 bg-base-100/50 backdrop-blur backdrop-filter lg:container lg:m-auto px-0 lg:px-8">
                <div class="navbar border-b px-4 lg:px-0">
                    <div class="flex-1 ">
                        <NuxtLink to="/" class="text-xl px-0 text-primary flex items-end gap-2"><img alt="hubble Logo" src="/hubble-logo.svg" class="inline h-[37px]"> <span class="font-bold">Components</span></NuxtLink>
                    </div>
                    <div class="hidden md:flex flex-none gap-2">
                        <a class="link link-neutral link-hover" href="https://docs.hubblecommerce.io/" target="_blank" rel="noopener">hubble Frontend</a>
                        <a class="link link-neutral link-hover" href="https://github.com/hubblecommerce/hubble-frontend-pwa" target="_blank" rel="noopener">Github</a>
                    </div>
                </div>
            </header>
            <div class="container m-auto px-4 lg:px-8 flex">
                <div class="hidden w-72 shrink-0 lg:block lg:pr-8">
                    <div class="sticky top-[115px] bg-base-200/60">
                        <Navigation />
                    </div>
                </div>
                <div class="flex min-w-0 min-h-screen flex-1 pt-12">
                    <slot />
                </div>
            </div>
            <footer class="footer footer-center p-4 bg-base-300 text-base-content lg:mt-20">
                <aside>
                    <p>Copyright © 2024</p>
                </aside>
            </footer>
        </div>

        <div class="drawer-side z-50">
            <label for="sidebar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <!-- Sidebar content here -->
            <div class="p-4 w-3/4 min-h-full bg-base-200/60 text-base-content">
                <Navigation />
            </div>
        </div>
    </div>

    <label for="sidebar-drawer" class="fixed z-50 bottom-5 right-4 btn btn-lg btn-outline bg-base-100/60 backdrop-blur backdrop-filter btn-circle lg:hidden">
        <Bars3Icon v-if="!drawerOpen" class="w-8" />
        <XMarkIcon v-if="drawerOpen" class="w-8" />
    </label>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const drawerOpen = ref(false)
const nuxtApp = useNuxtApp()

// @ts-ignore
nuxtApp.hook('page:finish', () => {
    drawerOpen.value = false
})
</script>
