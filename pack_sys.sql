/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : pack_sys

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-04-23 16:15:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cities
-- ----------------------------
DROP TABLE IF EXISTS `cities`;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cityid` varchar(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `provinceid` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=346 DEFAULT CHARSET=utf8 COMMENT='地州市信息表';

-- ----------------------------
-- Records of cities
-- ----------------------------
INSERT INTO `cities` VALUES ('5', '130100', '石家庄市', '130000');
INSERT INTO `cities` VALUES ('6', '130200', '唐山市', '130000');
INSERT INTO `cities` VALUES ('7', '130300', '秦皇岛市', '130000');
INSERT INTO `cities` VALUES ('8', '130400', '邯郸市', '130000');
INSERT INTO `cities` VALUES ('9', '130500', '邢台市', '130000');
INSERT INTO `cities` VALUES ('10', '130600', '保定市', '130000');
INSERT INTO `cities` VALUES ('11', '130700', '张家口市', '130000');
INSERT INTO `cities` VALUES ('12', '130800', '承德市', '130000');
INSERT INTO `cities` VALUES ('13', '130900', '沧州市', '130000');
INSERT INTO `cities` VALUES ('14', '131000', '廊坊市', '130000');
INSERT INTO `cities` VALUES ('15', '131100', '衡水市', '130000');
INSERT INTO `cities` VALUES ('16', '140100', '太原市', '140000');
INSERT INTO `cities` VALUES ('17', '140200', '大同市', '140000');
INSERT INTO `cities` VALUES ('18', '140300', '阳泉市', '140000');
INSERT INTO `cities` VALUES ('19', '140400', '长治市', '140000');
INSERT INTO `cities` VALUES ('20', '140500', '晋城市', '140000');
INSERT INTO `cities` VALUES ('21', '140600', '朔州市', '140000');
INSERT INTO `cities` VALUES ('22', '140700', '晋中市', '140000');
INSERT INTO `cities` VALUES ('23', '140800', '运城市', '140000');
INSERT INTO `cities` VALUES ('24', '140900', '忻州市', '140000');
INSERT INTO `cities` VALUES ('25', '141000', '临汾市', '140000');
INSERT INTO `cities` VALUES ('26', '141100', '吕梁市', '140000');
INSERT INTO `cities` VALUES ('27', '150100', '呼和浩特市', '150000');
INSERT INTO `cities` VALUES ('28', '150200', '包头市', '150000');
INSERT INTO `cities` VALUES ('29', '150300', '乌海市', '150000');
INSERT INTO `cities` VALUES ('30', '150400', '赤峰市', '150000');
INSERT INTO `cities` VALUES ('31', '150500', '通辽市', '150000');
INSERT INTO `cities` VALUES ('32', '150600', '鄂尔多斯市', '150000');
INSERT INTO `cities` VALUES ('33', '150700', '呼伦贝尔市', '150000');
INSERT INTO `cities` VALUES ('34', '150800', '巴彦淖尔市', '150000');
INSERT INTO `cities` VALUES ('35', '150900', '乌兰察布市', '150000');
INSERT INTO `cities` VALUES ('36', '152200', '兴安盟', '150000');
INSERT INTO `cities` VALUES ('37', '152500', '锡林郭勒盟', '150000');
INSERT INTO `cities` VALUES ('38', '152900', '阿拉善盟', '150000');
INSERT INTO `cities` VALUES ('39', '210100', '沈阳市', '210000');
INSERT INTO `cities` VALUES ('40', '210200', '大连市', '210000');
INSERT INTO `cities` VALUES ('41', '210300', '鞍山市', '210000');
INSERT INTO `cities` VALUES ('42', '210400', '抚顺市', '210000');
INSERT INTO `cities` VALUES ('43', '210500', '本溪市', '210000');
INSERT INTO `cities` VALUES ('44', '210600', '丹东市', '210000');
INSERT INTO `cities` VALUES ('45', '210700', '锦州市', '210000');
INSERT INTO `cities` VALUES ('46', '210800', '营口市', '210000');
INSERT INTO `cities` VALUES ('47', '210900', '阜新市', '210000');
INSERT INTO `cities` VALUES ('48', '211000', '辽阳市', '210000');
INSERT INTO `cities` VALUES ('49', '211100', '盘锦市', '210000');
INSERT INTO `cities` VALUES ('50', '211200', '铁岭市', '210000');
INSERT INTO `cities` VALUES ('51', '211300', '朝阳市', '210000');
INSERT INTO `cities` VALUES ('52', '211400', '葫芦岛市', '210000');
INSERT INTO `cities` VALUES ('53', '220100', '长春市', '220000');
INSERT INTO `cities` VALUES ('54', '220200', '吉林市', '220000');
INSERT INTO `cities` VALUES ('55', '220300', '四平市', '220000');
INSERT INTO `cities` VALUES ('56', '220400', '辽源市', '220000');
INSERT INTO `cities` VALUES ('57', '220500', '通化市', '220000');
INSERT INTO `cities` VALUES ('58', '220600', '白山市', '220000');
INSERT INTO `cities` VALUES ('59', '220700', '松原市', '220000');
INSERT INTO `cities` VALUES ('60', '220800', '白城市', '220000');
INSERT INTO `cities` VALUES ('61', '222400', '延边朝鲜族自治州', '220000');
INSERT INTO `cities` VALUES ('62', '230100', '哈尔滨市', '230000');
INSERT INTO `cities` VALUES ('63', '230200', '齐齐哈尔市', '230000');
INSERT INTO `cities` VALUES ('64', '230300', '鸡西市', '230000');
INSERT INTO `cities` VALUES ('65', '230400', '鹤岗市', '230000');
INSERT INTO `cities` VALUES ('66', '230500', '双鸭山市', '230000');
INSERT INTO `cities` VALUES ('67', '230600', '大庆市', '230000');
INSERT INTO `cities` VALUES ('68', '230700', '伊春市', '230000');
INSERT INTO `cities` VALUES ('69', '230800', '佳木斯市', '230000');
INSERT INTO `cities` VALUES ('70', '230900', '七台河市', '230000');
INSERT INTO `cities` VALUES ('71', '231000', '牡丹江市', '230000');
INSERT INTO `cities` VALUES ('72', '231100', '黑河市', '230000');
INSERT INTO `cities` VALUES ('73', '231200', '绥化市', '230000');
INSERT INTO `cities` VALUES ('74', '232700', '大兴安岭地区', '230000');
INSERT INTO `cities` VALUES ('75', '310100', '市辖区', '310000');
INSERT INTO `cities` VALUES ('76', '310200', '县', '310000');
INSERT INTO `cities` VALUES ('77', '320100', '南京市', '320000');
INSERT INTO `cities` VALUES ('78', '320200', '无锡市', '320000');
INSERT INTO `cities` VALUES ('79', '320300', '徐州市', '320000');
INSERT INTO `cities` VALUES ('80', '320400', '常州市', '320000');
INSERT INTO `cities` VALUES ('81', '320500', '苏州市', '320000');
INSERT INTO `cities` VALUES ('82', '320600', '南通市', '320000');
INSERT INTO `cities` VALUES ('83', '320700', '连云港市', '320000');
INSERT INTO `cities` VALUES ('84', '320800', '淮安市', '320000');
INSERT INTO `cities` VALUES ('85', '320900', '盐城市', '320000');
INSERT INTO `cities` VALUES ('86', '321000', '扬州市', '320000');
INSERT INTO `cities` VALUES ('87', '321100', '镇江市', '320000');
INSERT INTO `cities` VALUES ('88', '321200', '泰州市', '320000');
INSERT INTO `cities` VALUES ('89', '321300', '宿迁市', '320000');
INSERT INTO `cities` VALUES ('90', '330100', '杭州市', '330000');
INSERT INTO `cities` VALUES ('91', '330200', '宁波市', '330000');
INSERT INTO `cities` VALUES ('92', '330300', '温州市', '330000');
INSERT INTO `cities` VALUES ('93', '330400', '嘉兴市', '330000');
INSERT INTO `cities` VALUES ('94', '330500', '湖州市', '330000');
INSERT INTO `cities` VALUES ('95', '330600', '绍兴市', '330000');
INSERT INTO `cities` VALUES ('96', '330700', '金华市', '330000');
INSERT INTO `cities` VALUES ('97', '330800', '衢州市', '330000');
INSERT INTO `cities` VALUES ('98', '330900', '舟山市', '330000');
INSERT INTO `cities` VALUES ('99', '331000', '台州市', '330000');
INSERT INTO `cities` VALUES ('100', '331100', '丽水市', '330000');
INSERT INTO `cities` VALUES ('101', '340100', '合肥市', '340000');
INSERT INTO `cities` VALUES ('102', '340200', '芜湖市', '340000');
INSERT INTO `cities` VALUES ('103', '340300', '蚌埠市', '340000');
INSERT INTO `cities` VALUES ('104', '340400', '淮南市', '340000');
INSERT INTO `cities` VALUES ('105', '340500', '马鞍山市', '340000');
INSERT INTO `cities` VALUES ('106', '340600', '淮北市', '340000');
INSERT INTO `cities` VALUES ('107', '340700', '铜陵市', '340000');
INSERT INTO `cities` VALUES ('108', '340800', '安庆市', '340000');
INSERT INTO `cities` VALUES ('109', '341000', '黄山市', '340000');
INSERT INTO `cities` VALUES ('110', '341100', '滁州市', '340000');
INSERT INTO `cities` VALUES ('111', '341200', '阜阳市', '340000');
INSERT INTO `cities` VALUES ('112', '341300', '宿州市', '340000');
INSERT INTO `cities` VALUES ('113', '341400', '巢湖市', '340000');
INSERT INTO `cities` VALUES ('114', '341500', '六安市', '340000');
INSERT INTO `cities` VALUES ('115', '341600', '亳州市', '340000');
INSERT INTO `cities` VALUES ('116', '341700', '池州市', '340000');
INSERT INTO `cities` VALUES ('117', '341800', '宣城市', '340000');
INSERT INTO `cities` VALUES ('118', '350100', '福州市', '350000');
INSERT INTO `cities` VALUES ('119', '350200', '厦门市', '350000');
INSERT INTO `cities` VALUES ('120', '350300', '莆田市', '350000');
INSERT INTO `cities` VALUES ('121', '350400', '三明市', '350000');
INSERT INTO `cities` VALUES ('122', '350500', '泉州市', '350000');
INSERT INTO `cities` VALUES ('123', '350600', '漳州市', '350000');
INSERT INTO `cities` VALUES ('124', '350700', '南平市', '350000');
INSERT INTO `cities` VALUES ('125', '350800', '龙岩市', '350000');
INSERT INTO `cities` VALUES ('126', '350900', '宁德市', '350000');
INSERT INTO `cities` VALUES ('127', '360100', '南昌市', '360000');
INSERT INTO `cities` VALUES ('128', '360200', '景德镇市', '360000');
INSERT INTO `cities` VALUES ('129', '360300', '萍乡市', '360000');
INSERT INTO `cities` VALUES ('130', '360400', '九江市', '360000');
INSERT INTO `cities` VALUES ('131', '360500', '新余市', '360000');
INSERT INTO `cities` VALUES ('132', '360600', '鹰潭市', '360000');
INSERT INTO `cities` VALUES ('133', '360700', '赣州市', '360000');
INSERT INTO `cities` VALUES ('134', '360800', '吉安市', '360000');
INSERT INTO `cities` VALUES ('135', '360900', '宜春市', '360000');
INSERT INTO `cities` VALUES ('136', '361000', '抚州市', '360000');
INSERT INTO `cities` VALUES ('137', '361100', '上饶市', '360000');
INSERT INTO `cities` VALUES ('138', '370100', '济南市', '370000');
INSERT INTO `cities` VALUES ('139', '370200', '青岛市', '370000');
INSERT INTO `cities` VALUES ('140', '370300', '淄博市', '370000');
INSERT INTO `cities` VALUES ('141', '370400', '枣庄市', '370000');
INSERT INTO `cities` VALUES ('142', '370500', '东营市', '370000');
INSERT INTO `cities` VALUES ('143', '370600', '烟台市', '370000');
INSERT INTO `cities` VALUES ('144', '370700', '潍坊市', '370000');
INSERT INTO `cities` VALUES ('145', '370800', '济宁市', '370000');
INSERT INTO `cities` VALUES ('146', '370900', '泰安市', '370000');
INSERT INTO `cities` VALUES ('147', '371000', '威海市', '370000');
INSERT INTO `cities` VALUES ('148', '371100', '日照市', '370000');
INSERT INTO `cities` VALUES ('149', '371200', '莱芜市', '370000');
INSERT INTO `cities` VALUES ('150', '371300', '临沂市', '370000');
INSERT INTO `cities` VALUES ('151', '371400', '德州市', '370000');
INSERT INTO `cities` VALUES ('152', '371500', '聊城市', '370000');
INSERT INTO `cities` VALUES ('153', '371600', '滨州市', '370000');
INSERT INTO `cities` VALUES ('154', '371700', '荷泽市', '370000');
INSERT INTO `cities` VALUES ('155', '410100', '郑州市', '410000');
INSERT INTO `cities` VALUES ('156', '410200', '开封市', '410000');
INSERT INTO `cities` VALUES ('157', '410300', '洛阳市', '410000');
INSERT INTO `cities` VALUES ('158', '410400', '平顶山市', '410000');
INSERT INTO `cities` VALUES ('159', '410500', '安阳市', '410000');
INSERT INTO `cities` VALUES ('160', '410600', '鹤壁市', '410000');
INSERT INTO `cities` VALUES ('161', '410700', '新乡市', '410000');
INSERT INTO `cities` VALUES ('162', '410800', '焦作市', '410000');
INSERT INTO `cities` VALUES ('163', '410900', '濮阳市', '410000');
INSERT INTO `cities` VALUES ('164', '411000', '许昌市', '410000');
INSERT INTO `cities` VALUES ('165', '411100', '漯河市', '410000');
INSERT INTO `cities` VALUES ('166', '411200', '三门峡市', '410000');
INSERT INTO `cities` VALUES ('167', '411300', '南阳市', '410000');
INSERT INTO `cities` VALUES ('168', '411400', '商丘市', '410000');
INSERT INTO `cities` VALUES ('169', '411500', '信阳市', '410000');
INSERT INTO `cities` VALUES ('170', '411600', '周口市', '410000');
INSERT INTO `cities` VALUES ('171', '411700', '驻马店市', '410000');
INSERT INTO `cities` VALUES ('172', '420100', '武汉市', '420000');
INSERT INTO `cities` VALUES ('173', '420200', '黄石市', '420000');
INSERT INTO `cities` VALUES ('174', '420300', '十堰市', '420000');
INSERT INTO `cities` VALUES ('175', '420500', '宜昌市', '420000');
INSERT INTO `cities` VALUES ('176', '420600', '襄樊市', '420000');
INSERT INTO `cities` VALUES ('177', '420700', '鄂州市', '420000');
INSERT INTO `cities` VALUES ('178', '420800', '荆门市', '420000');
INSERT INTO `cities` VALUES ('179', '420900', '孝感市', '420000');
INSERT INTO `cities` VALUES ('180', '421000', '荆州市', '420000');
INSERT INTO `cities` VALUES ('181', '421100', '黄冈市', '420000');
INSERT INTO `cities` VALUES ('182', '421200', '咸宁市', '420000');
INSERT INTO `cities` VALUES ('183', '421300', '随州市', '420000');
INSERT INTO `cities` VALUES ('184', '422800', '恩施土家族苗族自治州', '420000');
INSERT INTO `cities` VALUES ('185', '429000', '省直辖行政单位', '420000');
INSERT INTO `cities` VALUES ('186', '430100', '长沙市', '430000');
INSERT INTO `cities` VALUES ('187', '430200', '株洲市', '430000');
INSERT INTO `cities` VALUES ('188', '430300', '湘潭市', '430000');
INSERT INTO `cities` VALUES ('189', '430400', '衡阳市', '430000');
INSERT INTO `cities` VALUES ('190', '430500', '邵阳市', '430000');
INSERT INTO `cities` VALUES ('191', '430600', '岳阳市', '430000');
INSERT INTO `cities` VALUES ('192', '430700', '常德市', '430000');
INSERT INTO `cities` VALUES ('193', '430800', '张家界市', '430000');
INSERT INTO `cities` VALUES ('194', '430900', '益阳市', '430000');
INSERT INTO `cities` VALUES ('195', '431000', '郴州市', '430000');
INSERT INTO `cities` VALUES ('196', '431100', '永州市', '430000');
INSERT INTO `cities` VALUES ('197', '431200', '怀化市', '430000');
INSERT INTO `cities` VALUES ('198', '431300', '娄底市', '430000');
INSERT INTO `cities` VALUES ('199', '433100', '湘西土家族苗族自治州', '430000');
INSERT INTO `cities` VALUES ('200', '440100', '广州市', '440000');
INSERT INTO `cities` VALUES ('201', '440200', '韶关市', '440000');
INSERT INTO `cities` VALUES ('202', '440300', '深圳市', '440000');
INSERT INTO `cities` VALUES ('203', '440400', '珠海市', '440000');
INSERT INTO `cities` VALUES ('204', '440500', '汕头市', '440000');
INSERT INTO `cities` VALUES ('205', '440600', '佛山市', '440000');
INSERT INTO `cities` VALUES ('206', '440700', '江门市', '440000');
INSERT INTO `cities` VALUES ('207', '440800', '湛江市', '440000');
INSERT INTO `cities` VALUES ('208', '440900', '茂名市', '440000');
INSERT INTO `cities` VALUES ('209', '441200', '肇庆市', '440000');
INSERT INTO `cities` VALUES ('210', '441300', '惠州市', '440000');
INSERT INTO `cities` VALUES ('211', '441400', '梅州市', '440000');
INSERT INTO `cities` VALUES ('212', '441500', '汕尾市', '440000');
INSERT INTO `cities` VALUES ('213', '441600', '河源市', '440000');
INSERT INTO `cities` VALUES ('214', '441700', '阳江市', '440000');
INSERT INTO `cities` VALUES ('215', '441800', '清远市', '440000');
INSERT INTO `cities` VALUES ('216', '441900', '东莞市', '440000');
INSERT INTO `cities` VALUES ('217', '442000', '中山市', '440000');
INSERT INTO `cities` VALUES ('218', '445100', '潮州市', '440000');
INSERT INTO `cities` VALUES ('219', '445200', '揭阳市', '440000');
INSERT INTO `cities` VALUES ('220', '445300', '云浮市', '440000');
INSERT INTO `cities` VALUES ('221', '450100', '南宁市', '450000');
INSERT INTO `cities` VALUES ('222', '450200', '柳州市', '450000');
INSERT INTO `cities` VALUES ('223', '450300', '桂林市', '450000');
INSERT INTO `cities` VALUES ('224', '450400', '梧州市', '450000');
INSERT INTO `cities` VALUES ('225', '450500', '北海市', '450000');
INSERT INTO `cities` VALUES ('226', '450600', '防城港市', '450000');
INSERT INTO `cities` VALUES ('227', '450700', '钦州市', '450000');
INSERT INTO `cities` VALUES ('228', '450800', '贵港市', '450000');
INSERT INTO `cities` VALUES ('229', '450900', '玉林市', '450000');
INSERT INTO `cities` VALUES ('230', '451000', '百色市', '450000');
INSERT INTO `cities` VALUES ('231', '451100', '贺州市', '450000');
INSERT INTO `cities` VALUES ('232', '451200', '河池市', '450000');
INSERT INTO `cities` VALUES ('233', '451300', '来宾市', '450000');
INSERT INTO `cities` VALUES ('234', '451400', '崇左市', '450000');
INSERT INTO `cities` VALUES ('235', '460100', '海口市', '460000');
INSERT INTO `cities` VALUES ('236', '460200', '三亚市', '460000');
INSERT INTO `cities` VALUES ('237', '469000', '省直辖县级行政单位', '460000');
INSERT INTO `cities` VALUES ('238', '500100', '市辖区', '500000');
INSERT INTO `cities` VALUES ('239', '500200', '县', '500000');
INSERT INTO `cities` VALUES ('240', '500300', '市', '500000');
INSERT INTO `cities` VALUES ('241', '510100', '成都市', '510000');
INSERT INTO `cities` VALUES ('242', '510300', '自贡市', '510000');
INSERT INTO `cities` VALUES ('243', '510400', '攀枝花市', '510000');
INSERT INTO `cities` VALUES ('244', '510500', '泸州市', '510000');
INSERT INTO `cities` VALUES ('245', '510600', '德阳市', '510000');
INSERT INTO `cities` VALUES ('246', '510700', '绵阳市', '510000');
INSERT INTO `cities` VALUES ('247', '510800', '广元市', '510000');
INSERT INTO `cities` VALUES ('248', '510900', '遂宁市', '510000');
INSERT INTO `cities` VALUES ('249', '511000', '内江市', '510000');
INSERT INTO `cities` VALUES ('250', '511100', '乐山市', '510000');
INSERT INTO `cities` VALUES ('251', '511300', '南充市', '510000');
INSERT INTO `cities` VALUES ('252', '511400', '眉山市', '510000');
INSERT INTO `cities` VALUES ('253', '511500', '宜宾市', '510000');
INSERT INTO `cities` VALUES ('254', '511600', '广安市', '510000');
INSERT INTO `cities` VALUES ('255', '511700', '达州市', '510000');
INSERT INTO `cities` VALUES ('256', '511800', '雅安市', '510000');
INSERT INTO `cities` VALUES ('257', '511900', '巴中市', '510000');
INSERT INTO `cities` VALUES ('258', '512000', '资阳市', '510000');
INSERT INTO `cities` VALUES ('259', '513200', '阿坝藏族羌族自治州', '510000');
INSERT INTO `cities` VALUES ('260', '513300', '甘孜藏族自治州', '510000');
INSERT INTO `cities` VALUES ('261', '513400', '凉山彝族自治州', '510000');
INSERT INTO `cities` VALUES ('262', '520100', '贵阳市', '520000');
INSERT INTO `cities` VALUES ('263', '520200', '六盘水市', '520000');
INSERT INTO `cities` VALUES ('264', '520300', '遵义市', '520000');
INSERT INTO `cities` VALUES ('265', '520400', '安顺市', '520000');
INSERT INTO `cities` VALUES ('266', '522200', '铜仁地区', '520000');
INSERT INTO `cities` VALUES ('267', '522300', '黔西南布依族苗族自治州', '520000');
INSERT INTO `cities` VALUES ('268', '522400', '毕节地区', '520000');
INSERT INTO `cities` VALUES ('269', '522600', '黔东南苗族侗族自治州', '520000');
INSERT INTO `cities` VALUES ('270', '522700', '黔南布依族苗族自治州', '520000');
INSERT INTO `cities` VALUES ('271', '530100', '昆明市', '530000');
INSERT INTO `cities` VALUES ('272', '530300', '曲靖市', '530000');
INSERT INTO `cities` VALUES ('273', '530400', '玉溪市', '530000');
INSERT INTO `cities` VALUES ('274', '530500', '保山市', '530000');
INSERT INTO `cities` VALUES ('275', '530600', '昭通市', '530000');
INSERT INTO `cities` VALUES ('276', '530700', '丽江市', '530000');
INSERT INTO `cities` VALUES ('277', '530800', '思茅市', '530000');
INSERT INTO `cities` VALUES ('278', '530900', '临沧市', '530000');
INSERT INTO `cities` VALUES ('279', '532300', '楚雄彝族自治州', '530000');
INSERT INTO `cities` VALUES ('280', '532500', '红河哈尼族彝族自治州', '530000');
INSERT INTO `cities` VALUES ('281', '532600', '文山壮族苗族自治州', '530000');
INSERT INTO `cities` VALUES ('282', '532800', '西双版纳傣族自治州', '530000');
INSERT INTO `cities` VALUES ('283', '532900', '大理白族自治州', '530000');
INSERT INTO `cities` VALUES ('284', '533100', '德宏傣族景颇族自治州', '530000');
INSERT INTO `cities` VALUES ('285', '533300', '怒江傈僳族自治州', '530000');
INSERT INTO `cities` VALUES ('286', '533400', '迪庆藏族自治州', '530000');
INSERT INTO `cities` VALUES ('287', '540100', '拉萨市', '540000');
INSERT INTO `cities` VALUES ('288', '542100', '昌都地区', '540000');
INSERT INTO `cities` VALUES ('289', '542200', '山南地区', '540000');
INSERT INTO `cities` VALUES ('290', '542300', '日喀则地区', '540000');
INSERT INTO `cities` VALUES ('291', '542400', '那曲地区', '540000');
INSERT INTO `cities` VALUES ('292', '542500', '阿里地区', '540000');
INSERT INTO `cities` VALUES ('293', '542600', '林芝地区', '540000');
INSERT INTO `cities` VALUES ('294', '610100', '西安市', '610000');
INSERT INTO `cities` VALUES ('295', '610200', '铜川市', '610000');
INSERT INTO `cities` VALUES ('296', '610300', '宝鸡市', '610000');
INSERT INTO `cities` VALUES ('297', '610400', '咸阳市', '610000');
INSERT INTO `cities` VALUES ('298', '610500', '渭南市', '610000');
INSERT INTO `cities` VALUES ('299', '610600', '延安市', '610000');
INSERT INTO `cities` VALUES ('300', '610700', '汉中市', '610000');
INSERT INTO `cities` VALUES ('301', '610800', '榆林市', '610000');
INSERT INTO `cities` VALUES ('302', '610900', '安康市', '610000');
INSERT INTO `cities` VALUES ('303', '611000', '商洛市', '610000');
INSERT INTO `cities` VALUES ('304', '620100', '兰州市', '620000');
INSERT INTO `cities` VALUES ('305', '620200', '嘉峪关市', '620000');
INSERT INTO `cities` VALUES ('306', '620300', '金昌市', '620000');
INSERT INTO `cities` VALUES ('307', '620400', '白银市', '620000');
INSERT INTO `cities` VALUES ('308', '620500', '天水市', '620000');
INSERT INTO `cities` VALUES ('309', '620600', '武威市', '620000');
INSERT INTO `cities` VALUES ('310', '620700', '张掖市', '620000');
INSERT INTO `cities` VALUES ('311', '620800', '平凉市', '620000');
INSERT INTO `cities` VALUES ('312', '620900', '酒泉市', '620000');
INSERT INTO `cities` VALUES ('313', '621000', '庆阳市', '620000');
INSERT INTO `cities` VALUES ('314', '621100', '定西市', '620000');
INSERT INTO `cities` VALUES ('315', '621200', '陇南市', '620000');
INSERT INTO `cities` VALUES ('316', '622900', '临夏回族自治州', '620000');
INSERT INTO `cities` VALUES ('317', '623000', '甘南藏族自治州', '620000');
INSERT INTO `cities` VALUES ('318', '630100', '西宁市', '630000');
INSERT INTO `cities` VALUES ('319', '632100', '海东地区', '630000');
INSERT INTO `cities` VALUES ('320', '632200', '海北藏族自治州', '630000');
INSERT INTO `cities` VALUES ('321', '632300', '黄南藏族自治州', '630000');
INSERT INTO `cities` VALUES ('322', '632500', '海南藏族自治州', '630000');
INSERT INTO `cities` VALUES ('323', '632600', '果洛藏族自治州', '630000');
INSERT INTO `cities` VALUES ('324', '632700', '玉树藏族自治州', '630000');
INSERT INTO `cities` VALUES ('325', '632800', '海西蒙古族藏族自治州', '630000');
INSERT INTO `cities` VALUES ('326', '640100', '银川市', '640000');
INSERT INTO `cities` VALUES ('327', '640200', '石嘴山市', '640000');
INSERT INTO `cities` VALUES ('328', '640300', '吴忠市', '640000');
INSERT INTO `cities` VALUES ('329', '640400', '固原市', '640000');
INSERT INTO `cities` VALUES ('330', '640500', '中卫市', '640000');
INSERT INTO `cities` VALUES ('331', '650100', '乌鲁木齐市', '650000');
INSERT INTO `cities` VALUES ('332', '650200', '克拉玛依市', '650000');
INSERT INTO `cities` VALUES ('333', '652100', '吐鲁番地区', '650000');
INSERT INTO `cities` VALUES ('334', '652200', '哈密地区', '650000');
INSERT INTO `cities` VALUES ('335', '652300', '昌吉回族自治州', '650000');
INSERT INTO `cities` VALUES ('336', '652700', '博尔塔拉蒙古自治州', '650000');
INSERT INTO `cities` VALUES ('337', '652800', '巴音郭楞蒙古自治州', '650000');
INSERT INTO `cities` VALUES ('338', '652900', '阿克苏地区', '650000');
INSERT INTO `cities` VALUES ('339', '653000', '克孜勒苏柯尔克孜自治州', '650000');
INSERT INTO `cities` VALUES ('340', '653100', '喀什地区', '650000');
INSERT INTO `cities` VALUES ('341', '653200', '和田地区', '650000');
INSERT INTO `cities` VALUES ('342', '654000', '伊犁哈萨克自治州', '650000');
INSERT INTO `cities` VALUES ('343', '654200', '塔城地区', '650000');
INSERT INTO `cities` VALUES ('344', '654300', '阿勒泰地区', '650000');
INSERT INTO `cities` VALUES ('345', '659000', '省直辖行政单位', '650000');

-- ----------------------------
-- Table structure for logistics
-- ----------------------------
DROP TABLE IF EXISTS `logistics`;
CREATE TABLE `logistics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `packnumber` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `logistics` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`,`packnumber`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='物流信息表';

-- ----------------------------
-- Records of logistics
-- ----------------------------
INSERT INTO `logistics` VALUES ('47', '653456224231452', '4月15日 19:5:32*山西省晋城市下里县已揽件，正发往下一站...+4月15日 19:5:38*山西省, 太原市已揽件，正发往下一站...+4月15日 19:5:40*河北省, 石家庄市已揽件，正发往下一站...+4月15日 19:5:40*天津市, 天津市已揽件，正发往下一站...+4月15日 19:5:41*河北省, 承德市已揽件，正发往下一站...+4月15日 19:5:43*辽宁省, 沈阳市已揽件，正发往下一站...+4月15日 19:5:55*吉林省松原市168号正在派件，请耐心等待...');
INSERT INTO `logistics` VALUES ('48', '154789563245785', '4月15日 19:7:4*山西省晋城市下里县已揽件，正发往下一站...+4月15日 19:13:52*新疆维吾尔自治区, 巴音郭楞蒙古自治州已揽件，正发往下一站...+4月15日 19:13:52*山西省, 太原市已揽件，正发往下一站...+4月15日 19:13:53*河北省, 石家庄市已揽件，正发往下一站...+4月15日 19:13:53*新疆维吾尔自治区, 巴音郭楞蒙古自治州已揽件，正发往下一站...+4月15日 19:13:54*天津市, 天津市已揽件，正发往下一站...+4月15日 19:13:54*新疆维吾尔自治区, 巴音郭楞蒙古自治州已揽件，正发往下一站...+4月15日 19:13:55*新疆维吾尔自治区, 哈密市已揽件，正发往下一站...+4月15日 19:13:55*河北省, 承德市已揽件，正发往下一站...+4月15日 19:13:56*辽宁省, 沈阳市已揽件，正发往下一站...+4月15日 19:13:56*Bayankhongor, Shinejinst已揽件，正发往下一站...+4月15日 19:14:3*吉林省松原市168号正在派件，请耐心等待...');
INSERT INTO `logistics` VALUES ('53', '120345678542130', '4月16日 0:1:47*山西省晋城市下里县已揽件，正发往下一站...+4月16日 0:2:29*山西省, 太原市已揽件，正发往下一站...+4月16日 0:2:31*河北省, 石家庄市已揽件，正发往下一站...+4月16日 0:2:52*北京市, 北京市已揽件，正发往下一站...+4月16日 0:2:54*河北省, 承德市已揽件，正发往下一站...+4月16日 0:2:56*辽宁省, 沈阳市已揽件，正发往下一站...+4月16日 0:3:1*吉林省松原市168号正在派件，请耐心等待...');

-- ----------------------------
-- Table structure for longi_lati_tude
-- ----------------------------
DROP TABLE IF EXISTS `longi_lati_tude`;
CREATE TABLE `longi_lati_tude` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `longitude` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '经度',
  `latitude` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `discription` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='快递点经纬度表';

-- ----------------------------
-- Records of longi_lati_tude
-- ----------------------------
INSERT INTO `longi_lati_tude` VALUES ('1', '128.850313', '47.748129', '伊春');
INSERT INTO `longi_lati_tude` VALUES ('2', '126.495459', '45.80852', '哈尔滨');
INSERT INTO `longi_lati_tude` VALUES ('3', '125.33643', '43.844877', '长春');
INSERT INTO `longi_lati_tude` VALUES ('5', '123.423111', '41.80015', '沈阳');
INSERT INTO `longi_lati_tude` VALUES ('6', '121.620176', '38.930002', '大连');
INSERT INTO `longi_lati_tude` VALUES ('7', '117.940716', '40.954846', '承德');
INSERT INTO `longi_lati_tude` VALUES ('8', '116.395343', '39.914566', '北京市');
INSERT INTO `longi_lati_tude` VALUES ('9', '117.204824', '39.130902', '天津市');
INSERT INTO `longi_lati_tude` VALUES ('10', '114.518819', '38.033399', '石家庄');
INSERT INTO `longi_lati_tude` VALUES ('11', '121.436203', '37.536951', '烟台');
INSERT INTO `longi_lati_tude` VALUES ('12', '117.057646', '36.682332', '济南');
INSERT INTO `longi_lati_tude` VALUES ('13', '115.475479', '35.216355', '菏泽');
INSERT INTO `longi_lati_tude` VALUES ('14', '113.525365', '34.746939', '郑州');
INSERT INTO `longi_lati_tude` VALUES ('15', '112.495116', '33.028546', '南阳');
INSERT INTO `longi_lati_tude` VALUES ('16', '117.241619', '31.779945', '合肥');
INSERT INTO `longi_lati_tude` VALUES ('17', '119.265322', '34.564502', '连云港');
INSERT INTO `longi_lati_tude` VALUES ('18', '118.823787', '32.093727', '南京');
INSERT INTO `longi_lati_tude` VALUES ('19', '121.472997', '31.259848', '上海');
INSERT INTO `longi_lati_tude` VALUES ('20', '120.166789', '30.258877', '杭州');
INSERT INTO `longi_lati_tude` VALUES ('21', '114.298052', '30.609616', '武汉');
INSERT INTO `longi_lati_tude` VALUES ('22', '112.899857', '28.274785', '长沙');
INSERT INTO `longi_lati_tude` VALUES ('23', '115.825027', '28.664967', '南昌');
INSERT INTO `longi_lati_tude` VALUES ('24', '119.283719', '26.136446', '福州');
INSERT INTO `longi_lati_tude` VALUES ('25', '118.069497', '24.531346', '厦门');
INSERT INTO `longi_lati_tude` VALUES ('26', '121.528189', '25.018483', '台北');
INSERT INTO `longi_lati_tude` VALUES ('27', '114.905162', '25.887076', '赣州');
INSERT INTO `longi_lati_tude` VALUES ('28', '110.140262', '25.219488', '桂林');
INSERT INTO `longi_lati_tude` VALUES ('29', '108.392519', '22.871131', '南宁');
INSERT INTO `longi_lati_tude` VALUES ('30', '113.249406', '23.143637', '广州');
INSERT INTO `longi_lati_tude` VALUES ('31', '114.16927', '22.307343', '香港');
INSERT INTO `longi_lati_tude` VALUES ('32', '113.525365', '22.273099', '澳门');
INSERT INTO `longi_lati_tude` VALUES ('33', '110.342633', '21.293627', '湛江');
INSERT INTO `longi_lati_tude` VALUES ('34', '110.177057', '20.012151', '海口');
INSERT INTO `longi_lati_tude` VALUES ('35', '110.011481', '27.572092', '怀化');
INSERT INTO `longi_lati_tude` VALUES ('36', '106.515995', '29.569684', '重庆');
INSERT INTO `longi_lati_tude` VALUES ('37', '106.663173', '26.683166', '贵阳');
INSERT INTO `longi_lati_tude` VALUES ('38', '102.799741', '24.850723', '昆明');
INSERT INTO `longi_lati_tude` VALUES ('39', '100.941614', '22.819974', '普洱');
INSERT INTO `longi_lati_tude` VALUES ('40', '102.266219', '27.915844', '西昌');
INSERT INTO `longi_lati_tude` VALUES ('41', '104.03236', '30.609616', '成都');
INSERT INTO `longi_lati_tude` VALUES ('42', '110.453016', '29.150637', '张家界');
INSERT INTO `longi_lati_tude` VALUES ('43', '108.944438', '34.335887', '西安');
INSERT INTO `longi_lati_tude` VALUES ('44', '112.550308', '37.902314', '太原');
INSERT INTO `longi_lati_tude` VALUES ('45', '119.743651', '49.221953', '呼伦贝尔');
INSERT INTO `longi_lati_tude` VALUES ('46', '111.740827', '40.899029', '呼和浩特');
INSERT INTO `longi_lati_tude` VALUES ('47', '103.811592', '36.057418', '兰州');
INSERT INTO `longi_lati_tude` VALUES ('48', '101.769492', '36.637863', '西宁');
INSERT INTO `longi_lati_tude` VALUES ('49', '91.09906', '29.65007', '拉萨');
INSERT INTO `longi_lati_tude` VALUES ('50', '97.041387', '32.982039', '玉树');
INSERT INTO `longi_lati_tude` VALUES ('51', '87.621971', '43.83156', '乌鲁木齐');
INSERT INTO `longi_lati_tude` VALUES ('52', '106.27683', '38.497566', '银川');

-- ----------------------------
-- Table structure for package_info
-- ----------------------------
DROP TABLE IF EXISTS `package_info`;
CREATE TABLE `package_info` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_sname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_saddress` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_sphone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_rname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_raddress` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_rphone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_weight` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_describ` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `p_number` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `p_state` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '0：未揽件\r\n1：已揽件，未派发\r\n2：已派发，未接收\r\n3：已接收',
  PRIMARY KEY (`p_id`,`p_number`),
  KEY `p_sphone` (`p_sphone`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='快递信息的总表';

-- ----------------------------
-- Records of package_info
-- ----------------------------
INSERT INTO `package_info` VALUES ('1', 'liming', '辽宁省本溪市下里县', '17862822261', '大明', '河北省秦皇岛市168号', '15589654485', '日用品,服饰,药品,', '3', '2018-04-05', '东西贵重，请妥善运送。', '231456345245345', '2');
INSERT INTO `package_info` VALUES ('2', '陈飞', '山西省晋城市下里县', '17862828826', '小陈飞', '吉林省松原市168号', '17852635478', '数码产品,', '2', '2018-04-05', '东西贵重，请妥善运送。', '653456224231452', '2');
INSERT INTO `package_info` VALUES ('3', '陈飞', '山西省晋城市下里县', '17862828826', '小陈飞', '吉林省松原市168号', '17852635478', '数码产品,', '2', '2018-04-05', '东西贵重，请妥善运送。', '154789563245785', '2');
INSERT INTO `package_info` VALUES ('5', '陈飞', '山西省晋城市下里县', '17862828826', '小陈飞', '吉林省松原市168号', '17852635478', '数码产品,', '2', '2018-04-05', '东西贵重，请妥善运送。', '120345678542130', '2');
INSERT INTO `package_info` VALUES ('7', '丽萨', '吉林省通化市186号', '17856238954', '李龙', '辽宁省营口市145号', '15578461325', '数码产品,', '3', '2018-04-05', '速运', '102015146382574', '2');
INSERT INTO `package_info` VALUES ('8', 'aaa', '辽宁省锦州市555', '17865955626', 'asdw', '山西省晋城市666', '15546231548', '日用品,', '2', '2018-04-05', '没话说', '958753544273332', '1');
INSERT INTO `package_info` VALUES ('9', '刘军', '辽宁省锦州市555', '17865955626', 'bb', '山西省晋城市666', '15546231548', '日用品,', '2', '2018-04-05', '没话说', '052987304622434', '0');
INSERT INTO `package_info` VALUES ('10', 'ccc', '辽宁省锦州市555', '17865955626', 'kk', '山西省晋城市666', '15546231548', '日用品,', '2', '2018-04-05', '没话说', '756088565697905', '0');
INSERT INTO `package_info` VALUES ('11', 'ddd', '辽宁省锦州市555', '17865955626', 'pp', '山西省晋城市666', '15546231548', '日用品,', '2', '2018-04-05', '没话说', '180666211004825', '0');
INSERT INTO `package_info` VALUES ('12', 'eee', '辽宁省锦州市555', '17865955626', 'bb', '山西省晋城市666', '15546231548', '日用品,', '2', '2018-04-05', '没话说', '819039803254188', '0');
INSERT INTO `package_info` VALUES ('13', 'fff', '辽宁省锦州市555', '17865955626', 'bb', '山西省晋城市666', '15546231548', '日用品,', '2', '2018-04-05', '没话说', '456026977144211', '2');
INSERT INTO `package_info` VALUES ('14', 'hhh', '山西省阳泉市155', '18789926662', 'lomibi', '山西省朔州市178', '15546798263', '药品,', '4', '2018-04-05', '轻拿轻放', '114202567211890', '0');
INSERT INTO `package_info` VALUES ('15', '蔡木宇', '吉林省辽源市155号', '17856234875', '丽萨', '山西省朔州市186号', '15564987542', '文件,日用品,', '3', '2018-04-06', '定情信物', '543260841394037', '0');
INSERT INTO `package_info` VALUES ('17', 'aaa', '吉林省松原市12312', '1785689526', 'long', '河北省秦皇岛市2323', '1554679823', '数码产品,日用品,', '3', '2018-04-09', 'sdfsdfasdf', '586538444164426', '1');

-- ----------------------------
-- Table structure for provinces
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provinceid` varchar(20) NOT NULL,
  `province` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='省份信息表';

