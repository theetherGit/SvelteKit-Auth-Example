<script>
	import { page } from '$app/stores';
	import MockupCode from '$lib/components/MockupCode.svelte';
	import ToolTip from '$lib/components/ToolTip.svelte';
	import { browser } from '$app/environment';
	import Routes from '$lib/guideComponents/Routes.svelte';
	let tailwindConfigJS = {
		1: { data: 'module.exports = {', class: '' },
		2: { data: "content: ['./src/**/*.{html,js,svelte,ts}'],", class: 'bg-gray-900 text-gray-100' },
		3: { data: '  theme: {', class: '' },
		4: { data: '    extend: {}', class: '' },
		5: { data: '  },' },
		6: { data: "  plugins: [require('daisyui')]", class: 'bg-gray-900 text-gray-100' },
		7: { data: '};', class: '' }
	};
	let svelteConfigJS = {
		1: { data: `import adapter from '@sveltejs/adapter-auto';`, class: '' },
		2: { data: `import preprocess from "svelte-preprocess";`, class: '' },
		3: { data: `const config = {`, class: '' },
		4: { data: `  kit: {`, class: '' },
		5: { data: `    adapter: adapter()`, class: '' },
		6: { data: `  },`, class: '' },
		7: { data: `  preprocess: [`, class: 'bg-gray-900 text-gray-100' },
		8: { data: `      preprocess({`, class: 'bg-gray-900 text-gray-100' },
		9: { data: `         postcss: true,`, class: 'bg-gray-900 text-gray-100' },
		10: { data: `      }),`, class: 'bg-gray-900 text-gray-100' },
		11: { data: `  ],`, class: 'bg-gray-900 text-gray-100' },
		12: { data: ` };,`, class: '' },
		13: { data: `export default config;`, class: '' }
	};

	let layoutSvelte = {
		1: `<script>`,
		2: `  import "../app.css";`,
		3: `\<\/script>`,
		4: `<slot />`
	};
	let codeFiles, css;
	$: {
		codeFiles = $page.data.code;
		if (browser) console.log(codeFiles);
		css = Object.keys(codeFiles).find((key) => codeFiles[key].filename === 'demo.css');
	}
</script>

