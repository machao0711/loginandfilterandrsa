package com.example.demo.arithmetic;
//递归算法
public class Recursion {

	public static void main(String[] args) {
		int n=getZhiShu(101,0);
		System.out.println("final-->"+n);
	}
	//判断101到200之间有多少质数，并输出
	public static int getZhiShu(int n,int begin) {
		//System.out.println("现在是"+n);
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
						//getZhiShu(n+1,begin);
					}
				}
			}
		}
		if(n==200) {
			return begin;
		}else {
			return getZhiShu(n+1,begin);
		}
	}

}
