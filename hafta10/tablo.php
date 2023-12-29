<!DOCTYPE HTML>
<html>  
<body>

 
  
 <form method="get" action="<?=$_SERVER["PHP_SELF"]?>">
 Sütun : <input type="text" name="sutun" value="<?=$sutun?>">
 Satır : <input type="text" name="satir" value="<?=$satir?>">
         <input type="submit" name="hesapla" value="Göster">
 </form>

 <?php
 $sutun = $_get['sutun'] ;
 $satir = $_get['satir'] ;
 ?>

 <?php
  
 echo "<table border=1>";
 for($i=0;$i<$satir;$i++)
 {
     echo "<tr>";
     for($j=0;$j<$sutun;$j++)
     {
         echo "<td>".(($i*$sutun) + $j +1)."</td>";
     } 
     echo "</tr>";
 }
 echo "</table>";
?>

</body>
</html>