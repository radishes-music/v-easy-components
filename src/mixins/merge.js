export default {
    data() {
        return {
            errorClass: [],
            currentIndex: 0,
            conformity: false
        }
    },
    watch: {
        conformity(val) {
            this.$emit('status', !val);
        },
    },
    computed: {
        result() {
            let data = [];
            data = this.value === undefined || this.value === null
                ? []
                : this.value;
            if (!Array.isArray(this.value)) {
                data = data.split('.');
                data = data[0] === '' ? [] : data;
            }
            return data;
        },
    },
    methods: {
        handleKeyUp(index, $event) {
            this.$emit('keyUp', {$event, index});
        },
        handleFocus(index, $event) {
            this.currentIndex = index;
            this.$emit('focus', {$event, index});
        },
        setCurrentValue (value, index) {
            if (value.toString() === this.result.join('.')) return;
            this.$set(this.result, index, value.replace(/\D/g, ''));
            this.$emit('changeResult', this.result);
        },
        getCursortPosition (el) {
            let cursorPos = 0;
            if (document.selection) {
                var selectRange = document.selection.createRange();
                selectRange.moveStart('character', -el.value.length);
                cursorPos = selectRange.text.length;
            } else {
                cursorPos = el.selectionStart;
            }
            return cursorPos;
        },
        setCaretPosition(el, pos){
            if(el.setSelectionRange) {
                // IE Support
                el.focus();
                el.setSelectionRange(pos, pos);
            }else if (el.createTextRange) {
                // Firefox support
                var range = el.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }
    }
}
