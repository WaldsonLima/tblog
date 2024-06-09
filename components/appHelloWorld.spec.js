import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import AppHelloWorld from "./AppHelloWorld.vue";

const vuetify = createVuetify({
  components,
  directives,
});

describe("First tests", () => {
	test("displays message", () => {
		const wrapper = mount(AppHelloWorld, {
			props: {},
			global: {
				plugins: [vuetify],
			}
		});

		// Assert the rendered text of the component
		expect(wrapper.findByTestId("message").text()).toContain("Hello world from component");
	});
});