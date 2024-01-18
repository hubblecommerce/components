---
title: 'Drawer / Offcanvas'
description: 'Layout structure for a drawer / offcanvas layer'
---

# Drawer / Offcanvas

Layout structure for the drawer / off-canvas layer. It uses `daisyUI`'s drawer component based on checkbox toggle 
mechanism combined with v-model of vue and the `@hubblecommerce/hubble`
[useDrawer](https://github.com/hubblecommerce/hubble-frontend-pwa/blob/main/src/theme/composables/useDrawer.ts){:target="_blank"}
composable to handle multiple layer contents in one single drawer. This way, specific layers can be toggled from 
anywhere in the app. In addition, components inside the off-canvas can be lazy loaded.

## Preview

::drawer
::


## Code

```vue [layouts/default.vue]
<template>
    <div
        :class="{ 'drawer drawer-end': drawerDirection === 'right', 'drawer': drawerDirection === 'left' }"
        :style="!drawerState ? 'height:auto !important;' : ''"
    >
        <input id="default-layout-drawer" v-model="drawerState" type="checkbox" class="drawer-toggle">

        <div class="drawer-content relative">
            <header>
                <nav class="bg-base-100 shadow-md relative z-40">
                    <div class="navbar container m-auto px-2 lg:px-6">
                        <div class="navbar-end">
                            <div
                                tabindex="0"
                                class="btn btn-ghost btn-circle"
                                @click="toggleDrawer('cart', 'right')"
                                @keydown.enter="toggleDrawer('cart', 'right')"
                            >
                                Open cart
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <slot />
        </div>

        <div class="drawer-side z-50">
            <div class="drawer-overlay" @click="toggleDrawer()" />
            <div class="h-full px-6 py-3 overflow-y-auto w-full md:w-96 bg-base-100 text-base-content">
                <LazyDrawerContextCart v-if="drawerContext === 'cart'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDrawer, useNuxtApp } from '#imports'

const nuxtApp = useNuxtApp()
const { drawerState, drawerContext, toggleDrawer, drawerDirection, closeDrawer } = useDrawer()

nuxtApp.hook('page:finish', () => {
    closeDrawer()
})
</script>
```

