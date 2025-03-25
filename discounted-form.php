<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $service = isset($_POST['service']) ? $_POST['service'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : $service; // Use service as message if not provided

    // Set the email parameters
    $to = 'signups@techcraftinc.com'; // Replace with your email address
    $subject = 'New Discounted Service Request: ' . $service;
    
    // Create email body
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nService Requested: $service\nMessage: $message";
        
    // Set headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Thank you for your interest! We will contact you shortly.']);
    } else {
        // Error sending email
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Oops! Something went wrong and we couldn\'t send your message.']);
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>