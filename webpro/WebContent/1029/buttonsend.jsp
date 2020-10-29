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
	
	String content = request.getParameter("area");
	
	// 입력시 엔터(\r\n)를 출력을 위해서 <br>태그로 변환 한다.
	// \r는 케리지엔터라고 커서가 앞으로 왔다가 밑으로 내려간다.
	content = content.replaceAll("\r\n", "<br>");
	//content = content.replaceAll("\r", "").replaceAll("\n", "<br>");
	
	
	String sel[] = request.getParameterValues("fruit");
	
	String res = "";
	for(int i=0; i < sel.length; i++) {
		res += sel[i] + ", ";
	}
	
	int idx = res.lastIndexOf(","); //마지막 , 찾아옴
	res = res.substring(0, idx); //자동으로 idx에서 -1해서 마지막 콤마뺌
	
%>

이름 : <%= userName %><br>
내용 : <br>
<%= content %> <!-- content 단점이 엔터쳐서 입력한 내용도 엔터 적용 안되고 한줄로 나온다. -->
<br>

좋아하는 과일 : <%= res %>


</body>
</html>