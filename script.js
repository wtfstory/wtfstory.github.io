document.addEventListener('DOMContentLoaded', function () {
    const inputNumber = document.getElementById('inputNumber');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const result = document.getElementById('result');
    let currentValue = 0;
    let intervalId;

    function updateResultText() {
        result.textContent = `${currentValue.toFixed(2)} uSv/h`; // 显示数字和单位
    }

    function startRandomIncrement() {
        intervalId = setInterval(function () {
            const increment = 0.1 + Math.random() * 0.2; // 随机增加0.1到0.3之间的数
            currentValue += increment;
            updateResultText();
        }, 1000);
    }

    startButton.addEventListener('click', function () {
        const targetValue = parseFloat(inputNumber.value);
        if (!isNaN(targetValue)) {
            startButton.disabled = true;
            stopButton.disabled = false;
            inputNumber.disabled = true;
            currentValue = targetValue;
            updateResultText(); // 初始显示输入的数字和单位
            startRandomIncrement();
        } else {
            alert('请输入有效数字！');
        }
    });

    stopButton.addEventListener('click', function () {
        clearInterval(intervalId);
        startButton.disabled = false;
        stopButton.disabled = true;
        inputNumber.disabled = false;
    });
});
