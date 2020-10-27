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
	/* String이라서 int로 바꿔줘야한다. */
	int pr = Integer.parseInt(request.getParameter("price"));
	int su = Integer.parseInt(request.getParameter("qty"));
	
	int res = pr * su;
	
%>

수량 : <%= su %> <br>
가격 : <%= pr %> <br>
금액 : <%= res %> <br>


</body>
</html>