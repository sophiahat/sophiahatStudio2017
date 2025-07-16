<?php 
// ------------- CONFIGURABLE SECTION ------------------------

$mailto = 'info@sophiahatstudio.com' ;
$subject = "sophiahat free Mix Critique Submission" ;
$formurl = "https://sophiahatstudio.com/#!/free-critique" ;
$thankyouurl = "https://sophiahatstudio.com/#!/thanks" ;
$errorurl = "https://sophiahatstudio.com/#!/error" ;
$want_tel_field = 1;
$want_addr_field = 0;

$email_is_required = 1;
$name_is_required = 1;
$notes_is_required = 0;
$uself = 0;
$use_envsender = 0;
$use_sendmailfrom = 0;
$smtp_server_win = '' ;
$use_webmaster_email_for_from = 0;
$my_recaptcha_private_key = '' ;

$allowedTypes = ['audio/wav', 'audio/x-wav', 'audio/mp3', 'audio/mpeg'];
$maxFileSize = 75 * 1024 * 1024;

// -------------------- END OF CONFIGURABLE SECTION ---------------

define( 'MAX_LINE_LENGTH', 998 );
define( 'CONTENT_TYPE', 'Content-Type: text/plain; charset="utf-8"' );
$linesep = $uself ? "\n" : "\r\n" ;
if ($use_sendmailfrom) {
	ini_set( 'sendmail_from', $mailto );
}
if (strlen($smtp_server_win)) {
	ini_set( 'SMTP', $smtp_server_win );
}
$envsender = "-f$mailto" ;
$fullname = trim($_POST['fullname']) ;
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$emailSafe = preg_replace('/[^a-zA-Z0-9_\-]/', '_', $email);
$phone = trim($_POST['phone']) ;
$title = trim($_POST['title']) ;
$link = trim($_POST['link']) ;
$style = trim($_POST['style']) ;
$genre = trim($_POST['genre']) ;
$reference = trim($_POST['reference']) ;
$notes = $uself ? preg_replace( '/\r\n/', "\n", $_POST['notes'] ) : $_POST['notes'] ;
$http_referrer = getenv( "HTTP_REFERER" );

if (!isset($_POST['email'])) {
	header( "Location: $formurl" );
	exit ;
}
if (($email_is_required && (empty($email) || (substr_count($email,'@') != 1))) || (strlen($email) > 254) || preg_match("/[\s<>,;'\"]/", $email) ||
	($name_is_required && empty($fullname)) || (strlen($fullname) > 729) || preg_match("/[\r\n@<>,;'\"]/", $fullname) ||
	($notes_is_required && empty($notes))) {
	header( "Location: $errorurl" );
	exit ;
}
/*
if (strlen( $my_recaptcha_private_key )) {
	$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify?' .
							'secret=' . urlencode($my_recaptcha_private_key) . '&' .
							'remoteip=' . urlencode($_SERVER['REMOTE_ADDR']) . '&' .
							'response=' . urlencode($_POST['g-recaptcha-response']) ;
	$recaptcha_reply = file_get_contents( $recaptcha_url );
	$recaptcha_decoded = json_decode ( $recaptcha_reply, TRUE );
	if ($recaptcha_decoded == NULL || (trim($recaptcha_decoded['success']) != TRUE)) {
		header( "Location: $errorurl" );
		exit ;
	}
}
*/
if (empty($email)) {
	$email = $mailto ;
}
$fromemail = $use_webmaster_email_for_from ? $mailto : $email ;
if (function_exists( 'get_magic_quotes_gpc' ) && get_magic_quotes_gpc()) {
	$notes = stripslashes( $notes );
}

$baseDir = dirname(__DIR__, 2) . '/uploads/';
$uploadDir = $baseDir . $emailSafe . '/';


if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$fileTmp  = $_FILES['upload']['tmp_name'];
$fileName = basename($_FILES['upload']['name']);
$targetFile = $uploadDir . time() . '_' . $fileName; // Add timestamp to avoid overwrites

if (move_uploaded_file($fileTmp, $targetFile)) {
    echo "✅ File uploaded successfully to: $targetFile";
} else {
    echo "❌ Failed to move uploaded file.";
}

$opt_flds = $want_addr_field ? "Address: " . $_POST['addr'] . $linesep : '' ;
$opt_flds .= $want_tel_field ? "Telephone: " . $_POST['phone'] . $linesep : '' ;
$messageproper =
	"This message was sent from:" . $linesep .
	$http_referrer . $linesep .
	"------------------------------------------------------------" . $linesep .
	"Name of sender: $fullname" . $linesep .
	"Email of sender: $email" . $linesep .
	"Song Title: $title" . $linesep .
	"Song Link: $link" . $linesep .
	"Mix Style: $style" . $linesep .
	"Genre Description: $genre" . $linesep .
	"Reference Link: $reference" . $linesep .
	$opt_flds .
	"------------------------- notes -------------------------" . $linesep . $linesep .
	$notes . $linesep . $linesep .
	"------------------------------------------------------------" . $linesep ;
$messageproper = wordwrap( $messageproper, MAX_LINE_LENGTH, $linesep, true ) ;

$headers =
	"From: \"$fullname\" <$fromemail>" . $linesep . "Reply-To: \"$fullname\" <$email>" . $linesep . "X-Mailer: chfeedback.php 2.20.1" .
	$linesep . 'MIME-Version: 1.0' . $linesep . CONTENT_TYPE ;

if ($use_envsender && !ini_get('safe_mode')) {
	mail($mailto, $subject, $messageproper, $headers, $envsender );
}
else {
	mail($mailto, $subject, $messageproper, $headers );
}
header( "Location: $thankyouurl" );
exit ;

?>





