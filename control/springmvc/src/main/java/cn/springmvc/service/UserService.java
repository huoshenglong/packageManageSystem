package cn.springmvc.service;

 
import cn.springmvc.model.User;


public interface UserService {

	public int insertUser(User user);
	public boolean loginByName(String username,String password);
}
