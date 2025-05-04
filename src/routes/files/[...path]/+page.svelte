<script lang="ts">
  import { page } from '$app/state'
  import type { FileInfo } from '$lib/api/entities'
  import { Box } from 'heliodor'

  const { contents } = page.data as { contents: FileInfo[] }
  // FIXME: File and folder icons
  // FIXME: Make the rows clickable with linking
</script>

<Box class="files-container">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th class="size-cells">Size</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">..</td>
      </tr>
      {#each contents as file (file.name)}
        <tr>
          <td>{file.name}</td>
          <td class="size-cells">{file.size}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</Box>

<style lang="scss">
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  thead,
  tbody > tr:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
  }

  .size-cells {
    width: 120px;
  }

  :global(.files-container) {
    margin: 20px;
  }
</style>
