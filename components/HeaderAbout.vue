<template>
    <header class="header">
        <div class="wrapper">
            <div class="header-wrapper">
                <HeaderLogo />
                <HeaderNav />
            </div>
            <div class="header-main">
                <h1>¿Quiénes somos?</h1>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        background-image: url("../static/img/nosotros_img.jpg");
        box-shadow: inset 0 0 0 2000px rgba(14, 14, 14, 0.45);
        background-repeat:no-repeat;
        background-size: cover; 
        background-position:center;
        padding: 1.5rem 0 3rem 0;
        min-height: 450px;
        color: #fff;

        &-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
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

