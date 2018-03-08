package cn.springmvc.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
import cn.springmvc.model.User;
import cn.springmvc.service.UserService;

public class test {
 
	 private static ApplicationContext ac;
	      static {
	    	  ac = new ClassPathXmlApplicationContext(new String[]{"classpath:conf/spring.xml"
	  				,"classpath:conf/spring-mybatis.xml"});
	  		 
	           
	      }
	 
	      public static void main(String[] args) {
	    	  UserService mapper = (UserService) ac.getBean("userServiceImpl");
	          System.out.println("获取alvin");
//	          User user = mapper.login("long", "1234");	  
//	          System.out.println(user.getId()+":"+"username:"+user.getUsername());
//	          System.out.println("password:"+user.getPassword());
	  
	      }
}
