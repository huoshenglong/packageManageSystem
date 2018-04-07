package cn.springmvc.dao;

import java.util.List;

import cn.springmvc.model.Package;

public interface PackDAO {

	public int addPackInfo(Package pack);
	public String findWaitPackageConsignee();
	public String findWaitPackageDispatch();
	public List<Package> findAllPackInfo();
	public List<Package> findWaitPack();
	public List<Package> findDispatchPack();
}
