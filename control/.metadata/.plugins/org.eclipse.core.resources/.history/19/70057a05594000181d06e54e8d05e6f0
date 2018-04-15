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
	/*
	 * 登录时验证
	 * */
	public User findUserByNameAndPsw(@Param("username") String username,@Param("password") String password);
	
	
	public int updateUserInfo(@Param("phone") String phone,@Param("email") String email,@Param("address") String address,@Param("imgurl") String imgurl,@Param("username") String username);
}
