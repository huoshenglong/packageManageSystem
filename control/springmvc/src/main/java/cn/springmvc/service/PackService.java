package cn.springmvc.service;

import java.util.List;

import cn.springmvc.model.Package;

public interface PackService {

	public boolean addPackInfo(Package pack);
	public String queryPackInfo();//查找快递的状态，待揽件以及待发件
	public List<Package> selectAllPackInfo();//查找所有快递信息
	public List<Package> selectWaitPackInfo();//查找待揽件快递信息
	public List<Package> selectDispatchPack();//查找待派件快递信息
}
