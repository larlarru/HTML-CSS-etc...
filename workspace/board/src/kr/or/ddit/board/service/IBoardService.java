package kr.or.ddit.board.service;

import java.util.List;
import java.util.Map;

import kr.or.ddit.board.vo.BoardVO;
import kr.or.ddit.board.vo.ReplyVO;

public interface IBoardService {
	
	// 전체 게시글 가져오기
	public List<BoardVO> listAll();
	
	// 페이지별 게시글 가져오기 - search
	public List<BoardVO> listPage(Map<String, Object> map);
	
	// 전체 글 갯수 가져오기 
	public int getTotalCount();
	
	// 게시글 등록
	
	// 게시글 삭제
	
	// 게시글 수정
	
	// 조회수 증가
	
	// 댓글 등록
	public int insertReply(ReplyVO vo);
	
	// 댓글 수정
	
	// 댓글 삭제
	
	// 댓글 리스트

}
