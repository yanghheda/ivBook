import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { vitePluginForArco } from "@arco-plugins/vite-react"
import { resolve } from "path"

export default defineConfig({
    plugins: [react(), vitePluginForArco()],
    resolve: {
        alias: [
            //配置别名
            { find: "@", replacement: resolve(__dirname, "./src") },
        ],
    },
})
