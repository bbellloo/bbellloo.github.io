document.querySelectorAll('.lottery-item img').forEach(function(img) {
    img.addEventListener('click', function() {
        // 播放音效
        document.getElementById('clickSound').play();

        // 獲取自訂的獎項信息
        const selectedPrize = this.getAttribute('data-prize');

        // 隱藏圖片
        this.classList.add('hidden');

        // 彈出視窗顯示獎項
        const customMessage = '恭喜你！你中獎了！\n' + selectedPrize;
        showAlert(customMessage);
    });
});

function showAlert(message) {
    // 使用自訂的彈出視窗
    const alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.backgroundColor = 'white';
    alertBox.style.padding = '20px';
    alertBox.style.border = '2px solid black';
    alertBox.style.borderRadius = '10px';
    alertBox.style.zIndex = '1000';
    alertBox.innerText = message;

    const closeButton = document.createElement('button');
    closeButton.innerText = '關閉';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(alertBox);
    });

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
}
