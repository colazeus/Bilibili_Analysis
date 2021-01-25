<template>
<div>
  <up-list @cardClicked="showUpDraw($event)"></up-list>
  <up-draw ref="draw"></up-draw>
</div>
</template>

<script>
import UpDraw from '../components/up-draw-component'

export default {
  data(){
    return {
    }
  },
  methods: {
    showUpDraw:function(mid){
      this.$refs.draw.show(mid);
    }
  },
  components: {
    "up-draw": UpDraw,
  }
}
</script>
