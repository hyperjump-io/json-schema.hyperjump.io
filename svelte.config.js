import adapter from "@sveltejs/adapter-static";


const config = {
  kit: {
    target: "#svelte",
    adapter: adapter()
  }
};

export default config;
