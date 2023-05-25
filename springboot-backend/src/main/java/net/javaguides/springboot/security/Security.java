package net.javaguides.springboot.security;

/*
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

//@EnableWebSecurity
//@Configuration
public class Security  {

  // @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
       httpSecurity.formLogin();
       httpSecurity.authorizeHttpRequests().anyRequest().authenticated();
       return  httpSecurity.build();
   }
  //@Bean
   public InMemoryUserDetailsManager inMemoryUserDetailsManager() throws Exception {
      return new InMemoryUserDetailsManager(User.withUsername("oussama")
              .password("{noop}1234")
              .roles("ADMIN").build());


   }


}


 */




