package com.example.demo.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration

public class WebConfig implements WebMvcConfigurer {

	/*@Override
	public void addInterceptors(InterceptorRegistry registry) {
		System.out.println("-------------->进来了");
		//添加拦截器
		registry.addInterceptor(new JwtInterceptor()).excludePathPatterns("/login","/error");//放掉某些特定不需要校验token的路由
	}*/
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new JwtInterceptor())
		//因为我们的静态文件都是放在static文件夹下面的  但是我们去访问这些静态资源的时候 在url中是不会通过/static请求的  而是直接通过/css 
		//或者是  /js   访问 因此我们需要做的就是将这些拦截排除掉  和/static是没有关系的
		.excludePathPatterns("/login","/pdf","/ins","/loginSubmit","/loginFixSubmit","/error","/css/**", "/js/**","/image/**");
	}

	/**
	 * 添加静态资源文件，外部可以直接访问地址
	 * @param registry
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		//其他静态资源，与本文关系不大
		registry.addResourceHandler("/upload/**").addResourceLocations("file:"/*+ TaleUtils.getUplodFilePath()+"upload/"*/);

		//需要配置1：----------- 需要告知系统，这是要被当成静态文件的！
		//第一个方法设置访问路径前缀，第二个方法设置资源路径
		registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
	}

	/*@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		//registry.addViewController("/error/404").setViewName("/admin/page_error/error_404.html");
	}*/
	/**
     * 以前要访问一个页面需要先创建个Controller控制类，再写方法跳转到页面
     * 在这里配置后就不需要那么麻烦了，直接访问http://localhost:8080/toLogin就跳转到login.jsp页面了
     * @param registry
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/toLogin").setViewName("login");
        //super.addViewControllers(registry);
    }
}

