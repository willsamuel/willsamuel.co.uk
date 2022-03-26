<script>
export const prerender = true;
import {
    fly
} from 'svelte/transition';
</script>

<svelte:head>
    <title>Will Samuel - Git</title>
    </svelte:head>

    <section in:fly="{{ y: 200, duration: 300}}" >
        <div class="inner">
            <h1>Will Samuel's Git</h1>
            <p>I don't really have much code in public repositories, most of my work is kept on private servers, but here a few examples just for github.</p>
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
                    <p><span class="circle javascript"></span>JavaScript</p>
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
                    <p><span class="circle python"></span>Python</p>
                </div>
                <div class="git-single">
                    <div class="git-top">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a href="/">WordPress Weather Widget</a>
                        <span class="public">Public</span>
                    </div>
                    <p>The files for my personal site willsamuel.co.uk. Built using Svelte and Svelte Kit.</p>
                    <p><span class="circle php"></span>PHP</p>
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
                    <p><span class="circle javascript"></span>JavaScript</p>
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
                    <p><span class="circle php"></span>PHP</p>
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
                    <p><span class="circle javascript"></span>JavaScript</p>
                </div>
            </div>
        </div>
    </section>

<style lang="scss">
.git-items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;

    .git-single {
        width: calc(50% - 20px);
        border: 1px solid silver;
        border-radius: 4px;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        .git-top {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;

            svg {
                margin-right: 5px;
            }

            a {
                color: #0969da;
                text-decoration: none;
                padding-right: 5px;

                &:hover {
                    text-decoration: underline;
                }
            }
            .public {
                border: 1px solid silver;
                border-radius:24px;
                font-size: 12px;
                padding: 1.5px 6px;
            }

        }

        p {
            font-size: 12px;
            color: #57606a;

            &:last-of-type {
                margin-bottom: 0px;
                margin-top: auto;
            }
        }

        .circle {
            position: relative;
            top: 1px;
            display: inline-block;
            width: 12px;
            height: 12px;
            border: 1px solid var(--color-primer-border-contrast);
            border-radius: 50%;
            margin-right: 5px;

            &.javascript {
                background-color: #f1e05a;
            }

            &.php {
                background-color: #4F5D95;
            }

            &.python {
                background-color: #3572A5;
            }
        }
    }
}
</style>
