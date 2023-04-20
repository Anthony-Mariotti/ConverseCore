<script lang="ts">
    import { Icon } from './icon';
</script>

<div class="mx-auto max-w-7xl w-full">
    <div class="rounded-lg bg-indigo-800 p-2 shadow-lg sm:p-3">
        <div class="flex flex-wrap items-center justify-between">
            <div class="flex w-0 flex-1 items-center">
                <span class="flex rounded-lg bg-indigo-900 p-2">
                    <Icon.Megaphone class="h-6 w-6 text-gray-200" />
                </span>
                <p class="ml-3 truncate font-medium text-white">
                    <span class="md:hidden">We announced a new game mode!</span>
                    <span class="hidden md:inline"
                        >Big news! We're excited to announce a brand new product.</span
                    >
                </p>
            </div>
            <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                    href="/"
                    class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                    >Learn more</a
                >
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                    type="button"
                    class="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <span class="sr-only">Dismiss</span>
                    <Icon.XMark class="h-6 w-6 text-white" />
                </button>
            </div>
        </div>
    </div>
</div>
