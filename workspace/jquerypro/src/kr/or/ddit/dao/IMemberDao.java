package kr.or.ddit.dao;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.member.vo.MemberVO;

public interface IMemberDao {

	// 조회
	public List<MemberVO> getAllMember() throws SQLException;
	
}
