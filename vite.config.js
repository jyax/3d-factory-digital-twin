import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// import { defineConfig, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//     },
//     plugins: [vue()],
//   }
// })

// export default {
//   // Specify the entry points for your client-side code
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'src/main.js', // Example entry point
//         // Add more entry points if needed
//       }
//     }
//   }
// };
