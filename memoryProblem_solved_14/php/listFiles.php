<?php
header ("Content-Type:text/html"); 
$string = getcwd();
$string = str_replace("/memoryProblem_solved_14/php","",$string);


$files = getDirectoryList($string."/data");
sort($files);


$scriptname=end(explode('/',$_SERVER['PHP_SELF']));
$scriptpath=str_replace($scriptname,'',$_SERVER['PHP_SELF']);
$scriptpath=str_replace('php/','',$scriptpath);
$html = "<select style='width:150px;' onchange='
                window.location=\"http://$_SERVER[SERVER_NAME]$scriptpath\"+\"?file=\"+this.value;
        '>";
$html.="<option selected>[Select your Graph]</option>";
$filesSorted=array();
foreach($files as $file){
	array_push($filesSorted,$file);
}
sort($filesSorted);
foreach($filesSorted as $file){
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

