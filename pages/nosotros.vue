<template>
  <div>
    <Header />
    <main>
        <section class="about">
          <div class="wrapper">
            <h2>Somos SSR</h2>
            <p class="subtitle">Abogados & Contadores Especialistas</p>
            <p class="content">
              Un equipo jurídico-contable joven y dinámico capaz de ofrecer servicios profesionales para resolver cualquier problemática y/o duda que nuestros clientes tengan frente a las autoridades fiscales, administrativas, jurisdiccionales y judiciales, todo con la finalidad de aportar al crecimiento y desarrollo de negocios y empresas.
            </p>
          </div>
        </section>
        <section class="mission-vision">
          <div class="wrapper wrapper-space">
            <div class="mission-container">
              <div class="text-center element">
                <div class="child">
                  <h3 class="title text-uppercase">Misión</h3>
                  <p class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam distinctio tenetur, accusamus porro reprehenderit provident aliquam repellendus est laudantium dolores? A blanditiis placeat quod porro eum et repudiandae animi?</p>
                </div>
              </div>
              <div class="text-center element">
                <div class="child">
                  <h3 class="title text-uppercase">Visión</h3>
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut nostrum tempore accusantium rerum quia excepturi, magnam sint sapiente quam pariatur exercitationem delectus molestiae perferendis provident labore fuga repellat vitae.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="team wrapper wrapper-space">
          <div class="title">
            <h2><em>Nuestro</em><br><span>EQUIPO</span></h2>
          </div>
          <ul>
            <li>
              Perla Santillan
              <button>
                Conocer
              </button>
            </li>
            <li>
              David Sierra
              <button>
                Conocer
              </button>
            </li>
          </ul>
        </section>
        <Contact />
    </main>
  </div>
</template>
 
<style lang="scss" scoped>
  .about {
    background-color: #BE8210;
    padding: 5rem 0rem;
    text-align: center;
    
    h2 {
      font-size: 4rem;
      margin-bottom: 30px;
      font-weight: bold;
    }

    .subtitle {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 75px;
    }

    .content {
      margin-top: 75px;
      font-size: 1.5rem;
      line-height: 1.3;
    }

    @media only screen and (max-width: 992px) {
      h2 {
        font-size: 3.5rem;
      }

      .subtitle {
        font-size: 1.5rem;
      }
    }
  }

  .team {
    h2 {
      font-size: 6.25rem;
      margin-bottom: 100px;

      em {
        font-size: 3rem;
        font-style: oblique;
      }

      span {
        padding-left: 35px;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;
      
      li {
        font-size: 1.5rem;
        text-align: center;
        min-height: 125px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    }

    @media only screen and (max-width: 768px) {
      h2 {
        font-size: 4rem;
        margin-left: 20px;

        span {
          padding-left: 15px;
        }
      }

      ul {
        flex-direction: column;

        li {
          margin-bottom: 75px;
        }
      }
    }
  }
  
  .mission {
    &-vision {
      background-image: url("../static/img/misionVision_img.jpg");
      background-repeat:no-repeat;
      background-size: cover; 
      background-position:center;

      .element {
        padding: 20px;
        background-color: #fff;
        width: 47%;
      }

      .child {
        border: 1px solid #BE8210;
        padding: 40px;
      }

      .title {
        font-family: "Libre Baskerville";
        font-size: 24px;
        margin-bottom: 30px;
      }

      .content {
        margin-top: 30px;
        line-height: 1.58;
        letter-spacing: -0.004em;
      }
    }

    &-container {
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 992px) {
          flex-direction: column;
          align-items: center;

          .element{ 
            width: 75%;
            
            &:first-child {
              margin-bottom: 30px;
            }
          }
      }
    }
  }
</style>

<script>
import Header from '~/components/HeaderAbout.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Header,
    Contact,
  }
}
</script>
