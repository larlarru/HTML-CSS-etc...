<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");

	String userName = request.getParameter("name");
	
	String email = request.getParameter("email");
	
	String content = request.getParameter("area");
	
	content = content.replaceAll("\r\n", "<br>");


%>

이름 : <%= userName %><br>
이메일 : <%= email %><br>
내용 : <br>
<%= content %> <!-- content 단점이 엔터쳐서 입력한 내용도 엔터 적용 안되고 한줄로 나온다. -->
<br>

</body>
</html>