<template>
  <div class="login-container">
    <VaCard class="login-card">
      <h1>LOGIN</h1>
      <VaForm @submit.prevent="handleSubmit">
        <VaInput
          class="vuestic-input"  
          v-model="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <VaInput
          class="vuestic-input"
          v-model="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <VaButton type="submit" color="primary">Login</VaButton>
      </VaForm>
    </VaCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VaCard, VaForm, VaInput, VaButton } from "vuestic-ui";


const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  // Add your login logic here
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  padding: 20px;
  width: 40%;
}

.login-card h1 {
  text-align: center;
  margin: 1rem auto;
  font-size: 2rem;
}

.login-card .vuestic-input {
  margin-bottom: 1rem;
  width: 100%;
}

.login-card button {
    width: 100%;
    margin-top: 1rem;
}
</style>
