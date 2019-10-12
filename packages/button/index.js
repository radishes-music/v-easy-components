import VEButton from './src/button.vue';

VEButton.install = function (Vue) {
  Vue.component(VEButton.name, VEButton);
};

export default VEButton;
