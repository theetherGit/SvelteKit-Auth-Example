<section id="RouteGuide">
	<div class="prose max-w-prose mx-auto lg:prose-lg">
		<h2>SvelteKit Routing</h2>

		<ul>
			<li>
				SvelteKit uses filesystem-based router which are defined by directories in your<code
					>src/routes</code
				>.
			</li>
			<li>Examples:</li>
			<ol>
				<li>
					<code>src/routes</code>is root directory of routes which is<code>/</code>on your app.
				</li>
				<li>
					<code>src/routes/about</code>as you can see<code>about</code>is a directory so it's a
					route for app which is accessible as<code>/about</code>on your app.
				</li>
				<li>
					<code>src/routes/student/[slug]</code>creates a routes which is dynamic in nature on the
					basis of<code>slug</code> so if you want to access something like<code>/student/1</code
					>here<code>1</code>is slug's value which is accessible inside your route files.
				</li>
			</ol>
			<li>
				Each route directory contains one or more route files, which can be identified by their<code
					>+</code
				>prefix.
			</li>
			<li>File Names:</li>
			<ol>
				<li>
					<code>+layout.svelte, +layout.ts/layout.js, +layout.server.ts/+layout.server.js</code>
				</li>
				<li><code>+page.svelte, +page.ts/+page.js, +page.server.ts/+page.server.js</code></li>
				<li><code>+server.ts/+server.js</code></li>
				<li><code>+error.svelte</code></li>
			</ol>
			<li>
				You can change routes root directory in<code>svelte.config.{('js', 'ts')}</code>and you can
				look here for
				<a href="https://kit.svelte.dev/docs/configuration#files" target="_blank" rel="noreferrer"
					>config details</a
				>
			</li>
			<li><code>+</code>prefixed files explanation:</li>
			<a
				href="https://twitter.com/xerosanyam/status/1600543516383289344"
				target="_blank"
				rel="noreferrer"><img src="/routesExplained.webp" alt="routes explaination" /></a
			>
			<ol>
				<li>
					<code>+page.svelte,</code>In this file we write our
					<span class="font-bold">HTML, CSS and JS</span> for your frontend view.
				</li>
				<li>
					<code>+page.js/+page.ts and +layout.js/+layout.ts,</code>In thesse file we write our
					<span class="font-bold">load function</span> which is a universal load which runs on both server
					as well as in browser.
				</li>
			</ol>
		</ul>
	</div>
</section>
