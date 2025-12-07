<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const chartDiv = ref<HTMLDivElement | null>(null)

const projects = [
  { year: '2007', count: 5 },
  { year: '2008', count: 8 },
  { year: '2009', count: 12 },
  { year: '2010', count: 18 },
  { year: '2011', count: 25 },
  { year: '2012', count: 32 },
  { year: '2013', count: 40 },
  { year: '2014', count: 45 },
  { year: '2015', count: 50 },
  { year: '2016', count: 55 },
  { year: '2017', count: 60 },
  { year: '2018', count: 65 },
  { year: '2019', count: 70 },
  { year: '2020', count: 75 },
  { year: '2021', count: 80 },
  { year: '2022', count: 85 },
  { year: '2023', count: 90 },
  { year: '2024', count: 95 },
  { year: '2025', count: 100 }
]

let chart: any = null
let g: any = null

function drawChart() {
  if (!chartDiv.value || !g) return

  const data = g.visualization.arrayToDataTable([
    ['Year', 'Projects'],
    ...projects.map(p => [p.year, p.count])
  ])

  const options = {
    title: '',
    legend: 'none',
    chartArea: { width: '80%', height: '70%' },
    colors: ['#f77c14'],
    hAxis: { textStyle: { fontSize: 10 } },
    vAxis: { minValue: 0, maxValue: 100 },
    animation: { startup: true, duration: 500, easing: 'out' },
    backgroundColor: 'transparent',
    bar: { groupWidth: '70%' },
  }

  if (!chart) {
    chart = new g.visualization.ColumnChart(chartDiv.value)
  }

  chart.draw(data, options)
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.gstatic.com/charts/loader.js'
  script.onload = () => {
    g = (window as any).google
    g.charts.load('current', { packages: ['corechart'] })
    g.charts.setOnLoadCallback(() => {
      drawChart()
      // Responsiv uchun resize listener
      window.addEventListener('resize', drawChart)
    })
  }
  document.head.appendChild(script)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', drawChart)
})
</script>

<template>
  <div ref="chartDiv" class="w-full h-[200px] md:h-[200px] lg:h-[200px]"></div>
</template>