{#if $page.data.session}
	<div class="card card-side bg-base-100 shadow-xl">
		{#if $page.data.session.user?.image}
			<figure>
				<img src={$page.data.session.user.image} alt={$page.data.session.user?.name ?? 'User'} />
			</figure>
		{/if}
		<div class="card-body">
			<h2 class="card-title">{$page.data.session.user?.name ?? 'User'}</h2>
			<p>Expire Time: {new Date($page.data.session.expires)}</p>
			<div class="card-actions justify-end">
				<a
					href="https://github.com/theetherGit/SvelteKit-Auth-Example"
					target="_blank"
					rel="noreferrer"
					class="btn btn-primary hover:bg-white hover:text-gray-900 gap-2"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						width="32"
						height="32"
						class="h-6 w-6"
						stroke="currentColor"
						><path
							fill-rule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
						/></svg
					>
					Source</a
				>
			</div>
		</div>
	</div>
{/if}
<div class="my-5 space-y-3 md:mx-auto md:max-w-3xl lg:pb-10">
	<div class="prose max-w-prose mx-auto lg:prose-lg">
		<section id="Introduction">
			<h2>Introduction</h2>
			<p>
				This is a guide for `SvelteKit 1.0` with Authentication using AuthJS (also known as
				NextAuth). But it's going to be much more than a guide to SvelteKit. Here, I'm going to
				explain how to add TailwindCSS with DaisyUI, Github OAuth using AuthJS, Theme Switcher from
				DaisyUI Docs and all SvelteKit basics.
			</p>
		</section>
		<section id="Resources">
			<h2>Resources</h2>
			<ul>
				<li><a href="https://kit.svelte.dev" class="no-underline">SvelteKit</a></li>
				<li><a href="https://tailwindcss.com" class="no-underline">TailwindCSS</a></li>
				<li><a href="https://daisyui.com" class="no-underline">DaisyUI</a></li>
				<li><a href="https://authjs.dev" class="no-underline">AuthJS</a></li>
			</ul>
		</section>
		<section id="What is SvelteKit">
			<h2>What is SvelteKit?</h2>
			<p>
				In simple words we can say, <span
					>SvelteKit is a framework for building web applications with the Svelte front-end
					JavaScript library.</span
				>
				But it comes with much more than anyone can think of and it's all thanks to <ToolTip
					tip="Creator of Svelte and SvelteKit">`Rich Harris`,</ToolTip
				>
				Svelte and SvelteKit Team because of them we are seeing SvelteKit v1. Coming back to topic, SvelteKit
				offers multiple thinks out of the box like:
			</p>
			<ul>
				<li>Form Actions: You can submit form to server without full page reload.</li>
				<li>Nested Layout: A shared UI between routes without affecting the main URL.</li>
				<li>
					Universal Loader: Universal load functions that run both on the server and in the browser.
				</li>
				<li>
					Adapters: Adapters makes it easy to deploy your app on any place Node Server, Vercel,
					Cloudflare and etc.
				</li>
				<li>
					Data Type Safety: Provides to pre-configured Typescript support and it's way much better
					if you how to utilize it.
				</li>
				<li>Packaging: This enables us to make component libraries easily for svelte and kit.</li>
				<li>Link Options: We got prefetching, data reload which `a` tag.</li>
				<li>SSR: Customisable server side rendering for every route.</li>
			</ul>
		</section>
	</div>
	<section id="Creating new SvelteKit Project">
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<h2>Creating New SvelteKit Project</h2>
			<div class="alert alert-info shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current flex-shrink-0 w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>
						Before you start, Make sure have installed <span class="bg-white text-gray-900 px-1"
							>Node v16</span
						>
						or greater. You can use <span class="bg-white text-gray-900 px-1">npm/yarn/pnpm</span> as
						package manager it's all upto you.
					</span>
				</div>
			</div>
			<ul>
				<li>Open your terminal and change directory to where you wanna create your new project.</li>
				<li>After changing to your working directory:</li>
				<blockquote>
					When you create SvelteKit project you will get some option choose them according your
					need.
				</blockquote>
			</ul>
		</div>
		<MockupCode name="Bash">
			<pre data-prefix="~"><code
					>Creating new <a
						href="https://kit.svelte.dev/"
						target="_blank"
						rel="noreferrer"
						class="bg-white text-gray-900 px-1"
						><ToolTip tip="MetaFramework for Svelte">SvelteKit</ToolTip></a
					> project</code
				></pre>
			<pre data-prefix="$"><code
					>pnpm create svelte@latest myApp // To create new sveltekit project</code
				></pre>
			<pre data-prefix=">" class="text-warning"><code>creating...</code></pre>
			<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
			<pre data-prefix="$"><code>cd myApp && pnpm i // To install all dependencies</code></pre>
		</MockupCode>
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<ul>
				<li>After creating project, Your project directory will going to look like:</li>
				<pre>
				├── package-lock.json
				├── package.json
				├── playwright.config.ts
				├── pnpm-lock.yaml
				├── src
				│   ├── app.d.ts
				│   ├── app.html
				│   └── routes
				│       └── +page.ts
				├── static
				│   └── favicon.png
				├── svelte.config.js
			</pre>
				<li>Now you can run your development server using:</li>
				<pre><code>pnpm dev // For pnpm</code></pre>
				<pre><code>npm run dev // For npm</code></pre>
				<blockquote>
					This completes the part how we create new sveltekit project. I'll be explaining some more
					things about sveltekit after setting up basic needs for app.
				</blockquote>
			</ul>
		</div>
	</section>

	<section>
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<h2>Adding TailwindCSS and daisyUI for Design</h2>

			<ul>
				<li>
					Now we are going to add Tailwind CSS and DaisyUI to our project, so first open your
					terminal and make sure you are in root directory of project.
				</li>
				<li>
					Install TailwindCSS and DaisyUI using package manager and then initiate the tailwind
					config like:
				</li>
			</ul>
		</div>
		<MockupCode>
			<pre data-prefix="~"><code
					>Adding <a
						href="https://tailwindcss.com/docs/guides/sveltekit"
						target="_blank"
						rel="noreferrer"
						class="bg-white text-gray-900 px-1"
						><ToolTip tip="Utility First CSS Framework">TailwindCSS</ToolTip></a
					> and <a
						href="https://daisyui.com/"
						target="_blank"
						rel="noreferrer"
						class="bg-white text-gray-900 px-1"
						><ToolTip tip="TailwindCSS but sorted">DaisyUI</ToolTip></a
					> to SvelteKit</code
				></pre>
			<pre data-prefix="$"><code>pnpm install -D tailwindcss postcss autoprefixer daisyui</code
				></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
			<br />
			<pre data-prefix="~"><code>Initiating tailwind.config.cjs</code></pre>
			<pre data-prefix="$"><code>pnpx tailwindcss init tailwind.config.cjs -p</code></pre>
		</MockupCode>
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<ul>
				<li>
					Now, we have initiated<code>tailwind.config.cjs</code>we have to change
					<code>content</code>object according to svelte files.
				</li>
				<li>
					For DaisyUI, we need to add it as<code>plugin</code>in<code>tailwind.config.cjs</code>.
				</li>
			</ul>
		</div>
		<MockupCode name="tailwind.config.cjs">
			{#each Object.keys(tailwindConfigJS) as line}
				<pre data-prefix={line} class={tailwindConfigJS[line].class}><code
						>{tailwindConfigJS[line].data}</code
					></pre>
			{/each}
		</MockupCode>
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<ul>
				<li>
					After setting up tailwind config we have to add a<code>app.css</code>file in<code
						>src</code
					>directory of your project and then add following lines of code in that file.
				</li>
			</ul>
		</div>
		<MockupCode name="app.css">
			<pre data-prefix="~"><code>Add `app.css` file in `src` directory</code></pre>
			<br />
			{#each codeFiles[css].source as code, index}
				<pre data-prefix={index + 1}><code>{code}</code></pre>
			{/each}
		</MockupCode>
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<ul>
				<li>
					After adding<code>app.css,</code>add<code>+layout.svelte</code>file in<code
						>src/routes</code
					>directory.
				</li>
				<li>Add following lines of code:</li>
			</ul>
		</div>
		<MockupCode>
			<pre data-prefix="~"><code>Add +layout.svelte` file in `src/routes` directory</code></pre>
			<br />
			{#each Object.keys(layoutSvelte) as line}
				<pre data-prefix={line}><code>{layoutSvelte[line]}</code></pre>
			{/each}
		</MockupCode>
		<div class="prose max-w-prose mx-auto lg:prose-lg">
			<ul>
				<li>
					After adding TailwindCSS in project, Your project directory will going to look like:
				</li>
				<pre>
				├── package.json
				├── playwright.config.ts
				├── pnpm-lock.yaml
				├── postcss.config.cjs
				├── src
				│   ├── app.css
				│   ├── app.d.ts
				│   ├── app.html
				│   └── routes
				│       ├── +layout.server.ts
				│       ├── +layout.svelte
				│       ├── +page.svelte
				│       └── +page.ts
				├── static
				│   └── favicon.png
				├── svelte.config.js
				├── tailwind.config.cjs
				├── tests
				│   └── test.ts
				├── tsconfig.json
				└── vite.config.js
			</pre>
				<blockquote>
					This completes the part how we add TailwindCSS with daisyUI in project.
				</blockquote>
			</ul>
		</div>
	</section>

	<Routes />
</div>
