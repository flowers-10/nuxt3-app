<template>
  <div class="w-full h-auto overflow-y-auto">
    <AppHeaders></AppHeaders>
    <AppNav></AppNav>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <AppFooter></AppFooter>
  </div>
</template>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.15189s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1);
}
</style>
