<?php
header ("Content-Type:text/html"); 
$string = getcwd();
$string = str_replace("/memoryProblem/php","",$string);

$files = getDirectoryList($string."/data");
sort($files);


$html = "<select onchange='startSigma(this.value);'>";

foreach($files as $file){
	$html.="<option>$file</option>";
}
$html.="</select>";
echo $html;

function getDirectoryList ($directory)  {
    $results = array();
    array_push($results,"-");
    $handler = opendir($directory);
    while ($file = readdir($handler)) {
      if ($file != "." && $file != ".." && (strpos($file,'gexf~'))==false ) {
        $results[] = $file;
      }
    }
    closedir($handler);
    return $results;
}
?>

