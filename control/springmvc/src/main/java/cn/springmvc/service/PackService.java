package cn.springmvc.service;
  
import java.util.List;
 

import cn.springmvc.model.Package;

public interface PackService {

	/*
	 * 添加快递信息
	 * */
	public boolean addPackInfo(Package pack);
	/*
	 * 查找快递总数，提供给分页
	*/
	public int queryPackCount();
	/*/
	 * //查找快递的状态，待揽件以及待发件
	 * */
	public String queryPackInfo();
	/*
	 * //查找所有快递信息
	 * */
	public List<Package> selectAllPackInfo(int start,int end);
	/*
	 * //查找待揽件快递信息
	 * */
	public List<Package> selectWaitPackInfo(int start,int end);
	/*
	 * //查找待派件快递信息 
	 * */
	public List<Package> selectDispatchPack(int start,int end);
	/*
	 * //查找待签收快递信息 
	 * */
	public List<Package> selectWaitSignPack(int start,int end);
	/*//通过手机号或快递单查找快递信息
	 * */
//	public List<Package> selectPackByPhoneOrNumber(String value,String type);
	/*
	 * 修改快递的状态
	 * */
	public boolean updatePackState(String packnumber,String type); 
	/*
	 * 添加物流信息
	 * */
	public boolean addLogisticsInfo(String packnumber,String logisticInfo,String type);
	
	/*
	 * 查找物流信息
	 * */
	public String selectLogisticInfo(String packnumber);
	
	/*
	 * 通过手机号和快递单号查询快递信息
	 * 
	 * */
	public List<Package> selectPackByPhoneOrNumber(String packnumber,String phone);
	
	/*
	 * 通过发件地址、收件地址、发件日期查询
	 * */
	public List<Package> selectPackByOthers(String sendpoint,String receivepoint,String senddate);
	
	/*
	 * 快递签收后，将信息删除,并将记录保存到历史记录表中
	 * */
	
	public boolean deletePackInfo(String packnumber);
	
	public int keepHistory(String packnum,String emplname,String date);
	
	/*
	 * 修改快递单信息
	 * */
	public int updatePackInfo(String packnumber,String field,String value);
}
