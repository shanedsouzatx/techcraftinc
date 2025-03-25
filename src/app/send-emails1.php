<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
error_log("Request received at " . date('Y-m-d H:i:s'));

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Access-Control-Allow-Origin: https://www.techcraftinc.com');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $jsonData = file_get_contents('php://input');
    $formData = json_decode($jsonData, true);

    // Email configuration
    $to = "signups@techcraftinc.com"; // Change to your actual email
    $subject = "New Contact Form Submission";
    
    // Set sender email
    $senderEmail = isset($formData['email']) ? $formData['email'] : "signups@techcraftinc.com";
    
    // Build email content
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            h1 { color: #5114AE; }
            ul { list-style-type: none; padding-left: 0; }
            li { margin: 5px 0; }
            strong { color: #5114AE; }
        </style>
    </head>
    <body>
        <h1>New Contact Form Submission</h1>
        <ul>
            <li><strong>Name:</strong> " . ($formData['name'] ?? 'N/A') . "</li>
            <li><strong>Email:</strong> " . ($formData['email'] ?? 'N/A') . "</li>
            <li><strong>Phone:</strong> " . ($formData['phone'] ?? 'N/A') . "</li>
            <li><strong>Interested Service:</strong> " . ($formData['service'] ?? 'N/A') . "</li>
            <li><strong>Message:</strong><br>" . nl2br($formData['message'] ?? 'N/A') . "</li>
        </ul>
    </body>
    </html>";

    // Set up PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'signups@techcraftinc.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'signups@techcraftinc.com'; // SMTP username
        $mail->Password = 'Signup@techcraft '; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($senderEmail, $formData['name'] ?? 'Contact Form');
        $mail->addAddress($to);
        $mail->addReplyTo($senderEmail);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send email
        $mail->send();
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>