<script setup>
import WelcomeItem from './WelcomeItem.vue'
import PubgIcon from './icons/IconPubg.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <PubgIcon />
    </template>
    <template #heading># 1</template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed vitae tellus diam. Nullam ut condimentum elit, feugiat finibus nunc.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading># 2</template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed vitae tellus diam. Nullam ut condimentum elit, feugiat finibus nunc.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading># 3</template>
    Suspendisse posuere sagittis massa at mattis. Pellentesque pharetra non ante at dapibus.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading># 4</template>
    Aliquam rhoncus bibendum quam et vestibulum. Proin luctus eros at erat commodo accumsan.
    Etiam sodales vestibulum eros vel pellentesque.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading># 5</template>
    Aenean vulputate nisi massa, id tristique ipsum vestibulum venenatis.
    Donec lacinia nulla sed purus congue consectetur.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading># 6</template>
    Aliquam et facilisis eros. Proin vitae vulputate nulla.
    Donec purus felis, varius sed condimentum ac, rutrum at purus.
  </WelcomeItem>
</template>
