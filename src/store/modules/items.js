import axios from "axios";

axios.defaults.baseURL = "https://registry.npmjs.com/-/v1";

const state = {
  items: [],
};

const getters = {
  allItems: (state) => state.items,
};

const actions = {
  async fetchItems({ commit }, text) {
    const response = await axios.get(`/search?text=${text}`);

    commit("setItems", response.data.objects);
  },
};

const mutations = {
  setItems: (state, items) => (state.items = items),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
