const isProduction = process.env.NODE_ENV === "production";

export const environment = {
    SERVER_URL: isProduction ? process.env.NEXT_PUBLIC_SERVER_URL_PROD : process.env.NEXT_PUBLIC_SERVER_URL_DEV,
    API_KEY: isProduction ? process.env.NEXT_PUBLIC_API_KEY_PROD : process.env.NEXT_PUBLIC_API_KEY_DEV
}