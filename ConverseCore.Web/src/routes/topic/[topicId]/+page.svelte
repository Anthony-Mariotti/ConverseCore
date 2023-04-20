<script lang="ts">
    import { page } from '$app/stores';
    import Card from '$lib/components/Card.svelte';
</script>

<div class="text-gray-200 flex flex-col gap-4">
    <Card>
        <div class="px-4 py-5 sm:px-6">
            <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div class="ml-4 mt-4">
                    <h3 class="text-2xl font-semibold leading-6">Announcements</h3>
                    <p class="mt-1 text-sm text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti
                        consectetur.
                    </p>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0 hidden lg:block">
                    <button
                        type="button"
                        class="relative inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <span>Follow Topic</span>
                        <span class="bg-indigo-800 px-2 py-1 rounded-lg ml-2">342</span>
                    </button>
                </div>
            </div>
        </div>
    </Card>
    <Card>
        <div class="px-4 py-5 sm:px-6">
            <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div class="ml-4 mt-4">
                    <button
                        type="button"
                        class="inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="-ml-0.5 h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>New Post</span>
                    </button>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0">
                    <button
                        type="button"
                        class="inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="-ml-0.5 h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>New Post</span>
                    </button>
                </div>
            </div>
        </div>
    </Card>
    <Card>
        <ul class="divide-y divide-gray-500">
            <li
                class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap px-4 sm:px-6"
            >
                <div>
                    <p class="text-sm font-semibold leading-6">
                        <span
                            role=""
                            class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20"
                            >New <span class="sr-only">post</span></span
                        >
                        <a
                            href="/topic/programming/post/gB0NV05e-i_literally_do_not_know_how_to_code"
                            class="hover:underline"
                            >I literally do not know how to code, but with chatGPT, I've managed to
                            build a (sort of) working chrome extension in one day.</a
                        >
                    </p>
                    <div
                        class="mt-1 flex items-center gap-2 text-xs leading-5 text-gray-400 flex-wrap"
                    >
                        <p>
                            <a href="/" class="hover:underline">Leslie Alexander</a>
                        </p>
                        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <p><time datetime="2023-01-23T22:34Z">2d ago</time></p>
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
                <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                    <div class="flex -space-x-0.5">
                        <dt class="sr-only">Commenters</dt>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Emma Dorsey"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Benjamin Russel"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Dries Vincent"
                            />
                        </dd>
                    </div>
                    <div class="flex w-16 gap-x-2.5">
                        <dt>
                            <span class="sr-only">Total replies</span>
                            <svg
                                class="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </dt>
                        <dd class="text-sm leading-6 text-gray-400">24</dd>
                    </div>
                </dl>
            </li>
            <li
                class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap px-4 sm:px-6 opacity-50"
            >
                <div>
                    <p class="text-sm font-semibold leading-6">
                        <a href="/" class="hover:underline">
                            <span
                                class="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20 mr-1"
                                >Locked</span
                            >Et ratione distinctio nesciunt recusandae vel ab?</a
                        >
                    </p>
                    <div class="mt-1 flex items-center gap-2 text-xs leading-5 text-gray-400">
                        <p>
                            <a href="/" class="hover:underline">Michael Foster</a>
                        </p>
                        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <p><time datetime="2023-01-23T19:20Z">2d ago</time></p>
                        <div>
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >help</span
                            >
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >education</span
                            >
                        </div>
                    </div>
                </div>
                <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                    <div class="flex -space-x-0.5">
                        <dt class="sr-only">Commenters</dt>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Alicia Bell"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Benjamin Russel"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Dries Vincent"
                            />
                        </dd>
                    </div>
                    <div class="flex w-16 gap-x-2.5">
                        <dt>
                            <span class="sr-only">Total replies</span>
                            <svg
                                class="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </dt>
                        <dd class="text-sm leading-6 text-gray-400">6</dd>
                    </div>
                </dl>
            </li>
            <li
                class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap px-4 sm:px-6 opacity-50"
            >
                <div>
                    <p class="text-sm font-semibold leading-6">
                        <a href="/" class="hover:underline"
                            >Blanditiis perferendis fugiat optio dolor minus ut?</a
                        >
                    </p>
                    <div class="mt-1 flex items-center gap-2 text-xs leading-5 text-gray-400">
                        <p>
                            <a href="/" class="hover:underline">Dries Vincent</a>
                        </p>
                        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <p><time datetime="2023-01-22T12:59Z">3d ago</time></p>
                        <div>
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >jobs</span
                            >
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >help wanted</span
                            >
                        </div>
                    </div>
                </div>
                <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                    <div class="flex -space-x-0.5">
                        <dt class="sr-only">Commenters</dt>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Lawrence Hunter"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Angela Fisher"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Jenny Wilson"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Benjamin Russel"
                            />
                        </dd>
                    </div>
                    <div class="flex w-16 gap-x-2.5">
                        <dt>
                            <span class="sr-only">Total replies</span>
                            <svg
                                class="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </dt>
                        <dd class="text-sm leading-6 text-gray-400">22</dd>
                    </div>
                </dl>
            </li>
            <li
                class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap px-4 sm:px-6"
            >
                <div>
                    <p class="text-sm font-semibold leading-6">
                        <a href="/" class="hover:underline"
                            ><span
                                class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20 mr-1"
                                >Solved</span
                            >
                            Voluptatum ducimus voluptatem qui in eum quasi consequatur vel?</a
                        >
                    </p>
                    <div class="mt-1 flex items-center gap-2 text-xs leading-5 text-gray-400">
                        <p>
                            <a href="/" class="hover:underline">Lindsay Walton</a>
                        </p>
                        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <p><time datetime="2023-01-20T10:04Z">5d ago</time></p>
                        <div>
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >security</span
                            >
                            <span
                                class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                                >scam</span
                            >
                        </div>
                    </div>
                </div>
                <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                    <div class="flex -space-x-0.5">
                        <dt class="sr-only">Commenters</dt>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Emily Selman"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Kristin Watson"
                            />
                        </dd>
                    </div>
                    <div class="flex w-16 gap-x-2.5">
                        <dt>
                            <span class="sr-only">Total replies</span>
                            <svg
                                class="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </dt>
                        <dd class="text-sm leading-6 text-gray-400">8</dd>
                    </div>
                </dl>
            </li>
            <li
                class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap px-4 sm:px-6"
            >
                <div>
                    <p class="text-sm font-semibold leading-6">
                        <a href="/" class="hover:underline"
                            ><span
                                class="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20 mr-1"
                                >Poll</span
                            >Perferendis cum qui inventore ut excepturi nostrum occaecati?</a
                        >
                    </p>
                    <div class="mt-1 flex items-center gap-2 text-xs leading-5 text-gray-400">
                        <p>
                            <a href="/" class="hover:underline">Courtney Henry</a>
                        </p>
                        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <p><time datetime="2023-01-20T20:12Z">5d ago</time></p>
                    </div>
                </div>
                <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                    <div class="flex -space-x-0.5">
                        <dt class="sr-only">Commenters</dt>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Kristin Watson"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Tom Cook"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Emily Selman"
                            />
                        </dd>
                        <dd>
                            <img
                                class="h-6 w-6 rounded-full border border-gray-900"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Benjamin Russel"
                            />
                        </dd>
                    </div>
                    <div class="flex w-16 gap-x-2.5">
                        <dt>
                            <span class="sr-only">Total replies</span>
                            <svg
                                class="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </dt>
                        <dd class="text-sm leading-6 text-gray-400">15</dd>
                    </div>
                </dl>
            </li>
        </ul>
    </Card>
</div>

<br />
<br />
<h1 class="text-white">Topic with id</h1>
<p class="text-white">{JSON.stringify($page.params)}</p>
<br />
<a href="/topic/programming/post/gB0NV05e-how_to_build_a_pc" class="text-white bg-black px-4 py-2"
    >Show Post</a
>
