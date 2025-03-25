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
    $name = $formData['name'] ?? 'Not provided';
    $email = $formData['email'] ?? 'Not provided';
    $phone = $formData['phone'] ?? 'Not provided';
    $company = $formData['company'] ?? 'Not provided';
    $companyWebsite = $formData['companyWebsite'] ?? 'Not provided';
    $briefDescription = $formData['briefDescription'] ?? 'Not provided';
    $service = $formData['service'] ?? 'logoDesign';
    
    // Extract logo data
    $logoData = $formData['logoData'] ?? [];
    
    // Company & Branding
    $companyName = $logoData['companyName'] ?? $company;
    $companyMeaning = $logoData['companyMeaning'] ?? 'Not provided';
    $slogan = $logoData['slogan'] ?? 'Not provided';
    $description = $logoData['description'] ?? $briefDescription;
    $competitors = $logoData['competitors'] ?? 'Not provided';
    $logousage = $logoData['logousage'] ?? 'Not provided';
    
    // Logo Preferences
    $objectsToInclude = $logoData['objectsToInclude'] ?? 'Not provided';
    $logosLikeReason = $logoData['logosLikeReason'] ?? 'Not provided';
    $logosDislikeReason = $logoData['logosDislikeReason'] ?? 'Not provided';
    $designStyle = $logoData['designStyle'] ?? 'Not provided';
    
    // Convert arrays to comma-separated strings
    $fontStyles = is_array($logoData['fontStyles']) ? implode(', ', $logoData['fontStyles']) : 'Not provided';
    $iconStyles = is_array($logoData['iconStyles']) ? implode(', ', $logoData['iconStyles']) : 'Not provided';
    $colors = is_array($logoData['colors']) ? implode(', ', $logoData['colors']) : 'Not provided';
    $customColors = is_array($logoData['customColors']) ? implode(', ', $logoData['customColors']) : 'Not provided';
    $fontPreferences = is_array($logoData['fontPreferences']) ? implode(', ', $logoData['fontPreferences']) : 'Not provided';
    
    // Final Preferences
    $logoFeel = $logoData['logoFeel'] ?? 'Not provided';
    $additionalComments = $logoData['additionalComments'] ?? 'Not provided';
    
    // Convert boolean values to Yes/No
    function boolToYesNo($value) {
        if ($value === 'true' || $value === true) {
            return 'Yes';
        } elseif ($value === 'false' || $value === false) {
            return 'No';
        }
        return $value;
    }
    
    // Handle file uploads
    $uploadedFiles = [];
    
    // Function to handle file uploads
    function handleFileUploads($files, $directory, $type) {
        global $uploadedFiles;
        
        if (!empty($files)) {
            $uploadPath = __DIR__ . '/uploads/' . $directory . '/';
            
            // Create directory if it doesn't exist
            if (!file_exists($uploadPath)) {
                mkdir($uploadPath, 0777, true);
            }
            
            foreach ($files as $file) {
                $fileName = basename($file['name']);
                $targetFile = $uploadPath . $fileName;
                
                if (move_uploaded_file($file['tmp_name'], $targetFile)) {
                    $uploadedFiles[] = [
                        'type' => $type,
                        'name' => $fileName,
                        'path' => $targetFile
                    ];
                }
            }
        }
    }
    
    // Process uploaded files
    if (isset($_FILES['objectImages'])) {
        handleFileUploads($_FILES['objectImages'], 'object_images', 'Reference Images');
    }
    
    if (isset($_FILES['logosLike'])) {
        handleFileUploads($_FILES['logosLike'], 'logos_like', 'Logos Liked');
    }
    
    if (isset($_FILES['logosDislike'])) {
        handleFileUploads($_FILES['logosDislike'], 'logos_dislike', 'Logos Disliked');
    }
    
    // Set the email parameters
    $to = 'briefs@techcraftinc.com'; // Replace with your email address
    $subject = "New Logo Design Brief from $name";
    
    // Create email body
    $body = "
    <html>
    <head>
        <title>New Logo Design Brief</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .section { margin-bottom: 20px; }
            h2 { color: #332D67; }
            .label { font-weight: bold; }
            .color-sample { display: inline-block; width: 15px; height: 15px; margin-right: 5px; border: 1px solid #ccc; vertical-align: middle; }
        </style>
    </head>
    <body>
        <h1>New Logo Design Brief Submission</h1>
        
        <div class='section'>
            <h2>Personal Details</h2>
            <p><span class='label'>Name:</span> $name</p>
            <p><span class='label'>Email:</span> $email</p>
            <p><span class='label'>Phone:</span> $phone</p>
            <p><span class='label'>Company:</span> $company</p>
            <p><span class='label'>Company Website:</span> $companyWebsite</p>
        </div>
        
        <div class='section'>
            <h2>Company & Branding</h2>
            <p><span class='label'>Company Name:</span> $companyName</p>
            <p><span class='label'>Company Name Meaning:</span> $companyMeaning</p>
            <p><span class='label'>Slogan/Motto:</span> $slogan</p>
            <p><span class='label'>Company Description:</span> $description</p>
            <p><span class='label'>Competitors:</span> $competitors</p>
            <p><span class='label'>Logo Usage:</span> $logousage</p>
        </div>
        
        <div class='section'>
            <h2>Logo Preferences</h2>
            <p><span class='label'>Objects to Include:</span> $objectsToInclude</p>
            <p><span class='label'>Logos Like Reason:</span> $logosLikeReason</p>
            <p><span class='label'>Logos Dislike Reason:</span> $logosDislikeReason</p>
            <p><span class='label'>Design Style:</span> $designStyle</p>
            <p><span class='label'>Font Styles:</span> $fontStyles</p>
            <p><span class='label'>Icon Styles:</span> $iconStyles</p>
        </div>
        
        <div class='section'>
            <h2>Colors & Fonts</h2>";
            
    // Add color samples to the email
    if (is_array($logoData['colors']) && !empty($logoData['colors'])) {
        $body .= "<p><span class='label'>Colors:</span> ";
        foreach ($logoData['colors'] as $color) {
            $colorHex = '';
            switch ($color) {
                case 'blue': $colorHex = '#3B82F6'; break;
                case 'green': $colorHex = '#10B981'; break;
                case 'red': $colorHex = '#EF4444'; break;
                case 'orange': $colorHex = '#F97316'; break;
                case 'purple': $colorHex = '#8B5CF6'; break;
                case 'yellow': $colorHex = '#FBBF24'; break;
                case 'pink': $colorHex = '#EC4899'; break;
                case 'teal': $colorHex = '#14B8A6'; break;
                case 'black': $colorHex = '#000000'; break;
                case 'white': $colorHex = '#FFFFFF'; break;
                case 'gray': $colorHex = '#6B7280'; break;
            }
            if ($colorHex) {
                $body .= "<span class='color-sample' style='background-color: $colorHex;'></span>";
            }
            $body .= ucfirst($color) . ", ";
        }
        $body = rtrim($body, ", ") . "</p>";
    } else {
        $body .= "<p><span class='label'>Colors:</span> Not provided</p>";
    }
    
    // Add custom colors
    if (is_array($logoData['customColors']) && !empty($logoData['customColors'])) {
        $body .= "<p><span class='label'>Custom Colors:</span> ";
        foreach ($logoData['customColors'] as $color) {
            $body .= "<span class='color-sample' style='background-color: $color;'></span> $color, ";
        }
        $body = rtrim($body, ", ") . "</p>";
    } else {
        $body .= "<p><span class='label'>Custom Colors:</span> None</p>";
    }
    
    $body .= "<p><span class='label'>Font Preferences:</span> $fontPreferences</p>
        </div>
        
        <div class='section'>
            <h2>Final Preferences</h2>
           
            <p><span class='label'>Additional Comments:</span> $additionalComments</p>
        </div>";
    
    // Add uploaded files information if any
    if (!empty($uploadedFiles)) {
        $body .= "
        <div class='section'>
            <h2>Uploaded Files</h2>
            <ul>";
        
        foreach ($uploadedFiles as $file) {
            $body .= "<li><span class='label'>{$file['type']}:</span> {$file['name']}</li>";
        }
        
        $body .= "
            </ul>
        </div>";
    }
    
    $body .= "
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

