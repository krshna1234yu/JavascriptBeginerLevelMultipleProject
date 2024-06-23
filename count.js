document.addEventListener('DOMContentLoaded', () => {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    const daysInput = document.getElementById('days-input');
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');
    const startTimerBtn = document.getElementById('start-timer');
    const stopAlarmBtn = document.getElementById('stop-alarm');
    
    const alarmSound = document.getElementById('alarm-sound');
    
    let countdownDate = new Date();
    let countdownTime = 0;
    let countdownInterval = null;
    let alarmTimeout = null;
    let alarmPlaying = false;
    
    startTimerBtn.addEventListener('click', () => {
        const days = parseInt(daysInput.value);
        const hours = parseInt(hoursInput.value);
        const minutes = parseInt(minutesInput.value);
        const seconds = parseInt(secondsInput.value);
        
        countdownTime = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
        
        if (countdownTime > 0) {
            startCountdown();
        }
    });
    
    stopAlarmBtn.addEventListener('click', () => {
        stopAlarm();
    });
    
    function startCountdown() {
        const now = new Date().getTime();
        countdownDate = new Date(now + countdownTime * 1000);
        
        countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            if (distance <= 0) {
                clearInterval(countdownInterval);
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
                playAlarm();
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        }, 1000);
        
        updateCountdown(); // Update immediately on start
    }
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance <= 0) {
            clearInterval(countdownInterval);
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            playAlarm();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }
    
    function playAlarm() {
        if (!alarmPlaying) {
            alarmPlaying = true;
            alarmSound.currentTime = 0;
            alarmSound.loop = true; // Set alarm to loop
            alarmSound.play();
            
            // Show stop alarm button
            stopAlarmBtn.style.display = 'inline-block';
        }
    }
    
    function stopAlarm() {
        if (alarmPlaying) {
            alarmPlaying = false;
            alarmSound.pause();
            alarmSound.currentTime = 0;
            alarmSound.loop = false; // Stop alarm loop
            stopAlarmBtn.style.display = 'none';
        }
    }
});
