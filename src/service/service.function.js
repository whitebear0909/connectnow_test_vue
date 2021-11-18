export const sortVideos = (inputVideos, filterOption) => {
  return inputVideos.sort((a, b) => {
    if (
      filterOption.orderName === "rating" ||
      filterOption.orderName === "first_release_date"
    ) {
      if (filterOption.orderDirection === "asc")
        return a[filterOption.orderName] - b[filterOption.orderName];
      else return b[filterOption.orderName] - a[filterOption.orderName];
    } else {
      if (filterOption.orderDirection === "asc") {
        if (a[filterOption.orderName] < b[filterOption.orderName]) {
          return -1;
        }
        if (b[filterOption.orderName] < a[filterOption.orderName]) {
          return 1;
        }
        return 0;
      } else {
        if (a[filterOption.orderName] > b[filterOption.orderName]) {
          return -1;
        }
        if (b[filterOption.orderName] > a[filterOption.orderName]) {
          return 1;
        }
        return 0;
      }
    }
  });
};

export const filterVideosByFilterOption = (inputVideos, filterOption) => {
  return inputVideos.filter((el) => {
    if (
      el.name.includes(filterOption.searchName) &&
      Math.round(el.rating / 10) >= filterOption.score * 1
    )
      return el;
  });
};
