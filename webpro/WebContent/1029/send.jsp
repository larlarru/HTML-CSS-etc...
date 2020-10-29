<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<style>
	table {
		border : 1px solid blue;
	}
	
	td {
		width : 150px;
		height : 40px;
		padding : 5px;
		text-align : center;
	}
	
	#cont {
		width : 250px;
	}
	
</style>

</head>
<body>

<h1>회원정보</h1>

<%
	request.setCharacterEncoding("UTF-8");
	
	// 이 안에서는 자바코드 기술 - 전송시 입력한 값들을 가져온다.
	String userId = request.getParameter("id"); 
	//request.getParameter("id")에서 
	//"id"는 form태그에서 가져온거 그래서 이거 일치하지 않으면 오류남
	
	String[] fr = request.getParameterValues("fruit"); 
	// 결과가 String 배열로 나옴
	
	String res="";
	for(int i =0; i<fr.length; i++) {
		res += fr[i] + "&nbsp;&nbsp;&nbsp;";
	}
	
	String gend = request.getParameter("gender");
	String userName = request.getParameter("name");
	
	String file = request.getParameter("file");
	
%>

<table border="1">
	<tr>
		<td>아이디 : </td>	
		<td id="cont"><%= userId %></td> 
		</tr>
		
		<tr>
			<td>이름</td>
			<td><%= userName %></td>
		</tr>
		
		<tr>
			<td>성별</td>
			<td><%= gend %></td>
		</tr>
		
		<tr>
			<td>좋아하는 과일</td>
			<td><%= res %></td>
		</tr>
		
		<tr>
			<td>파일</td>
			<td><%= file %></td>
		</tr>
		
</table>


</body>
</html>