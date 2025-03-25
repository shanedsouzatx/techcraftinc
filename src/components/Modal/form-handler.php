<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "";
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : "";
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "";
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : "";
    $domain = isset($_POST['domain']) ? htmlspecialchars($_POST['domain']) : "";
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : "New Form Submission";

    // Email details
    $to = "your-email@example.com"; // Change this to your email
    $headers = "From: noreply@$domain\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email body
    $body = "New form submission from $domain:\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Your request has been submitted successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send your request. Please try again."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>
