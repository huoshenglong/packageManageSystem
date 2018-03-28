package springmvc;
 
import org.junit.Test;

import cn.springmvc.service.UserService;

public class test {
	private UserService uss;
	@Test
	public void mytest() {
		String username="long";
		String password="123456";
		boolean result=uss.loginByName(username, password);
		if (result) {
			System.out.println("success");
		}else{
			//request.setAttribute("message","用户名密码错误");
			System.out.println("faile");
		}
	}
	 
}
