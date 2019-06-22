<template>
    <div
    class="v-easy-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click="switchValue"
    >
        <input
            class="v-easy-input"
            type="checkbox"
            @change="handleChange"
            ref="input"
            :id="id"
            :name="name"
            :true-value="activeValue"
            :false-value="inactiveValue"
            :disabled="switchDisabled"
            @keydown.enter="switchValue"
        >
        <span
            :class="['v-easy-label', 'v-easy-label--left', !checked ? 'is-active' : '']"
            v-if="inactiveIconClass || inactiveText">
      <i :class="[inactiveIconClass]" v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
        <span class="v-easy-core" ref="core" :style="{ 'width': coreWidth + 'px' }">
    </span>
        <span
            :class="['v-easy-label', 'v-easy-label--right', checked ? 'is-active' : '']"
            v-if="activeIconClass || activeText">
      <i :class="[activeIconClass]" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
    </div>
</template>
<script>

    export default {
        name: 'VeSwitch',
        inject: {
            elForm: {
                default: ''
            }
        },
        props: {
            value: {
                type: [Boolean, String, Number],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 40
            },
            activeIconClass: {
                type: String,
                default: ''
            },
            inactiveIconClass: {
                type: String,
                default: ''
            },
            activeText: String,
            inactiveText: String,
            activeColor: {
                type: String,
                default: ''
            },
            inactiveColor: {
                type: String,
                default: ''
            },
            activeValue: {
                type: [Boolean, String, Number],
                default: true
            },
            inactiveValue: {
                type: [Boolean, String, Number],
                default: false
            },
            name: {
                type: String,
                default: ''
            },
            id: String
        },
        data() {
            return {
                coreWidth: this.width
            };
        },
        created() {
            if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
                this.$emit('input', this.inactiveValue);
            }
        },
        computed: {
            checked() {
                return this.value === this.activeValue;
            },
            switchDisabled() {
                return this.disabled || (this.elForm || {}).disabled;
            }
        },
        watch: {
            checked() {
                this.$refs.input.checked = this.checked;
                if (this.activeColor || this.inactiveColor) {
                    this.setBackgroundColor();
                }
            }
        },
        methods: {
            handleChange(event) {
                this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
                this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
                this.$nextTick(() => {
                    // set input's checked property
                    // in case parent refuses to change component's value
                    this.$refs.input.checked = this.checked;
                });
            },
            setBackgroundColor() {
                let newColor = this.checked ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = newColor;
                this.$refs.core.style.backgroundColor = newColor;
            },
            switchValue() {
                !this.switchDisabled && this.handleChange();
            },
            getMigratingConfig() {
                return {
                    props: {
                        'on-color': 'on-color is renamed to active-color.',
                        'off-color': 'off-color is renamed to inactive-color.',
                        'on-text': 'on-text is renamed to active-text.',
                        'off-text': 'off-text is renamed to inactive-text.',
                        'on-value': 'on-value is renamed to active-value.',
                        'off-value': 'off-value is renamed to inactive-value.',
                        'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
                        'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
                    }
                };
            }
        },
        mounted() {
            /* istanbul ignore if */
            this.coreWidth = this.width || 40;
            if (this.activeColor || this.inactiveColor) {
                this.setBackgroundColor();
            }
            this.$refs.input.checked = this.checked;
        }
    };
</script>

<style lang="less">
    .v-easy-switch {
        display: inline-flex;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
        .v-easy-input {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
        }
        .v-easy-core {
            margin: 0;
            display: inline-block;
            position: relative;
            width: 40px;
            height: 20px;
            border: 1px solid #dcdfe6;
            outline: none;
            border-radius: 10px;
            box-sizing: border-box;
            background: #dcdfe6;
            cursor: pointer;
            transition: border-color .3s,background-color .3s;
            vertical-align: middle;
        }
        .v-easy-core::after {
            content: "";
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
    .v-easy-switch.is-checked .v-easy-core::after {
        left: 100%;
        margin-left: -17px;
    }
    .v-easy-label {
        transition: .2s;
        height: 20px;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        vertical-align: middle;
        color: #303133;
    }
    .v-easy-label--right {
        margin-left: 10px;
    }
    .v-easy-label--left {
        margin-right: 10px;
    }
    .v-easy-label.is-active {
        color: #409eff;
    }
</style>
