<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // Validate the CAPTCHA
    $captchaSecret = '6Ldilt4qAAAAAHjT5as7-20k5-rBdJU87Z-q5Wet'; // Replace with your actual secret key
    $captchaResponse = $_POST['captcha'];
    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($captchaSecret) . '&response=' . urlencode($captchaResponse);
    $verifyResponse = file_get_contents($verifyUrl);
    $responseData = json_decode($verifyResponse);

    if ($responseData->success) {
        // CAPTCHA is valid

        // Set the email parameters
        $to = 'signups@techcraftinc.com'; // Replace with your email address
        $subject = 'New Contact Footer Form Submission: ' . $service;
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Phone: $phone\n";
        $body .= "Service: $service\n";
        $body .= "Message:\n$message";
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            // Email sent successfully
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'Thank you for your message. We will be in touch soon.']);
        } else {
            // Error sending email
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Oops! Something went wrong and we couldn\'t send your message.']);
        }
    } else {
        // CAPTCHA is invalid
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Please complete the CAPTCHA verification.']);
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>