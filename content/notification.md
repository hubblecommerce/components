---
title: 'Notification'
description: 'Toast component for notifications'
---

# Notification

This component renders a `daisyUI` toast and can be controlled app wide by a useNotification `vue` composable. 
Implement the `Notifications.vue` component on a toplevel in your app, such as the layout.
Then use the `useNotification` composable to add or remove notifications like in the `NotificationTrigger.vue` example.
There are four notification types implemented and default settings, 
which can be modified via the `useNotification` composable.

## Preview

::prose-preview
::notification-preview
::
::

## Usage

```vue [layouts/default.vue]
<template>
    <header></header>
    <main>
        <slot />
    </main>
    <footer></footer>
    <Notifications />
</template>
```

```vue [components/NotificationTrigger.vue]
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
    </div>
</template>

<script setup lang="ts">
    const { showNotification } = useNotification()
</script>
```

## Code

### Component

```vue [components/Notifications.vue]
<template>
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
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useNotification, type NotificationType } from '#imports'

const { notifications, closeNotification, setDefaultOptions } = useNotification()

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

<style scoped>
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
</style>
```

### Composable

```ts [composables/useNotification.ts]
import { ref, type Ref } from 'vue'

export type NotificationType = string | 'info' | 'success' | 'warning' | 'error'
export type PausableTimeoutFun = (callback: () => void, delay: number) => void

export interface NotificationOptions {
    displayTime?: number,
    keepAlive?: boolean,
    type?: NotificationType
}

export interface Notification extends NotificationOptions {
    id: number,
    message: string,
    timer?(): PausableTimeoutFun
}

export interface IUseNotification {
    notifications: Ref<Notification[]>,
    showNotification(message: string, type?: NotificationType, keepAlive?: boolean, displayTime?: number): void,
    closeNotification(id: number): void,
    setDefaultOptions(options: NotificationOptions): void
}

const PausableTimout: PausableTimeoutFun = function (callback, delay) {
    let timerId, start, remaining = delay

    this.pause = function() {
        window.clearTimeout(timerId)
        timerId = null
        remaining -= Date.now() - start
    };

    this.resume = function() {
        if (timerId) {
            return
        }

        start = Date.now()
        timerId = window.setTimeout(callback, remaining)
    };

    this.resume()
};

const notifications: Ref<Notification[]> = ref([])
let notificationDefaultDisplayTime = 5
let notificationsDefaultKeepAlive = false
let notificationsDefaultType = 'info'
let notificationCounter = 0

export function useNotification (): IUseNotification {
    function setDefaultOptions (options: NotificationOptions) {
        notificationDefaultDisplayTime = options.displayTime != null ?
            options.displayTime : notificationDefaultDisplayTime
        notificationsDefaultKeepAlive = options.keepAlive != null ?
            options.keepAlive : notificationsDefaultKeepAlive
        notificationsDefaultType = options.type != null ?
            options.type : notificationsDefaultType
    }

    function showNotification (
        message: string,
        type = notificationsDefaultType,
        keepAlive = notificationsDefaultKeepAlive,
        displayTime = notificationDefaultDisplayTime
    ): void {
        const notification: Notification = {
            id: notificationCounter,
            message,
            displayTime,
            keepAlive,
            type,
            ...(!keepAlive && { timer: null })
        }

        notifications.value.push(notification)

        if (!notification.keepAlive) {
            notification.timer = new PausableTimout(() => {
                closeNotification(notification.id)
            }, notification.displayTime != null ? notification.displayTime * 1000 : 1000)
        }

        notificationCounter++
    }

    function closeNotification (id: number): void {
        notifications.value = notifications.value.filter((item) => {
            return item.id !== id
        })
    }

    return {
        notifications,
        showNotification,
        closeNotification,
        setDefaultOptions
    }
}
```
