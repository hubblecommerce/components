import { ref, type Ref } from 'vue'

const drawerState: Ref<boolean> = ref(false)
const drawerContext: Ref<string> = ref('')
const drawerDirection: Ref<'left' | 'right'> = ref('left')

export function useDrawer () {
    const toggleDrawer = function (context: string, direction: 'left' | 'right') {
        if (direction) {
            drawerDirection.value = direction
        }

        drawerContext.value = drawerContext.value === '' ? context : ''
        drawerState.value = !drawerState.value
    }

    const closeDrawer = function () {
        drawerState.value = false
        drawerContext.value = ''
    }

    return {
        drawerState,
        drawerContext,
        drawerDirection,
        toggleDrawer,
        closeDrawer
    }
}
