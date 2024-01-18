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
