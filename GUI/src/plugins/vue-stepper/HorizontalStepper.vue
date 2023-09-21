<template>
    <div class="stepper-box">
        <div class="top">
            <div class="divider-line" :style="{width: `${(100/(steps.length) * (steps.length - 1)) - 10}%`}"></div>
            <div class="steps-wrapper">
                 <template v-for="(step, index) in steps">
                    <div :class="['step', isStepActive(index, step)]" :key="index" :style="{width: `${100 / steps.length}%`}">
                        <div class="circle">
                            <i class="material-icons md-18">
                                {{ (step.completed) ? 'done' : step.icon }}
                            </i>
                        </div>
                        <div class="step-title">
                            <h4>{{step.title}}</h4>
                            <h5 class="step-subtitle">{{step.subtitle}}</h5>
                        </div>
                    </div>
                </template>
             </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    steps: {
      type: Array,
      default: function() {
        return [
          {
            icon: "mail",
            // name: "first",
            title: "Sample title 1",
            subtitle: "Subtitle sample"
          },
          {
            icon: "report_problem",
            // name: "second",
            title: "Sample title 2",
            subtitle: "Subtitle sample"
          }
        ];
      }
    }
  },

  data() {
    return {
      currentStep: 0,
      previousStep: 0,
      finalStep: false
    };
  },

  computed: {
    enterAnimation() {
      if (this.currentStep < this.previousStep) {
        return "animated quick fadeInLeft";
      } else {
        return "animated quick fadeInRight";
      }
    },
    leaveAnimation() {
      if (this.currentStep > this.previousStep) {
        return "animated quick fadeOutLeft";
      } else {
        return "animated quick fadeOutRight";
      }
    }
  },

  methods: {
    isStepActive(index/*, step*/) {
      if (this.currentStep === index) {
        return "activated";
      } else {
        return "deactivated";
      }
    },

    activateStep(index, back = false) {
      if (this.steps[index]) {
        this.previousStep = this.currentStep;
        this.currentStep = index;

        if (index + 1 === this.steps.length) {
          this.finalStep = true;
        } else {
          this.finalStep = false;
        }

        // console.log(back);
        if (!back) {
        //   this.$emit("completed-step", this.previousStep);
        // console.log('set previous');
        // console.log(this.previousStep);
          this.steps[this.previousStep].completed = true;
        }
      }
      // this.$emit("active-step", this.currentStep);
      this.steps[index].completed = false;
    },

    nextStep () {
      let currentIndex = this.currentStep + 1;
      this.activateStep(currentIndex);
    },
    backStep() {
      // this.$emit("clicking-back");
      let currentIndex = this.currentStep - 1;
      if (currentIndex >= 0) {
        this.activateStep(currentIndex, true);
      }
    },
    reset() {
      // console.log('reset stepper');
      this.currentStep = 0;
      this.previousStep = 0;
      this.finalStep = false;
      this.steps.forEach(step => {
        step.completed = false;
      });
    }
  }
};
</script>

<style src="./HorizontalStepper.scss" scoped lang="scss">

</style>
<style scoped>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
      format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
