<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello world</h1>
      </div>
    </div>
    <Footer />
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
};
</script>
