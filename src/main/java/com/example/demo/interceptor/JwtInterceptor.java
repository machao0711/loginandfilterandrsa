package com.example.demo.interceptor;

import io.jsonwebtoken.Claims;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.example.demo.jwt.JwtUtil;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;


public class JwtInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String basePath = request.getContextPath();  
		String path = request.getRequestURI();  
		System.out.println(basePath);
		System.out.println(path);

		String authHeader = request.getHeader("Authorization");

		if (authHeader == null || !authHeader.startsWith("Bearer:")) {

			throw new RuntimeException("用户未登录");

		}
		//取得token
		String token = authHeader.substring(7);
      
		//验证token

		Claims claims = JwtUtil.checkToken(token);

		request.setAttribute("username",claims.getSubject());

		return true;

	}
}
