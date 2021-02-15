<template>
  <div class="wapper">
    <Header :title="title" :links="links" />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello world</h1>
      </div>
    </div>
    <Footer :links="links" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: "Template",
      links: [
        {
          title: "Home",
          alias: "home",
          url: "/",
        },
        {
          title: "About",
          alias: "about",
          url: "/about",
        },
      ],
    };
  },
};
</script>
