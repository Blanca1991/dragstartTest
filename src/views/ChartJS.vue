<template>
  <div class="ChartJS">
    ChartJS
    <canvas id="myChart" width="400px" height="400px"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'ChartJS',
  data () {
    return {

    }
  },
  mounted () {
    var myChart = document.getElementById('myChart')
    var myChart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'test Chart',
            backgroundColor: 'rgba(225, 10, 10, 0.3)',
            borderColor: 'rgba(225, 103, 110, 1)',
            borderWidth: 1,
            pointStrokeColor: '#fff',
            pointStyle: 'crossRot',
            data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
            cubicInterpolationMode: 'monotone',
            spanGaps: 'false',
            fill: 'false'
          }
        ]
      },
      options: {}
    })
  },
  methods: {

  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
.ChartJS{
  width: 600px; height: 600px;
}

</style>
