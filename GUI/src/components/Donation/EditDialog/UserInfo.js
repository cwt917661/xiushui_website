export default {
    data () {
      const defaultForm = Object.freeze({
        name: '',
        type: '',
        phone: '',
        email: '',
        address: ''
      });

      return {
        isValid: false,
        form: Object.assign({}, defaultForm),
        rules: {
          required: value => !!value || '必填欄位',
          phone: value => {
            const pattern = /[0-9]+/;
            return pattern.test(value) || '電話格式錯誤';
          },
          email: value => {
            if(!value) return true;
            else {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(value) || 'E-mail格式錯誤';
            }
          },
        }
      };
    },
    watch: {
      form: {
          handler: function () {
              this.isFormValid();
          },
          deep: true
      }
    },
    mounted() {
      this.isFormValid();
    },
    methods: {
      resetForm() {
        this.form = Object.assign({}, this.defaultForm);
        this.$refs.form.reset();
      },
      isFormValid() {
        if(this.$refs.form.validate()) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      }
    }
  }
