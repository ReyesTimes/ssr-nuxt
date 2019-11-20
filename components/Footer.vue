<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__align">
        <router-link to="aviso-de-privacidad">Aviso de privacidad</router-link>
        <figure class="logo">
          <img src="~/static/img/ssr_logo.svg" alt="SSR Especialistas Fiscales" />
        </figure>
        <a
          href="https://www.facebook.com/SSR-Especialistas-Fiscales-sc-108254107266890/"
          target="_blank"
          rel="noreferrer"
        >
          <figure class="social">
            <img src="~/static/img/facebook.svg" alt="Ir a la página de facebook" />
          </figure>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: black;
  padding: 14px 0px;

  &__align {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: #be8210;
    text-decoration: none;
    font-size: 0.75rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .logo {
    width: 75px;
  }

  .social {
    width: 16px;

    img {
      filter: invert(47%) sepia(83%) saturate(486%) hue-rotate(1deg)
        brightness(95%) contrast(91%);
    }
  }

  img {
    width: 100%;
  }
}
</style>