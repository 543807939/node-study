
    window.addEventListener('load', function () {
        let hours = document.querySelector('#HH')
        let minutes = document.querySelector('#MM')
        let second = document.querySelector('#SS')
        setInterval(() => {
            let time = new Date()
            hours.innerHTML = addZero(time.getHours())
            minutes.innerHTML = addZero(time.getMinutes())
            second.innerHTML = addZero(time.getSeconds())
        }, 1000);

        function addZero(num) {
            return num > 9 ? num : '0' + num
        }
    })
