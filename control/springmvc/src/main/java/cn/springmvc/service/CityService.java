package cn.springmvc.service;
import java.util.List;

import cn.springmvc.model.City;
import cn.springmvc.model.Province;
public interface CityService {

	public List<Province> queryProvinces() ; 
	public List<City> queryCity(String provinceId);
}
