<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<style>
	h1 {
		color : red;
	}
	
	p {
		font-size : 1.2em;
		color : blue;
	}
</style>

<script>
	function gogo() {
		
		history.go(-1);
	}
</script>

</head>

<body>

	<h1>JSP : Java Sever Page</h1>
	클라이언트에서 페이지 요청시<br>
	데이터를 받아서 서버내에서 실행하는 서버프로그램이다.<br>
	
	<% 
		String scode = request.getParameter("code");
		String sname = request.getParameter("name");
		
		System.out.println("scode = " + scode);
		
		if(scode != null && scode.equals("1")) {
			out.print("<p>이름 : " + sname + "</p>");
		}
	%>
	<br><br>
	<a href="#" onclick="gogo()">뒤로</a>
	
</body>
</html>