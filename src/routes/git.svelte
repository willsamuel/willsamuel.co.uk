<script>
export const prerender = true;
import {
    fly
} from 'svelte/transition';

import {
    fade
} from 'svelte/transition';
</script>

<svelte:head>
    <title>Home</title>
    </svelte:head>

    <section in:fly="{{ y: 200, duration: 300}}" >
        <div class="inner">
            <h1>Will Samuel's Git</h1>
            <p>I don't really have much code in public GITs, all my best work is for private companies, but here are a few things I've put together.</p>
            <div class="git-items">
                <div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">Willsamuel.co.uk</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle yellow"></span>JavaScript</p>
                </div>
                <div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">Python SEO Tools</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle yellow"></span>JavaScript</p>
                </div>
				<div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">WordPress Weather Plugin</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle yellow"></span>JavaScript</p>
                </div>
				<div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">Gatsby Headless Wordpress App</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle yellow"></span>JavaScript</p>
                </div>
				<div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">Bulma Wordpress Theme</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle yellow"></span>JavaScript</p>
                </div>
				<div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">Python SEO Tools</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle yellow"></span>JavaScript</p>
                </div>
            </div>
        </div>
    </section>

<style lang="scss">
.git-items {
    display: flex;
    flex-wrap: wrap;
}

.git-single {
    width: calc(50% - 10px);
    border: 1px solid silver;
    border-radius: 4px;
    padding: 10px;
    margin: 5px;

    .git-top {
        a {
            color: #0969da;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

    }

    p {
        font-size: 12px;
        color: #57606a;
    }

    .circle {
        position: relative;
        top: 1px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid var(--color-primer-border-contrast);
        border-radius: 50%;

        &.yellow {
            background-color: #f1e05a;
        }

        &.purple {
            background-color: #4F5D95;
        }
    }
}
</style>
