<template>
    <section class="home-values wrapper">
        <h2>Nuestros principios</h2>
        <ul>
            <li>
                Resultados
                <img src="~/static/img/resultados.svg" alt="Resultados es uno de nuestros principios"/>
            </li>
            <li>
                Honestidad
                <img src="~/static/img/honestidad.svg" alt="Honestidad es uno de nuestros principios"/>
            </li>
            <li>
                Comunicación
                <img src="~/static/img/comunicacion.svg" alt="Comunicación es uno de nuestros principios"/>
            </li>
        </ul>
        <!--<div class="container-links">
            <button>Conoce nuestros casos de éxito</button>
            <button>Noticias Fiscales</button>
        </div>-->
    </section>
</template>

<style lang="scss" scope>
    .home-values {
        h2 {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            padding: 3.25rem 0px;
        }

        img {
            margin-top: 1.25rem;
            width: 70%;
        }

        .container-links {
            display: flex;
            justify-content: space-around;
            margin-bottom: 145px;

            button {
                width: 45%;
            }

            @media only screen and (max-width: 992px) {
                flex-direction: column;
                align-items: center;
                margin-bottom: 75px;
                
                button {
                    width: 75%;

                    &:first-child {
                        margin-bottom: 35px;
                    }
                }
            }
        }

        ul {
            color: #BE8210;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: center;
            font-size: 1.25rem;
            margin-bottom: 145px;

            li {
                width: 18%;
            }
            
            @media only screen and (max-width: 992px) {
                flex-direction: column;
                align-items: center;
                margin-bottom: 75px;

                li {
                    margin-bottom: 50px;
                    width: 50%;
                }
            }
        }
    }
</style>
