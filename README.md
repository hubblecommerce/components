# Overview

hubble Components is a collection of recommended approaches and components for building a web interface.
Most of them are built to work with the [hubble frontend](https://www.hubblecommerce.io/de){:target="_blank"}
for e-commerce platforms, but they can also be used for any other apps based on
[Nuxt](https://nuxt.com/){:target="_blank"}.

The components where created taking into account aspects such as:
- Responsive: gives feedback to user and works on all common screen resolutions
- Cross-browser compatibility: works on most common browsers
- Accessibility: keyboard and screen reader support
- Composable: uses vue 3 composables
- SSR: search engine relevant content is rendered serverside

## Installation

These components and approaches are built to work with [Vue.js](https://vuejs.org/){:target="_blank"}.
They cannot be installed in the way a typical component library would be installed.
Instead just copy the code you need and build your own component, so you can reuse it.
Although some requirements must be met for use.

### Requirements
First, we recommend the vue meta framework [Nuxt](https://nuxt.com/){:target="_blank"},
as it comes with a lot of useful tools to create performant and production-grade full-stack web apps and websites.

For the visual design, the TailwindCSS Component Library [daisyUI](https://daisyui.com/){:target="_blank"} is used. Of course, this is just a recommendation
and can be exchanged for your own custom styling or your favorite framework.

## Reference

See the hubble components in action in the [hubble Frontend PWA](https://github.com/hubblecommerce/hubble-frontend-pwa){:target="_blank"}
nuxt module, a progressive web app for headless e-commerce platforms.
