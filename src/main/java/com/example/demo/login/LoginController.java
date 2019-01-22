package com.example.demo.login;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.RSA.RSAUtils;
import com.example.demo.jwt.JwtUtil;


@Controller
public class LoginController {
	@RequestMapping(value = "/login" ,method = RequestMethod.GET)
	public ModelAndView index(Model model, HttpServletRequest request,HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/login/login");
		/*String publicKey=RSANewUtil.createRSAKeys().get(RSANewUtil.PUBLIC_KEY_NAME);
		String privateKey=RSANewUtil.createRSAKeys().get(RSANewUtil.PRIVATE_KEY_NAME);*/
		Map<String, Object> keyMap=RSAUtils.genKeyPair();
		String publicKey=RSAUtils.getPublicKey(keyMap);
		String privateKey=RSAUtils.getPrivateKey(keyMap);
		request.getSession().setAttribute("publicKey",publicKey);  
		request.getSession().setAttribute("privateKey",privateKey);  
		return mv;
	}
	//这个不能用
	@RequestMapping(value = "/loginSubmit" ,method = RequestMethod.POST)
	public ModelAndView loginSubmit(@RequestBody Map<String,Object> map) throws Exception{
		String PRIVATEKEY = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJx37TNNj0af3iKqRAlOXFicScJ4WwuSTRruGgC+LYHvhXMNVXfEfRk71GRe+jVKAIH67NsRZ2uBCTNOrKN9O2A6C67c6eRXEgwkXfiJtyFNjQtYcbGrWbaAsa5VWquW7Uu11XRfvGj/nNzwyv7jq95ZvzqRKmp7qs4Cbr1ZajkbAgMBAAECgYAHp349EkA+DjgJrhah9elilFKvZr/dcwy+koNHIgaL4rG+jRpvP3d3MowTVOocjUA1G5dWqCVNBwTyM5kSbl/nIxSCYwdUoDid4r0JbqkXkTTsIq3euHG8eiWr9rr3SDmwDojWoJEc4liVlfme8dQuMfgxe1QKq7wTrJwCKwbeMQJBAPwpknRPRK8W9hefbbtEu8mlbzUy+ER8Puq6dvS+lnWzJ8n2chJcHRYQFwWpjl4+SZuKeEcDmYmuQ7xuqEIayO0CQQCe2YeaxcU4uuDC45RAwCcMaNw1nDJuA+Gi47lXbroBXoeOiNZunViSZVUgDgrV/Ku6V54TaZIzZ21QFjf7mXEnAkEA7dZwMpAJonOvzfwrzbQ4wyrsx2q5zC68UT1qsdGJrJ48azutwC9tp7+pV0fj5nQtjS1/4Ms+aCQb84ET5rXIyQJAM0m45tgEHZT5DPO94kooUXFp6EVOYwcNyzILnZc6p0aGLhcwZPaYqmvdWEQwa3bxW3D+sPXdJou2V61U1f9s8QJALccvYwwWlCTq1iTmegYk9fOoc+isZKH+Z0YW70kFi94AYEO+utYwmXBEAqQ5VC/bywa1O71xdL4/RGCOSxBf2A==";
		String entryUsername=map.get("entryUsername").toString();
		/*System.out.println(session.getAttribute("privateKey").toString());*/
		String username=RSAUtils.decryptDataOnJava(entryUsername, PRIVATEKEY);
		ModelAndView mv =test();
		mv.addObject("token",JwtUtil.getToken(username));
		return mv;
	}
	@ResponseBody
	@RequestMapping("/loginFixSubmit")
	public Map<String,Object> loginFixSubmit(@RequestBody Map<String,Object> map,HttpSession session) throws Exception{
		@SuppressWarnings("unused")
		String PUBLICKEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcd+0zTY9Gn94iqkQJTlxYnEnCeFsLkk0a7hoAvi2B74VzDVV3xH0ZO9RkXvo1SgCB+uzbEWdrgQkzTqyjfTtgOguu3OnkVxIMJF34ibchTY0LWHGxq1m2gLGuVVqrlu1LtdV0X7xo/5zc8Mr+46veWb86kSpqe6rOAm69WWo5GwIDAQAB";
		String PRIVATEKEY = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJx37TNNj0af3iKqRAlOXFicScJ4WwuSTRruGgC+LYHvhXMNVXfEfRk71GRe+jVKAIH67NsRZ2uBCTNOrKN9O2A6C67c6eRXEgwkXfiJtyFNjQtYcbGrWbaAsa5VWquW7Uu11XRfvGj/nNzwyv7jq95ZvzqRKmp7qs4Cbr1ZajkbAgMBAAECgYAHp349EkA+DjgJrhah9elilFKvZr/dcwy+koNHIgaL4rG+jRpvP3d3MowTVOocjUA1G5dWqCVNBwTyM5kSbl/nIxSCYwdUoDid4r0JbqkXkTTsIq3euHG8eiWr9rr3SDmwDojWoJEc4liVlfme8dQuMfgxe1QKq7wTrJwCKwbeMQJBAPwpknRPRK8W9hefbbtEu8mlbzUy+ER8Puq6dvS+lnWzJ8n2chJcHRYQFwWpjl4+SZuKeEcDmYmuQ7xuqEIayO0CQQCe2YeaxcU4uuDC45RAwCcMaNw1nDJuA+Gi47lXbroBXoeOiNZunViSZVUgDgrV/Ku6V54TaZIzZ21QFjf7mXEnAkEA7dZwMpAJonOvzfwrzbQ4wyrsx2q5zC68UT1qsdGJrJ48azutwC9tp7+pV0fj5nQtjS1/4Ms+aCQb84ET5rXIyQJAM0m45tgEHZT5DPO94kooUXFp6EVOYwcNyzILnZc6p0aGLhcwZPaYqmvdWEQwa3bxW3D+sPXdJou2V61U1f9s8QJALccvYwwWlCTq1iTmegYk9fOoc+isZKH+Z0YW70kFi94AYEO+utYwmXBEAqQ5VC/bywa1O71xdL4/RGCOSxBf2A==";
		String entryUsername=map.get("entryUsername").toString();
		String entryPassword=map.get("entryPassword").toString();
		String username=RSAUtils.decryptDataOnJava(entryUsername, PRIVATEKEY);
		String password=RSAUtils.decryptDataOnJava(entryPassword, PRIVATEKEY);
		System.out.println("---------->"+username);
		System.out.println("---------->"+password);
		Map<String,Object> map_s=new HashMap<>();
		map_s.put("username", username);
		map_s.put("password", password);
		map_s.put("token", JwtUtil.getToken(username));
		return map_s;
	}
	@RequestMapping(value = "/test" ,method = RequestMethod.GET)
	public ModelAndView test() throws Exception {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("test/test");
		return mv;
		/*return new ModelAndView("redirect:/test/test");*/
	}

}

