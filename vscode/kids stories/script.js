function submitBooking() {
    // Get values from the form
    const fromLocation = document.getElementById('from').value;
    const toLocation = document.getElementById('to').value;
    const bookingDate = document.getElementById('date').value;

    // Get number of passengers for each category
    const childrenCount = document.getElementById('children').value;
    const adultsCount = document.getElementById('adults').value;
    const womenCount = document.getElementById('women').value;
    const menCount = document.getElementById('men').value;

    // Validate that all fields are filled
    if (!fromLocation || !toLocation || !bookingDate || !childrenCount || !adultsCount || !womenCount || !menCount) {
        alert("Please fill in all the details!");
        return;
    }

    // Create the message to send on WhatsApp
    const message = `*Booking Details:*\n
    *From:* ${fromLocation}\n
    *To:* ${toLocation}\n
    *Booking Date:* ${bookingDate}\n
    *Children:* ${childrenCount}\n
    *Adults:* ${adultsCount}\n
    *Women:* ${womenCount}\n
    *Men:* ${menCount}`;

    // WhatsApp link with prefilled message
    const whatsappLink = `https://wa.me/919916201862?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the booking details in chat
    window.open(whatsappLink, '_blank');
}
