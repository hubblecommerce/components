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
        console.log(e)
        console.error(
            `Icon '${props.name}' doesn't exist in 'assets/icons'`
        )
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
