package kr.or.ddit.member.dao;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.member.vo.MemberVO;
import kr.or.ddit.member.vo.ZipVO;

public interface IMemberDao {

	// 조회
	public List<MemberVO> getAllMember() throws SQLException;
	

	//조회
	//public List<MemberVO> getAllMember()  throws SQLException;
		
	//아이디 중복검사
	public String selectById(String id) throws SQLException;
		
	//우편번호검색 
	public List<ZipVO> selectByDong(String dong) throws SQLException;
	
	// 전송
	public String insertMember(MemberVO vo) throws SQLException;
	
	
}
