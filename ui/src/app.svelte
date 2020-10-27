<svelte:head>
  <title>Query Portal</title>
</svelte:head>

<div class="flexy">
	<div class="top-app-bar-container">
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
					{#each routes as route}
						<Item href="javascript:void(0)" on:click={() => go(route.label)} activated={current === route.label}>
							<Graphic class="material-icons" aria-hidden="true">{route.icon}</Graphic>
							<Text>{route.label}</Text>
						</Item>
					{/each}
				</List>
			</Content>
		</Drawer>
		<AppContent>
			<h2>{current}</h2>
		</AppContent>
	</div>
</div>

<script>
	import Drawer, {AppContent, Content} from '@smui/drawer';
	import List, {Item, Text, Graphic} from '@smui/list';
	import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let current = 'main';
	let drawerOpen = true;

	function go(key) {
		current = key;
	}

	const routes = [
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
	]
</script>

<style>
  .top-app-bar-container {
    max-width: 480px;
    min-width: 480px;
    height: 320px;
    border: 1px solid rgba(0,0,0,.1);
    margin: 0 18px 18px 0;
  }

  .top-app-bar-container {
    overflow: auto;
    display: inline-block;
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
  }
</style>