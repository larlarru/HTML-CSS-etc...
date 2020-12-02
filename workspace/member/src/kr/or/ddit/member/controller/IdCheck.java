package kr.or.ddit.member.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.service.IMemberService;
import kr.or.ddit.member.service.MemberServiceImpl;

/**
 * Servlet implementation class IdCheck
 */
@WebServlet("/IdCheck")
public class IdCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public IdCheck() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//0. 클라이언트 전송시 데이타 받는다 - 입력한 id
		String inputId = request.getParameter("id");
		
		//1. service객체 얻기 
		IMemberService  service = MemberServiceImpl.getService();
		
		//2 service메소드 호출 - 결과값 얻기 
		String resId = service.selectById(inputId);
		
		//3. 결과값 request에 저장
		request.setAttribute("resId", resId);
			
		//4. jsp로 forward
		request.getRequestDispatcher("member/idCheck.jsp").forward(request, response);
		
	}

}
