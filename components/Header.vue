<template>
    <header class="header">
        <div class="wrapper">
            <div class="header-wrapper">
                <HeaderLogo />
                <HeaderNav />
            </div>
            <div class="header-main">
                <h1>Defensa <br>y asesoria legal</h1>
                <p>Damos asesoría y resolvemos tus problemas<br> para el crecimiento y desarrollo de tus negocios.</p>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        background-image: url("../static/img/inicio_img.jpg");
        background-repeat:no-repeat;
        background-size: cover; 
        background-position:center;
        padding: 1.5rem 0 3rem 0;
        min-height: 580px;
        color: #fff;

        &-wrapper {
            display: flex;
            justify-content: space-between;
        }

        &-main {
            margin-top: 7.5rem;
            width: 60%;

            h1 {
                font-size: 3rem;
                margin-bottom: 2rem;
                text-transform: uppercase;
                line-height: 59px;
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 100%;
                    background-color: #BE8210;
                    left: 0px;
                    bottom: 0px;
                }
            }

            p {
                font-family: 'Source Sans Pro', sans-serif;
                font-size: 1.5rem;
                line-height: 26px;
            }
        }

        @media screen and (max-width: 768px) {
            &-main {
                width: 100%;
                margin-top: 4.5rem;
                text-align: center;
            }
        }
    }
</style>

<script>
import HeaderNav from '~/components/HeaderNav.vue'
import HeaderLogo from '~/components/HeaderLogo.vue'

export default {
    components: {
        HeaderLogo,
        HeaderNav
    }
}
</script>

