package kr.or.ddit.member.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.service.IMemberService;
import kr.or.ddit.member.service.MemberServiceImpl;
import kr.or.ddit.member.vo.MemberVO;
import kr.or.ddit.member.vo.ZipVO;

/**
 * Servlet implementation class DongCheck
 */
@WebServlet("/DongCheck")
public class DongCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DongCheck() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//post로 전송시 한글 인코딩
		request.setCharacterEncoding("UTF-8");
		
		//0. 클라이언트 전송시 데이타 받는다 - 입력한 dong이름 
		String inputDong = request.getParameter("dong");
		
		//1. service객체 얻기 
		IMemberService  service = MemberServiceImpl.getService();
		
		//2 service메소드 호출 - 결과값 얻기 
		List<ZipVO> list = service.selectByDong(inputDong);
		
		//3. 결과값 request에 저장
		request.setAttribute("listvalue", list);
			
		//4. jsp로 forward
		request.getRequestDispatcher("member/dongResult.jsp").forward(request, response);
		
	}

}
