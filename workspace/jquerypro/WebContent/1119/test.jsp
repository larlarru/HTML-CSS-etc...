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
	
	span {
		font-size: 1.5em;
		color : green;
	}
	
	p {
		color : blue;
		font-size: 2.0em;
	}
</style>

</head>
<body>

	<h1>JSP : Java Server Page</h1>
	
	<%
		request.setCharacterEncoding("UTF-8");
		String userName = request.getParameter("name"); 
		String userPass = request.getParameter("pass"); 
	%>
	
	<span>안녕하세요. <%= userName %>님</span>
	<p>환영합니다.</p>
	<p>즐거운 하루 되세요~</p>

</body>
</html>