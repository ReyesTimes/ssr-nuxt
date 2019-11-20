<template>
  <div>
    <Modal />
    <Header />
    <main>
      <section class="service-list">
        <div class="content-img">
          <img src="~/static/img/mazo_img.png" />
        </div>
        <div class="content">
          <p>Ofrecemos servicios profesionales para resolver cualquier problemática y/o duda relacionada con tus negocios en las áreas de:</p>
          <ul>
            <li>
              Derecho Corporativo
              <br />
              <a href="#" @click.prevent="openDetailModal('corporativo')">Ver más</a>
            </li>
            <li>
              Derecho Fiscal
              <br />
              <a href="#" @click.prevent="openDetailModal('fiscal')">Ver más</a>
            </li>
            <li>
              Comercio Exterior y Aduanero
              <br />
              <a href="#" @click.prevent="openDetailModal('exterioraduanero')">Ver más</a>
            </li>
            <li>
              Derecho Administrativo
              <br />
              <a href="#" @click.prevent="openDetailModal('administrativo')">Ver más</a>
            </li>
            <li>
              Amparo
              <br />
              <a href="#" @click.prevent="openDetailModal('amparos')">Ver más</a>
            </li>
            <li>
              Propiedad Intelectual
              <br />
              <a href="#" @click.prevent="openDetailModal('intelectual')">Ver más</a>
            </li>
            <li>
              Contabilidad
              <br />
              <a href="#" @click.prevent="openDetailModal('contabilidad')">Ver más</a>
            </li>
            <li>
              Otros Servicios
              <br />
              <a href="#" @click.prevent="openDetailModal('otros')">Ver más</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="why wrapper">
        <div class="title">
          <h2>
            <em>¿Por qué</em>
            <br />
            <span>SSR?</span>
          </h2>
        </div>
        <div class="list">
          <ul>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/asesoramos_icono.svg" />
              </div>Asesoramos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/combatimos_icono.svg" />
              </div>Combatimos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/resolvemos_icono.svg" />
              </div>Resolvemos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/contabilizamos_icono.svg" />
              </div>Contabilizamos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/capacitamos_icono.svg" />
              </div>Capacitamos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/administramos_icono.svg" />
              </div>Administramos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/registramos_icono.svg" />
              </div>Registramos
            </li>
            <li>
              <div class="container-img">
                <img src="~/static/img/services/gestionamos_icono.svg" />
              </div>Gestionamos
            </li>
          </ul>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.why {
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 6.25rem;
    margin-right: 100px;

    em {
      font-size: 3rem;
      font-style: oblique;
    }

    span {
      padding-left: 35px;
    }
  }

  .list {
    width: 60%;

    ul {
      font-size: 1.5rem;
      font-family: "Source Sans Pro";
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        width: 45%;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
      }

      .container-img {
        max-width: 100px;
        margin-right: 25px;

        img {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;

    h2 {
      margin-bottom: 50px;
      margin-right: 0px;
    }

    .list {
      width: 100%;

      ul {
        justify-content: start;
        font-size: 1.5rem;

        li {
          width: 30%;
          margin-right: 3.333%;

          &:nth-child(3n + 3) {
            margin-right: 0px;
          }
        }

        .container-img {
          margin-right: 15px;
          max-width: 85px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .list {
      ul {
        flex-direction: column;
        align-items: center;

        li {
          width: 85%;
          margin-right: 0px;
        }
      }
    }
  }
}

.service-list {
  padding: 5rem 0rem;
  display: flex;

  .content-img {
    width: 48%;
    margin-right: 3.5rem;

    img {
      width: 100%;
    }
  }

  .content {
    width: 30%;
  }

  p {
    color: #000000;
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 60px;
  }

  ul {
    color: #be8210;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;

    li {
      margin-bottom: 40px;
      position: relative;
      padding-left: 40px;

      a {
        font-size: 0.85rem;
        color: #be8210;
        margin-top: 7.5px;
        display: block;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        /* Rotate Origin */
        -webkit-transform-origin: 0 100%;
        -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
        -o-transform-origin: 0 100%;
        transform-origin: 0 100%;
      }

      &::before {
        width: 10px;
        height: 10px;
        left: 3%;
        top: 7px;
        background-color: #be8210;
        /* Rotate */
      }

      &::after {
        width: 18px;
        height: 18px;
        left: 3%;
        top: 3.5px;
        border: 2px solid #be8210;
        background-color: transparent;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    padding: 50px 15px;

    p {
      margin-bottom: 50px;
    }

    .content-img {
      display: none;
    }

    .content {
      width: 100%;
    }
  }
}
</style>

<script>
import Header from "~/components/HeaderService.vue";
import Contact from "~/components/Contact.vue";
import Modal from "~/components/Modal.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Contact,
    Footer,
    Modal
  },

  head() {
    return {
      title: "SSR Especialistas Fiscales | Servicios profesionales",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Ofrecemos servicios profesionales para resolver cualquier problemática y/o duda relacionada con tus negocios."
        }
      ]
    };
  },

  methods: {
    openDetailModal(type) {
      this.$store.commit("SWITCH_MODAL_STATE");
      this.$store.commit("CHANGE_TYPE_MODAL", type);
    }
  }
};
</script>
