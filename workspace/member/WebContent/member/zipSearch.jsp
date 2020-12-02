<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="../js/jquery-3.5.1.min.js"></script>

<script>
 $(function(){
	 $('#dongbtn').on('click', function(){
		dongvalue =  $('#dong').val().trim();
		
		if(dongvalue.length < 1){
			alert("동입력");
			return false;
		}
		
		$.ajax({
			url : "<%= request.getContextPath() %>/DongCheck",
			type : 'post',
			data : {"dong" : dongvalue },
			success : function(res){
				code = "<table>";
				code += "<tr><td>우편번호</td>";
				code += "<td>주소</td>";
				code += "<td>번지</td></tr>";
				
				$.each(res, function(i,v){
					code += "<tr class='ziptr'><td>" + v.zipcode + "</td>";
					code += "<td>" + v.addr + "</td>";
					code += "<td>" + v.bunji + "</td></tr>";
				})
				code += "</table>";
				$('#result').html(code);
			},
			error : function(xhr){
				alert("상태 : " + xhr.status);
			},
			dataType : 'json'
		})
		
	 })
	 
	 
	 // 선택
	 // $(document).on('click', '.ziptr', function() {
	 $('#result').on('click', '.ziptr', function() {
		 
		 // $('div , p')
		 zip = $('td:eq(0)', this).text();
		 add1 = $('td:eq(1)', this).text();
		 
		 $('#zip', opener.document).val(zip);
		 $('#add1', opener.document).val(add1);
		 
		 window.close();
		 
	 })
	 
	 
	 
	 
	 
 })
 
</script>

<style>
	.ziptr:hover {
		background : crimson;
	}
</style>

</head>
<body>
<div class="box">
  <form>
    <h2>우편번호 검색 </h2>
        찾고자 하는 동을 입력하세요 <br>
     <input type="text" id="dong">
     <input type="button" value="검색" id="dongbtn"><br><br>
     <div id="result"></div>
     
  </form>
</div>
</body>
</html>