import * as types from "../mutation-types";
import { filterVideosByFilterOption, sortVideos} from "../../service/service.function.js";
import { getVideos } from "../../service/service.api.js";

// state
const state = {
  videos: [],
  filteredVideos: null,
};

// getters
const getters = {
  videos: (state) => state.videos,
  filteredVideos: (state) => state.filteredVideos,
};

// mutations
const mutations = {
  [types.MUTATION_SET_VIDEOS](state, videos) {
    state.videos = videos;
  },
  [types.MUTATION_SET_FILTEREDVIDEOS](state, filteredVideos) {
    state.filteredVideos = filteredVideos;
  },
};

// actions
const actions = {
  async getAllVideos({ commit, dispatch }) {
    try {
      const { data } = await getVideos();
      commit(types.MUTATION_SET_VIDEOS, data);
      dispatch("applyFilter", null);
    } catch (e) {}
  },
  async applyFilter({ commit, state }, payload) {
    let temp = state.videos.slice();
    if(payload){
        temp = filterVideosByFilterOption(temp, payload);
        temp = sortVideos(temp, payload);
    }
    commit(types.MUTATION_SET_FILTEREDVIDEOS, temp);
  },
};

const videoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default videoModule;
