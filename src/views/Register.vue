<template>
  <div class="register-container">
    <VaCard class="register-card">
      <h1>REGISTER</h1>
      <VaForm @submit.prevent="onSubmit">
        <VaInput
          class="vuestic-input"
          v-model="username"
          label="Username"
          placeholder="Enter your username"
          :error-messages="errors.username"
          @blur="validateField('username')"
          required
        />
        <VaInput
          class="vuestic-input"
          v-model="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          :error-messages="errors.email"
          @blur="validateField('email')"
          required
        />
        <VaInput
          class="vuestic-input"
          v-model="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          :error-messages="errors.password"
          @blur="validateField('password')"
          required
        />
        <VaButton type="submit" color="primary">Register</VaButton>
      </VaForm>
    </VaCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VaCard, VaForm, VaInput, VaButton } from "vuestic-ui";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const { handleSubmit, errors, validateField } = useForm({
  validationSchema: schema,
});

const username = ref("");
const email = ref("");
const password = ref("");

const onSubmit = handleSubmit((values) => {
  console.log("Form Values:", values);
  // Add your registration logic here
});
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.register-card {
  padding: 20px;
  width: 40%;
}

.register-card h1 {
  text-align: center;
  margin: 1rem auto;
  font-size: 2rem;
}

.register-card .vuestic-input {
  margin-bottom: 1rem;
  width: 100%;
}

.register-card button {
  width: 100%;
  margin-top: 1rem;
}
</style>
