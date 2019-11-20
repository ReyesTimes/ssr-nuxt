<template>
  <div>
    <HeaderTerms />
    <main class="terms">
      <div class="wrapper">
        <p>
          SSR ESPECIALISTAS FISCALES, S.C., en lo sucesivo “SSR Especialistas Fiscales”, con domicilio ubicado en Avenida Insurgentes centro 132, interior 201, Colonia Tabacalera, Delegación Cuauhtémoc, Ciudad de México, C.P. 06030, está comprometido con la protección de datos
          personales y la privacidad de sus clientes, proveedores y terceros; en cumplimiento con la Ley
          Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, emite
          el siguiente aviso de privacidad.
        </p>

        <p>
          Los datos personales que el Titular proporcione directamente o a través de medios electrónicos a
          SSR Especialistas Fiscales, son recabados y serán tratados bajo los principios de licitud,
          consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad, de
          conformidad con lo dispuesto por la Ley y su Reglamento.
        </p>
        <p>
          SSR Especialistas Fiscales podrá recabar datos personales en función del servicio contratado por el
          Titular. De igual forma, dichos datos personales podrán ser transferidos a terceras personas ya
          sean físicas o morales, nacionales o extranjeras, con el único propósito de cumplir con los fines
          señalados en el presente aviso de privacidad.
        </p>
        <p>
          Hacemos de su conocimiento que los datos personales proporcionados por el Titular serán
          utilizados para:
        </p>
        <ul>
          <li>a) Identificarlo y contactarlo.</li>
          <li>b) Llevar a cabo el proceso y verificación del conflicto sometido a su consideración.</li>
          <li>
            c) Integrar su expediente como cliente o prospecto de cliente, y darlo de alta e nuestra base de
            datos.
          </li>
          <li>
            d) Proveerle los productos o servicios que contrata con nosotros, y cumplir las obligaciones
            contraídas con usted.
          </li>
          <li>e) Realizar el proceso relacionado con la facturación.</li>
          <li>f) En su caso, efectuar gestiones de cobranza.</li>
          <li>g) Invitarlo a eventos profesionales, académicos y culturales.</li>
        </ul>
        <p>
          Los datos personales proporcionados se encontrarán debidamente resguardados bajo estricta
          confidencialidad y serán protegidos a través de medidas de seguridad tecnológicas, físicas y
          administrativas, previniendo el uso o divulgación indebida de los mismos.
        </p>
        <p>
          El Titular podrá en cualquier momento revocar el consentimiento que ha otorgado a SSR
          Especialistas Fiscales para el tratamiento de sus datos personales, limitar el uso o divulgación de
          los mismos, así como ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición
          (Derechos ARCO) previstos en la Ley y regulados en su Reglamento, mediante el envío de su
          solicitud a la dirección de correo electrónico: contacto@ssrefiscales.com.mx.
        </p>
        <p>
          El presente aviso de privacidad podrá ser modificado o actualizado unilateralmente por SSR
          Especialistas Fiscales, informándole al Titular de dichos cambios a través de su página web.
        </p>
        <h2>DERECHOS ARCO</h2>
        <p>
          De acuerdo a la Ley Federal de Protección de Datos Personales en Posesión de Particulares, son los
          derechos que toda persona puede ejercer en relación con el tratamiento de sus datos personales.
          Cada sigla representa un derecho diferente y son Acceso, Rectificación, Cancelación y Oposición.
        </p>
        <ul>
          <li>
            A - ACCESO. El titular de los datos personales tiene derecho a solicitar y obtener gratuitamente
            información de sus datos personales sometidos a tratamiento por el responsable del repositorio
            en el que se encuentren el origen de dichos datos, así como las comunicaciones realizadas o que
            se prevén hacer con los mismos.
          </li>
          <li>
            R - RECTIFICACIÓN. El titular de los datos personales tiene derecho a solicitar y obtener
            gratuitamente la rectificación de sus datos personales inexactos o incompletos sometidos a
            tratamiento por el responsable de dichos datos.
          </li>
          <li>
            C - CANCELACIÓN. El titular tiene derecho a solicitar y obtener gratuitamente la cancelación de sus
            datos personales cuando el tratamiento de los mismos no se ajuste a lo dispuesto en la LFPDPPP, o
            hayan dejado de ser necesarios o pertinentes para la finalidad para la cual hubieran sido
            recabados o registrados por el responsable de la base de datos.
          </li>
          <li>
            O - OPOSICIÓN. Es la manifestación de la voluntad del titular que pone en conocimiento del
            responsable de la base de datos, su deseo de que sus datos personales no sean objeto de un
            concreto tratamiento.
          </li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
</template>


 
<style lang="scss" scoped>
.terms {
  padding: 5rem 0;

  p,
  li {
    line-height: 1.58;
    letter-spacing: -0.004em;
  }

  h2 {
    font-weight: bold;
  }

  p,
  ul,
  h2 {
    margin-bottom: 1.75rem;
  }

  li {
    margin-bottom: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 19px;
    font-size: 20px;
    padding: 3rem 0.5rem;
  }
}
</style>

<script>
import HeaderTerms from "~/components/HeaderNotice.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    HeaderTerms,
    Footer
  },

  head() {
    return {
      title: "SSR Especialistas Fiscales | Aiso de privacidad",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Aviso de privacidad de SSR Especialista Fiscales."
        }
      ]
    };
  }
};
</script>
