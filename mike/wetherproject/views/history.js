function goToBookingHistory() {
    const email = document.getElementById('email-input').value;
    window.location.href = '/booking_history/' + email;
}
