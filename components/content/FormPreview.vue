<template>
    <form ref="loginForm" class="flex flex-col gap-4" @submit.prevent="onFormSubmit">
        <div class="form-control">
            <label for="email" class="label">
                <span class="label-text">Email</span>
            </label>
            <input
                id="username"
                v-model="username"
                required
                :disabled="loading"
                name="username"
                type="email"
                inputmode="email"
                placeholder="Type your email"
                class="input input-bordered w-full"
            >
        </div>

        <div class="form-control">
            <label for="password" class="label">
                <span class="label-text">Password</span>
            </label>
            <div class="input-group">
                <input
                    id="password"
                    v-model="password"
                    required
                    :disabled="loading"
                    name="password"
                    type="password"
                    placeholder="Type your password"
                    class="input input-bordered w-full"
                >
            </div>
        </div>

        <div
            v-if="success || error"
            role="alert"
            class="alert py-2 px-4"
            :class="{ 'alert-success': success, 'alert-error': error }"
        >
            <span v-if="success">{{ success }}</span>
            <span v-if="error">{{ error }}</span>
        </div>

        <button
            type="submit"
            class="btn btn-primary btn-block"
            :disabled="loading"
            @click.prevent="onFormSubmit()"
        >
            <span v-if="loading" class="loading" />
            <span>Login</span>
        </button>
    </form>
</template>

<script setup lang="ts">
import type { UnwrapRef } from 'vue'

// Interaction states
const loading = ref(false)
const success = ref<string | null>(null)
const error = ref<string | null>(null)

// Form data
const username = ref('')
const password = ref('')
const loginForm = ref<HTMLFormElement | null>(null)

async function onFormSubmit (): Promise<void> {
    loading.value = true
    error.value = null
    success.value = null

    try {
        const isValid = validateForm(loginForm.value)

        if (!isValid) {
            loading.value = false
            return
        }

        // Simulate time to wait for api
        setTimeout(() => {
            // await apiLogin(username.value, password.value)

            loading.value = false
            username.value = ''
            password.value = ''
            success.value = 'Login successful'
        }, 1500)
    } catch (e) {
        loading.value = false
        error.value = e
    }
}

function validateForm (form: UnwrapRef<HTMLFormElement | null>): boolean {
    const isValid = form?.checkValidity()

    if (!isValid) {
        form?.reportValidity()
        return false
    }

    return true
}
</script>
