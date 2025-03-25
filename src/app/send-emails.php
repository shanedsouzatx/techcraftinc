<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

header('Access-Control-Allow-Origin: https://www.techcraftinc.com');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $jsonData = file_get_contents('php://input');
    $formData = json_decode($jsonData, true);

    // Email configuration
    $to = "briefs@techcraftinc.com"; // Your recipient email
    $subject = "New Project Brief Submission";
    
    // Set sender email if available
    $senderEmail = isset($formData['projectDetails']['email']) ? $formData['projectDetails']['email'] : "briefs@techcraftinc.com";
    $headers = "From: " . $senderEmail . "\r\n";
    $headers .= "Reply-To: " . $senderEmail . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Build email content
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            h1, h2 { color: #332D67; }
            ul { list-style-type: none; padding-left: 0; }
            li { margin: 5px 0; }
            strong { color: #9A4770; }
        </style>
    </head>
    <body>
        <h1>New Project Brief Submission</h1>
        
        <h2>Contact Information</h2>
        <ul>
            <li><strong>Contact Name:</strong> " . ($formData['projectDetails']['projectName'] ?? 'New Project') . "</li>
            <li><strong>Company:</strong> " . ($formData['projectDetails']['company'] ?? 'Unknown Company') . "</li>
            <li><strong>Email:</strong> " . ($formData['projectDetails']['email'] ?? 'N/A') . "</li>
            <li><strong>Phone:</strong> " . ($formData['projectDetails']['phone'] ?? 'N/A') . "</li>
        </ul>

        <h2>Step 2: Design & Features</h2>
        <ul>
            <li><strong>Design Style:</strong> " . ($formData['designAndFeatures']['designStyle'] ?? 'N/A') . "</li>
            <li><strong>Custom Design Style:</strong> " . ($formData['designAndFeatures']['customDesignStyle'] ?? 'N/A') . "</li>
            <li><strong>Has Existing Branding:</strong> " . ($formData['designAndFeatures']['hasExistingBranding'] ?? 'N/A') . "</li>
            <li><strong>Branding Files:</strong> " . ($formData['designAndFeatures']['brandingFiles'] ?? 'N/A') . "</li>
            <li><strong>Reference Websites:</strong> " . ($formData['designAndFeatures']['referenceWebsites'] ?? 'N/A') . "</li>
            <li><strong>Website Values:</strong> " . ($formData['designAndFeatures']['websiteValues'] ?? 'N/A') . "</li>
            <li><strong>Number of Pages:</strong> " . ($formData['designAndFeatures']['numberOfPages'] ?? 'N/A') . "</li>
            <li><strong>Key Features:</strong> " . (is_array($formData['designAndFeatures']['keyFeatures']) ? implode(', ', $formData['designAndFeatures']['keyFeatures']) : 'N/A') . "</li>
            <li><strong>Custom Feature:</strong> " . ($formData['designAndFeatures']['customFeature'] ?? 'N/A') . "</li>
            <li><strong>Requires Integrations:</strong> " . ($formData['designAndFeatures']['requiresIntegrations'] ?? 'N/A') . "</li>
            <li><strong>Integration Details:</strong> " . ($formData['designAndFeatures']['integrationDetails'] ?? 'N/A') . "</li>
            <li><strong>Is Ecommerce:</strong> " . ($formData['designAndFeatures']['isEcommerce'] ?? 'N/A') . "</li>
            <li><strong>Ecommerce Details:</strong> " . ($formData['designAndFeatures']['ecommerceDetails'] ?? 'N/A') . "</li>
            <li><strong>Needs SSL:</strong> " . ($formData['designAndFeatures']['needsSSL'] ?? 'N/A') . "</li>
        </ul>

        <h2>Step 3: Content & SEO</h2>
        <ul>
            <li><strong>Content Provider:</strong> " . ($formData['contentAndSEO']['contentProvider'] ?? 'N/A') . "</li>
            <li><strong>SEO Keywords:</strong> " . ($formData['contentAndSEO']['seoKeywords'] ?? 'N/A') . "</li>
            <li><strong>Needs Analytics:</strong> " . ($formData['contentAndSEO']['needsAnalytics'] ?? 'N/A') . "</li>
            <li><strong>Analytics Details:</strong> " . ($formData['contentAndSEO']['analyticsDetails'] ?? 'N/A') . "</li>
            <li><strong>Image Source:</strong> " . ($formData['contentAndSEO']['imageSource'] ?? 'N/A') . "</li>
            <li><strong>Additional Notes:</strong> " . ($formData['contentAndSEO']['additionalNotes'] ?? 'N/A') . "</li>
        </ul>
    </body>
    </html>";

    // Send email
    if(mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>