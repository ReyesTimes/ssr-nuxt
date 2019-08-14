<template>
    <div class="logo">
        <nuxt-link to="/">
            <figure>
                <img src="~/static/img/ssr_logo.svg" alt="Ir a inicio" />
            </figure>
        </nuxt-link>
    </div>
</template>

<style lang="scss">
    .logo {
        figure {
            max-width: 150px;

            img {
                width: 100%;
            }
        }
    }
</style>
