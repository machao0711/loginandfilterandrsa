package com.example.demo.jwt;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import io.jsonwebtoken.*;

public class JwtUtil {
	final static String base64EncodedSecretKey = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJx37TNNj0af3iKqRAlOXFicScJ4WwuSTRruGgC+LYHvhXMNVXfEfRk71GRe+jVKAIH67NsRZ2uBCTNOrKN9O2A6C67c6eRXEgwkXfiJtyFNjQtYcbGrWbaAsa5VWquW7Uu11XRfvGj/nNzwyv7jq95ZvzqRKmp7qs4Cbr1ZajkbAgMBAAECgYAHp349EkA+DjgJrhah9elilFKvZr/dcwy+koNHIgaL4rG+jRpvP3d3MowTVOocjUA1G5dWqCVNBwTyM5kSbl/nIxSCYwdUoDid4r0JbqkXkTTsIq3euHG8eiWr9rr3SDmwDojWoJEc4liVlfme8dQuMfgxe1QKq7wTrJwCKwbeMQJBAPwpknRPRK8W9hefbbtEu8mlbzUy+ER8Puq6dvS+lnWzJ8n2chJcHRYQFwWpjl4+SZuKeEcDmYmuQ7xuqEIayO0CQQCe2YeaxcU4uuDC45RAwCcMaNw1nDJuA+Gi47lXbroBXoeOiNZunViSZVUgDgrV/Ku6V54TaZIzZ21QFjf7mXEnAkEA7dZwMpAJonOvzfwrzbQ4wyrsx2q5zC68UT1qsdGJrJ48azutwC9tp7+pV0fj5nQtjS1/4Ms+aCQb84ET5rXIyQJAM0m45tgEHZT5DPO94kooUXFp6EVOYwcNyzILnZc6p0aGLhcwZPaYqmvdWEQwa3bxW3D+sPXdJou2V61U1f9s8QJALccvYwwWlCTq1iTmegYk9fOoc+isZKH+Z0YW70kFi94AYEO+utYwmXBEAqQ5VC/bywa1O71xdL4/RGCOSxBf2A==";//私钥
	final static long TOKEN_EXP = 1000 * 60 * 10;//过期时间,测试使用十分钟

	public static String getToken(String userName) {
		//创建payload的私有声明（根据特定的业务需要添加，如果要拿这个做验证，一般是需要和jwt的接收方提前沟通好验证方式的）
		Map<String,Object> claims = new HashMap<String,Object>();
		claims.put("uid", "DSSFAWDWADAS...");
		claims.put("user_name", "admin");
		claims.put("nick_name","DASDA121");
		String str=Jwts.builder().setSubject(userName)
				//.claim("roles", "user") 
				.setClaims(claims)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXP)) /*过期时间*/
				.signWith(SignatureAlgorithm.HS256, base64EncodedSecretKey)
				.compact();
		return str;
	}
	/**
	 * 检查token,只要不正确就会抛出异常
	 **/

	public static Claims checkToken(String token) throws ServletException {
		try{
			final Claims claims = Jwts.parser().setSigningKey(base64EncodedSecretKey).parseClaimsJws(token).getBody();
			return claims;
		} catch (ExpiredJwtException e1) {
			throw new RuntimeException("登录信息过期，请重新登录");
		} catch (Exception e) {
			throw new RuntimeException("用户未登录，请重新登录");
		}

	}

}


