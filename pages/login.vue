<template>
  <main>
    <div class="wrapper">
      <div class="title-text">
        <div class="title login" ref="loginTitle">Login</div>
        <div class="title signup">Signup</div>
      </div>
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked />
          <input type="radio" name="slide" id="signup" />
          <label for="login" class="slide login" @click="toLogin">Login</label>
          <label
            for="signup"
            class="slide signup"
            ref="signupTab"
            @click="toSignup"
            >Signup</label
          >
          <div class="slider-tab" ref="selectedTab"></div>
        </div>
        <div class="form-inner">
          <form
            action="#"
            class="login"
            ref="loginForm"
            @submit.prevent="login"
          >
            <div class="field">
              <input
                type="text"
                placeholder="Email Address"
                required
                ref="inputEmailLogin"
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Password"
                required
                ref="inputPassLogin"
              />
            </div>
            <div class="pass-link"><a href="#">Forgot password?</a></div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div class="signup-link">
              Not a member?
              <a ref="signupLink" @click="onSignupLink">Signup now</a>
            </div>
          </form>
          <form action="#" class="signup" @submit.prevent="signUp">
            <div class="field">
              <input type="name" placeholder="Name" required ref="inputName" />
            </div>
            <div class="field">
              <input
                type="text"
                placeholder="Email Address"
                required
                ref="inputEmail"
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Password"
                required
                ref="inputPass"
              />
            </div>

            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
        <Alert :msg="msg" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/stores/auth";
definePageMeta({
  layout: "noheader",
});
const userStore = useUserStore();
const router = useRouter();

const loginTitle = ref({} as HTMLElement);
const loginForm = ref({} as HTMLElement);
const signupTab = ref({} as HTMLElement);
const inputName = ref({} as HTMLInputElement);
const inputEmail = ref({} as HTMLInputElement);
const inputPass = ref({} as HTMLInputElement);
const inputEmailLogin = ref({} as HTMLInputElement);
const inputPassLogin = ref({} as HTMLInputElement);
const msg = ref("");
// Change Style
function toLogin(): void {
  loginTitle.value.style.marginLeft = "0%";
  loginForm.value.style.marginLeft = "0%";
}
function toSignup(): void {
  loginTitle.value.style.marginLeft = "-50%";
  loginForm.value.style.marginLeft = "-50%";
}
function onSignupLink(): void {
  signupTab.value.click();
}

// Submit SignUp && Login
async function signUp() {
  if (validateName(inputName.value.value)) {
    msg.value =
      "The name must be between 3-25 character and contain a-z A-Z only";
  } else if (validateEmail(inputEmail.value.value)) {
    msg.value = "The email is not valid!";
  } else if (inputPass.value.value.length < 6) {
    msg.value =
      "The password is too short!\nPassword must be at least 6 character";
  } else {
    msg.value = "";
    //send request here...
    let req = {
      name: inputName.value.value,
      email: inputEmail.value.value,
      password: inputPass.value.value,
    };
    const { data } = await useFetch<ResponseAuth>(
      "http://localhost:3001/register",
      {
        method: "post",
        body: req,
      }
    );
    if (data.value) {
      if (data.value.error == false) {
        userStore.login(data.value);
        router.replace({ name: "index" });
      } else {
        msg.value = data.value.message;
      }
    } else {
      msg.value = "Unable to connect to server!!";
    }
  }
}
async function login() {
  if (validateEmail(inputEmailLogin.value.value)) {
    msg.value = "The email is not valid!";
  } else if (inputPassLogin.value.value.length < 6) {
    msg.value =
      "The password is too short!\nPassword must be at least 6 character";
  } else {
    msg.value = "";
    let req = {
      email: inputEmailLogin.value.value,
      password: inputPassLogin.value.value,
    };
    const { data } = await useFetch<ResponseAuth>(
      "http://localhost:3001/login",
      {
        method: "post",
        body: req,
      }
    );
    if (data.value) {
      if (data.value.error == false) {
        userStore.login(data.value);
        router.replace({ name: "index" });
      } else {
        msg.value = data.value.message;
      }
    } else {
      msg.value = "Unable to connect to server!!";
    }
  }
}

// Validate
function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return !re.test(email);
}
function validateName(name: string) {
  const re = /^([a-zA-Z]+\s{1}){1,}[a-zA-Z]+$/;
  return !re.test(name) && name.length < 25 && name.length > 3;
}
</script>

<style scoped>
main {
  height: 100vh;
  display: grid;
  place-items: center;
  background: -webkit-linear-gradient(left, #003366, #004080, #0059b3, #0073e6);
  padding-top: 0px;
}
::selection {
  background: #1a75ff;
  color: #fff;
}
.wrapper {
  overflow: hidden;
  max-width: 390px;
  background: #fff;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}
.wrapper .title-text {
  display: flex;
  width: 200%;
}
.wrapper .title {
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .slide-controls {
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  overflow: hidden;
  margin: 17px 0 10px 0;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 15px;
}
.slide-controls .slide {
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.6s ease;
}
.slide-controls label.signup {
  color: #000;
}
.slide-controls .slider-tab {
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0;
  z-index: 0;
  border-radius: 15px;
  background: -webkit-linear-gradient(left, #003366, #004080, #0059b3, #0073e6);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
input[type="radio"] {
  display: none;
}
#signup:checked ~ .slider-tab {
  left: 50%;
}
#signup:checked ~ label.signup {
  color: #fff;
  cursor: default;
  user-select: none;
}
#signup:checked ~ label.login {
  color: #000;
}
#login:checked ~ label.signup {
  color: #000;
}
#login:checked ~ label.login {
  cursor: default;
  user-select: none;
}
.wrapper .form-container {
  width: 100%;
  overflow: hidden;
}
.form-container .form-inner {
  display: flex;
  width: 200%;
}
.form-container .form-inner form {
  width: 50%;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.form-inner form .field {
  height: 50px;
  width: 100%;
  margin-top: 13px;
}
.form-inner form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  border-radius: 15px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;
}
.form-inner form .field input:focus {
  border-color: #1a75ff;
  /* box-shadow: inset 0 0 3px #fb6aae; */
}
.form-inner form .field input::placeholder {
  color: #999;
  transition: all 0.3s ease;
}
form .field input:focus::placeholder {
  color: #1a75ff;
}
.form-inner form .pass-link {
  margin-top: 5px;
}
.form-inner form .signup-link {
  text-align: center;
  margin-top: 17px;
}
.form-inner form .pass-link a,
.form-inner form .signup-link a {
  color: #1a75ff;
  text-decoration: none;
}
.form-inner form .pass-link a:hover,
.form-inner form .signup-link a:hover {
  text-decoration: underline;
}
form .btn {
  height: 50px;
  width: 100%;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}
form .btn .btn-layer {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(
    right,
    #003366,
    #004080,
    #0059b3,
    #0073e6
  );
  border-radius: 15px;
  transition: all 0.4s ease;
}
form .btn:hover .btn-layer {
  left: 0;
}
form .btn input[type="submit"] {
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  background: none;
  border: none;
  color: #fff;
  padding-left: 0;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}
</style>
