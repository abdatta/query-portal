<div>
    <TopAppBar variant="static">
        <Row>
            <Section>
                <IconButton class="material-icons" on:click={() => drawerOpen = !drawerOpen}>menu</IconButton>
                <Title>Query Portal</Title>
            </Section>
            <Section align="end" toolbar>
                <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
                <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
                <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
            </Section>
        </Row>
    </TopAppBar>
    <Drawer variant="dismissible" bind:open={drawerOpen}>
        <Content>
            <List>
                {#each pages as page}
                    <Item on:click={() => navigateTo(page.route)} activated={currentRoute.name === page.route}>
                        <Graphic class="material-icons" aria-hidden="true">{page.icon}</Graphic>
                        <Text>{page.label}</Text>
                    </Item>
                {/each}
            </List>
        </Content>
    </Drawer>
    <AppContent>
        <div class="nav-content"><Route {currentRoute}/></div>
    </AppContent>
</div>

<script>
    import { Route } from 'svelte-router-spa';
    import { navigateTo } from 'svelte-router-spa';
	import Drawer, {AppContent, Content} from '@smui/drawer';
	import List, {Item, Text, Graphic} from '@smui/list';
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

    export let currentRoute;

    let drawerOpen = true;

	const pages = [
		{
			label: 'Ask a Query',
			icon: 'contact_support',
			route: '/ask-a-query',
		},
		{
			label: 'Responses',
			icon: 'info',
			route: '/responses',
		}
	];
</script>

<style>
  .nav-content {
      padding: 8px;
  }
</style>