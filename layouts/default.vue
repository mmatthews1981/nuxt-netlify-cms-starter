<template>
  <div class="container">
      <a href="/">
        <h1>Welcome to meredithmatthews.net.</h1>
        <div>press any key to continue...</div>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/axioms">Axioms</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1hsjUwNQLBOrgE35MNurFPsvyBt9uV85ksAbwKccg3xU/edit?usp=sharing">Resume</a>
          </li>
        </ul>
      </nav>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<style>
html, body{
  padding: 0;
  margin: 0;
}
h1 {
  margin: 0;
}

.container {

}
nav {

 }
.content {
  background-color: greenyellow;

}

</style>
