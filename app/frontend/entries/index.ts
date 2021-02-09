import { createApp } from "vue"
import Index from "@/components/Index"
import { route } from "@/router"

const app = createApp(Index)
app.use(route)
app.mount("#app")
