package cn.springmvc.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.springmvc.model.City;
import cn.springmvc.model.Province;

public interface CityDAO {
	public List<Province> findProvince() ; 
	public List<City> findCityByProvinceId(@Param("provinceId")String  provinceId);
}
