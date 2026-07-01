<!-- This page handles any error encountered by the site. -->
<!-- This page handles any error encountered by the site. -->
<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<h2>{$page.status}</h2>
<p class="subhead">{$page.error.message}</p>
<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul>
  <li><a href="{base}/">Home</a></li>
</ul>