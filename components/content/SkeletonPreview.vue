<template>
    <div class="w-full max-w-sm flex flex-wrap gap-2">
        <div class="flex gap-2 w-full">
            <Skeleton circle size="large" class="bg-base-200 flex-shrink-0" />
            <Skeleton size="large" />
        </div>
        <Skeleton :repeat="5" size="small" />
    </div>
</template>
