---
title: 'Form'
description: 'Boilerplate for HTML5 forms with vue, tailwindcss and daisyUI'
---

# Form

Boilerplate for forms with `vue` and `daisyUI` that is accessible and uses simple HTML5 validation. 
This example shows a typical login form with two inputs and a submit action. 

### Validation
The default browser form submission is prevented to avoid a page reload. Nevertheless, the HTML5 form validation is 
triggered programmatically via the custom method `validateForm`. It's useful to extract this method as a helper 
function to reuse is across forms. 

### User feedback
While the component is processing, disable all interactive elements and show the user a loading indicator. 
After completion, give the user feedback whether the transaction was successful or not. In this example the messages
are printed directly inside the form. To avoid layout shifts and make sure the message is always visible to the users
current view, it's recommended to use a [toast](https://web.dev/articles/building/a-toast-component){:target="_blank"}
such as the [notification](/notification) component.

## Preview

::prose-preview
::form-preview
::
::

## Code

```vue
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
        
        await apiLogin(username.value, password.value)

        loading.value = false
        username.value = ''
        password.value = ''
        success.value = 'Login successful'
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
```
