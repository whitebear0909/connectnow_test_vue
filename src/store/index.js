import {createStore} from 'vuex';
import videoModule from'./modules/video.js';

export default createStore({
  modules: {
    videoModule,
  }
})