package cn.springmvc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.springmvc.dao.UserDAO;
import cn.springmvc.model.User;
import cn.springmvc.service.UserService;


@Service("UserService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDAO userDAO;
 
	@Override
	public int insertUser(User user) {
		// TODO Auto-generated method stub
		return userDAO.insertUser(user);
	}

	@Override
	public boolean loginByName(String username, String password) {
		System.out.println(username+"++++++serviceImpl++++++"+password);
		  User user= userDAO.findUserByNameAndPsw(username,password);
		  System.out.println("从数据库获取的信息为："+user.getUsername()+user.getPassword());
		   
		  if (user.getUsername().equals(username)&&user.getPassword().equals(password)) {
			return true;
		}
		  return false;
	}

}
