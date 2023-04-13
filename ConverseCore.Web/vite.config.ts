import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import fs from 'fs';
import path from 'path';

const baseFolder =
    process.env.APPDATA !== undefined && process.env.APPDATA !== ''
        ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;

const certificateArg = process.argv
    .map((arg) => arg.match(/--name=(?<value>.+)/i))
    .filter(Boolean)[0];

const certificateName = certificateArg ? certificateArg.groups?.value : 'ConverseCore.Web';

if (!certificateName) {
    console.error(
        'Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.'
    );
    process.exit(-1);
}

const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    server: {
        https: {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath)
        },
        proxy: {
            '/api': {
                target: 'https://localhost:7184/',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/jph': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/jph/, '')
            }
        },
        port: 5002
    }
});