-- ----------------------------
-- Records of provinces
-- ----------------------------
INSERT INTO `provinces` VALUES ('1', '110000', '北京市');
INSERT INTO `provinces` VALUES ('2', '120000', '天津市');
INSERT INTO `provinces` VALUES ('3', '130000', '河北省');
INSERT INTO `provinces` VALUES ('4', '140000', '山西省');
INSERT INTO `provinces` VALUES ('5', '150000', '内蒙古自治区');
INSERT INTO `provinces` VALUES ('6', '210000', '辽宁省');
INSERT INTO `provinces` VALUES ('7', '220000', '吉林省');
INSERT INTO `provinces` VALUES ('8', '230000', '黑龙江省');
INSERT INTO `provinces` VALUES ('9', '310000', '上海市');
INSERT INTO `provinces` VALUES ('10', '320000', '江苏省');
INSERT INTO `provinces` VALUES ('11', '330000', '浙江省');
INSERT INTO `provinces` VALUES ('12', '340000', '安徽省');
INSERT INTO `provinces` VALUES ('13', '350000', '福建省');
INSERT INTO `provinces` VALUES ('14', '360000', '江西省');
INSERT INTO `provinces` VALUES ('15', '370000', '山东省');
INSERT INTO `provinces` VALUES ('16', '410000', '河南省');
INSERT INTO `provinces` VALUES ('17', '420000', '湖北省');
INSERT INTO `provinces` VALUES ('18', '430000', '湖南省');
INSERT INTO `provinces` VALUES ('19', '440000', '广东省');
INSERT INTO `provinces` VALUES ('20', '450000', '广西壮族自治区');
INSERT INTO `provinces` VALUES ('21', '460000', '海南省');
INSERT INTO `provinces` VALUES ('22', '500000', '重庆市');
INSERT INTO `provinces` VALUES ('23', '510000', '四川省');
INSERT INTO `provinces` VALUES ('24', '520000', '贵州省');
INSERT INTO `provinces` VALUES ('25', '530000', '云南省');
INSERT INTO `provinces` VALUES ('26', '540000', '西藏自治区');
INSERT INTO `provinces` VALUES ('27', '610000', '陕西省');
INSERT INTO `provinces` VALUES ('28', '620000', '甘肃省');
INSERT INTO `provinces` VALUES ('29', '630000', '青海省');
INSERT INTO `provinces` VALUES ('30', '640000', '宁夏回族自治区');
INSERT INTO `provinces` VALUES ('31', '650000', '新疆维吾尔自治区');
INSERT INTO `provinces` VALUES ('32', '710000', '台湾省');
INSERT INTO `provinces` VALUES ('33', '810000', '香港特别行政区');
INSERT INTO `provinces` VALUES ('34', '820000', '澳门特别行政区');

