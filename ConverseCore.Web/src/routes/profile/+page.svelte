<script>
    import Card from '$lib/components/Card.svelte';
</script>

<div class="rounded-lg bg-gray-800 shadow flex flex-col gap-4 mt-5 pb-4">
    <div class="profile-banner h-52 bg-center bg-no-repeat rounded-t-lg" />
    <div class="flex px-4 lg:px-12 justify-between">
        <div class="flex flex-col lg:flex-row gap-2 lg:gap-8">
            <div class="relative flex-shrink-0 max-w-fit">
                <img
                    class="w-32 lg:w-52 h-32 lg:h-52 -mt-12 lg:-mt-20 rounded-full border-8 border-gray-800"
                    src="https://placehold.co/256x256.png?text=MW"
                    alt=""
                />
                <span
                    class="absolute w-10 h-10 bg-green-500 border-[6px] border-gray-800 -translate-y-1 lg:-translate-y-5 -translate-x-1 lg:-translate-x-5 rounded-full left-auto bottom-0 right-0 flex items-center justify-center"
                />
            </div>
            <div class="hidden lg:flex flex-col flex-shrink text-gray-50">
                <div class="inline-flex items-center gap-2">
                    <span class="text-3xl tracking-wide font-semibold">MrWave831</span>
                    <span
                        class="inline-flex items-center rounded-md bg-indigo-300 px-2.5 py-0.5 text-sm font-medium text-indigo-900"
                        >Founder</span
                    >
                    <span
                        class="hidden lg:inline-flex items-center rounded-md bg-red-300 px-2.5 py-0.5 text-sm font-medium text-red-900"
                        >Administrator</span
                    >
                    <span
                        class="hidden lg:inline-flex items-center rounded-md bg-green-300 px-2.5 py-0.5 text-sm font-medium text-green-900"
                        >Moderator</span
                    >
                </div>
                <div class="mt-2 lg:w-3/4">
                    <span
                        >A really important builder to the project. This is gonna make the
                        description larger. That is the only goal. Thank you very much.</span
                    >
                </div>
                <div class="hidden lg:flex gap-6 mt-6">
                    <div class="inline-flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -ml-0.5">
                            <path
                                fill-rule="evenodd"
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span>New York, New York</span>
                    </div>
                    <div class="inline-flex items-center gap-2">
                        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"
                            ><title>Discord</title><path
                                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                            />
                        </svg>
                        <span>MrManCoolio#0000</span>
                    </div>
                    <div class="inline-flex items-center gap-2">
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                            />
                        </svg>
                        <span>@MrCoolDude</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-shrink flex gap-2">
            <div>
                <button
                    type="button"
                    class="flex-grow-0 inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="-ml-0.5 h-5 w-5"
                    >
                        <path
                            d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                        />
                    </svg>
                    <span class="sr-only lg:not-sr-only">Follow</span>
                </button>
            </div>
            <div>
                <button
                    type="button"
                    class="flex-grow-0 rounded-lg bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="flex lg:hidden px-5 lg:px-12 flex-col flex-shrink text-gray-50">
        <div class="inline-flex items-center gap-2">
            <span class="text-3xl tracking-wide font-semibold">MrWave831</span>
            <span
                class="inline-flex items-center rounded-md bg-indigo-300 px-2.5 py-0.5 text-sm font-medium text-indigo-900"
                >Founder</span
            >
            <span
                class="hidden lg:inline-flex items-center rounded-md bg-red-300 px-2.5 py-0.5 text-sm font-medium text-red-900"
                >Administrator</span
            >
            <span
                class="hidden lg:inline-flex items-center rounded-md bg-green-300 px-2.5 py-0.5 text-sm font-medium text-green-900"
                >Moderator</span
            >
        </div>
        <div class="mt-2 lg:w-3/4">
            <span
                >A really important builder to the project. This is gonna make the description
                larger. That is the only goal. Thank you very much.</span
            >
        </div>
        <div class="hidden lg:flex gap-6 mt-6">
            <div class="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -ml-0.5">
                    <path
                        fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                    />
                </svg>

                <span>New York, New York</span>
            </div>
            <div class="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"
                    ><title>Discord</title><path
                        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                    />
                </svg>
                <span>MrManCoolio#0000</span>
            </div>
            <div class="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" class="w-5 h-5">
                    <path
                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                </svg>
                <span>@MrCoolDude</span>
            </div>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-8 mt-2 px-4 lg:px-12 pb-2 lg:pb-0">
        <div class="w-52 hidden">
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

<style>
    .profile-banner {
        background-image: url('https://placehold.co/1920x256.png');
    }

    .dev {
        @apply border border-red-500;
    }
</style>
