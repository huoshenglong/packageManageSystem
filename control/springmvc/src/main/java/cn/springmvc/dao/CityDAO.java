package cn.springmvc.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.springmvc.model.City;
import cn.springmvc.model.Province;

public interface CityDAO {
	/*
	 * 查询省份信息
	 * */
	public List<Province> findProvince() ; 
	
	
	/*
	 * 通过省份ID查找对应的市级信息
	 * **/
	public List<City> findCityByProvinceId(@Param("provinceId")String  provinceId);
}
