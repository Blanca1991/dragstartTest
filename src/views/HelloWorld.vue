<template>
  <div class="hello">
    <div class="imageList" >
      <div class="imgDiv" v-for="(img, index) in imageList" :key="index" draggable="true"
      @dragstart="dragstart_handler($event, index)"
      @drag="drag_handler($event, index)"
      @dragend="dragend_handler($event, index)"
      @dragenter="dragenter($event, index)"
      @dragover="dragover($event, index)"
      @dragleave="dragleave($event, index)"
      @dragexist="dragexist($event, index)"
      @drop="drop($event, index)"
      >
        <img :src="img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import demo1 from '@/images/demo1.jpg'
import demo2 from '@/images/demo2.jpg'
import demo3 from '@/images/demo3.jpg'
import demo4 from '@/images/demo4.jpg'

export default {
  name: 'HelloWorld',
  data () {
    return {
      startData: null,
      endData: null,
      startIndex: null,
      imageList: [
        demo1,
        demo2,
        demo3,
        demo4
      ]
    }
  },
  methods: {
    dragstart_handler (ev, index) {
      // 被拖拽的元素 刚触发时
      this.startData = this.imageList[index]
      this.startIndex = index
      var img = new Image()
      img.src = this.imageList[index]
      ev.dataTransfer.setDragImage(img, -10, -10)
    },
    drag_handler (ev, index) {
      // 被拖拽的元素
      // console.log('drag', index)
    },
    dragend_handler (ev, index) {
      // 被拖拽的元素 结束拖拽
      // console.log('end', index)
    },
    dragenter (ev, index) {
      // 可放置拖拽元素的目标元素 进入目标元素时
      // console.log('dragenter', ev, index)
    },
    dragover (ev, index) {
      // 可放置拖拽元素的目标元素 在目标元素上移动时
      ev.preventDefault()
      // // Set the dropEffect to move
      // ev.dataTransfer.dropEffect = 'move'
    },
    dragleave (ev, index) {
      // 可放置拖拽元素的目标元素 在目标元素上离开时
      // this.endIndex = index
      // console.log('endIndex', ev, this.endIndex)
      // this.
    },
    dragexist (ev, index) {
      // 当元素变得不再是拖动操作的选中目标时触发。
      // console.log('dragexist', ev, index)
    },
    drop (ev, index) {
      // 当元素或选中的文本 在 可释放目标上被释放时触发。
      ev.preventDefault()
      this.imageList.splice(this.startIndex, 1)
      this.imageList.splice(index, 0, this.startData)
      this.$set(this.imageList, index, this.imageList[index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.imageList{
  display: flex;
  .imgDiv{ width: 100px; height: auto;margin: 10px;
    img{width: 100%;height: auto;}
  }
}

</style>
