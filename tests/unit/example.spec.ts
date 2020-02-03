import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(HelloWorld, {
      data: () => ({
        ecosystem: [
          {
            text: "vuetify-loader",
            href: "https://github.com/vuetifyjs/vuetify-loader"
          }
        ],
        importantLinks: [
          {
            text: "Documentation",
            href: "https://vuetifyjs.com"
          }
        ],
        whatsNext: [
          {
            text: "Explore components",
            href: "https://vuetifyjs.com/components/api-explorer"
          }
        ]
      })
    });
    expect(wrapper.text()).toMatch("vuetify-loader");
    expect(wrapper.text()).toMatch("Documentation");
    expect(wrapper.text()).toMatch("Explore components");
    expect(wrapper.text()).not.toMatch("ipso lorem");
  });
});
