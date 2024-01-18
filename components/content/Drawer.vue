<template>
    <div class="bg-base-300 relative overflow-x-auto">
        <div class="preview border bg-base-100 flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 ">
            <div
                class="h-56 rounded overflow-hidden"
                :class="{ 'drawer drawer-end': drawerDirection === 'right', 'drawer': drawerDirection === 'left' }"
            >
                <input id="my-drawer" v-model="drawerState" type="checkbox" class="drawer-toggle">
                <div class="flex flex-col items-center justify-center gap-4 drawer-content">
                    <div
                        tabindex="0"
                        class="btn btn-primary"
                        @click="toggleDrawer('menu', 'left')"
                        @keydown.enter="toggleDrawer('menu', 'left')"
                    >
                        Open menu
                    </div>

                    <div
                        tabindex="0"
                        class="btn btn-primary"
                        @click="toggleDrawer('search', 'left')"
                        @keydown.enter="toggleDrawer('search', 'left')"
                    >
                        Open search
                    </div>
                </div>
                <div class="drawer-side h-full absolute">
                    <div @click="toggleDrawer()" class="drawer-overlay"></div>

                    <div class="p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content">
                        <ul v-if="drawerContext === 'menu'" class="menu">
                            <li>
                                <button>Sidebar Item 1</button>
                            </li>
                            <li>
                                <button>Sidebar Item 2</button>
                            </li>
                        </ul>

                        <ul v-if="drawerContext === 'search'" class="menu">
                            <li>
                                <button>Search</button>
                            </li>
                        </ul>

                        <LazyDrawerContextSearch v-if="drawerContext === 'search'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { drawerState, drawerContext, toggleDrawer, drawerDirection, closeDrawer } = useDrawer()

nuxtApp.hook('page:finish', () => {
    closeDrawer()
})
</script>
