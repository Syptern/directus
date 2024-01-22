
module.exports = function (env) {
    return {
        CORS_ENABLED: false,
        // User inputs from railway starter button
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `https://${env.RAILWAY_STATIC_URL}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,
        STORAGE_LOCATIONS: "s3",
        STORAGE_S3_DRIVER: "s3",
        STORAGE_S3_KEY: env.STORAGE_S3_KEY,
        STORAGE_S3_SECRET: env.STORAGE_S3_SECRET,
        STORAGE_S3_REGION: env.STORAGE_S3_REGION,
        STORAGE_S3_BUCKET:  env.STORAGE_S3_BUCKET,
        STORAGE_S3_ENDPOINT: env.STORAGE_S3_ENDPOINT,

        //EMAIL
        EMAIL_SMTP_HOST: env.EMAIL_SMTP_HOST,
        EMAIL_SMTP_PORT	: env.EMAIL_SMTP_PORT,
        EMAIL_SMTP_USER: env.EMAIL_SMTP_USER,
        EMAIL_SMTP_PASSWORD: env.EMAIL_SMTP_PASSWORD,
        EMAIL_TRANSPORT: env.EMAIL_TRANSPORT,
        EMAIL_FROM: env.EMAIL_FROM,
    };
};
