---
title: 'SVG Icons'
description: 'Component for dynamically implement SVG icons'
---

# SVG Icons

Component for dynamically render SVG icons. Implement the `Icon.vue` component and place all icons under 
`assets/icons/*.svg`. Then call the `Icon.vue` component with name of the SVG filename and an optional size.

## Preview

::prose-preview
::icons-preview
::
::

## Usage

```vue [components/MyCustomComponent.vue]
<template>
    <div class="flex flex-wrap justify-center gap-4">
        <button class="btn btn-circle btn-outline">
            <Icon name="home" :size="'xs'" />
        </button>
        <button class="btn btn-circle btn-outline">
            <Icon name="home" :size="'sm'" />
        </button>
        <button class="btn btn-circle btn-outline">
            <Icon name="home" :size="'md'"/>
        </button>
        <button class="btn btn-circle btn-outline">
            <Icon name="home" :size="'lg'"/>
        </button>
        <button class="btn btn-circle btn-outline">
            <Icon name="home" :size="'xl'"/>
        </button>
    </div>
</template>
```

## Code

```vue [components/Icon.vue]
<template>
    <span
        class="nuxt-icon"
        :class="iconSizeClass"
        v-html="icon"
    />
</template>

<script setup lang="ts">
import { ref, watchEffect } from '#imports'

const props = withDefaults(defineProps<{
    name: string;
    size?: string;
}>(), { size: 'md' })

const icon = ref<string | Record<string, any>>('')

const iconSizeClass = reactive({
    'w-3 h-3': props.size === 'xs',
    'w-4 h-4': props.size === 'sm',
    'w-5 h-5': props.size === 'md',
    'w-6 h-6': props.size === 'lg',
    'w-8 h-8': props.size === 'xl',
})

async function getIcon() {
    try {
        const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
            as: 'raw',
            eager: false
        })

        icon.value = await iconsImport[`/assets/icons/${props.name}.svg`]()
    } catch (e) {
        console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`)
    }
}

await getIcon()

watchEffect(getIcon)
</script>

<style>
.nuxt-icon {
    svg {
        @apply w-full h-full align-middle;

        * {
            @apply fill-current;
        }
    }
}
</style>
```
