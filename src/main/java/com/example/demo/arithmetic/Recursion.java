package com.example.demo.arithmetic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//递归算法
public class Recursion {

	public static void main(String[] args) {
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("begin", 0);
		map.put("zhishu", new ArrayList<Integer>());
		Map<String,Object> map_s=getZhiShu(101,map);
		System.out.println("final-->"+map_s);
	}
	//判断101到200之间有多少质数，并输出
	public static Map<String,Object> getZhiShu(int n,Map<String,Object> map) {
		//System.out.println("现在是"+n);
		int begin=Integer.parseInt(map.get("begin").toString());
		int max=200;
		if(n<=max) {
			for(int i=2;i<n;i++) {
				if(n%i==0) {
					//getZhiShu(n+1,begin);   
					break;
				}else {
					if(i==n-1) {
						System.out.println("质数是"+n);
						begin++;
						map.put("begin", begin);
						@SuppressWarnings("unchecked")
						List<Integer> list=(List<Integer>) map.get("zhishu");
						list.add(n);
						//getZhiShu(n+1,begin);
					}
				}
			}
		}
		if(n==200) {
			return map;
		}else {
			return getZhiShu(n+1,map);
		}
	}

}
