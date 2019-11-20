<template>
  <div>
    <Header />
    <main>
      <article class="wrapper wrapper-top">
        <h2 class="author">{{ author }}</h2>
        <span class="date">{{ date }}</span>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
        />
      </article>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
.author {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 18px;
  color: #be8210;
}
</style>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import DynamicMarkdown from '~/components/Markdown/DynamicMarkDown.vue';

export default {
  async asyncData({ params, app }) {
    const fileContent = await import(`~/blog/${params.slug}.md`);
    const attr = fileContent.attributes;

    return {
      attr: fileContent,
      title: attr.title,
      date: attr.date,
      author: attr.author,
      description: attr.description,
      id: attr.id,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns
    };
  },

  mounted() {
    console.log(this.attr);
  },

  components: {
    Header,
    Footer,
    DynamicMarkdown
  }
};
</script>
