package cn.springmvc.controller;

import java.util.ArrayList; 
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
           





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.springmvc.model.City;
import cn.springmvc.model.Point;
import cn.springmvc.model.Province;
import cn.springmvc.service.CashService;
import cn.springmvc.service.CityService;
import cn.springmvc.service.PointService;
import cn.springmvc.service.SendEmail; 

@Controller
@RequestMapping("/")
public class TipsController {
 
	SendEmail sendEmail=new SendEmail();
	
	@Autowired
	public CashService css;
	
	@Autowired
	public CityService city;
	  
	@Autowired
	public PointService pos;

	@RequestMapping("cash")
	@ResponseBody//转换成json传到前台
	public Double cashSelect(HttpServletRequest request){
		String start = request.getParameter("startcash");
		String endcash = request.getParameter("endcash");
		double value=css.selectRate(start, endcash);		 
		return value;
	}
	
	@RequestMapping("email")
	@ResponseBody//转换成json传到前台
	public String SendEmailByCount(HttpServletRequest request){	 
		String 	emailnum = request.getParameter("emailnum");
		String str="0123456789";
		StringBuilder sb=new StringBuilder(4);
		for(int i=0;i<6;i++)
		{
			char ch=str.charAt(new Random().nextInt(str.length()));
			sb.append(ch);
		} 
		String context="您的快递邮箱验证码为："+sb;
		try {
			sendEmail.sendEmail(emailnum,"快递验证码",context);		 
		} catch (Exception e) {
			e.printStackTrace();
		}		
		System.out.println(sb.toString());
		return sb.toString();
	}	
	
	
	@RequestMapping("province")
	@ResponseBody//转换成json传到前台
	public List<Province> selectProvince(HttpServletRequest request){
		List<Province> provincelist =new ArrayList<Province>();		 
		provincelist=city.queryProvinces();	  
		return provincelist;
	}
	@RequestMapping("city")
	@ResponseBody//转换成json传到前台
	public List<City> selectCity(HttpServletRequest request){
		List<City> citylist =new ArrayList<City>();
	
		String provinceId=request.getParameter("provinceid");
		System.out.println(provinceId);
		citylist=city.queryCity(provinceId);	  
		return citylist;
	}
	
	@RequestMapping("packpoint")
	@ResponseBody//转换成json传到前台
	public Map<String, Object> selectPoint(){
		System.out.println("pointget");
		List<Point> list =new ArrayList<Point>(); 
		Map<String, Object> map=new HashMap<String, Object>();
		list=pos.selectPoint();
		map.put("size", list.size());
		map.put("point", list);
		return map;
	}
	
}
