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
                        <NuxtLink :to="item.url" role="none" class="link link-hover text-xl font-semibold">{{ childItem.name }}</NuxtLink>

                        <div>
                            <div v-for="subChildItem in childItem.children" :key="subChildItem.id">
                                <NuxtLink :to="subChildItem.url" role="menuitem" class="link link-hover">{{ subChildItem.name }}</NuxtLink>
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
