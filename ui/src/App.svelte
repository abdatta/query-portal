<svelte:head>
    <title>Query Portal</title>
</svelte:head>

<Router {routes}/>

<script lang="ts">
    import { Router } from "svelte-router-spa";
    import NavbarLayout from "./layouts/navbar.layout.svelte";
    import AskQueryPage from "./pages/ask-query.page.svelte";
    import ResponsesPage from "./pages/responses.page.svelte";

    const routes = [
        { name: '/', redirectTo: '/ask-a-query' },
        { name: '/ask-a-query', layout: NavbarLayout, component: AskQueryPage },
        { name: '/responses', layout: NavbarLayout, component: ResponsesPage }
    ];
</script>