<template>
    <div class="v-easy-button button"
        :class="[type ? 'easy-button-' + type : '', {
            'is-disabled': buttonDisabled,
            'is-plain': plain,
            'is-circle': circle
          }]">
        <button @click="handleClick"
                :type="nativeType">
            <i :class="['fa', 'fa-' + icon, {
                'is-rotate': rotate
            }]" v-if="icon"></i>
            <span v-if="$slots.default"><slot></slot></span>
        </button>
        <span class="button-mask" :class="maskType" v-if="mask"></span>
    </div>
</template>

<script>
    export default {
        name: 'VeButton',

        inject: {
            elForm: {
                default: ''
            },
        },

        props: {
            type: {type: String, default: 'default'},
            nativeType: {type: String, default: 'button'},
            maskType: {type: String, default: 'button-default-mask'},
            size: String,
            icon: {type: String},
            disabled: Boolean,
            circle: Boolean,
            plain: Boolean,
            rotate: Boolean,
            mask: {type: Boolean, default: false}
        },

        computed: {
            buttonDisabled() {
                return this.disabled || (this.elForm || {}).disabled;
            }
        },

        methods: {
            handleClick(evt) {
                if (this.buttonDisabled) return false;
                this.$emit('click', evt);
            }
        }
    }
</script>

<style lang="less">
    @success: #67c23a;
    @warning: #e6a23c;
    @error: #f56c6c;
    @info: #909399;
    @warning: #e6a23c;

    .v-easy-button {
        position: relative;
        display: inline-block;
        button {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            text-align: center;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            i {
                margin-right: 10px;
            }
        }
        overflow: hidden;
        .button-mask {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 4px;
            background-color: @info;
            opacity: .3;
            left: 0;
            top: 0;
            transition: left .3s;
            cursor: pointer;
        }
        .is-rotate {
            animation: rotate 1s linear infinite;
        }
        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }
    }
    .is-circle {
        button {
            border-radius: 50%;
            padding: 12px;
            i {
                margin: 0;
            }
        }

        .button-mask {
            border-radius: 50%;
        }
    }
    .is-disabled button{
        opacity: .4;
        cursor: not-allowed;
    }
    .button.is-plain button {
        background: none;
        border: 1px solid #eeeeee;
    }
    .button.is-plain.easy-button-primary button{
        color: @info;
        border: 1px solid #eeeeee;
    }
    .button.is-plain.easy-button-success button{
        color: @success;
        border: 1px solid #eeeeee;
    }
    .button.is-plain.easy-button-warning button{
        color: @warning;
        border: 1px solid #eeeeee;
    }
    .button.is-plain.easy-button-error button{
        color: @error;
        border: 1px solid #eeeeee;
    }
    .button.easy-button-primary:hover button{
        color: #fff;
        background: #0d85ff;
        border-color: #0d85ff;
    }
    .button.easy-button-success:hover button{
        color: #fff;
        background-color: #85ce61;
        border-color: #85ce61;
    }
    .button.easy-button-warning:hover button{
        color: #fff;
        background-color: #ebb563;
        border-color: #ebb563;
    }
    .button.easy-button-error:hover button{
        color: #fff;
        background-color: #f78989;
        border-color: #f78989;
    }
    .easy-button-primary button{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .easy-button-success button{
        color: #fff;
        background-color: @success;
        border-color: @success;
    }
    .easy-button-warning button{
        color: #fff;
        background-color: @warning;
        border-color: @warning;
    }
    .easy-button-error button{
        color: #fff;
        background-color: @error;
        border-color: @error;
    }
    .v-easy-button:focus,.v-easy-button:hover .button-mask {
        left: 100%;
    }
    .button+.button{
        margin-left:10px;
    }
    .button:focus,.button:hover button{
        color:#409EFF;
        border-color:#c6e2ff;
        background-color:#ecf5ff;
    }
    .button:active{
        color:#3a8ee6;
        border-color:#3a8ee6;
        outline:0;
    }
    .button [class*=el-icon-]+span{
        margin-left:5px;
    }
</style>
