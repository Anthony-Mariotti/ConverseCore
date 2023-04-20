<script lang="ts">
    import Card from './Card.svelte';
    import { Icon } from './icon';
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
                    <Icon.Megaphone class="w-8 h-8" />
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
                    <Icon.Folder class="w-8 h-8" />
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
                    <Icon.ChatBubbleLeftRight class="w-8 h-8" />
                </div>
                <div class="flex-grow">
                    <a href="/topic/programming" class="text-lg font-bold">Programming</a>
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
                    <Icon.ChatBubbleLeftRight class="w-8 h-8" />
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
                    <Icon.ChatBubbleLeftRight class="w-8 h-8" />
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
                    <Icon.ChatBubbleLeftRight class="w-8 h-8" />
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
                    <Icon.ChatBubbleLeftRight class="w-8 h-8" />
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
                    <Icon.ChatBubbleLeftRight class="w-8 h-8" />
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
