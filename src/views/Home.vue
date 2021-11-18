<template>
  <div class="video-games">
    <div class="row">
      <div class="col-md-3 col-sm-12 mt-3">
        <div class="filter-box">
          <div class="filter-result-text">Filter Results</div>
          <div class="filter-item-input mt-3">
            <label for="filterName" class="form-label">Name (Contains)</label>
            <input
              class="form-control"
              id="filterName"
              placeholder="Text String"
              v-on:keyup.enter="handleFilter"
              v-model="filterOption.searchName"
            />
          </div>
          <div class="row justify-content-between">
            <div class="col-md-12 col-sm-4 col-xs-12 mt-3 filter-item-input">
              <label for="filterScore" class="form-label">Minimum Score</label>
              <input
                class="form-control"
                id="filterScore"
                placeholder="1 - 10"
                v-on:keyup.enter="handleFilter"
                v-model="filterOption.score"
              />
            </div>
            <div class="col-md-12 col-sm-5 col-xs-12 mt-3 filter-item-select">
              <label for="filterScore" class="form-label">Order By</label>
              <div class="input-group">
                <button
                  type="button"
                  class="btn btn-outline-secondary sort-direction"
                  @Click="handleChangeOrderDirection"
                >
                  <svg
                    width="16"
                    height="16"
                    v-if="filterOption.orderDirection == 'asc'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 50 448 512"
                    fill="white"
                  >
                    <path
                      d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"
                    />
                  </svg>
                  <svg
                    v-else
                    width="16"
                    height="16"
                    viewBox="0 50 448 512"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                    />
                  </svg>
                </button>
                <select
                  @Change="handleFilter()"
                  v-model="filterOption.orderName"
                  class="form-select sort-name"
                >
                  <option
                    v-for="option in options"
                    :value="option.id"
                    :key="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-12 col-sm-2 col-xs-12 mt-3 filter-clear">
              <label for="filterScore" class="form-label clear-label"
                >hidden</label
              >
              <button
                type="button"
                class="clear-button form-control btn btn-outline-secondary"
                @Click="handleClear"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 col-sm-12">
        <template v-if="filteredVideos">
          <template v-if="filteredVideos.length == 0">
            <div class="text-center">
              <div class="mt-5" role="status">
                <span class="no-result">There's no result.</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div
              class="row list-box mt-3"
              v-for="videoItem in filteredVideos"
              :key="videoItem.id"
            >
              <div class="img-black col-sm-2 col-xs-12"></div>
              <div class="list-main col-sm-8 col-xs-12 px-3">
                <div class="list-title">{{ videoItem.name }}</div>
                <div class="list-date">
                  Release Date:
                  {{
                    $filters.getDateStrFromTimeStamp(
                      videoItem.first_release_date
                    )
                  }}
                </div>
                <div class="list-content mt-2">
                  {{ $filters.cutString(videoItem.summary) }}
                </div>
              </div>
              <div
                class="
                  list-score
                  col-sm-2 col-xs-12
                  d-flex
                  justify-content-center
                  flex-column
                "
              >
                <div class="d-flex justify-content-center">
                  <div class="score-mark rounded-circle">
                    <div>{{ $filters.getIntRating(videoItem.rating) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
        <template v-else>
          <div class="text-center">
            <div class="spinner-border text-info mt-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  data: () => ({
    filterOption: {
      searchName: "",
      score: 0,
      orderName: "first_release_date",
      orderDirection: "asc",
    },
    options: [
      { name: "Release Date", id: "first_release_date" },
      { name: "Score", id: "rating" },
      { name: "Name", id: "name" },
    ],
  }),
  computed: {
    ...mapGetters({
      filteredVideos: "filteredVideos",
    }),
  },
  mounted() {
    this.$store.dispatch("getAllVideos");
  },
  methods: {
    handleChangeOrderDirection() {
      this.filterOption.orderDirection === "asc"
        ? (this.filterOption.orderDirection = "desc")
        : (this.filterOption.orderDirection = "asc");
      this.handleFilter();
    },
    handleFilter() {
      if (isNaN(this.filterOption.score)) {
        this.filterOption.score = 0;
        this.$notify("Minimum score must be number.");
      } else {
        this.$store.dispatch("applyFilter", this.filterOption);
      }
    },
    handleClear() {
      this.filterOption = {
        searchName: "",
        score: 0,
        orderName: "first_release_date",
        orderDirection: "asc",
      };
      this.handleFilter();
    },
  },
};
</script>
