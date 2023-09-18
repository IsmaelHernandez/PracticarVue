<template>
  <div>
    <SidebarComponent />
    <div>
      <div>
       
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "TemplateComponent",
  components: {
    SidebarComponent: defineAsyncComponent(() =>
      import("@/components/layout/SidebarComponent.vue")
    ),
    FooterComponent: defineAsyncComponent(() =>
      import("@/components/layout/FooterComponent.vue")
    ),
  },
};
</script>
