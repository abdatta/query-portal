import { config } from 'dotenv'; config();

/**
 * Each key is an environment variable that is to be proprocessed.
 * Each preProcessor should be of type `((val: string, key: string) => any) | string`.
 * When a preProcessor is a `string`, it is treated as the default value of the env var.
 * Some utility preProcessors available: `required(msg?: string)`.
 */
const envPreProcessors = () => ({
    MONGO_URI: required(),
    JWT_SECRET: 'query-portal-default-jwt-secret',
    JWT_EXPIRES_IN: '1000s'
});

/* ---------------- IGNORE THE IMPLEMENTATION DETAILS BELOW ---------------- */

const required = (msg?: string) => (val: string | undefined, key: string) => {
    if (val == null) {
        throw new Error(msg || `Environment variable '${key}' is required!`);
    }
    return val;
}

type EnvPreProcessor = ((val: string, key: string) => any) | string;

const preProcessEnv = <T extends {[k: string]: EnvPreProcessor }>(preProcessors: T) => {
    for (const key in preProcessors) {
        if (preProcessors.hasOwnProperty(key)) {
            const envValue: EnvPreProcessor = preProcessors[key];
            if (typeof envValue === 'function') {
                process.env[key] = envValue(process.env[key], key);
            } else {
                process.env[key] = process.env[key] ?? envValue;
            }
        }
    }
}

// If you see an error here, go up and check if the preprocessors are following the correct type.
preProcessEnv(envPreProcessors());

type EnvPreProcessors = ReturnType<typeof envPreProcessors>;

type EnvTypes = {
    [k in keyof EnvPreProcessors]: EnvPreProcessors[k] extends (...args: any[]) => infer R ? R : EnvPreProcessors[k]
};

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvTypes {
            [k: string]: string;
        }
    }
}
