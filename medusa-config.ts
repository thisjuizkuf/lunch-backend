import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
    },
    cookieSecret: process.env.COOKIE_SECRET || "supersecret",
  },

  modules: {
    payment: {
      stripe: {
        resolve: "@medusajs/payment-stripe",
        options: {
          api_key: process.env.STRIPE_API_KEY!,
          webhook_secret: process.env.STRIPE_WEBHOOK_SECRET!,
        },
      },
    },
  },
})
