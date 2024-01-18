<template>
    <ContentNavigation v-slot="{ navigation }">
        <ul class="p-4 w-full rounded space-y-2">
            <li class="text-neutral text-sm hover:text-base-content" v-for="link of navigation" :key="link._path">
                <NuxtLink activeClass="text-base-content" :to="link._path">{{ link.title }}</NuxtLink>
            </li>
        </ul>
    </ContentNavigation>
</template>
