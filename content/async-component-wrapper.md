---
title: 'Async Component Wrapper'
description: 'Wrapper structure to handle loading and error state'
---

# Async Component Wrapper

Wrapper structure to handle loading and error state. Useful for dynamic components or ones who working with async data 
(e.g. fetching data from api).

## Code 

```vue [components/MyCustomComponent.vue]
<template>
    <Transition name="fade" mode="out-in">
        <div v-if="loading">
            <!--  Place your loading animation or skeleton here -->
            Loading...
        </div>
        <div v-else-if="error">
            {{ error }}
        </div>
        <div v-else>
            {{ data }}
        </div>
    </Transition>
</template>

<script setup lang="ts">
    import type { Ref } from 'vue'

    const loading: Ref<boolean> = ref(true)
    const data: Ref<any> = ref(null)
    const error: Ref<Error | null> = ref(null)

    onMounted(async () => {
        error.value = null
        loading.value = true

        try {
            data.value = await $fetch('https://icanhazdadjoke.com/slack')
        } catch (e) {
            error.value = e
        }

        loading.value = false
    })
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>

```
