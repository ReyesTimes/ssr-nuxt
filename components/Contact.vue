<template>
    <section class="contact">
        <div class="wrapper wrapper-space container">
            <div class="info">
                <h4>Contactanos</h4>
                <p>¿Te interesa contratar<br> alguno de nuestros Servicios?</p>

                <div class="info-contact">
                    <ul>
                        <li>correo@ssr.com</li>
                        <li>+52 1 55 5555 5555</li>
                    </ul>
                </div>
            </div>
            <div v-if="isSuccess" class="success">
                <div class="title">
                    <figure>
                        <img src="~/static/img/buho_icono.svg" alt="Ir a inicio" />
                    </figure>
                    <h4>¡Gracias!</h4>
                </div>
                <p>En la brevedad nos contactaremos contigo para hablar más sobre tu caso.</p>
            </div>
            <div v-if="!isSuccess">
                <form @submit.prevent="sendEmail" novalidate>
                    <div class="form-group">
                        <label for="name">
                            Nombre
                        </label>
                        <input type="text" id="name" name="name" v-model="form.name" @keyup="changeField($event, 'name')"/>
                        <p class="error" v-if="errors.name">{{ errors.name }}</p>
                    </div>
                    <div class="form-group">
                        <label for="email">
                            Correo eléctronico
                        </label>
                        <input type="email" id="email" name="email" v-model="form.email" @keyup="changeField($event, 'email')"/>
                        <p class="error" v-if="errors.email">{{ errors.email }}</p>
                    </div>
                    <div class="form-group">
                        <label for="tel">
                            Télefono (Opcional)
                        </label>
                        <input type="tel" id="tel" name="tel" v-model="form.telephone"/>
                    </div>
                    <div class="form-group">
                        <label for="info">
                            Cuentanos en que te podemos ayudar.
                        </label>
                        <textarea name="info" rows="5" v-model="form.description" @keyup="changeField($event, 'description')"></textarea>
                        <p class="error" v-if="errors.description">{{ errors.description }}</p>
                    </div>
                    <button type="submit" class="btn">Enviar</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isSuccess: false,
            form: {
                name: '',
                email: '',
                telephone: '',
                description: '',  
            },
            errors: {
                name: '',
                email: '',
                description: '',  
            }
        }
    },

    methods: {
        sendEmail() {
            const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let isAllowed = true;

            if (!this.form.email || !reEmail.test(this.form.email)) {
                isAllowed = false;
                this.$set(this.errors, 'email', (this.form.email) ? 'No has ingresado un correo valido': 'No has ingresado tu correo electrónico');
            }

            if (!this.form.name) {
                isAllowed = false;
                this.$set(this.errors, 'name', 'No has ingresado tú nombre');
            }
            
            if (!this.form.description) {
                isAllowed = false;
                this.$set(this.errors, 'description', 'No has ingresado ningún mensaje');
            }

            if (isAllowed) {
                this.sendContactInfo();
            }
        },

        changeField(event, type) {
            if (event.target.value) {
                this.$set(this.errors, type, '');
            }
        },

        sendContactInfo() {
            axios.post('https://mulantimes.herokuapp.com/', {
                name: this.form.name,
                email: this.form.email,
                telephone: this.form.telephone,
                description: this.form.description,
            })
            .then((res) => {
                this.isSuccess = true;
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .contact {
        background-image: url("../static/img/contacto_img.jpg");
        box-shadow: inset 0 0 0 2000px rgba(14, 14, 14, 0.65);
        background-repeat:no-repeat;
        background-size: cover; 
        background-position:center;
        color: #fff;

        h4 {
            font-size: 3rem;
            margin-bottom: 24px;
        }

        p {
            font-size: 1.5rem;
            line-height: 29px;
        }

        .info-contact {
            margin-top: 104px;
            border-top: 1px solid #BE8210;
            padding-top: 22px;

            li {
                margin-bottom: 8px;
            }
        }

        .success {
            width: 42%;

            .title {
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                h4 {
                    margin-bottom: 0px;
                }
            }

            p {
                font-size: 1.25rem;
                margin-bottom: 16px;
            }

            figure {
                width: 100px;
            }
        }

        .container {
            display: flex;
            justify-content: space-between;
        }

        .form-group {
            margin-bottom: 1.25rem;

            label {
                display: block;
                margin-bottom: 0.5rem;
            }

            input {
                width: 100%;
                padding: 10px;
            }

            .error {
                font-size: .75rem;
            }
        }
        
        form {
            button {
                width: 100%;
                padding: .5rem;
            }

            textarea {
                width: 100%;
            }
        }

        @media only screen and (max-width: 992px) {
            .container {
                flex-direction: column;
            }

            .info {
                margin-bottom: 50px;

                &-contact {
                    margin-top: 50px;
                }
            }

            .success {
                width: 100%;
                text-align: center;
            }
        }

        .error {
            color: #BE8210;
        }
    }
</style>

