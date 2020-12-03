package kr.or.ddit.board.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.BoardVO;

/**
 * Servlet implementation class BoardList
 */
@WebServlet("/List.do")
public class BoardList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BoardList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 전체 리스트 가져오기
		
		// 0.
		
		// 1. service 객체
		IBoardService service = BoardServiceImpl.getService();
		
		// 2. 메서드 호출
		List<BoardVO> list = service.listAll();
		
		// 3. 결과값 저장
		request.setAttribute("list", list);
		
		// 4.
		request.getRequestDispatcher("board/listAll.jsp").forward(request, response);
		
		// 5.
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 페이지별리스트 가져오기
		
		// 0. page 번호 가져오기
		int cpage = Integer.parseInt(request.getParameter("page"));
		
		// 1. service 객체
		IBoardService service = BoardServiceImpl.getService();
		
		// 전체 글갯 수 가져오기
		int totalCount = service.getTotalCount();
		
		// 한 페이지당 출력할 글 갯수
		int perList = 3;
		
		int start = (cpage - 1) * perList + 1;
		
		// cpage = 1이면 1
		// cpage = 2일때 4
		// cpage = 3일때 7
		
		int end = start + perList - 1;
		
		if(end > totalCount) end = totalCount;
		
		// 한 화면에 출력될 페이지 갯수
		int perPage = 2;
		
		int totalPage= (int)(Math.ceil(totalCount / (double)perList));
		
		int startPage = ((cpage - 1) / perPage * perPage) + 1;
		// cpage = 1 -> 1 cpage =2 ->1 cpage = 3 -> 3 cpage = 4 -> 3
		
		int endPage = startPage + perPage - 1;
		if(endPage > totalPage) endPage = totalPage;
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("start", start);
		map.put("end", end);
		
		// 2. 메서드 호출
		List<BoardVO> list = service.listPage(map);
				
		// 3. 결과값 저장
		request.setAttribute("list", list);
		request.setAttribute("sp", startPage);
		request.setAttribute("ep", endPage);
		request.setAttribute("tp", totalPage);
				
		// 4.
		request.getRequestDispatcher("board/listPage.jsp").forward(request, response);
		
	}

}
