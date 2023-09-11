<template>
  <table class="default">
    <tr>
      <th>Name</th>
      <th>LastName</th>
    </tr>
    <tr>
      <td>{{ name }}</td>
      <td>{{ lastname }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "CardPerson",
  props: {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
};
</script>
