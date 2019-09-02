<template>
    <section class="home-services wrapper">
        <h2>Además somos expertos en:</h2>
        <ul>
            <li class="service">
                <img src="~/static/img/d_fiscal.svg" alt="Derecho fiscal"/>
                <span>Derecho Fiscal</span>
            </li>
            <li class="service">
                <img src="~/static/img/p_intelectual.svg" alt="Derecho fiscal"/>
                <span>Propiedad Intelectual</span>
            </li>
            <li class="service">
                <img src="~/static/img/c_exterior.svg" alt="Derecho fiscal"/>
                <span>Comercio Exterior</span>
            </li>
            <li class="service">
                <img src="~/static/img/aduanero.svg" alt="Derecho fiscal"/>
                <span>Derecho Aduanero</span>
            </li>
            <li class="service">
                <img src="~/static/img/d_administrativo.svg" alt="Derecho fiscal"/>
                <span>Derecho Administrativo</span>
            </li>
            <li class="service">
                <img src="~/static/img/d_empresarial.svg" alt="Derecho fiscal"/>
                <span>Derecho Corporativo</span>
            </li>
            <li class="service">
                <img src="~/static/img/amparos.svg" alt="Derecho fiscal"/>
                <span>Amparo</span>
            </li>
        </ul>
        <div class="container-link">
            <nuxt-link to="/servicios" class="btn">
                Conoce nuestros servicios
            </nuxt-link>
        </div>
    </section>
</template>

<style lang="scss">
    .home-services {
        h2 {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            padding: 3.25rem 0px;
        }

        ul {
            color: #BE8210;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            font-size: 1.25rem;
            margin-bottom: 65px;
            justify-content: center;
        }

        .container-link {
            text-align: center;
            margin-bottom: 125px;
        }

        .service {
            margin-bottom: 4.5rem;
            margin-left: 4%;
            margin-right: 4%;
            width: 14%;
            line-height: 1.3;

            &:nth-child(4n+4) {
                margin-right: 0px;
            }

            &:first-child {
                margin-left: 0px;
            }

            img {
                width: 100%;
                margin-bottom: 0.5rem;
            }

            span {
                display: inline-block;
            }
        }

        @media only screen and (max-width: 768px) {

            .container-link {
                margin-bottom: 50px;
            }

            ul {
                flex-direction: column;
                align-items: center;
            }

            .service {
                width: 55%;
                margin-right: 0px;
                margin-left: 0px;
                margin-bottom: 2.25rem;
            }
        }
    }
</style>
