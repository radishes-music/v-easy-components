import VESteps from './src/steps.vue';
import VEStep from './src/step.vue';

VESteps.install = function (Vue) {
  Vue.component(VESteps.name, VESteps);
};

VEStep.install = function (Vue) {
  Vue.component(VEStep.name, VEStep);
};

export {
  VESteps,
  VEStep
};
