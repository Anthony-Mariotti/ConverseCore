<script lang="ts">
    import { page } from '$app/stores';
    import { Icon } from '$lib/components/icon';
    import Card from '$lib/components/Card.svelte';

    // postId options:
    // When showing a post: gB0NV05e-example_post_title
    // When targeting a reply: gB0NV05e
</script>

<div class="text-gray-200 flex flex-col gap-4">
    <Card divide>
        <div class="px-4 py-5 sm:px-6">
            <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div class="ml-4 mt-4">
                    <h3 class="text-2xl font-semibold leading-6">
                        I literally do not know how to code, but with chatGPT, I've managed to build
                        a (sort of) working chrome extension in one day.
                    </h3>
                    <div
                        class="mt-3 flex items-center gap-2 text-xs leading-5 text-gray-400 flex-wrap"
                    >
                        <p>
                            Posted
                            <time datetime="2023-01-23T22:34Z">2d ago</time>
                        </p>
                        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <p>138 views</p>
                        <div>
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >question</span
                            >
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >hot take</span
                            >
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >computer</span
                            >
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >help</span
                            >
                        </div>
                    </div>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0 hidden lg:block">
                    <button
                        type="button"
                        class="relative inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <span>Watch</span>
                        <span class="bg-indigo-800 px-2 py-1 rounded-lg ml-2">12</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="px-8 py-4 flex flex-col w-full">
            <article class="flex gap-x-8">
                <aside class="flex-shrink-0 mt-2 flex flex-col gap-2 w-32">
                    <div>
                        <img
                            class="w-32 h-32 rounded-lg"
                            src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Emma Dorsey"
                        />
                    </div>
                    <div class="flex flex-col items-center gap-1 flex-shrink">
                        <span class="font-semibold text-lg text-center leading-none"
                            >KING OF THE DIRTY DANS</span
                        >
                        <span>Member</span>
                    </div>
                </aside>
                <div class="">
                    <p>
                        <a
                            href="https://github.com/staythepath/HighlightGPT/tree/master/saves"
                            rel="external nofollow noopener"
                            target="_blank">Here it is</a
                        >. Input your openAI API key and then when you highlight text and then hold
                        the mouse button down for two seconds, it will load a response from gpt3
                        explaining what it is highlighted. I included a zip you can use with chrome
                        to get it running. Ask chatGPT how to get it working on chrome.&nbsp;
                    </p>

                    <p>&nbsp;</p>

                    <p>
                        If someone "knows how to code" is 100% then I'm probably like 3% or 4% and
                        the thing is, that that 3%&nbsp;is in python, not javascript which this
                        entire thing is built in. Before yesterday I knew 0 things about javascript.
                        I mean nothing at all other than that it was a program languange, and even
                        then I was confused about java vs. javascript. I know it's super simple and
                        buggy, but I wouldn't have been able to do this without chatgpt. I was just
                        talking to chatGPT in the bath tub about the extension I wanted when I
                        realized that if I prompt chatGPT correctly I may be able to build something
                        that works. I certainly now know much more javascript which is great, but
                        I'm gonna continue with python still. If anyone has any suggestions to fix
                        it up, let me know. I have some more stuff I want to do with it that is more
                        complicated, but I think I'll manage to do it.
                    </p>

                    <p>&nbsp;</p>

                    <p>
                        If anyone that doesn't know how to code is reading this, I highly recommend
                        using chatGPT as a tool to help you learn. I think it's probably a good idea
                        to supplement with a course or other websites because chatGPT&nbsp;<em
                            >is&nbsp;</em
                        >wrong a lot.
                    </p>

                    <p>&nbsp;</p>

                    <p>
                        I ended up feeding it bits of code from documentation that showed how to use
                        some things and asked it to use something like that in my project to build
                        what I wanted and that usually worked. I fed it all my project files many
                        many times to make sure it has a full picture of the project and it's
                        current status. A lot of times it suggested small fixes. Sometimes the fixes
                        from chatGPT broke everything. There was a point where everything was
                        broken, the loading box never even came up and it took me about 2 hours to
                        fix, using chatGPT.&nbsp;<br />
                        <br />
                        Anyway, I'm posting this not so much to show off my project, but to show that
                        although AI isn't really close to being able to build full projects in one go,
                        if someone is dedicated, they can get a fair bit done in one day without any
                        prior knowledge. I've been using chatGPT a lot since it came out, but I didn't
                        think I would be able to do this until yesterday when it started showing me some
                        working code. It also taught me to use github too and some html as well. I can
                        now look at my code and pretty much understand exactly what it is doing line
                        by line, which is something I couldn't do with even python before. I just think
                        it's so cool that I was able to build something that mostly functions. Now it's
                        time to just add some stuff. I even used chatGPT to clean up the code and make
                        it easier to look at and had it add comments.
                    </p>

                    <p>&nbsp;</p>

                    <p>
                        If anyone has any ideas how to make this a bit nicer or less buggy or any
                        extra features it needs let me know! I want to keep working on this project
                        because it's teaching me a lot.<br />
                        <br />
                        EDIT: I also forgot to mention that I used gpt-4 A LOT. It was really annoying
                        when I hit my limit, because I had to go back to 3.5 and it's fast, but the difference
                        between gpt-4 and gpt-3 became VERY evident with this project. gpt-4 has way
                        fixes, responses, code and explanations.
                    </p>
                </div>
            </article>
            <div class="">weeeeeeeeeeeeeeeeee</div>
        </div>
        <div class="flex items-center justify-between px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
                <button
                    class="relative inline-flex items-center rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-medium text-white"
                    >Previous</button
                >
                <button
                    class="relative ml-3 inline-flex items-center rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-medium text-white"
                    >Next</button
                >
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-200">
                        Page
                        <span class="font-medium">1</span>
                        of
                        <span class="font-medium">97</span>
                    </p>
                </div>
                <div>
                    <nav
                        class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <button
                            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0"
                        >
                            <span class="sr-only">First</span>
                            <Icon.ChevronDoubleLeft class="w-5 h-5" />
                        </button>
                        <button
                            class="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0"
                        >
                            <span class="sr-only">Previous</span>
                            <Icon.ChevronLeft class="w-5 h-5" />
                        </button>
                        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                        <button
                            aria-current="page"
                            class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >1</button
                        >
                        <button
                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0"
                            >2</button
                        >
                        <button
                            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >3</button
                        >
                        <button
                            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >5</button
                        >
                        <button
                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0"
                            >6</button
                        >
                        <button
                            class="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0"
                        >
                            <span class="sr-only">Next</span>
                            <Icon.ChevronRight class="w-5 h-5" />
                        </button>
                        <button
                            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 hover:brightness-125 focus:z-20 focus:outline-offset-0"
                        >
                            <span class="sr-only">Last</span>
                            <Icon.ChevronDoubleRight class="w-5 h-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </Card>
</div>

<h1 class="text-white">Post with id</h1>
<p class="text-white">{JSON.stringify($page.params)}</p>
<br />
<a href="/topic/programming" class="text-white bg-black px-4 py-2">Back to Topic</a>
<br />
<br />
<a href="/topic/programming/post/gB0NV05e/reply/yLA6m0oM" class="text-white bg-black px-4 py-2"
    >Show Reply</a
>
