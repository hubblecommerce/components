<template>
    <div class="relative w-full min-h-[300px]">
        <div class="flex flex-col items-start gap-4">
            <button class="btn btn-success" @click="showNotification('Success message', 'success')">
                Show success message
            </button>

            <button class="btn btn-error" @click="showNotification('Error message', 'error')">
                Show error message
            </button>

            <button class="btn btn-info" @click="showNotification('Persistent info message', 'info', true)">
                Show persistent message
            </button>
        </div>

        <div class="toast absolute toast-bottom toast-end w-full md:w-auto whitespace-pre-line" style="z-index: 1000">
            <Transition name="fade">
                <TransitionGroup v-if="notifications.length > 0" name="list" tag="div" class="relative flex flex-col gap-2">
                    <div
                        v-for="notification in notifications"
                        :key="notification.id"
                        class="alert relative overflow-hidden"
                        :class="parseTypeClass(notification.type)"
                        @mouseenter.exact="!notification.keepAlive ? pauseTimeout($event, notification) : null"
                        @mouseleave="!notification.keepAlive ? resumeTimeout($event, notification) : null"
                    >
                        <div
                            v-if="!notification.keepAlive"
                            class="progress-bar alert absolute bottom-0 p-0 border-none left-0 h-full brightness-75 z-10"
                            :class="parseTypeClass(notification.type)"
                            :style="`animation: notificationProgressAnimation ${notification.displayTime}s; animation-timing-function: linear;`"
                        />
                        <div class="pr-12 z-20">
                            <span>{{ notification.message }}</span>
                            <span class="btn btn-ghost btn-circle absolute top-1 right-1" @click="closeNotification(notification.id)">
                                <XMarkIcon class="h-5 w-5" />
                            </span>
                        </div>
                    </div>
                </TransitionGroup>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useNotification, type NotificationType } from '#imports'

const { notifications, closeNotification, setDefaultOptions, showNotification } = useNotification()

setDefaultOptions({
    displayTime: 4,
    keepAlive: false
})

const parseTypeClass = function (type: NotificationType): string {
    if (type === 'info') {
        return 'alert-info'
    }

    if (type === 'success') {
        return 'alert-success'
    }

    if (type === 'warning') {
        return 'alert-warning'
    }

    if (type === 'error') {
        return 'alert-error'
    }
}

function pauseTimeout (event, notification) {
    notification.timer.pause()
    event.target.getElementsByClassName('progress-bar')[0].style.animationPlayState = 'paused'
}

function resumeTimeout (event, notification) {
    notification.timer.resume()
    event.target.getElementsByClassName('progress-bar')[0].style.animationPlayState = 'running'
}
</script>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}

.list-leave-active {
    position: absolute;
}

@keyframes notificationProgressAnimation {
    from { width: 0 }
    to   { width: 100% }
}
</style>
