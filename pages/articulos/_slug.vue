<template>
  <div>
    <Header />
    <main>
      <article class="wrapper wrapper-top">
        <div class="head-section">
          <h2 class="author">{{ author }}</h2>
          <span class="date">{{ date }}</span>
        </div>

        <div v-html="content"></div>
      </article>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
.head-section {
  margin-bottom: 1.75rem;
}

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
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

import DynamicMarkdown from "~/components/Markdown/DynamicMarkDown.vue";

export default {
  async asyncData({ params, app }) {
    const fileContent = await import(`~/blog/${params.slug}.md`);
    const attr = fileContent.attributes;

    return {
      title: attr.title,
      date: attr.date,
      author: attr.author,
      description: attr.description,
      id: attr.id,
      content: fileContent.html
    };
  },

  components: {
    Header,
    Footer,
    DynamicMarkdown
  }
};
</script>
