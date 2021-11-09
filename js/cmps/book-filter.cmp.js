export default {
  template: `
        <div class="book-filter">
            <label><span class="underline">Search</span></label>
            <input @input="filter" v-model="filterBy.title" type="text" placeholder="Title">
            <input @input="filter" v-model.number="filterBy.fromPrice" type="number" placeholder="From Price">
            <input @input="filter" v-model.number="filterBy.toPrice" type="number" placeholder="To Price">
        </div>
    `,
  data() {
    return {
      filterBy: {
        title: '',
        fromPrice: null,
        toPrice: null,
      },
    };
  },
  methods: {
    filter() {
      console.log(this.filterBy);
      this.$emit('filtered', { ...this.filterBy });
    },
  },
};
