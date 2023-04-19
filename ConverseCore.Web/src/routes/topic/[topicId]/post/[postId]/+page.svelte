<script lang="ts">
    import { page } from '$app/stores';

    // postId options:
    // When showing a post: gB0NV05e-example_post_title
    // When targeting a reply: gB0NV05e
</script>

<h1 class="text-white">Post with id</h1>
<p class="text-white">{JSON.stringify($page.params)}</p>
<br />
<a href="/topic/pcbuilding" class="text-white bg-black px-4 py-2">Back to Topic</a>
<br />
<br />
<a href="/topic/pcbuilding/post/gB0NV05e/reply/yLA6m0oM" class="text-white bg-black px-4 py-2"
    >Show Reply</a
>
