<template>
  <div class="login-warp">
    <mu-appbar
      class="login-warp-title"
      color="primary"
    >
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>

        {{ $t('TITLE_COMPANY_LOGIN_WELCOME') }}

      <mu-menu
        flat
        slot="right"
        :open.sync="openMenu"
        >
        <mu-button
          flat
          normal
        >
        {{ langBtnText }}
        </mu-button>
        <mu-list
          slot="content"
          v-show="openMenu"
        >
          <mu-list-item
            button
            v-for="languageItem in $PMLanguageConfig.languageDic"
            :key="languageItem.lang"
            @click="handleChangeLanguage(languageItem)"
          >
            <mu-list-item-content>
              <mu-list-item-title> {{ languageItem.lang }} </mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>

    <!-- login warp -->
     <mu-paper
      class="demo-paper login-paper"
      :z-depth="1"
     >
    <ul class="user-list-warp">
      <li>
        <mu-text-field
          :label="$t('LABEL_LOGIN_USER_NAME')"
          label-float
          icon="account_circle"
          class="user-login-warp"

       >
       </mu-text-field>
      </li>

      <li>
        <mu-text-field
          class="user-login-warp"
          icon="locked"
          :label="$t('LABEL_LOGIN_PASSWORD')"
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
          :action-click="handleChangePasswordIconCheck"
          :type="visibility ? 'text': 'password'"
        >
        </mu-text-field>
      </li>
      <li>
        <mu-text-field
          v-model="code"
          icon="lock_open"
          class="code_input user-login-warp"
          :label="$t('LABEL_LOGIN_CODE_CHECK')"
        >
          <mu-paper
            class="check-code-paper"
            :z-depth="3"
          >
            <img
              src="data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUAFUDASIA AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA AAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3 ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm p6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA AwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx BhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3 uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD16Wcw MDIpMbEAMozg+hH+ev50tP8AOFgrXM1ulwufMFrkw9TggNzjHUjHOeeKikga4WWNrqRUQPC5DZKg 9yQc4I/I+mOMfwgW/wCESsWMbiJRIryJg5Uu3UHrj8RgnvXMo+7c47aXOmmmkSPaxVHz9/JC49cl SAfb9aoNKyJBF5ksmBgeTtYZA7EYP1HB56+vN+JtShhjitrmOyuL90K2kl1sZIkYgM7Akr/BwTk5 GOeRV3TrXTUt4bTQpUljiZh5q9XfarZLjhjyPTHTjFNRsiU/esNuNTuUhubx7S2ggikIP2m43PIo O3cuYzwcHuf5ZW+17UrLRP7VFhBbzIfLNvKSWjQkY3YC8+g7Dqc8VTGp6dqutCS4vreCzsZEZNsi r58oyd/zHOFz6fNzz0FLrbR6v4c1We1jz9nZVzCuUkAb5mX/AGQB16fKamrpB+htFK6TR1v262ku IWjkLHd5Z+U4G78OuQP1plzqElpckSRkxMflyMH3wRwRx3wea5KzW3m8Qy3WmoXt1t0WZs7lln3c Z5+ZivJxk5Jz1JrrYGS8tfInVypYhXPrjcOvIOD7jjqamNmr2IlFRGSTTz28txB8uxju2ynoOnHK +h4PPPrUy3TwiSSZy0SrgAgAlskHB4B6flj8aMc32eWNblCsYUoXKMu4cYIHqMDnrgDvir0MiW1r viYzxbhuYHlRwBkD0A+v9KaJZDLqts5G9J144CsVP44I46Y/zkqsIpbeNWis0lDkgqybypBI6j8P xz0oqrIdkZ3jXUbrRoIr2ykCTCeMHKghgVfgj/gPXryefTb07SbfTrYadbtIIoYxtZiCx3Fs54we cnkdzRRVP+Gin8CM03DwPbzxYVjHyOxG4jB9sAD8KkuXzDlQEKOjptJG3cuSB6DIoopdRFrSD9ph uIpgHXIyW5Jznv8AXn6k0Q/Lf26DIFxArSYYgk4JzwevH6miipe7E92XXgAuFjV3USRtvyd2cEYH zZ4+Y1SEH2O9WCKR/LwkmDjrvC+noaKKI7Atie5YmGOY4LxyyFSQP4Q2B+gplspaCFC74OI/vdAU 3gj3B6H0oopdBdCHRw8gmCyvGo28JggnnnkH0oooqmtRs//Z" alt="">
          </mu-paper>
        </mu-text-field>
      </li>

      <li class="user-login-button">
          <mu-button
            color="primary"
            class="user-button-sure"
            @click="handleLoginButtonSure"
          >
            {{ getLang('BUTTON_LOGIN_USER_NAME_SURE')}}
          </mu-button>
          <mu-button
            color="primary"
          >
            {{ getLang('BUTTON_LOGIN_USER_NAME_CANCEL') }}
          </mu-button>
      </li>
    </ul>
     </mu-paper>



  </div>
</template>

<script>
export default {
  data () {
    return {
      visibility:false,
      code: null,
      openMenu: false,
      langBtnText: this.getLang('BUTTON_LOGIN_CHANGE_LANGUAGE_CONFIG')
    }
  },
  mounted () {
  },
  methods: {
    handleChangePasswordIconCheck: function () {
      return this.visibility = !this.visibility;
    },
    handleLoginButtonSure: function () {
      this.$router.push('/home');
    },
    handleChangeLanguage: function (item) {
      this.$i18n.locale = item.languageLocal;
      this.openMenu = !this.openMenu;
      this.langBtnText = item.lang;
    }
  }
}
</script>
<style lang="less" scoped>
.login-warp {
  width: 100%;
  text-align: center;

}

.login-warp-title {
  height: 130px;
  margin-bottom: 80px;
}
.mu-appbar-title {
  font-size: 35px;

}
.user-list-warp {
  list-style-type: none;
  height: auto;
  padding: 20px 0 50px 0;
}

.login-paper {
  width: 100%;
  max-width: 900px;
  position: relative;
  margin: 0 auto;
}

.user-login-warp {
  width: 50%;
}

.user-button-sure {
  margin-right: 60px;
}
.user-login-button {
  padding-top: 20px;
  padding-left: 200px;
}
.code_input {
  position: relative;
}
.check-code-paper {
  display: inline-block;
  width: 100px;
  height: 40px;
  position: absolute;
  left: 400px;
  top: -10px;

  img {
    width: 100%;
    height: 100%;

  }
}
</style>
