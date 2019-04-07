window.addEventListener('load', function () {
    function reportPerformance () {
        var performance = window.performance || window.webkitPerformance
        if (performance) {
            var timeElement = document.getElementById('time')
            var memoryElement = document.getElementById('memory')

            if (timeElement && performance.timing) {
                var timing = performance.timing
                var timeUsed = Date.now() - timing.navigationStart
                if (timeUsed > 0) {
                    timeElement.textContent = 'Time used: ' + timeUsed + ' ms.'
                }
            }

            if (memoryElement && performance.memory && performance.memory.usedJSHeapSize) {
                var memoryUsed = parseInt(performance.memory.usedJSHeapSize / (1024 * 1024))
                memoryElement.textContent = 'Memory used: ' + memoryUsed + ' MB.'
            }
        }
    }

    setTimeout(function () {
        reportPerformance()
    }, 0)
})
