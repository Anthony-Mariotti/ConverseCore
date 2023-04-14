// See https://kit.svelte.dev/docs/types#app

import type { User } from '@auth0/auth0-spa-js';

// for information about these interfaces
declare global {
    namespace App {
        interface Error {
            errorId: string;
            message: string;
        }
        interface Locals {
            user?: User;
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
