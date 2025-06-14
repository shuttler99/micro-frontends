import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dashboard-div-here");
  if (el) {
    mount(el);
  }
}

export { mount };
