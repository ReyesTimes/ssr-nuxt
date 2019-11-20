<template>
  <div class="nav-header-parent">
    <nav class="nav-header">
      <ul>
        <li>
          <nuxt-link to="/servicios">Servicios</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/nosotros">Nosotros</nuxt-link>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
    <div class="nav-header-mobile">
      <button
        @click="toggleMenu"
        :aria-expanded="showMenu"
        aria-label="Boton de Navegación Mobile"
      >
        Menú
      </button>
      <nav
        :class="showMenu ? 'show' : ''"
        aria-label="Mobile Navigation"
        role="navigation"
      >
        <ul>
          <li>
            <a href="#" @click="toggleMenu">✖</a>
          </li>
          <li>
            <a
              @click="sendTo('')"
              :class="$nuxt.$route.path === '/' ? 'active' : ''"
              >Inicio</a
            >
          </li>
          <li>
            <a
              @click="sendTo('servicios')"
              :class="
                $nuxt.$route.path.indexOf('servicios') > -1 ? 'active' : ''
              "
              >Servicios</a
            >
          </li>
          <li>
            <a
              @click="sendTo('nosotros')"
              :class="
                $nuxt.$route.path.indexOf('nosotros') > -1 ? 'active' : ''
              "
              >Nosotros</a
            >
          </li>
          <li>
            <a @click="sendToContact()">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-header {
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;

  &-parent {
    width: 50%;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0px;
    margin: 0px;

    li {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  &-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;

    &-mobile {
      display: block;
      text-align: right;

      nav {
        display: block;
        position: fixed;
        height: 100vh;
        width: 100%;
        background-color: black;
        left: 0px;
        top: 0px;
        color: white;
        z-index: 1;
        transform: translateX(100%);
        transition: 250ms transform ease-in;

        &.show {
          transform: translateX(0%);
        }

        li {
          text-align: left;
          padding: 35px;

          &:first-child {
            position: absolute;
            right: 0%;
            top: 0%;
          }
        }

        a {
          color: #fff;
          font-size: 1.5rem;
          text-decoration: none;

          &.active {
            border-bottom: 1px solid #be8210;
          }
        }
      }

      button {
        font-size: 1.25rem;
        padding: 0.7rem 1.2rem;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    sendTo(link) {
      this.toggleMenu();
      this.$router.push(`/${link}`);
    },

    sendToContact() {
      this.toggleMenu();

      let $contact = document.getElementById('contacto');
      $contact.scrollIntoView();
    }
  }
};
</script>
