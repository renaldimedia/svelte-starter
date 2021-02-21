import "./App.pcss";
import App from './App.svelte';

const app = new App({
    target: document.body,
    hydrate: true,
    props: {
        ready: false
    }
});

export default app; 