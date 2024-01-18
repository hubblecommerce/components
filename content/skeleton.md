---
title: 'Skeleton'
description: 'Placeholder component to show while loading, to prevent layout shifts'
---

# Skeleton

Component to show while in an active loading state to give user feedback and prevent layout shifts.
Best to be used within the loading section of the [Async Component Wrapper](/async-component-wrapper). 

## Preview

::prose-preview
::skeleton-preview
::
::

## Usage

```vue [components/MyCustomComponent.vue]
<template>
    <div class="w-full max-w-sm flex flex-wrap gap-2">
        <div class="flex gap-2 w-full">
            <Skeleton circle size="large" class="bg-base-200 flex-shrink-0" />
            <Skeleton size="large" />
        </div>
        <Skeleton :repeat="5" size="small" />
    </div>
</template>
```

## Code

```vue [components/Skeleton.vue]
<template>
    <div
        v-for="index in repeat"
        :key="index"
        :class="classes"
        :style="styles"
    />
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    interface Props {
        round?: boolean,
        circle?: boolean,
        height?: string | number,
        width?: string | number,
        size?: 'small' | 'medium' | 'large',
        repeat?: string | number,
        animated?: boolean,
        sharp?: boolean,
        class?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        round: false,
        circle: false,
        size: 'medium',
        repeat: 1,
        animated: true,
        sharp: true,
        class: 'bg-base-200'
    })

    const styles = computed(() => {
        let width = 'width: 100%;'
        if (props.width) {
            if (typeof props.width === 'number') {
                width = `width: ${props.width}px;`
            }
            if (typeof props.width === 'string') {
                width = `width: ${props.width};`
            }
        }

        let height = 'height: 24px;'
        if (props.size === 'small') {
            height = 'height: 24px;'
        }

        if (props.size === 'medium') {
            height = 'height: 32px;'
        }

        if (props.size === 'large') {
            height = 'height: 48px;'
        }

        if (props.circle) {
            width = height.replace('height', 'width')
        }

        return [
            width,
            height
        ].join(' ')
    })

    const classes = computed(() => {
        let round
        if (props.round) {
            round = 'rounded-3xl'
        }

        if (!props.sharp) {
            round = 'rounded'
        }

        if (props.circle) {
            round = 'rounded-full'
        }

        let animated
        if (props.animated) {
            animated = 'animate-pulse'
        }

        return [
            round,
            animated,
            props.class
        ].join(' ')
    })
</script>
```

