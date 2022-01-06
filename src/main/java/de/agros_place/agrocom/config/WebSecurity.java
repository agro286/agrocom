package de.agros_place.agrocom.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class WebSecurity extends WebSecurityConfigurerAdapter {

  @Override
  public void configure(HttpSecurity http) throws Exception {
    http.cors().and()
      .csrf().disable()
      .authorizeRequests().antMatchers("/rest/**").permitAll();
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(List.of("http://localhost:3000"));
    configuration.setAllowCredentials(true);
    configuration.setAllowedHeaders(
      List.of("Access-Control-Allow-Headers", "Access-Control-Allow-Origin", "Access-Control-AllowRequest-Method",
        "Access-Control-Request-Headers", "Origin", "Cache-Control", "Content-Type", "Authorization")
    );
    configuration.setExposedHeaders(
      List.of("Access-Control-Allow-Origin", "Cache-Control", "ContentType", "Authorization"));
    configuration.setAllowedMethods(List.of("DELETE", "GET", "POST", "PATCH", "PUT"));
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);

    return source;
  }
}
