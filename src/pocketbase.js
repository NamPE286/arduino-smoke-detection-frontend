import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'

export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)