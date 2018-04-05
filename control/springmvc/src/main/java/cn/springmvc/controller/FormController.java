package cn.springmvc.controller;
 
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.springmvc.model.Package;
import cn.springmvc.service.PackService;


@Controller
@RequestMapping("/")
public class FormController {
 
	@Autowired
	public PackService ps;
	
	
	Package pack=new Package();
	@RequestMapping("addpack") 
	@ResponseBody
	public String addPackInfo(HttpServletRequest request){
		String sender_name = request.getParameter("sender_name");//发件人姓名
		String sender_phone = request.getParameter("sender_phone");	//发件人电话
		String sendaddress = request.getParameter("sendaddress");//发件地址
		String receive_name = request.getParameter("receive_name");//收件人姓名
		String receive_phone = request.getParameter("receive_phone");//收件人电话
		String things_weight = request.getParameter("things_weight");//物品重量
		String receiveaddress = request.getParameter("receiveaddress"); //收件地址
		String thingsType = request.getParameter("things");//物品类型
		String describe = request.getParameter("describe");//备注
		Date now = new Date(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");//可以方便地修改日期格式
		String nowtime = dateFormat.format( now ); //这里将当前的系统时间一同保存，作为寄件时间
		Random  d = new Random();
		String packnumber = "";
		for(int i=0;i<15;i++){//随机生成一个15位的单号
			int num = d.nextInt(10);
			packnumber += num+"";
		}
	    pack.setDescribe(describe);
	    pack.setNowtime(nowtime);
	    pack.setRaddress(receiveaddress);
	    pack.setRname(receive_name);
	    pack.setRphone(receive_phone);
	    pack.setSaddress(sendaddress);	   
	    pack.setSname(sender_name);
	    pack.setSphone(sender_phone);
	    pack.setThingsType(thingsType);
	    pack.setWeight(things_weight);
	    pack.setPacknumber(packnumber);
	    boolean result=ps.addPackInfo(pack);
	    if (result) { 
	    	return packnumber;
		} else {
			return "faile";
		}
	     
	}
	 
}
