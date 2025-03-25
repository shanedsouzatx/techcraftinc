<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $formDataJson = $_POST['formData'];
    $formData = json_decode($formDataJson, true);
    
    if (!$formData) {
        echo json_encode(['error' => 'Invalid form data']);
        exit;
    }
    
    // Extract personal details
    $personalDetails = $formData['personalDetails'];
    $name = $personalDetails['name'] ?? 'Not provided';
    $email = $personalDetails['email'] ?? 'Not provided';
    $phone = $personalDetails['phone'] ?? 'Not provided';
    $company = $personalDetails['company'] ?? 'Not provided';
    $companyWebsite = $personalDetails['companyWebsite'] ?? 'Not provided';
    $briefDescription = $personalDetails['briefDescription'] ?? 'Not provided';
    
    // Extract design and features
    $designAndFeatures = $formData['designAndFeatures'];
    $designStyle = $designAndFeatures['designStyle'] ?? 'Not provided';
    
    // Convert boolean strings to Yes/No for all fields
    $hasExistingBrandingValue = $designAndFeatures['hasExistingBranding'] ?? 'Not provided';
    $hasExistingBranding = $hasExistingBrandingValue === 'true' ? 'Yes' : ($hasExistingBrandingValue === 'false' ? 'No' : 'Not provided');
    
    $referenceWebsites = $designAndFeatures['referenceWebsites'] ?? 'Not provided';
    $websiteValues = $designAndFeatures['websiteValues'] ?? 'Not provided';
    $numberOfPages = $designAndFeatures['numberOfPages'] ?? 'Not provided';
    $keyFeatures = is_array($designAndFeatures['keyFeatures']) ? implode(', ', $designAndFeatures['keyFeatures']) : 'Not provided';
    
    $requiresIntegrationsValue = $designAndFeatures['requiresIntegrations'] ?? 'Not provided';
    $requiresIntegrations = $requiresIntegrationsValue === 'true' ? 'Yes' : ($requiresIntegrationsValue === 'false' ? 'No' : 'Not provided');
    
    $integrationDetails = $designAndFeatures['integrationDetails'] ?? 'Not provided';
    
    $isEcommerceValue = $designAndFeatures['isEcommerce'] ?? 'Not provided';
    $isEcommerce = $isEcommerceValue === 'true' ? 'Yes' : ($isEcommerceValue === 'false' ? 'No' : 'Not provided');
    
    $ecommerceDetails = $designAndFeatures['ecommerceDetails'] ?? 'Not provided';
    
    // Extract content and SEO
    $contentAndSEO = $formData['contentAndSEO'];
    $contentProvider = $contentAndSEO['contentProvider'] ?? 'Not provided';
    
    // Convert boolean strings to Yes/No
    $needsAnalyticsValue = $contentAndSEO['needsAnalytics'] ?? 'Not provided';
    $needsAnalytics = $needsAnalyticsValue === 'true' ? 'Yes' : ($needsAnalyticsValue === 'false' ? 'No' : 'Not provided');
    
    $needsDomainValue = $contentAndSEO['needsDomain'] ?? 'Not provided';
    $needsDomain = $needsDomainValue === 'true' ? 'Yes' : ($needsDomainValue === 'false' ? 'No' : 'Not provided');
    
    $analyticsDetails = $contentAndSEO['analyticsDetails'] ?? 'Not provided';
    $imageSource = $contentAndSEO['imageSource'] ?? 'Not provided';
    $additionalNotes = $contentAndSEO['additionalNotes'] ?? 'Not provided';
    
    // Set the email parameters
    $to = 'briefs@techcraftinc.com'; // Replace with your email address
    $subject = "New Project Brief from $name";
    
    // Create email body
    $body = "
    <html>
    <head>
        <title>New Website Development Brief Submission</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .section { margin-bottom: 20px; }
            h2 { color: #332D67; }
            .label { font-weight: bold; }
        </style>
    </head>
    <body>
        <h1>New Project Brief Submission</h1>
        
        <div class='section'>
            <h2>Personal Details</h2>
            <p><span class='label'>Name:</span> $name</p>
            <p><span class='label'>Email:</span> $email</p>
            <p><span class='label'>Phone:</span> $phone</p>
            <p><span class='label'>Company:</span> $company</p>
            <p><span class='label'>Company Website:</span> $companyWebsite</p>
            <p><span class='label'>Company Description:</span> $briefDescription</p>
        </div>
        
        <div class='section'>
            <h2>Design & Features</h2>
            <p><span class='label'>Design Style:</span> $designStyle</p>
            <p><span class='label'>Has Existing Branding:</span> $hasExistingBranding</p>
            <p><span class='label'>Reference Websites:</span> $referenceWebsites</p>
            <p><span class='label'>Website Values:</span> $websiteValues</p>
            <p><span class='label'>Number of Pages:</span> $numberOfPages</p>
            <p><span class='label'>Key Features:</span> $keyFeatures</p>
            <p><span class='label'>Requires Integrations:</span> $requiresIntegrations</p>
            <p><span class='label'>Integration Details:</span> $integrationDetails</p>
            <p><span class='label'>Is Ecommerce:</span> $isEcommerce</p>
            <p><span class='label'>Ecommerce Details:</span> $ecommerceDetails</p>
        </div>
        
        <div class='section'>
            <h2>Content & SEO</h2>
            <p><span class='label'>Content Provider:</span> $contentProvider</p>
            <p><span class='label'>Would you like SEO tools integrated?:</span> $needsAnalytics</p>
            <p><span class='label'>SEO Keywords:</span> $analyticsDetails</p>
            <p><span class='label'>Do you want us to Host and Maintain your website?:</span> $needsDomain</p>
            <p><span class='label'>Image Source:</span> $imageSource</p>
            <p><span class='label'>Additional Notes:</span> $additionalNotes</p>
        </div>
    </body>
    </html>
    ";
    
    // Set email headers for HTML content
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $name <$email>" . "\r\n";
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo json_encode(['success' => true, 'message' => 'Thank you for your submission. We will be in touch soon.']);
    } else {
        // Error sending email
        echo json_encode(['error' => 'Failed to send email. Please try again.']);
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Invalid request method.']);
}
?>

