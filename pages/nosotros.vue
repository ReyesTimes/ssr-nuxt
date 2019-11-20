<template>
  <div>
    <Modal />
    <Header />
    <main>
      <section class="about">
        <div class="wrapper">
          <h2>Somos SSR</h2>
          <p class="subtitle">Especalistas Fiscales</p>
          <p
            class="content"
          >Un equipo jurídico-contable joven y dinámico capaz de ofrecer servicios profesionales para resolver cualquier problemática y/o duda que nuestros clientes tengan frente a las autoridades fiscales, administrativas, jurisdiccionales y judiciales, todo con la finalidad de aportar al crecimiento y desarrollo de negocios y empresas.</p>
        </div>
      </section>
      <section class="mission-vision">
        <div class="wrapper wrapper-space">
          <div class="mission-container">
            <div class="text-center element">
              <div class="child">
                <h3 class="title text-uppercase">Misión</h3>
                <p
                  class="content"
                >Prestar servicios profesionales y personalizados con la finalidad de ofrecer soluciones legales integrales acorde a la necesidad de nuestros clientes, sujetándonos en todo momento a los principios de la firma.</p>
                <p
                  class="content"
                >SSR Especialistas Fiscales, S.C., se mantiene siempre actualizado sobre las materias de las que es especialista, todo ello para superar en todo momento las expectativas de nuestros clientes.</p>
              </div>
            </div>
            <div class="text-center element">
              <div class="child">
                <h3 class="title text-uppercase">Visión</h3>
                <p
                  class="content"
                >En SSR Especialistas Fiscales S.C., somos una firma legal que aspira a ser un grupo de excelencia en la prestación de los distintos servicios jurídicos que ofertamos, por ello, nuestro personal está debidamente capacitado para asesorar e implementar aspectos legales para la prevención y resolución de los diversos conflictos a los que se pueden afrontar las diferentes actividades económicas de nuestros clientes.</p>
                <p
                  class="content"
                >Buscamos captar cada día más clientes de diversas partes de la república, para así prestar nuestros servicios en todo el país y llegar a ser uno de los despachos más reconocidos en la república mexicana.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="team wrapper wrapper-space">
        <div class="title">
          <h2>
            <em>Nuestro</em>
            <br />
            <span>EQUIPO</span>
          </h2>
        </div>
        <ul>
          <li>
            Perla Santillán
            <button @click.prevent="openDetailModal('perla')">Conocer</button>
          </li>
          <li>
            David Sierra
            <button @click.prevent="openDetailModal('david')">Conocer</button>
          </li>
          <li>
            Samantha Escobar
            <button @click.prevent="openDetailModal('samantha')">Conocer</button>
          </li>
        </ul>
      </section>
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "~/components/HeaderAbout.vue";
import Contact from "~/components/Contact.vue";
import Modal from "~/components/Modal.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Contact,
    Modal,
    Footer
  },

  head() {
    return {
      title: "SSR Especialistas Fiscales | Sobre nosotros",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Equipo jurídico-contable joven y dinámico capaz de ofrecer servicios profesionales para resolver cualquier problemática y/o duda que nuestros clientes tengan frente a las autoridades fiscales, administrativas, jurisdiccionales y judiciales, todo con la finalidad de aportar al crecimiento y desarrollo de negocios y empresas."
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
