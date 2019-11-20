<template>
  <section class="contact" id="contacto">
    <div class="wrapper wrapper-space container">
      <div class="info">
        <h4>Contactanos</h4>
        <p>
          ¿Te interesa contratar
          <br />alguno de nuestros Servicios?
        </p>

        <div class="info-contact">
          <ul>
            <li>
              <i class="fas fa-envelope" aria-hidden="true"></i>contacto@ssrefiscales.com.mx
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i> 5141 1205
            </li>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i> Av. Insurgentes Centro no. 132, int. 201, Colonia Tabacalera, CDMX, C.P. 06030
            </li>
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
        <p>A la brevedad nos comunicaremos contigo.</p>
      </div>
      <div v-if="!isSuccess">
        <form @submit.prevent="sendEmail" novalidate>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              @keyup="changeField($event, 'name')"
            />
            <p class="error" v-if="errors.name">{{ errors.name }}</p>
          </div>
          <div class="form-group">
            <label for="email">Correo eléctronico</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              @keyup="changeField($event, 'email')"
            />
            <p class="error" v-if="errors.email">{{ errors.email }}</p>
          </div>
          <div class="form-group">
            <label for="tel">Télefono (Opcional)</label>
            <input type="tel" id="tel" name="tel" v-model="form.telephone" />
          </div>
          <div class="form-group">
            <label for="info">Cuentanos en que te podemos ayudar.</label>
            <textarea
              name="info"
              id="info"
              rows="5"
              v-model="form.description"
              @keyup="changeField($event, 'description')"
            ></textarea>
            <p class="error" v-if="errors.description">{{ errors.description }}</p>
          </div>
          <button type="submit" class="btn">
            <span v-if="!loading">Enviar</span>
            <span v-if="loading">
              Cargando
              <i class="fas fa-spinner rotating"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isSuccess: false,
      loading: false,
      form: {
        name: "",
        email: "",
        telephone: "",
        description: ""
      },
      errors: {
        name: "",
        email: "",
        description: ""
      }
    };
  },

  methods: {
    sendEmail() {
      const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isAllowed = true;

      if (!this.form.email || !reEmail.test(this.form.email)) {
        isAllowed = false;
        this.$set(
          this.errors,
          "email",
          this.form.email
            ? "No has ingresado un correo valido"
            : "No has ingresado tu correo electrónico"
        );
      }

      if (!this.form.name) {
        isAllowed = false;
        this.$set(this.errors, "name", "No has ingresado tú nombre");
      }

      if (!this.form.description) {
        isAllowed = false;
        this.$set(
          this.errors,
          "description",
          "No has ingresado ningún mensaje"
        );
      }

      if (isAllowed) {
        this.loading = true;

        this.sendContactInfo();
      }
    },

    changeField(event, type) {
      if (event.target.value) {
        this.$set(this.errors, type, "");
      }
    },

    sendContactInfo() {
      axios
        .post("https://mulantimes.herokuapp.com/", {
          name: this.form.name,
          email: this.form.email,
          telephone: this.form.telephone,
          description: this.form.description
        })
        .then(res => {
          this.isSuccess = true;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  background-image: url("../static/img/contacto_img.jpg");
  box-shadow: inset 0 0 0 2000px rgba(14, 14, 14, 0.65);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
    margin-top: 100px;
    border-top: 1px solid #be8210;
    padding-top: 18px;
    width: 60%;

    li {
      margin-bottom: 12px;
      letter-spacing: 0.5px;
      line-height: 150%;
      font-size: 14px;

      &:last-child {
        i {
          margin-right: 0.25rem;
        }
      }
    }

    i {
      color: #be8210;
      margin-right: 0.5rem;
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
      font-size: 0.75rem;
    }
  }

  form {
    button {
      width: 100%;
      padding: 0.5rem;
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
    color: #be8210;
  }
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 1.5s linear infinite;
  -moz-animation: rotating 1.5s linear infinite;
  -ms-animation: rotating 1.5s linear infinite;
  -o-animation: rotating 1.5s linear infinite;
  animation: rotating 1.5s linear infinite;
}
</style>

