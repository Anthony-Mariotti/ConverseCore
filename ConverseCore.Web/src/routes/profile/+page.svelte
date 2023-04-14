<script>
    import Card from '$lib/components/Card.svelte';
</script>

<div class="rounded-lg bg-gray-800 shadow lg:p-4 flex flex-col gap-4">
    <div class="flex gap-4">
        <div class="bg-gray-900 min-w-fit rounded-lg hidden lg:block">
            <img
                class="w-52 h-52 rounded-lg"
                src="https://placehold.co/256x256.png?text=MW"
                alt=""
            />
        </div>
        <div class="bg-gray-900 flex-grow relative rounded-lg">
            <div class="absolute w-full h-full flex">
                <div class="bg-gray-900 min-w-fit rounded-l-lg lg:hidden">
                    <img
                        class="w-32 lg:w-52 h-32 lg:h-52 rounded-l-lg"
                        src="https://placehold.co/256x256/orange/white.png?text=MW"
                        alt=""
                    />
                </div>
                <div class="flex flex-col justify-end p-4 gap-2">
                    <div class="max-w-fit bg-black bg-opacity-50 p-2 rounded-lg">
                        <h1 class="text-2xl lg:text-3xl font-bold text-gray-100">MrWave831</h1>
                    </div>
                    <div class="max-w-fit bg-black bg-opacity-50 p-2 rounded-lg">
                        <p class="text-sm text-gray-100">Member</p>
                    </div>
                </div>
            </div>
            <img
                class="object-cover h-32 lg:h-52 w-full rounded-lg"
                src="https://placehold.co/1920x256.png"
                alt=""
            />
        </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-4 px-2 pb-2 lg:px-0 lg:pb-0">
        <div class="w-52">
            <div class="p-4 bg-gray-900 rounded-lg text-gray-100 text-sm flex flex-col gap-2">
                <dl class="flex flex-wrap">
                    <div class="flex w-full flex-none gap-x-4">
                        <dt class="flex-none">
                            <span class="sr-only">Last Activity:</span>
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-5 text-gray-400"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </dt>
                        <dd>
                            <abbr class="no-underline" title="Apr 14, 2023 at 3:00 PM"
                                >Yesterday at 12:00 PM</abbr
                            >
                        </dd>
                    </div>

                    <div class="flex w-full flex-none gap-x-4">
                        <dt class="flex-none">
                            <span class="sr-only">Joined:</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-5 text-gray-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                    />
                                </svg>
                            </span>
                        </dt>
                        <dd><span>Febuary 05, 2020</span></dd>
                    </div>

                    <div class="flex w-full flex-none gap-x-4">
                        <dt class="flex-none">
                            <span class="sr-only"> Posts: </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-5 text-gray-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                    />
                                </svg>
                            </span>
                        </dt>
                        <dd><span>324</span></dd>
                    </div>
                </dl>
            </div>
        </div>

        <div class="p-4 flex-grow bg-gray-900 rounded-lg flex flex-col gap-4">
            <div class="p-4 bg-slate-400" />
            <div class="p-4 bg-slate-400" />
            <div class="p-4 bg-slate-400" />
            <div class="p-4 bg-slate-400" />
            <div class="p-4 bg-slate-400" />
            <div class="p-4 bg-slate-400" />
            <div class="p-4 bg-slate-400" />
        </div>
    </div>
</div>
