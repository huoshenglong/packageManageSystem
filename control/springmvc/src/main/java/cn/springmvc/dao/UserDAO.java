package cn.springmvc.dao;

import org.apache.ibatis.annotations.Param;

import cn.springmvc.model.User;


public interface UserDAO {

	/**
	 * 添加新用户
	 * @param user
	 * @return
	 */
	public int insertUser(User user);
	public User findUserByNameAndPsw(@Param("username") String username,@Param("password") String password);
	
}