-- ----------------------------
-- Table structure for rate_table
-- ----------------------------
DROP TABLE IF EXISTS `rate_table`;
CREATE TABLE `rate_table` (
  `cash_id` int(11) NOT NULL AUTO_INCREMENT,
  `start_cash` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `end_cash` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cash_rate` double(10,4) DEFAULT NULL,
  PRIMARY KEY (`cash_id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='汇率信息表';

-- ----------------------------
-- Records of rate_table
-- ----------------------------
INSERT INTO `rate_table` VALUES ('1', 'rmb', 'dollor', '0.1593');
INSERT INTO `rate_table` VALUES ('2', 'rmb', 'eur', '0.1291');
INSERT INTO `rate_table` VALUES ('3', 'rmb', 'jpy', '16.9196');
INSERT INTO `rate_table` VALUES ('4', 'rmb', 'hkd', '1.2493');
INSERT INTO `rate_table` VALUES ('5', 'rmb', 'krw', '167.6700');
INSERT INTO `rate_table` VALUES ('6', 'rmb', 'gbp', '0.1132');
INSERT INTO `rate_table` VALUES ('7', 'dollor', 'rmb', '6.2821');
INSERT INTO `rate_table` VALUES ('8', 'dollor', 'eur', '0.8110');
INSERT INTO `rate_table` VALUES ('9', 'dollor', 'jpy', '106.2850');
INSERT INTO `rate_table` VALUES ('10', 'dollor', 'hkd', '7.8481');
INSERT INTO `rate_table` VALUES ('11', 'dollor', 'krw', '1053.3200');
INSERT INTO `rate_table` VALUES ('12', 'dollor', 'gbp', '0.7109');
INSERT INTO `rate_table` VALUES ('13', 'eur', 'rmb', '7.7449');
INSERT INTO `rate_table` VALUES ('14', 'eur', 'dollor', '1.2330');
INSERT INTO `rate_table` VALUES ('15', 'eur', 'gbp', '0.8765');
INSERT INTO `rate_table` VALUES ('16', 'eur', 'krw', '1298.6900');
INSERT INTO `rate_table` VALUES ('17', 'eur', 'hkd', '9.6761');
INSERT INTO `rate_table` VALUES ('18', 'eur', 'jpy', '131.0390');
INSERT INTO `rate_table` VALUES ('19', 'gbp', 'eur', '1.1409');
INSERT INTO `rate_table` VALUES ('20', 'gbp', 'jpy', '149.5100');
INSERT INTO `rate_table` VALUES ('21', 'gbp', 'hkd', '11.0395');
INSERT INTO `rate_table` VALUES ('22', 'gbp', 'krw', '1482.2972');
INSERT INTO `rate_table` VALUES ('23', 'gbp', 'rmb', '8.8337');
INSERT INTO `rate_table` VALUES ('24', 'gbp', 'dollor', '1.4067');
INSERT INTO `rate_table` VALUES ('25', 'krw', 'gbp', '0.0007');
INSERT INTO `rate_table` VALUES ('26', 'krw', 'dollor', '0.0009');
INSERT INTO `rate_table` VALUES ('27', 'krw', 'eur', '0.0008');
INSERT INTO `rate_table` VALUES ('28', 'krw', 'hkd', '0.0074');
INSERT INTO `rate_table` VALUES ('29', 'krw', 'jpy', '0.1009');
INSERT INTO `rate_table` VALUES ('30', 'krw', 'rmb', '0.0060');
INSERT INTO `rate_table` VALUES ('31', 'hkd', 'rmb', '0.8005');
INSERT INTO `rate_table` VALUES ('32', 'hkd', 'jpy', '13.5453');
INSERT INTO `rate_table` VALUES ('33', 'hkd', 'krw', '134.2666');
INSERT INTO `rate_table` VALUES ('34', 'hkd', 'eur', '0.1033');
INSERT INTO `rate_table` VALUES ('35', 'hkd', 'dollor', '0.1274');
INSERT INTO `rate_table` VALUES ('36', 'hkd', 'gbp', '0.0906');
INSERT INTO `rate_table` VALUES ('37', 'jpy', 'gbp', '0.0067');
INSERT INTO `rate_table` VALUES ('38', 'jpy', 'hkd', '0.0738');
INSERT INTO `rate_table` VALUES ('39', 'jpy', 'dollor', '0.0094');
INSERT INTO `rate_table` VALUES ('40', 'jpy', 'eur', '0.0076');
INSERT INTO `rate_table` VALUES ('41', 'jpy', 'krw', '9.9136');
INSERT INTO `rate_table` VALUES ('42', 'jpy', 'rmb', '0.0591');

-- ----------------------------
-- Table structure for users_table
-- ----------------------------
DROP TABLE IF EXISTS `users_table`;
CREATE TABLE `users_table` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `employee_number` double(15,0) DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imgurl` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`u_id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='管理员信息表';

-- ----------------------------
-- Records of users_table
-- ----------------------------
INSERT INTO `users_table` VALUES ('1', 'huolong', '1234', '100000', '123737883123', '14023391@qq.com', '山东省菏泽市', 'E:\\PMS\\WorkSpace\\files\\007.jpg');
INSERT INTO `users_table` VALUES ('2', 'huoshenglong', '1111', '100001', '17862822261', '16462626@163.com', '山东省济南市', 'E:\\PMS\\WorkSpace\\files\\mmexport1511067553342.jpg');
