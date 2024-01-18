---
title: 'Mega Menu'
description: 'Mega Menu Component for desktop viewport'
---

# Mega Menu

Component to render a mega menu navigation optimized for desktop viewports.

## Preview

::prose-preview
::mega-menu-preview
::
::

## Usage

```vue [components/Header.vue]
<template>
    <header class="w-full min-h-[500px]">
        <MegaMenu :navigation="navigation" />
    </header>
</template>

<script setup lang="ts">
    /* Set your navigation structure:
    [
        {
            "id": "06f68e7f-f2b6-4a11-ab5e-e7858353a845",
            "name": "Hills and Conn",
            "url": "https://hhac.name",
            "children": [
                {
                    "id": "b74e1093-0b3f-4696-9163-6243d8d940ed",
                    "name": "Tasty Granite Pants",
                    "url": "https://hhac.com",
                    "children": [
                        {
                            "id": "46fb0429-4d86-4d8b-923c-29b565c2c458",
                            "name": "Ferrari A4",
                            "url": "https://hhac.net"
                        },
                        ...
                    ],
                },
                ...
            ],
        },
        ...
    ]
    */
    const navigation = ref()
</script>
```

## Code 

```vue [components/MegaMenu.vue]
<template>
    <nav aria-label="Main Menu" role="navigation" @mouseleave="closeFlyout()">
        <div role="menubar" aria-label="Main Menu" class="relative flex bg-base-200">
            <div v-for="item in navigation" :key="item.id">
                <NuxtLink
                    :to="item.url"
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-controls="id_menu_1"
                    class="btn rounded-none"
                    :class="{ 'btn-primary': activeTrigger === item.id }"
                    @mouseenter="openFlyout(item.id)"
                    @keydown.space="toggleFlyout(item.id)"
                >
                    {{ item.name }}
                </NuxtLink>
                <div
                    v-if="item.children.length > 0 && activeTrigger === item.id"
                    :id="`id_menu_${item.id}`"
                    role="menu"
                    class="absolute left-0 w-full grid px-4 py-6 bg-base-300"
                    :style="`
                        top: calc(100% + 1px);
                        grid-template-columns: repeat(${item.children.length}, minmax(0, 1fr));
                    `"
                >
                    <div v-for="childItem in item.children" :key="childItem.id">
                        <NuxtLink 
                            :to="item.url" 
                            role="none" 
                            class="link link-hover text-xl font-semibold">{{ childItem.name }}</NuxtLink>
                        <div>
                            <div v-for="subChildItem in childItem.children" :key="subChildItem.id">
                                <NuxtLink 
                                    :to="subChildItem.url" 
                                    role="menuitem" 
                                    class="link link-hover">{{ subChildItem.name }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    const props = defineProps<{
        navigation: Record<any, any>
    }>()

    const activeTrigger = ref();

    function openFlyout (trigger: string) {
        activeTrigger.value = activeTrigger.value !== trigger ? trigger : false
    }

    function toggleFlyout (trigger: string) {
        activeTrigger.value = activeTrigger.value !== trigger ? trigger : false
    }

    function closeFlyout () {
        activeTrigger.value = false;
    }
</script>
```
