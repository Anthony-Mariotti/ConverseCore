<script lang="ts">
    import Card from './Card.svelte';
</script>

<div class="flex flex-col gap-y-8 text-gray-200">
    <Card divide>
        <div class="px-4 py-5 sm:px-6">
            <!-- Content goes here -->
            <!-- We use less vertical padding on card headers on desktop than on body sections -->
            <h1 class="text-lg font-bold">General</h1>
        </div>
        <div class="grid gap-2 divide-y divide-gray-500">
            <!-- Content goes here -->
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/topic/announcements" class="text-lg font-bold">Announcements</a>
                    <p class="text-sm">Repudiandae sint consequuntur vel.</p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Sub Folder Topic</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                        />
                        <path
                            d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Lorem ipsum</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                        />
                        <path
                            d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Lorem ipsum</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card>

    <Card divide>
        <div class="px-4 py-5 sm:px-6">
            <!-- Content goes here -->
            <!-- We use less vertical padding on card headers on desktop than on body sections -->
            <h1 class="text-lg font-bold">General</h1>
        </div>
        <div class="grid gap-2 divide-y divide-gray-500">
            <!-- Content goes here -->
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                        />
                        <path
                            d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Lorem ipsum</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                        />
                        <path
                            d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Lorem ipsum</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card>

    <Card divide>
        <div class="px-4 py-5 sm:px-6">
            <!-- Content goes here -->
            <!-- We use less vertical padding on card headers on desktop than on body sections -->
            <h1 class="text-lg font-bold">General</h1>
        </div>
        <div class="grid gap-2 divide-y divide-gray-500">
            <!-- Content goes here -->
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                        />
                        <path
                            d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Lorem ipsum</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 px-4 py-5 sm:p-6">
                <div
                    class="flex-shrink-0 self-center w-16 h-16 bg-gray-900 rounded-lg flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                        />
                        <path
                            d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                        />
                    </svg>
                </div>
                <div class="flex-grow">
                    <a href="/" class="text-lg font-bold">Lorem ipsum</a>
                    <p class="mt-1">
                        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita
                        quia omnis voluptatem. Minus quidem ipsam quia iusto.
                    </p>
                </div>
                <div class="flex flex-shrink-0 items-center">
                    <dl class="flex flex-col text-right">
                        <dt class="text-xl font-semibold">222.2k</dt>
                        <dd>posts</dd>
                    </dl>
                    <div class="flex ml-4">
                        <div class="mr-4 flex-shrink-0 self-center rounded-lg">
                            <img
                                class="h-16 w-16 rounded-lg"
                                src="https://placehold.co/256x256.png?text=MW"
                                alt=""
                            />
                        </div>
                        <div class="w-48">
                            <h4 class="text-lg font-bold truncate">Lorem ipsum of post title</h4>
                            <time datetime="2023-04-19T10:27:45Z" title="Apr 19, 2023, 10:27 AM">
                                3 hours ago
                            </time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</div>
