// node scripts/new-component.js login page src/pages

const fs = require('fs');

const componentName = process.argv[2]?.trim();
if (!componentName) throw new Error('No component name was provided!');

const componentType = process.argv[3]?.trim();
if (!componentType) throw new Error('No component type was provided!');

const parentDir = process.argv[4]?.trim() || '.';
if (!fs.existsSync(parentDir)) throw new Error('Component parent directory does not exist!');

const tsCode = `
let title: string = '${componentName}';

const exclaim = () => title += '!';

export {};
`
const cssCode = `
main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}

h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}
`
const svelteCode = `
<script lang="ts" src="${componentName}.${componentType}.ts"></script>

<style src="${componentName}.${componentType}.css"></style>

<main>
	<h1>Hello {title}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<input bind:value={title} placeholder="Enter your component name">
	<button on:click={exclaim}>Exclaim</button>
</main>
`
const componentDir = `${parentDir}/${componentName}`;
if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir);
console.log(`Created component directory: ${componentDir}`);

const tsFile = `${componentDir}/${componentName}.${componentType}.ts`;
fs.writeFileSync(tsFile, tsCode);
console.log(`Created component script file: ${tsFile}`);

const cssFile = `${componentDir}/${componentName}.${componentType}.css`;
fs.writeFileSync(cssFile, cssCode);
console.log(`Created component style file: ${cssFile}`);

const svelteFile = `${componentDir}/${componentName}.${componentType}.svelte`;
fs.writeFileSync(svelteFile, svelteCode);
console.log(`Created component svelte file: ${svelteFile}`);

console.log(`\nComponent ${componentName} created successfully!`);
